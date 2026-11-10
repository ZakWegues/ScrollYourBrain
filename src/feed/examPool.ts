import { create } from "zustand";
import type { QuizItem } from "./types";

/** A fixed set of questions handed from a study mode to the exam screen. */
export interface ExamScope {
  key: string;
  title: string;
  subtitle: string;
  quizzes: QuizItem[];
  count: number;
  secondsPerQuestion: number;
}

export const useExamScope = create<{ scope: ExamScope | null; set: (scope: ExamScope | null) => void }>()((set) => ({
  scope: null,
  set: (scope) => set({ scope }),
}));
