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
  {
    id: "mac-area-uma-formula", pageId: "macetes", kind: "concept", title: "Área: uma fórmula só", tags: ["área", "geometria", "enem", "obmep"],
    beats: [
      "Retângulo: lado menor × lado maior (base × altura).",
      "Quadrado e paralelogramo também: base × altura (o paralelogramo é um retângulo \"tombado\").",
      "Triângulo é metade de um retângulo: base × altura ÷ 2.",
      "Trapézio: junte com uma cópia de cabeça para baixo. Vira paralelogramo de base (B + b): (B + b) × altura ÷ 2.",
    ],
    takeaway: "Não decore dez fórmulas: tudo vem de base × altura. A altura é sempre perpendicular à base.",
  },
  {
    id: "mac-area-trapezio", pageId: "macetes", kind: "quiz", title: "Área do trapézio sem decorar", tags: ["área", "geometria", "enem"],
    question: "Um trapézio tem bases 10 cm e 6 cm e altura 4 cm. Qual é a área?", options: ["24 cm²", "32 cm²", "64 cm²", "40 cm²"], answer: 1,
    explanation: "Duas cópias formam um paralelogramo de base 10 + 6 = 16 e altura 4: 64 cm². Uma cópia é metade: 32 cm².",
  },
  {
    id: "mac-area-altura", pageId: "macetes", kind: "flash", title: "Pegadinha da altura", tags: ["área", "geometria", "pegadinha"],
    front: "No paralelogramo e no triângulo, qual medida entra como \"altura\" na conta da área?",
    back: "A distância perpendicular (reta, a 90°) até a base — não o lado inclinado. Trace a linha reta e use ela.",
  },
  // ── 2º dia do ENEM: ordem de prova (reel @guidoenem) ──
  {
    id: "mac-ordem-2-dia", pageId: "macetes", kind: "concept", title: "Ordem de prova no 2º dia", tags: ["enem", "2º dia", "tri", "estratégia"],
    beats: [
      "O 2º dia vence pelo tempo e pelo cansaço: a ordem importa.",
      "Comece por Matemática, com a cabeça descansada: é onde o cansaço mais causa erro bobo.",
      "Na 1ª passada, pule logaritmo, análise combinatória, probabilidade e geometria analítica.",
      "Depois Natureza: Biologia primeiro, depois Química e por fim Física.",
      "Travou ou não entendeu o texto? Pule e volte no fim.",
    ],
    takeaway: "O que sobrar sem tempo deve ser só o que é difícil de verdade, e na TRI isso pesa menos.",
  },
  {
    id: "mac-natureza-ordem", pageId: "macetes", kind: "quiz", title: "Por onde começar Natureza", tags: ["enem", "2º dia", "tri"],
    question: "Pela estratégia do 2º dia, em Ciências da Natureza você começa por:", options: ["Física", "Química", "Biologia", "Tanto faz"], answer: 2,
    explanation: "Biologia costuma ter as questões mais acessíveis: acertar as fáceis primeiro dá mais pontos na TRI. Depois Química e, por fim, Física.",
  },
  {
    id: "mac-pular-mat", pageId: "macetes", kind: "flash", title: "Matemática: deixe para depois", tags: ["enem", "2º dia", "matemática"],
    front: "Quais assuntos de Matemática deixar para a 2ª passada no ENEM?",
    back: "Logaritmo, análise combinatória, probabilidade e geometria analítica. Costumam ser as mais trabalhosas; faça antes as que você resolve rápido.",
  },
  // ── 2º dia do ENEM: macetes de exatas (reel @belabeludaeduca) ──
  {
    id: "mac-pergunta-antes", pageId: "macetes", kind: "flash", title: "Leia a pergunta primeiro", tags: ["enem", "interpretação", "estratégia"],
    front: "Enunciado gigante de exatas: por onde começar a ler?",
    back: "Pela pergunta (a última linha). O texto é longo, mas a conta costuma ser uma só; sabendo o que é pedido, você lê o resto procurando só os dados.",
  },
  {
    id: "mac-regra-de-tres", pageId: "macetes", kind: "concept", title: "Regra de três: direta ou inversa", tags: ["enem", "matemática", "proporção"],
    beats: [
      "Um aumenta e o outro também? Direta: multiplique cruzado.",
      "Um aumenta e o outro diminui (mais trabalhadores, menos dias)? Inversa.",
      "Na inversa, multiplique \"reto\" (na mesma linha).",
      "Estequiometria também é regra de três depois de balancear.",
    ],
    takeaway: "Antes da conta, pergunte: quando um dobra, o outro dobra ou cai pela metade?",
  },
  {
    id: "mac-escala-zeros", pageId: "macetes", kind: "quiz", title: "Escala sem sofrimento", tags: ["enem", "matemática", "escala"],
    question: "Num mapa de escala 1:100.000, 1 cm representa:", options: ["100 m", "1 km", "10 km", "100 km"], answer: 1,
    explanation: "1 cm × 100.000 = 100.000 cm. De cm para km, corte 5 zeros: 1 km.",
  },
  {
    id: "mac-volumes", pageId: "macetes", kind: "flash", title: "Volumes em uma linha", tags: ["enem", "matemática", "geometria"],
    front: "Volume de caixa, cilindro, cone e pirâmide: qual a regra geral?",
    back: "Caixa e cilindro: área da base × altura. Cone e pirâmide: 1/3 disso. E 1 dm³ = 1 litro.",
  },
  {
    id: "mac-chuveiro", pageId: "macetes", kind: "quiz", title: "Chuveiro no inverno", tags: ["enem", "física", "eletricidade"],
    question: "Na posição \"inverno\", a resistência do chuveiro é:", options: ["Maior, para esquentar mais", "Menor: passa mais corrente e a potência aumenta", "A mesma; muda só a vazão", "Desligada"], answer: 1,
    explanation: "Com a mesma tensão, P = U²/R: menos resistência → mais corrente → mais potência → água mais quente.",
  },
  {
    id: "mac-velocidade-onda", pageId: "macetes", kind: "flash", title: "3,6 e ondas", tags: ["enem", "física"],
    front: "Como passar de km/h para m/s? E a fórmula das ondas?",
    back: "km/h ÷ 3,6 = m/s (m/s × 3,6 = km/h). Ondas: v = λ·f. O som precisa de meio; no vácuo, só a luz (onda eletromagnética) passa.",
  },
  {
    id: "mac-ph-10x", pageId: "macetes", kind: "quiz", title: "Cada ponto de pH vale 10×", tags: ["enem", "química", "ph"],
    question: "Uma solução de pH 3, comparada a uma de pH 4, é:", options: ["1 vez mais ácida", "10 vezes mais ácida", "10 vezes mais básica", "3 vezes mais ácida"], answer: 1,
    explanation: "A escala de pH é logarítmica: cada ponto a menos é 10 vezes mais ácido. pH < 7 é ácido; > 7 é básico.",
  },
  {
    id: "mac-separacao", pageId: "macetes", kind: "flash", title: "Separação de misturas relâmpago", tags: ["enem", "química", "misturas"],
    front: "Areia na água, sal dissolvido e água com óleo: como separar cada um?",
    back: "Areia + água: filtração (ou decantação). Sal dissolvido: evaporação ou destilação. Água + óleo: decantação (funil de separação).",
  },
  {
    id: "mac-organica-grupos", pageId: "macetes", kind: "flash", title: "Orgânica é reconhecer o grupo", tags: ["enem", "química", "orgânica"],
    front: "Química orgânica no ENEM: qual o atalho?",
    back: "Reconhecer o grupo funcional. –OH em carbono saturado: álcool. –COOH: ácido carboxílico (o do vinagre).",
  },
  {
    id: "mac-biologia-campea", pageId: "macetes", kind: "concept", title: "Biologia que mais cai", tags: ["enem", "biologia", "ecologia"],
    beats: [
      "Ecologia é a campeã: o ENEM adora desequilíbrios.",
      "Espécie invasora, desmatamento, esgoto no rio…",
      "Poluente que não se degrada se acumula no topo da cadeia.",
      "Antibiótico mata bactéria, não vírus; contra vírus, vacina prepara o corpo antes.",
      "Planta faz fotossíntese e também respira, o tempo todo.",
    ],
    takeaway: "Pergunte sempre: o que acontece com o resto do ecossistema?",
  },
];
