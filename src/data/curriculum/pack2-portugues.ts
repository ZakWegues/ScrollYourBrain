import { PORTUGUES } from "./linguagens";
import { extend, m, o, q, qe } from "./pack";

// Novas questões de Português (diretas e estilo ENEM). Ids: `${topic.id}-nN`.

extend(PORTUGUES, "Funções da linguagem", [
  q("A função fática serve para:", ["Testar o contato", "Expressar as emoções", "Convencer o leitor a agir", "Explicar o próprio código"], 0, "Ex.: 'Alô?', 'Tá me ouvindo?', 'Bom dia!'."),
  q("A função metalinguística aparece quando:", ["A língua fala de si", "Se conta uma notícia do dia", "Se faz um apelo ao leitor", "Se descreve uma emoção íntima"], 0, "Ex.: um verbete de dicionário ou um poema sobre o ato de escrever."),
  q("A função referencial predomina em:", ["Notícias", "Cartas de amor apaixonadas", "Propagandas de televisão", "Poemas com rimas e ritmo"], 0, "Foco no assunto (referente), com linguagem objetiva."),
  q("A função poética valoriza:", ["A forma da mensagem", "O receptor da mensagem", "O canal da comunicação", "O código usado no texto"], 0, "Ritmo, rima, sonoridade e escolhas inesperadas de palavras."),
  qe("Propaganda: 'Beba Refrescante. Você merece!'", "Na propaganda, a função que predomina é a:", ["Conativa", "Emotiva", "Fática", "Metalinguística"], 0, "Verbo no imperativo e 'você': o foco é o receptor, que se quer convencer."),
  qe("Diário: 'Hoje acordei triste, com saudade de casa. Nada parece fazer sentido.'", "No diário, a função que predomina é a:", ["Emotiva", "Referencial", "Conativa", "Fática"], 0, "Primeira pessoa e sentimentos do emissor."),
  qe("Dicionário: 'Saudade (s.f.): sentimento de falta de algo ou alguém distante.'", "O verbete exemplifica a função:", ["Metalinguística", "Poética, pelo ritmo", "Conativa, pelo apelo", "Emotiva, pelo sentimento"], 0, "Usa a língua para explicar uma palavra da própria língua."),
  qe("No poema 'Catar feijão', João Cabral compara escrever a catar feijão: jogar fora as palavras ocas.", "Por falar do próprio ato de escrever, o poema tem também função:", ["Metalinguística", "Fática, de contato", "Referencial, informativa", "Conativa, de apelo"], 0, "Um texto pode ter várias funções; aqui a poética convive com a metalinguística."),
  q("Em 'Alô, alô, está me ouvindo?', a função é a:", ["Fática", "Poética", "Referencial", "Emotiva"], 0, "Checa se o canal de comunicação funciona."),
  m("Marque os pares função → foco corretos:", ["Emotiva: emissor", "Conativa: receptor", "Referencial: assunto", "Fática: código", "Poética: canal"], [0, 1, 2], "Fática foca o canal; poética, a mensagem; metalinguística, o código."),
  m("Marque marcas comuns da função conativa:", ["Verbos no imperativo", "Vocativos", "Pronome 'você'", "Linguagem impessoal", "Datas e números"], [0, 1, 2], "Impessoalidade e dados objetivos são da função referencial."),
], "n");

extend(PORTUGUES, "Figuras de linguagem", [
  q("Em 'O vento sussurrava segredos', há:", ["Personificação", "Hipérbole exagerada", "Metonímia de lugar", "Antítese de ideias"], 0, "Atribui ação humana (sussurrar) ao vento."),
  q("Em 'Tudo é silêncio, tudo é escuridão', a repetição de 'tudo' no início é uma:", ["Anáfora", "Ironia", "Elipse", "Catacrese"], 0, "Anáfora: repetição no início de versos ou frases."),
  q("'Asa da xícara' é exemplo de:", ["Catacrese", "Hipérbole", "Ironia", "Pleonasmo"], 0, "Uma metáfora que virou nome comum por falta de outro termo."),
  q("Em 'Bebeu dois copos', há metonímia porque:", ["O copo indica o conteúdo", "Há um grande exagero na frase", "Há uma comparação com 'como'", "Há uma oposição entre duas ideias"], 0, "Bebeu o líquido, não o vidro."),
  qe("Manchete: 'Cidade para com a chuva: trânsito parado por horas'.", "O efeito de humor e crítica vem de uma:", ["Ambiguidade", "Antítese entre ideias", "Gradação crescente", "Anáfora no início"], 0, "'Para' pode ser verbo (parar) e o leitor pode ler de mais de um jeito."),
  qe("Camões: 'Amor é fogo que arde sem se ver; / é ferida que dói, e não se sente'.", "O verso usa principalmente o:", ["Paradoxo", "Eufemismo", "Pleonasmo", "Polissíndeto"], 0, "Ideias que parecem impossíveis juntas: dói e não se sente."),
  qe("Bilac: 'Ouvir estrelas! Certo perdeste o senso!'.", "A frase 'ouvir estrelas' mistura sentidos e pode ser lida como:", ["Sinestesia", "Hipérbato", "Catacrese", "Eufemismo"], 0, "Ouvir (audição) algo que se vê (estrelas)."),
  qe("Bandeira: 'E vinha, e corria, e pulava, e gritava'.", "A repetição do conectivo 'e' é um:", ["Polissíndeto", "Assíndeto, sem conectivos", "Zeugma, com omissão", "Quiasmo, com inversão"], 0, "Muitas conjunções dão ritmo acelerado e sensação de acúmulo."),
  q("Em 'O menino, coitado, bateu as botas', a expressão destacada é:", ["Eufemismo", "Hipérbole", "Antítese", "Metáfora pura"], 0, "Suaviza a ideia de morrer."),
  m("Marque figuras de pensamento:", ["Ironia", "Antítese", "Hipérbole", "Elipse", "Assíndeto"], [0, 1, 2], "Elipse e assíndeto são figuras de construção (sintaxe)."),
  m("Marque os pares exemplo → figura corretos:", ["'Chorei rios': hipérbole", "'Li Machado': metonímia", "'Ela é uma flor': metáfora", "'Subir para cima': antítese", "'Que belo dia!' (na chuva): sinestesia"], [0, 1, 2], "'Subir para cima' é pleonasmo; o último é ironia."),
], "n");

extend(PORTUGUES, "Classes de palavras", [
  q("Em 'Ela correu rapidamente', 'rapidamente' é:", ["Advérbio", "Adjetivo", "Substantivo", "Verbo"], 0, "Indica o modo da ação."),
  q("Em 'Todos chegaram cedo', 'todos' é:", ["Pronome", "Advérbio", "Artigo", "Preposição"], 0, "Pronome indefinido, substitui o substantivo."),
  q("A palavra 'ai!' é uma:", ["Interjeição", "Conjunção aditiva", "Preposição simples", "Numeral cardinal"], 0, "Expressa emoção ou sensação."),
  q("Em 'Estudou, mas não passou', 'mas' é:", ["Conjunção", "Preposição", "Advérbio", "Pronome"], 0, "Conjunção coordenativa adversativa (oposição)."),
  q("Em 'Moro perto da escola', 'da' é a junção de:", ["Preposição e artigo", "Dois artigos definidos", "Pronome e verbo ligados", "Advérbio e artigo juntos"], 0, "de + a = da."),
  qe("Frase 1: 'O jantar estava ótimo.' Frase 2: 'Vamos jantar fora.'", "A palavra 'jantar' é, respectivamente:", ["Substantivo e verbo", "Verbo e substantivo", "Adjetivo e verbo", "Substantivo e adjetivo"], 0, "Na 1, vem com artigo (o jantar); na 2, indica ação."),
  qe("Anúncio: 'Este é o celular mais rápido do Brasil.'", "Em 'mais rápido do Brasil', o adjetivo está no grau:", ["Superlativo relativo", "Comparativo de igualdade", "Normal", "Diminutivo"], 0, "Destaca o celular em relação a todos os outros."),
  qe("Frase: 'Ele chegou cedo, e ela, tarde.'", "As palavras 'cedo' e 'tarde' indicam:", ["Tempo", "Lugar", "Modo", "Intensidade"], 0, "São advérbios de tempo."),
  q("'Primeiro', em 'o primeiro aluno', é um numeral:", ["Ordinal", "Cardinal", "Multiplicativo", "Fracionário"], 0, "Indica ordem; o cardinal indica quantidade (um, dois)."),
  m("Marque as classes variáveis:", ["Substantivo", "Adjetivo", "Verbo", "Preposição", "Conjunção"], [0, 1, 2], "Preposição e conjunção não flexionam."),
  m("Marque frases em que 'bem' é advérbio:", ["Ela canta bem.", "Dormi bem.", "Ele está bem.", "Ele é meu bem.", "Os bens da família."], [0, 1, 2], "'Meu bem' e 'os bens' são substantivos."),
], "n");

extend(PORTUGUES, "Quinhentismo e Barroco", [
  q("A Carta de Pero Vaz de Caminha é considerada:", ["Certidão de nascimento do Brasil", "Um poema barroco sobre a fé", "Um romance romântico indianista", "Um sermão jesuíta aos colonos"], 0, "Descreve a terra e os indígenas em 1500."),
  q("José de Anchieta escreveu peças e poemas com objetivo de:", ["Catequizar os indígenas", "Criticar a Igreja", "Exaltar a burguesia", "Defender a independência"], 0, "Literatura jesuítica, também em tupi."),
  q("O Barroco é marcado pelo conflito entre:", ["Fé e prazer", "Campo e cidade", "Ciência e tecnologia", "Índio e colono"], 0, "Herança da Contrarreforma: espírito × carne, céu × terra."),
  q("A poesia satírica de Gregório de Matos atacava:", ["A sociedade baiana", "Os poetas árcades", "Os escravizados", "Os índios tupis"], 0, "Criticava autoridades, clero e comerciantes de Salvador; por isso, o apelido 'Boca do Inferno'."),
  q("O Padre Antônio Vieira é o grande autor de:", ["Sermões", "Romances", "Novelas", "Contos"], 0, "Ex.: 'Sermão da Sexagésima' e 'Sermão de Santo Antônio aos Peixes'."),
  qe("Caminha: 'Andam nus, sem nenhuma cobertura… Parece-me gente de tal inocência que (…) logo seriam cristãos.'", "O trecho revela a visão de que os indígenas:", ["Poderiam ser convertidos", "Tinham religião igual à europeia", "Eram perigosos guerreiros", "Deviam ser imitados"], 0, "Olhar europeu e catequético, típico da literatura de informação."),
  qe("Gregório de Matos: 'Pequei, Senhor, mas não porque hei pecado, / Da vossa alta clemência me despido'.", "O tema central desse soneto é:", ["Culpa e perdão divino", "A beleza da natureza", "A crítica ao rei", "A vida no campo"], 0, "Poesia religiosa barroca: o pecador pede perdão a Deus."),
  qe("Vieira, no 'Sermão de Santo Antônio aos Peixes', faz críticas aos colonos usando os peixes como alegoria.", "O recurso usado é a:", ["Alegoria", "Onomatopeia", "Rima rica", "Métrica livre"], 0, "Os peixes 'grandes que comem os pequenos' representam os poderosos."),
  qe("No poema barroco, aparecem jogos de palavras como 'Nasce o Sol, e não dura mais que um dia'.", "A ideia central do trecho é a:", ["Brevidade da vida", "Alegria eterna", "Crítica política", "Vida no campo"], 0, "Fugacidade do tempo, tema comum no Barroco."),
  m("Marque características do Barroco:", ["Antíteses e paradoxos", "Cultismo (jogo de palavras)", "Conceptismo (jogo de ideias)", "Bucolismo", "Linguagem simples e objetiva"], [0, 1, 2], "Bucolismo é árcade; o Barroco é rebuscado."),
  m("Marque textos do Quinhentismo:", ["Carta de Caminha", "Poemas de Anchieta", "Tratados descritivos da terra", "Sermões de Vieira", "Sonetos de Gregório"], [0, 1, 2], "Vieira e Gregório são barrocos (séc. XVII)."),
], "n");

extend(PORTUGUES, "Sintaxe do período simples", [
  q("O sujeito de 'Choveu muito ontem' é:", ["Inexistente", "Oculto", "Indeterminado", "Simples"], 0, "Verbos de fenômenos da natureza não têm sujeito."),
  q("Em 'Vive-se bem aqui', o 'se' indica:", ["Sujeito indeterminado", "Voz passiva sintética", "Pronome reflexivo", "Conjunção condicional"], 0, "Verbo intransitivo + se = índice de indeterminação do sujeito."),
  q("Em 'Os alunos estão cansados', 'cansados' é:", ["Predicativo do sujeito", "Objeto direto do verbo", "Adjunto adverbial de modo", "Aposto explicativo"], 0, "Atribui característica ao sujeito por meio de verbo de ligação."),
  q("Em 'Gosto de música', 'de música' é:", ["Objeto indireto", "Objeto direto", "Adjunto adnominal", "Sujeito"], 0, "O verbo 'gostar' exige a preposição 'de'."),
  q("Em 'Ontem, no parque, corri bastante', 'no parque' é adjunto adverbial de:", ["Lugar", "Tempo", "Modo", "Intensidade"], 0, "Indica onde ocorreu a ação."),
  qe("Frase: 'Pedro, meu vizinho, é médico.'", "O termo 'meu vizinho' é:", ["Aposto", "Vocativo", "Sujeito", "Predicativo"], 0, "Explica quem é Pedro; vem entre vírgulas."),
  qe("Frase: 'Pedro, venha aqui!'", "O termo 'Pedro' é:", ["Vocativo", "Aposto", "Sujeito", "Objeto direto"], 0, "Chama o interlocutor; não faz parte da estrutura da oração."),
  qe("Frase: 'A cidade foi destruída pelo terremoto.'", "O termo 'pelo terremoto' é:", ["Agente da passiva", "Objeto indireto", "Adjunto adnominal", "Complemento nominal"], 0, "Na voz passiva, indica quem pratica a ação."),
  qe("Frase: 'Ele tem medo de altura.'", "'De altura' completa o sentido do substantivo 'medo'. É um:", ["Complemento nominal", "Objeto indireto", "Adjunto adverbial", "Agente da passiva"], 0, "Complementa um nome (medo), e não um verbo."),
  m("Marque frases com sujeito composto:", ["João e Maria saíram.", "Pais e filhos vieram.", "O cão e o gato brigam.", "Saímos cedo.", "Choveu à tarde."], [0, 1, 2], "'Saímos' tem sujeito oculto; 'choveu', inexistente."),
  m("Marque verbos de ligação:", ["Ser", "Estar", "Parecer", "Correr", "Comprar"], [0, 1, 2], "Correr e comprar são verbos de ação."),
], "n");

extend(PORTUGUES, "Arcadismo e Romantismo", [
  q("O lema árcade 'fugere urbem' significa:", ["Fugir da cidade", "Aproveitar o dia", "Amar a pátria", "Temer a morte"], 0, "Idealização da vida simples no campo."),
  q("'Marília de Dirceu' é obra de:", ["Tomás Antônio Gonzaga", "Cláudio Manuel da Costa", "Gonçalves Dias", "Castro Alves"], 0, "Poemas líricos árcades; Gonzaga participou da Inconfidência."),
  q("A primeira geração romântica no Brasil foi:", ["Indianista", "Ultrarromântica e pessimista", "Condoreira e social", "Parnasiana e formal"], 0, "Gonçalves Dias e José de Alencar exaltaram o índio e a natureza."),
  q("A segunda geração romântica é marcada por:", ["Pessimismo e morte", "Crítica social forte", "Objetividade científica", "Humor político e sátira"], 0, "Mal do século; Álvares de Azevedo é o principal nome."),
  q("O índio romântico era retratado como:", ["Herói idealizado", "Personagem realista", "Vilão cruel", "Figura cômica"], 0, "Corajoso e nobre, semelhante a um cavaleiro medieval."),
  qe("Gonçalves Dias: 'Minha terra tem palmeiras, / Onde canta o Sabiá; / As aves, que aqui gorjeiam, / Não gorjeiam como lá.'", "O poema expressa:", ["Saudade da pátria", "Crítica dura à escravidão", "Desprezo pelo Brasil", "Humor sobre a política"], 0, "'Canção do Exílio', escrita em Portugal: nacionalismo romântico."),
  qe("Castro Alves: 'Senhor Deus dos desgraçados! / Dizei-me vós, Senhor Deus, / Se é loucura… se é verdade / Tanto horror perante os céus?!'", "O trecho, de 'O Navio Negreiro', denuncia:", ["O tráfico de escravizados", "A vida no campo", "O amor não correspondido", "A guerra contra o Paraguai"], 0, "Poesia condoreira: social, grandiosa e abolicionista."),
  qe("Álvares de Azevedo: 'Se eu morresse amanhã, viria ao menos / Fechar meus olhos minha triste irmã'.", "O poema é típico da:", ["Segunda geração romântica", "Primeira geração romântica", "Terceira geração romântica", "Escola árcade"], 0, "Tema da morte e tom melancólico: ultrarromantismo."),
  qe("Na lira árcade, o poeta se apresenta como pastor e a amada como pastora, em um cenário campestre tranquilo.", "Esse recurso é chamado de:", ["Pastoralismo", "Indianismo", "Condoreirismo", "Cultismo"], 0, "Os poetas usavam pseudônimos pastoris, como Dirceu."),
  m("Marque características do Arcadismo:", ["Bucolismo", "Simplicidade", "Inspiração clássica", "Exagero sentimental", "Pessimismo e morte"], [0, 1, 2], "Sentimentalismo exagerado e morte são românticos."),
  m("Marque autores românticos:", ["Gonçalves Dias", "Álvares de Azevedo", "Castro Alves", "Machado de Assis (fase madura)", "Cláudio Manuel da Costa"], [0, 1, 2], "Machado maduro é realista; Cláudio Manuel, árcade."),
], "n");

extend(PORTUGUES, "Realismo e Naturalismo", [
  q("O marco inicial do Realismo no Brasil é:", ["Memórias Póstumas", "O Guarani, de Alencar", "Os Sertões, de Euclides", "Iracema, de Alencar"], 0, "Publicado por Machado de Assis em 1881."),
  q("O Naturalismo via o ser humano como produto:", ["Do meio e da herança", "Da vontade divina sobre todos", "Do puro acaso, sem causas", "Do livre-arbítrio total e absoluto"], 0, "Influência do determinismo e do cientificismo do século XIX."),
  q("'O Cortiço' foi escrito por:", ["Aluísio Azevedo", "Machado de Assis", "José de Alencar", "Raul Pompeia"], 0, "Romance naturalista de 1890."),
  q("Em 'Dom Casmurro', a grande dúvida é se Capitu:", ["Traiu Bentinho", "Era rica", "Ia viajar", "Gostava de Escobar como amigo"], 0, "O narrador é suspeito: a obra nunca confirma a traição."),
  q("O Realismo critica principalmente:", ["A burguesia", "A natureza tropical", "Os índios idealizados", "A Idade Média europeia"], 0, "Interesse, hipocrisia e casamento por conveniência."),
  qe("Brás Cubas: 'Ao verme que primeiro roeu as frias carnes do meu cadáver dedico como saudosa lembrança estas memórias póstumas.'", "A narração é feita por um:", ["Defunto autor", "Narrador onisciente neutro", "Narrador infantil", "Narrador coletivo"], 0, "Ironia machadiana: um morto conta a própria vida."),
  qe("Em 'O Cortiço', personagens são comparados a animais e o cortiço parece um organismo vivo que cresce.", "Essa técnica é a:", ["Zoomorfização", "Idealização romântica", "Linguagem poética árcade", "Metalinguagem"], 0, "Reforça a ideia naturalista de que o meio determina o comportamento."),
  qe("Machado de Assis interrompe a história para conversar com o leitor: 'Leitor, não te fies…'.", "Esse recurso aproxima o leitor e reforça a:", ["Ironia e a reflexão", "Linguagem científica", "Narração objetiva", "Descrição da natureza"], 0, "A digressão é marca do Machado maduro."),
  qe("Em 'O Ateneu', Raul Pompeia narra a vida num internato com críticas à educação da elite.", "A obra mistura:", ["Realismo e impressionismo", "Arcadismo e Barroco", "Romantismo e indianismo", "Modernismo e concretismo"], 0, "Descrições subjetivas e caricaturas de personagens."),
  m("Marque características do Realismo:", ["Objetividade", "Análise psicológica", "Crítica social", "Idealização do herói", "Indianismo"], [0, 1, 2], "Idealização e indianismo são românticos."),
  m("Marque obras de Machado de Assis:", ["Dom Casmurro", "Quincas Borba", "Memórias Póstumas de Brás Cubas", "O Cortiço", "Iracema"], [0, 1, 2], "'O Cortiço' é de Aluísio Azevedo; 'Iracema', de Alencar."),
], "n");

extend(PORTUGUES, "Concordância e regência", [
  q("Com 'fazer' indicando tempo, a forma correta é:", ["Faz dois anos que não o vejo.", "Fazem dois anos que não o vejo.", "Fazem dois anos que não lhe vejo.", "Faz dois anos que não lhe vejo."], 0, "'Fazer' indicando tempo é impessoal: fica no singular; 'ver' pede 'o'."),
  q("Com 'haver' no sentido de existir, a forma correta é:", ["Houve muitos problemas.", "Houveram muitos problemas.", "Haviam muitos problemas.", "Houveram vários problemas."], 0, "'Haver' no sentido de existir é impessoal: singular."),
  q("Com o verbo 'assistir' (ver), a forma correta é:", ["Assisti ao filme ontem.", "Assisti o filme ontem.", "Assisti no filme ontem.", "Assisti com o filme ontem."], 0, "'Assistir' (ver) é transitivo indireto e pede 'a'."),
  q("Com o verbo 'preferir', a forma correta é:", ["Prefiro café a chá.", "Prefiro mais café do que chá.", "Prefiro café do que chá.", "Prefiro mais café que chá."], 0, "Prefere-se algo a outra coisa, sem 'mais' e sem 'do que'."),
  q("Com o verbo 'obedecer', a forma correta é:", ["Obedeça às regras.", "Obedeça as regras.", "Obedeça das regras.", "Obedeça nas regras."], 0, "'Obedecer' pede a preposição 'a'."),
  qe("Placa numa loja: 'Vende-se casas'.", "Pela norma-padrão, a forma correta é:", ["Vendem-se casas", "Vende-se as casas", "Vendem casas-se", "Se vende casas"], 0, "Voz passiva sintética: 'casas' é sujeito, o verbo concorda (casas são vendidas)."),
  qe("Bilhete: 'Seguem anexo os documentos'.", "Pela norma-padrão, o adjetivo deve concordar:", ["Seguem anexos os documentos", "Segue anexo os documentos", "Seguem anexa os documentos", "Segue anexas os documentos"], 0, "'Anexo' é adjetivo e concorda com 'documentos'."),
  qe("Frase: 'A maioria dos alunos ___ ao passeio.'", "As duas formas aceitas pela gramática são:", ["foi / foram", "fomos / fostes", "vai / vão-se", "foram / fui"], 0, "Com coletivo partitivo + plural, o verbo pode concordar com o núcleo ou com o especificador."),
  qe("Bilhete: 'Ela mesmo resolveu o problema.'", "Na concordância de 'mesmo', a forma correta é:", ["Ela mesma resolveu", "Ela mesmos resolveu", "Ela mesmo resolveram", "Ela mesmas resolveu"], 0, "'Mesmo', com sentido de 'própria', concorda com o nome."),
  m("Marque as frases com regência correta:", ["Aspiro ao cargo de gerente.", "Chegamos a São Paulo.", "Esqueci-me do nome dele.", "Namoro com ela há anos.", "Fui no mercado."], [0, 1, 2], "Pela norma: 'namoro-a' e 'fui ao mercado'."),
  m("Marque as frases com concordância correta:", ["É proibido entrada.", "Meio-dia e meia.", "Bastantes alunos vieram.", "Haviam dez pessoas.", "Menas pessoas vieram."], [0, 1, 2], "'Havia dez pessoas'; 'menos' é invariável."),
], "n");

extend(PORTUGUES, "Período composto", [
  q("Em 'Estudei muito, logo fui aprovado', a oração 'logo fui aprovado' é:", ["Coordenada conclusiva", "Coordenada adversativa", "Subordinada causal", "Coordenada aditiva"], 0, "'Logo' introduz uma conclusão."),
  q("Em 'Fique quieto ou saia da sala', há uma coordenada:", ["Alternativa", "Explicativa", "Conclusiva", "Adversativa"], 0, "'Ou' indica alternância."),
  q("Em 'Corra, que o ônibus vai sair', a oração 'que o ônibus vai sair' é:", ["Explicativa", "Adversativa", "Alternativa", "Aditiva"], 0, "Justifica a ordem dada na primeira oração."),
  q("Período composto por coordenação tem orações:", ["Independentes entre si", "Uma dependente da outra", "Sem verbos", "Só com sujeito oculto"], 0, "Cada oração tem sentido sintático completo."),
  qe("Frase: 'Embora estivesse cansado, continuou estudando.'", "A relação de sentido é de:", ["Concessão", "Causa", "Finalidade", "Condição"], 0, "Apesar do cansaço (obstáculo), a ação acontece."),
  qe("Frase: 'Ele saiu cedo porque tinha prova.'", "A oração 'porque tinha prova' indica:", ["Causa", "Consequência", "Finalidade", "Tempo"], 0, "Explica o motivo da saída."),
  qe("Frase: 'Estudou tanto que passou em primeiro lugar.'", "A oração 'que passou em primeiro lugar' indica:", ["Consequência", "Causa do resultado", "Condição para passar", "Concessão ao esforço"], 0, "'Tanto… que' marca consequência."),
  qe("Frase: 'Se chover, o jogo será adiado.'", "A oração 'Se chover' expressa:", ["Condição", "Causa", "Concessão", "Tempo"], 0, "O adiamento depende da chuva."),
  q("Em 'O livro que comprei é ótimo', a oração 'que comprei' é:", ["Adjetiva", "Adverbial", "Substantiva", "Coordenada"], 0, "Caracteriza o substantivo 'livro'."),
  m("Marque as conjunções adversativas:", ["Mas", "Porém", "Contudo", "Portanto", "Pois (antes do verbo)"], [0, 1, 2], "Portanto é conclusiva; 'pois' antes do verbo é explicativa."),
  m("Marque frases com relação de finalidade:", ["Estudo para passar.", "Saí cedo a fim de chegar antes.", "Fale baixo para que ele durma.", "Saí porque chovia.", "Embora chova, vou."], [0, 1, 2], "'Porque chovia' é causa; 'embora' é concessão."),
], "n");

extend(PORTUGUES, "Pré-Modernismo e Modernismo", [
  q("'Os Sertões', de Euclides da Cunha, narra:", ["A Guerra de Canudos", "A Revolta da Vacina", "A Guerra do Paraguai", "A Inconfidência Mineira"], 0, "Dividido em 'A terra', 'O homem' e 'A luta'."),
  q("Lima Barreto criticou em sua obra:", ["O racismo e a República", "A natureza tropical", "Os índios românticos", "A Igreja medieval"], 0, "Ex.: 'Triste Fim de Policarpo Quaresma'."),
  q("Monteiro Lobato criou o personagem:", ["Jeca Tatu", "Macunaíma", "Peri", "Brás Cubas"], 0, "Símbolo do caipira abandonado pelo poder público."),
  q("A Semana de Arte Moderna buscou:", ["Romper com o academicismo", "Imitar o Parnasianismo francês", "Voltar às formas do Barroco", "Proibir o uso do verso livre"], 0, "Liberdade formal e uma arte com a cara do Brasil."),
  q("'Macunaíma' é de:", ["Mário de Andrade", "Oswald de Andrade", "Graciliano Ramos", "Jorge Amado"], 0, "O 'herói sem nenhum caráter' (1928)."),
  qe("Euclides da Cunha: 'O sertanejo é, antes de tudo, um forte.'", "A frase valoriza:", ["A força do sertanejo", "A riqueza do litoral baiano", "A vida nas grandes capitais", "O exército da República"], 0, "Apesar dos preconceitos da época, reconhece a força do sertanejo."),
  qe("Oswald de Andrade: 'Tupi, or not tupi, that is the question.'", "A frase, do 'Manifesto Antropófago', propõe:", ["Devorar o estrangeiro e recriar", "Copiar fielmente a arte europeia", "Rejeitar tudo o que for brasileiro", "Voltar às formas do Romantismo"], 0, "A antropofagia cultural digere o que vem de fora para criar algo brasileiro."),
  qe("Manuel Bandeira: 'Estou farto do lirismo comedido / Do lirismo bem comportado'.", "O poema 'Poética' defende:", ["Liberdade na poesia", "A métrica rígida", "O soneto clássico", "A rima obrigatória"], 0, "Crítica aos parnasianos e defesa do verso livre."),
  qe("Graciliano Ramos, em 'Vidas Secas', narra a vida de uma família de retirantes no sertão.", "O romance pertence à:", ["Geração de 30", "Primeira geração modernista", "Escola árcade", "Fase romântica"], 0, "Romance regionalista de denúncia social."),
  m("Marque autores do Pré-Modernismo:", ["Euclides da Cunha", "Lima Barreto", "Monteiro Lobato", "Castro Alves", "Gonçalves Dias"], [0, 1, 2], "Castro Alves e Gonçalves Dias são românticos."),
  m("Marque características do Modernismo de 1922:", ["Verso livre", "Linguagem coloquial", "Humor e ironia", "Métrica rígida", "Linguagem rebuscada"], [0, 1, 2], "Métrica rígida e rebuscamento são parnasianos."),
  o("Explique a proposta da Antropofagia de Oswald de Andrade.", "A Antropofagia propõe 'devorar' a cultura estrangeira, como os indígenas antropófagos faziam com o inimigo, para absorver suas qualidades. Em vez de copiar a Europa, o artista brasileiro deve digerir as influências de fora e misturá-las com elementos nacionais, criando uma arte original brasileira.", [
    ["Devorar a cultura estrangeira", "devor", "estrangeir", "europa"],
    ["Não copiar, mas absorver / digerir", "copiar", "absorv", "digeri", "assimil"],
    ["Criar arte original brasileira", "brasileir", "original", "nacional"],
  ]),
], "n");

extend(PORTUGUES, "Interpretação e gêneros textuais", [
  q("Inferir uma informação é:", ["Deduzi-la", "Copiá-la do texto palavra por palavra", "Ignorá-la por completo na leitura", "Inventá-la sem base nenhuma no texto"], 0, "A informação está implícita, mas se apoia em pistas do texto."),
  q("O tema de um texto é:", ["A ideia central", "O nome do autor", "O primeiro parágrafo", "A data de publicação"], 0, "Do que o texto trata, de forma geral."),
  q("Um texto injuntivo serve para:", ["Instruir o leitor", "Contar uma história", "Descrever uma paisagem", "Expor uma opinião"], 0, "Ex.: receitas, manuais e bulas."),
  q("A intertextualidade ocorre quando um texto:", ["Dialoga com outro", "Não tem autor", "Tem só imagens", "Repete o título"], 0, "Paródias, citações e alusões são exemplos."),
  qe("Tirinha: Mafalda olha o globo terrestre e diz: 'Que mundo doente!'. Depois coloca um termômetro nele.", "O humor vem de:", ["Tratar o mundo como paciente", "Um erro de ortografia na fala", "Uma crítica ao uso do termômetro", "Uma notícia de jornal sobre saúde"], 0, "Sentido literal (febre) e figurado (problemas do mundo)."),
  qe("Notícia: 'Chuva forte deixa 3 mil desalojados em Recife.' Comentário de leitor: 'Todo ano a mesma tragédia. Falta planejamento.'", "O comentário apresenta:", ["Uma opinião", "Um fato neutro", "Uma instrução", "Uma definição"], 0, "O leitor avalia; a notícia informa."),
  qe("Cartaz: 'Mosquito da dengue: não dê asas a ele. Elimine a água parada.'", "A expressão 'não dê asas a ele' joga com:", ["Dois sentidos", "Rima e métrica regular", "Linguagem técnica da biologia", "Números e dados estatísticos"], 0, "Mosquito tem asas; 'dar asas' também é 'deixar crescer'."),
  qe("Chico Buarque escreveu 'Cálice', que soa como 'Cale-se', durante a ditadura.", "O duplo sentido foi usado para:", ["Criticar a censura", "Falar de vinhos", "Elogiar o governo", "Ensinar gramática"], 0, "A ambiguidade driblava os censores."),
  q("A crônica costuma:", ["Tratar do cotidiano", "Usar linguagem técnica e fria", "Ser muito longa, com capítulos", "Ignorar fatos da atualidade"], 0, "Gênero curto, publicado em jornais e revistas."),
  m("Marque gêneros argumentativos:", ["Artigo de opinião", "Editorial", "Resenha crítica", "Receita", "Bula de remédio"], [0, 1, 2], "Receita e bula são injuntivos."),
  m("Marque marcas de um texto narrativo:", ["Personagens", "Tempo e espaço", "Enredo", "Lista de ingredientes", "Tese a defender"], [0, 1, 2], "Lista é de receita; tese é do texto argumentativo."),
], "n");

extend(PORTUGUES, "Redação dissertativo-argumentativa", [
  q("A introdução da redação deve apresentar:", ["O tema e a tese", "Só a conclusão", "Uma piada", "Uma lista de dados soltos"], 0, "O leitor precisa saber o assunto e o ponto de vista."),
  q("O desenvolvimento serve para:", ["Fundamentar a tese", "Repetir o tema", "Contar uma história", "Fazer perguntas"], 0, "Argumentos com repertório e análise."),
  q("Para construir um argumento de autoridade, o autor recorre a:", ["A fala de um especialista", "A opinião de um vizinho", "Uma pergunta retórica", "Um provérbio sem fonte"], 0, "Ex.: citar um pesquisador ou instituição reconhecida."),
  q("Na redação do ENEM, deve-se evitar:", ["Gírias e 1ª pessoa", "Conectivos entre parágrafos", "Dados de fontes confiáveis", "A proposta de intervenção"], 0, "Prefira linguagem formal e impessoal."),
  qe("Introdução: 'Segundo a Constituição, a educação é direito de todos. Na prática, porém, milhões de jovens estão fora da escola.'", "A estratégia usada na abertura é:", ["Contrastar lei e realidade", "Contar uma piada ao leitor", "Fazer uma longa enumeração", "Usar linguagem bem informal"], 0, "Apresentar uma garantia legal não cumprida é um recurso muito usado."),
  qe("Parágrafo: 'Além disso, a falta de investimento em transporte público agrava o problema.'", "O conectivo 'Além disso' indica:", ["Adição", "Oposição", "Conclusão", "Condição"], 0, "Soma um novo argumento ao anterior."),
  qe("Trecho: 'Portanto, é fundamental que o Ministério da Educação, por meio de campanhas, promova…'", "O trecho é típico da:", ["Conclusão", "Introdução", "Tese inicial", "Citação"], 0, "'Portanto' + agente + ação + meio: início da proposta de intervenção."),
  qe("Argumento: 'Todo jovem usa redes sociais o dia inteiro.'", "O problema desse argumento é:", ["A generalização", "A falta de vírgulas", "O uso de dados", "A coesão excessiva"], 0, "Generalizações enfraquecem o texto; prefira 'muitos' ou dados concretos."),
  q("A tese é:", ["O ponto de vista", "O título do texto escolhido", "A última frase da conclusão", "Um dado estatístico do IBGE"], 0, "Toda a redação se organiza para defendê-la."),
  m("Marque conectivos de conclusão:", ["Portanto", "Logo", "Dessa forma", "Contudo", "Embora"], [0, 1, 2], "Contudo é adversativo; embora, concessivo."),
  m("Marque bons tipos de repertório:", ["Dados de órgãos oficiais", "Leis e a Constituição", "Pensadores e obras", "Boatos de redes sociais", "Opinião sem fonte"], [0, 1, 2], "Boatos e opiniões sem fonte enfraquecem o texto."),
], "n");

extend(PORTUGUES, "Crase", [
  q("Qual frase tem crase correta?", ["Vou à escola.", "Vou à pé.", "Vou à Brasília.", "Vou à ele."], 0, "'Ir a' + 'a escola'; não há crase antes de palavra masculina, cidades sem artigo ou pronome pessoal."),
  q("Há crase em:", ["Às 8 horas", "À partir de hoje", "À uma pessoa qualquer", "À duas semanas"], 0, "Horas determinadas pedem crase; 'a partir de' nunca tem."),
  q("Com a expressão 'à moda de', a forma correta é:", ["Fiz um bolo à moda mineira.", "Fiz um bolo a moda mineira.", "Fiz um bolo à modas mineiras.", "Fiz um bolo à mineiro."], 0, "'À moda de' leva crase, mesmo quando 'moda' fica subentendida."),
  q("Não se usa crase antes de:", ["Verbos", "Horas", "Palavras femininas regidas por 'a'", "'Aquela' após 'a'"], 0, "Ex.: 'começou a chover'."),
  qe("Placa: 'Proibido entrada à pessoas estranhas.'", "A crase está errada porque:", ["Falta o artigo 'as'", "Falta uma vírgula na frase", "'Pessoas' é uma palavra masculina", "Deveria haver dois acentos graves"], 0, "Sem artigo 'as', usa-se só 'a pessoas' ou 'às pessoas' (com artigo plural)."),
  qe("Anúncio: 'Entregamos de segunda à sexta.'", "Pela norma, a forma mais adequada é:", ["De segunda a sexta", "De segunda à sexta-feira só", "Da segunda a sexta", "De segunda há sexta"], 0, "'De… a' sem artigo; com artigo seria 'da segunda à sexta'."),
  qe("Frase: 'Refiro-me ___ aquela proposta.'", "Com 'referir-se a', a forma correta é:", ["àquela", "a aquela", "há aquela", "aquéla"], 0, "Referir-se a + aquela = àquela."),
  qe("Frase: 'Ela voltou ___ casa dos pais.'", "Antes de 'casa dos pais', usa-se:", ["à", "a", "há", "ah"], 0, "'Casa' especificada (dos pais) aceita artigo: à casa dos pais."),
  q("Em 'Chegou à noite', a crase indica:", ["Locução adverbial", "Erro de grafia comum", "Verbo no pretérito", "Pronome demonstrativo"], 0, "Locuções como 'à noite', 'às vezes' e 'à tarde' levam crase."),
  m("Marque as frases em que a crase foi bem usada ou bem omitida:", ["Fui à Bahia.", "Fui a Roma.", "Saiu às pressas.", "Fui à Portugal.", "Andou à cavalo."], [0, 1, 2], "'A Portugal' e 'a cavalo' não têm crase."),
  m("Marque os casos em que a crase é proibida:", ["Antes de verbo", "Antes de palavra masculina", "Entre palavras repetidas (cara a cara)", "Antes de horas", "Em 'à moda de'"], [0, 1, 2], "Horas e 'à moda de' levam crase."),
], "n");

extend(PORTUGUES, "Pontuação", [
  q("Não se separa por vírgula:", ["Sujeito e verbo", "Itens de uma lista", "O vocativo", "O aposto"], 0, "Ex.: 'Os alunos, saíram' está errado."),
  q("Os dois-pontos podem anunciar:", ["Uma enumeração", "O fim do texto", "Uma pergunta", "Um erro"], 0, "Também introduzem citações e explicações."),
  q("O ponto e vírgula separa:", ["Orações extensas", "Sujeito e verbo da oração", "Letras de uma mesma palavra", "Números de um telefone"], 0, "Pausa maior que a vírgula e menor que o ponto."),
  q("As reticências podem indicar:", ["Hesitação", "Fim obrigatório do texto", "Ordem direta da frase", "Data e hora do fato"], 0, "Ex.: 'Eu… não sei o que dizer'."),
  qe("Frase A: 'Não, quero café.' Frase B: 'Não quero café.'", "A vírgula muda o sentido porque, em A, a pessoa:", ["Quer café", "Recusa café", "Não decidiu", "Quer chá"], 0, "Em A, 'não' responde algo antes; depois, ela diz que quer café."),
  qe("Frase: 'Vamos comer, crianças!' x 'Vamos comer crianças!'", "A vírgula indica que 'crianças' é:", ["Vocativo", "Objeto direto", "Sujeito", "Aposto"], 0, "Sem a vírgula, 'crianças' vira o que se come."),
  qe("Frase: 'Os alunos que estudaram passaram.' x 'Os alunos, que estudaram, passaram.'", "Com vírgulas, a frase indica que:", ["Todos estudaram", "Só alguns alunos estudaram", "Nenhum dos alunos passou", "Os alunos não estudaram nada"], 0, "Entre vírgulas, a oração adjetiva é explicativa: vale para todos."),
  qe("Frase: 'Ontem à noite, no estádio, o time venceu.'", "As vírgulas isolam:", ["Adjuntos adverbiais", "O sujeito da oração", "O verbo principal", "O objeto direto"], 0, "Advérbios no início costumam ser separados."),
  q("Na frase 'Maria, a professora, chegou', as vírgulas isolam um:", ["Aposto", "Vocativo", "Verbo", "Objeto"], 0, "'A professora' explica quem é Maria."),
  m("Marque usos corretos da vírgula:", ["Separar itens de uma lista", "Isolar o vocativo", "Isolar o aposto", "Separar verbo e objeto", "Separar sujeito e verbo"], [0, 1, 2], "Verbo e objeto, e sujeito e verbo, não se separam."),
  m("Marque frases com pontuação correta:", ["Pedro, venha cá.", "Comprei pão, leite e ovos.", "Ele saiu; ela ficou.", "O menino, chorou.", "Eu gosto, de chocolate."], [0, 1, 2], "As duas últimas separam termos que não se separam."),
], "n");

extend(PORTUGUES, "Orações subordinadas", [
  q("Em 'É importante que você estude', a oração 'que você estude' é substantiva:", ["Subjetiva", "Objetiva direta", "Predicativa", "Apositiva"], 0, "Funciona como sujeito de 'é importante'."),
  q("Em 'Espero que você venha', a oração 'que você venha' é substantiva:", ["Objetiva direta", "Subjetiva", "Completiva nominal", "Apositiva"], 0, "Completa o verbo 'esperar' (espero isso)."),
  q("Em 'Tenho certeza de que vou passar', a oração destacada é substantiva:", ["Completiva nominal", "Objetiva direta do verbo", "Subjetiva do predicado", "Predicativa do sujeito"], 0, "Completa o nome 'certeza'."),
  q("A oração adjetiva restritiva:", ["Não vem entre vírgulas", "Sempre vem entre vírgulas", "Não tem verbo", "Indica tempo"], 0, "Restringe o sentido: 'Os alunos que estudaram passaram' (só esses)."),
  qe("Frase: 'Quando o sinal tocou, todos saíram.'", "A oração 'Quando o sinal tocou' é adverbial:", ["Temporal", "Causal", "Final", "Condicional"], 0, "Indica o momento da ação."),
  qe("Frase: 'Ele falou como se fosse o dono da casa.'", "A oração 'como se fosse o dono da casa' é adverbial:", ["Comparativa", "Temporal, de momento", "Final, de objetivo", "Causal, de motivo"], 0, "Compara o modo de falar a uma situação hipotética."),
  qe("Frase: 'Conforme combinamos, a reunião será às 10h.'", "A oração 'Conforme combinamos' indica:", ["Conformidade", "Oposição de ideias", "Condição para agir", "Proporção entre ações"], 0, "Ação de acordo com o que foi combinado."),
  qe("Frase: 'À medida que estudava, mais aprendia.'", "Entre as duas orações, a relação é de:", ["Proporção", "Concessão", "Finalidade", "Causa"], 0, "Uma ação cresce junto com a outra."),
  q("Em 'Ao sair, feche a porta', a oração 'Ao sair' é:", ["Reduzida de infinitivo", "Desenvolvida com conjunção", "Coordenada", "Sem verbo"], 0, "Não tem conjunção e o verbo está no infinitivo (= quando sair)."),
  m("Marque conjunções concessivas:", ["Embora", "Ainda que", "Mesmo que", "Porque", "Portanto"], [0, 1, 2], "Porque é causal; portanto é conclusiva."),
  m("Marque orações adverbiais causais:", ["Como chovia, ficamos.", "Saí porque estava tarde.", "Visto que é tarde, vamos.", "Se chover, fico.", "Embora chova, vou."], [0, 1, 2], "'Se' é condicional; 'embora', concessivo."),
], "n");

extend(PORTUGUES, "Romantismo", [
  q("'Iracema' é anagrama de:", ["América", "Amor", "Marília", "Ceará"], 0, "O romance de Alencar simboliza o encontro entre índia e colonizador."),
  q("'O Guarani' tem como herói:", ["Peri", "Macunaíma", "Bentinho", "Policarpo"], 0, "Indígena idealizado que protege Ceci."),
  q("A prosa urbana romântica de Alencar inclui:", ["Senhora", "O Cortiço", "Vidas Secas", "Os Sertões"], 0, "Aurélia 'compra' um marido; crítica ao casamento por dinheiro."),
  q("'A Moreninha' é de:", ["Joaquim Manuel de Macedo", "Álvares de Azevedo, poeta", "Machado de Assis, realista", "Aluísio Azevedo, naturalista"], 0, "Romance de 1844, considerado o primeiro sucesso da prosa romântica no Brasil."),
  q("'Noite na Taverna' é marcada por:", ["Clima sombrio e mórbido", "Humor político leve", "Paisagens do sertão", "Linguagem científica"], 0, "Contos de Álvares de Azevedo, com crimes, paixões e mistério."),
  qe("Alencar: 'Além, muito além daquela serra, que ainda azula no horizonte, nasceu Iracema. Iracema, a virgem dos lábios de mel…'", "O trecho é marcado por:", ["Prosa poética", "Linguagem científica e fria", "Crítica social direta e dura", "Humor irônico sobre a corte"], 0, "Prosa poética e indianista."),
  qe("Castro Alves é chamado de 'Poeta dos Escravos'.", "Sua poesia pertence à geração:", ["Condoreira", "Indianista", "Ultrarromântica", "Árcade"], 0, "A terceira geração: social, abolicionista, de tom grandioso."),
  qe("Em 'Senhora', Aurélia fica rica e 'compra' Fernando Seixas, que antes a trocara por um dote maior.", "O romance critica:", ["O casamento por interesse", "A vida simples no campo", "A escravidão nas fazendas", "A Guerra do Paraguai"], 0, "Mesmo romântico, mostra o dinheiro nas relações."),
  qe("O romance regionalista romântico, como 'O Sertanejo' (Alencar) e 'Inocência' (Taunay), retrata o interior.", "Seu objetivo era:", ["Mostrar o Brasil diverso", "Criticar a Europa e seus costumes", "Imitar os poetas gregos antigos", "Defender a volta do Barroco"], 0, "Parte do projeto nacionalista de construir uma identidade brasileira."),
  m("Marque características do Romantismo:", ["Subjetividade", "Nacionalismo", "Idealização", "Objetividade científica", "Determinismo"], [0, 1, 2], "Objetividade e determinismo são realistas e naturalistas."),
  m("Marque obras de José de Alencar:", ["Iracema", "O Guarani", "Senhora", "Dom Casmurro", "O Ateneu"], [0, 1, 2], "'Dom Casmurro' é de Machado; 'O Ateneu', de Raul Pompeia."),
], "n");

extend(PORTUGUES, "Modernismo", [
  q("A segunda geração modernista (1930-1945) se destacou pelo:", ["Romance regionalista", "Soneto parnasiano rígido", "Teatro barroco religioso", "Indianismo romântico"], 0, "Graciliano, Rachel de Queiroz, Jorge Amado, José Lins do Rego."),
  q("'O Quinze', de Rachel de Queiroz, trata:", ["Da seca de 1915", "Da guerra de 1915", "Do carnaval carioca", "Da corte imperial"], 0, "Retirantes fogem da seca no Ceará."),
  q("Carlos Drummond de Andrade escreveu:", ["No meio do caminho tinha uma pedra", "Minha terra tem palmeiras onde canta", "Ora, direis, ouvir estrelas! Certo", "Se eu morresse amanhã, viria ao menos"], 0, "Poema de 1928 que escandalizou pela repetição."),
  q("Cecília Meireles é conhecida por uma poesia:", ["Intimista e espiritual", "Satírica e agressiva", "Científica e fria", "Épica e guerreira"], 0, "Musicalidade e reflexão sobre o tempo."),
  q("Clarice Lispector é marcada por:", ["Fluxo de consciência", "Romance indianista", "Poesia árcade pastoril", "Crônica policial urbana"], 0, "Narrativas introspectivas, como 'A Hora da Estrela'."),
  qe("Drummond: 'Mundo mundo vasto mundo, / se eu me chamasse Raimundo / seria uma rima, não seria uma solução.'", "O poema mostra:", ["Ironia e deslocamento", "Exaltação da pátria amada", "Linguagem barroca e rebuscada", "Idealização do índio brasileiro"], 0, "'Poema de sete faces': o eu lírico 'gauche' diante do mundo."),
  qe("Guimarães Rosa, em 'Grande Sertão: Veredas', cria palavras novas e recria a fala sertaneja.", "Esses termos criados são chamados de:", ["Neologismos", "Arcaísmos", "Estrangeirismos", "Pleonasmos"], 0, "Ex.: 'nonada'; a linguagem é reinventada."),
  qe("João Cabral, em 'Morte e Vida Severina', acompanha um retirante do sertão até o Recife.", "A obra denuncia:", ["A miséria do retirante", "A vida luxuosa da elite", "A guerra na Europa", "O luxo das grandes cidades"], 0, "Auto de Natal pernambucano com forte crítica social."),
  qe("Vinicius de Moraes: 'Que não seja imortal, posto que é chama / Mas que seja infinito enquanto dure.'", "Os versos tratam do:", ["Amor intenso e breve", "Amor à pátria e à bandeira", "Medo constante da morte", "Trabalho duro no campo"], 0, "'Soneto de Fidelidade': o Modernismo também usou formas clássicas."),
  m("Marque autores da Geração de 30 (romance):", ["Graciliano Ramos", "Rachel de Queiroz", "Jorge Amado", "Castro Alves", "Aluísio Azevedo"], [0, 1, 2], "Castro Alves é romântico; Aluísio, naturalista."),
  m("Marque autores da Geração de 45 ou posteriores:", ["Clarice Lispector", "Guimarães Rosa", "João Cabral de Melo Neto", "Gregório de Matos", "Gonçalves Dias"], [0, 1, 2], "Gregório é barroco; Gonçalves Dias, romântico."),
], "n");

extend(PORTUGUES, "Figuras de linguagem na prática", [
  q("Slogan 'Vem pra rua, vem!' usa repetição com efeito de:", ["Apelo", "Tristeza", "Neutralidade", "Descrição técnica"], 0, "Reforça o convite ao receptor."),
  q("Em 'O silêncio gritava na sala', há:", ["Paradoxo", "Hipérbato", "Pleonasmo", "Metonímia"], 0, "Silêncio que grita: ideias opostas juntas."),
  q("Em 'Ele é um banco de dados ambulante', há:", ["Metáfora", "Comparação", "Eufemismo", "Elipse"], 0, "Identifica a pessoa com um banco de dados, sem 'como'."),
  q("Em 'Ele é forte como um touro', há:", ["Comparação", "Metáfora sem conectivo", "Metonímia de autor", "Ironia de sentido oposto"], 0, "Usa conectivo comparativo ('como')."),
  qe("Meme: 'Acordei às 5h para estudar. Mentira, acordei ao meio-dia.'", "O humor vem de uma:", ["Quebra de expectativa", "Rima rica entre versos", "Linguagem técnica precisa", "Descrição objetiva do dia"], 0, "A segunda frase contradiz a primeira."),
  qe("Propaganda de pneu: 'Segura na chuva, firme no seco.'", "O slogan usa:", ["Antítese", "Hipérbole", "Catacrese", "Eufemismo"], 0, "Chuva × seco: opostos destacam a qualidade em qualquer situação."),
  qe("Manchete esportiva: 'Brasil atropela adversário e vence por 5 a 0.'", "O verbo 'atropela' é usado com sentido:", ["Figurado", "Literal", "Técnico", "Neutro"], 0, "Ninguém foi atropelado: a metáfora indica vitória fácil."),
  qe("Post: 'Que maravilha, mais uma segunda-feira de chuva e trânsito!'", "O efeito de sentido é de:", ["Ironia", "Elogio sincero", "Informação neutra", "Instrução"], 0, "Diz o contrário do que pensa."),
  q("A onomatopeia imita:", ["Sons", "Cores", "Cheiros", "Formas"], 0, "Ex.: 'tic-tac', 'au-au', 'vrum'."),
  m("Marque frases com hipérbole:", ["Já te disse mil vezes!", "Morri de rir.", "Estou morrendo de fome.", "Ele chegou cedo.", "Comprei pão."], [0, 1, 2], "As duas últimas são literais."),
  m("Marque frases com personificação:", ["O sol sorria para nós.", "A cidade dormia.", "O mar abraçava a areia.", "O carro é azul.", "Ela leu o livro."], [0, 1, 2], "As duas últimas não atribuem ações humanas a seres inanimados."),
], "n");

extend(PORTUGUES, "Gêneros textuais", [
  q("O editorial expressa a opinião:", ["Do próprio jornal", "De um leitor que escreveu", "Do entrevistado da matéria", "De um anunciante pago"], 0, "Não é assinado: representa o jornal ou a revista."),
  q("A resenha crítica:", ["Resume e avalia uma obra", "Só lista os personagens", "Narra uma história de ficção", "Dá instruções de uso do produto"], 0, "Combina descrição e opinião fundamentada."),
  q("O relatório costuma ter linguagem:", ["Objetiva e formal", "Poética e rimada", "Cheia de gírias", "Humorística"], 0, "Apresenta dados e resultados de uma atividade."),
  q("A fábula termina geralmente com:", ["Uma moral", "Uma receita", "Uma bibliografia", "Um gráfico"], 0, "Personagens animais e um ensinamento no fim."),
  qe("Texto: 'Ingredientes: 2 ovos, 1 xícara de farinha. Modo de preparo: bata os ovos…'", "O gênero é:", ["Receita", "Crônica", "Editorial", "Fábula"], 0, "Texto injuntivo, com verbos no imperativo."),
  qe("Texto curto publicado numa rede social com uma imagem e uma frase engraçada sobre a rotina escolar.", "Esse gênero digital é o:", ["Meme", "Ofício", "Requerimento", "Relatório"], 0, "Circula rápido e depende do contexto compartilhado."),
  qe("Texto: 'Venho por meio deste solicitar a revisão da minha nota…'", "O gênero é um:", ["Requerimento", "Poema lírico", "Conto de humor", "Anúncio publicitário"], 0, "Pedido formal a uma autoridade ou instituição."),
  qe("Texto: 'Eu vi o rapaz descer do ônibus às 18h' — declaração registrada numa delegacia.", "Esse texto é um:", ["Depoimento", "Editorial assinado", "Poema narrativo", "Verbete de dicionário"], 0, "Relato pessoal em situação oficial."),
  q("O verbete é típico de:", ["Dicionários", "Jornais esportivos diários", "Cartas pessoais entre amigos", "Romances de aventura"], 0, "Define ou explica um termo."),
  m("Marque gêneros jornalísticos:", ["Notícia", "Reportagem", "Entrevista", "Soneto", "Fábula"], [0, 1, 2], "Soneto é poema; fábula é narrativa ficcional."),
  m("Marque gêneros injuntivos:", ["Manual de instruções", "Receita", "Regulamento", "Crônica", "Conto"], [0, 1, 2], "Crônica e conto são narrativos."),
], "n");

extend(PORTUGUES, "Competências do ENEM", [
  q("A competência 1 da redação do ENEM avalia:", ["Domínio da norma-padrão", "A proposta de intervenção", "A coesão", "O repertório"], 0, "Ortografia, concordância, regência, pontuação."),
  q("A competência 3 avalia:", ["Os argumentos", "A gramática da norma-padrão", "Os conectivos entre parágrafos", "O título escolhido para o texto"], 0, "Projeto de texto e defesa de um ponto de vista."),
  q("A competência 4 trata da:", ["Coesão textual", "Ortografia", "Proposta de intervenção", "Fuga ao tema"], 0, "Uso de conectivos e retomadas entre frases e parágrafos."),
  q("A nota máxima da redação do ENEM é:", ["1.000", "100 pontos", "500 pontos", "10 pontos"], 0, "São 5 competências de até 200 pontos cada."),
  qe("Um candidato escreve um poema em vez de um texto dissertativo-argumentativo.", "A redação recebe:", ["Nota zero", "Nota máxima", "Metade da nota", "Nota só na competência 1"], 0, "Fuga ao tipo textual zera a redação."),
  qe("A redação traz parágrafos ligados por 'Além disso', 'No entanto' e 'Portanto', sem repetições excessivas.", "O uso desses conectivos favorece a competência:", ["4", "1", "2", "5"], 0, "Competência 4: mecanismos de coesão."),
  qe("O texto propõe: 'O governo deve fazer algo para resolver o problema.'", "A proposta é fraca porque:", ["Falta detalhar a ação", "Usa linguagem formal", "Está na conclusão", "Cita o governo como agente"], 0, "A competência 5 pede agente, ação, meio, finalidade e detalhamento."),
  qe("O candidato cita dados do IBGE e relaciona com o tema de forma produtiva.", "Esse uso de repertório favorece a competência:", ["2", "1", "4", "5"], 0, "Competência 2: compreender o tema e usar repertório legitimado."),
  q("Desrespeitar os direitos humanos na redação:", ["Zera a redação", "Não muda nada", "Dá pontos extras", "Só tira 20 pontos"], 0, "A regra atual zera a redação inteira."),
  m("Marque situações que zeram a redação:", ["Fuga total ao tema", "Texto com até 7 linhas", "Desrespeito aos direitos humanos", "Uso de conectivos", "Proposta detalhada"], [0, 1, 2], "Conectivos e proposta detalhada ajudam."),
  m("Marque elementos da proposta de intervenção completa:", ["Agente", "Ação", "Meio ou modo", "Rima", "Título obrigatório"], [0, 1, 2], "Também finalidade e detalhamento."),
], "n");

extend(PORTUGUES, "Repertório e proposta de intervenção", [
  q("Repertório produtivo é aquele que:", ["Se liga ao argumento", "Só enfeita o texto", "Vem sem explicação", "Fica no título"], 0, "Precisa ser relacionado ao tema e à tese."),
  q("Na proposta de intervenção, o 'agente' é:", ["Quem executa a ação", "O problema do tema proposto", "O leitor da redação", "O corretor do ENEM"], 0, "Ex.: Ministério da Educação, mídia, ONGs, escolas."),
  q("A 'finalidade' na proposta responde:", ["Para quê?", "Quem vai agir?", "Como será feito?", "Quando vai começar?"], 0, "Ex.: 'a fim de reduzir a evasão escolar'."),
  q("Um repertório 'de bolso' é:", ["Usado em vários temas", "Proibido no ENEM", "Uma lista de palavras", "Uma piada"], 0, "Ex.: a Constituição de 1988; só ganha pontos se bem relacionado."),
  qe("Proposta: 'O Ministério da Saúde deve criar campanhas nas redes sociais, com influenciadores, para conscientizar os jovens sobre saúde mental.'", "Nessa proposta, 'com influenciadores' é o:", ["Detalhamento", "Agente principal", "Problema do tema", "Repertório citado"], 0, "Explica melhor como a ação será feita."),
  qe("Repertório: 'Segundo Bauman, vivemos uma modernidade líquida, com relações frágeis.'", "Esse repertório funciona bem num tema sobre:", ["Relações nas redes", "Produção de soja no Cerrado", "Clima polar e geleiras", "Geometria espacial e sólidos"], 0, "Relações superficiais e passageiras."),
  qe("Repertório: 'O filme Que Horas Ela Volta? mostra a desigualdade no trabalho doméstico.'", "Ele serve para um tema sobre:", ["Desigualdade social", "Exploração espacial", "Vacinas", "Eleições nos EUA"], 0, "Uma obra cultural pode ser repertório legitimado."),
  qe("Proposta: 'É preciso que todos se conscientizem.'", "Essa frase é fraca porque:", ["É vaga", "É formal demais para o ENEM", "Tem um verbo no infinitivo", "Está escrita no presente"], 0, "'Todos' é vago e não diz como fazer."),
  q("A Constituição de 1988 é muito usada como repertório porque:", ["Garante direitos", "É curta e fácil", "Fala só de economia", "Foi escrita em 1824"], 0, "Ex.: art. 6º lista direitos sociais como saúde, educação e moradia."),
  m("Marque bons agentes para uma proposta:", ["Ministério da Educação", "Escolas", "Mídia", "Todo mundo", "Alguém"], [0, 1, 2], "'Todo mundo' e 'alguém' são vagos demais."),
  o("Escreva uma proposta de intervenção completa para o problema da evasão escolar.", "O Ministério da Educação, em parceria com as secretarias estaduais, deve ampliar o programa de bolsas para estudantes de baixa renda, por meio de auxílio financeiro mensal condicionado à frequência, a fim de reduzir a evasão escolar e garantir o direito à educação previsto na Constituição.", [
    ["Agente", "ministerio", "governo", "secretaria", "escola", "estado"],
    ["Ação e meio", "por meio", "mediante", "atraves", "ampliar", "criar"],
    ["Finalidade", "a fim de", "para que", "com o objetivo", "reduzir"],
  ]),
], "n");

// Complemento (mais prática por assunto).
extend(PORTUGUES, "Funções da linguagem", [
  qe("Notícia: 'O IBGE divulgou que a inflação de março foi de 0,4%.'", "Nesse trecho, predomina a função:", ["Referencial", "Emotiva, do autor", "Conativa, de apelo", "Poética, do ritmo"], 0, "Informação objetiva, centrada no assunto."),
  q("Em 'Vem pra Caixa você também!', o foco está no:", ["Receptor", "Emissor da mensagem", "Código da língua", "Canal da conversa"], 0, "Função conativa: convencer o interlocutor."),
  q("A função emotiva usa com frequência:", ["Primeira pessoa", "Terceira pessoa neutra", "Dados estatísticos", "Verbos no imperativo"], 0, "Exprime sentimentos de quem fala."),
  qe("Poema: 'Quadrilha', de Drummond: 'João amava Teresa que amava Raimundo / que amava Maria que amava Joaquim…'", "O jogo sonoro e a repetição destacam a função:", ["Poética", "Fática, de contato", "Referencial, informativa", "Conativa, de ordem"], 0, "A construção da mensagem chama a atenção."),
  q("'Câmbio, você me ouve?' no rádio é exemplo de função:", ["Fática", "Emotiva do falante", "Metalinguística do código", "Poética da mensagem"], 0, "Testa o canal."),
], "n");

extend(PORTUGUES, "Figuras de linguagem", [
  q("Em 'Ela saiu, ele ficou', a oposição de ideias é uma:", ["Antítese", "Hipérbole exagerada", "Catacrese comum", "Onomatopeia sonora"], 0, "Saiu × ficou."),
  q("Em 'Vi com meus próprios olhos', há:", ["Pleonasmo", "Metáfora visual", "Ironia sutil", "Metonímia de autor"], 0, "Repetição de ideia para reforçar."),
  qe("Música: 'Eu sei que vou te amar / Por toda a minha vida eu vou te amar'.", "A repetição de 'vou te amar' reforça:", ["A intensidade do sentimento", "Uma crítica política", "Um dado científico", "Uma ordem ao leitor"], 0, "Recurso expressivo de ênfase."),
  q("'O Brasil chorou a derrota' é exemplo de:", ["Metonímia", "Comparação com 'como'", "Pleonasmo vicioso", "Onomatopeia"], 0, "'Brasil' representa os brasileiros."),
  q("Em 'Morreu de rir', há:", ["Hipérbole", "Eufemismo suave", "Antítese de ideias", "Catacrese técnica"], 0, "Exagero expressivo."),
], "n");

extend(PORTUGUES, "Classes de palavras", [
  q("Em 'O bom aluno estuda', 'bom' é:", ["Adjetivo", "Advérbio de modo", "Substantivo comum", "Pronome possessivo"], 0, "Caracteriza o substantivo 'aluno'."),
  q("Em 'Ele estuda bem', 'bem' é:", ["Advérbio", "Adjetivo do sujeito", "Substantivo abstrato", "Verbo de ligação"], 0, "Modifica o verbo."),
  qe("Frase: 'O amanhã a Deus pertence.'", "A palavra 'amanhã' funciona como:", ["Substantivo", "Advérbio de tempo", "Adjetivo qualificativo", "Verbo no futuro"], 0, "Vem com artigo 'o': substantivação."),
  q("Em 'Comprei aquele livro', 'aquele' é pronome:", ["Demonstrativo", "Pessoal do caso reto", "Possessivo de terceira", "Relativo de lugar"], 0, "Indica posição em relação às pessoas do discurso."),
  q("'Sob', 'sobre', 'entre' e 'até' são:", ["Preposições", "Conjunções coordenativas", "Advérbios de lugar", "Interjeições de espanto"], 0, "Ligam termos estabelecendo relações."),
], "n");

extend(PORTUGUES, "Quinhentismo e Barroco", [
  q("O 'Tratado da Terra do Brasil' é um texto de:", ["Informação", "Poesia barroca", "Romance romântico", "Crônica moderna"], 0, "De Pero de Magalhães Gândavo, no século XVI."),
  q("O cultismo barroco valoriza:", ["Jogos de palavras", "Linguagem simples", "Fala coloquial", "Verso livre"], 0, "Também chamado de gongorismo."),
  q("O conceptismo barroco valoriza:", ["Jogos de ideias", "Rimas pobres", "Prosa jornalística", "Gírias urbanas"], 0, "Raciocínio engenhoso, típico de Vieira."),
  qe("Gregório de Matos satiriza: 'Que falta nesta cidade? Verdade. / Que mais por sua desonra? Honra.'", "A sátira critica:", ["A corrupção de Salvador", "A natureza tropical", "Os poetas árcades", "A vida no campo"], 0, "Falta de verdade, de honra e de vergonha na Bahia."),
  q("O Barroco no Brasil se desenvolveu sobretudo no século:", ["XVII", "XIX", "XX", "XV"], 0, "Na Bahia e, depois, em Minas Gerais."),
], "n");

extend(PORTUGUES, "Sintaxe do período simples", [
  q("Em 'Comprei flores para minha mãe', 'flores' é:", ["Objeto direto", "Objeto indireto", "Sujeito da oração", "Adjunto adverbial"], 0, "Completa o verbo sem preposição."),
  q("Em 'Os alunos chegaram cedo', o núcleo do sujeito é:", ["alunos", "os", "chegaram", "cedo"], 0, "Palavra principal do sujeito."),
  qe("Frase: 'Faltaram três professores hoje.'", "O sujeito da oração é:", ["três professores", "hoje", "inexistente", "oculto (eles)"], 0, "Sujeito posposto: três professores faltaram."),
  q("Em 'A casa de madeira caiu', 'de madeira' é:", ["Adjunto adnominal", "Complemento nominal", "Objeto indireto", "Agente da passiva"], 0, "Caracteriza o substantivo 'casa'."),
  q("Em 'Chegaram os convidados', o sujeito é:", ["Simples e posposto", "Oculto", "Indeterminado", "Inexistente"], 0, "Os convidados chegaram."),
], "n");

extend(PORTUGUES, "Arcadismo e Romantismo", [
  q("O 'carpe diem' árcade significa:", ["Aproveite o dia", "Fuja da cidade", "Ame a pátria", "Tema a morte"], 0, "Viver o presente, pois o tempo passa."),
  q("Cláudio Manuel da Costa é um poeta:", ["Árcade", "Barroco", "Romântico", "Modernista"], 0, "Também participou da Inconfidência Mineira."),
  qe("O poema 'O Uraguai', de Basílio da Gama, narra a guerra contra os indígenas das missões.", "A obra é um poema:", ["Épico", "Satírico curto", "Lírico amoroso", "Concreto visual"], 0, "Poema épico árcade de 1769."),
  q("O Romantismo surgiu no Brasil em:", ["1836", "1922", "1500", "1881"], 0, "Com 'Suspiros Poéticos e Saudades', de Gonçalves de Magalhães."),
  q("O ultrarromantismo é também chamado de:", ["Mal do século", "Antropofagia", "Condoreirismo", "Concretismo"], 0, "Tédio, morte e melancolia."),
], "n");

extend(PORTUGUES, "Realismo e Naturalismo", [
  q("'Quincas Borba' apresenta a filosofia do:", ["Humanitismo", "Positivismo de Comte", "Existencialismo", "Estoicismo grego"], 0, "'Ao vencedor, as batatas!'"),
  q("O Naturalismo dá ênfase a:", ["Instintos e meio social", "Idealização do amor", "Heróis indígenas", "Natureza bucólica"], 0, "Influência das ciências do século XIX."),
  qe("Em 'O Cortiço', João Romão enriquece explorando trabalhadores e a escravizada Bertoleza.", "A obra critica:", ["A ambição e a exploração", "O amor romântico puro", "A vida rural árcade", "A religião medieval"], 0, "Crítica ao capitalismo nascente."),
  q("'O Alienista', de Machado, ironiza:", ["A ciência e a loucura", "A vida no sertão", "Os índios heróis", "A guerra do Paraguai"], 0, "Simão Bacamarte interna quase toda a cidade."),
  q("O narrador de 'Dom Casmurro' é:", ["Bentinho", "Capitu", "Escobar", "José Dias"], 0, "Narrador em primeira pessoa, não confiável."),
], "n");

extend(PORTUGUES, "Concordância e regência", [
  q("Com 'implicar' (acarretar), a forma correta é:", ["A decisão implica mudanças.", "A decisão implica em mudanças.", "A decisão implica a mudanças.", "A decisão implicam mudanças."], 0, "Nesse sentido, 'implicar' é transitivo direto."),
  q("Com 'visar' (pretender), a forma correta é:", ["Ele visa ao sucesso.", "Ele visa o sucesso de.", "Ele visa no sucesso.", "Ele visam ao sucesso."], 0, "No sentido de pretender, pede 'a'."),
  qe("Bilhete: 'Segue em anexo as fotos.'", "A concordância correta é:", ["Seguem em anexo as fotos.", "Segue em anexas as fotos.", "Seguem em anexos as fotos.", "Segue anexo as fotos."], 0, "O sujeito 'as fotos' é plural; 'em anexo' é invariável."),
  q("Com 'existir', a forma correta é:", ["Existem muitas dúvidas.", "Existe muitas dúvidas.", "Existiu muitas dúvidas.", "Existe-se muitas dúvidas."], 0, "Diferente de 'haver', 'existir' concorda com o sujeito."),
  q("Com 'lembrar-se', a forma correta é:", ["Lembrei-me do aniversário.", "Lembrei-me o aniversário.", "Lembrei do-me aniversário.", "Lembrei-me no aniversário."], 0, "Pronominal: lembrar-se de algo."),
], "n");

extend(PORTUGUES, "Período composto", [
  q("Em 'Não fui à festa, pois estava doente', 'pois' é:", ["Explicativo", "Conclusivo", "Adversativo", "Aditivo"], 0, "Antes do verbo, 'pois' explica."),
  q("Em 'Ele é rico; deve, pois, ajudar', 'pois' é:", ["Conclusivo", "Explicativo", "Adversativo", "Alternativo"], 0, "Depois do verbo e entre vírgulas, conclui."),
  qe("Frase: 'Não só estudou, mas também trabalhou.'", "A relação entre as orações é de:", ["Adição", "Oposição", "Conclusão", "Alternância"], 0, "'Não só… mas também' soma ideias."),
  q("Em 'Quer chova, quer faça sol, iremos', há coordenação:", ["Alternativa", "Conclusiva", "Explicativa", "Adversativa"], 0, "'Quer… quer' indica alternância."),
  q("Oração principal é aquela que:", ["Tem outra dependente dela", "Não tem verbo", "Sempre vem por último", "Começa com 'que'"], 0, "As subordinadas completam o seu sentido."),
], "n");

extend(PORTUGUES, "Pré-Modernismo e Modernismo", [
  q("Augusto dos Anjos ficou conhecido pela poesia:", ["Científica e mórbida", "Bucólica e alegre", "Indianista e heroica", "Concreta e visual"], 0, "'Eu', de 1912, com vocabulário científico."),
  q("'Triste Fim de Policarpo Quaresma' é de:", ["Lima Barreto", "Monteiro Lobato", "Graciliano Ramos", "Euclides da Cunha"], 0, "Um patriota ingênuo esmagado pela República."),
  qe("Mário de Andrade: 'Macunaíma, o herói sem nenhum caráter'.", "A expressão 'sem nenhum caráter' sugere:", ["Identidade brasileira em formação", "Um vilão cruel", "Um herói europeu", "Um santo católico"], 0, "Mistura de culturas, sem traço único definido."),
  q("O 'Manifesto da Poesia Pau-Brasil' é de:", ["Oswald de Andrade", "Manuel Bandeira", "Cecília Meireles", "Jorge Amado"], 0, "1924: poesia de exportação, com a cara do Brasil."),
  q("Anita Malfatti e Tarsila do Amaral se destacaram na:", ["Pintura modernista", "Poesia árcade", "Música barroca", "Escultura grega"], 0, "Tarsila pintou 'Abaporu' (1928)."),
], "n");

extend(PORTUGUES, "Interpretação e gêneros textuais", [
  q("Uma informação explícita está:", ["Escrita no texto", "Só nas entrelinhas", "Fora do texto", "Na cabeça do leitor"], 0, "Implícita é a que se deduz."),
  q("Pressuposto é:", ["Algo que a frase dá como certo", "A conclusão do texto", "O título da obra", "Um erro de leitura"], 0, "'Parou de fumar' pressupõe que fumava."),
  qe("Charge: um político discursa 'Educação é prioridade!' diante de uma escola em ruínas.", "A charge usa:", ["Ironia", "Linguagem técnica", "Descrição neutra", "Instrução"], 0, "O contraste entre fala e realidade critica o político."),
  q("O subentendido depende:", ["Do contexto", "Só do dicionário", "Só da gramática", "Do número de linhas"], 0, "Ex.: 'Está frio aqui' pode ser um pedido para fechar a janela."),
  q("Paráfrase é:", ["Reescrever mantendo o sentido", "Copiar sem citar", "Inverter o sentido", "Fazer uma piada"], 0, "Diferente da paródia, que altera e critica."),
], "n");

extend(PORTUGUES, "Redação dissertativo-argumentativa", [
  q("Coerência é:", ["Lógica entre as ideias", "Número de parágrafos", "Uso de gírias", "Tamanho da letra"], 0, "O texto não pode se contradizer."),
  q("Um bom título na redação do ENEM é:", ["Opcional", "Obrigatório", "Proibido", "Vale 200 pontos"], 0, "Não é exigido; se usado, conta como linha."),
  qe("Parágrafo: 'O problema é grave. O problema afeta jovens. O problema precisa de solução.'", "O parágrafo falha por:", ["Repetição sem coesão", "Excesso de dados", "Linguagem formal", "Uso de conectivos"], 0, "Faltam retomadas (ele, essa questão) e conectivos."),
  q("Argumento por exemplificação usa:", ["Casos concretos", "Opiniões vagas", "Perguntas soltas", "Gírias"], 0, "Fatos que ilustram a tese."),
  q("A redação do ENEM deve ter entre:", ["7 e 30 linhas", "1 e 5 linhas", "50 e 100 linhas", "Qualquer número"], 0, "Até 7 linhas recebe nota zero."),
], "n");

extend(PORTUGUES, "Crase", [
  q("Há crase em 'Entregou o prêmio ___ vencedora'?", ["Sim: à", "Não: a", "Não: há", "Sim: há"], 0, "Entregar a + a vencedora."),
  q("Em 'Ficou frente ___ frente com ele', usa-se:", ["a", "à", "há", "ah"], 0, "Palavras repetidas não levam crase."),
  qe("Convite: 'A festa começa ___ 20h.'", "A forma correta é:", ["às", "as", "a", "há"], 0, "Horas determinadas pedem crase."),
  q("Antes de 'Vossa Excelência', a crase é:", ["Proibida", "Obrigatória", "Opcional", "Dupla"], 0, "Pronomes de tratamento não admitem artigo."),
  q("Em 'Foi à Itália', a crase ocorre porque:", ["Volta-se 'da' Itália", "Itália é masculino", "Vem antes de verbo", "É nome de cidade"], 0, "Macete: se 'volto da', crase há."),
], "n");

extend(PORTUGUES, "Pontuação", [
  q("O travessão pode indicar:", ["Fala de personagem", "Fim de parágrafo", "Número negativo", "Plural"], 0, "Também isola explicações, como as vírgulas."),
  q("As aspas podem marcar:", ["Citações", "Pausas longas", "Perguntas", "Exclamações"], 0, "Também ironia ou estrangeirismos."),
  qe("Frase: 'Se o homem soubesse o valor que tem a mulher andaria de quatro à sua procura.'", "Com vírgula após 'tem', o sentido passa a ser que:", ["A mulher anda de quatro", "O homem anda de quatro", "Ninguém procura", "A frase fica igual"], 0, "'…o valor que tem, a mulher andaria…': a vírgula muda o sujeito."),
  q("O ponto de exclamação expressa:", ["Emoção", "Dúvida", "Enumeração", "Citação"], 0, "Surpresa, alegria, raiva, ordem."),
  q("Em datas, separa-se o local por vírgula:", ["Recife, 10 de maio", "Recife 10, de maio", "Recife; 10 de maio", "Recife: 10, de maio"], 0, "Lugar, vírgula, data."),
], "n");

extend(PORTUGUES, "Orações subordinadas", [
  q("A oração adjetiva explicativa vem:", ["Entre vírgulas", "Sem vírgulas", "Depois de ponto", "Antes do sujeito"], 0, "Acrescenta informação sobre o termo."),
  q("Em 'Disse que viria', 'que viria' é substantiva:", ["Objetiva direta", "Subjetiva", "Apositiva", "Predicativa"], 0, "Disse isso."),
  qe("Frase: 'Saiu cedo para que não pegasse trânsito.'", "A oração destacada indica:", ["Finalidade", "Causa", "Consequência", "Condição"], 0, "'Para que' = objetivo."),
  q("Em 'Meu desejo é que você vença', a oração 'que você vença' é:", ["Predicativa", "Subjetiva", "Objetiva", "Apositiva"], 0, "Vem depois do verbo de ligação 'é'."),
  q("A conjunção 'caso' introduz oração:", ["Condicional", "Causal", "Concessiva", "Final"], 0, "Caso chova = se chover."),
], "n");

extend(PORTUGUES, "Romantismo", [
  q("'Lucíola' é um romance urbano de:", ["José de Alencar", "Machado de Assis", "Aluísio Azevedo", "Castro Alves"], 0, "Perfil de mulher, crítica à sociedade carioca."),
  q("O 'mal do século' está ligado a:", ["Tédio e melancolia", "Euforia e festa", "Ciência e razão", "Humor e sátira"], 0, "Influência de Byron e Musset."),
  qe("Gonçalves Dias, em 'I-Juca-Pirama', narra a honra de um guerreiro tupi aprisionado.", "O poema exalta:", ["O índio heroico", "O colono português", "A cidade moderna", "O escravizado"], 0, "Indianismo da primeira geração."),
  q("'Inocência' é romance regionalista de:", ["Visconde de Taunay", "Graciliano Ramos", "Euclides da Cunha", "Jorge Amado"], 0, "Ambientado no sertão de Mato Grosso."),
  q("O Romantismo valoriza a:", ["Emoção", "Objetividade", "Ciência", "Impessoalidade"], 0, "Subjetividade do eu."),
], "n");

extend(PORTUGUES, "Modernismo", [
  q("'A Hora da Estrela' tem como protagonista:", ["Macabéa", "Capitu", "Iracema", "Fabiano"], 0, "Retirante nordestina no Rio, por Clarice Lispector."),
  q("Fabiano e sinha Vitória são personagens de:", ["Vidas Secas", "O Quinze", "Macunaíma", "Grande Sertão"], 0, "Graciliano Ramos, 1938."),
  qe("Drummond: 'Tenho apenas duas mãos / e o sentimento do mundo'.", "O verso expressa:", ["Engajamento com o mundo", "Fuga da realidade", "Amor pela natureza", "Crítica religiosa"], 0, "Fase social de Drummond, nos anos 1940."),
  q("O Concretismo valoriza:", ["O aspecto visual", "A rima obrigatória", "O soneto rígido", "A narrativa longa"], 0, "Haroldo e Augusto de Campos, Décio Pignatari."),
  q("'Capitães da Areia' é de:", ["Jorge Amado", "Rachel de Queiroz", "Mário de Andrade", "Lima Barreto"], 0, "Meninos de rua em Salvador."),
], "n");

extend(PORTUGUES, "Figuras de linguagem na prática", [
  qe("Outdoor: 'Nosso sorvete: o frio que aquece o coração.'", "O slogan do sorvete usa:", ["Paradoxo", "Pleonasmo", "Catacrese", "Onomatopeia"], 0, "Frio que aquece: ideias opostas."),
  q("Em 'Plim-plim! Chegou mensagem', há:", ["Onomatopeia", "Hipérbole", "Antítese", "Elipse"], 0, "Imita o som da notificação."),
  q("Em 'Na sala, apenas quatro cadeiras', há:", ["Elipse", "Hipérbole", "Ironia", "Metáfora"], 0, "Omissão do verbo 'havia'."),
  qe("Tirinha: 'Meu chefe é um doce… de jiló.'", "O humor vem da:", ["Quebra de expectativa irônica", "Linguagem técnica", "Rima perfeita", "Descrição neutra"], 0, "Começa como elogio e vira crítica."),
  q("Em 'Ela tem um coração de pedra', há:", ["Metáfora", "Comparação", "Pleonasmo", "Onomatopeia"], 0, "Coração 'duro', insensível."),
], "n");

extend(PORTUGUES, "Gêneros textuais", [
  q("A carta do leitor serve para:", ["Opinar sobre uma publicação", "Ensinar uma receita", "Vender um produto", "Narrar uma fábula"], 0, "Enviada a jornais e revistas."),
  q("O artigo de opinião é:", ["Assinado", "Sempre anônimo", "Só com dados", "Só narrativo"], 0, "Traz o ponto de vista do autor."),
  qe("Texto: 'Era uma vez um reino distante, onde vivia uma princesa…'", "Pela abertura, o gênero é:", ["Conto de fadas", "Editorial", "Bula", "Relatório"], 0, "Abertura típica e elementos maravilhosos."),
  q("O cordel é um gênero:", ["Poético popular", "Científico", "Jurídico", "Publicitário"], 0, "Folhetos com xilogravuras, típicos do Nordeste."),
  q("A ata registra:", ["O que ocorreu numa reunião", "Uma receita de bolo", "Uma piada", "Um poema"], 0, "Texto formal e cronológico."),
], "n");

extend(PORTUGUES, "Competências do ENEM", [
  q("A competência 2 avalia a:", ["Compreensão do tema", "Ortografia", "Coesão", "Proposta"], 0, "E o uso de repertório e do tipo textual."),
  q("A competência 5 avalia a:", ["Proposta de intervenção", "Gramática", "Coesão", "Introdução"], 0, "Respeitando os direitos humanos."),
  qe("Uma redação usa 'a gente vai ver' e 'tipo assim' em vários trechos.", "Ela perde pontos principalmente na competência:", ["1", "3", "4", "5"], 0, "Registro informal fere a norma-padrão."),
  q("Cópia dos textos motivadores:", ["Não conta como texto do aluno", "Vale ponto extra", "É obrigatória", "Melhora a nota"], 0, "Linhas copiadas são desconsideradas."),
  q("Cada competência vale até:", ["200 pontos", "100 pontos", "500 pontos", "50 pontos"], 0, "5 × 200 = 1.000."),
], "n");

extend(PORTUGUES, "Repertório e proposta de intervenção", [
  q("Um repertório legitimado é aquele:", ["De fonte confiável", "Inventado pelo autor", "Sem fonte nenhuma", "De boato online"], 0, "Livros, leis, dados oficiais, pensadores."),
  q("O 'meio' na proposta responde:", ["Como?", "Quem?", "Para quê?", "Onde fica?"], 0, "Ex.: 'por meio de campanhas'."),
  qe("Repertório: 'O artigo 196 da Constituição diz que a saúde é direito de todos e dever do Estado.'", "Esse repertório serve bem para um tema sobre:", ["Acesso à saúde", "Exploração espacial", "Moda", "Futebol"], 0, "Lei ligada diretamente ao tema."),
  q("Detalhar a proposta significa:", ["Explicar melhor um elemento", "Repetir o tema", "Mudar de assunto", "Fazer uma pergunta"], 0, "Ex.: explicar como as campanhas serão feitas."),
  q("Citar um filme pode ser repertório se:", ["For bem relacionado ao tema", "For muito famoso", "For estrangeiro", "For recente"], 0, "O que importa é a relação produtiva."),
], "n");
