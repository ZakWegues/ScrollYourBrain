import { FILOSOFIA as FI, INGLES as E, PORTUGUES as P, SOCIOLOGIA as SO } from "./linguagens";
import { c, f, pack, q } from "./pack";

// ── Português ────────────────────────────────────────────────────────────────
pack(P, "gramatica", 1, 3, "Crase", [
  q("Em qual frase a crase está correta?", ["Vou à escola.", "Vou à pé.", "Refiro-me à você.", "Comecei à estudar."], 0, "\"Ir a\" + \"a escola\" = à. Não há crase antes de palavra masculina (\"a pé\"), de pronome como \"você\" ou de verbo (\"começar a estudar\")."),
  q("\"Entreguei o livro ___ professora.\"", ["a", "à", "há", "á"], 1, "Quem entrega, entrega algo A alguém; \"professora\" aceita artigo (a professora). A + a = à. Troque por masculino: \"ao professor\" confirma a crase."),
  q("Antes de nomes de cidade, use crase quando:", ["Sempre, em qualquer nome de lugar", "Nunca, pois cidade não aceita artigo", "Ela aceita artigo: \"vou à Bahia\"", "Só quando o nome está no plural"], 2, "Teste: \"vou a, volto da, crase há; vou a, volto de, crase pra quê?\". Volto DA Bahia → \"vou à Bahia\". Volto DE Recife → \"vou a Recife\"."),
  q("\"Ficamos frente ___ frente.\"", ["à", "a", "há", "as"], 1, "Entre palavras repetidas não há crase, porque não há artigo: frente a frente, cara a cara, gota a gota."),
  q("\"O evento será ___ 19h.\"", ["as", "às", "a", "há"], 1, "Horas determinadas levam crase: \"às 19h\" (a + as horas). Troque por \"ao meio-dia\" para confirmar: há artigo."),
  q("Em qual caso a crase é facultativa?", ["Antes de verbo no infinitivo", "Antes de possessivo feminino", "Antes de palavra masculina no singular", "Antes do pronome de tratamento \"você\""], 1, "Antes de pronome possessivo feminino (\"a/à minha casa\") e de nomes femininos de pessoas (\"a/à Maria\"), o artigo é opcional, então a crase também."),
  f("Macete da crase", "Troque a palavra feminina por uma masculina: se virar \"ao\", tem crase. \"Fui à praia\" → \"fui ao parque\"."),
  f("Quando nunca há crase", "Antes de palavra masculina, verbo, pronomes pessoais/de tratamento (exceto senhora, senhorita) e em palavras repetidas."),
  c(["Crase = a (preposição) + a (artigo).", "Precisa de alguém que exija \"a\".", "E de uma palavra feminina que aceite \"a\".", "Teste trocando por masculino."], "Se vira \"ao\", leva acento grave."),
]);

pack(P, "gramatica", 2, 4, "Pontuação", [
  q("Qual frase está corretamente pontuada?", ["Os alunos, fizeram a prova.", "Os alunos fizeram a prova.", "Os alunos fizeram, a prova.", "Os, alunos fizeram a prova."], 1, "Não se separa o sujeito (\"Os alunos\") do verbo (\"fizeram\") nem o verbo do complemento com vírgula. A frase em ordem direta dispensa vírgulas."),
  q("Em \"João, venha aqui\", a vírgula separa:", ["Sujeito", "Vocativo", "Aposto", "Objeto direto"], 1, "\"João\" é vocativo, o chamamento de alguém, e sempre vem isolado por vírgula. Não é sujeito: o sujeito de \"venha\" é \"você\"."),
  q("Em \"Machado de Assis, autor de Dom Casmurro, nasceu no Rio\", o trecho entre vírgulas é:", ["Vocativo", "Aposto explicativo", "Sujeito composto", "Predicativo do sujeito"], 1, "Aposto explicativo: explica quem é Machado de Assis e vem entre vírgulas. Se for retirado, a frase continua completa."),
  q("\"Estudei muito, ___ fui aprovado.\" A vírgula antes de conjunção conclusiva é:", ["Proibida pela norma-padrão em qualquer caso", "Adequada: \"…, portanto fui aprovado\"", "Obrigatória só se a frase for curta", "Usada apenas em perguntas diretas"], 1, "Orações coordenadas com conjunção conclusiva (portanto, logo) ou adversativa (mas, porém) costumam ser separadas por vírgula."),
  q("Adjunto adverbial deslocado para o início da frase:", ["Nunca deve levar vírgula, em nenhum caso", "Costuma vir separado por vírgula", "Exige sempre ponto e vírgula depois", "Deve ser seguido de dois-pontos"], 1, "Adjunto adverbial no início (\"Ontem à noite, saímos\") costuma vir com vírgula. Se for curto (\"Hoje saímos\"), a vírgula é opcional."),
  q("O ponto e vírgula serve, entre outros usos, para:", ["Terminar perguntas diretas e indiretas", "Separar itens longos de uma enumeração", "Indicar a fala de um personagem no diálogo", "Substituir o ponto final em qualquer texto"], 1, "O ponto e vírgula marca pausa maior que a vírgula: separa itens longos de enumerações e orações que já têm vírgulas internas."),
  f("Vírgula que muda sentido", "\"Não, espere.\" x \"Não espere.\" — a vírgula muda completamente a mensagem."),
  f("Dois-pontos", "Introduzem explicação, enumeração, citação ou fala."),
  c(["Nunca separe sujeito e verbo.", "Nunca separe verbo e complemento.", "Separe vocativo, aposto e expressões deslocadas.", "Leia em voz alta, mas confie nas regras."], "Vírgula não é respiração: é sintaxe."),
]);

pack(P, "gramatica", 3, 1, "Orações subordinadas", [
  q("Em \"É importante que você estude\", a oração \"que você estude\" é:", ["Substantiva objetiva direta", "Substantiva subjetiva", "Adjetiva restritiva", "Adverbial final"], 1, "\"O que é importante?\" → \"que você estude\": a oração funciona como sujeito de \"é importante\". Troque por \"isso\": \"Isso é importante\"."),
  q("Em \"O livro que li é ótimo\", \"que li\" é uma oração:", ["Adjetiva restritiva", "Substantiva subjetiva", "Adverbial final", "Coordenada explicativa"], 0, "\"Que li\" caracteriza o substantivo \"livro\", como faria um adjetivo (\"o livro lido\"). Sem vírgulas, restringe: não qualquer livro, o que eu li."),
  q("\"Embora estivesse cansado, terminou o trabalho\" expressa ideia de:", ["Causa", "Concessão", "Condição", "Finalidade"], 1, "\"Embora\" introduz um obstáculo que não impede a ação: concessão. Equivale a \"apesar de estar cansado\"."),
  q("\"Se chover, não iremos\" expressa:", ["Condição", "Tempo", "Consequência", "Comparação"], 0, "\"Se\" introduz uma condição para o fato principal: oração subordinada adverbial condicional. Também são condicionais \"caso\" e \"desde que\"."),
  q("Qual a diferença entre a oração adjetiva restritiva e a explicativa?", ["Não há diferença de sentido nem de pontuação entre elas", "A explicativa vem entre vírgulas; a restritiva, não", "A restritiva sempre começa com \"porque\"", "A explicativa é sempre uma oração substantiva"], 1, "\"Os alunos, que estudaram, passaram\" = todos estudaram e passaram (explicativa, com vírgulas). \"Os alunos que estudaram passaram\" = só alguns (restritiva)."),
  q("\"Estudou tanto que passou\" expressa:", ["Causa", "Consequência", "Proporção", "Conformidade"], 1, "\"Tanto… que\" indica consequência: passou por ter estudado tanto. É oração subordinada adverbial consecutiva."),
  f("Conjunções concessivas", "Embora, ainda que, mesmo que, apesar de que, conquanto."),
  f("Conjunções causais", "Porque, já que, visto que, uma vez que, como (no início)."),
  c(["Período composto: mais de uma oração.", "Coordenadas: independentes.", "Subordinadas: dependem da principal.", "Classifique pela função: substantivo, adjetivo ou advérbio."], "No ENEM, a ideia da conjunção vale mais que o nome dela."),
]);

pack(P, "literatura", 2, 2, "Romantismo", [
  q("A primeira geração romântica brasileira valorizou:", ["O índio como herói nacional", "O mal do século", "A crítica social abolicionista", "O cientificismo"], 0, "Logo após a independência, os românticos buscaram um herói nacional: o indígena idealizado (Gonçalves Dias, José de Alencar)."),
  q("Castro Alves, o \"poeta dos escravos\", pertence à geração:", ["Indianista", "Ultrarromântica", "Condoreira", "Parnasiana"], 2, "À 3ª geração romântica, condoreira (o condor voa alto): poesia social e abolicionista, como \"O Navio Negreiro\"."),
  q("Álvares de Azevedo é o principal nome do:", ["Ultrarromantismo", "Modernismo", "Arcadismo", "Realismo"], 0, "Do Ultrarromantismo (2ª geração, \"mal do século\"): morte, tédio, amor idealizado e pessimismo. Morreu aos 20 anos."),
  q("\"Iracema\" e \"O Guarani\" são de:", ["Machado de Assis", "José de Alencar", "Aluísio Azevedo", "Graciliano Ramos"], 1, "São romances indianistas de José de Alencar. Machado escreveu Dom Casmurro; Aluísio Azevedo, O Cortiço."),
  q("Qual é uma característica geral do Romantismo?", ["Objetividade e confiança na ciência", "Subjetividade e idealização", "Linguagem coloquial e fragmentada", "Bucolismo racional e equilíbrio clássico"], 1, "O Romantismo põe o \"eu\" no centro: subjetividade, emoção, idealização do amor, da mulher e da pátria. Objetividade é marca do Realismo."),
  q("\"Minha terra tem palmeiras, / Onde canta o Sabiá\" é de:", ["Castro Alves", "Gonçalves Dias", "Álvares de Azevedo", "Olavo Bilac"], 1, "É a \"Canção do Exílio\", de Gonçalves Dias (1843): nacionalismo saudosista, escrito em Portugal. Muito parodiado depois."),
  f("Três gerações da poesia romântica", "1ª: indianista/nacionalista; 2ª: ultrarromântica (mal do século); 3ª: condoreira (social, abolicionista)."),
  f("Prosa romântica", "Romances indianistas, urbanos (\"Senhora\", \"A Moreninha\") e regionalistas."),
  c(["Contexto: Independência (1822).", "Necessidade de criar identidade nacional.", "Índio idealizado como herói.", "Emoção acima da razão."], "Romantismo idealiza; Realismo critica."),
]);

pack(P, "literatura", 3, 2, "Modernismo", [
  q("Quem pintou o \"Abaporu\" (1928), símbolo do movimento antropofágico?", ["Anita Malfatti", "Tarsila do Amaral", "Di Cavalcanti", "Candido Portinari"], 1, "Tarsila do Amaral pintou o \"Abaporu\" (\"homem que come gente\", em tupi) e deu a Oswald de Andrade a ideia do Manifesto Antropófago."),
  q("O Manifesto Antropófago (Oswald de Andrade) propõe:", ["Copiar a cultura europeia sem mudanças", "\"Devorar\" o estrangeiro e fazê-lo brasileiro", "Voltar aos ideais e temas do Romantismo", "Rejeitar qualquer influência cultural de fora"], 1, "\"Devorar\" a cultura estrangeira e transformá-la em algo brasileiro, como os indígenas antropófagos. \"Tupi or not tupi, that is the question.\""),
  q("\"Macunaíma\", o \"herói sem nenhum caráter\", é de:", ["Mário de Andrade", "Oswald de Andrade", "Carlos Drummond", "Manuel Bandeira"], 0, "De Mário de Andrade (1928): uma rapsódia que junta lendas, falas e costumes de todo o Brasil, com humor e crítica."),
  q("A segunda fase modernista (1930–1945) destacou o:", ["Romance regionalista de crítica social", "Retorno ao soneto parnasiano", "Indianismo idealizado", "Simbolismo místico"], 0, "O romance regionalista de crítica social: Graciliano Ramos (Vidas Secas), Rachel de Queiroz (O Quinze), Jorge Amado. Na poesia, Drummond."),
  q("\"No meio do caminho tinha uma pedra\" é de:", ["Manuel Bandeira", "Carlos Drummond de Andrade", "Cecília Meireles", "Vinicius de Moraes"], 1, "De Carlos Drummond de Andrade (1928): a repetição causou escândalo e virou símbolo da liberdade modernista."),
  q("Guimarães Rosa e Clarice Lispector são da geração de:", ["1922", "1930", "1945", "1888"], 2, "Da geração de 1945 (3ª fase modernista): experimentação com a linguagem (Rosa, Grande Sertão: Veredas) e introspecção (Clarice)."),
  f("Características do Modernismo de 1922", "Verso livre, linguagem coloquial, humor, ruptura com o academicismo e valorização do Brasil real."),
  f("Vidas Secas", "Graciliano Ramos, 1938: a família de Fabiano foge da seca; linguagem seca como a paisagem."),
  c(["1ª fase (1922): ruptura e irreverência.", "2ª fase (1930): romance social e poesia madura.", "3ª fase (1945): linguagem inventiva.", "Busca de uma arte brasileira."], "Modernismo quebrou as regras para falar \"brasileiro\"."),
]);

pack(P, "interpretacao", 1, 2, "Figuras de linguagem na prática", [
  q("\"Já te disse um milhão de vezes!\" é:", ["Eufemismo", "Hipérbole", "Ironia", "Metonímia"], 1, "Hipérbole: exagero intencional para dar ênfase. Ninguém disse literalmente um milhão de vezes."),
  q("\"Os sinos dobravam: blém, blém\" traz:", ["Onomatopeia", "Metonímia", "Eufemismo", "Hipérbole"], 1, "Onomatopeia imita um som com palavras (\"blém\", \"tique-taque\", \"miau\"). Muito usada em quadrinhos e poemas."),
  q("\"Li Machado de Assis nas férias\" é:", ["Metáfora", "Metonímia", "Comparação", "Prosopopeia"], 1, "Metonímia: troca a obra pelo autor (li os livros de Machado). Também é metonímia \"bebi dois copos\" (o conteúdo pelo continente)."),
  q("\"Ela é uma flor\" é exemplo de:", ["Comparação", "Metáfora", "Metonímia", "Hipérbole"], 0, "Metáfora: comparação implícita, sem \"como\". \"Ela é delicada como uma flor\" seria comparação (explícita)."),
  q("\"Que belo dia para ficar preso no trânsito!\" é:", ["Ironia", "Metáfora", "Antítese", "Gradação"], 0, "Ironia: diz o contrário do que pensa (\"belo dia\" para algo ruim), com tom de crítica ou deboche."),
  q("\"É fogo que arde sem se ver\" (Camões) traz:", ["Metáfora e paradoxo", "Metonímia e hipérbole", "Onomatopeia e aliteração", "Eufemismo e ironia"], 0, "Amor é \"fogo\" (metáfora) que \"arde sem se ver\" (paradoxo, ideias contraditórias juntas). O soneto todo define o amor por contradições."),
  f("Metáfora x comparação", "Comparação usa conectivo (\"forte como um touro\"); metáfora não (\"ele é um touro\")."),
  f("Antítese x paradoxo", "Antítese: ideias opostas lado a lado (\"riso e choro\"). Paradoxo: ideias opostas que parecem impossíveis juntas (\"dor que desatina sem doer\")."),
  c(["Figuras dão expressividade.", "Publicidade adora metáfora e hipérbole.", "Charges vivem de ironia.", "No ENEM, pergunte: que efeito ela causa?"], "Identificar é bom; explicar o efeito é o que pontua."),
]);

pack(P, "interpretacao", 3, 3, "Gêneros textuais", [
  q("Um texto com título, lide e informação objetiva sobre fato recente é:", ["Crônica", "Notícia", "Editorial", "Conto"], 1, "É a notícia: o lide (1º parágrafo) responde o quê, quem, quando, onde, como e por quê. Crônica e conto são literários."),
  q("A reportagem difere da notícia por:", ["Aprofundar o tema com mais fontes", "Ser sempre escrita em versos", "Expressar a opinião do jornal", "Não ter título nem autor"], 1, "A reportagem vai além do fato: investiga, ouve várias fontes, traz dados e contexto. A notícia é mais curta e factual. Opinião do jornal é o editorial."),
  q("Qual gênero combina imagem e texto, com humor e crítica, sobre um fato atual?", ["Charge", "Bula", "Receita", "Ata"], 0, "A charge critica um fato do momento, com humor; por isso \"envelhece\". O cartum também é humor gráfico, mas atemporal."),
  q("O conto se caracteriza por:", ["Narrativa curta, com poucos personagens", "Texto longo dividido em capítulos", "Opinião do veículo sobre um fato", "Instruções para montar algo"], 1, "O conto é uma narrativa curta, com um conflito central, poucos personagens e tempo e espaço reduzidos. O romance é longo, com capítulos."),
  q("Texto injuntivo (instrucional) é o que:", ["Conta uma história com personagens", "Orienta o leitor a fazer algo", "Descreve um lugar em detalhes", "Defende uma tese com argumentos"], 1, "Texto injuntivo orienta o leitor a fazer algo, com verbos no imperativo ou infinitivo: receitas, manuais, bulas."),
  q("Variação linguística: \"nós vai\" em vez de \"nós vamos\" deve ser vista como:", ["Erro que impede a comunicação", "Variante adequada ou não à situação", "Influência direta do inglês", "Gíria proibida na escrita escolar"], 1, "É uma variante social da língua: comunica, mas não segue a norma-padrão. O que importa é a adequação: numa redação do ENEM, use \"nós vamos\"."),
  f("Tipos textuais", "Narrativo, descritivo, dissertativo, expositivo e injuntivo. Gêneros são as formas concretas (notícia, receita, crônica…)."),
  f("Intertextualidade", "Diálogo de um texto com outro: paródia (critica/humor), paráfrase (reafirma), citação, alusão."),
  c(["Pergunte: quem fala?", "Para quem?", "Com que objetivo?", "Em que suporte?"], "Gênero se reconhece pela função social."),
]);

pack(P, "redacao", 3, 4, "Competências do ENEM", [
  q("Na redação do ENEM, a competência 1 avalia:", ["O domínio da norma-padrão escrita", "A proposta de intervenção", "O repertório sociocultural", "A coesão entre parágrafos"], 2, "Competência 1: gramática, ortografia, concordância, regência. A 2 é tema e repertório; a 3, argumentação; a 4, coesão; a 5, proposta."),
  q("A competência 5 avalia:", ["Ortografia e acentuação", "A proposta de intervenção", "O título e a organização", "A caligrafia e a letra"], 1, "A competência 5 avalia a proposta de intervenção: completa (agente, ação, meio, finalidade, detalhamento) e respeitosa aos direitos humanos."),
  q("Qual destas situações NÃO zera a redação do ENEM?", ["Texto com até 7 linhas", "Fuga total ao tema", "Usar a 1ª pessoa do plural", "Copiar os textos motivadores"], 1, "Usar \"nós\" é aceito (embora o impessoal seja mais comum). Zeram: fuga total ao tema, até 7 linhas, cópia dos textos motivadores, não ser dissertativo-argumentativo."),
  q("A competência 4 avalia:", ["Domínio da norma culta", "Coesão e conectivos", "Repertório sociocultural", "Proposta de intervenção"], 1, "Competência 4: coesão, ou seja, os conectivos (além disso, portanto) e as retomadas (pronomes, sinônimos) que ligam frases e parágrafos."),
  q("O tipo de texto exigido no ENEM é:", ["Narrativo", "Dissertativo-argumentativo", "Poema em versos livres", "Carta pessoal"], 1, "Dissertativo-argumentativo: defender um ponto de vista (tese) com argumentos e terminar com uma proposta de intervenção."),
  q("Título na redação do ENEM é:", ["Obrigatório", "Opcional", "Proibido", "Vale 200 pontos"], 1, "O título é opcional e não vale ponto. Se usar, ele conta como linha escrita, mas não atrapalha a nota."),
  f("As 5 competências", "1) Norma culta; 2) Compreender o tema e o gênero, com repertório; 3) Organizar argumentos; 4) Coesão; 5) Proposta de intervenção."),
  f("Estrutura básica", "Introdução (tese) → 2 desenvolvimentos (argumentos) → conclusão (proposta de intervenção)."),
  c(["Leia a proposta duas vezes.", "Defina a tese em uma frase.", "Escolha 2 argumentos com repertório.", "Feche com intervenção completa."], "Tema recortado: fale exatamente do que foi pedido."),
]);

pack(P, "redacao", 3, 4, "Repertório e proposta de intervenção", [
  q("Repertório sociocultural produtivo é aquele que:", ["Aparece só para enfeitar o texto", "É legitimado e ligado ao tema", "Cita apenas filmes e séries famosos", "Não precisa de fonte nem de contexto"], 1, "Repertório legitimado (de fonte confiável), pertinente ao tema e produtivo: ligado ao argumento, não só citado de enfeite."),
  q("Na proposta de intervenção, o elemento \"meio/modo\" responde a:", ["Como a ação será feita", "Quem vai executar a ação", "Para que serve a ação", "Onde o problema surgiu"], 1, "Agente = quem; ação = o quê; meio/modo = como (por meio de quê); finalidade = para quê; detalhamento = um acréscimo a qualquer um deles."),
  q("Qual é um bom agente para uma proposta sobre educação?", ["\"Alguém\"", "O Ministério da Educação", "\"Todos nós, cidadãos\"", "\"A vida e o tempo\""], 1, "O agente deve ser específico e capaz de agir: Ministério da Educação, escolas, ONGs. \"Alguém\" ou \"todos nós\" são vagos e valem menos."),
  q("Citar a Constituição de 1988 em um tema de direitos é:", ["Proibido pela banca do ENEM", "Um repertório legitimado", "Fuga total ao tema proposto", "Plágio de texto oficial"], 1, "A Constituição é repertório legitimado. Para valer, precisa estar ligada ao argumento, não só citada."),
  q("A proposta de intervenção deve:", ["Desrespeitar direitos se necessário", "Respeitar os direitos humanos", "Ser vaga", "Aparecer só na introdução"], 1, "A proposta deve respeitar os direitos humanos: sugerir tortura, pena de morte ou violência anula a nota da competência 5."),
  q("Um argumento de autoridade usa:", ["Uma opinião pessoal do autor", "A fala de um especialista", "Uma piada para prender o leitor", "Um exemplo inventado e genérico"], 1, "Argumento de autoridade se apoia na fala ou dados de um especialista ou instituição reconhecida (IBGE, OMS, um filósofo) para dar força à tese."),
  f("Repertórios coringas", "Constituição de 1988, Zygmunt Bauman (modernidade líquida), dados do IBGE/OMS, Paulo Freire (educação)."),
  f("Modelo de proposta", "\"O Ministério X (agente) deve promover Y (ação), por meio de Z (meio), a fim de W (finalidade). Esse Y deve… (detalhamento).\""),
  c(["Repertório: traga conhecimento de fora.", "Ligue ao argumento, não só cite.", "Proposta: agente + ação + meio + finalidade + detalhe.", "Respeite os direitos humanos."], "Proposta completa vale 200 na competência 5."),
]);

// ── Inglês ───────────────────────────────────────────────────────────────────
pack(E, "grammar", 1, 3, "Irregular verbs", [
  q("Qual é o passado simples de \"go\"?", ["goed", "went", "gone", "going"], 1, "\"Go\" é irregular: go – went – gone. \"Goed\" não existe; \"gone\" é o particípio (I have gone)."),
  q("Qual é o passado simples de \"buy\"?", ["buyed", "bought", "brought", "buied"], 1, "buy – bought – bought. Cuidado: \"brought\" é o passado de \"bring\" (trazer)."),
  q("\"She has ___ the book.\" (read)", ["readed", "read", "red", "reading"], 1, "read – read – read: escreve igual, mas no passado e particípio se pronuncia /red/. Com \"has\", usa-se o particípio."),
  q("Qual é o particípio passado de \"write\"?", ["wrote", "written", "writed", "writing"], 1, "write – wrote – written. \"Wrote\" é o passado simples; o particípio (usado com have/has) é \"written\"."),
  q("\"I ___ a great movie yesterday.\"", ["see", "saw", "seen", "seeing"], 1, "\"Yesterday\" pede simple past: see – saw – seen. \"Seen\" só com have/has."),
  q("Qual é o passado simples de \"think\"?", ["thinked", "thought", "taught", "thank"], 1, "think – thought – thought. Não confunda com \"taught\" (passado de teach, ensinar) nem com \"thank\" (agradecer)."),
  f("Verbos irregulares mais comuns", "be (was/were – been), have (had), do (did – done), make (made), take (took – taken), get (got)."),
  f("Regular x irregular", "Regular: + -ed (worked). Irregular: forma própria (went, saw, ate)."),
  c(["Simple past: ações terminadas.", "Regulares ganham -ed.", "Irregulares: decore os mais usados.", "Pergunta e negação usam did + verbo base."], "\"Did you went?\" ✗ → \"Did you go?\" ✓"),
]);

pack(E, "grammar", 2, 2, "Linking words", [
  q("\"I studied hard; ___, I failed the test.\"", ["therefore", "however", "because", "so"], 1, "Estudou e mesmo assim reprovou: contraste → \"however\" (porém). \"Therefore\" e \"so\" indicariam consequência."),
  q("\"It was raining, ___ we stayed home.\"", ["but", "so", "although", "unless"], 1, "A chuva causou ficar em casa: consequência → \"so\" (então, por isso). \"But\" indicaria contraste."),
  q("\"___ he was tired, he kept working.\"", ["Because", "Although", "So", "Therefore"], 1, "Estava cansado, mas continuou: concessão → \"Although\" (embora). \"Because\" indicaria causa, o que não combina."),
  q("\"Moreover\" significa:", ["Porém", "Além disso", "Portanto", "A menos que"], 1, "\"Moreover\" = além disso: adiciona argumento. Parecidos: \"furthermore\", \"in addition\", \"besides\"."),
  q("\"You won't pass ___ you study.\"", ["unless", "because", "so", "and"], 0, "\"Unless\" = a menos que, a não ser que: \"você não vai passar a menos que estude\". Equivale a \"if you don't study\"."),
  q("\"Thus\" expressa ideia de:", ["Contraste", "Conclusão", "Tempo", "Adição"], 1, "\"Thus\" = assim, portanto: indica conclusão. Parecidos: \"therefore\", \"hence\", \"so\"."),
  f("Contraste", "but, however, although, though, nevertheless, despite/in spite of."),
  f("Causa e consequência", "because, since, due to (causa); so, therefore, thus, as a result (consequência)."),
  c(["Linking words ligam ideias.", "No ENEM, elas mostram a lógica do texto.", "However = mas; therefore = portanto.", "Ache o conectivo antes de ler tudo."], "Entendeu o conectivo, entendeu o argumento."),
]);

pack(E, "reading", 1, 4, "False friends", [
  q("\"Actually\" significa:", ["Atualmente", "Na verdade", "Ativamente", "Exatamente"], 1, "Falso cognato: \"actually\" = na verdade. \"Atualmente\" em inglês é \"nowadays\" ou \"currently\"."),
  q("\"Eventually\" significa:", ["Eventualmente", "Finalmente, com o tempo", "Às vezes", "Raramente"], 1, "Falso cognato: \"eventually\" = no fim, com o tempo (\"Eventually, he passed\"). \"Eventualmente\" (às vezes) seria \"occasionally\"."),
  q("\"Push\" significa:", ["Puxar", "Empurrar", "Pular", "Pagar"], 1, "\"Push\" = empurrar; \"pull\" = puxar. Aparece muito em portas: PUSH (empurre) e PULL (puxe)."),
  q("\"Library\" significa:", ["Livraria", "Biblioteca", "Liberdade", "Libra"], 1, "Falso cognato: \"library\" = biblioteca. Livraria, onde se compram livros, é \"bookstore\" ou \"bookshop\"."),
  q("\"College\" significa:", ["Colégio", "Faculdade", "Colega", "Coleção"], 1, "\"College\" = faculdade (ensino superior). Colégio (escola) é \"school\" ou \"high school\"."),
  q("\"Exquisite\" significa:", ["Esquisito", "Requintado", "Estranho", "Exagerado"], 1, "Falso cognato: \"exquisite\" = requintado, refinado. \"Esquisito\" em inglês é \"weird\" ou \"strange\"."),
  f("Mais false friends", "Parents = pais; relatives = parentes; lunch = almoço; lanche = snack; tax = imposto; taxa = rate/fee."),
  f("Cognatos verdadeiros", "Palavras parecidas com mesmo sentido: important, education, problem, possible — ajudam muito na leitura."),
  c(["Cognatos ajudam a ler rápido.", "False friends enganam.", "Confirme pelo contexto.", "Na dúvida, releia a frase inteira."], "\"Pretend\" não é \"pretender\": é fingir!"),
]);

pack(E, "reading", 3, 4, "Reading for ENEM", [
  q("Ao ler um texto em inglês no ENEM, a melhor primeira atitude é:", ["Traduzir o texto palavra por palavra", "Ler a pergunta e ver título e fonte", "Pular a questão e voltar no fim da prova", "Ler só o último parágrafo do texto"], 1, "Leia a pergunta primeiro e observe título, fonte, imagens e gênero: assim você sabe o que procurar. Traduzir palavra por palavra gasta tempo."),
  q("Skimming é:", ["Ler procurando uma informação específica", "Ler rápido para pegar a ideia geral", "Traduzir todo o texto antes de responder", "Ler em voz alta para fixar a pronúncia"], 1, "Skimming = leitura rápida para captar a ideia geral (título, primeiras linhas, palavras repetidas). Para buscar um dado específico, use scanning."),
  q("Scanning é:", ["Buscar uma informação específica", "Ler devagar, frase por frase", "Resumir o texto em poucas linhas", "Decorar as palavras novas do texto"], 0, "Scanning = varrer o texto atrás de uma informação específica (um número, nome, data), sem ler tudo."),
  q("Em textos de campanha (\"Don't text and drive\"), o objetivo costuma ser:", ["Entreter", "Conscientizar", "Narrar", "Descrever"], 1, "Campanhas querem conscientizar e mudar comportamentos, usando imperativo (\"Don't…\") e apelo emocional."),
  q("Palavras como \"however\" e \"but\" sinalizam:", ["Adição", "Contraste", "Exemplo", "Conclusão"], 1, "Indicam contraste: a informação mais importante costuma vir DEPOIS delas. No ENEM, são pistas valiosas."),
  q("Um cartum em inglês geralmente faz:", ["Uma receita passo a passo", "Crítica ou humor", "Uma lista técnica de dados", "Um contrato com cláusulas"], 1, "Cartuns usam humor para criticar comportamentos. A resposta vem da combinação de imagem e texto: leia os dois juntos."),
  f("Estratégia de prova", "1) Leia o enunciado; 2) identifique o gênero; 3) skimming; 4) scanning na parte que responde."),
  f("Palavras-chave em perguntas", "Main idea = ideia principal; purpose = objetivo; according to = de acordo com."),
  c(["Você não precisa entender todas as palavras.", "Cognatos carregam o sentido.", "Gênero e fonte dão o contexto.", "A resposta está no texto, não na sua opinião."], "ENEM cobra compreensão, não gramática decorada."),
]);

// ── Filosofia e Sociologia ───────────────────────────────────────────────────
pack(FI, "filosofia", 2, 3, "Filosofia política", [
  q("Para Maquiavel, o governante deve:", ["Ser sempre bondoso, mesmo que perca o poder", "Agir conforme a necessidade para manter o poder", "Obedecer às ordens do papa e da Igreja", "Abolir o Estado e governar pelo exemplo"], 1, "Em \"O Príncipe\", Maquiavel separa política e moral religiosa: o governante deve agir conforme a necessidade (virtù) para manter o poder e o Estado."),
  q("Para Hobbes, o Estado (o Leviatã) nasce de:", ["Um contrato para garantir a paz", "A vontade direta de Deus", "A luta entre as classes", "A bondade natural humana"], 1, "Para escapar da \"guerra de todos contra todos\", as pessoas fazem um contrato e entregam poder a um soberano forte, que garante a paz e a segurança."),
  q("Locke defende que o Estado deve proteger:", ["Somente os privilégios do rei", "Vida, liberdade e propriedade", "Os dogmas e bens da Igreja", "O poder do exército sobre o povo"], 1, "Para Locke, os direitos naturais são vida, liberdade e propriedade. Se o governo os viola, o povo pode resistir. É a base do liberalismo."),
  q("Rousseau afirmava que:", ["O homem nasce bom e a sociedade o corrompe", "O homem nasce mau e precisa ser domado", "O rei recebe o poder direto de Deus", "Não existe vontade geral, só interesses"], 0, "\"O homem nasce bom; a sociedade o corrompe\" (com a propriedade privada). Defendia a soberania popular, guiada pela vontade geral."),
  q("Em \"O Príncipe\", Maquiavel diz que, se não puder ser as duas coisas, é mais seguro para o governante ser:", ["Mais amado do que temido", "Mais temido do que amado", "Ignorado pelo povo", "Odiado pelo povo"], 1, "Maquiavel escreve que é mais seguro ser temido que amado, pois o amor é instável; mas o príncipe deve evitar ser odiado, o que o derrubaria."),
  q("Para Aristóteles, o ser humano é um:", ["Animal político", "Ser isolado", "Lobo", "Escravo por natureza sempre"], 0, "\"Zoon politikon\": o ser humano só se realiza plenamente vivendo em comunidade (na pólis), usando a razão e a palavra."),
  f("Contratualismo", "Teoria de que o Estado nasce de um acordo (contrato social) entre os indivíduos: Hobbes, Locke, Rousseau."),
  f("Estado de natureza", "Condição hipotética dos humanos antes do Estado; cada contratualista o imagina de um jeito."),
  c(["Hobbes: medo → Estado forte.", "Locke: direitos → Estado limitado.", "Rousseau: vontade geral → soberania popular.", "Montesquieu: poderes separados."], "Cada um imagina o \"antes\" para justificar o \"depois\"."),
]);

pack(SO, "sociologia", 2, 4, "Indústria cultural e mídia", [
  q("O conceito de indústria cultural foi criado por:", ["Durkheim", "Adorno e Horkheimer", "Auguste Comte", "Max Weber"], 1, "Adorno e Horkheimer, da Escola de Frankfurt, criticaram a cultura produzida como mercadoria em série, para o lucro e o conformismo."),
  q("Para a Escola de Frankfurt, a indústria cultural tende a:", ["Estimular o pensamento crítico", "Padronizar gostos e o consumo", "Acabar com o capitalismo industrial", "Valorizar a arte popular tradicional"], 1, "Produtos culturais em série padronizam gostos, estimulam o consumo e desestimulam o pensamento crítico, segundo Adorno e Horkheimer."),
  q("Bolhas de filtro nas redes sociais são:", ["Erros técnicos que derrubam sites", "Feeds que confirmam nossas opiniões", "Propagandas pagas por empresas", "Vírus que roubam dados pessoais"], 1, "Os algoritmos mostram o que confirma nossas opiniões e escondem o diferente. Ficamos numa \"bolha\" que reduz o debate e favorece a polarização."),
  q("Fake news se espalham rápido principalmente porque:", ["São textos longos e bem explicados", "Apelam à emoção e a crenças prévias", "São sempre verdadeiras e checadas", "Vêm de fontes oficiais do governo"], 1, "Notícias falsas exploram emoções (medo, raiva) e o viés de confirmação: compartilhamos o que concorda com o que já pensamos, sem checar."),
  q("Para Bauman, vivemos uma \"modernidade líquida\", marcada por:", ["Relações sólidas e duradouras", "Relações frágeis e instáveis", "O fim da tecnologia digital", "Uma volta à ordem feudal"], 1, "Para Zygmunt Bauman, na modernidade líquida tudo muda rápido: relações, empregos e identidades ficam frágeis e passageiros, como líquidos."),
  q("Cultura de massa é aquela:", ["Feita por uma pequena comunidade", "Produzida em larga escala", "Restrita a museus e teatros", "Criada sem nenhuma tecnologia"], 1, "Cultura de massa é produzida em larga escala para grande público, difundida por TV, rádio e internet. Diferente da cultura popular, criada pelas comunidades."),
  f("Etnocentrismo", "Julgar outras culturas a partir dos valores da sua, como se fosse superior."),
  f("Relativismo cultural", "Compreender cada cultura a partir de seus próprios valores e contexto."),
  c(["Mídia forma opiniões.", "Algoritmos escolhem o que você vê.", "Checar a fonte é atitude cidadã.", "Consumir cultura com olhar crítico."], "Antes de compartilhar: quem publicou, quando e com que interesse?"),
]);
