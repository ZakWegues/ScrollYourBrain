export type XpEvent = "study" | "correct" | "review" | "like" | "save" | "goal" | "exam" | "focus" | "streak" | "daily";

export const XP_FOR: Record<XpEvent, number> = {
  study: 5,
  correct: 10,
  review: 8,
  like: 2,
  save: 3,
  goal: 50,
  exam: 30,
  focus: 40,
  streak: 20,
  daily: 15,
};

/** Total XP needed to reach a level: 0, 100, 300, 600, 1000, … (gentle quadratic curve). */
export const xpForLevel = (level: number) => 50 * (level - 1) * level;

export function levelInfo(xp: number) {
  let level = 1;
  while (xp >= xpForLevel(level + 1)) level++;
  const base = xpForLevel(level);
  const next = xpForLevel(level + 1);
  return { level, xpIntoLevel: xp - base, xpToNext: next - xp, progress: (xp - base) / (next - base) };
}

export interface Reward {
  level: number;
  kind: "theme" | "title" | "icon";
  id: string;
  label: string;
}

/** What each level unlocks. Themes not listed here are always available. */
export const REWARDS: Reward[] = [
  { level: 2, kind: "title", id: "curioso", label: "Título: Curioso" },
  { level: 3, kind: "theme", id: "aurora", label: "Tema Aurora" },
  { level: 4, kind: "title", id: "estudante", label: "Título: Estudante" },
  { level: 4, kind: "icon", id: "neon", label: "Ícone Néon" },
  { level: 5, kind: "theme", id: "espaco", label: "Tema Espaço" },
  { level: 6, kind: "title", id: "dedicado", label: "Título: Dedicado" },
  { level: 6, kind: "icon", id: "aurora", label: "Ícone Aurora" },
  { level: 7, kind: "theme", id: "oceano", label: "Tema Oceano" },
  { level: 8, kind: "icon", id: "espaco", label: "Ícone Espaço" },
  { level: 9, kind: "title", id: "mestre", label: "Título: Mestre" },
  { level: 10, kind: "icon", id: "ouro", label: "Ícone Ouro" },
  { level: 12, kind: "title", id: "lenda", label: "Título: Lenda" },
];

export const TITLES: { level: number; title: string }[] = [
  { level: 1, title: "Calouro" },
  { level: 2, title: "Curioso" },
  { level: 4, title: "Estudante" },
  { level: 6, title: "Dedicado" },
  { level: 9, title: "Mestre" },
  { level: 12, title: "Lenda" },
];

export const titleFor = (level: number) => [...TITLES].reverse().find((t) => level >= t.level)!.title;

/** Level needed to use a theme (1 = always free). */
export const themeLevel = (themeId: string) => REWARDS.find((r) => r.kind === "theme" && r.id === themeId)?.level ?? 1;

export const iconLevel = (iconId: string) => REWARDS.find((r) => r.kind === "icon" && r.id === iconId)?.level ?? 1;

export const rewardsBetween = (fromLevel: number, toLevel: number) => REWARDS.filter((r) => r.level > fromLevel && r.level <= toLevel);

/**
 * Mastery of an account from 0 to 100: mostly accuracy (weighted by how many questions back it up),
 * plus a little for volume of cards studied.
 */
export function mastery(t: { studied: number; answered: number; correct: number }): number {
  const accuracy = t.answered ? t.correct / t.answered : 0;
  const confidence = Math.min(1, t.answered / 15);
  const volume = Math.min(1, t.studied / 40);
  return Math.round(100 * (0.75 * accuracy * confidence + 0.25 * volume));
}
