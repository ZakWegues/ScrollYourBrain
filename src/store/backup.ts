import * as DocumentPicker from "expo-document-picker";
import { File, Paths } from "expo-file-system";
import * as Sharing from "expo-sharing";
import { Platform } from "react-native";
import { BACKUP_STORES, backupFileName, buildBackup, parseBackup, type BackupStore } from "@/lib/backup";
import { useLibrary } from "./library";
import { useModes } from "./modes";
import { useXp } from "./xp";
import { useNotebooks } from "./notebooks";
import { usePlanner } from "./planner";
import { useProgress } from "./progress";
import { useReview } from "./review";
import { useSettings } from "./settings";
import { useSearch } from "./search";
import { useMistakes } from "./mistakes";
import { useDaily } from "./daily";
import { useWatchLater } from "./watchLater";

const STORES: Record<BackupStore, { getState: () => object; setState: (s: object) => void }> = {
  "syb-settings": useSettings,
  "syb-library": useLibrary,
  "syb-progress": useProgress,
  "syb-review": useReview,
  "syb-notebooks": useNotebooks,
  "syb-planner": usePlanner,
  "syb-modes": useModes,
  "syb-xp": useXp,
  "syb-search": useSearch,
  "syb-mistakes": useMistakes,
  "syb-daily": useDaily,
  "syb-watchlater": useWatchLater,
};

/** Saves a backup file and opens the share sheet (or downloads it on the web). */
export async function exportBackup(): Promise<void> {
  const text = buildBackup(Object.fromEntries(BACKUP_STORES.map((k) => [k, STORES[k].getState()])));
  const name = backupFileName();
  if (Platform.OS === "web") {
    const url = URL.createObjectURL(new Blob([text], { type: "application/json" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
    return;
  }
  const file = new File(Paths.cache, name);
  if (file.exists) file.delete();
  file.create();
  file.write(text);
  await Sharing.shareAsync(file.uri, { mimeType: "application/json", dialogTitle: "Salvar backup do ScrollYourBrain" });
}

/** Lets the user pick a backup file; returns its parsed content, or null when cancelled. Throws on invalid files. */
export async function pickBackup() {
  const res = await DocumentPicker.getDocumentAsync({ type: ["application/json", "text/plain", "*/*"], copyToCacheDirectory: true });
  if (res.canceled || !res.assets[0]) return null;
  const asset = res.assets[0];
  const text = Platform.OS === "web" ? await (await fetch(asset.uri)).text() : await new File(asset.uri).text();
  return parseBackup(text);
}

/** Replaces the app data with the backup's stores (stores missing from the file are left as they are). */
export function restoreBackup(backup: ReturnType<typeof parseBackup>) {
  for (const key of BACKUP_STORES) {
    const data = backup.stores[key];
    if (data) STORES[key].setState(data);
  }
}
