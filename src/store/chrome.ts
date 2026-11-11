import { create } from "zustand";

/** Lets the feed hide the floating tab bar while the user is swiping. */
export const useChrome = create<{ tabBarHidden: boolean; setTabBarHidden: (hidden: boolean) => void }>()((set) => ({
  tabBarHidden: false,
  setTabBarHidden: (tabBarHidden) => set({ tabBarHidden }),
}));

// A single pending "show again" timer, so an old timer never fires in the middle of a new swipe.
let showTimer: ReturnType<typeof setTimeout> | null = null;

const clearShowTimer = () => {
  if (showTimer) clearTimeout(showTimer);
  showTimer = null;
};

/** Hides the tab bar right away (a swipe started). */
export function hideTabBar() {
  clearShowTimer();
  useChrome.getState().setTabBarHidden(true);
}

/** Shows the tab bar after `delay` ms (0 = now). A later hide cancels it. */
export function showTabBar(delay = 0) {
  clearShowTimer();
  if (delay <= 0) {
    useChrome.getState().setTabBarHidden(false);
    return;
  }
  showTimer = setTimeout(() => {
    showTimer = null;
    useChrome.getState().setTabBarHidden(false);
  }, delay);
}
