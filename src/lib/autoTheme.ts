/** Which theme the automatic mode picks at a given hour: the light theme by day, `night` otherwise. */
export const autoThemeAt = <T extends string>(hour: number, dayStart: number, nightStart: number, night: T, light: T): T =>
  hour >= dayStart && hour < nightStart ? light : night;
