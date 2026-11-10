import { useEffect, useState } from "react";
import { useLibrary } from "./library";
import { useNotebooks } from "./notebooks";
import { useProgress } from "./progress";
import { useReview } from "./review";
import { useSettings } from "./settings";

const stores = [useLibrary, useSettings, useProgress, useReview, useNotebooks] as const;

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
