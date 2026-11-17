/** A function returning a number in [0, 1), like Math.random or a seeded generator. */
export type RandomSource = () => number;

/** Unbiased Fisher–Yates shuffle into a new array. */
export function shuffleWith<T>(list: readonly T[], rng: RandomSource = Math.random): T[] {
  const out = [...list];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}
