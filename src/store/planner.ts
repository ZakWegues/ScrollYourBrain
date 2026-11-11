import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlannedExam } from "@/lib/planner";
import { persistStorage } from "./storage";

interface PlannerState {
  exams: Record<string, PlannedExam>;
  /** Final-week tasks done ("examId:daysBefore"). */
  done: Record<string, true>;
  toggleDone: (taskId: string) => void;
  save: (exam: Omit<PlannedExam, "id" | "createdAt"> & { id?: string }) => string;
  remove: (id: string) => void;
  reset: () => void;
}

export const usePlanner = create<PlannerState>()(
  persist(
    (set, get) => ({
      exams: {},
      done: {},
      toggleDone: (taskId) =>
        set((s) => {
          const done = { ...s.done };
          if (done[taskId]) delete done[taskId];
          else done[taskId] = true;
          return { done };
        }),
      save: (exam) => {
        const id = exam.id ?? `ex-${Date.now().toString(36)}`;
        const prev = get().exams[id];
        set((s) => ({ exams: { ...s.exams, [id]: { ...exam, id, createdAt: prev?.createdAt ?? Date.now() } } }));
        return id;
      },
      remove: (id) =>
        set((s) => {
          const exams = { ...s.exams };
          delete exams[id];
          return { exams };
        }),
      reset: () => set({ exams: {}, done: {} }),
    }),
    { name: "syb-planner", storage: persistStorage, version: 1 },
  ),
);
