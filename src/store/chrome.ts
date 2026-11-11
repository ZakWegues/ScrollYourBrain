import { create } from "zustand";

/** Lets the feed hide the floating tab bar while the user is swiping. */
export const useChrome = create<{ tabBarHidden: boolean; setTabBarHidden: (hidden: boolean) => void }>()((set) => ({
  tabBarHidden: false,
  setTabBarHidden: (tabBarHidden) => set({ tabBarHidden }),
}));
