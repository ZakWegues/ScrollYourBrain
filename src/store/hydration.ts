import { useEffect, useState } from "react";
import { useLibrary } from "./library";
import { useSettings } from "./settings";

/** True once both persisted stores have been read back from storage. */
export function useStoresHydrated(): boolean {
  const check = () => useLibrary.persist.hasHydrated() && useSettings.persist.hasHydrated();
  const [ready, setReady] = useState(check);
  useEffect(() => {
    if (ready) return;
    const update = () => setReady(check());
    const unsubs = [useLibrary.persist.onFinishHydration(update), useSettings.persist.onFinishHydration(update)];
    update();
    return () => unsubs.forEach((u) => u());
  }, [ready]);
  return ready;
}
