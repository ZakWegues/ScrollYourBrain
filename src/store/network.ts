import * as Network from "expo-network";
import { useEffect } from "react";
import { create } from "zustand";

/** App-wide connectivity. Starts optimistic so the first render never shows "offline" by mistake. */
export const useNetwork = create<{ online: boolean }>()(() => ({ online: true }));

const isOnline = (s: { isConnected?: boolean; isInternetReachable?: boolean }) => s.isConnected !== false && s.isInternetReachable !== false;

export function useNetworkWatcher() {
  useEffect(() => {
    Network.getNetworkStateAsync()
      .then((s) => useNetwork.setState({ online: isOnline(s) }))
      .catch(() => {});
    const sub = Network.addNetworkStateListener((s) => useNetwork.setState({ online: isOnline(s) }));
    return () => sub.remove();
  }, []);
}
