import type { StudyItem } from "@/feed/types";

/** Hand-written study cards bundled with the app, so the feed works offline from the first launch. */
export const SEED: StudyItem[] = [
  // Matemática
  {
    id: "mat-pitagoras", pageId: "matematica", kind: "concept", title: "Teorema de Pitágoras", tags: ["geometria", "triângulo"],
    beats: ["Todo triângulo retângulo esconde uma regra.", "Os catetos a e b formam o ângulo de 90°.", "A soma dos quadrados dos catetos…", "…é igual ao quadrado da hipotenusa: a² + b² = c²."],
    takeaway: "3, 4 e 5 formam um triângulo retângulo: 9 + 16 = 25.",
  },
  {
    id: "mat-primos", pageId: "matematica", kind: "concept", title: "Por que os primos importam", tags: ["números primos", "criptografia"],
    beats: ["Primo: só é divisível por 1 e por ele mesmo.", "Todo inteiro maior que 1 é um produto único de primos.", "Multiplicar dois primos enormes é fácil.", "Desfazer essa conta é absurdamente difícil — e é isso que protege seu Pix."],
    takeaway: "A segurança da internet (RSA) se apoia na dificuldade de fatorar.",
  },
  {
    id: "mat-quiz-angulos", pageId: "matematica", kind: "quiz", title: "Ângulos internos", tags: ["geometria"],
    question: "Quanto vale a soma dos ângulos internos de um hexágono?",
    options: ["360°", "540°", "720°", "900°"], answer: 2,
    explanation: "A soma é (n − 2) × 180°. Para n = 6: 4 × 180° = 720°.",
  },
  {
    id: "mat-flash-bhaskara", pageId: "matematica", kind: "flash", title: "Fórmula de Bhaskara", tags: ["equação do 2º grau"],
    front: "Como achar as raízes de ax² + bx + c = 0?", back: "x = (−b ± √Δ) / 2a, com Δ = b² − 4ac", hint: "Comece pelo delta.",
  },
  // Física
  {
    id: "fis-newton3", pageId: "fisica", kind: "concept", title: "3ª Lei de Newton", tags: ["dinâmica", "forças"],
    beats: ["Você empurra a parede.", "A parede empurra você de volta, com a mesma força.", "Ação e reação agem em corpos diferentes.", "Por isso um foguete sobe: ele empurra gás para baixo."],
    takeaway: "Toda ação gera uma reação de mesma intensidade e sentido oposto.",
  },
  {
    id: "fis-luz", pageId: "fisica", kind: "concept", title: "A velocidade da luz", tags: ["óptica", "relatividade"],
    beats: ["A luz viaja a cerca de 300 mil km por segundo.", "Ela dá 7,5 voltas na Terra em um segundo.", "A luz do Sol leva uns 8 minutos para chegar aqui.", "Quando você olha o Sol, vê o passado."],
    takeaway: "c ≈ 299.792 km/s — o limite de velocidade do universo.",
  },
  {
    id: "fis-quiz-queda", pageId: "fisica", kind: "quiz", title: "Queda livre", tags: ["gravidade"],
    question: "No vácuo, uma pena e um martelo soltos da mesma altura…",
    options: ["O martelo chega antes", "A pena chega antes", "Chegam juntos", "A pena flutua"], answer: 2,
    explanation: "Sem ar, a aceleração da gravidade é igual para todos os corpos. Um astronauta da Apollo 15 mostrou isso na Lua.",
  },
  {
    id: "fis-flash-energia", pageId: "fisica", kind: "flash", title: "Energia cinética", tags: ["energia"],
    front: "Fórmula da energia cinética", back: "Ec = m·v² / 2", hint: "Depende da massa e do quadrado da velocidade.",
  },
  // Química
  {
    id: "qui-ph", pageId: "quimica", kind: "concept", title: "O que é pH", tags: ["ácidos", "bases"],
    beats: ["pH mede a concentração de íons H⁺.", "A escala vai, na prática, de 0 a 14.", "Abaixo de 7: ácido. Acima de 7: básico.", "Cada ponto é 10× mais forte que o vizinho."],
    takeaway: "Limão ≈ pH 2, água pura = 7, sabão ≈ 10.",
  },
  {
    id: "qui-quiz-gas", pageId: "quimica", kind: "quiz", title: "Gases nobres", tags: ["tabela periódica"],
    question: "Por que os gases nobres quase não reagem?",
    options: ["São muito pesados", "Têm a camada de valência completa", "Não têm elétrons", "São radioativos"], answer: 1,
    explanation: "Com a camada de valência completa, eles já são estáveis e não precisam ganhar, perder ou compartilhar elétrons.",
  },
  {
    id: "qui-flash-mol", pageId: "quimica", kind: "flash", title: "Mol", tags: ["estequiometria"],
    front: "Quantas entidades existem em 1 mol?", back: "6,022 × 10²³ (constante de Avogadro)",
  },
  // Biologia
  {
    id: "bio-mitocondria", pageId: "biologia", kind: "concept", title: "Mitocôndria", tags: ["célula", "energia"],
    beats: ["Ela é a usina de energia da célula.", "Transforma glicose e oxigênio em ATP.", "Tem DNA próprio, herdado da mãe.", "Provavelmente já foi uma bactéria livre, há bilhões de anos."],
    takeaway: "Teoria endossimbiótica: mitocôndrias descendem de bactérias englobadas.",
  },
  {
    id: "bio-quiz-dna", pageId: "biologia", kind: "quiz", title: "Bases do DNA", tags: ["genética"],
    question: "No DNA, a adenina (A) sempre pareia com…",
    options: ["Citosina", "Guanina", "Timina", "Uracila"], answer: 2,
    explanation: "A pareia com T e C pareia com G. A uracila aparece no RNA, no lugar da timina.",
  },
  {
    id: "bio-flash-fotossintese", pageId: "biologia", kind: "flash", title: "Fotossíntese", tags: ["plantas"],
    front: "Quais são os produtos da fotossíntese?", back: "Glicose (C₆H₁₂O₆) e oxigênio (O₂)", hint: "Entra CO₂, água e luz.",
  },
  // História
  {
    id: "his-imprensa", pageId: "historia", kind: "concept", title: "A prensa de Gutenberg", tags: ["idade moderna", "tecnologia"],
    beats: ["Por volta de 1450, Gutenberg cria a prensa de tipos móveis.", "Livros deixam de ser copiados à mão.", "O preço despenca e o conhecimento se espalha.", "Reforma, Renascimento e ciência ganham velocidade."],
    takeaway: "A prensa foi a ‘internet’ do século XV.",
  },
  {
    id: "his-quiz-independencia", pageId: "historia", kind: "quiz", title: "Independência do Brasil", tags: ["brasil"],
    question: "Em que ano foi proclamada a Independência do Brasil?",
    options: ["1500", "1808", "1822", "1889"], answer: 2,
    explanation: "Em 7 de setembro de 1822, às margens do Ipiranga. 1889 é a Proclamação da República.",
  },
  {
    id: "his-flash-muro", pageId: "historia", kind: "flash", title: "Muro de Berlim", tags: ["guerra fria"],
    front: "Em que ano caiu o Muro de Berlim?", back: "1989 — em 9 de novembro", hint: "Pouco antes do fim da União Soviética.",
  },
  // Geografia
  {
    id: "geo-amazonia", pageId: "geografia", kind: "concept", title: "Rios voadores", tags: ["amazônia", "clima"],
    beats: ["A Floresta Amazônica ‘transpira’ bilhões de toneladas de água por dia.", "Esse vapor forma correntes de umidade no céu.", "Os ventos levam essa umidade para o Centro-Sul.", "Parte da chuva que cai em São Paulo nasceu na floresta."],
    takeaway: "Desmatar a Amazônia afeta a chuva de boa parte do Brasil.",
  },
  {
    id: "geo-quiz-maior", pageId: "geografia", kind: "quiz", title: "Maior país", tags: ["países"],
    question: "Qual é o maior país do mundo em área?",
    options: ["Canadá", "China", "Brasil", "Rússia"], answer: 3,
    explanation: "A Rússia tem cerca de 17 milhões de km². O Brasil é o 5º maior.",
  },
  // Programação
  {
    id: "dev-bigo", pageId: "programacao", kind: "concept", title: "Big O em 30 segundos", tags: ["algoritmos", "complexidade"],
    beats: ["Big O mede como o custo cresce com a entrada.", "O(1): tempo constante, como acessar um array.", "O(n): percorrer uma lista uma vez.", "O(n²): dois loops aninhados — fica lento rápido."],
    takeaway: "Busca binária é O(log n): 1 milhão de itens em ~20 passos.",
  },
  {
    id: "dev-quiz-js", pageId: "programacao", kind: "quiz", title: "JavaScript", tags: ["javascript"],
    question: "Quanto vale 0.1 + 0.2 === 0.3 em JavaScript?",
    options: ["true", "false", "undefined", "Erro"], answer: 1,
    explanation: "Ponto flutuante binário não representa 0,1 exatamente: 0.1 + 0.2 dá 0.30000000000000004.",
  },
  {
    id: "dev-flash-git", pageId: "programacao", kind: "flash", title: "Git", tags: ["git"],
    front: "Qual a diferença entre git merge e git rebase?", back: "merge junta históricos criando um commit de merge; rebase reaplica seus commits sobre outra base, deixando o histórico linear.",
  },
  {
    id: "dev-recursao", pageId: "programacao", kind: "concept", title: "Recursão", tags: ["lógica"],
    beats: ["Uma função que chama a si mesma.", "Ela precisa de um caso base para parar.", "fatorial(n) = n × fatorial(n − 1)", "Sem caso base: estouro de pilha."],
    takeaway: "Toda recursão = caso base + passo que se aproxima dele.",
  },
  // Português
  {
    id: "por-crase", pageId: "portugues", kind: "concept", title: "Crase sem medo", tags: ["gramática", "crase"],
    beats: ["Crase é a fusão de ‘a’ preposição + ‘a’ artigo.", "Truque: troque por uma palavra masculina.", "‘Vou à escola’ → ‘Vou ao colégio’. Virou ‘ao’? Tem crase.", "Antes de verbo, nunca: ‘Começou a chover’."],
    takeaway: "Se no masculino vira ‘ao’, no feminino é ‘à’.",
  },
  {
    id: "por-quiz-porque", pageId: "portugues", kind: "quiz", title: "Os porquês", tags: ["gramática"],
    question: "Complete: “Não sei o ___ de tanta pressa.”",
    options: ["por que", "porque", "porquê", "por quê"], answer: 2,
    explanation: "Com artigo antes (‘o porquê’), é substantivo: junto e com acento.",
  },
  // Inglês
  {
    id: "ing-false-friends", pageId: "ingles", kind: "concept", title: "Falsos cognatos", tags: ["vocabulário"],
    beats: ["Algumas palavras parecem português, mas enganam.", "Pretend = fingir (não ‘pretender’).", "Actually = na verdade (não ‘atualmente’).", "Push = empurrar (não ‘puxar’)."],
    takeaway: "Atualmente, em inglês, é ‘currently’ ou ‘nowadays’.",
  },
  {
    id: "ing-quiz-phrasal", pageId: "ingles", kind: "quiz", title: "Phrasal verbs", tags: ["phrasal verbs"],
    question: "“I gave up smoking.” O que significa ‘give up’?",
    options: ["Começar", "Desistir / largar", "Aumentar", "Doar"], answer: 1,
    explanation: "‘Give up’ = desistir ou parar de fazer algo. Eu parei de fumar.",
  },
  // Filosofia
  {
    id: "fil-caverna", pageId: "filosofia", kind: "concept", title: "O Mito da Caverna", tags: ["platão"],
    beats: ["Prisioneiros só veem sombras na parede de uma caverna.", "Para eles, as sombras são a realidade.", "Um deles sai e descobre o mundo lá fora.", "Ao voltar para contar, ninguém acredita nele."],
    takeaway: "Platão: conhecer é sair das aparências em direção à verdade.",
  },
  {
    id: "fil-flash-descartes", pageId: "filosofia", kind: "flash", title: "Descartes", tags: ["racionalismo"],
    front: "“Penso, logo existo.” Quem disse e o que significa?", back: "René Descartes: mesmo duvidando de tudo, o próprio ato de duvidar prova que quem pensa existe.",
  },
  // Astronomia
  {
    id: "ast-escala", pageId: "astronomia", kind: "concept", title: "O tamanho do Sol", tags: ["sistema solar"],
    beats: ["Cabem cerca de 1,3 milhão de Terras dentro do Sol.", "Ele concentra 99,8% da massa do Sistema Solar.", "Mesmo assim, é uma estrela média.", "Existem estrelas milhares de vezes maiores."],
    takeaway: "O Sol é gigante para nós e comum para a galáxia.",
  },
  {
    id: "ast-quiz-planeta", pageId: "astronomia", kind: "quiz", title: "Planetas", tags: ["sistema solar"],
    question: "Qual é o planeta mais quente do Sistema Solar?",
    options: ["Mercúrio", "Vênus", "Marte", "Júpiter"], answer: 1,
    explanation: "Vênus, com cerca de 460 °C: sua atmosfera densa de CO₂ cria um efeito estufa extremo.",
  },
  {
    id: "ast-flash-ano-luz", pageId: "astronomia", kind: "flash", title: "Ano-luz", tags: ["distâncias"],
    front: "Ano-luz mede tempo ou distância?", back: "Distância: o quanto a luz percorre em um ano, cerca de 9,46 trilhões de km.",
  },
];
