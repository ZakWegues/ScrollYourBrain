import type { LinearGradientProps } from "expo-linear-gradient";
import { View } from "react-native";

type Point = LinearGradientProps["start"];
const xy = (p: Point, fallback: [number, number]): [number, number] => {
  if (!p) return fallback;
  if (Array.isArray(p)) return [p[0] ?? fallback[0], p[1] ?? fallback[1]];
  return [(p as { x: number }).x ?? fallback[0], (p as { y: number }).y ?? fallback[1]];
};

/**
 * Web build: a plain CSS gradient. expo-linear-gradient measures itself with onLayout on the web to
 * compute the angle, which can loop renders ("Maximum update depth") when its size settles while a
 * screen comes back into view. Here the angle comes from the start/end points alone.
 */
export function LinearGradient({ colors, locations, start, end, style, ...rest }: LinearGradientProps) {
  const [sx, sy] = xy(start, [0.5, 0]);
  const [ex, ey] = xy(end, [0.5, 1]);
  const angle = 90 + (Math.atan2(ey - sy, ex - sx) * 180) / Math.PI;
  const stops = colors.map((col, i) => (locations?.[i] != null ? `${String(col)} ${Math.max(0, Math.min(1, locations[i] as number)) * 100}%` : String(col)));
  return <View {...rest} style={[style, { backgroundImage: `linear-gradient(${angle}deg, ${stops.join(", ")})` } as object]} />;
}
