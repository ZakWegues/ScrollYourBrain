import { useSettings } from "@/store/settings";

export type ThemeMode = "amoled" | "default";

const shared = {
  text: "#F5F5F7",
  textDim: "#A1A1AA",
  textMute: "#6B6B76",
  accent: "#8B5CF6",
  accent2: "#22D3EE",
  like: "#FF3B6B",
  save: "#FBBF24",
  success: "#34D399",
  danger: "#F43F5E",
  onAccent: "#FFFFFF",
};

const palettes = {
  amoled: {
    bg: "#000000",
    surface: "#0B0B0E",
    surface2: "#141418",
    border: "rgba(255,255,255,0.08)",
    glass: "rgba(12,12,16,0.62)",
    tab: "#0D0D10",
  },
  default: {
    bg: "#0A0A0F",
    surface: "#15151C",
    surface2: "#1D1D26",
    border: "rgba(255,255,255,0.09)",
    glass: "rgba(26,26,34,0.62)",
    tab: "#1A1A22",
  },
} as const;

export type Colors = typeof shared & (typeof palettes)[ThemeMode];

/** Brighter secondary text and borders for readability. */
const contrast = { textDim: "#D4D4D8", textMute: "#A1A1AA", border: "rgba(255,255,255,0.22)" };

export const getColors = (mode: ThemeMode, highContrast = false): Colors =>
  ({ ...shared, ...palettes[mode], ...(highContrast ? contrast : null) }) as Colors;

export const useColors = (): Colors => {
  const mode = useSettings((s) => s.theme);
  const hc = useSettings((s) => s.highContrast);
  return getColors(mode, hc);
};

export const fonts = {
  display: "SpaceGrotesk_700Bold",
  displayMid: "SpaceGrotesk_600SemiBold",
  body: "Inter_400Regular",
  bodyMid: "Inter_500Medium",
  bodyBold: "Inter_600SemiBold",
};

export const radius = { sm: 10, md: 16, lg: 22, xl: 28, pill: 999 };

export const gradients = {
  brand: ["#8B5CF6", "#22D3EE"] as const,
  warm: ["#F472B6", "#FB923C"] as const,
};

/** Space reserved at the bottom of screens for the floating tab bar. */
export const TAB_BAR_SPACE = 104;

/** 4-pt spacing scale. Screens use `space.lg` (16) as the side gutter. */
export const space = { xs: 4, sm: 8, md: 12, lg: 16, xl: 24, xxl: 32 } as const;

/** Minimum comfortable touch target. */
export const TOUCH = 44;

export const motion = {
  fast: 160,
  base: 240,
  slow: 420,
  spring: { damping: 16, stiffness: 180 },
} as const;
