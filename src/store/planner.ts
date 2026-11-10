import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { PlannedExam } from "@/lib/planner";
import { persistStorage } from "./storage";

interface PlannerState {
  exams: Record<string, PlannedExam>;
  save: (exam: Omit<PlannedExam, "id" | "createdAt"> & { id?: string }) => string;
  remove: (id: string) => void;
  reset: () => void;
}

export const usePlanner = create<PlannerState>()(
  persist(
    (set, get) => ({
      exams: {},
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
      reset: () => set({ exams: {} }),
    }),
    { name: "syb-planner", storage: persistStorage, version: 1 },
  ),
);
