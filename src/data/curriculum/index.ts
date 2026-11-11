import type { StudyItem } from "@/feed/types";
import { shuffleAnswers } from "@/lib/shuffle";
import type { Bimestre, CurriculumTopic, Serie } from "./build";
import { FISICA, MATEMATICA, QUIMICA } from "./exatas";
import { FILOSOFIA, INGLES, PORTUGUES, SOCIOLOGIA } from "./linguagens";
import { BIOLOGIA, GEOGRAFIA, HISTORIA } from "./natureza-humanas";
// Extra quizzes are appended to the blocks above when these modules load.
import "./more-exatas";
import "./more-humanas";
// Finer-grained topics (subtopics), each published by a sub-subject account.
import "./pack-matematica";
import "./pack-fisica";
import "./pack-quimica";
import "./pack-biologia";
import "./pack-humanas";
import "./pack-linguagens";

export type { Bimestre, CurriculumTopic, Serie } from "./build";

const ALL = [MATEMATICA, FISICA, QUIMICA, BIOLOGIA, HISTORIA, GEOGRAFIA, PORTUGUES, INGLES, FILOSOFIA, SOCIOLOGIA];

/** Which account publishes each original (one-per-bimestre) topic. New topics name their account directly. */
const ACCOUNT_OF: Record<string, string> = {
  "Conjuntos e intervalos": "algebra", "Função afim (1º grau)": "funcoes", "Função quadrática": "funcoes", "Exponencial e logaritmo": "funcoes",
  "Trigonometria": "trigonometria", "Progressões (PA e PG)": "algebra", "Matrizes e sistemas": "algebra", "Combinatória e probabilidade": "estatistica",
  "Geometria plana e espacial": "geometria", "Geometria analítica": "geometria", "Estatística e matemática financeira": "financeira", "Números complexos e polinômios": "algebra",
  "Cinemática": "cinematica", "Leis de Newton": "dinamica", "Trabalho, energia e potência": "energia", "Impulso, quantidade de movimento e gravitação": "dinamica",
  "Termologia": "termologia", "Termodinâmica": "termologia", "Óptica geométrica": "optica", "Ondulatória": "ondas",
  "Eletrostática": "eletricidade", "Eletrodinâmica": "eletricidade", "Magnetismo e eletromagnetismo": "eletricidade", "Física moderna": "fisica-moderna",
  "Matéria, substâncias e misturas": "atomistica", "Modelos atômicos e tabela periódica": "atomistica", "Ligações químicas": "ligacoes", "Funções inorgânicas": "ligacoes",
  "Soluções e concentração": "solucoes", "Termoquímica": "fisico-quimica", "Cinética química": "fisico-quimica", "Equilíbrio químico e pH": "fisico-quimica",
  "Cadeias carbônicas": "organica", "Funções orgânicas": "organica", "Isomeria": "organica", "Reações orgânicas e polímeros": "organica",
  "Funções da linguagem": "interpretacao", "Figuras de linguagem": "interpretacao", "Classes de palavras": "gramatica", "Quinhentismo e Barroco": "literatura",
  "Sintaxe do período simples": "gramatica", "Arcadismo e Romantismo": "literatura", "Realismo e Naturalismo": "literatura", "Concordância e regência": "gramatica",
  "Período composto": "gramatica", "Pré-Modernismo e Modernismo": "literatura", "Interpretação e gêneros textuais": "interpretacao", "Redação dissertativo-argumentativa": "redacao",
  "Cognatos e falsos cognatos": "reading", "Estratégias de leitura": "reading",
  "Bioquímica": "citologia", "Citologia": "citologia", "Divisão celular": "citologia", "Histologia e embriologia": "citologia",
  "Vírus, bactérias, protistas e fungos": "seres-vivos", "Botânica": "seres-vivos", "Zoologia": "seres-vivos", "Fisiologia humana": "fisiologia",
  "Genética mendeliana": "genetica", "Genética molecular e biotecnologia": "genetica", "Evolução": "evolucao", "Ecologia": "ecologia",
  "Pré-história e Antiguidade oriental": "antiguidade", "Grécia e Roma": "antiguidade", "Idade Média": "medieval-moderna", "Renascimento, Reformas e Navegações": "medieval-moderna",
  "Brasil Colônia": "brasil-colonia", "Iluminismo e Revoluções": "medieval-moderna", "Independências e Brasil Império": "brasil-colonia", "Imperialismo e Primeira Guerra": "guerras",
  "República Velha e Era Vargas": "brasil-republica", "Entreguerras e Segunda Guerra": "guerras", "Guerra Fria e Ditadura Militar": "mundo-atual", "Redemocratização e mundo contemporâneo": "brasil-republica",
  "Cartografia": "cartografia", "Geologia e relevo": "cartografia", "Clima e hidrografia": "cartografia", "Biomas e questões ambientais": "cartografia",
  "População e demografia": "populacao", "Urbanização": "populacao", "Agropecuária e espaço rural": "economia-geo", "Indústria e energia": "economia-geo",
  "Globalização e blocos econômicos": "geopolitica", "Geopolítica e conflitos": "geopolitica", "Regiões do Brasil": "populacao", "Meio ambiente e sustentabilidade": "cartografia",
};
// English grammar topics are every English topic not listed above.
const DEFAULT_ACCOUNT: Record<string, string> = { ingles: "grammar" };

export const TOPICS: CurriculumTopic[] = ALL.flatMap((s) => s.topics);
for (const t of TOPICS) if (t.page === t.subject) t.page = ACCOUNT_OF[t.name] ?? DEFAULT_ACCOUNT[t.subject] ?? t.subject;
export const TOPIC_BY_ID: Record<string, CurriculumTopic> = Object.fromEntries(TOPICS.map((t) => [t.id, t]));
export const CURRICULUM_ITEMS: StudyItem[] = shuffleAnswers(ALL.flatMap((s) => s.items));
for (const item of CURRICULUM_ITEMS) if (item.topicId) item.pageId = TOPIC_BY_ID[item.topicId].page;

/** Subjects that have a high-school curriculum (per-subject modes). */
export const SCHOOL_SUBJECTS = ["matematica", "portugues", "fisica", "quimica", "biologia", "historia", "geografia", "ingles", "filosofia", "sociologia"] as const;

/** ENEM areas and the subjects in each. */
export const ENEM_AREAS = [
  { id: "linguagens", name: "Linguagens", subjects: ["portugues", "ingles"] },
  { id: "humanas", name: "Humanas", subjects: ["historia", "geografia", "filosofia", "sociologia"] },
  { id: "natureza", name: "Natureza", subjects: ["biologia", "fisica", "quimica"] },
  { id: "matematica", name: "Matemática", subjects: ["matematica"] },
] as const;

/** Typical school calendar: which months belong to each bimestre. */
export const MONTHS: { month: number; name: string; bimestre: Bimestre }[] = [
  { month: 2, name: "Fevereiro", bimestre: 1 }, { month: 3, name: "Março", bimestre: 1 }, { month: 4, name: "Abril", bimestre: 1 },
  { month: 5, name: "Maio", bimestre: 2 }, { month: 6, name: "Junho", bimestre: 2 }, { month: 7, name: "Julho", bimestre: 2 },
  { month: 8, name: "Agosto", bimestre: 3 }, { month: 9, name: "Setembro", bimestre: 3 },
  { month: 10, name: "Outubro", bimestre: 4 }, { month: 11, name: "Novembro", bimestre: 4 }, { month: 12, name: "Dezembro", bimestre: 4 },
];

export const bimestreOfMonth = (month: number): Bimestre => MONTHS.find((m) => m.month === month)?.bimestre ?? 1;

export function topicsWhere(f: { subjects?: readonly string[]; series?: readonly Serie[]; bimestres?: readonly Bimestre[] }): CurriculumTopic[] {
  return TOPICS.filter(
    (t) => (!f.subjects || f.subjects.includes(t.subject)) && (!f.series || f.series.includes(t.serie)) && (!f.bimestres || f.bimestres.includes(t.bimestre)),
  );
}

export function itemsForTopics(topicIds: readonly string[], extra: readonly StudyItem[] = []): StudyItem[] {
  const ids = new Set(topicIds);
  return [...CURRICULUM_ITEMS, ...extra].filter((i) => i.topicId && ids.has(i.topicId));
}
