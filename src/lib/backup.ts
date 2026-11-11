/** Persisted store keys included in a backup, in restore order. */
export const BACKUP_STORES = ["syb-settings", "syb-library", "syb-progress", "syb-review", "syb-notebooks", "syb-planner", "syb-modes", "syb-xp"] as const;
export type BackupStore = (typeof BACKUP_STORES)[number];

export interface Backup {
  app: "scrollyourbrain";
  format: 1;
  exportedAt: string;
  stores: Partial<Record<BackupStore, Record<string, unknown>>>;
}

/** Keeps only data (drops store actions) so the file is plain JSON. */
const dataOnly = (state: object) => JSON.parse(JSON.stringify(state)) as Record<string, unknown>;

export function buildBackup(states: Partial<Record<BackupStore, object>>, now: Date = new Date()): string {
  const stores: Backup["stores"] = {};
  for (const key of BACKUP_STORES) if (states[key]) stores[key] = dataOnly(states[key]!);
  const backup: Backup = { app: "scrollyourbrain", format: 1, exportedAt: now.toISOString(), stores };
  return JSON.stringify(backup);
}

/** Validates a backup file. Throws an Error with a message fit for the user. */
export function parseBackup(text: string): Backup {
  let data: unknown;
  try {
    data = JSON.parse(text);
  } catch {
    throw new Error("Esse arquivo não é um backup válido.");
  }
  const b = data as Partial<Backup>;
  if (!b || b.app !== "scrollyourbrain" || typeof b.stores !== "object" || b.stores === null) {
    throw new Error("Esse arquivo não é um backup do ScrollYourBrain.");
  }
  if (b.format !== 1) throw new Error("Backup de uma versão mais nova do app. Atualize o app e tente de novo.");
  const stores: Backup["stores"] = {};
  for (const key of BACKUP_STORES) {
    const value = (b.stores as Record<string, unknown>)[key];
    if (value && typeof value === "object" && !Array.isArray(value)) stores[key] = value as Record<string, unknown>;
  }
  return { app: "scrollyourbrain", format: 1, exportedAt: String(b.exportedAt ?? ""), stores };
}

export const backupFileName = (now: Date = new Date()) => `scrollyourbrain-backup-${now.toISOString().slice(0, 10)}.json`;
