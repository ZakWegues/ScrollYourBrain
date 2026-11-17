import { INGLES } from "./linguagens";
import { extend, m, o, q, qe } from "./pack";

/*
 * Inglês, 2ª leva: questões diretas e no estilo ENEM (texto-base curto em inglês, pergunta em português).
 * Cada assunto recebe cerca de 15 cartões novos; os ids seguem a ordem dentro deste arquivo (chave "n").
 */

extend(INGLES, "Verb to be e simple present", [
  q("Complete: My brother ___ a doctor.", ["are", "is", "am", "be"], 1, "Com he/she/it (my brother = he), o verbo to be no presente é 'is'. 'Are' é para you/we/they; 'am', só para I."),
  q("Complete: We ___ from Brazil.", ["is", "am", "are", "been"], 2, "'We' pede 'are': we are, you are, they are. 'Is' fica com he/she/it."),
  q("Qual é a forma negativa de 'She likes pizza'?", ["She don't like pizza.", "She doesn't like pizza.", "She doesn't likes pizza.", "She not like pizza."], 1, "No simple present, a negativa com he/she/it usa 'doesn't' + verbo SEM -s: doesn't like. O -s já foi para o auxiliar."),
  q("Complete a pergunta: ___ you speak English?", ["Does", "Is", "Do", "Are"], 2, "Perguntas no simple present usam o auxiliar 'do' (ou 'does' com he/she/it). Com 'you', é 'Do you speak…?'."),
  q("Em 'He watches TV every night', por que o verbo ganha -es?", ["Sujeito he + verbo em -ch", "A frase está no passado", "'Every night' pede o plural", "Todo verbo inglês ganha -es"], 0, "Na 3ª pessoa do singular, verbos terminados em -ch, -sh, -s, -x, -o ganham -es: watches, washes, goes."),
  q("Complete: The sun ___ in the east.", ["rise", "rises", "rising", "is rise"], 1, "Verdades gerais usam simple present. 'The sun' = it, então o verbo ganha -s: rises."),
  qe("Sign at a library: “Silence, please. Phones must be switched off. The library opens at 8 a.m. and closes at 6 p.m.”", "Segundo o aviso, o que se espera do usuário da biblioteca?", ["Que fale baixo quando usar o telefone", "Silêncio e celular desligado", "Que chegue sempre antes das 8 horas", "Que devolva os livros até as 6 da tarde"], 1, "'Silence, please' pede silêncio e 'phones must be switched off' pede celulares desligados. Os horários informam o funcionamento, não uma obrigação do usuário."),
  qe("Profile on a social network: “I'm Ana. I'm 17 and I live in Recife. I love music, but I don't play any instrument. I study at night and work in the morning.”", "De acordo com o perfil, Ana:", ["Toca um instrumento todas as noites", "Trabalha cedo e estuda à noite", "Mora em Recife com seus 17 irmãos", "Não gosta de música de nenhum tipo"], 1, "'I study at night and work in the morning': estuda à noite e trabalha de manhã. Ela ama música, mas 'I don't play any instrument' (não toca instrumento)."),
  qe("“Water boils at 100 °C at sea level. At the top of a high mountain, it boils at a lower temperature because the air pressure is lower.”", "O texto explica que, no alto de uma montanha, a água:", ["Ferve abaixo de 100 °C", "Não consegue ferver de jeito nenhum", "Ferve só acima de 100 °C", "Congela muito mais rápido"], 0, "'It boils at a lower temperature' = ferve a uma temperatura mais baixa, por causa da pressão do ar menor ('air pressure is lower')."),
  qe("Tweet: “My cat doesn't eat fish. She only eats chicken. Weird, right? 🐱”", "O autor do post acha estranho que sua gata:", ["Coma peixe todo dia", "Não coma frango", "Coma apenas frango", "Não coma nada"], 2, "'She only eats chicken' (só come frango) e 'doesn't eat fish' (não come peixe). 'Weird, right?' mostra que ele acha isso esquisito, pois se espera que gatos comam peixe."),
  qe("Job ad: “We are a small café in London. We need a waiter. You don't need experience, but you need to speak English and Spanish.”", "Para a vaga anunciada, é exigido:", ["Ter experiência como garçom", "Falar inglês e espanhol", "Morar perto do café", "Ser dono de um café"], 1, "'You need to speak English and Spanish' é a exigência. 'You don't need experience' diz que experiência NÃO é necessária."),
  m("Marque as frases corretas no simple present:", ["She works in a bank.", "They play soccer on Sundays.", "He don't like coffee.", "I has two cats.", "Does he live here?"], [0, 1, 4], "He don't → he doesn't; I has → I have. As outras seguem a regra: -s na 3ª pessoa e 'does' em perguntas com he/she/it."),
  m("Marque os usos típicos do simple present:", ["Hábitos e rotinas", "Verdades gerais", "Ações acontecendo agora", "Horários fixos (o trem sai às 9)", "Ações já terminadas ontem"], [0, 1, 3], "Ação acontecendo agora é present continuous; ação terminada ontem é simple past."),
  o("Explique quando o verbo ganha -s no simple present e dê um exemplo.", "No simple present, o verbo ganha -s (ou -es) na 3ª pessoa do singular: he, she, it. Ex.: 'She plays guitar'. Com I, you, we e they, o verbo fica na forma base: 'They play guitar'. Na negativa e na pergunta, o -s passa para o auxiliar: 'She doesn't play'.", [
    ["Só na 3ª pessoa do singular (he, she, it)", "she", "terceira", "3ª", "singular", "he she it"],
    ["Exemplo correto com -s", "plays", "works", "likes", "goes", "watches", "lives", "eats"],
    ["Com I/you/we/they fica na forma base", "they", "base", "sem s"],
  ]),
], "n");

extend(INGLES, "Present continuous", [
  q("Complete: Look! It ___ raining.", ["is", "are", "am", "be"], 0, "'Look!' indica algo acontecendo agora: present continuous. Com 'it', usa-se is + verbo-ing: it is raining."),
  q("Qual frase está no present continuous?", ["She reads every day.", "She is reading now.", "She read yesterday.", "She will read tomorrow."], 1, "Present continuous = am/is/are + verbo-ing, para ações em andamento: 'She is reading now'."),
  q("Complete: I ___ my homework at the moment.", ["do", "am doing", "does", "have did"], 1, "'At the moment' (neste momento) pede present continuous: I am doing."),
  q("Qual é a forma -ing correta de 'swim'?", ["swiming", "swimming", "swimeing", "swimmming"], 1, "Verbo curto terminado em consoante-vogal-consoante dobra a consoante final: swim → swimming, run → running."),
  q("Qual é a forma -ing correta de 'make'?", ["makeing", "makking", "making", "maked"], 2, "Verbos terminados em -e mudo perdem o e: make → making, write → writing."),
  q("Complete a pergunta: ___ they watching a movie?", ["Is", "Do", "Are", "Does"], 2, "Na pergunta do present continuous, o to be vem antes do sujeito: Are they watching…?"),
  qe("Text message: “Can't talk now. I'm driving. I'll call you when I get home.”", "Por que a pessoa não pode falar?", ["Está em casa dormindo", "Está dirigindo", "Está sem bateria", "Está numa reunião"], 1, "'I'm driving' (present continuous) = estou dirigindo agora. Por isso ela promete ligar quando chegar em casa."),
  qe("Weather report: “It's 3 p.m. and the temperature is rising fast. People are going to the beach, and the traffic is getting worse.”", "Segundo a notícia, o que está acontecendo naquele momento?", ["A temperatura está caindo", "O trânsito está piorando", "As pessoas estão saindo da praia", "Está chovendo forte"], 1, "'The traffic is getting worse' = o trânsito está piorando. A temperatura está subindo ('rising') e as pessoas estão indo à praia."),
  qe("Post: “These days I'm learning Japanese. I'm not living in Japan, but I'm watching anime with subtitles every night.”", "O present continuous no post indica:", ["Uma situação temporária", "Uma ação terminada no passado", "Um plano para daqui a muitos anos", "Uma verdade científica e permanente"], 0, "'These days I'm learning' mostra uma situação temporária, em andamento nesta fase da vida. É um dos usos do present continuous."),
  qe("Teacher: “Please, be quiet. Your classmates are taking a test in the next room.”", "A professora pede silêncio porque:", ["Há prova na sala ao lado", "A aula está prestes a terminar", "Os colegas estão dormindo na outra sala", "Haverá uma prova surpresa amanhã"], 0, "'Are taking a test' = estão fazendo uma prova agora, na sala ao lado. É o motivo do pedido de silêncio."),
  q("Por que 'I am knowing the answer' está errado?", ["'Know' é verbo de estado", "Falta o auxiliar 'do' antes do verbo", "'Am' deveria ser trocado por 'is'", "O verbo deveria estar no passado simples"], 0, "Verbos de estado (know, like, want, believe) normalmente não ficam no continuous. O certo é 'I know the answer'."),
  m("Marque as frases corretas no present continuous:", ["She is studying now.", "They are playing outside.", "He are running.", "I am liking pizza.", "We are waiting for the bus."], [0, 1, 4], "'He are' deveria ser 'He is'; 'like' é verbo de estado e não vai para o -ing ('I like pizza')."),
  m("Marque expressões que costumam acompanhar o present continuous:", ["now", "at the moment", "right now", "every day", "yesterday"], [0, 1, 2], "'Every day' indica hábito (simple present) e 'yesterday', passado (simple past)."),
  o("Qual é a diferença entre 'I work' e 'I am working'? Explique com um exemplo.", "'I work' (simple present) fala de hábito ou rotina: 'I work every day'. 'I am working' (present continuous) fala de uma ação acontecendo agora ou numa fase temporária: 'I am working now, call me later'.", [
    ["Simple present = hábito ou rotina", "habito", "rotina", "sempre", "todo dia", "every"],
    ["Present continuous = ação acontecendo agora", "agora", "momento", "now", "andamento", "temporari"],
    ["Exemplo com cada forma", "every", "now", "exemplo", "work"],
  ]),
], "n");

extend(INGLES, "Simple past", [
  q("Complete: Yesterday I ___ to the cinema.", ["go", "went", "gone", "going"], 1, "'Yesterday' pede simple past. 'Go' é irregular: go – went – gone."),
  q("Qual é a negativa de 'They watched the game'?", ["They didn't watched the game.", "They didn't watch the game.", "They don't watched the game.", "They not watched the game."], 1, "No simple past, a negativa usa 'didn't' + verbo na forma base: didn't watch. O passado já está no auxiliar."),
  q("Complete a pergunta: ___ you see the news last night?", ["Do", "Did", "Does", "Were"], 1, "Pergunta no simple past usa 'did' + verbo base: Did you see…? 'Last night' confirma o passado."),
  q("Qual é o passado de 'study'?", ["studyed", "studied", "studed", "studyied"], 1, "Verbo terminado em consoante + y troca o y por i e ganha -ed: study → studied. Com vogal + y, só -ed: play → played."),
  q("Complete: She ___ at home last weekend.", ["was", "were", "is", "be"], 0, "O passado do to be é was (I, he, she, it) e were (you, we, they). 'She' pede 'was'."),
  q("Qual é o passado de 'stop'?", ["stoped", "stopped", "stopt", "stopping"], 1, "Verbo curto em consoante-vogal-consoante dobra a última consoante antes de -ed: stop → stopped, plan → planned."),
  qe("Diary: “Last Sunday we visited my grandmother. We ate cake, talked a lot and came back home late at night.”", "Segundo o diário, no domingo passado a família:", ["Recebeu a avó em casa", "Visitou a avó e voltou tarde", "Fez um bolo para vender", "Ficou em casa o dia todo"], 1, "'We visited my grandmother' (visitamos a avó) e 'came back home late at night' (voltamos tarde da noite)."),
  qe("“In 1969, Neil Armstrong walked on the Moon. Millions of people watched the event on TV.”", "O texto relata que:", ["Armstrong assistiu à chegada à Lua pela TV", "Milhões de pessoas viram o evento pela TV", "A chegada à Lua foi em 1996", "Ninguém acreditou no evento"], 1, "'Millions of people watched the event on TV' = milhões assistiram pela TV. Armstrong é quem andou na Lua ('walked on the Moon')."),
  qe("Review of a restaurant: “We waited 40 minutes for our food. When it arrived, it was cold. We didn't go back.”", "A avaliação do restaurante é:", ["Positiva, pela rapidez no atendimento", "Negativa: demora e comida fria", "Neutra, sem nenhuma opinião clara", "Positiva, pelo preço baixo dos pratos"], 1, "Esperaram 40 minutos ('waited 40 minutes'), a comida chegou fria ('it was cold') e eles não voltaram ('didn't go back'): avaliação negativa."),
  qe("“When I was a child, I lived on a farm. I didn't have a phone, but I had many animals.”", "Sobre a infância do autor, é correto afirmar que ele:", ["Tinha celular e poucos animais", "Vivia numa fazenda com bichos", "Morava numa cidade bem grande", "Não gostava de animais de fazenda"], 1, "'I lived on a farm' (morava numa fazenda) e 'I had many animals' (tinha muitos animais). 'I didn't have a phone' = não tinha telefone."),
  q("Em 'I didn't went', qual é o erro?", ["Após 'didn't', use a forma base", "Falta o sujeito da frase inteira", "'Didn't' deveria ser trocado por 'don't'", "Não há erro nenhum nessa frase"], 0, "O auxiliar 'did/didn't' já marca o passado; o verbo principal volta à forma base: 'I didn't go'."),
  m("Marque os passados regulares escritos corretamente:", ["play → played", "cry → cried", "stop → stopped", "go → goed", "have → haved"], [0, 1, 2], "Go e have são irregulares: go → went; have → had."),
  m("Marque as expressões que indicam passado:", ["yesterday", "last year", "two days ago", "tomorrow", "next week"], [0, 1, 2], "'Tomorrow' e 'next week' indicam futuro."),
  o("Como se formam a negativa e a pergunta no simple past? Dê um exemplo de cada.", "Usa-se o auxiliar 'did' e o verbo volta para a forma base. Negativa: sujeito + didn't + verbo base ('I didn't play'). Pergunta: Did + sujeito + verbo base ('Did you play?'). O passado fica só no auxiliar.", [
    ["Uso do auxiliar did / didn't", "did", "didn't", "didnt"],
    ["Verbo volta para a forma base", "base", "infinitivo", "sem ed", "forma normal"],
    ["Exemplo de negativa e de pergunta", "didn't play", "did you", "didn't go", "exemplo"],
  ]),
], "n");

extend(INGLES, "Cognatos e falsos cognatos", [
  q("'Parents' significa:", ["Parentes", "Pai e mãe", "Países", "Primos"], 1, "Falso cognato: 'parents' = pai e mãe. 'Parentes' em inglês é 'relatives'."),
  q("'Fabric' significa:", ["Fábrica", "Tecido", "Fabricante", "Fábula"], 1, "Falso cognato: 'fabric' = tecido. 'Fábrica' em inglês é 'factory'."),
  q("'Lunch' significa:", ["Lanche", "Almoço", "Lancha", "Lençol"], 1, "Falso cognato: 'lunch' = almoço. 'Lanche' seria 'snack'."),
  q("'Comprehensive' significa:", ["Compreensivo", "Abrangente", "Comprido", "Comprometido"], 1, "Falso cognato: 'comprehensive' = abrangente. 'Compreensivo' (que compreende os outros) é 'understanding'."),
  q("Qual destas palavras é um cognato verdadeiro?", ["Hospital", "Pretend", "Push", "Library"], 0, "'Hospital' tem forma e sentido iguais ao português. As outras são falsos cognatos (fingir, empurrar, biblioteca)."),
  q("'Intend' significa:", ["Entender", "Pretender", "Intender", "Estender"], 1, "'Intend' = pretender, ter a intenção. 'Entender' em inglês é 'understand'."),
  qe("Notice in a hotel: “Guests can use the gym and the pool for free. Towels are available at the reception.”", "De acordo com o aviso, as toalhas:", ["Devem ser trazidas pelos hóspedes", "Estão disponíveis na recepção", "São vendidas na academia", "Ficam na piscina"], 1, "'Available' é cognato de 'disponível': 'towels are available at the reception' = toalhas na recepção."),
  qe("“The new medicine is very effective against headaches, but it can cause sleepiness.”", "Pelas palavras cognatas, o texto diz que o remédio:", ["É eficaz, mas pode dar sono", "Provoca dor de cabeça em quem o toma", "Não tem nenhum efeito colateral conhecido", "Serve apenas para ajudar a dormir à noite"], 0, "'Effective' (eficaz) e 'medicine' (remédio) são cognatos. 'Can cause sleepiness' = pode causar sonolência."),
  qe("Sign in a shop: “Exit only. Please use the other door to enter.”", "O aviso informa que aquela porta:", ["É só para sair", "É só para entrar", "Está fechada", "É a porta principal de entrada"], 0, "'Exit' é a palavra das placas de saída e 'only' = só: porta só de saída. Para entrar ('enter'), use a outra porta."),
  qe("“Actually, I didn't like the movie. Everybody said it was great, but I found it boring.”", "Pelo uso de 'actually', a pessoa:", ["Diz que hoje em dia gosta muito do filme", "Revela que, na verdade, não gostou", "Concorda com todos que elogiaram o filme", "Ainda não assistiu ao filme comentado"], 1, "'Actually' é falso cognato: significa 'na verdade'. A pessoa contrasta sua opinião com a dos outros ('everybody said it was great')."),
  q("'Sensible' significa:", ["Sensível", "Sensato", "Sensual", "Sentido"], 1, "Falso cognato: 'sensible' = sensato. 'Sensível' em inglês é 'sensitive'."),
  m("Marque os pares falso cognato → sentido certo:", ["Parents: pais", "Fabric: tecido", "Lunch: almoço", "Library: livraria", "Pretend: pretender"], [0, 1, 2], "Library = biblioteca; pretend = fingir."),
  m("Marque os cognatos verdadeiros (mesmo sentido do português):", ["Animal", "Hotel", "Important", "Novel", "Assist"], [0, 1, 2], "'Novel' = romance (livro), não 'novela'; 'assist' = ajudar, não 'assistir'."),
  o("O que são falsos cognatos e por que eles atrapalham na leitura? Dê um exemplo.", "Falsos cognatos são palavras parecidas com o português na escrita, mas com outro sentido. Eles enganam quem traduz pela aparência. Ex.: 'pretend' parece 'pretender', mas significa 'fingir'; 'library' parece 'livraria', mas é 'biblioteca'.", [
    ["Parecidas na forma, diferentes no sentido", "parecid", "semelhan", "sentido diferente", "outro significado", "enganam"],
    ["Atrapalham porque se traduz pela aparência", "engan", "confund", "erro", "aparencia"],
    ["Exemplo correto", "pretend", "library", "actually", "parents", "fabric", "push", "college"],
  ]),
], "n");

extend(INGLES, "Futuro (will e going to)", [
  q("Complete: Look at those clouds! It ___ rain.", ["will be", "is going to", "goes to", "was going to"], 1, "Previsão baseada em evidência visível (as nuvens) usa 'going to': It's going to rain."),
  q("Complete: I'm thirsty. — I ___ get you some water.", ["am going to", "will", "goes", "was"], 1, "Decisão tomada na hora (oferta espontânea) usa 'will': I'll get you some water."),
  q("Qual é a negativa de 'She will travel'?", ["She won't travel.", "She willn't travel.", "She doesn't will travel.", "She will travels not."], 0, "A negativa de 'will' é 'will not', contraída como 'won't'. O verbo fica na forma base."),
  q("Complete: We ___ visit our grandparents next Sunday. We bought the tickets.", ["will maybe", "are going to", "goes", "were being"], 1, "Plano já decidido antes (compraram as passagens) costuma usar 'going to'."),
  q("Em 'I think Brazil will win the game', 'will' expressa:", ["Uma previsão por opinião", "Uma obrigação definida em lei", "Um fato que aconteceu no passado", "Uma permissão dada a alguém"], 0, "'I think… will' é uma previsão baseada em opinião, uso típico de 'will'."),
  q("Complete a pergunta: ___ you help me with this box?", ["Do", "Will", "Are", "Did"], 1, "'Will you…?' é um pedido educado no futuro. 'Do you help' seria hábito."),
  qe("Weather forecast: “Tomorrow will be sunny in the morning, but it will get cloudy in the afternoon. There's a 70% chance of rain at night.”", "Segundo a previsão, amanhã:", ["Choverá a manhã inteira, sem parar", "Sol de manhã; chuva provável à noite", "Não há nenhuma chance de chuva o dia todo", "Fará muito frio e pode até nevar à tarde"], 1, "'Sunny in the morning' (sol de manhã) e '70% chance of rain at night' (70% de chance de chuva à noite)."),
  qe("Message: “I'm going to study medicine next year. I've already chosen the university.”", "A pessoa fala de:", ["Uma decisão tomada na hora", "Um plano já decidido", "Um sonho impossível", "Algo que já terminou"], 1, "'I'm going to' + 'I've already chosen the university' mostram um plano decidido com antecedência."),
  qe("Campaign: “By 2030, the city will plant one million trees. Help us: adopt a tree in your neighborhood!”", "O que a campanha da cidade propõe?", ["Cortar as árvores mais velhas da cidade", "Plantar 1 milhão de árvores até 2030", "Vender mudas de árvores aos moradores", "Proibir árvores nas calçadas e nas ruas"], 1, "'The city will plant one million trees' até 2030; o leitor é convidado a adotar uma árvore ('adopt a tree')."),
  qe("Notice: “The museum will be closed on Monday for maintenance. It will reopen on Tuesday at 9 a.m.”", "De acordo com o aviso, o museu:", ["Fecha de vez a partir de segunda-feira", "Fecha na segunda, reabre na terça", "Abre somente às segundas-feiras", "Reabre na segunda-feira às 9 horas"], 1, "'Will be closed on Monday' (fechado na segunda) e 'will reopen on Tuesday at 9 a.m.' (reabre terça às 9h)."),
  q("Complete: Don't worry, I ___ tell anyone your secret.", ["am not", "won't", "don't", "wasn't"], 1, "Promessa no futuro usa 'will': 'I won't tell anyone' = não vou contar a ninguém."),
  m("Marque usos típicos de 'will':", ["Decisões tomadas na hora", "Promessas", "Previsões baseadas em opinião", "Ações que já terminaram", "Hábitos do passado"], [0, 1, 2], "Ações terminadas e hábitos do passado usam simple past (ou 'used to')."),
  m("Marque as frases corretas:", ["It's going to rain.", "I will help you.", "She won't come.", "He will goes tomorrow.", "They going to travel."], [0, 1, 2], "'He will go' (forma base depois de will) e 'They are going to travel' (falta o 'are')."),
  o("Qual a diferença entre 'will' e 'going to'? Dê um exemplo de cada.", "'Going to' indica planos já decididos ou previsões com evidência ('Look at the clouds, it's going to rain'). 'Will' indica decisões na hora, promessas e previsões por opinião ('I'm thirsty. — I'll get you some water').", [
    ["Going to = plano decidido ou evidência", "plano", "decidid", "evidencia", "going"],
    ["Will = decisão na hora, promessa ou opinião", "hora", "promessa", "opiniao", "will"],
    ["Exemplos corretos", "rain", "exemplo", "i'll", "i will"],
  ]),
], "n");

extend(INGLES, "Present perfect", [
  q("Complete: I ___ never ___ to Japan.", ["have / been", "has / been", "did / go", "am / going"], 0, "Present perfect = have/has + particípio. Com 'I', usa-se 'have': I have never been."),
  q("Complete: She ___ already ___ her homework.", ["have / did", "has / done", "is / doing", "had / do"], 1, "Com 'she', usa-se 'has' + particípio: has done. 'Already' (já) é comum no present perfect."),
  q("Qual frase usa corretamente o present perfect?", ["I have seen that movie yesterday.", "I have seen it three times.", "I seen that movie last year.", "I have see that movie before."], 1, "Com tempo definido no passado ('yesterday') usa-se simple past. 'Three times' (experiência sem data) combina com present perfect."),
  q("Em 'We have lived here since 2015', 'since' indica:", ["O ponto de início", "A duração total da ação", "O momento em que a ação termina", "Uma condição para a ação acontecer"], 0, "'Since' marca o ponto de partida (desde 2015). 'For' marcaria a duração (for ten years)."),
  q("Complete: They have worked here ___ ten years.", ["since", "for", "ago", "yet"], 1, "'For' + período de tempo: for ten years. 'Since' viria com o ponto inicial (since 2015)."),
  q("Complete: Have you finished your project ___?", ["already", "yet", "ago", "since"], 1, "'Yet' aparece no fim de perguntas e negativas: Have you finished yet? / I haven't finished yet."),
  qe("Post: “I have visited 12 countries, but I have never seen snow! Maybe next winter.”", "Pelo post, a pessoa:", ["Já viu neve em 12 países", "Nunca viu neve", "Nunca viajou", "Mora num país frio"], 1, "'I have never seen snow' = nunca vi neve. Ela já visitou 12 países, mas nenhum com neve."),
  qe("Email: “Thank you for your order. Your package has left our warehouse and will arrive in 3 days.”", "O e-mail informa que o pacote:", ["Ainda não foi enviado", "Já saiu do depósito", "Chegou ao cliente", "Foi cancelado"], 1, "'Has left our warehouse' (present perfect) = já saiu do depósito. Ele chegará em 3 dias."),
  qe("“Scientists have discovered a new species of frog in the Amazon. It has bright blue legs.”", "A notícia informa que:", ["Acharam uma espécie nova de sapo", "Os sapos da Amazônia foram extintos", "Cientistas criaram um sapo azul em laboratório", "Um sapo venenoso atacou os cientistas"], 0, "'Have discovered a new species of frog' = descobriram uma nova espécie de sapo, com pernas azuis brilhantes."),
  qe("Chat: “— Have you eaten? — Not yet. I've just woken up!”", "A segunda pessoa:", ["Já almoçou há bastante tempo", "Acabou de acordar e não comeu", "Está dormindo neste momento", "Vai sair agora para jantar fora"], 1, "'Not yet' = ainda não; 'I've just woken up' = acabei de acordar. 'Just' indica algo muito recente."),
  q("Qual é o particípio passado de 'eat'?", ["ate", "eaten", "eated", "eating"], 1, "eat – ate – eaten. No present perfect usa-se o particípio: I have eaten."),
  m("Marque as frases corretas no present perfect:", ["She has gone home.", "I have known him for years.", "We have never been there.", "He have finished.", "I have went there."], [0, 1, 2], "'He has finished' (has com he) e 'I have gone/been' (particípio, não 'went')."),
  m("Marque palavras comuns no present perfect:", ["already", "yet", "ever", "yesterday", "last week"], [0, 1, 2], "'Yesterday' e 'last week' marcam tempo definido e pedem simple past."),
  o("Quando se usa o present perfect em vez do simple past? Explique com exemplos.", "O present perfect fala de experiências sem data ('I have been to Rio') ou de ações que começaram no passado e continuam ('I have lived here since 2015'). O simple past fala de ações terminadas em tempo definido ('I went to Rio last year').", [
    ["Experiência sem data definida", "experiencia", "sem data", "nunca", "ever", "never"],
    ["Ação que começou e continua", "continua", "since", "desde", "ainda"],
    ["Simple past = tempo definido no passado", "definid", "yesterday", "last", "ontem", "terminad"],
  ]),
], "n");

extend(INGLES, "Modal verbs", [
  q("Complete: You ___ wear a seatbelt. It's the law.", ["might", "must", "can", "could"], 1, "'Must' expressa obrigação forte, como uma lei."),
  q("Complete: You look tired. You ___ go to bed early.", ["must not", "should", "can't", "mustn't"], 1, "'Should' dá conselho: você deveria ir dormir cedo."),
  q("Complete: She ___ speak three languages.", ["cans", "can", "must to", "should to"], 1, "'Can' expressa habilidade e não muda na 3ª pessoa (sem -s) nem pede 'to'."),
  q("Em 'You mustn't smoke here', o sentido é:", ["Você não precisa fumar aqui", "É proibido fumar aqui", "Talvez você fume aqui", "Você pode fumar aqui"], 1, "'Mustn't' = proibição. 'Don't have to' é que significa 'não precisa'."),
  q("Complete: It ___ rain later. Take an umbrella, just in case.", ["must", "might", "can't", "should not"], 1, "'Might' expressa possibilidade: pode ser que chova."),
  q("Qual frase pede permissão de forma educada?", ["Could I open the window?", "I must open the window.", "I should open the window.", "I can't open the window."], 0, "'Could I…?' é um pedido de permissão educado. 'Must' seria obrigação; 'should', conselho."),
  qe("Sign at a swimming pool: “Children under 12 must be with an adult. Running is not allowed.”", "Segundo a placa:", ["Crianças podem nadar sozinhas a qualquer hora", "Menores de 12 só com um adulto", "Correr na beira da piscina é recomendado", "Adultos não podem entrar na área da piscina"], 1, "'Must be with an adult' = precisam estar com um adulto. 'Running is not allowed' = é proibido correr."),
  qe("Doctor's advice: “You should drink more water and you shouldn't eat so much sugar.”", "O que o médico aconselha?", ["Proíbe que o paciente beba água", "Aconselha mais água, menos açúcar", "Obriga o paciente a parar de comer", "Receita um remédio para o açúcar"], 1, "'Should' e 'shouldn't' dão conselhos: beber mais água e não comer tanto açúcar."),
  qe("Ad: “With our app, you can learn English anywhere. You don't have to pay for the first month!”", "Segundo o anúncio, no primeiro mês:", ["É obrigatório pagar", "Não é preciso pagar", "Não se pode usar o app", "Só se aprende em casa"], 1, "'You don't have to pay' = não é necessário pagar. 'Can learn anywhere' = pode aprender em qualquer lugar."),
  qe("Note: “He can't be at home. I saw him at the gym five minutes ago.”", "'Can't be' indica que o falante:", ["Tem certeza de que ele não está", "Acha possível que ele esteja em casa", "Proíbe que ele vá para casa agora", "Pede que ele fique em casa hoje"], 0, "'Can't be' expressa dedução negativa forte: é impossível que ele esteja em casa, pois foi visto na academia."),
  q("Complete: When I was five, I ___ swim.", ["can", "could", "must", "should"], 1, "'Could' é o passado de 'can' para habilidade: quando eu tinha cinco anos, eu conseguia nadar."),
  m("Marque os pares modal → sentido corretos:", ["must: obrigação", "should: conselho", "might: possibilidade", "can't: obrigação", "could: certeza absoluta"], [0, 1, 2], "'Can't' indica impossibilidade ou proibição; 'could' indica possibilidade, habilidade no passado ou pedido educado."),
  m("Marque as frases corretas com modal verbs:", ["She can drive.", "You should study.", "We must go now.", "He musts work.", "They can to swim."], [0, 1, 2], "Modais não levam -s ('he must') nem 'to' depois ('can swim')."),
  o("Explique a diferença entre 'mustn't' e 'don't have to', com exemplos.", "'Mustn't' indica proibição: 'You mustn't smoke here' (é proibido). 'Don't have to' indica que não há obrigação, a pessoa pode escolher: 'You don't have to come' (não precisa vir, se não quiser).", [
    ["Mustn't = proibição", "proib", "nao pode", "mustn"],
    ["Don't have to = não é obrigatório", "obrigat", "nao precisa", "escolh", "have to"],
    ["Exemplos corretos", "smoke", "come", "exemplo", "you"],
  ]),
], "n");

extend(INGLES, "Comparativos e superlativos", [
  q("Complete: An elephant is ___ than a horse.", ["big", "bigger", "biggest", "more big"], 1, "Adjetivo curto em consoante-vogal-consoante dobra a consoante: big → bigger than."),
  q("Complete: This is the ___ day of my life:", ["happier", "happiest", "most happy", "more happy"], 1, "Superlativo de adjetivo terminado em -y: troca por -iest. Happy → the happiest."),
  q("Complete: English is ___ than Chinese for many Brazilians.", ["more easy", "easier", "easyer", "the easiest"], 1, "Easy termina em -y: easier than. 'More easy' está errado."),
  q("Complete: She is the ___ student in the class.", ["more intelligent", "most intelligent", "intelligenter", "intelligentest"], 1, "Adjetivo longo (3+ sílabas) forma o superlativo com 'the most': the most intelligent."),
  q("Qual é o superlativo de 'bad'?", ["the baddest", "the worst", "the worse", "the most bad"], 1, "Bad é irregular: bad – worse – the worst."),
  q("Complete: My phone is as good ___ yours.", ["than", "as", "that", "like"], 1, "Comparação de igualdade: as + adjetivo + as. 'As good as' = tão bom quanto."),
  qe("“Mount Everest is the highest mountain in the world. It is higher than K2, the second highest.”", "Segundo o texto:", ["O K2 é a montanha mais alta do mundo", "O Everest é mais alto que o K2", "As duas têm a mesma altura", "O K2 é mais alto que o Everest"], 1, "'Everest is the highest' (a mais alta) e 'higher than K2' (mais alta que o K2)."),
  qe("Ad: “Our new phone is thinner, lighter and faster than the old model. And it's cheaper!”", "O anúncio diz que o novo celular, comparado ao antigo, é:", ["Mais grosso, mais pesado e mais lento", "Mais fino, leve, rápido e barato", "Mais caro, mais lento e mais pesado", "Igual ao antigo em todos os aspectos"], 1, "'Thinner' (mais fino), 'lighter' (mais leve), 'faster' (mais rápido) e 'cheaper' (mais barato)."),
  qe("“Cheetahs are the fastest land animals. They can run faster than a car on a city street.”", "O texto afirma que o guepardo:", ["É o animal terrestre mais veloz", "É mais lento que um carro na cidade", "É o maior animal terrestre do planeta", "Vive apenas nas ruas das grandes cidades"], 0, "'The fastest land animals' = os animais terrestres mais rápidos."),
  qe("Review: “The hotel was not as comfortable as we expected, but the food was the best we've ever had.”", "Para o autor da avaliação:", ["O hotel foi melhor do que o esperado", "Hotel ruim, mas comida ótima", "A comida foi a pior que já comeram", "Tudo foi exatamente como o esperado"], 1, "'Not as comfortable as we expected' = menos confortável que o esperado; 'the best we've ever had' = a melhor comida que já comemos."),
  q("Qual é o comparativo de 'far'?", ["farer", "farther", "more far", "farest"], 1, "Far é irregular: far – farther (ou further) – the farthest."),
  m("Marque comparativos e superlativos corretos:", ["better", "the worst", "more expensive", "gooder", "the most big"], [0, 1, 2], "Good → better (não 'gooder'); big → the biggest (não 'the most big')."),
  m("Marque os pares adjetivo → comparativo corretos:", ["hot → hotter", "easy → easier", "beautiful → more beautiful", "tall → more tall", "good → gooder"], [0, 1, 2], "Tall → taller; good → better."),
  o("Como se formam o comparativo e o superlativo de adjetivos curtos e longos em inglês?", "Adjetivos curtos ganham -er e -est: tall, taller, the tallest. Adjetivos longos usam 'more' e 'the most': beautiful, more beautiful, the most beautiful. Há irregulares, como good, better, the best.", [
    ["Curtos: -er e -est", "taller", "tallest", "bigger", "sufixo"],
    ["Longos: more e the most", "more", "most"],
    ["Irregulares (good/better/best, bad/worse/worst)", "better", "best", "worse", "worst", "irregular"],
  ]),
], "n");

extend(INGLES, "Voz passiva", [
  q("Qual é a voz passiva de 'Someone stole my bike'?", ["My bike was stolen.", "My bike is stealing by someone.", "My bike stole someone yesterday.", "My bike has steal by someone."], 0, "Stole está no passado: passiva = was/were + particípio (stolen). Quando o agente é desconhecido, ele é omitido."),
  q("Complete: English ___ in many countries.", ["speaks", "is spoken", "is speaking around", "spoke"], 1, "Presente passivo = am/is/are + particípio. A língua não fala; ela 'é falada': is spoken."),
  q("Em 'The book was written by Machado de Assis', quem praticou a ação?", ["The book", "Machado de Assis", "Ninguém foi citado", "O leitor do livro"], 1, "Na passiva, o agente aparece depois de 'by': by Machado de Assis. O livro sofreu a ação."),
  q("Complete: The new bridge ___ next year.", ["will build", "will be built", "is build next", "built"], 1, "Futuro passivo = will be + particípio: will be built."),
  q("Qual é o particípio de 'make', usado na passiva?", ["maked", "made", "making", "maken"], 1, "make – made – made. Ex.: 'These shoes are made in Brazil'."),
  q("Complete: The letters ___ every morning by the postman.", ["delivers", "are delivered", "is deliver", "delivering now"], 1, "Sujeito plural (the letters) + presente passivo: are + particípio (delivered)."),
  qe("Label on a product: “Made in Brazil. Designed in Italy. Packed with 100% recycled paper.”", "Segundo o rótulo, o produto foi:", ["Feito na Itália", "Fabricado no Brasil", "Embalado em plástico", "Desenhado no Brasil"], 1, "'Made in Brazil' = fabricado no Brasil; 'Designed in Italy' = projetado na Itália; embalado em papel reciclado."),
  qe("News: “A 500-year-old painting was found in a church in Spain. It was hidden behind a wall.”", "A notícia relata que uma pintura:", ["Foi pintada recentemente", "Foi encontrada escondida", "Foi roubada de uma igreja", "Foi vendida por 500 euros"], 1, "'Was found' = foi encontrada; 'was hidden behind a wall' = estava escondida atrás de uma parede."),
  qe("“Every year, millions of tons of plastic are thrown into the oceans. Many animals are killed by plastic waste.”", "O texto usa a voz passiva para destacar:", ["Quem joga o plástico no mar", "O plástico e os animais afetados", "As fábricas de plástico", "Os peixes que comem algas"], 1, "Na passiva, o foco vai para quem sofre a ação: o plástico jogado e os animais mortos, não para quem joga."),
  qe("Notice in a park: “Dogs must be kept on a leash. Bicycles are not allowed on the grass.”", "O aviso determina que:", ["Cães podem andar soltos", "Cães devem ficar na coleira", "Bicicletas podem ir na grama", "Cães são proibidos no parque"], 1, "'Must be kept on a leash' = devem ser mantidos na coleira. 'Bicycles are not allowed on the grass' = bicicletas proibidas na grama."),
  q("Por que se usa a voz passiva em 'The car was repaired'?", ["Importa o carro, não quem consertou", "Porque o carro consertou algo sozinho", "Porque a frase está no futuro", "Porque é obrigatório usar 'by'"], 0, "A passiva destaca o objeto da ação quando o agente é desconhecido, óbvio ou pouco importante."),
  m("Marque as frases na voz passiva:", ["The house was built in 1990.", "Rice is grown in Asia.", "The song will be played.", "She built a house.", "They grow rice."], [0, 1, 2], "As duas últimas estão na voz ativa: o sujeito pratica a ação."),
  m("Marque as passivas corretas:", ["It was made by hand.", "The windows are cleaned daily.", "The cake has been eaten.", "The cake was eat.", "The letter is write."], [0, 1, 2], "O verbo principal da passiva vai para o particípio: eaten, written."),
  o("Como se forma a voz passiva em inglês e quando ela é útil?", "A voz passiva usa o verbo to be no tempo da frase + o particípio do verbo principal: 'The book was written'. O agente, se aparecer, vem com 'by' ('by Machado'). É útil quando o importante é a ação ou quem a sofre, ou quando não se sabe quem a fez.", [
    ["To be + particípio", "to be", "particip", "was"],
    ["Agente com 'by'", "by the", "agente", "by machado"],
    ["Útil quando o foco é a ação ou o agente é desconhecido", "foco", "important", "desconhecid", "nao se sabe"],
  ]),
], "n");

extend(INGLES, "Conditionals", [
  q("Complete: If you heat ice, it ___.", ["melt", "melts", "will melting", "melted"], 1, "Zero conditional (verdades gerais): if + presente, presente. It melts."),
  q("Complete: If it rains tomorrow, I ___ at home.", ["stay", "will stay", "would stayed", "stayed"], 1, "First conditional (possibilidade real no futuro): if + presente, will + verbo."),
  q("Complete: If I ___ rich, I would travel the world.", ["am", "were", "will be", "have been"], 1, "Second conditional (situação imaginária): if + passado, would + verbo. Com to be, usa-se 'were' para todas as pessoas."),
  q("Em 'If I had studied, I would have passed', a pessoa:", ["Estudou e passou", "Não estudou e não passou", "Vai estudar amanhã", "Está estudando agora"], 1, "Third conditional fala de algo que não aconteceu no passado e seu resultado imaginado: não estudou, não passou."),
  q("'Unless' equivale a:", ["if not", "because", "when", "so that"], 0, "'Unless' = a menos que = 'if… not'. 'You'll fail unless you study' = 'You'll fail if you don't study'."),
  q("Complete: What would you do if you ___ a million dollars?", ["win", "won", "will win", "have won"], 1, "Situação imaginária (second conditional): if + passado (won), would + verbo."),
  qe("Campaign: “If you drink, don't drive. If you drive, don't drink.”", "A campanha recomenda:", ["Beber só um pouco antes de dirigir", "Não misturar bebida e direção", "Dirigir apenas durante o dia", "Beber depois de estacionar mal"], 1, "As duas condicionais dizem a mesma coisa: quem bebe não dirige e quem dirige não bebe."),
  qe("“If global temperatures rise by 2 °C, many coral reefs will disappear.”", "A frase expressa:", ["Uma consequência possível", "Algo que já aconteceu", "Um desejo impossível", "Uma ordem dada aos cientistas"], 0, "First conditional: se as temperaturas subirem 2 °C, muitos recifes vão desaparecer. É uma consequência real possível."),
  qe("Song lyrics: “If I could turn back time, I would say I'm sorry.”", "O eu lírico:", ["Pode voltar no tempo", "Deseja algo que não pode fazer", "Já pediu desculpas", "Não se arrepende de nada"], 1, "Second conditional: situação imaginária. Ele não pode voltar no tempo, mas, se pudesse, pediria desculpas: há arrependimento."),
  qe("Sign in a store: “If you are not satisfied, we will return your money within 30 days.”", "A loja promete:", ["Trocar o produto em até 3 dias úteis", "Devolver o dinheiro ao insatisfeito", "Dar desconto de 30% na próxima compra", "Entregar qualquer pedido em 30 dias"], 1, "'We will return your money within 30 days' = devolvemos o dinheiro em até 30 dias, se não estiver satisfeito."),
  q("Complete: If I were you, I ___ apologize.", ["will", "would", "am", "did"], 1, "'If I were you, I would…' é a forma clássica de dar conselho (second conditional)."),
  m("Marque as condicionais corretas:", ["If it rains, we will stay home.", "If I were taller, I would play basketball.", "If you mix blue and yellow, you get green.", "If I will see him, I tell him.", "If she would come, I will be happy."], [0, 1, 2], "Depois de 'if' não se usa 'will' nem 'would' na first e second conditional."),
  m("Marque o que a second conditional expressa:", ["Situações imaginárias no presente", "Hipóteses pouco prováveis", "Conselhos com 'If I were you'", "Fatos científicos sempre verdadeiros", "Ações terminadas no passado"], [0, 1, 2], "Fatos científicos usam zero conditional; arrependimentos do passado, third conditional."),
  o("Explique a diferença entre 'If it rains, I will stay home' e 'If it rained, I would stay home'.", "A primeira (first conditional) fala de uma possibilidade real no futuro: é provável que chova. A segunda (second conditional) fala de uma situação hipotética ou improvável: a pessoa imagina que choveria, mas não espera isso. Por isso a primeira usa presente + will, e a segunda, passado + would.", [
    ["A primeira é possibilidade real", "real", "provavel", "possivel", "first"],
    ["A segunda é hipótese ou improvável", "hipot", "imagin", "improvavel", "second"],
    ["Menciona os tempos verbais (will / would)", "will", "would", "passado", "presente"],
  ]),
], "n");

extend(INGLES, "Reported speech", [
  q("He said: “I am tired.” Em discurso indireto:", ["He said that he was tired.", "He said that I am tired.", "He said that he is being tired.", "He says that I was tired."], 0, "No reported speech, o tempo recua (am → was) e o pronome muda (I → he)."),
  q("She said: “I will call you.” Em discurso indireto:", ["She said she will call me.", "She said she would call me.", "She said I would call you.", "She say she calls me."], 1, "'Will' vira 'would' no discurso indireto; 'you' vira 'me' (quem conta é quem recebeu a promessa)."),
  q("They said: “We live in Rio.” Em discurso indireto:", ["They said they lived in Rio.", "They said we lived in Rio.", "They said they live in Rio now.", "They said that we live in Rio."], 0, "Presente simples recua para passado (live → lived) e 'we' vira 'they'."),
  q("No reported speech, 'tomorrow' costuma virar:", ["yesterday", "the next day", "today", "last week"], 1, "Referências de tempo mudam: tomorrow → the next day (ou the following day); today → that day."),
  q("He asked: “Where do you live?” Em discurso indireto:", ["He asked where I lived.", "He asked where did I live.", "He asked where do you live.", "He asked me where I am living now."], 0, "Pergunta indireta perde o auxiliar 'do' e fica em ordem de afirmação: where I lived."),
  q("Qual verbo introduz uma ordem no discurso indireto?", ["told me to", "said me that", "asked if", "talked me"], 0, "Ordens: told + pessoa + to + verbo. Ex.: 'She told me to close the door'."),
  qe("“My teacher said that the test would be on Friday and that we should review chapters 3 and 4.”", "Segundo o aluno, a professora disse que:", ["A prova seria na sexta", "Não haveria prova", "A prova seria sobre o capítulo 5", "A prova já tinha acontecido"], 0, "'The test would be on Friday' = a prova seria na sexta; 'we should review chapters 3 and 4' = revisar os capítulos 3 e 4."),
  qe("News: “The minister said that the new hospital would open in March, but it is still closed.”", "A notícia sugere que:", ["O hospital abriu em março", "A promessa do ministro não foi cumprida", "O ministro não falou nada", "O hospital nunca foi planejado"], 1, "O ministro disse que abriria em março, 'but it is still closed' (mas ainda está fechado): a promessa não se cumpriu."),
  qe("“The doctor told me to rest for a week and asked if I had any allergies.”", "O médico:", ["Mandou descansar e perguntou sobre alergias", "Disse que o paciente estava curado", "Pediu exames de sangue", "Receitou um antibiótico"], 0, "'Told me to rest for a week' = mandou descansar uma semana; 'asked if I had any allergies' = perguntou se tinha alergias."),
  qe("“She said she had never seen the ocean before the trip.”", "Antes da viagem, ela:", ["Nunca tinha visto o mar", "Morava perto do mar", "Viu o mar várias vezes", "Tinha medo do mar"], 0, "'Had never seen the ocean' (past perfect) = nunca tinha visto o mar antes da viagem."),
  q("Complete: She asked me ___ I liked pizza.", ["that", "if", "what that", "do"], 1, "Pergunta de sim/não no discurso indireto usa 'if' (ou 'whether'): She asked me if I liked pizza."),
  m("Marque as mudanças típicas do reported speech:", ["am/is → was", "will → would", "today → that day", "past → present", "here → now"], [0, 1, 2], "O tempo recua (não avança) e 'here' vira 'there'."),
  m("Marque as frases corretas em discurso indireto:", ["He said he was busy.", "She told me to wait.", "They asked if we were ready.", "He said me that he was busy.", "She asked where was the station."], [0, 1, 2], "'Said me' está errado (said to me / told me); pergunta indireta fica em ordem direta: where the station was."),
  o("O que muda quando passamos uma frase do discurso direto para o indireto em inglês?", "Em geral o tempo verbal recua (am → was, will → would), os pronomes mudam conforme quem conta (I → he) e as referências de tempo e lugar se ajustam (tomorrow → the next day, here → there). Perguntas perdem o auxiliar e usam 'if' quando são de sim ou não.", [
    ["O tempo verbal recua", "recua", "tempo verbal", "was", "would", "passado"],
    ["Pronomes mudam", "pronome", "i → he", "muda"],
    ["Tempo e lugar se ajustam", "tomorrow", "next day", "there", "lugar"],
  ]),
], "n");

extend(INGLES, "Estratégias de leitura", [
  q("Ao ver uma palavra desconhecida num texto, a melhor estratégia inicial é:", ["Parar e buscar no dicionário", "Tentar deduzir pelo contexto", "Pular o parágrafo inteiro", "Desistir da questão de vez"], 1, "Deduzir pelo contexto (palavras ao redor, cognatos, imagem) poupa tempo e quase sempre basta para entender a ideia."),
  q("Palavras como 'firstly', 'then' e 'finally' indicam:", ["Contraste", "Sequência", "Causa", "Comparação"], 1, "São marcadores de sequência: organizam passos ou eventos em ordem."),
  q("A 'topic sentence' de um parágrafo costuma ser:", ["A frase com a ideia principal", "A última palavra do texto", "A legenda de uma foto", "Uma citação qualquer"], 0, "A topic sentence apresenta a ideia principal do parágrafo, em geral logo no começo."),
  q("Prefixo 'un-' em 'unhappy' indica:", ["Repetição", "Negação", "Excesso", "Tempo"], 1, "'Un-' nega: unhappy (infeliz), unknown (desconhecido). Prefixos ajudam a deduzir palavras novas."),
  q("Sufixo '-less' em 'careless' indica:", ["Sem, ausência", "Muito, excesso", "Pessoa que faz", "Lugar"], 0, "'-less' = sem: careless (descuidado, sem cuidado), homeless (sem-teto)."),
  q("Antes de ler um texto do ENEM, observar a fonte e a data ajuda a:", ["Saber o gênero e o contexto", "Descobrir a resposta certa", "Traduzir tudo palavra por palavra", "Contar quantas palavras há"], 0, "Fonte e data indicam o tipo de texto (notícia, blog, campanha) e o contexto, o que guia a leitura."),
  qe("“Despite the rain, thousands of fans waited outside the stadium for hours to see the band.”", "A palavra 'despite' indica que:", ["A chuva impediu a espera", "Os fãs esperaram mesmo com chuva", "Os fãs foram embora por causa da chuva", "Não choveu naquele dia"], 1, "'Despite' = apesar de: mesmo com a chuva, milhares de fãs esperaram por horas."),
  qe("Infographic title: “Screen time: teens spend 7 hours a day on their phones — and sleep less than 7.”", "O infográfico sugere uma relação entre:", ["Celular e tempo de sono", "Escola e esporte", "Alimentação e saúde", "Música e estudo"], 0, "Compara o tempo de tela (7 horas) com o sono (menos de 7 horas), sugerindo que o celular afeta o sono."),
  qe("“Recycling is important. However, reducing consumption is even more effective, because the best waste is the one we don't produce.”", "Para o autor, o mais eficaz é:", ["Reciclar mais", "Consumir menos", "Queimar o lixo", "Produzir mais embalagens"], 1, "'However' introduz o ponto principal: reduzir o consumo é ainda mais eficaz que reciclar."),
  qe("Cartoon: a man looks at his phone while walking and falls into a hole. Caption: “Stay connected… to reality.”", "O cartum critica:", ["O uso do celular sem atenção ao redor", "A falta de sinal de internet", "Buracos nas ruas da cidade", "O preço dos celulares"], 0, "A legenda faz trocadilho com 'connected': o homem está conectado ao celular, mas desligado da realidade e cai no buraco."),
  q("'Skimming' e 'scanning' diferem porque:", ["Skimming: ideia geral; scanning: um dado", "Os dois buscam apenas a ideia geral do texto", "Scanning traduz o texto inteiro, palavra por palavra", "Skimming exige ler devagar, frase por frase"], 0, "Skimming = leitura rápida da ideia geral. Scanning = varredura atrás de uma informação específica."),
  m("Marque estratégias úteis para ler em inglês no ENEM:", ["Observar título, imagens e fonte", "Usar cognatos", "Ler a pergunta antes do texto", "Traduzir palavra por palavra", "Ignorar conectivos como 'however'"], [0, 1, 2], "Tradução literal gasta tempo e conectivos como 'however' mostram a ideia principal."),
  m("Marque os conectivos de contraste:", ["however", "although", "but", "because", "therefore"], [0, 1, 2], "'Because' indica causa e 'therefore', conclusão."),
  o("Explique duas estratégias para entender um texto em inglês sem saber todas as palavras.", "Primeiro, observar o contexto: título, imagens, fonte e gênero do texto. Depois, usar cognatos e deduzir palavras novas pelas frases ao redor ou por prefixos e sufixos. Também ajuda ler a pergunta antes e buscar só o que ela pede (scanning).", [
    ["Usar o contexto (título, imagem, fonte)", "contexto", "titulo", "imagem", "fonte", "genero"],
    ["Usar cognatos ou deduzir palavras", "cognato", "dedu", "prefixo", "sufixo"],
    ["Ler a pergunta antes / buscar o que se pede", "pergunta", "scanning", "skimming", "antes"],
  ]),
], "n");

extend(INGLES, "Irregular verbs", [
  q("Qual é o passado de 'take'?", ["taked", "took", "taken", "toke"], 1, "take – took – taken. 'Taken' é o particípio (I have taken)."),
  q("Qual é o passado de 'bring'?", ["bringed", "brought", "brang", "bought"], 1, "bring – brought – brought. Não confunda com 'bought', passado de 'buy' (comprar)."),
  q("Qual é o particípio de 'speak'?", ["speaked", "spoke", "spoken", "spoked"], 2, "speak – spoke – spoken. 'English is spoken here' usa o particípio."),
  q("Qual é o passado de 'teach'?", ["teached", "taught", "thought", "tought"], 1, "teach – taught – taught. 'Thought' é passado de 'think' (pensar)."),
  q("Complete: She ___ a letter to her friend yesterday.", ["writed", "wrote", "written", "writes"], 1, "'Yesterday' pede simple past: write – wrote – written."),
  q("Qual verbo tem as três formas iguais?", ["cut", "go", "eat", "see"], 0, "cut – cut – cut. Também: put, let, hit, cost. Go, eat e see mudam."),
  qe("Story: “I woke up late, took a quick shower, ran to the bus stop… and found out it was Sunday.”", "O humor da história está em que a pessoa:", ["Perdeu o ônibus de domingo", "Correu à toa, pois era domingo", "Acordou cedo demais", "Não tomou banho"], 1, "Woke (acordou), took (tomou), ran (correu), found out (descobriu): toda a pressa foi inútil, pois era domingo."),
  qe("Biography: “She began to paint at the age of 60. In ten years, she sold hundreds of paintings and became famous.”", "Segundo o texto, a pintora:", ["Começou a pintar aos 60 anos", "Ficou famosa aos 6 anos", "Nunca vendeu um quadro", "Parou de pintar aos 60"], 0, "'Began to paint at the age of 60' = começou a pintar aos 60; 'became famous' = ficou famosa."),
  qe("“We thought the test would be easy, but we were wrong: nobody got more than 5.”", "O texto mostra que os alunos:", ["Acertaram a dificuldade da prova", "Acharam que seria fácil e erraram", "Tiraram notas altas", "Não fizeram a prova"], 1, "'We thought… easy, but we were wrong' = achamos que seria fácil, mas erramos: ninguém tirou mais de 5."),
  qe("Tweet: “Lost my wallet on the bus. A stranger found it and brought it to my house. Faith in humanity restored!”", "A pessoa ficou feliz porque:", ["Encontrou a carteira no ônibus", "Um desconhecido devolveu a carteira", "Ganhou uma carteira nova", "Perdeu o ônibus"], 1, "'A stranger found it and brought it to my house' = um desconhecido achou e levou a carteira até a casa dela."),
  q("Qual é o particípio de 'begin'?", ["began", "begun", "beginned", "begin"], 1, "begin – began – begun. Ex.: 'The class has already begun'."),
  m("Marque os verbos com as formas corretas (base – passado – particípio):", ["see – saw – seen", "drink – drank – drunk", "give – gave – given", "fly – flied – flown", "eat – eated – eaten"], [0, 1, 2], "fly – flew – flown; eat – ate – eaten."),
  m("Marque os passados irregulares corretos:", ["buy → bought", "think → thought", "catch → caught", "run → runned", "swim → swimmed"], [0, 1, 2], "run → ran; swim → swam."),
  o("Por que os verbos irregulares precisam ser memorizados? Dê dois exemplos.", "Porque não seguem a regra do -ed: o passado e o particípio mudam de forma imprevisível. Ex.: go – went – gone; eat – ate – eaten. Estudar em grupos parecidos (sing, sang, sung / ring, rang, rung) ajuda a memorizar.", [
    ["Não seguem a regra do -ed", "regra", "imprevis", "nao seguem"],
    ["Dois exemplos corretos", "went", "ate", "gone", "eaten", "took", "saw", "bought"],
    ["Dica para memorizar (grupos, repetição)", "grupo", "memoriz", "repet", "lista", "parecid"],
  ]),
], "n");

extend(INGLES, "Linking words", [
  q("Complete: I was hungry, ___ I ate a sandwich.", ["so", "but", "although", "unless"], 0, "'So' indica consequência: estava com fome, então comi."),
  q("Complete: ___ it was cold, we went to the beach.", ["Because", "Even though", "So", "Therefore"], 1, "'Even though' = mesmo que, embora: contraste entre o frio e ir à praia."),
  q("'In addition' expressa ideia de:", ["Contraste", "Adição", "Conclusão", "Condição"], 1, "'In addition' = além disso. Sinônimos: moreover, furthermore, besides."),
  q("Complete: She studied a lot. ___, she got the best grade.", ["However", "As a result", "Although", "Unless"], 1, "'As a result' = como resultado: indica consequência."),
  q("'Whereas' indica:", ["Contraste entre duas ideias", "Causa", "Tempo", "Finalidade"], 0, "'Whereas' = enquanto (contraste): 'I like tea, whereas my sister prefers coffee'."),
  q("Complete: He stayed home ___ he was sick.", ["because", "although", "so", "however"], 0, "'Because' introduz a causa: ficou em casa porque estava doente."),
  qe("“Electric cars produce no emissions while driving. However, the electricity they use may come from coal plants.”", "O conectivo 'however' introduz:", ["Uma vantagem a mais", "Uma ressalva", "Um exemplo", "A conclusão do autor"], 1, "'However' traz um contraste: os carros não emitem ao rodar, mas a eletricidade pode vir de usinas a carvão."),
  qe("“Sleep is essential for learning. Therefore, students should avoid staying up late before exams.”", "'Therefore' indica que a segunda frase é:", ["Uma conclusão", "Uma contradição", "Um exemplo", "Uma pergunta"], 0, "'Therefore' = portanto. Como o sono é essencial, conclui-se que é melhor não ficar acordado até tarde."),
  qe("“Although the movie was long, nobody left the room before the end.”", "A frase indica que:", ["Todos saíram antes do fim", "Mesmo longo, todos ficaram", "O filme era curto demais", "O filme foi cancelado"], 1, "'Although' = embora: apesar de longo, ninguém saiu antes do fim."),
  qe("Ad: “Our gym is open 24 hours. Moreover, the first class is free!”", "'Moreover' acrescenta:", ["Uma desvantagem", "Mais uma vantagem", "Uma condição", "Um horário restrito"], 1, "'Moreover' = além disso: além de abrir 24h, a primeira aula é grátis."),
  q("Complete: You can come to the party ___ you bring a dessert.", ["unless", "as long as", "although", "however"], 1, "'As long as' = desde que (condição): pode vir desde que traga uma sobremesa."),
  m("Marque os conectivos de causa:", ["because", "since", "due to", "however", "although"], [0, 1, 2], "'However' e 'although' indicam contraste."),
  m("Marque os conectivos de conclusão:", ["therefore", "thus", "so", "although", "whereas"], [0, 1, 2], "'Although' e 'whereas' indicam contraste."),
  o("Por que os conectivos (linking words) são importantes na leitura de textos em inglês?", "Eles mostram a relação entre as ideias: contraste (however, but), causa (because), conclusão (therefore) e adição (moreover). Assim, mesmo sem saber todas as palavras, dá para entender a lógica do texto e achar a ideia principal, que muitas vezes vem depois de 'however'.", [
    ["Mostram a relação entre ideias", "relacao", "liga", "conecta", "logica"],
    ["Exemplo de tipo (contraste, causa, conclusão)", "contraste", "causa", "conclus", "however", "because", "therefore"],
    ["Ajudam a achar a ideia principal", "ideia principal", "principal", "entender", "compreen"],
  ]),
], "n");

extend(INGLES, "False friends", [
  q("'Pull' significa:", ["Pular", "Puxar", "Empurrar", "Polir"], 1, "'Pull' = puxar; 'push' = empurrar. 'Pular' é 'jump'."),
  q("'Costume' significa:", ["Costume, hábito", "Fantasia, traje", "Costura", "Custo"], 1, "Falso cognato: 'costume' = fantasia ou traje. 'Costume' (hábito) é 'habit' ou 'custom'."),
  q("'Data' significa:", ["Data do calendário", "Dados", "Dote", "Dita"], 1, "'Data' = dados (informações). Data do calendário é 'date'."),
  q("'Realize' significa:", ["Realizar", "Perceber, dar-se conta", "Relaxar", "Reler"], 1, "Falso cognato: 'realize' = perceber. 'Realizar' (fazer) é 'carry out' ou 'accomplish'."),
  q("'Tax' significa:", ["Táxi", "Imposto", "Taxa de juros", "Tática"], 1, "'Tax' = imposto. 'Táxi' é 'taxi' ou 'cab'."),
  q("'Assist' significa:", ["Assistir a um filme", "Ajudar", "Assinar", "Assistente"], 1, "Falso cognato: 'assist' = ajudar. 'Assistir' (ver) é 'watch'."),
  qe("“I didn't realize it was so late. I have to go now!”", "A pessoa:", ["Realizou um sonho tarde", "Não percebeu que era tarde", "Chegou tarde ao trabalho", "Quer ficar mais tempo"], 1, "'Didn't realize' = não percebi. Ela não tinha notado que era tão tarde."),
  qe("Party invitation: “Costume party! Come dressed as your favorite superhero.”", "O convite pede que os convidados:", ["Mantenham seus costumes", "Venham fantasiados", "Tragam comida típica", "Cheguem cedo"], 1, "'Costume party' = festa à fantasia; 'come dressed as your favorite superhero' = venha vestido de super-herói."),
  qe("“The company collects personal data from users, such as name, age and location.”", "'Data', no texto, se refere a:", ["Datas de aniversário", "Dados pessoais", "Documentos de identidade", "Datas de vencimento"], 1, "'Personal data' = dados pessoais, como nome, idade e localização."),
  qe("“Prices include all taxes. No extra fees at checkout.”", "O aviso informa que:", ["Os táxis estão incluídos", "Os impostos já estão no preço", "Há taxas extras no caixa", "Os preços vão subir"], 1, "'Taxes' = impostos. 'Prices include all taxes' = o preço já inclui os impostos; 'no extra fees' = sem taxas extras."),
  q("'Novel' significa:", ["Novela de TV", "Romance (livro)", "Novidade", "Novato"], 1, "'Novel' = romance (livro). Novela de TV é 'soap opera'."),
  m("Marque os pares falso amigo → sentido certo:", ["Realize: perceber", "Costume: fantasia", "Data: dados", "Assist: assistir", "Novel: novela"], [0, 1, 2], "Assist = ajudar; novel = romance (livro)."),
  m("Marque as palavras que NÃO significam o que parecem:", ["Lunch", "Parents", "Exquisite", "Computer", "Animal"], [0, 1, 2], "Lunch = almoço; parents = pais; exquisite = requintado. Computer e animal são cognatos verdadeiros."),
  o("Escolha um falso cognato e explique o erro que ele pode causar numa leitura.", "Por exemplo, 'pretend' parece 'pretender', mas significa 'fingir'. Na frase 'He pretended to be sick', quem traduz pela aparência entende 'ele pretendia estar doente', mas o certo é 'ele fingiu estar doente'. Isso muda totalmente o sentido.", [
    ["Cita um falso cognato", "pretend", "actually", "realize", "costume", "library", "parents", "push", "data", "assist"],
    ["Dá o sentido correto", "fingir", "na verdade", "perceber", "fantasia", "biblioteca", "pais", "empurrar", "dados", "ajudar"],
    ["Mostra que muda o sentido da leitura", "muda", "sentido", "erro", "engan", "confund"],
  ]),
], "n");

extend(INGLES, "Reading for ENEM", [
  qe("Poster: “Bullying is not a joke. If you see it, report it. Silence protects the bully.”", "O cartaz incentiva o leitor a:", ["Rir de piadas na escola", "Denunciar o bullying", "Ficar em silêncio", "Proteger quem pratica bullying"], 1, "'If you see it, report it' = se vir, denuncie. 'Silence protects the bully' mostra que ficar calado ajuda o agressor."),
  qe("“Only 3% of the water on Earth is fresh water, and most of it is frozen in glaciers.”", "O texto destaca que a água doce:", ["É abundante e fácil de usar", "É pouca e boa parte está congelada", "Corresponde a 97% da água", "Está toda nos rios"], 1, "Só 3% da água é doce ('fresh water') e a maior parte está congelada ('frozen in glaciers')."),
  qe("Book review: “The plot is predictable, but the characters are so real that you can't stop reading.”", "Para o crítico, o ponto forte do livro são:", ["As reviravoltas da trama", "Os personagens", "As ilustrações", "O final surpreendente"], 1, "A trama é previsível ('predictable'), mas os personagens são tão reais que não dá para parar de ler."),
  qe("Tweet: “Remember: a 'free' app usually means YOU are the product.”", "O tweet sugere que apps gratuitos:", ["Não têm nenhum custo", "Lucram com os dados dos usuários", "São sempre seguros", "Vendem produtos físicos"], 1, "Se o app é grátis, 'você é o produto': as empresas lucram com seus dados e sua atenção."),
  qe("“Studies show that people who read fiction tend to be more empathetic, because they practice seeing the world through other eyes.”", "Segundo o texto, ler ficção:", ["Deixa as pessoas mais solitárias", "Pode aumentar a empatia", "Prejudica a concentração", "Substitui a escola"], 1, "Leitores de ficção tendem a ser mais empáticos ('more empathetic'), pois treinam ver o mundo com outros olhos."),
  qe("Sign at a beach: “No lifeguard on duty. Swim at your own risk.”", "O aviso alerta que:", ["Há salva-vidas disponível", "Não há salva-vidas no local", "É proibido nadar", "A praia está fechada"], 1, "'No lifeguard on duty' = sem salva-vidas de plantão; quem nadar assume o risco ('at your own risk')."),
  qe("“In Japan, many trains are so punctual that a delay of one minute can lead to an official apology.”", "O texto ilustra:", ["A falta de pontualidade no Japão", "A pontualidade dos trens japoneses", "O preço alto das passagens", "A lentidão do transporte"], 1, "Os trens são tão pontuais que um atraso de um minuto pode gerar pedido oficial de desculpas."),
  qe("Campaign: “Every drop counts. Turn off the tap while brushing your teeth and save up to 12 liters a day.”", "Qual é o foco da campanha?", ["Vender escovas de dente", "Economizar água", "Aumentar o consumo de água", "Ensinar a escovar os dentes"], 1, "'Every drop counts' e 'save up to 12 liters a day': o foco é economizar água fechando a torneira."),
  qe("“Some people say video games make teenagers violent. However, most research has found no direct link.”", "Para o autor:", ["Os games causam violência", "Não há prova clara de que games causam violência", "Os adolescentes não jogam games", "As pesquisas confirmam a violência"], 1, "'However, most research has found no direct link' = a maioria das pesquisas não achou ligação direta."),
  qe("Recipe: “Mix the flour and the sugar. Add two eggs and beat for five minutes. Bake for 30 minutes at 180 °C.”", "O texto é do gênero:", ["Notícia", "Receita", "Poema", "Carta"], 1, "Verbos no imperativo (mix, add, bake) em sequência de passos caracterizam uma receita (texto injuntivo)."),
  qe("“The word 'robot' comes from the Czech 'robota', which means forced work.”", "O texto explica:", ["A origem da palavra 'robot'", "Como construir robôs", "O trabalho infantil", "A história da República Tcheca"], 0, "Explica a origem (etimologia) da palavra: vem do tcheco 'robota', trabalho forçado."),
  m("Marque o que costuma ajudar na leitura de questões do ENEM em inglês:", ["Identificar o gênero do texto", "Observar elementos visuais", "Atenção a conectivos de contraste", "Traduzir todas as palavras", "Ignorar o enunciado em português"], [0, 1, 2], "Traduzir tudo gasta tempo e o enunciado em português diz o que buscar."),
  m("Marque os gêneros que costumam aparecer nas questões de inglês do ENEM:", ["Cartuns e tirinhas", "Campanhas e anúncios", "Trechos de notícias", "Manuais de 300 páginas", "Teses completas"], [0, 1, 2], "O ENEM usa textos curtos e autênticos, não obras longas."),
  o("Num texto de campanha em inglês, que pistas ajudam a descobrir o objetivo do autor?", "Verbos no imperativo ('Save', 'Report', 'Don't'), o slogan, as imagens e o público a quem o texto se dirige. Essas pistas mostram que o texto quer convencer o leitor a fazer ou deixar de fazer algo, como economizar água ou denunciar o bullying.", [
    ["Verbos no imperativo", "imperativo", "save", "don't", "report", "ordem"],
    ["Slogan, imagem ou público", "slogan", "imagem", "publico", "leitor"],
    ["O objetivo é convencer ou conscientizar", "convenc", "consciente", "persuad", "mudar"],
  ]),
], "n");
