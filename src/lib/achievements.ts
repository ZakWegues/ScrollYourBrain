/** Everything an achievement can look at, gathered from the stores. */
export interface AchievementStats {
  studied: number;
  bestStreak: number;
  goalDays: number;
  exams: number;
  perfectExam: boolean;
  correct: number;
  reviews: number;
  notebooks: number;
  notes: number;
  imported: number;
  topicsStudied: number;
  focus: number;
  challenges: number;
  minutes: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  progress: (s: AchievementStats) => [current: number, target: number];
}

const count = (key: keyof AchievementStats, target: number) => (s: AchievementStats): [number, number] => [Math.min(Number(s[key]), target), target];

export const ACHIEVEMENTS: Achievement[] = [
  { id: "first-card", title: "Primeiro passo", description: "Estude seu primeiro card", icon: "shoe-print", color: "#22D3EE", progress: count("studied", 1) },
  { id: "cards-100", title: "Centena", description: "Estude 100 cards", icon: "numeric", color: "#8B5CF6", progress: count("studied", 100) },
  { id: "cards-500", title: "Maratonista", description: "Estude 500 cards", icon: "run-fast", color: "#A855F7", progress: count("studied", 500) },
  { id: "goal-1", title: "Meta batida", description: "Bata sua meta diária pela primeira vez", icon: "flag-checkered", color: "#34D399", progress: count("goalDays", 1) },
  { id: "streak-3", title: "Aquecendo", description: "Mantenha 3 dias seguidos", icon: "fire", color: "#FB923C", progress: count("bestStreak", 3) },
  { id: "streak-7", title: "Semana perfeita", description: "Mantenha 7 dias seguidos", icon: "fire-circle", color: "#F97316", progress: count("bestStreak", 7) },
  { id: "streak-30", title: "Imparável", description: "Mantenha 30 dias seguidos", icon: "rocket-launch", color: "#EF4444", progress: count("bestStreak", 30) },
  { id: "exam-1", title: "Primeira prova", description: "Termine uma prova", icon: "timer-outline", color: "#0EA5E9", progress: count("exams", 1) },
  { id: "exam-100", title: "Gabaritou", description: "Tire 100% em uma prova", icon: "trophy", color: "#FBBF24", progress: (s) => [s.perfectExam ? 1 : 0, 1] },
  { id: "correct-50", title: "Na mosca", description: "Acerte 50 quizzes", icon: "target", color: "#F43F5E", progress: count("correct", 50) },
  { id: "review-50", title: "Memória de elefante", description: "Faça 50 revisões", icon: "elephant", color: "#64748B", progress: count("reviews", 50) },
  { id: "notebook-1", title: "Organizado", description: "Crie um caderno", icon: "notebook-outline", color: "#14B8A6", progress: count("notebooks", 1) },
  { id: "notes-10", title: "Anotador", description: "Escreva 10 anotações", icon: "note-edit-outline", color: "#22C55E", progress: count("notes", 10) },
  { id: "import-1", title: "Matéria própria", description: "Importe seus próprios cards", icon: "tray-arrow-down", color: "#3B82F6", progress: count("imported", 1) },
  { id: "topics-6", title: "Curioso", description: "Estude 6 temas diferentes", icon: "compass-outline", color: "#EC4899", progress: count("topicsStudied", 6) },
  { id: "focus-1", title: "Foco total", description: "Complete uma sessão de foco", icon: "bullseye-arrow", color: "#6366F1", progress: count("focus", 1) },
  { id: "challenge-1", title: "Desafiante", description: "Complete um desafio semanal", icon: "medal-outline", color: "#EAB308", progress: count("challenges", 1) },
  { id: "hours-10", title: "Dedicação", description: "Estude 10 horas no total", icon: "clock-check-outline", color: "#10B981", progress: count("minutes", 600) },
];

/** Ids that the stats now satisfy but are not yet unlocked. */
export function newlyUnlocked(stats: AchievementStats, unlocked: Record<string, number>): Achievement[] {
  return ACHIEVEMENTS.filter((a) => {
    if (unlocked[a.id]) return false;
    const [cur, target] = a.progress(stats);
    return cur >= target;
  });
}
