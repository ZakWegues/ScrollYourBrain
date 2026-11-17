import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StudyItem } from "@/feed/types";
import { bump, type ActivityLog, type Counter } from "@/lib/stats";
import { mastery, masteryLevel, masteryName, XP_FOR } from "@/lib/xp";
import { getPage, PAGE_BY_ID } from "@/data/pages";
import { haptic } from "@/lib/haptics";
import { toast } from "@/components/Toast";
import { openToday } from "./todaySheet";
import { currentStreak, dayKey } from "@/lib/streak";
import { useLibrary } from "./library";
import { useMistakes } from "./mistakes";
import { useSeen } from "./seen";
import { awardXp } from "./xp";
import { persistStorage } from "./storage";
import { useSettings } from "./settings";

interface ProgressState {
  /** Cards studied per local day. */
  days: Record<string, number>;
  bestStreak: number;
  /** Day on which the "goal reached" celebration was last shown. */
  celebratedOn?: string;
  /** Best exam score (0–100) per page id, or "all". */
  examBest: Record<string, number>;
  /** Detailed per-day activity, the source for statistics and weekly challenges. */
  log: ActivityLog;
  /** Unlocked achievement id → timestamp. */
  achievements: Record<string, number>;
  /** Week key → ids of missions already completed (and celebrated). */
  challenges: Record<string, string[]>;
  /** Counts one studied card for today. Returns true when this card completed today's goal. */
  recordStudy: (pageId?: string) => boolean;
  logEvent: (pageId: string | undefined, amounts: Partial<Record<Counter, number>>) => void;
  markCelebrated: () => void;
  recordExam: (key: string, score: number) => boolean;
  reset: () => void;
}

export const useProgress = create<ProgressState>()(
  persist(
    (set, get) => ({
      days: {},
      bestStreak: 0,
      examBest: {},
      log: {},
      achievements: {},
      challenges: {},
      recordStudy: (pageId) => {
        const today = dayKey();
        const goal = useSettings.getState().dailyGoal;
        const count = (get().days[today] ?? 0) + 1;
        const days = { ...get().days, [today]: count };
        set({ days, bestStreak: Math.max(get().bestStreak, currentStreak(days, goal)), log: bump(get().log, today, pageId, { studied: 1 }) });
        return count === goal;
      },
      logEvent: (pageId, amounts) => set({ log: bump(get().log, dayKey(), pageId, amounts) }),
      markCelebrated: () => set({ celebratedOn: dayKey() }),
      recordExam: (key, score) => {
        const best = score > (get().examBest[key] ?? -1);
        if (best) set({ examBest: { ...get().examBest, [key]: score } });
        return best;
      },
      reset: () => set({ days: {}, bestStreak: 0, celebratedOn: undefined, examBest: {}, log: {}, achievements: {}, challenges: {} }),
    }),
    {
      name: "syb-progress",
      storage: persistStorage,
      version: 2,
      // v1 only counted cards per day; seed the activity log from those counts.
      migrate: (persisted) => {
        const old = (persisted ?? {}) as { days?: Record<string, number> };
        let log: ActivityLog = {};
        for (const [day, n] of Object.entries(old.days ?? {})) log = bump(log, day, undefined, { studied: n });
        return { achievements: {}, challenges: {}, ...(persisted as object), log } as never;
      },
    },
  ),
);

/** Today's count, the goal and the live streak, re-rendering when any of them change. */
export function useToday() {
  const days = useProgress((s) => s.days);
  const goal = useSettings((s) => s.dailyGoal);
  const count = days[dayKey()] ?? 0;
  return { count, goal, streak: currentStreak(days, goal), done: count >= goal };
}

/** Drives the one-off "goal reached" overlay. */
export const useCelebration = create<{ visible: boolean; hide: () => void }>()((set) => ({
  visible: false,
  hide: () => set({ visible: false }),
}));

/** Counts a studied card and shows the celebration the first time today's goal is reached. */
export function countStudy(pageId?: string) {
  const progress = useProgress.getState();
  const reached = progress.recordStudy(pageId);
  awardXp("study");
  if (reached) {
    awardXp("goal");
    // Keeping a streak alive (2+ days in a row) is worth a bonus on top of the goal.
    if (currentStreak(useProgress.getState().days, useSettings.getState().dailyGoal) >= 2) awardXp("streak");
  }
  if (reached && progress.celebratedOn !== dayKey()) {
    progress.markCelebrated();
    useCelebration.setState({ visible: true });
  } else if (!reached && pageId !== undefined) {
    // A breather every 15 cards: how the session is going, and today's missions one tap away.
    const today = useProgress.getState().log[dayKey()];
    if (today && today.studied > 0 && today.studied % PAUSE_EVERY === 0) {
      const acc = today.answered ? ` · ${Math.round((today.correct / today.answered) * 100)}% de acerto` : "";
      toast({ message: `${today.studied} cards hoje${acc}. Que tal uma missão?`, icon: "coffee-outline", action: { label: "Seu dia", onPress: openToday } });
    }
  }
}

const PAUSE_EVERY = 15;

/** Totals of one account over the whole log. */
export function accountTotal(log: ActivityLog, pageId: string) {
  const t = { studied: 0, answered: 0, correct: 0 };
  for (const day of Object.values(log)) {
    const d = day.topics?.[pageId];
    if (!d) continue;
    t.studied += d.studied;
    t.answered += d.answered;
    t.correct += d.correct;
  }
  return t;
}

/** The last answer's reward, shown as a small chip on the feed ("+10 XP · Genética 62%"). */
export const useGain = create<{ at: number; pageId: string; xp: number; mastery: number; delta: number }>()(() => ({ at: 0, pageId: "", xp: 0, mastery: 0, delta: 0 }));

/**
 * Records an answer everywhere it matters: overall quiz stats, the per-topic log and the mistakes notebook.
 * Also updates the account's mastery and celebrates a new mastery level (unless `quiet`, e.g. during an exam).
 */
export function trackAnswer(item: StudyItem, correct: boolean, opts: { quiet?: boolean } = {}) {
  const before = mastery(accountTotal(useProgress.getState().log, item.pageId));
  useLibrary.getState().recordAnswer(correct);
  if (correct) awardXp("correct");
  useProgress.getState().logEvent(item.pageId, { answered: 1, correct: correct ? 1 : 0 });
  if (item.kind === "quiz" || item.kind === "multi" || item.kind === "open") useMistakes.getState().record(item, correct);
  useSeen.getState().markSeen(item.id);
  if (correct) useSeen.getState().markRight(item.id);
  const after = mastery(accountTotal(useProgress.getState().log, item.pageId));
  useGain.setState({ at: Date.now(), pageId: item.pageId, xp: correct ? XP_FOR.correct : 0, mastery: after, delta: after - before });
  if (!opts.quiet && masteryLevel(after) > masteryLevel(before) && PAGE_BY_ID[item.pageId]?.parent) {
    haptic.success();
    toast({ message: `${getPage(item.pageId).name} subiu para ${masteryName(after)}!`, icon: "star-shooting", tone: "success" });
  }
}

const MAX_CARD_SECONDS = 180;

/** Adds time spent on a card to today's log, capped so an idle screen does not count. */
export function trackTime(pageId: string, ms: number) {
  const seconds = Math.min(Math.round(ms / 1000), MAX_CARD_SECONDS);
  if (seconds > 0) useProgress.getState().logEvent(pageId, { seconds });
}
