import type { StudyItem } from "@/feed/types";

/**
 * Exam strategy cards for the "Macetes de prova" page. Most come from reels the user
 * shared (transcribed); they apply to ENEM, vestibulares and school exams alike.
 */
export const MACETES: StudyItem[] = [
  {
    id: "mac-porcentagem-fator", pageId: "macetes", kind: "concept", title: "Porcentagem pelo fator", tags: ["porcentagem", "matemática", "enem"],
    beats: ["Esqueça a regra de três para aumento e desconto.", "Aumento de 20%: multiplique por 1,2.", "Desconto de 15%: multiplique por 0,85.", "Vários aumentos? Multiplique os fatores em sequência."],
    takeaway: "Aumento de x% = ×(1 + x/100). Desconto de x% = ×(1 − x/100).",
  },
  {
    id: "mac-sobe-desce", pageId: "macetes", kind: "quiz", title: "Pegadinha da porcentagem", tags: ["porcentagem", "pegadinha", "enem"],
    question: "Um preço de R$ 100 sobe 20% e depois cai 20%. Quanto fica?", options: ["R$ 100", "R$ 96", "R$ 104", "R$ 80"], answer: 1,
    explanation: "100 × 1,2 = 120; 120 × 0,8 = 96. Subir e descer a mesma porcentagem não volta ao original.",
  },
  {
    id: "mac-grafico", pageId: "macetes", kind: "concept", title: "Gráficos: leia antes de calcular", tags: ["estatística", "gráficos", "enem"],
    beats: ["Leia o título do gráfico.", "Leia os eixos e as unidades.", "Só depois olhe as alternativas.", "Muitos erros vêm de unidade trocada, não de conta."],
    takeaway: "Título → eixos → unidades → alternativas.",
  },
  {
    id: "mac-media-mediana-moda", pageId: "macetes", kind: "flash", title: "Média, mediana e moda", tags: ["estatística", "enem"],
    front: "Como não confundir média, mediana e moda?", back: "Média: soma e divide. Mediana: o valor do meio (com os dados em ordem). Moda: o que mais se repete.",
  },
  {
    id: "mac-ecologia-energia", pageId: "macetes", kind: "flash", title: "Ecologia na reta final", tags: ["ecologia", "biologia", "enem"],
    front: "O que sempre acontece com a energia na cadeia alimentar?", back: "Diminui a cada nível trófico. Por isso há menos predadores do que presas.",
  },
  {
    id: "mac-estequiometria", pageId: "macetes", kind: "concept", title: "Estequiometria em 3 passos", tags: ["estequiometria", "química", "enem"],
    beats: ["1º: balanceie a equação.", "2º: monte a proporção em mols.", "3º: só então faça a conta (massa, volume, partículas).", "Pular o balanceamento é o erro mais comum."],
    takeaway: "Balancear → proporção em mols → conta.",
  },
  {
    id: "mac-kw-kwh", pageId: "macetes", kind: "quiz", title: "kW x kWh", tags: ["eletricidade", "física", "pegadinha", "enem"],
    question: "Qual grandeza a unidade kWh mede?", options: ["Potência", "Energia", "Corrente", "Tensão"], answer: 1,
    explanation: "kW é potência; kWh é energia (potência × tempo). Para dar kWh, use a potência em kW e o tempo em horas.",
  },
  {
    id: "mac-eletricidade", pageId: "macetes", kind: "flash", title: "Eletricidade sem susto", tags: ["eletricidade", "física", "enem"],
    front: "As duas fórmulas de eletricidade que mais caem", back: "Potência: P = U·i (tensão × corrente). Energia: E = P·t.",
  },
  {
    id: "mac-classificar-erros", pageId: "macetes", kind: "concept", title: "Classifique cada erro", tags: ["revisão", "simulado", "estratégia"],
    beats: ["Faça questões de provas antigas com tempo marcado.", "Para cada erro, pergunte: o que faltou?", "Conteúdo, conta ou leitura?", "Cada tipo tem um remédio diferente."],
    takeaway: "Conteúdo → revise o assunto. Conta → refaça devagar. Leitura → sublinhe o comando da questão.",
  },
  {
    id: "mac-reta-final", pageId: "macetes", kind: "concept", title: "Plano dos últimos 4 dias", tags: ["revisão", "planejamento", "enem"],
    beats: ["Dia 1: uma prova antiga com tempo. Classifique os erros.", "Dia 2: porcentagem e pegadinhas de conta.", "Dia 3: gráficos, unidades (kW x kWh).", "Dia 4: nada novo. Revise seus erros e descanse."],
    takeaway: "Na véspera, conteúdo novo atrapalha mais do que ajuda.",
  },
  {
    id: "mac-prioridade", pageId: "macetes", kind: "flash", title: "Revisar com prioridade", tags: ["revisão", "estratégia"],
    front: "Estudar tudo ao mesmo tempo na reta final funciona?", back: "Não. Escolha os assuntos que mais caem e os que você mais erra. Revisão é prioridade, não previsão.",
  },
  {
    id: "mac-eliminacao", pageId: "macetes", kind: "concept", title: "Chute por eliminação", tags: ["chute", "estratégia"],
    beats: ["Nunca deixe questão em branco se não há desconto por erro.", "Elimine o que está claramente errado.", "Desconfie de \"sempre\", \"nunca\", \"somente\".", "Entre duas, escolha a mais coerente com o enunciado."],
    takeaway: "Eliminar 2 de 5 alternativas já aumenta sua chance de 20% para 33%.",
  },
  {
    id: "mac-tri", pageId: "macetes", kind: "flash", title: "TRI no ENEM", tags: ["tri", "enem", "chute"],
    front: "Por que errar fáceis e acertar difíceis é ruim no ENEM?", back: "A TRI valoriza a coerência: acertos em difíceis com erros em fáceis parecem chute e valem menos. Garanta as fáceis primeiro.",
  },
  {
    id: "mac-tempo", pageId: "macetes", kind: "concept", title: "Gestão de tempo", tags: ["tempo", "estratégia", "enem"],
    beats: ["Faça uma primeira passada só com as que você sabe.", "Marque as difíceis e volte depois.", "Não gaste mais de 4 minutos travado numa questão.", "Reserve 30 minutos no fim para o gabarito."],
    takeaway: "Questão difícil vale o mesmo que fácil na prova da escola: pegue as fáceis primeiro.",
  },
];
