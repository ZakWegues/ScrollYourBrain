import Svg, { Defs, LinearGradient, Path, Rect, Stop } from "react-native-svg";

const SPARK = "M256 190 C266 252 288 274 350 284 C288 294 266 316 256 378 C246 316 224 294 162 284 C224 274 246 252 256 190 Z";
const SPARK_SMALL = "M336 160 C339 178 345 184 363 187 C345 190 339 196 336 214 C333 196 327 190 309 187 C327 184 333 178 336 160 Z";

/** App mark: stacked feed cards with a sparkle. Same drawing as scripts/gen-assets.mjs. */
export function LogoMark({ size = 96 }: { size?: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 512 512">
      <Defs>
        <LinearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <Stop offset="0" stopColor="#A78BFA" />
          <Stop offset="0.55" stopColor="#8B5CF6" />
          <Stop offset="1" stopColor="#22D3EE" />
        </LinearGradient>
      </Defs>
      <Rect x="166" y="58" width="180" height="300" rx="56" fill="url(#g)" opacity={0.28} />
      <Rect x="136" y="90" width="240" height="320" rx="64" fill="url(#g)" opacity={0.55} />
      <Rect x="106" y="130" width="300" height="340" rx="72" fill="url(#g)" />
      <Path d={SPARK} fill="#fff" />
      <Path d={SPARK_SMALL} fill="#fff" opacity={0.9} />
    </Svg>
  );
}
