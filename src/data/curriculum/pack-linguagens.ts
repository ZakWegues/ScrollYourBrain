import { FILOSOFIA as FI, INGLES as E, PORTUGUES as P, SOCIOLOGIA as SO } from "./linguagens";
import { c, f, pack, q } from "./pack";

// ── Português ────────────────────────────────────────────────────────────────
pack(P, "gramatica", 1, 3, "Crase", [
  q("Qual frase está correta?", ["Vou à escola.", "Vou à pé.", "Refiro-me à você.", "Comecei à estudar."], 0, "\"Ir a\" + \"a escola\" = à. Não há crase antes de palavra masculina, pronome de tratamento como \"você\" ou verbo."),
  q("\"Entreguei o livro ___ professora.\"", ["a", "à", "há", "á"], 1, "Entregar a + a professora = à."),
  q("Antes de nomes de cidade, use crase quando:", ["Sempre, em qualquer nome de lugar", "Nunca, pois cidade não aceita artigo", "Ela aceita artigo: \"vou à Bahia\"", "Só quando o nome está no plural"], 2, "Macete: \"vou a, volto da, crase há; vou a, volto de, crase pra quê?\"."),
  q("\"Ficamos frente ___ frente.\"", ["à", "a", "há", "as"], 1, "Palavras repetidas não têm crase: frente a frente, cara a cara."),
  q("\"O evento será ___ 19h.\"", ["as", "às", "a", "há"], 1, "Horas determinadas levam crase: às 19h."),
  q("Em qual caso a crase é facultativa?", ["Antes de verbo no infinitivo", "Antes de possessivo feminino", "Antes de palavra masculina no singular", "Antes do pronome de tratamento \"você\""], 1, "Também antes de nomes femininos de pessoas."),
  f("Macete da crase", "Troque a palavra feminina por uma masculina: se virar \"ao\", tem crase. \"Fui à praia\" → \"fui ao parque\"."),
  f("Quando nunca há crase", "Antes de palavra masculina, verbo, pronomes pessoais/de tratamento (exceto senhora, senhorita) e em palavras repetidas."),
  c(["Crase = a (preposição) + a (artigo).", "Precisa de alguém que exija \"a\".", "E de uma palavra feminina que aceite \"a\".", "Teste trocando por masculino."], "Se vira \"ao\", leva acento grave."),
]);

pack(P, "gramatica", 2, 4, "Pontuação", [
  q("Qual frase está corretamente pontuada?", ["Os alunos, fizeram a prova.", "Os alunos fizeram a prova.", "Os alunos fizeram, a prova.", "Os, alunos fizeram a prova."], 1, "Não se separa sujeito de verbo com vírgula."),
  q("Em \"João, venha aqui\", a vírgula separa:", ["Sujeito", "Vocativo", "Aposto", "Objeto direto"], 1, "Vocativo: chamamento."),
  q("Em \"Machado de Assis, autor de Dom Casmurro, nasceu no Rio\", o trecho entre vírgulas é:", ["Vocativo", "Aposto explicativo", "Sujeito composto", "Predicativo do sujeito"], 1, "Explica quem é Machado."),
  q("\"Estudei muito, ___ fui aprovado.\" A vírgula antes de conjunção conclusiva é:", ["Proibida pela norma-padrão em qualquer caso", "Adequada: \"…, portanto fui aprovado\"", "Obrigatória só se a frase for curta", "Usada apenas em perguntas diretas"], 1, "Orações coordenadas com conjunção adversativa ou conclusiva costumam levar vírgula."),
  q("Adjunto adverbial deslocado para o início da frase:", ["Nunca deve levar vírgula, em nenhum caso", "Costuma vir separado por vírgula", "Exige sempre ponto e vírgula depois", "Deve ser seguido de dois-pontos"], 1, "Se for curto, a vírgula é opcional."),
  q("O ponto e vírgula serve, entre outros usos, para:", ["Terminar perguntas diretas e indiretas", "Separar itens longos de uma enumeração", "Indicar a fala de um personagem no diálogo", "Substituir o ponto final em qualquer texto"], 1, "Pausa maior que a vírgula."),
  f("Vírgula que muda sentido", "\"Não, espere.\" x \"Não espere.\" — a vírgula muda completamente a mensagem."),
  f("Dois-pontos", "Introduzem explicação, enumeração, citação ou fala."),
  c(["Nunca separe sujeito e verbo.", "Nunca separe verbo e complemento.", "Separe vocativo, aposto e expressões deslocadas.", "Leia em voz alta, mas confie nas regras."], "Vírgula não é respiração: é sintaxe."),
]);

pack(P, "gramatica", 3, 1, "Orações subordinadas", [
  q("Em \"Espero que você venha\", a oração destacada \"que você venha\" é:", ["Adjetiva restritiva", "Substantiva objetiva direta", "Adverbial causal", "Coordenada sindética aditiva"], 1, "Funciona como objeto de \"espero\" (espero isso)."),
  q("Em \"O livro que li é ótimo\", \"que li\" é uma oração:", ["Adjetiva restritiva", "Substantiva subjetiva", "Adverbial final", "Coordenada explicativa"], 0, "Caracteriza o substantivo \"livro\", como um adjetivo."),
  q("\"Embora estivesse cansado, terminou o trabalho\" expressa ideia de:", ["Causa", "Concessão", "Condição", "Finalidade"], 1, "Embora = apesar de (concessiva)."),
  q("\"Se chover, não iremos\" expressa:", ["Condição", "Tempo", "Consequência", "Comparação"], 0, "Se = condicional."),
  q("Diferença entre adjetiva restritiva e explicativa:", ["Não há diferença de sentido nem de pontuação entre elas", "A explicativa vem entre vírgulas; a restritiva, não", "A restritiva sempre começa com \"porque\"", "A explicativa é sempre uma oração substantiva"], 1, "\"Os alunos, que estudaram, passaram\" (todos) x \"Os alunos que estudaram passaram\" (só alguns)."),
  q("\"Estudou tanto que passou\" expressa:", ["Causa", "Consequência", "Proporção", "Conformidade"], 1, "Tanto… que = consecutiva."),
  f("Conjunções concessivas", "Embora, ainda que, mesmo que, apesar de que, conquanto."),
  f("Conjunções causais", "Porque, já que, visto que, uma vez que, como (no início)."),
  c(["Período composto: mais de uma oração.", "Coordenadas: independentes.", "Subordinadas: dependem da principal.", "Classifique pela função: substantivo, adjetivo ou advérbio."], "No ENEM, a ideia da conjunção vale mais que o nome dela."),
]);

pack(P, "literatura", 2, 2, "Romantismo", [
  q("A primeira geração romântica brasileira valorizou:", ["O índio como herói nacional", "O mal do século", "A crítica social abolicionista", "O cientificismo"], 0, "Indianismo e nacionalismo (Gonçalves Dias, José de Alencar)."),
  q("Castro Alves, o \"poeta dos escravos\", pertence à geração:", ["Indianista", "Ultrarromântica", "Condoreira", "Parnasiana"], 2, "\"O Navio Negreiro\" denuncia a escravidão."),
  q("Álvares de Azevedo é o principal nome do:", ["Ultrarromantismo", "Modernismo", "Arcadismo", "Realismo"], 0, "Morte, tédio, amor idealizado e pessimismo."),
  q("\"Iracema\" e \"O Guarani\" são de:", ["Machado de Assis", "José de Alencar", "Aluísio Azevedo", "Graciliano Ramos"], 1, "Romances indianistas."),
  q("Característica geral do Romantismo:", ["Objetividade e confiança na ciência", "Subjetividade e idealização", "Linguagem coloquial e fragmentada", "Bucolismo racional e equilíbrio clássico"], 1, "O \"eu\" no centro."),
  q("\"Minha terra tem palmeiras, / Onde canta o Sabiá\" é de:", ["Castro Alves", "Gonçalves Dias", "Álvares de Azevedo", "Olavo Bilac"], 1, "\"Canção do Exílio\", nacionalismo saudosista."),
  f("Três gerações da poesia romântica", "1ª: indianista/nacionalista; 2ª: ultrarromântica (mal do século); 3ª: condoreira (social, abolicionista)."),
  f("Prosa romântica", "Romances indianistas, urbanos (\"Senhora\", \"A Moreninha\") e regionalistas."),
  c(["Contexto: Independência (1822).", "Necessidade de criar identidade nacional.", "Índio idealizado como herói.", "Emoção acima da razão."], "Romantismo idealiza; Realismo critica."),
]);

pack(P, "literatura", 3, 2, "Modernismo", [
  q("A Semana de Arte Moderna aconteceu em:", ["1888", "1922", "1945", "1964"], 1, "São Paulo, no centenário da Independência."),
  q("O Manifesto Antropófago (Oswald de Andrade) propõe:", ["Copiar a cultura europeia sem mudanças", "\"Devorar\" o estrangeiro e fazê-lo brasileiro", "Voltar aos ideais e temas do Romantismo", "Rejeitar qualquer influência cultural de fora"], 1, "\"Tupi or not tupi, that is the question.\""),
  q("\"Macunaíma\", o \"herói sem nenhum caráter\", é de:", ["Mário de Andrade", "Oswald de Andrade", "Carlos Drummond", "Manuel Bandeira"], 0, "Rapsódia de 1928."),
  q("A segunda fase modernista (1930–1945) destacou o:", ["Romance regionalista de crítica social", "Retorno ao soneto parnasiano", "Indianismo idealizado", "Simbolismo místico"], 0, "Graciliano Ramos (\"Vidas Secas\"), Rachel de Queiroz, Jorge Amado."),
  q("\"No meio do caminho tinha uma pedra\" é de:", ["Manuel Bandeira", "Carlos Drummond de Andrade", "Cecília Meireles", "Vinicius de Moraes"], 1, "Poema-escândalo de 1928."),
  q("Guimarães Rosa e Clarice Lispector são da geração de:", ["1922", "1930", "1945", "1888"], 2, "Terceira fase: experimentação de linguagem e introspecção."),
  f("Características do Modernismo de 1922", "Verso livre, linguagem coloquial, humor, ruptura com o academicismo e valorização do Brasil real."),
  f("Vidas Secas", "Graciliano Ramos, 1938: a família de Fabiano foge da seca; linguagem seca como a paisagem."),
  c(["1ª fase (1922): ruptura e irreverência.", "2ª fase (1930): romance social e poesia madura.", "3ª fase (1945): linguagem inventiva.", "Busca de uma arte brasileira."], "Modernismo quebrou as regras para falar \"brasileiro\"."),
]);

pack(P, "interpretacao", 1, 2, "Figuras de linguagem na prática", [
  q("\"Já te disse um milhão de vezes!\" é:", ["Eufemismo", "Hipérbole", "Ironia", "Metonímia"], 1, "Exagero intencional."),
  q("\"Ele partiu desta para melhor\" é:", ["Hipérbole", "Eufemismo", "Antítese", "Pleonasmo"], 1, "Suaviza a ideia de morte."),
  q("\"Li Machado de Assis nas férias\" é:", ["Metáfora", "Metonímia", "Comparação", "Prosopopeia"], 1, "Substitui a obra pelo autor."),
  q("\"O vento sussurrava segredos\" é:", ["Prosopopeia", "Hipérbole", "Eufemismo", "Catacrese"], 0, "Atribui ação humana a algo não humano."),
  q("\"Que belo dia para ficar preso no trânsito!\" é:", ["Ironia", "Metáfora", "Antítese", "Gradação"], 0, "Diz o contrário do que pensa."),
  q("\"É fogo que arde sem se ver\" (Camões) traz:", ["Metáfora e paradoxo", "Metonímia e hipérbole", "Onomatopeia e aliteração", "Eufemismo e ironia"], 0, "Amor como fogo (metáfora) que arde sem ser visto (paradoxo)."),
  f("Metáfora x comparação", "Comparação usa conectivo (\"forte como um touro\"); metáfora não (\"ele é um touro\")."),
  f("Antítese x paradoxo", "Antítese: ideias opostas lado a lado (\"riso e choro\"). Paradoxo: ideias opostas que parecem impossíveis juntas (\"dor que desatina sem doer\")."),
  c(["Figuras dão expressividade.", "Publicidade adora metáfora e hipérbole.", "Charges vivem de ironia.", "No ENEM, pergunte: que efeito ela causa?"], "Identificar é bom; explicar o efeito é o que pontua."),
]);

pack(P, "interpretacao", 3, 3, "Gêneros textuais", [
  q("Um texto com título, lide e informação objetiva sobre fato recente é:", ["Crônica", "Notícia", "Editorial", "Conto"], 1, "Lide responde: o quê, quem, quando, onde, como, por quê."),
  q("O editorial de um jornal expressa:", ["A opinião de um leitor", "A opinião do próprio veículo", "Apenas fatos, sem opinião", "A propaganda de um anunciante"], 1, "Texto argumentativo sem assinatura individual."),
  q("Gênero que combina imagem e texto, com humor e crítica, geralmente sobre fato atual:", ["Charge", "Bula", "Receita", "Ata"], 0, "Charge é temporal; cartum é atemporal."),
  q("A crônica se caracteriza por:", ["Linguagem técnica e impessoal", "Tema do cotidiano e tom leve", "Ser escrita sempre em versos", "Trazer instruções passo a passo"], 1, "Rubem Braga, Fernando Sabino, Luis Fernando Verissimo."),
  q("Texto injuntivo (instrucional) é o que:", ["Conta uma história com personagens", "Orienta o leitor a fazer algo", "Descreve um lugar em detalhes", "Defende uma tese com argumentos"], 1, "Verbos no imperativo."),
  q("Variação linguística: \"nós vai\" em vez de \"nós vamos\" deve ser vista como:", ["Erro que impede a comunicação", "Variante adequada ou não à situação", "Influência direta do inglês", "Gíria proibida na escrita escolar"], 1, "Não existe \"certo/errado\" absoluto, mas adequação ao contexto."),
  f("Tipos textuais", "Narrativo, descritivo, dissertativo, expositivo e injuntivo. Gêneros são as formas concretas (notícia, receita, crônica…)."),
  f("Intertextualidade", "Diálogo de um texto com outro: paródia (critica/humor), paráfrase (reafirma), citação, alusão."),
  c(["Pergunte: quem fala?", "Para quem?", "Com que objetivo?", "Em que suporte?"], "Gênero se reconhece pela função social."),
]);

pack(P, "redacao", 3, 4, "Competências do ENEM", [
  q("Quantas competências avaliam a redação do ENEM?", ["3", "4", "5", "10"], 2, "Cada uma vale até 200 pontos."),
  q("A competência 5 avalia:", ["Ortografia e acentuação", "A proposta de intervenção", "O título e a organização", "A caligrafia e a letra"], 1, "Ela deve respeitar os direitos humanos."),
  q("Fugir totalmente do tema resulta em:", ["Nota 500", "Nota zero", "Perda de 40 pontos", "Nada"], 1, "Também zera: texto com até 7 linhas, cópia dos textos motivadores ou texto que não seja dissertativo-argumentativo."),
  q("A competência 4 avalia:", ["Domínio da norma culta", "Coesão e conectivos", "Repertório sociocultural", "Proposta de intervenção"], 1, "Uso de conectivos e mecanismos de referência."),
  q("O tipo de texto exigido no ENEM é:", ["Narrativo", "Dissertativo-argumentativo", "Poema em versos livres", "Carta pessoal"], 1, "Defender um ponto de vista com argumentos."),
  q("Título na redação do ENEM é:", ["Obrigatório", "Opcional", "Proibido", "Vale 200 pontos"], 1, "Não é exigido: a correção avalia o texto dissertativo-argumentativo."),
  f("As 5 competências", "1) Norma culta; 2) Compreender o tema e o gênero, com repertório; 3) Organizar argumentos; 4) Coesão; 5) Proposta de intervenção."),
  f("Estrutura básica", "Introdução (tese) → 2 desenvolvimentos (argumentos) → conclusão (proposta de intervenção)."),
  c(["Leia a proposta duas vezes.", "Defina a tese em uma frase.", "Escolha 2 argumentos com repertório.", "Feche com intervenção completa."], "Tema recortado: fale exatamente do que foi pedido."),
]);

pack(P, "redacao", 3, 4, "Repertório e proposta de intervenção", [
  q("Repertório sociocultural produtivo é aquele que:", ["Aparece só para enfeitar o texto", "É legitimado e ligado ao tema", "Cita apenas filmes e séries famosos", "Não precisa de fonte nem de contexto"], 1, "Precisa ser pertinente e bem usado."),
  q("Os 5 elementos de uma proposta de intervenção completa são:", ["Introdução, tese, argumento, conclusão e título", "Agente, ação, meio, finalidade e detalhamento", "Sujeito, verbo, objeto, adjunto e vocativo", "Quem, onde, quando, preço e prazo"], 1, "Quem faz, o que faz, como faz, para quê e um detalhe."),
  q("Qual é um bom agente para uma proposta sobre educação?", ["\"Alguém\"", "O Ministério da Educação", "\"Todos nós, cidadãos\"", "\"A vida e o tempo\""], 1, "Agente específico e capaz de agir."),
  q("Citar a Constituição de 1988 em um tema de direitos é:", ["Proibido pela banca do ENEM", "Um repertório legitimado", "Fuga total ao tema proposto", "Plágio de texto oficial"], 1, "Mas precisa ser articulado ao argumento."),
  q("A proposta de intervenção deve:", ["Desrespeitar direitos se necessário", "Respeitar os direitos humanos", "Ser vaga", "Aparecer só na introdução"], 1, "Critério obrigatório."),
  q("Um argumento de autoridade usa:", ["Uma opinião pessoal do autor", "A fala de um especialista", "Uma piada para prender o leitor", "Um exemplo inventado e genérico"], 1, "Ex.: dados do IBGE, fala de um filósofo."),
  f("Repertórios coringas", "Constituição de 1988, Zygmunt Bauman (modernidade líquida), dados do IBGE/OMS, Paulo Freire (educação)."),
  f("Modelo de proposta", "\"O Ministério X (agente) deve promover Y (ação), por meio de Z (meio), a fim de W (finalidade). Esse Y deve… (detalhamento).\""),
  c(["Repertório: traga conhecimento de fora.", "Ligue ao argumento, não só cite.", "Proposta: agente + ação + meio + finalidade + detalhe.", "Respeite os direitos humanos."], "Proposta completa vale 200 na competência 5."),
]);

// ── Inglês ───────────────────────────────────────────────────────────────────
pack(E, "grammar", 1, 3, "Irregular verbs", [
  q("Past tense of \"go\":", ["goed", "went", "gone", "going"], 1, "go – went – gone."),
  q("Past tense of \"buy\":", ["buyed", "bought", "brought", "buied"], 1, "buy – bought – bought. (\"brought\" is from \"bring\")."),
  q("\"She has ___ the book.\" (read)", ["readed", "read", "red", "reading"], 1, "read – read – read (pronúncia muda: /red/)."),
  q("Past participle of \"write\":", ["wrote", "written", "writed", "writing"], 1, "write – wrote – written."),
  q("\"I ___ a great movie yesterday.\"", ["see", "saw", "seen", "seeing"], 1, "Simple past: saw."),
  q("Past tense of \"think\":", ["thinked", "thought", "taught", "thank"], 1, "think – thought – thought. (\"taught\" is from \"teach\")."),
  f("Verbos irregulares mais comuns", "be (was/were – been), have (had), do (did – done), make (made), take (took – taken), get (got)."),
  f("Regular x irregular", "Regular: + -ed (worked). Irregular: forma própria (went, saw, ate)."),
  c(["Simple past: ações terminadas.", "Regulares ganham -ed.", "Irregulares: decore os mais usados.", "Pergunta e negação usam did + verbo base."], "\"Did you went?\" ✗ → \"Did you go?\" ✓"),
]);

pack(E, "grammar", 2, 2, "Linking words", [
  q("\"I studied hard; ___, I failed the test.\"", ["therefore", "however", "because", "so"], 1, "However = porém (contraste)."),
  q("\"It was raining, ___ we stayed home.\"", ["but", "so", "although", "unless"], 1, "So = então (consequência)."),
  q("\"___ he was tired, he kept working.\"", ["Because", "Although", "So", "Therefore"], 1, "Although = embora."),
  q("\"Moreover\" significa:", ["Porém", "Além disso", "Portanto", "A menos que"], 1, "Adiciona informação."),
  q("\"You won't pass ___ you study.\"", ["unless", "because", "so", "and"], 0, "Unless = a menos que."),
  q("\"Thus\" expressa ideia de:", ["Contraste", "Conclusão", "Tempo", "Adição"], 1, "Thus = assim, portanto."),
  f("Contraste", "but, however, although, though, nevertheless, despite/in spite of."),
  f("Causa e consequência", "because, since, due to (causa); so, therefore, thus, as a result (consequência)."),
  c(["Linking words ligam ideias.", "No ENEM, elas mostram a lógica do texto.", "However = mas; therefore = portanto.", "Ache o conectivo antes de ler tudo."], "Entendeu o conectivo, entendeu o argumento."),
]);

pack(E, "reading", 1, 4, "False friends", [
  q("\"Actually\" significa:", ["Atualmente", "Na verdade", "Ativamente", "Exatamente"], 1, "Atualmente = nowadays/currently."),
  q("\"Pretend\" significa:", ["Pretender", "Fingir", "Prender", "Prever"], 1, "Pretender = intend."),
  q("\"Push\" significa:", ["Puxar", "Empurrar", "Pular", "Pagar"], 1, "Puxar = pull."),
  q("\"Library\" significa:", ["Livraria", "Biblioteca", "Liberdade", "Libra"], 1, "Livraria = bookstore."),
  q("\"College\" significa:", ["Colégio", "Faculdade", "Colega", "Coleção"], 1, "Colégio = school."),
  q("\"Exquisite\" significa:", ["Esquisito", "Requintado", "Estranho", "Exagerado"], 1, "Esquisito = weird/strange."),
  f("Mais false friends", "Parents = pais; relatives = parentes; lunch = almoço; lanche = snack; tax = imposto; taxa = rate/fee."),
  f("Cognatos verdadeiros", "Palavras parecidas com mesmo sentido: important, education, problem, possible — ajudam muito na leitura."),
  c(["Cognatos ajudam a ler rápido.", "False friends enganam.", "Confirme pelo contexto.", "Na dúvida, releia a frase inteira."], "\"Pretend\" não é \"pretender\": é fingir!"),
]);

pack(E, "reading", 3, 4, "Reading for ENEM", [
  q("Ao ler um texto em inglês no ENEM, a melhor primeira atitude é:", ["Traduzir o texto palavra por palavra", "Ler a pergunta e ver título e fonte", "Pular a questão e voltar no fim da prova", "Ler só o último parágrafo do texto"], 1, "Contexto primeiro: gênero, fonte e objetivo."),
  q("Skimming é:", ["Ler procurando uma informação específica", "Ler rápido para pegar a ideia geral", "Traduzir todo o texto antes de responder", "Ler em voz alta para fixar a pronúncia"], 1, "Visão geral rápida."),
  q("Scanning é:", ["Buscar uma informação específica", "Ler devagar, frase por frase", "Resumir o texto em poucas linhas", "Decorar as palavras novas do texto"], 0, "Varredura direcionada."),
  q("Em textos de campanha (\"Don't text and drive\"), o objetivo costuma ser:", ["Entreter", "Conscientizar", "Narrar", "Descrever"], 1, "Imperativo + apelo."),
  q("Palavras como \"however\" e \"but\" sinalizam:", ["Adição", "Contraste", "Exemplo", "Conclusão"], 1, "Preste atenção no que vem depois delas."),
  q("Um cartum em inglês geralmente faz:", ["Uma receita passo a passo", "Crítica ou humor", "Uma lista técnica de dados", "Um contrato com cláusulas"], 1, "Leia imagem + texto juntos."),
  f("Estratégia de prova", "1) Leia o enunciado; 2) identifique o gênero; 3) skimming; 4) scanning na parte que responde."),
  f("Palavras-chave em perguntas", "Main idea = ideia principal; purpose = objetivo; according to = de acordo com."),
  c(["Você não precisa entender todas as palavras.", "Cognatos carregam o sentido.", "Gênero e fonte dão o contexto.", "A resposta está no texto, não na sua opinião."], "ENEM cobra compreensão, não gramática decorada."),
]);

// ── Filosofia e Sociologia ───────────────────────────────────────────────────
pack(FI, "filosofia", 2, 3, "Filosofia política", [
  q("Para Maquiavel, o governante deve:", ["Ser sempre bondoso, mesmo que perca o poder", "Agir conforme a necessidade para manter o poder", "Obedecer às ordens do papa e da Igreja", "Abolir o Estado e governar pelo exemplo"], 1, "Separou política de moral religiosa."),
  q("Para Hobbes, sem o Estado os homens viveriam:", ["Em paz perfeita e harmonia", "Em guerra de todos contra todos", "Num paraíso de abundância", "Numa democracia direta"], 1, "\"O homem é o lobo do homem.\""),
  q("Locke defende que o Estado deve proteger:", ["Somente os privilégios do rei", "Vida, liberdade e propriedade", "Os dogmas e bens da Igreja", "O poder do exército sobre o povo"], 1, "Base do liberalismo."),
  q("Rousseau afirmava que:", ["O homem nasce bom e a sociedade o corrompe", "O homem nasce mau e precisa ser domado", "O rei recebe o poder direto de Deus", "Não existe vontade geral, só interesses"], 0, "Defendia a soberania popular (vontade geral)."),
  q("Montesquieu propôs:", ["O absolutismo", "A separação dos três poderes", "O fim das leis", "A monarquia divina"], 1, "\"O Espírito das Leis\"."),
  q("Para Aristóteles, o ser humano é um:", ["Animal político", "Ser isolado", "Lobo", "Escravo por natureza sempre"], 0, "Realiza-se na vida em comunidade (pólis)."),
  f("Contratualismo", "Teoria de que o Estado nasce de um acordo (contrato social) entre os indivíduos: Hobbes, Locke, Rousseau."),
  f("Estado de natureza", "Condição hipotética dos humanos antes do Estado; cada contratualista o imagina de um jeito."),
  c(["Hobbes: medo → Estado forte.", "Locke: direitos → Estado limitado.", "Rousseau: vontade geral → soberania popular.", "Montesquieu: poderes separados."], "Cada um imagina o \"antes\" para justificar o \"depois\"."),
]);

pack(SO, "sociologia", 2, 4, "Indústria cultural e mídia", [
  q("O conceito de indústria cultural foi criado por:", ["Durkheim", "Adorno e Horkheimer", "Auguste Comte", "Max Weber"], 1, "Crítica à cultura produzida como mercadoria."),
  q("Para a Escola de Frankfurt, a indústria cultural tende a:", ["Estimular o pensamento crítico", "Padronizar gostos e o consumo", "Acabar com o capitalismo industrial", "Valorizar a arte popular tradicional"], 1, "Cultura como produto em série."),
  q("Bolhas de filtro nas redes sociais são:", ["Erros técnicos que derrubam sites", "Feeds que confirmam nossas opiniões", "Propagandas pagas por empresas", "Vírus que roubam dados pessoais"], 1, "Reduzem o contato com visões diferentes."),
  q("Fake news se espalham rápido principalmente porque:", ["São textos longos e bem explicados", "Apelam à emoção e a crenças prévias", "São sempre verdadeiras e checadas", "Vêm de fontes oficiais do governo"], 1, "Viés de confirmação."),
  q("Para Bauman, vivemos uma \"modernidade líquida\", marcada por:", ["Relações sólidas e duradouras", "Relações frágeis e instáveis", "O fim da tecnologia digital", "Uma volta à ordem feudal"], 1, "Tudo muda rápido; vínculos ficam fluidos."),
  q("Cultura de massa é aquela:", ["Feita por uma pequena comunidade", "Produzida em larga escala", "Restrita a museus e teatros", "Criada sem nenhuma tecnologia"], 1, "Ligada aos meios de comunicação de massa."),
  f("Etnocentrismo", "Julgar outras culturas a partir dos valores da sua, como se fosse superior."),
  f("Relativismo cultural", "Compreender cada cultura a partir de seus próprios valores e contexto."),
  c(["Mídia forma opiniões.", "Algoritmos escolhem o que você vê.", "Checar a fonte é atitude cidadã.", "Consumir cultura com olhar crítico."], "Antes de compartilhar: quem publicou, quando e com que interesse?"),
]);
