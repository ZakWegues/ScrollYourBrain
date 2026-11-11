import type { PageId, StudyPage } from "@/feed/types";

/** Subjects (and general-interest pages). Each subject also has sub-subject accounts below. */
const ROOTS: StudyPage[] = [
  { id: "matematica", name: "Matemática", handle: "@matematica", description: "Números, padrões e o raciocínio por trás de tudo.", icon: "function-variant", colors: ["#8B5CF6", "#6366F1"] },
  { id: "fisica", name: "Física", handle: "@fisica", description: "Energia, movimento e as leis que regem o universo.", icon: "atom", colors: ["#0EA5E9", "#22D3EE"] },
  { id: "quimica", name: "Química", handle: "@quimica", description: "Átomos, reações e a matéria do dia a dia.", icon: "flask-outline", colors: ["#10B981", "#84CC16"] },
  { id: "biologia", name: "Biologia", handle: "@biologia", description: "Células, genes, evolução e a vida em detalhes.", icon: "dna", colors: ["#22C55E", "#14B8A6"] },
  { id: "historia", name: "História", handle: "@historia", description: "Pessoas, impérios e viradas que moldaram o presente.", icon: "pillar", colors: ["#F59E0B", "#EF4444"] },
  { id: "geografia", name: "Geografia", handle: "@geografia", description: "Países, capitais, clima e paisagens.", icon: "earth", colors: ["#06B6D4", "#3B82F6"] },
  { id: "portugues", name: "Português", handle: "@portugues", description: "Gramática, escrita e as armadilhas da língua.", icon: "book-open-variant", colors: ["#F43F5E", "#F97316"] },
  { id: "ingles", name: "Inglês", handle: "@english", description: "Vocabulário e expressões para destravar o inglês.", icon: "translate", colors: ["#3B82F6", "#8B5CF6"] },
  { id: "filosofia", name: "Filosofia", handle: "@filosofia", description: "Grandes perguntas e quem tentou respondê-las.", icon: "head-lightbulb-outline", colors: ["#64748B", "#A78BFA"] },
  { id: "sociologia", name: "Sociologia", handle: "@sociologia", description: "Sociedade, cultura, trabalho e cidadania.", icon: "account-group", colors: ["#0D9488", "#6366F1"] },
  { id: "macetes", name: "Macetes de prova", handle: "@macetes", description: "Chute inteligente, gestão de tempo, revisão e pegadinhas.", icon: "lightning-bolt", colors: ["#F59E0B", "#EC4899"] },
  { id: "programacao", name: "Programação", handle: "@dev", description: "Lógica, algoritmos e código que funciona.", icon: "code-braces", colors: ["#A855F7", "#EC4899"] },
  { id: "astronomia", name: "Astronomia", handle: "@cosmos", description: "Estrelas, planetas e o tamanho do cosmos.", icon: "telescope", colors: ["#312E81", "#7C3AED"] },
  { id: "curiosidades", name: "Curiosidades", handle: "@wiki", description: "Um verbete aleatório da Wikipédia a cada scroll.", icon: "lightbulb-on-outline", colors: ["#EAB308", "#F97316"] },
];

type Sub = [id: string, name: string, handle: string, description: string, icon: string, a: string, b: string];

const SUBS: Record<PageId, Sub[]> = {
  matematica: [
    ["funcoes", "Funções", "@funcoes", "Afim, quadrática, exponencial e log, com contas na hora.", "chart-bell-curve-cumulative", "#7C3AED", "#2563EB"],
    ["algebra", "Álgebra e Equações", "@algebra", "Equações, conjuntos, PA/PG, matrizes e polinômios.", "alpha-x-box-outline", "#6366F1", "#0EA5E9"],
    ["geometria", "Geometria", "@geometria", "Áreas, volumes, ângulos e geometria analítica.", "shape-outline", "#8B5CF6", "#EC4899"],
    ["trigonometria", "Trigonometria", "@trigo", "Seno, cosseno, tangente e o ciclo trigonométrico.", "angle-acute", "#A855F7", "#6366F1"],
    ["estatistica", "Estatística e Probabilidade", "@estatistica", "Média, mediana, moda, combinatória e chances.", "chart-bar", "#4F46E5", "#22D3EE"],
    ["financeira", "Matemática Financeira", "@financeira", "Porcentagem, juros simples e compostos, descontos.", "cash-multiple", "#9333EA", "#10B981"],
  ],
  fisica: [
    ["cinematica", "Cinemática", "@cinematica", "Velocidade, aceleração, MU, MUV e lançamentos.", "speedometer", "#0284C7", "#22D3EE"],
    ["dinamica", "Dinâmica", "@dinamica", "Leis de Newton, atrito, impulso e gravitação.", "rocket-launch-outline", "#0EA5E9", "#6366F1"],
    ["energia", "Energia e Trabalho", "@energia", "Energia cinética, potencial, potência e conservação.", "lightning-bolt-outline", "#06B6D4", "#F59E0B"],
    ["termologia", "Termologia", "@termologia", "Calor, temperatura, dilatação e termodinâmica.", "thermometer", "#0EA5E9", "#F97316"],
    ["optica", "Óptica", "@optica", "Luz, espelhos, lentes e o olho humano.", "eye-outline", "#0369A1", "#A855F7"],
    ["ondas", "Ondas e Som", "@ondas", "Frequência, comprimento de onda, som e ressonância.", "sine-wave", "#0891B2", "#3B82F6"],
    ["eletricidade", "Eletricidade", "@eletricidade", "Cargas, circuitos, Lei de Ohm, potência e magnetismo.", "flash-outline", "#0EA5E9", "#EAB308"],
    ["fisica-moderna", "Física Moderna", "@moderna", "Relatividade, fóton, efeito fotoelétrico e átomo.", "atom-variant", "#1D4ED8", "#22D3EE"],
  ],
  quimica: [
    ["atomistica", "Atomística", "@atomistica", "Matéria, misturas, modelos atômicos e tabela periódica.", "atom", "#059669", "#22D3EE"],
    ["ligacoes", "Ligações e Inorgânica", "@ligacoes", "Iônica, covalente, metálica, ácidos, bases, sais e óxidos.", "vector-link", "#10B981", "#6366F1"],
    ["solucoes", "Soluções", "@solucoes", "Concentração, diluição e propriedades coligativas.", "beaker-outline", "#14B8A6", "#3B82F6"],
    ["fisico-quimica", "Físico-Química", "@fisicoquimica", "Termoquímica, cinética, equilíbrio e pH.", "fire", "#16A34A", "#F97316"],
    ["organica", "Química Orgânica", "@organica", "Cadeias, funções, isomeria, reações e polímeros.", "hexagon-multiple-outline", "#10B981", "#A855F7"],
    ["estequiometria", "Estequiometria", "@estequiometria", "Mol, massa molar e cálculos de reação.", "scale-balance", "#65A30D", "#10B981"],
  ],
  biologia: [
    ["citologia", "Citologia", "@citologia", "Bioquímica, células, organelas e divisão celular.", "circle-multiple-outline", "#16A34A", "#06B6D4"],
    ["genetica", "Genética", "@genetica", "Mendel, heredogramas, DNA e biotecnologia.", "dna", "#22C55E", "#8B5CF6"],
    ["evolucao", "Evolução", "@evolucao", "Darwin, seleção natural e especiação.", "family-tree", "#15803D", "#F59E0B"],
    ["ecologia", "Ecologia", "@ecologia", "Cadeias alimentares, ciclos e relações ecológicas.", "leaf", "#22C55E", "#84CC16"],
    ["fisiologia", "Corpo Humano", "@fisiologia", "Sistemas digestório, circulatório, nervoso e mais.", "heart-pulse", "#16A34A", "#F43F5E"],
    ["seres-vivos", "Seres Vivos", "@seresvivos", "Vírus, bactérias, fungos, plantas e animais.", "bug-outline", "#4D7C0F", "#14B8A6"],
  ],
  historia: [
    ["antiguidade", "Antiguidade", "@antiguidade", "Pré-história, Egito, Mesopotâmia, Grécia e Roma.", "pillar", "#D97706", "#B45309"],
    ["medieval-moderna", "Idade Média e Moderna", "@moderna_hist", "Feudalismo, Renascimento, Reformas e Revoluções.", "castle", "#F59E0B", "#7C3AED"],
    ["brasil-colonia", "Brasil Colônia e Império", "@brasilcolonia", "Colonização, ciclos econômicos, Independência e Império.", "sail-boat", "#EA580C", "#16A34A"],
    ["brasil-republica", "Brasil República", "@brasilrepublica", "República Velha, Vargas, Ditadura e Redemocratização.", "flag-variant-outline", "#F59E0B", "#16A34A"],
    ["guerras", "Guerras Mundiais", "@guerras", "Imperialismo, 1ª e 2ª Guerra e o entreguerras.", "tank", "#DC2626", "#78716C"],
    ["mundo-atual", "Guerra Fria e Mundo Atual", "@mundoatual", "Guerra Fria, descolonização e mundo contemporâneo.", "earth-box", "#EF4444", "#3B82F6"],
  ],
  geografia: [
    ["cartografia", "Cartografia e Natureza", "@natureza_geo", "Mapas, escalas, relevo, clima, biomas e ambiente.", "map-outline", "#0891B2", "#22C55E"],
    ["populacao", "População e Brasil", "@populacao", "Demografia, urbanização e regiões do Brasil.", "account-multiple-outline", "#06B6D4", "#F59E0B"],
    ["economia-geo", "Economia e Energia", "@economia_geo", "Agropecuária, indústria e fontes de energia.", "factory", "#0284C7", "#EAB308"],
    ["geopolitica", "Geopolítica", "@geopolitica", "Globalização, blocos econômicos e conflitos.", "earth", "#2563EB", "#EF4444"],
  ],
  portugues: [
    ["gramatica", "Gramática", "@gramatica", "Classes de palavras, sintaxe, concordância e crase.", "format-letter-case", "#E11D48", "#F97316"],
    ["literatura", "Literatura", "@literatura", "Escolas literárias do Quinhentismo ao Modernismo.", "feather", "#F43F5E", "#A855F7"],
    ["interpretacao", "Interpretação de Texto", "@interpretacao", "Funções e figuras de linguagem, gêneros e leitura.", "text-search", "#FB7185", "#3B82F6"],
    ["redacao", "Redação", "@redacao", "Estrutura, repertório e competências do ENEM.", "pencil-outline", "#F97316", "#EAB308"],
  ],
  ingles: [
    ["grammar", "English Grammar", "@grammar", "Tempos verbais, modais, voz passiva e condicionais.", "alphabetical-variant", "#2563EB", "#8B5CF6"],
    ["reading", "English Reading", "@reading", "Cognatos, falsos cognatos e estratégias de leitura.", "book-search-outline", "#3B82F6", "#22D3EE"],
  ],
};

const children: StudyPage[] = Object.entries(SUBS).flatMap(([parent, list]) =>
  list.map(([id, name, handle, description, icon, a, b]) => ({ id, name, handle, description, icon, colors: [a, b] as const, parent })),
);

export const PAGES: StudyPage[] = [...ROOTS, ...children];
/** Subjects and general pages (no sub-subject accounts). */
export const ROOT_PAGES: StudyPage[] = ROOTS;
/** Sub-subject accounts only. */
export const SUB_PAGES: StudyPage[] = children;

export const PAGE_BY_ID: Record<string, StudyPage> = Object.fromEntries(PAGES.map((p) => [p.id, p]));

export const getPage = (id: string): StudyPage => PAGE_BY_ID[id] ?? PAGES[0];

/** The subject an account belongs to (itself for subjects). */
export const rootOf = (id: PageId): PageId => PAGE_BY_ID[id]?.parent ?? id;

export const childrenOf = (id: PageId): StudyPage[] => children.filter((p) => p.parent === id);

/** A page plus every account under it. */
export const familyOf = (id: PageId): PageId[] => [id, ...childrenOf(id).map((p) => p.id)];

/** Expands a list of pages with their accounts, without duplicates. */
export const withFamilies = (ids: readonly PageId[]): PageId[] => [...new Set(ids.flatMap(familyOf))];
