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
  /** Accounts at "Avançado" or above, and at "Craque". */
  advancedAccounts: number;
  craqueAccounts: number;
  /** Different subjects with at least one studied account. */
  subjectsStudied: number;
  survivalBest: number;
  blitzBest: number;
  /** Days on which the question of the day was answered. */
  dailyDays: number;
  /** Days with at least one review. */
  reviewDays: number;
  /** Different cards met in the feed and elsewhere. */
  seenCards: number;
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
  { id: "mastery-1", title: "Pegando o jeito", description: "Leve um assunto ao nível Avançado", icon: "star-half-full", color: "#F59E0B", progress: count("advancedAccounts", 1) },
  { id: "mastery-5", title: "Especialista", description: "Leve 5 assuntos ao nível Avançado", icon: "star-circle", color: "#EAB308", progress: count("advancedAccounts", 5) },
  { id: "craque-1", title: "Craque", description: "Chegue ao nível Craque em um assunto", icon: "crown", color: "#FBBF24", progress: count("craqueAccounts", 1) },
  { id: "subjects-8", title: "Explorador", description: "Estude assuntos de 8 matérias diferentes", icon: "map-search-outline", color: "#06B6D4", progress: count("subjectsStudied", 8) },
  { id: "survival-10", title: "Sobrevivente", description: "Faça 10 pontos na Sobrevivência", icon: "heart-pulse", color: "#F43F5E", progress: count("survivalBest", 10) },
  { id: "survival-25", title: "Imortal", description: "Faça 25 pontos na Sobrevivência", icon: "shield-star", color: "#BE123C", progress: count("survivalBest", 25) },
  { id: "blitz-15", title: "Relâmpago", description: "Acerte 15 no Quiz relâmpago", icon: "lightning-bolt", color: "#F97316", progress: count("blitzBest", 15) },
  { id: "daily-7", title: "Pontual", description: "Responda 7 perguntas do dia", icon: "calendar-check", color: "#0EA5E9", progress: count("dailyDays", 7) },
  { id: "review-days-7", title: "Memória em dia", description: "Revise cards em 7 dias diferentes", icon: "brain", color: "#8B5CF6", progress: count("reviewDays", 7) },
  { id: "correct-500", title: "Atirador de elite", description: "Acerte 500 questões", icon: "bullseye", color: "#DC2626", progress: count("correct", 500) },
  { id: "seen-1000", title: "Sempre algo novo", description: "Conheça 1.000 cards diferentes", icon: "cards-outline", color: "#14B8A6", progress: count("seenCards", 1000) },
  { id: "exam-10", title: "Veterano de provas", description: "Termine 10 provas", icon: "file-certificate-outline", color: "#2563EB", progress: count("exams", 10) },
];

/** Ids that the stats now satisfy but are not yet unlocked. */
export function newlyUnlocked(stats: AchievementStats, unlocked: Record<string, number>): Achievement[] {
  return ACHIEVEMENTS.filter((a) => {
    if (unlocked[a.id]) return false;
    const [cur, target] = a.progress(stats);
    return cur >= target;
  });
}
