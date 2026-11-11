import { useEffect, useState } from "react";
import { useLibrary } from "./library";
import { useModes } from "./modes";
import { useXp } from "./xp";
import { useNotebooks } from "./notebooks";
import { usePlanner } from "./planner";
import { useProgress } from "./progress";
import { useReview } from "./review";
import { useSearch } from "./search";
import { useResume } from "./resume";
import { useMistakes } from "./mistakes";
import { useDaily } from "./daily";
import { useSettings } from "./settings";

const stores = [useLibrary, useSettings, useProgress, useReview, useNotebooks, usePlanner, useModes, useXp, useSearch, useResume, useMistakes, useDaily] as const;

/** True once all persisted stores have been read back from storage. */
export function useStoresHydrated(): boolean {
  const check = () => stores.every((s) => s.persist.hasHydrated());
  const [ready, setReady] = useState(check);
  useEffect(() => {
    if (ready) return;
    const update = () => setReady(check());
    const unsubs = stores.map((s) => s.persist.onFinishHydration(update));
    update();
    return () => unsubs.forEach((u) => u());
  }, [ready]);
  return ready;
}
