import { useSettings } from "@/store/settings";

import { createContext, useContext } from "react";

export type ThemeMode = "amoled" | "default" | "aurora" | "espaco" | "oceano" | "claro";
/** Ambient background drawn behind the feed. */
export type BackdropStyle = "orbs" | "aurora" | "stars" | "waves";

const dark = {
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

export interface Colors {
  text: string;
  textDim: string;
  textMute: string;
  accent: string;
  accent2: string;
  like: string;
  save: string;
  success: string;
  danger: string;
  onAccent: string;
  bg: string;
  surface: string;
  surface2: string;
  border: string;
  glass: string;
  tab: string;
}

export interface ThemeDef {
  name: string;
  description: string;
  backdrop: BackdropStyle;
  /** Light themes keep the feed dark (like reels apps) for legibility over videos. */
  light: boolean;
  /** Colours the backdrop mixes with the account colours. */
  ambient: readonly [string, string, string];
  colors: Colors;
}

export const THEMES: Record<ThemeMode, ThemeDef> = {
  amoled: {
    name: "Preto AMOLED", description: "Preto puro. Economiza bateria em telas OLED.", backdrop: "orbs", light: false,
    ambient: ["#8B5CF6", "#22D3EE", "#F472B6"],
    colors: { ...dark, bg: "#000000", surface: "#0B0B0E", surface2: "#141418", border: "rgba(255,255,255,0.08)", glass: "rgba(12,12,16,0.62)", tab: "#0D0D10" },
  },
  default: {
    name: "Padrão", description: "Escuro suave, com mais profundidade.", backdrop: "orbs", light: false,
    ambient: ["#8B5CF6", "#22D3EE", "#F472B6"],
    colors: { ...dark, bg: "#14141B", surface: "#1E1E27", surface2: "#2A2A35", border: "rgba(255,255,255,0.10)", glass: "rgba(36,36,46,0.66)", tab: "#262630" },
  },
  aurora: {
    name: "Aurora", description: "Faixas de luz verdes e violetas que dançam devagar.", backdrop: "aurora", light: false,
    ambient: ["#34D399", "#2DD4BF", "#A78BFA"],
    colors: { ...dark, accent: "#2DD4BF", accent2: "#A78BFA", bg: "#03110F", surface: "#0A1C1A", surface2: "#112825", border: "rgba(167,243,208,0.12)", glass: "rgba(8,28,26,0.66)", tab: "#0B1F1C" },
  },
  espaco: {
    name: "Espaço", description: "Céu estrelado com nebulosas no fundo.", backdrop: "stars", light: false,
    ambient: ["#818CF8", "#F472B6", "#38BDF8"],
    colors: { ...dark, accent: "#818CF8", accent2: "#F472B6", bg: "#04030C", surface: "#0E0C1F", surface2: "#17142E", border: "rgba(199,210,254,0.12)", glass: "rgba(14,12,31,0.66)", tab: "#100E22" },
  },
  oceano: {
    name: "Oceano", description: "Azul profundo e ondas lentas.", backdrop: "waves", light: false,
    ambient: ["#0EA5E9", "#22D3EE", "#2563EB"],
    colors: { ...dark, accent: "#0EA5E9", accent2: "#5EEAD4", bg: "#020D18", surface: "#081B2C", surface2: "#0E2840", border: "rgba(186,230,253,0.12)", glass: "rgba(8,27,44,0.66)", tab: "#0A1E31" },
  },
  claro: {
    name: "Claro", description: "Telas claras; o feed continua escuro para ler bem.", backdrop: "orbs", light: true,
    ambient: ["#8B5CF6", "#22D3EE", "#F472B6"],
    colors: {
      ...dark, text: "#16161D", textDim: "#5B5B66", textMute: "#8E8E99", accent: "#7C3AED", accent2: "#0891B2", save: "#D97706",
      bg: "#F5F5F8", surface: "#FFFFFF", surface2: "#ECECF2", border: "rgba(0,0,0,0.09)", glass: "rgba(255,255,255,0.78)", tab: "#FFFFFF",
    },
  },
};

export const THEME_ORDER: ThemeMode[] = ["amoled", "default", "claro", "aurora", "espaco", "oceano"];

/** Brighter secondary text and borders for readability. */
const contrastDark = { textDim: "#D4D4D8", textMute: "#A1A1AA", border: "rgba(255,255,255,0.22)" };
const contrastLight = { textDim: "#3F3F46", textMute: "#52525B", border: "rgba(0,0,0,0.22)" };

export const getColors = (mode: ThemeMode, highContrast = false): Colors => {
  const theme = THEMES[mode] ?? THEMES.amoled;
  return { ...theme.colors, ...(highContrast ? (theme.light ? contrastLight : contrastDark) : null) };
};

/** Inside the feed, light themes switch to their dark counterpart. */
export const ForceDark = createContext(false);

/** The theme actually used where the hook is called (light themes are dark inside the feed). */
export const useThemeMode = (): ThemeMode => {
  const mode = useSettings((s) => s.theme);
  const forceDark = useContext(ForceDark);
  return forceDark && THEMES[mode]?.light ? "default" : (THEMES[mode] ? mode : "amoled");
};

export const useTheme = (): ThemeDef => THEMES[useThemeMode()];

export const useColors = (): Colors => {
  const mode = useThemeMode();
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
