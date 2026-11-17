/** Survival mode: three lives, and less time per question the longer you last. */
export const SURVIVAL_LIVES = 3;
const START_SECONDS = 20;
const MIN_SECONDS = 7;

/** Seconds for the next question after `right` correct answers: one less every 3 right answers, never below 7. */
export const survivalSeconds = (right: number) => Math.max(MIN_SECONDS, START_SECONDS - Math.floor(right / 3));

/** Difficulty label shown during the run. */
export const survivalStage = (right: number) => (right < 6 ? "Aquecendo" : right < 15 ? "Esquentando" : right < 27 ? "Pegando fogo" : "Lendário");
