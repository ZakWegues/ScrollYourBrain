import type { QuizItem, StudyItem } from "@/feed/types";
import { fmt, int, pick, quizOf, type Rng } from "./gen-utils";

type Gen = (rng: Rng) => StudyItem;

const signed = (n: number) => (n >= 0 ? `+ ${fmt(n)}` : `− ${fmt(Math.abs(n))}`);

/** 4-option quiz; see `quizOf`. */
const q = (rng: Rng, base: { id: string; pageId: string; title: string; tags: string[]; question: string; explanation: string }, correct: string, wrong: string[]): QuizItem =>
  quizOf(rng, base, correct, wrong);

/** Three distinct wrong numbers near `value` (never equal to it). */
function near(rng: Rng, value: number, spread: number, step = 1): number[] {
  const out = new Set<number>();
  let guard = 0;
  while (out.size < 3 && guard++ < 50) {
    const d = int(rng, -spread, spread) * step;
    if (d !== 0) out.add(Math.round((value + d) * 100) / 100);
  }
  return [...out];
}

// ── Funções ──────────────────────────────────────────────────────────────────
const funcoes: Gen[] = [
  (rng) => {
    const a = pick(rng, [-4, -3, -2, 2, 3, 4, 5]), b = int(rng, -9, 9), x = int(rng, -4, 6);
    const y = a * x + b;
    return q(rng, { id: `gen-fun-afim-${a}-${b}-${x}`, pageId: "funcoes", title: "Função afim", tags: ["função afim"], question: `Se f(x) = ${a}x ${signed(b)}, quanto vale f(${x})?`, explanation: `Substitua x por ${x}: ${a}·(${x}) ${signed(b)} = ${fmt(a * x)} ${signed(b)} = ${fmt(y)}.` }, fmt(y), near(rng, y, 6).map(fmt));
  },
  (rng) => {
    const a = pick(rng, [-5, -4, -3, -2, 2, 3, 4, 5]), r = int(rng, -6, 6);
    const b = -a * r;
    return q(rng, { id: `gen-fun-raiz-${a}-${r}`, pageId: "funcoes", title: "Raiz da função afim", tags: ["função afim", "raiz"], question: `Qual é a raiz (zero) de f(x) = ${a}x ${signed(b)}?`, explanation: `Raiz: f(x) = 0 → ${a}x = ${fmt(-b)} → x = ${fmt(-b)}/${a} = ${r}.` }, `x = ${r}`, [r + 1, r - 1, -r === r ? r + 2 : -r, b].map((v) => `x = ${v}`));
  },
  (rng) => {
    const r1 = int(rng, -5, 5), r2 = int(rng, -5, 6);
    if (r1 === r2) return funcoes[1](rng);
    const s = r1 + r2, p = r1 * r2;
    const [lo, hi] = [Math.min(r1, r2), Math.max(r1, r2)];
    const pair = (a: number, b: number) => `${Math.min(a, b)} e ${Math.max(a, b)}`;
    return q(rng, { id: `gen-fun-raizes-${lo}-${hi}`, pageId: "funcoes", title: "Raízes da quadrática", tags: ["função quadrática", "soma e produto"], question: `Quais são as raízes de f(x) = x² ${signed(-s)}x ${signed(p)}?`, explanation: `Soma e produto: as raízes somam ${s} (−b/a) e multiplicam ${p} (c/a). Os números são ${lo} e ${hi}.` }, pair(lo, hi), [pair(-lo, -hi), pair(lo + 1, hi + 1), pair(lo, hi + 2), pair(lo - 1, hi)]);
  },
  (rng) => {
    const a = pick(rng, [1, 1, 2, -1]), h = int(rng, -4, 5), k = int(rng, -8, 8);
    const b = -2 * a * h, c = a * h * h + k;
    const term = (coef: number, v: string) => (coef === 0 ? "" : ` ${signed(coef)}${v}`);
    const lead = a === 1 ? "x²" : a === -1 ? "−x²" : `${a}x²`;
    return q(rng, { id: `gen-fun-vert-${a}-${h}-${k}`, pageId: "funcoes", title: "Vértice da parábola", tags: ["função quadrática", "vértice"], question: `Qual é o vértice de f(x) = ${lead}${term(b, "x")}${term(c, "")}?`, explanation: `xv = −b/2a = ${fmt(-b)}/${2 * a} = ${h}. yv = f(${h}) = ${k}. ${a > 0 ? "Como a > 0, é ponto de mínimo." : "Como a < 0, é ponto de máximo."}` }, `(${h}, ${k})`, [`(${-h}, ${k})`, `(${h}, ${-k === k ? k + 1 : -k})`, `(${h + 1}, ${k - 1})`, `(${k}, ${h})`]);
  },
  (rng) => {
    const base = pick(rng, [2, 3, 5]), n = int(rng, 2, base === 2 ? 7 : 4);
    const value = base ** n;
    return q(rng, { id: `gen-fun-exp-${base}-${n}`, pageId: "funcoes", title: "Equação exponencial", tags: ["exponencial"], question: `Resolva: ${base}^x = ${fmt(value)}`, explanation: `Escreva ${fmt(value)} como potência de ${base}: ${fmt(value)} = ${base}^${n}. Bases iguais → x = ${n}.` }, `x = ${n}`, [n - 1, n + 1, n + 2, value / base].map((v) => `x = ${fmt(v)}`));
  },
  (rng) => {
    const base = pick(rng, [2, 3, 10]), n = int(rng, 1, base === 2 ? 8 : base === 3 ? 5 : 4);
    const value = base ** n;
    return q(rng, { id: `gen-fun-log-${base}-${n}`, pageId: "funcoes", title: "Logaritmo", tags: ["logaritmo"], question: `Quanto vale log${base === 10 ? "" : `₍${base}₎`} ${fmt(value)}?`, explanation: `log${base === 10 ? "" : ` na base ${base}`} de ${fmt(value)} é o expoente que leva ${base} a ${fmt(value)}: ${base}^${n} = ${fmt(value)}. Resposta: ${n}.` }, String(n), [n + 1, n - 1, n * 2, value / base].filter((v) => v >= 0).map((v) => fmt(v)));
  },
];

// ── Trigonometria ────────────────────────────────────────────────────────────
const TRIG: Record<string, Record<number, string>> = {
  sen: { 30: "1/2", 45: "√2/2", 60: "√3/2" },
  cos: { 30: "√3/2", 45: "√2/2", 60: "1/2" },
  tg: { 30: "√3/3", 45: "1", 60: "√3" },
};
const TRIG_VALUES = ["1/2", "√2/2", "√3/2", "√3/3", "1", "√3", "0"];
const RAD: [number, string][] = [[30, "π/6"], [45, "π/4"], [60, "π/3"], [90, "π/2"], [120, "2π/3"], [135, "3π/4"], [150, "5π/6"], [180, "π"], [270, "3π/2"], [360, "2π"]];
const trigonometria: Gen[] = [
  (rng) => {
    const fn = pick(rng, ["sen", "cos", "tg"] as const), ang = pick(rng, [30, 45, 60]);
    const v = TRIG[fn][ang];
    return q(rng, { id: `gen-tri-${fn}-${ang}`, pageId: "trigonometria", title: "Ângulos notáveis", tags: ["ângulos notáveis"], question: `Quanto vale ${fn} ${ang}°?`, explanation: `Tabela: sen 30° = 1/2, sen 45° = √2/2, sen 60° = √3/2; o cosseno é a mesma linha ao contrário; tg = sen/cos. Logo ${fn} ${ang}° = ${v}.` }, v, TRIG_VALUES.filter((x) => x !== v).sort(() => rng() - 0.5));
  },
  (rng) => {
    const [deg, rad] = pick(rng, RAD);
    const wrong = RAD.filter(([d]) => d !== deg).sort(() => rng() - 0.5).map(([, r]) => r);
    return q(rng, { id: `gen-tri-rad-${deg}`, pageId: "trigonometria", title: "Graus e radianos", tags: ["radianos"], question: `${deg}° em radianos é:`, explanation: `180° = π rad. Então ${deg}° = ${deg}/180 · π = ${rad}.` }, rad, wrong);
  },
  (rng) => {
    const h = int(rng, 2, 15) * 2;
    return q(rng, { id: `gen-tri-hip-${h}`, pageId: "trigonometria", title: "Triângulo retângulo", tags: ["seno"], question: `Num triângulo retângulo, a hipotenusa mede ${h} cm. Quanto mede o cateto oposto ao ângulo de 30°?`, explanation: `sen 30° = oposto/hipotenusa = 1/2 → oposto = ${h}/2 = ${h / 2} cm.` }, `${h / 2} cm`, [`${h} cm`, `${h / 2 + 1} cm`, `${h * 2} cm`, `${Math.max(1, h / 2 - 2)} cm`]);
  },
];

// ── Estatística e probabilidade ──────────────────────────────────────────────
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
const frac = (a: number, b: number) => { const g = gcd(a, b); return b / g === 1 ? String(a / g) : `${a / g}/${b / g}`; };
const estatistica: Gen[] = [
  (rng) => {
    const n = pick(rng, [4, 5]);
    const mean = int(rng, 4, 15);
    const list = Array.from({ length: n - 1 }, () => int(rng, mean - 5, mean + 5));
    list.push(mean * n - list.reduce((s, v) => s + v, 0));
    if (list[n - 1] < 0) return estatistica[1](rng);
    return q(rng, { id: `gen-est-media-${list.join("-")}`, pageId: "estatistica", title: "Média aritmética", tags: ["média"], question: `Qual é a média de ${list.join(", ")}?`, explanation: `Soma = ${mean * n}; divida por ${n}: ${mean * n}/${n} = ${mean}.` }, String(mean), near(rng, mean, 3).map(fmt));
  },
  (rng) => {
    const list = Array.from({ length: 5 }, () => int(rng, 1, 30));
    const sorted = [...list].sort((a, b) => a - b);
    const med = sorted[2];
    const avg = Math.round((list.reduce((s, v) => s + v, 0) / 5) * 10) / 10;
    return q(rng, { id: `gen-est-med-${list.join("-")}`, pageId: "estatistica", title: "Mediana", tags: ["mediana"], question: `Qual é a mediana de ${list.join(", ")}?`, explanation: `Ordene: ${sorted.join(", ")}. A mediana é o termo do meio: ${med}.` }, String(med), [String(list[2]), fmt(avg), String(sorted[1]), String(sorted[3]), String(med + 1), String(med - 1), String(med + 2)]);
  },
  (rng) => {
    const k = int(rng, 1, 5);
    const fav = 6 - k;
    return q(rng, { id: `gen-est-dado-${k}`, pageId: "estatistica", title: "Probabilidade", tags: ["probabilidade"], question: `Ao lançar um dado comum, qual a probabilidade de sair um número maior que ${k}?`, explanation: `Favoráveis: ${fav} (de ${k + 1} a 6). Possíveis: 6. P = ${fav}/6 = ${frac(fav, 6)}.` }, frac(fav, 6), [frac(k, 6), frac(fav, 5), "1/6", frac(Math.max(1, fav - 1), 6), "1/2"]);
  },
  (rng) => {
    const n = int(rng, 3, 6);
    return q(rng, { id: `gen-est-anag-${n}`, pageId: "estatistica", title: "Permutação", tags: ["combinatória"], question: `Quantos anagramas tem uma palavra com ${n} letras, todas diferentes?`, explanation: `Permutação simples: ${n}! = ${Array.from({ length: n }, (_, i) => n - i).join(" × ")} = ${fact(n)}.` }, fmt(fact(n)), [fmt(n * n), fmt(fact(n - 1)), fmt(fact(n) / 2), fmt(2 ** n)]);
  },
  (rng) => {
    const n = int(rng, 4, 8);
    const c = (n * (n - 1)) / 2;
    return q(rng, { id: `gen-est-comb-${n}`, pageId: "estatistica", title: "Combinação", tags: ["combinatória"], question: `Numa sala com ${n} amigos, cada um cumprimenta todos os outros uma vez. Quantos apertos de mão?`, explanation: `A ordem não importa: C(${n}, 2) = ${n}·${n - 1}/2 = ${c}.` }, String(c), [String(n * (n - 1)), String(n * 2), String(c + n), String(n)]);
  },
];

// ── Matemática financeira ────────────────────────────────────────────────────
const SUCCESSIVE: [number, number, number][] = [[10, 10, -1], [20, 20, -4], [50, 50, -25], [10, 20, -12], [25, 20, 0], [20, 10, 8], [30, 10, 17], [40, 25, 5]];
const financeira: Gen[] = [
  (rng) => {
    const C = int(rng, 2, 30) * 100, i = pick(rng, [1, 2, 3, 4, 5]), t = int(rng, 2, 12);
    const J = (C * i * t) / 100;
    return q(rng, { id: `gen-fin-js-${C}-${i}-${t}`, pageId: "financeira", title: "Juros simples", tags: ["juros simples"], question: `Quanto rendem R$ ${fmt(C)} a juros simples de ${i}% ao mês durante ${t} meses?`, explanation: `J = C·i·t = ${fmt(C)} · ${i}/100 · ${t} = R$ ${fmt(J)}.` }, `R$ ${fmt(J)}`, near(rng, J, 4, Math.max(10, C / 100)).filter((v) => v > 0).map((v) => `R$ ${fmt(v)}`));
  },
  (rng) => {
    const C = int(rng, 1, 20) * 100;
    const M = C * 1.21;
    return q(rng, { id: `gen-fin-jc-${C}`, pageId: "financeira", title: "Juros compostos", tags: ["juros compostos"], question: `R$ ${fmt(C)} aplicados a juros compostos de 10% ao mês. Qual o montante após 2 meses?`, explanation: `M = C·(1,1)² = ${fmt(C)} · 1,21 = R$ ${fmt(M)}. No simples seria ${fmt(C * 1.2)}: no composto o juro rende juro.` }, `R$ ${fmt(M)}`, [C * 1.2, C * 1.1, C * 1.25].map((v) => `R$ ${fmt(v)}`));
  },
  (rng) => {
    const [a, b, net] = pick(rng, SUCCESSIVE);
    const label = (v: number) => (v === 0 ? "Fica igual" : v > 0 ? `Aumento de ${v}%` : `Queda de ${-v}%`);
    return q(rng, { id: `gen-fin-suc-${a}-${b}`, pageId: "financeira", title: "Aumentos sucessivos", tags: ["porcentagem"], question: `Um preço sobe ${a}% e depois cai ${b}%. No total, ele:`, explanation: `Multiplique os fatores: ${fmt(1 + a / 100)} × ${fmt(1 - b / 100)} = ${fmt((1 + a / 100) * (1 - b / 100))}. ${label(net)}.` }, label(net), [label(a - b), label(net + 3), label(-(a + b)), label(0)]);
  },
  (rng) => {
    const p = pick(rng, [5, 8, 12, 15, 20, 25, 30, 35, 40]), up = rng() < 0.5;
    const f = up ? 1 + p / 100 : 1 - p / 100;
    return q(rng, { id: `gen-fin-fator-${p}-${up}`, pageId: "financeira", title: "Fator multiplicativo", tags: ["porcentagem"], question: `Qual fator aplica ${up ? "um aumento" : "um desconto"} de ${p}%?`, explanation: `${up ? "Aumento" : "Desconto"} de ${p}% → multiplicar por 1 ${up ? "+" : "−"} ${fmt(p / 100)} = ${fmt(f)}.` }, `× ${fmt(f)}`, [`× ${fmt(up ? 1 - p / 100 : 1 + p / 100)}`, `× ${fmt(p / 100)}`, `× ${p}`, `× ${fmt(up ? f + 0.1 : f - 0.1)}`]);
  },
];

// ── Geometria ────────────────────────────────────────────────────────────────
const TRIPLES: [number, number, number][] = [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 15, 17], [9, 12, 15], [12, 16, 20], [7, 24, 25]];
const geometria: Gen[] = [
  (rng) => {
    const [a, b, c] = pick(rng, TRIPLES);
    return q(rng, { id: `gen-geo-pit-${a}-${b}`, pageId: "geometria", title: "Teorema de Pitágoras", tags: ["pitágoras"], question: `Os catetos de um triângulo retângulo medem ${a} e ${b}. Quanto mede a hipotenusa?`, explanation: `h² = ${a}² + ${b}² = ${a * a} + ${b * b} = ${c * c} → h = ${c}.` }, String(c), [String(a + b), String(c + 1), String(c - 2), String(b + 1)]);
  },
  (rng) => {
    const b = int(rng, 2, 12) * 2, h = int(rng, 2, 12);
    const A = (b * h) / 2;
    return q(rng, { id: `gen-geo-tri-${b}-${h}`, pageId: "geometria", title: "Área do triângulo", tags: ["área"], question: `Área de um triângulo de base ${b} cm e altura ${h} cm:`, explanation: `A = b·h/2 = ${b}·${h}/2 = ${A} cm².` }, `${A} cm²`, [`${b * h} cm²`, `${A + h} cm²`, `${b + h} cm²`, `${A - 2} cm²`]);
  },
  (rng) => {
    const r = int(rng, 2, 10);
    return q(rng, { id: `gen-geo-circ-${r}`, pageId: "geometria", title: "Área do círculo", tags: ["círculo"], question: `Área de um círculo de raio ${r} cm:`, explanation: `A = π·r² = π·${r}² = ${r * r}π cm². (O comprimento seria 2πr = ${2 * r}π cm.)` }, `${r * r}π cm²`, [`${2 * r}π cm²`, `${r}π cm²`, `${r * r * 2}π cm²`, `${(r + 1) * (r + 1)}π cm²`]);
  },
  (rng) => {
    const n = int(rng, 5, 12);
    const s = (n - 2) * 180;
    return q(rng, { id: `gen-geo-ang-${n}`, pageId: "geometria", title: "Ângulos internos", tags: ["polígonos"], question: `Qual a soma dos ângulos internos de um polígono de ${n} lados?`, explanation: `S = (n − 2)·180° = ${n - 2}·180° = ${fmt(s)}°.` }, `${fmt(s)}°`, [`${fmt(n * 180)}°`, `${fmt(s - 180)}°`, `${fmt(s + 180)}°`, "360°"]);
  },
  (rng) => {
    const a = int(rng, 2, 9), b = int(rng, 2, 9), c = int(rng, 2, 6);
    const V = a * b * c;
    return q(rng, { id: `gen-geo-vol-${a}-${b}-${c}`, pageId: "geometria", title: "Volume do paralelepípedo", tags: ["volume"], question: `Volume de uma caixa de ${a} × ${b} × ${c} cm:`, explanation: `V = comprimento · largura · altura = ${a}·${b}·${c} = ${V} cm³. (${V} cm³ = ${fmt(V / 1000)} L)` }, `${V} cm³`, [`${a + b + c} cm³`, `${2 * (a * b + a * c + b * c)} cm³`, `${V + a * b} cm³`, `${V / c} cm³`]);
  },
];

// ── Cinemática ───────────────────────────────────────────────────────────────
const cinematica: Gen[] = [
  (rng) => {
    const v = pick(rng, [40, 50, 60, 72, 80, 90, 100, 120]), t = pick(rng, [2, 3, 4, 1.5, 2.5]);
    const d = v * t;
    return q(rng, { id: `gen-cin-vm-${v}-${t}`, pageId: "cinematica", title: "Velocidade média", tags: ["velocidade média"], question: `Um carro percorre ${fmt(d)} km em ${fmt(t)} h. Qual a velocidade média?`, explanation: `vm = Δs/Δt = ${fmt(d)}/${fmt(t)} = ${v} km/h.` }, `${v} km/h`, [v + 10, v - 10, d / 2, v * 2].map((x) => `${fmt(x)} km/h`));
  },
  (rng) => {
    const ms = int(rng, 1, 12) * 5;
    const kmh = ms * 3.6;
    const toKmh = rng() < 0.5;
    return toKmh
      ? q(rng, { id: `gen-cin-conv-ms-${ms}`, pageId: "cinematica", title: "Conversão de unidades", tags: ["unidades"], question: `${ms} m/s em km/h:`, explanation: `m/s → km/h: multiplique por 3,6. ${ms} × 3,6 = ${fmt(kmh)} km/h.` }, `${fmt(kmh)} km/h`, [`${fmt(ms / 3.6)} km/h`, `${fmt(kmh + 18)} km/h`, `${ms * 6} km/h`])
      : q(rng, { id: `gen-cin-conv-kmh-${ms}`, pageId: "cinematica", title: "Conversão de unidades", tags: ["unidades"], question: `${fmt(kmh)} km/h em m/s:`, explanation: `km/h → m/s: divida por 3,6. ${fmt(kmh)} ÷ 3,6 = ${ms} m/s.` }, `${ms} m/s`, [`${fmt(kmh * 3.6)} m/s`, `${ms + 5} m/s`, `${ms * 2} m/s`]);
  },
  (rng) => {
    const v0 = int(rng, 0, 10) * 2, a = int(rng, 1, 6), t = int(rng, 2, 10);
    const v = v0 + a * t;
    return q(rng, { id: `gen-cin-muv-${v0}-${a}-${t}`, pageId: "cinematica", title: "MUV", tags: ["MUV"], question: `Um corpo parte com ${v0} m/s e acelera ${a} m/s². Qual sua velocidade após ${t} s?`, explanation: `v = v₀ + a·t = ${v0} + ${a}·${t} = ${v} m/s.` }, `${v} m/s`, [v0 + a, a * t, v + a, v0 * t].filter((x) => x !== v).map((x) => `${x} m/s`));
  },
  (rng) => {
    const s0 = int(rng, -20, 40), v = pick(rng, [-5, -3, 2, 3, 4, 5, 8, 10]), t = int(rng, 2, 10);
    const s = s0 + v * t;
    return q(rng, { id: `gen-cin-mu-${s0}-${v}-${t}`, pageId: "cinematica", title: "Função horária do MU", tags: ["MU"], question: `s = ${s0} ${signed(v)}t (SI). Qual a posição em t = ${t} s?`, explanation: `Substitua t: s = ${s0} ${signed(v)}·${t} = ${s0} ${signed(v * t)} = ${s} m.` }, `${s} m`, near(rng, s, 5, Math.abs(v)).map((x) => `${x} m`));
  },
];

// ── Eletricidade ─────────────────────────────────────────────────────────────
const eletricidade: Gen[] = [
  (rng) => {
    const R = pick(rng, [2, 4, 5, 10, 20, 25, 50, 100]), i = pick(rng, [0.5, 1, 2, 3, 4, 5]);
    const U = R * i;
    return q(rng, { id: `gen-ele-ohm-${R}-${i}`, pageId: "eletricidade", title: "Lei de Ohm", tags: ["lei de ohm"], question: `Um resistor de ${R} Ω é percorrido por ${fmt(i)} A. Qual a tensão?`, explanation: `U = R·i = ${R}·${fmt(i)} = ${fmt(U)} V.` }, `${fmt(U)} V`, [R / i, R + i, U * 2, U + R].map((x) => `${fmt(x)} V`));
  },
  (rng) => {
    const U = pick(rng, [12, 110, 127, 220]), i = pick(rng, [2, 5, 10]);
    const P = U * i;
    return q(rng, { id: `gen-ele-pot-${U}-${i}`, pageId: "eletricidade", title: "Potência elétrica", tags: ["potência"], question: `Um aparelho ligado em ${U} V consome ${i} A. Qual sua potência?`, explanation: `P = U·i = ${U}·${i} = ${fmt(P)} W.` }, `${fmt(P)} W`, [U / i, U + i, P / 2, P * 2].map((x) => `${fmt(x)} W`));
  },
  (rng) => {
    const P = pick(rng, [100, 200, 500, 1000, 1500, 2000, 4000]), h = pick(rng, [1, 2, 3, 4, 0.5]), d = 30;
    const kwh = (P * h * d) / 1000;
    return q(rng, { id: `gen-ele-kwh-${P}-${h}`, pageId: "eletricidade", title: "Consumo de energia", tags: ["kWh"], question: `Um aparelho de ${fmt(P)} W fica ligado ${fmt(h)} h por dia. Quanto consome em 30 dias?`, explanation: `E = P·t = ${fmt(P / 1000)} kW · ${fmt(h * d)} h = ${fmt(kwh)} kWh.` }, `${fmt(kwh)} kWh`, [kwh * 10, kwh / 10, (P * h) / 1000, kwh * 2].map((x) => `${fmt(x)} kWh`));
  },
  (rng) => {
    const R = pick(rng, [6, 10, 12, 20, 30, 60]), n = pick(rng, [2, 3]);
    const serie = rng() < 0.5;
    const Req = serie ? R * n : R / n;
    return q(rng, { id: `gen-ele-req-${R}-${n}-${serie}`, pageId: "eletricidade", title: "Associação de resistores", tags: ["resistores"], question: `${n} resistores iguais de ${R} Ω ligados em ${serie ? "série" : "paralelo"}. Resistência equivalente?`, explanation: serie ? `Em série soma: ${n}·${R} = ${fmt(Req)} Ω.` : `Em paralelo, iguais: R/n = ${R}/${n} = ${fmt(Req)} Ω (sempre menor que o menor resistor).` }, `${fmt(Req)} Ω`, [serie ? R / n : R * n, R, R + n, Req * 2].map((x) => `${fmt(x)} Ω`));
  },
];

// ── Energia ──────────────────────────────────────────────────────────────────
const energia: Gen[] = [
  (rng) => {
    const m = pick(rng, [1, 2, 4, 5, 10, 50]), v = pick(rng, [2, 4, 6, 10, 20]);
    const E = (m * v * v) / 2;
    return q(rng, { id: `gen-ene-ec-${m}-${v}`, pageId: "energia", title: "Energia cinética", tags: ["energia cinética"], question: `Energia cinética de um corpo de ${m} kg a ${v} m/s:`, explanation: `Ec = m·v²/2 = ${m}·${v * v}/2 = ${fmt(E)} J.` }, `${fmt(E)} J`, [m * v, m * v * v, E / 2, (m * v) / 2].filter((x) => x !== E).map((x) => `${fmt(x)} J`));
  },
  (rng) => {
    const m = pick(rng, [1, 2, 3, 5, 10, 60]), h = pick(rng, [2, 5, 10, 15, 20]);
    const E = m * 10 * h;
    return q(rng, { id: `gen-ene-ep-${m}-${h}`, pageId: "energia", title: "Energia potencial", tags: ["energia potencial"], question: `Energia potencial de ${m} kg a ${h} m de altura (g = 10 m/s²):`, explanation: `Ep = m·g·h = ${m}·10·${h} = ${fmt(E)} J.` }, `${fmt(E)} J`, [m * h, E / 2, E * 10, E + 100].map((x) => `${fmt(x)} J`));
  },
  (rng) => {
    const W = pick(rng, [600, 1200, 1800, 3000, 6000]), t = pick(rng, [2, 3, 4, 5, 10, 20]);
    const P = W / t;
    return q(rng, { id: `gen-ene-pot-${W}-${t}`, pageId: "energia", title: "Potência", tags: ["potência"], question: `Um motor realiza ${fmt(W)} J de trabalho em ${t} s. Qual a potência?`, explanation: `P = τ/Δt = ${fmt(W)}/${t} = ${fmt(P)} W.` }, `${fmt(P)} W`, [W * t, P * 2, P / 2, W - t].map((x) => `${fmt(x)} W`));
  },
];

// ── Estequiometria ───────────────────────────────────────────────────────────
const MOLAR: [string, string, number][] = [
  ["H₂O", "água", 18], ["CO₂", "gás carbônico", 44], ["NH₃", "amônia", 17], ["CH₄", "metano", 16], ["O₂", "gás oxigênio", 32],
  ["NaCl", "cloreto de sódio", 58.5], ["H₂SO₄", "ácido sulfúrico", 98], ["C₆H₁₂O₆", "glicose", 180], ["CaCO₃", "carbonato de cálcio", 100], ["NaOH", "hidróxido de sódio", 40],
];
const estequiometria: Gen[] = [
  (rng) => {
    const [f, name, mm] = pick(rng, MOLAR);
    return q(rng, { id: `gen-stq-mm-${f}`, pageId: "estequiometria", title: "Massa molar", tags: ["massa molar"], question: `Massa molar do(a) ${name} (${f})? (H = 1, C = 12, N = 14, O = 16, Na = 23, S = 32, Cl = 35,5, Ca = 40)`, explanation: `Some as massas dos átomos de ${f}: ${fmt(mm)} g/mol.` }, `${fmt(mm)} g/mol`, MOLAR.filter(([x]) => x !== f).sort(() => rng() - 0.5).map(([, , m]) => `${fmt(m)} g/mol`));
  },
  (rng) => {
    const [f, name, mm] = pick(rng, MOLAR.filter(([, , m]) => Number.isInteger(m)));
    const n = pick(rng, [0.5, 2, 3, 4, 5]);
    const m = mm * n;
    return q(rng, { id: `gen-stq-mol-${f}-${n}`, pageId: "estequiometria", title: "Número de mols", tags: ["mol"], question: `Quantos mols há em ${fmt(m)} g de ${name} (${f}, ${mm} g/mol)?`, explanation: `n = m/M = ${fmt(m)}/${mm} = ${fmt(n)} mol.` }, `${fmt(n)} mol`, [n * 2, n + 1, m / 10, n / 2].filter((x) => x !== n).map((x) => `${fmt(x)} mol`));
  },
  (rng) => {
    const n = pick(rng, [0.5, 2, 3, 4, 10]);
    const val = (6 * n).toString().replace(".", ",");
    return q(rng, { id: `gen-stq-avo-${n}`, pageId: "estequiometria", title: "Constante de Avogadro", tags: ["avogadro"], question: `Quantas moléculas há em ${fmt(n)} mol de uma substância? (1 mol ≈ 6·10²³)`, explanation: `${fmt(n)} × 6·10²³ = ${val}·10²³ moléculas.` }, `${val}·10²³`, [`${fmt(n)}·10²³`, `${val}·10²²`, `6·10²³`, `${fmt(6 + n)}·10²³`]);
  },
];

/** Procedural generators for sub-subject accounts, so these accounts never run dry. */
export const ACCOUNT_GENERATORS: Record<string, Gen[]> = {
  funcoes, trigonometria, estatistica, financeira, geometria, cinematica, eletricidade, energia, estequiometria,
};
