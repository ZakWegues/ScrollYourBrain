import type { StudyPage } from "@/feed/types";

export const PAGES: StudyPage[] = [
  { id: "matematica", name: "Matemática", handle: "@matematica", description: "Números, padrões e o raciocínio por trás de tudo.", icon: "function-variant", colors: ["#8B5CF6", "#6366F1"] },
  { id: "fisica", name: "Física", handle: "@fisica", description: "Energia, movimento e as leis que regem o universo.", icon: "atom", colors: ["#0EA5E9", "#22D3EE"] },
  { id: "quimica", name: "Química", handle: "@quimica", description: "Átomos, reações e a matéria do dia a dia.", icon: "flask-outline", colors: ["#10B981", "#84CC16"] },
  { id: "biologia", name: "Biologia", handle: "@biologia", description: "Células, genes, evolução e a vida em detalhes.", icon: "dna", colors: ["#22C55E", "#14B8A6"] },
  { id: "historia", name: "História", handle: "@historia", description: "Pessoas, impérios e viradas que moldaram o presente.", icon: "pillar", colors: ["#F59E0B", "#EF4444"] },
  { id: "geografia", name: "Geografia", handle: "@geografia", description: "Países, capitais, clima e paisagens.", icon: "earth", colors: ["#06B6D4", "#3B82F6"] },
  { id: "programacao", name: "Programação", handle: "@dev", description: "Lógica, algoritmos e código que funciona.", icon: "code-braces", colors: ["#A855F7", "#EC4899"] },
  { id: "portugues", name: "Português", handle: "@portugues", description: "Gramática, escrita e as armadilhas da língua.", icon: "book-open-variant", colors: ["#F43F5E", "#F97316"] },
  { id: "ingles", name: "Inglês", handle: "@english", description: "Vocabulário e expressões para destravar o inglês.", icon: "translate", colors: ["#3B82F6", "#8B5CF6"] },
  { id: "filosofia", name: "Filosofia", handle: "@filosofia", description: "Grandes perguntas e quem tentou respondê-las.", icon: "head-lightbulb-outline", colors: ["#64748B", "#A78BFA"] },
  { id: "sociologia", name: "Sociologia", handle: "@sociologia", description: "Sociedade, cultura, trabalho e cidadania.", icon: "account-group", colors: ["#0D9488", "#6366F1"] },
  { id: "macetes", name: "Macetes de prova", handle: "@macetes", description: "Chute inteligente, gestão de tempo, revisão e pegadinhas.", icon: "lightning-bolt", colors: ["#F59E0B", "#EC4899"] },
  { id: "astronomia", name: "Astronomia", handle: "@cosmos", description: "Estrelas, planetas e o tamanho do cosmos.", icon: "telescope", colors: ["#312E81", "#7C3AED"] },
  { id: "curiosidades", name: "Curiosidades", handle: "@wiki", description: "Um verbete aleatório da Wikipédia a cada scroll.", icon: "lightbulb-on-outline", colors: ["#EAB308", "#F97316"] },
];

export const PAGE_BY_ID: Record<string, StudyPage> = Object.fromEntries(PAGES.map((p) => [p.id, p]));

export const getPage = (id: string): StudyPage => PAGE_BY_ID[id] ?? PAGES[0];
