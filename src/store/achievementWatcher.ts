import { router } from "expo-router";
import { useEffect } from "react";
import { toast } from "@/components/Toast";
import { newlyUnlocked, type AchievementStats } from "@/lib/achievements";
import { missionsFor, weekDays, weekKey } from "@/lib/challenges";
import { haptic } from "@/lib/haptics";
import { useLibrary } from "./library";
import { useNotebooks } from "./notebooks";
import { useProgress } from "./progress";
import { useReview } from "./review";
import { useSettings } from "./settings";

/** Snapshot of everything achievements look at. */
export function collectStats(): AchievementStats {
  const p = useProgress.getState();
  const goal = useSettings.getState().dailyGoal;
  const days = Object.values(p.log);
  const total = (k: "studied" | "seconds" | "reviews" | "exams" | "focus") => days.reduce((n, d) => n + d[k], 0);
  const topics = new Set(days.flatMap((d) => Object.entries(d.topics).filter(([, t]) => t.studied > 0).map(([id]) => id)));
  return {
    studied: total("studied"),
    bestStreak: p.bestStreak,
    goalDays: Object.values(p.days).filter((n) => n >= goal).length,
    exams: total("exams"),
    perfectExam: Object.values(p.examBest).some((s) => s >= 100),
    correct: useLibrary.getState().quiz.correct,
    reviews: total("reviews"),
    notebooks: Object.keys(useNotebooks.getState().notebooks).length,
    notes: Object.keys(useNotebooks.getState().notes).length,
    imported: useLibrary.getState().customItems.length,
    topicsStudied: topics.size,
    focus: total("focus"),
    challenges: Object.values(p.challenges).filter((ids) => ids.includes("all")).length,
    minutes: Math.floor(total("seconds") / 60),
  };
}

function evaluate() {
  const p = useProgress.getState();

  // Weekly missions: celebrate each one once, and the whole week when all three are done.
  const week = weekKey();
  const keys = weekDays(week);
  const goal = useSettings.getState().dailyGoal;
  const done = new Set(p.challenges[week] ?? []);
  const missions = missionsFor(week);
  const fresh = missions.filter((m) => !done.has(m.id) && m.measure(p.log, p.days, goal, keys) >= m.target);
  if (fresh.length) {
    fresh.forEach((m) => done.add(m.id));
    const all = missions.every((m) => done.has(m.id));
    if (all) done.add("all");
    useProgress.setState({ challenges: { ...p.challenges, [week]: [...done] } });
    haptic.success();
    toast({
      message: all ? "Desafio da semana completo! 🏅" : `Missão concluída: ${fresh[0].label}`,
      icon: all ? "medal" : "flag-checkered",
      tone: "success",
    });
  }

  const unlocked = newlyUnlocked(collectStats(), useProgress.getState().achievements);
  if (unlocked.length) {
    const now = Date.now();
    useProgress.setState((s) => ({ achievements: { ...s.achievements, ...Object.fromEntries(unlocked.map((a) => [a.id, now])) } }));
    haptic.success();
    toast({
      message: unlocked.length === 1 ? `Conquista: ${unlocked[0].title}` : `${unlocked.length} conquistas desbloqueadas`,
      icon: "trophy",
      tone: "success",
      action: { label: "Ver", onPress: () => router.push("/achievements") },
    });
  }
}

/** Re-checks achievements and weekly missions shortly after any progress change. */
export function useAchievementWatcher(enabled: boolean) {
  useEffect(() => {
    if (!enabled) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const schedule = () => {
      clearTimeout(timer);
      timer = setTimeout(evaluate, 600);
    };
    const unsubs = [useProgress, useLibrary, useReview, useNotebooks].map((store) => (store as { subscribe: (cb: () => void) => () => void }).subscribe(schedule));
    schedule();
    return () => {
      clearTimeout(timer);
      unsubs.forEach((u) => u());
    };
  }, [enabled]);
}
