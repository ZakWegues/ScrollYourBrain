import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { StudyItem } from "@/feed/types";
import { persistStorage } from "./storage";

export interface Note {
  item: StudyItem;
  text: string;
  updatedAt: number;
}

export interface Notebook {
  id: string;
  name: string;
  /** Index into NOTEBOOK_COLORS. */
  color: number;
  itemIds: string[];
  createdAt: number;
}

export const NOTEBOOK_COLORS: [string, string][] = [
  ["#8B5CF6", "#6366F1"], ["#0EA5E9", "#22D3EE"], ["#10B981", "#84CC16"], ["#F59E0B", "#EF4444"],
  ["#EC4899", "#A855F7"], ["#F43F5E", "#F97316"], ["#64748B", "#A78BFA"], ["#14B8A6", "#3B82F6"],
];

interface NotebooksState {
  notebooks: Record<string, Notebook>;
  /** Every item referenced by a notebook or note, so they survive feed churn. */
  items: Record<string, StudyItem>;
  notes: Record<string, Note>;
  create: (name: string, firstItem?: StudyItem) => string;
  rename: (id: string, name: string) => void;
  remove: (id: string) => void;
  toggleItem: (id: string, item: StudyItem) => boolean;
  addItems: (id: string, items: StudyItem[]) => void;
  setNote: (item: StudyItem, text: string) => void;
  reset: () => void;
}

export const useNotebooks = create<NotebooksState>()(
  persist(
    (set, get) => ({
      notebooks: {},
      items: {},
      notes: {},
      create: (name, firstItem) => {
        const id = `nb-${Date.now().toString(36)}`;
        const color = Object.keys(get().notebooks).length % NOTEBOOK_COLORS.length;
        set((s) => ({
          notebooks: { ...s.notebooks, [id]: { id, name: name.trim() || "Caderno", color, itemIds: firstItem ? [firstItem.id] : [], createdAt: Date.now() } },
          items: firstItem ? { ...s.items, [firstItem.id]: firstItem } : s.items,
        }));
        return id;
      },
      rename: (id, name) =>
        set((s) => (s.notebooks[id] ? { notebooks: { ...s.notebooks, [id]: { ...s.notebooks[id], name: name.trim() || s.notebooks[id].name } } } : s)),
      remove: (id) =>
        set((s) => {
          const notebooks = { ...s.notebooks };
          delete notebooks[id];
          return { notebooks };
        }),
      toggleItem: (id, item) => {
        const nb = get().notebooks[id];
        if (!nb) return false;
        const has = nb.itemIds.includes(item.id);
        set((s) => ({
          notebooks: { ...s.notebooks, [id]: { ...nb, itemIds: has ? nb.itemIds.filter((x) => x !== item.id) : [item.id, ...nb.itemIds] } },
          items: { ...s.items, [item.id]: item },
        }));
        return !has;
      },
      addItems: (id, list) => {
        const nb = get().notebooks[id];
        if (!nb) return;
        const ids = list.map((i) => i.id).filter((x) => !nb.itemIds.includes(x));
        set((s) => ({
          notebooks: { ...s.notebooks, [id]: { ...nb, itemIds: [...ids, ...nb.itemIds] } },
          items: { ...s.items, ...Object.fromEntries(list.map((i) => [i.id, i])) },
        }));
      },
      setNote: (item, text) =>
        set((s) => {
          const notes = { ...s.notes };
          if (text.trim()) notes[item.id] = { item, text: text.trim(), updatedAt: Date.now() };
          else delete notes[item.id];
          return { notes };
        }),
      reset: () => set({ notebooks: {}, items: {}, notes: {} }),
    }),
    { name: "syb-notebooks", storage: persistStorage, version: 1 },
  ),
);
