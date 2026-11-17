import { SOCIOLOGIA } from "./linguagens";
import { extend, m, o, q, qe } from "./pack";

/* Sociologia, 2ª leva: questões diretas e no estilo ENEM. Chave "n". */

extend(SOCIOLOGIA, "Surgimento da sociologia", [
  q("A sociologia surgiu no século XIX como resposta:", ["Às mudanças da Revolução Industrial", "À descoberta da América pelos europeus", "Ao fim do Império Romano do Ocidente", "À invenção da escrita na Mesopotâmia"], 0, "Industrialização, urbanização e crises sociais exigiram uma ciência para entender a sociedade moderna."),
  q("Quem criou o termo 'sociologia'?", ["Auguste Comte", "Karl Marx e Friedrich Engels", "Max Weber, na Alemanha", "Platão, em A República"], 0, "Auguste Comte cunhou o termo e propôs o positivismo: estudar a sociedade com métodos das ciências naturais."),
  q("O positivismo de Comte defendia:", ["Ciência para organizar a sociedade", "A revolução armada dos operários", "A volta ao poder da nobreza feudal", "O fim de qualquer conhecimento científico"], 0, "Para Comte, a sociedade passa pelos estados teológico, metafísico e positivo (científico). Lema: 'ordem e progresso'."),
  q("O lema 'Ordem e Progresso' da bandeira brasileira vem:", ["Do positivismo", "Do marxismo revolucionário", "Do liberalismo de John Locke", "Do pensamento de Santo Agostinho"], 0, "Os republicanos de 1889 eram influenciados pelo positivismo de Auguste Comte."),
  q("Os três autores 'clássicos' da sociologia são:", ["Durkheim, Weber e Marx", "Platão, Aristóteles e Sócrates", "Hobbes, Locke e Rousseau", "Descartes, Hume e Kant"], 0, "Durkheim (fato social), Weber (ação social) e Marx (luta de classes) fundaram as grandes correntes da sociologia."),
  q("A 'imaginação sociológica' (Wright Mills) é a capacidade de:", ["Ligar problemas pessoais a processos sociais", "Imaginar histórias e personagens de ficção", "Prever o futuro de cada pessoa sozinha", "Criar leis novas para o país inteiro"], 0, "Ex.: o desemprego de uma pessoa ligado a uma crise econômica: o pessoal visto como social."),
  qe("“Com a fábrica, milhares de camponeses se mudaram para as cidades. Os bairros operários cresceram sem esgoto, e as jornadas chegavam a 16 horas.”", "As transformações descritas ajudam a explicar:", ["O surgimento da sociologia", "O fim da Idade Média europeia", "A invenção da agricultura no Neolítico", "A queda do Império Romano"], 0, "Os problemas novos da industrialização (pobreza urbana, exploração, conflitos) motivaram o estudo científico da sociedade."),
  qe("“A sociologia é o estudo da vida social humana, dos grupos e das sociedades.” (Anthony Giddens)", "Segundo a definição, o objeto da sociologia é:", ["A vida social", "Apenas a mente de cada indivíduo", "Somente a economia dos países ricos", "Só os fenômenos da natureza física"], 0, "A sociologia estuda relações, grupos e instituições, não o indivíduo isolado nem a natureza."),
  qe("Situação: um estudante percebe que sua dificuldade de conseguir emprego não é só sua, pois muitos jovens do bairro vivem o mesmo.", "Ao perceber isso, o estudante exercita:", ["A imaginação sociológica", "O senso comum sem nenhuma reflexão", "O individualismo de quem culpa só a si", "A superstição sobre sorte e azar"], 0, "Ele liga uma dificuldade pessoal a uma questão coletiva (desemprego juvenil): é a imaginação sociológica."),
  qe("“Estranhar o familiar e desnaturalizar o que parece natural” é uma atitude sociológica básica.", "Desnaturalizar significa:", ["Perceber que algo foi construído", "Proteger a natureza das cidades", "Aceitar tudo como sempre foi", "Negar que exista o mundo natural"], 0, "Ex.: perceber que papéis de gênero ou pobreza não são 'naturais', mas resultado de processos históricos e sociais."),
  q("Diferente do senso comum, o conhecimento sociológico:", ["Usa métodos e dados", "Repete opiniões populares", "Baseia-se só em crenças", "Dispensa qualquer pesquisa"], 0, "A sociologia usa pesquisa, estatística, entrevistas e teoria para analisar a sociedade de forma sistemática."),
  m("Marque fatores que contribuíram para o surgimento da sociologia:", ["Revolução Industrial", "Urbanização acelerada", "Revolução Francesa", "Invenção da roda", "Fundação de Roma"], [0, 1, 2], "A roda e a fundação de Roma são muito anteriores ao século XIX."),
  m("Marque atitudes próprias do olhar sociológico:", ["Estranhar o familiar", "Desnaturalizar o social", "Usar dados e métodos", "Aceitar o senso comum", "Explicar tudo pela sorte"], [0, 1, 2], "Senso comum e sorte não explicam fenômenos sociais de forma rigorosa."),
  o("Por que a sociologia surgiu no século XIX? Explique.", "Porque a Revolução Industrial e a Revolução Francesa transformaram profundamente a sociedade: êxodo rural, crescimento das cidades, exploração dos operários e novas ideias políticas. Essas mudanças e crises exigiram uma ciência para explicar a vida social, papel assumido por Comte, Durkheim, Weber e Marx.", [
    ["Revolução Industrial / urbanização", "industrial", "cidade", "urban", "fabrica"],
    ["Crises e problemas sociais novos", "crise", "problema", "explora", "pobreza", "operari"],
    ["Necessidade de uma ciência da sociedade", "ciencia", "explicar", "estudar", "entender"],
  ]),
], "n");

extend(SOCIOLOGIA, "Durkheim", [
  q("Para Durkheim, os fatos sociais devem ser estudados:", ["Como coisas", "Como sentimentos íntimos", "Como vontade dos deuses", "Como acidentes sem causa"], 0, "Tratar fatos sociais 'como coisas' é estudá-los com objetividade, de fora, como fenômenos observáveis."),
  q("Solidariedade mecânica é típica de sociedades:", ["Simples, com pessoas parecidas", "Industriais com muita divisão de tarefas", "Urbanas com profissões muito diversas", "Globalizadas e conectadas pela internet"], 0, "Nas sociedades simples, a coesão vem da semelhança de crenças e modos de vida."),
  q("Solidariedade orgânica é típica de sociedades:", ["Com divisão do trabalho", "Tribais com pessoas iguais", "Isoladas e sem comércio", "Sem nenhuma profissão"], 0, "Na sociedade moderna, cada um depende do trabalho dos outros, como órgãos de um corpo."),
  q("Anomia, para Durkheim, é:", ["Ausência ou fraqueza de normas", "Excesso de leis muito rígidas", "Uma doença mental individual", "Um tipo de religião primitiva"], 0, "Em crises rápidas, as normas perdem força e os indivíduos ficam sem referência, o que gera desorientação."),
  q("No estudo sobre o suicídio, Durkheim mostrou que:", ["Taxas variam com fatores sociais", "É sempre uma decisão sem causa", "Depende só do clima de cada país", "Nunca pode ser estudado por dados"], 0, "Comparando dados, mostrou que integração e regulação social influenciam as taxas: algo íntimo tem dimensão social."),
  q("Para Durkheim, a educação tem a função de:", ["Socializar as novas gerações", "Libertar o aluno de toda regra", "Formar apenas trabalhadores", "Substituir a família inteira"], 0, "A escola transmite normas e valores que integram o indivíduo à sociedade."),
  qe("“Quando cumpro meus deveres de irmão, de esposo ou de cidadão, cumpro deveres que estão definidos, fora de mim, no direito e nos costumes.” (Durkheim)", "O trecho exemplifica a característica do fato social chamada:", ["Exterioridade", "Espontaneidade total", "Individualidade pura", "Opcionalidade"], 0, "As regras existem antes e fora de nós: estão no direito e nos costumes. Essa é a exterioridade."),
  qe("Situação: um aluno vai à escola de pijama e é alvo de risos e advertência, mesmo sem nenhuma lei que proíba.", "A reação dos outros mostra a característica do fato social chamada:", ["Coercitividade", "Exterioridade apenas", "Generalidade econômica", "Neutralidade moral"], 0, "A sociedade pressiona (risos, advertência) para que a regra seja seguida: coerção social, mesmo informal."),
  qe("“Uma sociedade em que todos fazem exatamente as mesmas coisas se mantém unida pela semelhança; outra, em que cada um faz algo diferente, pela dependência mútua.”", "O trecho contrasta:", ["Solidariedade mecânica e orgânica", "Capitalismo industrial e socialismo real", "Ação racional e ação tradicional em Weber", "Classe social e estamento feudal"], 0, "Semelhança = mecânica (sociedades simples); dependência mútua = orgânica (divisão do trabalho)."),
  qe("“Em períodos de crise econômica súbita, as taxas de suicídio aumentam, mesmo quando a crise é de prosperidade repentina.”", "Durkheim explicaria o fenômeno pela:", ["Anomia", "Solidariedade mecânica", "Luta de classes", "Ação afetiva"], 0, "Mudanças bruscas desorganizam as normas e as expectativas: é o suicídio anômico."),
  q("Fato social normal, para Durkheim, é aquele que:", ["É geral naquele tipo de sociedade", "Nunca acontece em lugar nenhum", "Só ocorre com pessoas doentes", "É sempre bom e moralmente certo"], 0, "Até o crime é 'normal' por ser geral; patológico é o que foge muito da média."),
  m("Marque as características do fato social segundo Durkheim:", ["Exterioridade", "Coercitividade", "Generalidade", "Individualidade", "Espontaneidade"], [0, 1, 2], "O fato social não é individual nem espontâneo: se impõe ao indivíduo."),
  m("Marque exemplos de fatos sociais:", ["A língua de um país", "As leis", "Os costumes de vestir", "Um espirro isolado", "Um sonho individual"], [0, 1, 2], "Espirro e sonho são individuais, não coletivos nem coercitivos."),
  o("Explique a diferença entre solidariedade mecânica e orgânica em Durkheim.", "Na solidariedade mecânica, típica de sociedades simples, a coesão vem da semelhança: as pessoas têm as mesmas crenças e fazem coisas parecidas. Na orgânica, típica das sociedades modernas, a coesão vem da divisão do trabalho: as pessoas são diferentes e dependem umas das outras, como órgãos de um corpo.", [
    ["Mecânica: semelhança, sociedades simples", "semelhan", "simples", "iguais", "mesmas crencas"],
    ["Orgânica: divisão do trabalho", "divisao do trabalho", "especializ", "funcoes"],
    ["Orgânica: interdependência", "depend", "organ"],
  ]),
], "n");

extend(SOCIOLOGIA, "Weber", [
  q("Para Max Weber, a sociologia deve compreender:", ["O sentido das ações sociais", "Apenas os números da economia", "As leis naturais imutáveis", "Os fenômenos físicos e químicos"], 0, "Sociologia compreensiva: entender o sentido que os indivíduos dão às suas ações."),
  q("Ação social, para Weber, é aquela que:", ["Leva em conta os outros", "É feita de forma automática", "Ignora as outras pessoas", "Acontece por reflexo do corpo"], 0, "Ação social é orientada pelo comportamento dos outros: abrir o guarda-chuva por causa da chuva não é; cumprimentar alguém é."),
  q("A ação 'racional com relação a fins' é aquela em que:", ["Meios servem a um objetivo", "Se age só por paixão ou por emoção forte", "Se repete apenas o que sempre foi feito", "Se age sem ter nenhum objetivo em mente"], 0, "Ex.: estudar para passar no vestibular: calcula-se os meios mais eficientes para o fim."),
  q("Dominação carismática se baseia:", ["Nas qualidades do líder", "Em regras escritas e cargos", "Nos costumes antigos", "No sorteio entre todos"], 0, "O carisma é a crença nas qualidades extraordinárias de um líder (profeta, herói, líder de massas)."),
  q("A burocracia, para Weber, é característica da dominação:", ["Racional-legal", "Carismática", "Tradicional", "Religiosa mística"], 0, "Regras impessoais, hierarquia, cargos com competências definidas e documentos escritos."),
  q("Em 'A ética protestante e o espírito do capitalismo', Weber mostra que:", ["Valores religiosos influenciaram a economia", "A economia não tem relação com cultura", "Só a força explica o capitalismo", "Protestantes rejeitavam o trabalho"], 0, "A ética calvinista valorizava trabalho disciplinado e poupança, o que favoreceu o espírito capitalista."),
  qe("Situação: um morador de uma pequena cidade obedece ao chefe local 'porque sempre foi assim, desde os avós'.", "A situação exemplifica a dominação:", ["Tradicional", "Carismática", "Racional-legal", "Burocrática"], 0, "A legitimidade vem do costume e da tradição, não de leis nem do carisma pessoal."),
  qe("“Um funcionário público deve cumprir as regras do cargo da mesma forma para todos, sem favorecer amigos ou parentes.”", "O princípio descrito é típico da:", ["Burocracia racional-legal", "Dominação tradicional dos costumes", "Liderança carismática de um herói", "Ação afetiva guiada pela emoção"], 0, "Impessoalidade e regras escritas iguais para todos caracterizam a burocracia moderna."),
  qe("Weber falou em 'desencantamento do mundo' para descrever a modernidade.", "A expressão se refere:", ["Ao avanço da racionalização", "Ao aumento das crenças mágicas", "Ao fim da ciência moderna", "À volta das religiões antigas"], 0, "Na modernidade, explicações mágicas e religiosas perdem espaço para o cálculo racional e a ciência."),
  qe("Situação: um torcedor chora e grita ao ver seu time ser campeão.", "Segundo Weber, essa ação é do tipo:", ["Afetiva", "Racional com relação a fins", "Tradicional", "Burocrática"], 0, "É guiada pela emoção do momento, não por cálculo ou costume."),
  q("O 'tipo ideal' de Weber é:", ["Um modelo para comparar casos reais", "A sociedade perfeita a ser buscada", "O comportamento moralmente correto", "Uma lei natural da sociedade"], 0, "É uma ferramenta de análise: um modelo puro que ajuda a comparar a realidade, não um ideal moral."),
  m("Marque os tipos de ação social em Weber:", ["Racional com relação a fins", "Racional com relação a valores", "Afetiva", "Mecânica", "Orgânica"], [0, 1, 2], "Weber também lista a ação tradicional. Mecânica e orgânica são tipos de solidariedade de Durkheim."),
  m("Marque os tipos de dominação legítima em Weber:", ["Racional-legal", "Tradicional", "Carismática", "Anômica", "Alienada"], [0, 1, 2], "Anomia é Durkheim; alienação, Marx."),
  o("Explique o que é ação social para Max Weber e dê um exemplo.", "Para Weber, ação social é toda ação orientada pelo comportamento de outras pessoas, à qual o indivíduo dá um sentido. Ex.: votar numa eleição, pensando nos candidatos e no resultado coletivo. Já abrir o guarda-chuva por causa da chuva não é ação social, pois não envolve os outros.", [
    ["Orientada pelos outros", "outros", "outras pessoas", "orientad"],
    ["Tem sentido para quem age", "sentido", "significado", "intenc"],
    ["Exemplo coerente", "votar", "exemplo", "cumprimentar", "guarda-chuva", "comprar"],
  ]),
], "n");

extend(SOCIOLOGIA, "Marx", [
  q("Para Marx, as classes sociais se definem principalmente:", ["Pela posição na produção", "Pela cor da pele e da roupa", "Pela religião de cada família", "Pelo gosto musical das pessoas"], 0, "Quem possui os meios de produção (burguesia) e quem só tem a força de trabalho (proletariado)."),
  q("Burguesia, para Marx, é a classe que:", ["Possui os meios de produção", "Vende sua força de trabalho", "Vive só da agricultura familiar", "Não participa da economia"], 0, "A burguesia é dona de fábricas, terras e máquinas; o proletariado vende a força de trabalho por salário."),
  q("Ideologia, em Marx, é:", ["Ideias que ocultam a dominação", "Qualquer opinião política sincera", "O estudo científico das ideias", "A religião oficial de um país"], 0, "A ideologia apresenta interesses da classe dominante como se fossem universais e naturais."),
  q("O 'fetiche da mercadoria' significa que:", ["Esquecemos o trabalho por trás do produto", "Gostamos muito de fazer compras", "Mercadorias têm poderes mágicos", "Produtos caros são sempre melhores"], 0, "As mercadorias parecem valer por si mesmas; esconde-se o trabalho humano e as relações de exploração."),
  q("Para Marx, o capitalismo seria superado pelo:", ["Socialismo e depois o comunismo", "Feudalismo e depois a escravidão", "Absolutismo dos reis europeus", "Liberalismo econômico puro"], 0, "Marx previa que as contradições do capitalismo levariam a uma sociedade sem classes."),
  q("Materialismo histórico é a ideia de que:", ["A economia condiciona a história", "As ideias dos heróis movem tudo", "A história é obra do acaso", "Os deuses guiam os povos"], 0, "As condições materiais (como se produz a vida) são a base das instituições e das ideias."),
  qe("“A história de todas as sociedades até hoje é a história da luta de classes.” (Marx e Engels, Manifesto Comunista)", "Segundo o trecho, as transformações históricas resultam:", ["Do conflito entre classes", "Da vontade de grandes líderes", "Do clima de cada região", "Da harmonia entre todos"], 0, "Senhores e escravos, nobres e servos, burgueses e proletários: o conflito move a história."),
  qe("“O operário fica mais pobre quanto mais riqueza produz.” (Marx, Manuscritos)", "O paradoxo descrito se explica pela:", ["Exploração do trabalho", "Preguiça dos operários", "Falta de máquinas", "Generosidade dos patrões"], 0, "O valor criado pelo operário é apropriado pelo capitalista (mais-valia): produz riqueza para outro."),
  qe("Situação: um anúncio mostra um tênis como símbolo de sucesso e felicidade, sem mencionar as condições de quem o fabricou.", "Marx chamaria esse efeito de:", ["Fetiche da mercadoria", "Solidariedade orgânica", "Dominação carismática", "Ação tradicional"], 0, "O produto ganha 'vida própria' e esconde as relações de trabalho que o produziram."),
  qe("“A religião é o ópio do povo.” (Marx)", "Nesse contexto, a frase sugere que a religião:", ["Consola, mas pode acomodar", "É sempre uma droga ilegal e perigosa", "Deve ser proibida por lei em todo país", "Explica cientificamente toda a sociedade"], 0, "Para Marx, a religião alivia o sofrimento real, mas pode acomodar as pessoas e afastá-las da transformação."),
  q("O exército industrial de reserva, para Marx, é:", ["O grupo de desempregados", "Um exército de soldados fabris", "A reserva de matéria-prima", "O estoque de mercadorias"], 0, "Os desempregados pressionam os salários para baixo, pois sempre há quem aceite trabalhar por menos."),
  m("Marque conceitos marxistas:", ["Luta de classes", "Ideologia", "Fetiche da mercadoria", "Anomia", "Tipo ideal"], [0, 1, 2], "Anomia é Durkheim; tipo ideal, Weber."),
  m("Marque os pares conceito → significado corretos:", ["Burguesia: dona dos meios de produção", "Proletariado: vende a força de trabalho", "Mais-valia: trabalho não pago", "Ideologia: ciência neutra", "Alienação: liberdade plena"], [0, 1, 2], "Ideologia oculta a dominação; alienação é estranhamento do trabalhador."),
  o("Explique o conceito de ideologia em Marx e dê um exemplo.", "Ideologia é um conjunto de ideias que apresenta os interesses da classe dominante como se fossem naturais e de todos, escondendo a exploração. Ex.: a ideia de que 'quem é pobre é porque não se esforça' oculta as desigualdades de oportunidade criadas pela estrutura social.", [
    ["Ideias da classe dominante", "classe dominante", "dominante", "burgues"],
    ["Ocultam ou naturalizam a dominação", "ocult", "esconde", "natural", "disfarc"],
    ["Exemplo coerente", "exemplo", "esforc", "merito", "pobre"],
  ]),
], "n");

extend(SOCIOLOGIA, "Cultura e identidade", [
  q("Na antropologia, cultura é:", ["Tudo o que é aprendido em sociedade", "Apenas arte erudita de museus", "Só a música clássica europeia", "O nível de estudo de uma pessoa"], 0, "Cultura inclui língua, costumes, crenças, técnicas e valores transmitidos socialmente, não só 'alta cultura'."),
  q("Na antropologia, etnocentrismo significa:", ["Julgar outras culturas pela própria", "Estudar várias culturas com respeito", "Viajar para conhecer outros povos", "Aprender uma língua estrangeira"], 0, "É tomar o próprio grupo como medida e ver os outros como inferiores ou 'estranhos'."),
  q("Relativismo cultural propõe:", ["Entender cada cultura em seu contexto", "Achar todas as culturas iguais em tudo", "Julgar os outros pelos nossos valores", "Acabar com as diferenças culturais"], 0, "Compreender práticas a partir dos sentidos que têm para aquele grupo, sem julgá-las de fora."),
  q("Aculturação é o processo de:", ["Contato e troca entre culturas", "Perda total de qualquer cultura", "Isolamento completo de um povo", "Criação de uma cultura do nada"], 0, "No contato entre culturas há trocas e mudanças, muitas vezes com relações de poder desiguais."),
  q("Identidade social é:", ["Como nos vemos e somos vistos", "O número do documento de RG", "Uma característica só biológica", "Algo que nunca muda na vida"], 0, "A identidade se constrói nas relações e pode mudar: gênero, classe, etnia, religião, geração."),
  q("Indústria cultural, para Adorno, produz cultura:", ["Em série, como mercadoria", "Livre de qualquer interesse", "Só para os mais pobres", "Apenas nas comunidades"], 0, "Produtos culturais padronizados para o consumo de massa, segundo a Escola de Frankfurt."),
  qe("“O que vemos como 'natural' em nossa cultura, como comer com garfo, seria estranho em outras sociedades.”", "O texto sugere que os hábitos culturais:", ["São aprendidos, não naturais", "São iguais no mundo inteiro", "Nascem com cada pessoa", "Nunca se transformam"], 0, "Hábitos parecem naturais por serem familiares, mas são aprendidos na socialização."),
  qe("Situação: um turista estrangeiro critica uma festa popular brasileira dizendo que ela é 'primitiva'.", "A atitude do turista é um exemplo de:", ["Etnocentrismo", "Relativismo cultural", "Diversidade respeitada", "Imaginação sociológica"], 0, "Ele julga a cultura alheia pelos padrões da sua e a classifica como inferior."),
  qe("“Tupi or not tupi, that is the question.” (Oswald de Andrade, Manifesto Antropófago, 1928)", "O manifesto propõe, em relação à cultura estrangeira:", ["Devorá-la e transformá-la", "Copiá-la sem nenhuma mudança", "Proibi-la completamente", "Ignorá-la por completo"], 0, "A antropofagia cultural absorve influências estrangeiras e as recria de forma brasileira."),
  qe("Dados do IBGE mostram que o Brasil tem mais de 300 povos indígenas, falando mais de 270 línguas.", "Os dados evidenciam:", ["A diversidade cultural do país", "Que todos falam só português", "A ausência de povos originários", "Uma única cultura indígena"], 0, "Há grande diversidade étnica e linguística entre os povos indígenas, muitas vezes ignorada."),
  q("Cultura popular se diferencia da cultura de massa porque:", ["Nasce das comunidades", "É vendida pelas grandes empresas", "Só existe na televisão", "É produzida em série"], 0, "A cultura popular (cordel, congada, festa junina) é criada e transmitida pelas comunidades."),
  m("Marque exemplos de patrimônio cultural imaterial brasileiro:", ["Samba de roda do Recôncavo", "Frevo", "Ofício das baianas de acarajé", "Prédio do Congresso Nacional", "Ponte Rio-Niterói"], [0, 1, 2], "O Congresso e a ponte são bens materiais (construções), não imateriais."),
  m("Marque atitudes de relativismo cultural:", ["Entender o sentido local de um costume", "Evitar chamar outras culturas de inferiores", "Respeitar a diversidade", "Ridicularizar rituais diferentes", "Impor a própria religião"], [0, 1, 2], "Ridicularizar e impor são atitudes etnocêntricas."),
  o("Explique a diferença entre etnocentrismo e relativismo cultural, com um exemplo.", "Etnocentrismo é julgar outras culturas a partir da própria, tratando-as como inferiores. Relativismo cultural é compreender cada cultura em seu próprio contexto. Ex.: chamar de 'estranho' um alimento de outro povo é etnocêntrico; entender por que ele é valorizado ali é relativista.", [
    ["Etnocentrismo: julgar pela própria cultura", "julgar", "propria", "inferior"],
    ["Relativismo: entender no contexto", "contexto", "compreend", "entender", "respeit"],
    ["Exemplo coerente", "exemplo", "aliment", "costume", "festa", "ritual"],
  ]),
], "n");

extend(SOCIOLOGIA, "Desigualdade e estratificação", [
  q("Estratificação social é:", ["A divisão da sociedade em camadas", "A organização das rochas do solo", "A escolha livre do próprio grupo", "Uma regra de trânsito nas cidades"], 0, "Grupos ocupam posições desiguais em renda, poder e prestígio: castas, estamentos ou classes."),
  q("No sistema de castas, a mobilidade social é:", ["Quase inexistente", "Muito alta e livre", "Garantida por eleição", "Igual à das classes"], 0, "A casta é definida pelo nascimento e quase não se muda; casamentos entre castas são restritos."),
  q("A sociedade estamental era típica:", ["Do feudalismo europeu", "Das cidades industriais", "Dos países socialistas", "Da internet atual"], 0, "Clero, nobreza e povo: posições definidas pelo nascimento e por privilégios jurídicos."),
  q("O índice de Gini mede:", ["A desigualdade de renda", "A taxa de natalidade", "A altitude das cidades", "O volume de chuvas"], 0, "Vai de 0 (igualdade total) a 1 (desigualdade máxima). O Brasil está entre os países mais desiguais."),
  q("Mobilidade social vertical é:", ["Subir ou descer de camada", "Mudar de cidade sem trocar de renda", "Trocar de emprego no mesmo nível", "Viajar para outro país de férias"], 0, "Ascensão ou queda na hierarquia social; a horizontal é mudança sem alterar a posição."),
  q("Pierre Bourdieu chamou de 'capital cultural':", ["Conhecimentos e hábitos valorizados", "O dinheiro guardado no banco", "Os imóveis de uma família", "A força física do trabalhador"], 0, "Livros em casa, linguagem, gostos e diplomas também dão vantagem e reproduzem a desigualdade."),
  qe("Segundo dados recentes, os 10% mais ricos do Brasil concentram mais de 40% da renda nacional, enquanto os 40% mais pobres ficam com cerca de 10%.", "Os dados indicam:", ["Forte concentração de renda", "Distribuição de renda igualitária", "Que os pobres ganham mais", "Ausência de desigualdade"], 0, "Uma pequena parcela fica com grande parte da renda: alta concentração, típica de países muito desiguais."),
  qe("“Filhos de pais com ensino superior têm muito mais chance de concluir uma faculdade do que filhos de pais sem escolaridade.”", "O dado ilustra o conceito de Bourdieu de:", ["Reprodução pelo capital cultural", "Solidariedade mecânica de Durkheim", "Dominação carismática de Weber", "Anomia social em tempos de crise"], 0, "O capital cultural herdado facilita o sucesso escolar e tende a reproduzir as posições sociais."),
  qe("Situação: duas pessoas com o mesmo currículo disputam uma vaga; a escolhida tem 'boas indicações' de conhecidos influentes.", "O que favoreceu a escolhida, segundo Bourdieu, foi o:", ["Capital social", "Capital cultural apenas", "Mérito individual puro", "Acaso estatístico"], 0, "Capital social é a rede de contatos e relações que pode ser convertida em vantagens."),
  qe("“A meritocracia supõe que todos partem da mesma linha de largada. Na prática, uns começam a corrida muitos metros à frente.”", "O texto critica a meritocracia por:", ["Ignorar desigualdades de origem", "Valorizar o esforço pessoal", "Exigir estudo dos jovens", "Proteger os mais pobres"], 0, "Se as condições de partida são desiguais, o resultado não reflete só o mérito."),
  q("Desigualdade de gênero no trabalho aparece, por exemplo, quando:", ["Mulheres ganham menos na mesma função", "Todos recebem o mesmo salário", "Homens e mulheres dividem tarefas iguais", "As vagas são sorteadas entre todos"], 0, "No Brasil, mulheres ainda recebem, em média, menos que homens na mesma ocupação."),
  m("Marque formas de estratificação social:", ["Castas", "Estamentos", "Classes sociais", "Fusos horários", "Placas tectônicas"], [0, 1, 2], "Fusos e placas são conceitos da geografia."),
  m("Marque fatores que dificultam a mobilidade social no Brasil:", ["Desigualdade na qualidade da educação", "Racismo estrutural", "Concentração de renda", "Ensino gratuito de qualidade para todos", "Salários iguais entre grupos"], [0, 1, 2], "Educação de qualidade para todos e salários iguais facilitariam a mobilidade."),
  o("Explique por que a desigualdade social tende a se reproduzir entre gerações.", "Famílias com mais renda e escolaridade transmitem aos filhos vantagens: melhores escolas, capital cultural (livros, linguagem valorizada) e capital social (contatos). Os mais pobres partem com menos oportunidades. Assim, sem políticas públicas, as posições sociais tendem a se repetir de pais para filhos.", [
    ["Vantagens herdadas da família", "familia", "herda", "pais", "filhos"],
    ["Educação ou capital cultural", "escola", "educac", "capital cultural", "cultural"],
    ["Oportunidades desiguais / políticas públicas", "oportunidade", "desigual", "politica"],
  ]),
], "n");

extend(SOCIOLOGIA, "Trabalho e sociedade", [
  q("O fordismo se caracterizou pela:", ["Produção em massa em esteira", "Produção artesanal sob encomenda do cliente", "Fim de todo o trabalho dentro das fábricas", "Pequena produção familiar no campo"], 0, "Henry Ford usou a esteira e a padronização para produzir carros em grande quantidade e baratear o preço."),
  q("O taylorismo propôs:", ["Dividir e cronometrar as tarefas", "Dar autonomia total ao operário", "Acabar com as gerências", "Trabalhar sem horário fixo"], 0, "Frederick Taylor separou planejamento e execução e cronometrou movimentos para aumentar a produtividade."),
  q("O toyotismo trouxe a ideia de:", ["Produzir sob demanda (just in time)", "Estocar o máximo possível", "Fazer um produto único sempre", "Eliminar a tecnologia da fábrica"], 0, "Produção flexível, estoque mínimo e trabalhadores polivalentes, surgida no Japão."),
  q("Precarização do trabalho significa:", ["Perda de direitos e estabilidade", "Aumento dos direitos trabalhistas", "Fim do desemprego no país", "Salários sempre mais altos"], 0, "Contratos instáveis, informalidade, jornadas incertas e menos proteção social."),
  q("A 'uberização' do trabalho se refere:", ["A trabalho por aplicativo sem vínculo", "A contratos com carteira assinada", "A empregos públicos estáveis", "A cooperativas de agricultores"], 0, "Trabalhadores ligados a plataformas, pagos por tarefa, sem direitos como férias e 13º."),
  q("A divisão sexual do trabalho se refere a:", ["Tarefas atribuídas por gênero", "Separar fábricas por região", "Dividir o lucro entre sócios", "Organizar turnos de trabalho"], 0, "Historicamente, cuidado e tarefas domésticas foram atribuídos às mulheres, muitas vezes sem pagamento."),
  qe("No filme 'Tempos Modernos' (1936), Chaplin interpreta um operário que aperta parafusos tão repetidamente que continua fazendo o gesto mesmo fora da fábrica.", "O filme critica principalmente:", ["O trabalho repetitivo das fábricas", "O fim das máquinas na indústria", "O excesso de férias dos operários", "A vida tranquila nas cidades"], 0, "A sátira mostra a desumanização do trabalho fragmentado típico do taylorismo-fordismo."),
  qe("Dados do IBGE: cerca de 4 em cada 10 trabalhadores brasileiros estão na informalidade.", "A informalidade significa que esses trabalhadores:", ["Não têm vários direitos", "Ganham sempre mais que os trabalhadores formais", "Têm carteira assinada e todos os direitos", "Trabalham apenas para o governo federal"], 0, "Informal = sem carteira ou CNPJ: geralmente sem férias, 13º, FGTS e contribuição à previdência."),
  qe("Situação: um entregador trabalha 12 horas por dia por aplicativo, paga a própria moto e o combustível e não tem férias nem auxílio se adoecer.", "A situação ilustra:", ["Precarização do trabalho", "Trabalho com todos os direitos", "Emprego público estável", "Solidariedade mecânica"], 0, "Jornadas longas, custos transferidos ao trabalhador e falta de proteção são marcas da precarização."),
  qe("“Pesquisas mostram que mulheres dedicam, em média, quase o dobro de horas semanais aos afazeres domésticos em relação aos homens.”", "O dado evidencia:", ["A dupla jornada feminina", "A igualdade nas tarefas de casa", "Que homens trabalham mais em casa", "O fim da divisão sexual do trabalho"], 0, "Além do trabalho remunerado, muitas mulheres acumulam o trabalho doméstico não pago."),
  q("A CLT, de 1943, garantiu ao trabalhador brasileiro:", ["Direitos como férias e salário mínimo", "O fim de qualquer contrato de trabalho", "A proibição de sindicatos no país", "Trabalho sem limite de horas"], 0, "Consolidou direitos como jornada de 8 horas, férias remuneradas, salário mínimo e carteira de trabalho."),
  m("Marque características do fordismo:", ["Linha de montagem", "Produção em massa", "Produtos padronizados", "Estoque zero", "Trabalhador polivalente"], [0, 1, 2], "Estoque zero e trabalhador polivalente são do toyotismo."),
  m("Marque sinais de precarização do trabalho:", ["Falta de carteira assinada", "Jornadas longas sem pausa", "Ausência de férias", "Plano de carreira estável", "Licença médica remunerada"], [0, 1, 2], "Plano de carreira e licença remunerada são proteções, não precarização."),
  o("Compare o fordismo e o toyotismo como modos de organizar a produção.", "O fordismo usa linha de montagem e produção em massa de produtos padronizados, com grandes estoques e operários em tarefas repetitivas. O toyotismo produz sob demanda (just in time), com estoque mínimo, maior variedade de produtos e trabalhadores polivalentes, em equipes.", [
    ["Fordismo: linha de montagem e produção em massa", "linha de montagem", "massa", "padroniz"],
    ["Toyotismo: produção sob demanda / estoque mínimo", "demanda", "just in time", "estoque"],
    ["Toyotismo: trabalhador polivalente", "polivalente", "equipe", "flexivel"],
  ]),
], "n");

extend(SOCIOLOGIA, "Movimentos sociais", [
  q("Movimento social é:", ["Ação coletiva por mudanças", "Uma empresa que busca o lucro dos sócios", "Um partido que está no governo federal", "Uma festa popular realizada na rua"], 0, "Grupos que se organizam para reivindicar direitos ou transformar a sociedade."),
  q("O movimento sufragista lutou pelo:", ["Direito de voto das mulheres", "Fim dos impostos sobre o café", "Direito de greve dos operários", "Fim da monarquia na Inglaterra"], 0, "Sufrágio = voto. No Brasil, as mulheres conquistaram o voto em 1932."),
  q("O movimento negro brasileiro conquistou, entre outras coisas:", ["A lei que criminaliza o racismo", "O fim de todas as eleições", "A volta da escravidão legal", "A proibição de cotas"], 0, "Lutas históricas levaram à Lei Caó (1989), às cotas raciais e ao ensino de história afro-brasileira (Lei 10.639/2003)."),
  q("Os 'novos movimentos sociais' (a partir dos anos 1960) se caracterizam por:", ["Pautas de identidade e meio ambiente", "Defesa só de salários industriais", "Apoio a regimes autoritários", "Fim de qualquer participação"], 0, "Feminismo, ambientalismo, LGBTQIA+ e movimentos étnicos ampliaram as lutas para além do trabalho."),
  q("O MST (Movimento dos Trabalhadores Rurais Sem Terra) reivindica:", ["Reforma agrária", "Privatização das terras", "Fim da agricultura", "Mais latifúndios"], 0, "Luta pela distribuição de terras improdutivas a trabalhadores rurais."),
  q("Ativismo digital é:", ["Mobilização política pela internet", "Venda de produtos em lojas online", "Jogo eletrônico em rede", "Programação de computadores"], 0, "Campanhas, abaixo-assinados e protestos organizados em redes sociais, que podem chegar às ruas."),
  qe("Em junho de 2013, protestos contra o aumento da tarifa de ônibus em São Paulo se espalharam pelo país e passaram a incluir pautas sobre saúde, educação e corrupção.", "O episódio mostra que movimentos sociais podem:", ["Ampliar suas pautas e se espalhar", "Ficar sempre restritos a uma cidade", "Ter apenas um objetivo econômico", "Acontecer sem nenhuma organização"], 0, "As Jornadas de Junho começaram com o transporte e se tornaram protestos amplos e difusos."),
  qe("“Nada sobre nós sem nós.” (lema do movimento das pessoas com deficiência)", "O lema reivindica:", ["Participação nas decisões que os afetam", "Isolamento das pessoas com deficiência", "Fim das políticas de inclusão", "Que outros decidam por eles"], 0, "As pessoas com deficiência exigem participar das políticas que dizem respeito a elas."),
  qe("Greta Thunberg começou em 2018 uma greve escolar solitária pelo clima, que virou o movimento global Fridays for Future.", "O caso exemplifica:", ["Um movimento ambiental de jovens", "Um partido político tradicional", "Uma campanha publicitária de empresa", "Uma ação contra a educação"], 0, "Um ato individual inspirou milhões de jovens a protestar por ações contra a crise climática."),
  qe("“As mulheres negras estão na base da pirâmide social e enfrentam, ao mesmo tempo, racismo e machismo.” (ideia ligada ao feminismo negro)", "O trecho destaca o conceito de:", ["Interseccionalidade", "Solidariedade mecânica", "Tipo ideal weberiano", "Mais-valia absoluta"], 0, "Interseccionalidade (Kimberlé Crenshaw): opressões de raça, gênero e classe se cruzam e se somam."),
  q("Greve é um instrumento usado principalmente por:", ["Trabalhadores organizados", "Empresas para vender mais", "Governos para cobrar impostos", "Bancos para conceder crédito"], 0, "Parar o trabalho coletivamente pressiona por salários e condições melhores; é direito garantido na Constituição."),
  m("Marque exemplos de movimentos sociais:", ["Movimento feminista", "Movimento ambientalista", "Movimento negro", "Bolsa de valores", "Rede de supermercados"], [0, 1, 2], "Bolsa e supermercados são instituições do mercado, não movimentos sociais."),
  m("Marque conquistas associadas a movimentos sociais no Brasil:", ["Voto feminino (1932)", "Abolição da escravidão (1888)", "Diretas Já e redemocratização", "Criação do AI-5", "Fim do direito de greve"], [0, 1, 2], "O AI-5 e o fim do direito de greve foram medidas autoritárias."),
  o("Qual a importância dos movimentos sociais para a democracia? Dê um exemplo.", "Os movimentos sociais dão voz a grupos excluídos, pressionam governos e ampliam direitos, fortalecendo a democracia e a participação. Eles mostram problemas que as instituições ignoram. Ex.: o movimento das mulheres conquistou o voto feminino em 1932; o movimento negro conquistou a criminalização do racismo.", [
    ["Dão voz e pressionam por direitos", "direito", "pression", "voz", "reivindic"],
    ["Ampliam a participação / democracia", "democrac", "particip", "cidadan"],
    ["Exemplo histórico", "voto", "racismo", "abolic", "diretas", "terra", "exemplo"],
  ]),
], "n");

extend(SOCIOLOGIA, "Estado e democracia", [
  q("Para Weber, o Estado moderno se define pelo monopólio:", ["Da força física legítima", "Do comércio de alimentos", "Da produção de cultura", "Da fé religiosa"], 0, "Só o Estado pode usar a força de forma legítima num território."),
  q("Democracia representativa é aquela em que:", ["O povo elege quem decide", "O povo decide tudo em assembleia", "Um rei decide sozinho", "Os militares decidem tudo"], 0, "Os cidadãos escolhem representantes por eleições; no Brasil, presidente, deputados, vereadores etc."),
  q("Estado de bem-estar social (welfare state) é o que:", ["Garante saúde, educação e previdência", "Deixa tudo nas mãos do mercado", "Proíbe serviços públicos gratuitos", "Elimina todos os impostos"], 0, "Criado sobretudo na Europa pós-1945, assegura direitos sociais universais."),
  q("Neoliberalismo defende:", ["Menos Estado na economia", "Estatização de todas as empresas", "Fim da propriedade privada", "Planejamento central total"], 0, "Privatizações, desregulamentação e corte de gastos, com destaque a partir dos anos 1980."),
  q("O Estado laico é aquele que:", ["Não tem religião oficial", "Proíbe qualquer religião", "Segue uma só igreja", "É governado por padres"], 0, "Separa Estado e religião e garante liberdade de crença a todos. O Brasil é laico desde 1891."),
  q("Totalitarismo é o regime que:", ["Controla todas as esferas da vida", "Respeita a oposição política", "Tem imprensa totalmente livre", "Divide o poder entre muitos"], 0, "Partido único, propaganda, terror e controle da vida privada (nazismo, stalinismo), segundo Hannah Arendt."),
  qe("Constituição Federal, art. 2º: “São Poderes da União, independentes e harmônicos entre si, o Legislativo, o Executivo e o Judiciário.”", "O artigo consagra:", ["A separação dos poderes", "O poder absoluto do presidente", "O fim do Judiciário", "A união de todos os poderes"], 0, "Inspirada em Montesquieu, a divisão evita que um poder domine os demais."),
  qe("“A democracia não se resume ao voto: exige imprensa livre, oposição respeitada e direitos garantidos a todos.”", "O texto defende que democracia envolve:", ["Mais do que eleições periódicas", "Apenas votar a cada quatro anos", "O governo de um partido só", "A censura de opiniões"], 0, "Eleições são necessárias, mas não bastam: liberdades e direitos sustentam a democracia."),
  qe("Situação: um país faz eleições, mas o governo controla a imprensa, prende jornalistas e impede candidatos de oposição.", "Esse regime pode ser descrito como:", ["Autoritário", "Democracia plena e bem consolidada", "Monarquia parlamentar constitucional", "Anarquia organizada pelos cidadãos"], 0, "Ter eleições não basta: sem liberdade de imprensa e oposição, o regime é autoritário."),
  qe("Orçamento participativo: em algumas cidades, moradores votam em assembleias de bairro para decidir parte dos investimentos públicos.", "A experiência é um exemplo de:", ["Democracia participativa", "Monarquia absoluta de direito divino", "Ditadura militar com censura", "Totalitarismo de partido único"], 0, "O cidadão participa diretamente de decisões, combinando democracia representativa e participativa."),
  q("Cidadania, no sentido político, envolve principalmente:", ["Direitos e deveres na sociedade", "Ter muito dinheiro guardado", "Morar em cidade grande", "Ser funcionário público"], 0, "Ser cidadão é ter direitos (civis, políticos, sociais) e deveres, e participar da vida pública."),
  m("Marque características de um Estado democrático de direito:", ["Eleições livres", "Separação dos poderes", "Liberdade de imprensa", "Censura prévia", "Prisão de opositores"], [0, 1, 2], "Censura e prisão de opositores são marcas de regimes autoritários."),
  m("Marque formas de participação política direta previstas na Constituição:", ["Plebiscito", "Referendo", "Iniciativa popular de lei", "Ato Institucional", "Decreto secreto"], [0, 1, 2], "Atos institucionais foram instrumentos da ditadura, não de participação."),
  o("Diferencie democracia direta e democracia representativa, com exemplos.", "Na democracia direta, os próprios cidadãos decidem as questões, como em assembleias de Atenas ou num plebiscito. Na democracia representativa, os cidadãos elegem representantes que decidem por eles, como deputados e senadores no Brasil.", [
    ["Direta: o povo decide diretamente", "diretamente", "propri", "assembleia"],
    ["Representativa: elege representantes", "elege", "represent"],
    ["Exemplos", "atenas", "plebiscito", "deputad", "senador", "vereador", "referendo"],
  ]),
], "n");

extend(SOCIOLOGIA, "Cidadania e direitos humanos", [
  q("A Declaração Universal dos Direitos Humanos foi aprovada pela ONU em:", ["1948", "1789", "1988", "2001"], 0, "Após os horrores da Segunda Guerra, a ONU aprovou a Declaração em 10 de dezembro de 1948."),
  q("Direitos humanos são considerados universais porque:", ["Valem para todas as pessoas", "Valem só para cidadãos ricos", "Dependem do país de cada um", "Podem ser vendidos"], 0, "Universalidade: toda pessoa tem direitos pelo simples fato de ser humana."),
  q("Direitos sociais incluem, por exemplo:", ["Saúde e educação", "Voto e candidatura", "Liberdade de ir e vir", "Propriedade de armas"], 0, "Direitos sociais exigem ações do Estado: saúde, educação, moradia, trabalho, previdência."),
  q("Direitos políticos incluem:", ["Votar e ser votado", "Ter saúde pública", "Receber aposentadoria", "Ter moradia digna"], 0, "Participar da vida política: votar, candidatar-se, organizar partidos."),
  q("O ECA (1990) trata dos direitos:", ["De crianças e adolescentes", "Dos idosos acima de 60 anos", "Dos consumidores", "Dos povos indígenas"], 0, "O Estatuto da Criança e do Adolescente garante proteção integral e prioridade absoluta."),
  q("A Lei Maria da Penha (2006) combate:", ["A violência doméstica", "A poluição dos rios das grandes cidades", "A sonegação de impostos pelas empresas", "O trabalho infantil nas plantações"], 0, "Criou mecanismos para coibir a violência doméstica e familiar contra a mulher."),
  qe("Declaração Universal dos Direitos Humanos, art. 1º: “Todos os seres humanos nascem livres e iguais em dignidade e direitos.”", "O artigo afirma a:", ["Igualdade de dignidade de todos", "Superioridade de alguns povos", "Liberdade só dos cidadãos ricos", "Dependência do governo"], 0, "Toda pessoa tem a mesma dignidade, sem distinção de raça, sexo, religião ou origem."),
  qe("“Cidadania não é algo dado de uma vez: foi conquistada aos poucos, com lutas por direitos civis, depois políticos e depois sociais.” (ideia de T. H. Marshall)", "Segundo o texto, a cidadania:", ["É fruto de conquistas históricas", "Sempre existiu igual em tudo", "Depende só da vontade do rei", "É dada pelas empresas"], 0, "Marshall descreve a ampliação histórica dos direitos na Inglaterra: civis (XVIII), políticos (XIX) e sociais (XX)."),
  qe("Situação: uma pessoa é presa sem acusação formal e não pode falar com advogado.", "A situação viola principalmente:", ["Direitos civis", "Direitos sociais", "O direito ao lazer", "O direito à moradia"], 0, "Direitos civis protegem liberdades individuais e garantias como o devido processo legal e a defesa."),
  qe("Dados do Disque 100 mostram milhares de denúncias anuais de violência contra idosos, muitas cometidas por familiares.", "Para proteger esse grupo, o Brasil criou:", ["O Estatuto da Pessoa Idosa", "O Código de Trânsito", "A Lei de Licitações", "O Código Florestal"], 0, "O Estatuto da Pessoa Idosa (2003) garante direitos e punições para violência contra pessoas de 60 anos ou mais."),
  q("Ações afirmativas, como as cotas, buscam:", ["Reduzir desigualdades históricas", "Criar privilégios sem razão", "Excluir grupos da universidade", "Acabar com o ensino público"], 0, "Medidas temporárias para ampliar o acesso de grupos historicamente discriminados."),
  m("Marque direitos sociais previstos na Constituição de 1988:", ["Educação", "Saúde", "Moradia", "Votar aos 16 anos", "Liberdade de imprensa"], [0, 1, 2], "Voto é direito político; liberdade de imprensa, direito civil."),
  m("Marque leis brasileiras de proteção a grupos vulneráveis:", ["ECA", "Lei Maria da Penha", "Estatuto da Pessoa Idosa", "Ato Institucional nº 5", "Lei de Segurança Nacional da ditadura"], [0, 1, 2], "AI-5 e a Lei de Segurança Nacional serviam à repressão."),
  o("Diferencie direitos civis, políticos e sociais, com um exemplo de cada.", "Direitos civis protegem as liberdades individuais, como ir e vir e liberdade de expressão. Direitos políticos permitem participar do poder, como votar e ser votado. Direitos sociais garantem condições de vida digna por meio do Estado, como saúde e educação.", [
    ["Civis: liberdades individuais", "liberdade", "ir e vir", "expressao", "civis"],
    ["Políticos: votar e ser votado", "votar", "voto", "politic"],
    ["Sociais: saúde, educação etc.", "saude", "educac", "moradia", "sociais"],
  ]),
], "n");

extend(SOCIOLOGIA, "Globalização e mídia", [
  q("Globalização é:", ["A integração econômica e cultural do mundo", "O isolamento total dos países", "O fim do comércio internacional", "A volta das fronteiras fechadas"], 0, "Fluxos de mercadorias, capitais, informações e pessoas conectam o planeta, de forma desigual."),
  q("'Aldeia global' foi uma expressão criada por:", ["Marshall McLuhan", "Karl Marx", "Auguste Comte", "Émile Durkheim"], 0, "McLuhan previu que os meios eletrônicos aproximariam o mundo como uma grande aldeia."),
  q("Algoritmos das redes sociais tendem a mostrar:", ["Conteúdos parecidos com nossos gostos", "Opiniões sempre opostas às nossas", "Apenas notícias oficiais do governo", "Conteúdos escolhidos ao acaso"], 0, "Para prender a atenção, priorizam o que já curtimos, formando bolhas de filtro."),
  q("Fake news costumam se espalhar mais rápido porque:", ["Despertam emoções fortes", "São sempre longas e técnicas", "Vêm de fontes oficiais", "Ninguém as compartilha"], 0, "Medo, raiva e surpresa estimulam o compartilhamento; o desmentido costuma ter menor alcance."),
  q("A globalização é chamada de desigual porque:", ["Seus ganhos não chegam a todos", "Todos os países ganham exatamente o mesmo", "Só os países pobres se beneficiam dela", "Ela acabou de vez com toda a pobreza"], 0, "Países e grupos com mais capital e tecnologia ganham mais; outros ficam à margem."),
  q("Homogeneização cultural é a tendência de:", ["Culturas ficarem parecidas", "Cada cultura ficar cada vez mais isolada do resto", "Proibir a venda de produtos estrangeiros", "Aumentar o número de línguas indígenas faladas"], 0, "Marcas, filmes e hábitos globais se espalham; ao mesmo tempo, há resistências e misturas locais."),
  qe("“Hoje, uma camiseta pode ser desenhada nos EUA, ter algodão do Brasil, ser costurada em Bangladesh e vendida na Europa.”", "O texto exemplifica:", ["A produção globalizada", "A autossuficiência dos países", "O fim do comércio mundial", "A economia feudal"], 0, "As etapas da produção se espalham por vários países em busca de custos menores: cadeias globais."),
  qe("Pesquisa: notícias falsas no Twitter tinham 70% mais chance de serem compartilhadas do que as verdadeiras. (MIT, 2018)", "O dado indica que:", ["A desinformação circula mais rápido", "As notícias verdadeiras viralizam mais", "As redes não influenciam ninguém", "As fake news não existem"], 0, "Notícias falsas, novas e emocionantes, se espalham mais rápido, o que exige checagem antes de compartilhar."),
  qe("Situação: um adolescente só vê no feed opiniões iguais às suas e passa a achar que 'todo mundo pensa assim'.", "O fenômeno descrito é:", ["Bolha de filtro", "Solidariedade orgânica", "Mobilidade vertical", "Dominação tradicional"], 0, "O algoritmo filtra o diferente e cria a ilusão de consenso, o que pode aumentar a polarização."),
  qe("“Nunca tantos tiveram tanto acesso à informação; nunca foi tão difícil saber em que acreditar.”", "O paradoxo do texto destaca a importância de:", ["Educação midiática e checagem", "Desligar a internet do país", "Acreditar em tudo o que se lê", "Proibir as redes sociais"], 0, "Com excesso de informação, é preciso saber avaliar fontes, checar dados e identificar manipulação."),
  q("Antes de compartilhar uma notícia, uma boa prática é:", ["Checar fonte e data", "Ler apenas o título chamativo", "Repassar logo para o grupo todo", "Confiar no grupo que mandou a notícia"], 0, "Verificar fonte, data, outros veículos e agências de checagem evita espalhar desinformação."),
  m("Marque características da globalização:", ["Fluxo intenso de capitais", "Comunicação instantânea", "Empresas transnacionais", "Fim das desigualdades", "Isolamento dos países"], [0, 1, 2], "A globalização não acabou com as desigualdades e não isola os países."),
  m("Marque atitudes contra a desinformação:", ["Checar a fonte", "Comparar com outros veículos", "Desconfiar de títulos alarmistas", "Compartilhar sem ler", "Confiar em correntes de mensagem"], [0, 1, 2], "Compartilhar sem ler e confiar em correntes espalham notícias falsas."),
  o("Explique o que são bolhas de filtro e por que elas podem prejudicar o debate público.", "Bolhas de filtro surgem quando os algoritmos das redes mostram só conteúdos parecidos com o que já curtimos. A pessoa passa a ver apenas opiniões que confirmam as suas e acha que todos pensam igual. Isso reduz o contato com o diferente, favorece a polarização e dificulta o diálogo.", [
    ["Algoritmos mostram o que já curtimos", "algoritmo", "curt", "gosto", "parecid"],
    ["Só opiniões que confirmam as nossas", "confirm", "iguais", "mesma"],
    ["Polarização / dificulta o diálogo", "polariz", "dialogo", "debate", "diferente"],
  ]),
], "n");

extend(SOCIOLOGIA, "Questões contemporâneas", [
  q("Racismo estrutural significa que o racismo:", ["Está nas instituições e práticas", "Só aparece em ofensas isoladas", "Acabou com a abolição de 1888", "Existe apenas em outros países"], 0, "Está no funcionamento da sociedade: acesso a emprego, renda, educação, abordagem policial."),
  q("A Lei 10.639/2003 tornou obrigatório nas escolas o ensino de:", ["História e cultura afro-brasileira", "Línguas estrangeiras modernas", "Educação financeira", "Programação de computadores"], 0, "Busca valorizar a contribuição africana e afro-brasileira e combater o racismo."),
  q("Feminicídio é:", ["Assassinato de mulher por ser mulher", "Qualquer crime cometido por mulher", "Uma doença das mulheres", "Um movimento social feminista"], 0, "Homicídio motivado por violência doméstica ou menosprezo à condição de mulher; qualificado no Brasil desde 2015."),
  q("Desenvolvimento sustentável busca equilibrar:", ["Economia, sociedade e meio ambiente", "Apenas o lucro das empresas", "Só a proteção das florestas", "Somente a geração de empregos"], 0, "Atender ao presente sem comprometer as gerações futuras, unindo as três dimensões."),
  q("Refugiado climático é quem precisa sair de sua região por causa de:", ["Desastres e mudanças ambientais", "Turismo e lazer de férias", "Estudos numa universidade", "Promoção no emprego"], 0, "Secas, enchentes e subida do mar já deslocam milhões de pessoas no mundo."),
  q("Racismo ambiental é a situação em que:", ["Os danos ambientais atingem mais a população negra e pobre", "O meio ambiente é preservado igualmente para todos", "Florestas recebem nomes de povos indígenas", "Animais de outras regiões são proibidos"], 0, "Lixões, enchentes e poluição costumam ficar perto de bairros pobres e majoritariamente negros: é a dimensão racial da injustiça ambiental."),
  qe("Segundo o Atlas da Violência, a maioria das vítimas de homicídio no Brasil é formada por jovens negros.", "O dado é frequentemente usado para discutir:", ["O racismo estrutural na violência", "A igualdade de oportunidades", "O fim da violência urbana", "A segurança das áreas nobres"], 0, "A sobrerrepresentação de jovens negros entre as vítimas revela desigualdades raciais estruturais."),
  qe("“A crise climática não atinge a todos igualmente: os mais pobres, que menos poluem, são os que mais sofrem com enchentes e secas.”", "O texto aponta o conceito de:", ["Injustiça ambiental", "Solidariedade mecânica", "Dominação carismática", "Imaginação sociológica"], 0, "Injustiça ambiental: os danos ambientais recaem mais sobre grupos vulneráveis."),
  qe("Situação: numa empresa, as mulheres ocupam 60% dos cargos de entrada, mas apenas 10% da diretoria.", "O fenômeno é conhecido como:", ["Teto de vidro", "Mobilidade horizontal", "Êxodo rural", "Anomia social"], 0, "Teto de vidro: barreiras invisíveis que dificultam a chegada das mulheres aos cargos mais altos."),
  qe("“Envelhecer no Brasil ainda é, para muitos, envelhecer com renda baixa e pouco acesso a cuidados.”", "O texto relaciona o envelhecimento da população a:", ["Desafios de proteção social", "Fim da previdência pública", "Aumento da natalidade", "Ausência de idosos no país"], 0, "Com mais idosos, crescem as demandas por previdência, saúde e cuidado, especialmente para os mais pobres."),
  q("Capacitismo é:", ["Preconceito contra pessoa com deficiência", "Defesa da capacidade de todas as pessoas", "Um tipo de ginástica de reabilitação", "Uma política pública de inclusão escolar"], 0, "Tratar pessoas com deficiência como incapazes ou inferiores; combatido pela Lei Brasileira de Inclusão (2015)."),
  m("Marque exemplos de racismo estrutural:", ["Diferença salarial entre brancos e negros", "Menor presença negra em cargos de chefia", "Abordagem policial seletiva", "Igualdade plena de oportunidades", "Cotas para reduzir desigualdade"], [0, 1, 2], "Igualdade plena seria a ausência do problema; cotas são uma política para combatê-lo."),
  m("Marque leis brasileiras ligadas à igualdade e à inclusão:", ["Lei Maria da Penha", "Lei Brasileira de Inclusão", "Lei de Cotas", "AI-5", "Lei Áurea revogada"], [0, 1, 2], "O AI-5 era repressivo e a Lei Áurea nunca foi revogada."),
  o("O que é racismo estrutural? Dê um exemplo.", "Racismo estrutural é o racismo presente no funcionamento das instituições e da sociedade, não apenas em ofensas individuais. Ele aparece em desigualdades persistentes, como a diferença de salários entre brancos e negros na mesma função ou a menor presença de pessoas negras em cargos de comando.", [
    ["Está nas instituições e estruturas", "institui", "estrutur", "sociedade"],
    ["Não é só ofensa individual", "individual", "ofensa", "nao apenas"],
    ["Exemplo de desigualdade", "salari", "cargo", "violencia", "emprego", "exemplo"],
  ]),
], "n");

extend(SOCIOLOGIA, "Indústria cultural e mídia", [
  qe("“O cinema e o rádio não precisam mais se apresentar como arte. A verdade de que não passam de um negócio eles a utilizam como ideologia.” (Adorno e Horkheimer)", "Os autores afirmam que a indústria cultural:", ["Trata a cultura como negócio", "É arte livre de interesses", "Recusa qualquer lucro", "Estimula o pensamento crítico"], 0, "Para a Escola de Frankfurt, a cultura de massa é produzida como mercadoria e legitima a ordem existente."),
  qe("Situação: um hit é composto por uma equipe que testa refrões em aplicativos e escolhe os que mais 'grudam' na cabeça.", "Segundo a Escola de Frankfurt, isso exemplifica:", ["A padronização da produção cultural", "A criação artística totalmente livre", "A cultura popular espontânea", "O fim da música comercial"], 0, "Fórmulas testadas para agradar o maior público mostram a lógica industrial e padronizada."),
  qe("“A publicidade não vende só produtos: vende estilos de vida, sonhos e identidades.”", "O texto sugere que a publicidade:", ["Associa consumo a identidade", "Informa apenas o preço", "Não influencia ninguém", "É neutra sobre valores"], 0, "Anúncios ligam produtos a status, felicidade e pertencimento, moldando desejos."),
  qe("Dados indicam que adolescentes brasileiros passam, em média, várias horas por dia em redes sociais.", "Do ponto de vista sociológico, esse dado ajuda a discutir:", ["As redes como agentes de socialização", "O fim da escola como instituição social", "A ausência de mídia na vida dos jovens", "O isolamento das famílias da zona rural"], 0, "As redes passaram a ser agentes de socialização, ao lado de família e escola, moldando valores e identidades."),
  q("Agentes de socialização são:", ["Família, escola, mídia e amigos", "Apenas a polícia e o exército", "Somente as empresas privadas", "Só os livros didáticos"], 0, "São as instituições e grupos com que aprendemos normas e valores ao longo da vida."),
  q("Concentração da mídia significa que:", ["Poucos grupos têm muitos veículos", "Cada cidade tem centenas de canais próprios", "Todos os veículos produzem notícias iguais", "O Estado proíbe totalmente a imprensa"], 0, "Poucos grupos donos de TV, rádio e jornal reduzem a pluralidade de vozes."),
  q("Influenciadores digitais exercem poder social principalmente por:", ["Visibilidade e confiança", "Cargos que ocupam no governo federal", "Força militar que controlam diretamente", "Herança de títulos de nobreza antigos"], 0, "Seguidores confiam neles; por isso marcas pagam para alcançar esse público."),
  m("Marque características da indústria cultural segundo Adorno e Horkheimer:", ["Padronização", "Cultura como mercadoria", "Consumo passivo", "Estímulo ao pensamento crítico", "Arte livre do mercado"], [0, 1, 2], "Para eles, a indústria cultural desestimula a crítica e submete a arte ao mercado."),
  m("Marque agentes de socialização:", ["Família", "Escola", "Mídia", "Placas tectônicas", "Fusos horários"], [0, 1, 2], "Placas e fusos são conceitos da geografia física."),
  o("Explique o conceito de indústria cultural e dê um exemplo atual.", "Indústria cultural é o conceito de Adorno e Horkheimer para a produção de cultura em série, como mercadoria, visando o lucro. Ela padroniza gostos e estimula um consumo passivo. Ex.: músicas feitas com fórmulas testadas para viralizar ou séries produzidas a partir de dados de audiência.", [
    ["Cultura produzida como mercadoria", "mercadoria", "lucro", "negocio"],
    ["Padronização / consumo passivo", "padroniz", "passiv", "serie"],
    ["Exemplo atual", "musica", "serie", "filme", "rede", "exemplo", "streaming"],
  ]),
], "n");

// Complemento (mais prática por assunto).
extend(SOCIOLOGIA, "Surgimento da sociologia", [
  q("O termo 'sociologia' foi criado por:", ["Comte", "Marx", "Weber", "Platão"], 0, "Auguste Comte, no século XIX."),
  q("A sociologia surgiu em meio às mudanças da:", ["Revolução Industrial", "Idade Média feudal", "Pré-história humana", "Reforma Agrária de 1960"], 0, "Cidades cheias, fábricas e novos conflitos sociais."),
  q("O positivismo de Comte valorizava:", ["A ciência", "A magia", "A tradição oral", "O misticismo"], 0, "A sociedade deveria ser estudada como a natureza."),
  q("A 'lei dos três estados' de Comte termina no estado:", ["Positivo", "Teológico", "Metafísico", "Mítico"], 0, "Teológico → metafísico → positivo (científico)."),
  qe("O lema 'Ordem e Progresso', na bandeira brasileira, veio de ideias de Comte.", "Isso mostra a influência no Brasil do:", ["Positivismo", "Marxismo", "Anarquismo", "Feudalismo"], 0, "Os republicanos de 1889 admiravam Comte."),
  qe("Um sociólogo estranha algo comum, como o hábito de usar celular à mesa, e pergunta por que isso virou normal.", "Esse exercício é chamado de:", ["Desnaturalização", "Etnocentrismo cultural", "Alienação do trabalho", "Anomia das normas"], 0, "Ver o familiar como algo construído socialmente."),
  q("A 'imaginação sociológica', de Wright Mills, liga:", ["O pessoal ao social", "Sonhos e mitos antigos", "Clima e humor das pessoas", "Arte e religião popular"], 0, "Ex.: o desemprego de uma pessoa ligado à crise econômica."),
  q("A sociologia estuda principalmente:", ["As relações sociais", "Os astros e planetas", "As rochas e o relevo", "As células e os tecidos"], 0, "Grupos, instituições, interações e mudanças sociais."),
], "n");

extend(SOCIOLOGIA, "Durkheim", [
  q("Para Durkheim, a sociologia deve tratar os fatos sociais como:", ["Coisas", "Sentimentos", "Sonhos", "Mitos"], 0, "Com objetividade, como o cientista observa a natureza."),
  q("A solidariedade mecânica aparece em sociedades:", ["Simples", "Industriais e urbanas", "Grandes e muito diversas", "Globalizadas e conectadas"], 0, "Laços pela semelhança entre os membros."),
  q("A solidariedade orgânica se baseia:", ["Na interdependência", "Na semelhança entre todos", "No acaso dos encontros", "Na força física do grupo"], 0, "Cada um faz uma função, como órgãos de um corpo."),
  q("Para Durkheim, a educação serve para:", ["Integrar à sociedade", "Criar jovens rebeldes", "Separar as classes sociais", "Acabar com todas as regras"], 0, "Transmite normas e valores às novas gerações."),
  qe("Durkheim mostrou que a taxa de suicídio varia conforme religião, estado civil e momento econômico.", "Isso indica que o suicídio também é:", ["Um fato social", "Só um fato biológico", "Só um ato individual", "Um mito"], 0, "Há causas sociais por trás de decisões aparentemente pessoais."),
  qe("Uma pessoa que usa roupa de praia num velório recebe olhares de reprovação.", "Esses olhares mostram a característica do fato social chamada:", ["Coercitividade", "Generalidade", "Exterioridade", "Liberdade"], 0, "A sociedade pressiona quem foge das normas."),
  q("Para Durkheim, a anomia surge quando:", ["As normas perdem força", "As leis aumentam", "A religião cresce", "A economia é estável"], 0, "Falta de regras claras gera desorientação."),
  q("A divisão do trabalho, para Durkheim, gera:", ["Solidariedade orgânica", "Anomia em todos os casos", "Luta de classes inevitável", "Volta ao feudalismo"], 0, "Bem regulada, aumenta a interdependência."),
], "n");

extend(SOCIOLOGIA, "Weber", [
  q("Para Weber, a sociologia deve compreender:", ["O sentido da ação", "Apenas números e dados", "Só a economia do país", "A vontade divina na história"], 0, "Sociologia compreensiva."),
  q("A dominação carismática se baseia:", ["No líder", "Na tradição dos antigos", "Nas leis escritas e impessoais", "Na herança de sangue real"], 0, "Ex.: profetas, heróis e líderes populistas."),
  q("A dominação racional-legal se baseia:", ["Em regras impessoais", "No carisma de um líder", "Na tradição dos avós", "Na força bruta do exército"], 0, "Típica dos Estados modernos e das burocracias."),
  q("Weber estudou a relação entre a ética protestante e o:", ["Capitalismo", "Feudalismo", "Socialismo", "Escravismo"], 0, "O trabalho e a poupança como sinais de eleição divina."),
  qe("Weber disse que o mundo moderno vive um 'desencantamento': explicações mágicas dão lugar ao cálculo e à ciência.", "Esse processo está ligado à:", ["Racionalização", "Anomia", "Mais-valia", "Solidariedade mecânica"], 0, "A razão técnica organiza cada vez mais a vida."),
  qe("Um funcionário público decide pela regra, não por amizade com quem pede o serviço.", "Isso é típico da:", ["Burocracia", "Dominação carismática", "Dominação tradicional", "Anarquia"], 0, "Impessoalidade e hierarquia."),
  q("Para Weber, o Estado tem o monopólio:", ["Da violência legítima", "Da economia nacional", "Da religião oficial", "Da cultura popular"], 0, "Só ele pode usar a força de forma legal."),
  q("A ação social tradicional é guiada por:", ["Costumes", "Cálculo de meios e fins", "Emoções do momento", "Leis escritas do Estado"], 0, "'Sempre foi assim'."),
], "n");

extend(SOCIOLOGIA, "Marx", [
  q("Para Marx, a burguesia é a classe que:", ["Possui os meios de produção", "Vende sua força de trabalho", "Vive no campo", "Governa por herança divina"], 0, "Proletariado = quem vende a força de trabalho."),
  q("O 'exército industrial de reserva' são:", ["Os desempregados", "Os soldados do exército", "Os patrões das fábricas", "Os fiscais do governo"], 0, "Pressionam os salários para baixo."),
  q("A ideologia, para Marx, serve para:", ["Ocultar a dominação", "Revelar a verdade social", "Acabar com as classes", "Unir todos os povos"], 0, "Faz a desigualdade parecer natural."),
  q("O fetichismo da mercadoria faz as pessoas:", ["Esquecerem o trabalho", "Valorizarem mais o trabalhador", "Produzirem menos mercadorias", "Comprarem menos produtos"], 0, "Objetos parecem ter valor 'mágico'."),
  qe("Marx: 'Os filósofos apenas interpretaram o mundo; a questão é transformá-lo.'", "Para Marx, o pensamento deve levar à:", ["Ação", "Contemplação", "Fuga da política", "Obediência"], 0, "Práxis: pensar para mudar a realidade."),
  qe("Um entregador de aplicativo trabalha 12 horas por dia sem direitos trabalhistas.", "Um marxista diria que isso aumenta a:", ["Exploração", "Solidariedade", "Igualdade", "Liberdade"], 0, "Mais trabalho não pago e menos proteção."),
  q("Para Marx, a superação do capitalismo levaria ao:", ["Socialismo", "Feudalismo", "Absolutismo", "Mercantilismo"], 0, "E depois a uma sociedade sem classes (comunismo)."),
  q("O 'Manifesto Comunista' foi escrito por Marx e:", ["Engels", "Weber", "Comte", "Durkheim"], 0, "Publicado em 1848."),
], "n");

extend(SOCIOLOGIA, "Cultura e identidade", [
  q("Relativismo cultural é:", ["Respeitar cada cultura", "Julgar outras culturas pela nossa", "Negar a existência das culturas", "Copiar a cultura dominante"], 0, "Oposto do etnocentrismo."),
  q("Aculturação é:", ["Mudança pelo contato", "Falta total de cultura", "Cultura da elite letrada", "Cultura de massa da TV"], 0, "Duas culturas em contato se transformam."),
  q("Patrimônio imaterial inclui:", ["Festas e saberes", "Prédios históricos", "Esculturas de bronze", "Estradas coloniais"], 0, "Ex.: frevo, samba de roda, capoeira."),
  q("Contracultura é:", ["Oposição aos valores dominantes", "Cultura oficial do governo", "Folclore das regiões", "Cultura de massa da TV"], 0, "Ex.: movimento hippie nos anos 1960."),
  qe("Em uma escola, alunos riem de um colega que fala com sotaque nordestino.", "Esse comportamento é um exemplo de:", ["Preconceito linguístico", "Relativismo cultural", "Hibridismo de culturas", "Tolerância à diferença"], 0, "Variação linguística não é erro."),
  qe("O funk carioca, antes perseguido, hoje é tocado em festas de todas as classes e no exterior.", "Isso mostra que a cultura:", ["É dinâmica", "É imutável", "Pertence a uma classe", "Não circula"], 0, "Culturas se transformam e circulam."),
  q("Identidade cultural é:", ["Sentir-se parte de um grupo", "Um documento oficial", "Uma lei do país", "Uma etnia biológica"], 0, "Construída por língua, costumes, história."),
  q("Apropriação cultural é discutida quando:", ["Há uso desrespeitoso de símbolos", "Há troca igual entre culturas", "Não existe contato entre povos", "Leis protegem todas as culturas"], 0, "Debate sobre poder e reconhecimento."),
], "n");

extend(SOCIOLOGIA, "Desigualdade e estratificação", [
  q("Num índice de Gini próximo de 1, a renda está:", ["Concentrada", "Bem distribuída", "Totalmente igual", "Sem dados medidos"], 0, "0 = igualdade total; 1 = desigualdade máxima."),
  q("Quando regras e práticas das instituições reproduzem desvantagens raciais, fala-se em racismo:", ["Estrutural", "Reverso", "Individual apenas", "Ambiental"], 0, "Não depende só de atitudes individuais."),
  q("Meritocracia pura é criticada porque:", ["Ignora pontos de partida", "Valoriza o esforço pessoal", "É justa em todos os casos", "Não existe em nenhum país"], 0, "Nem todos têm as mesmas oportunidades."),
  q("Pobreza multidimensional considera:", ["Várias carências", "Só a renda mensal", "Só a altura das pessoas", "Só o clima da região"], 0, "A pobreza vai além do dinheiro."),
  qe("No Brasil, os 10% mais ricos ficam com cerca de metade da renda nacional.", "O dado revela:", ["Concentração de renda", "Igualdade social plena", "O fim da pobreza no país", "Mobilidade social total"], 0, "O Brasil está entre os países mais desiguais do mundo."),
  qe("Mulheres negras recebem, em média, menos que homens brancos na mesma função.", "Esse dado ilustra a:", ["Interseccionalidade", "Mobilidade ascendente", "Solidariedade mecânica", "Igualdade de gênero"], 0, "Gênero e raça somam desvantagens."),
  q("Bourdieu chama de 'capital cultural':", ["Saberes valorizados", "Dinheiro guardado no banco", "Terras herdadas da família", "Fábricas e máquinas próprias"], 0, "Ajuda a explicar desempenho escolar desigual."),
  q("Ações afirmativas buscam:", ["Reduzir desigualdades", "Aumentar privilégios antigos", "Acabar com as escolas", "Proibir o voto popular"], 0, "Ex.: cotas raciais e sociais."),
], "n");

extend(SOCIOLOGIA, "Trabalho e sociedade", [
  q("A 'uberização' do trabalho se refere a:", ["Trabalho por app sem vínculo", "Carteira assinada e direitos", "Trabalho no serviço público", "Sindicatos fortes e ativos"], 0, "Autonomia aparente e pouca proteção."),
  q("A terceirização é:", ["Contratar outra empresa", "Ter três empregos ao mesmo tempo", "Trabalho infantil nas fábricas", "Aposentadoria antes da hora"], 0, "Pode reduzir custos e direitos."),
  q("O desemprego estrutural é causado por:", ["Novas tecnologias", "Férias coletivas no fim do ano", "Feriados prolongados no país", "Clima ruim no inverno"], 0, "Postos substituídos por máquinas e softwares."),
  q("A CLT garante, entre outros direitos:", ["Férias e 13º salário", "Fim dos impostos", "Lucro garantido", "Emprego vitalício"], 0, "Consolidação das Leis do Trabalho, de 1943."),
  qe("Em 2023, centenas de trabalhadores foram resgatados de vinícolas no Rio Grande do Sul em condições degradantes.", "Essa situação é chamada de:", ["Trabalho escravo", "Trabalho voluntário", "Estágio remunerado", "Home office flexível"], 0, "Jornadas exaustivas, dívidas e violência."),
  qe("Um jovem trabalha como entregador de dia e faz faculdade à noite, sem tempo para descansar.", "Essa rotina ilustra a:", ["Precarização", "Ociosidade dos jovens", "Riqueza herdada da família", "Estabilidade no emprego público"], 0, "Muitos estudantes trabalham para se sustentar."),
  q("O trabalho doméstico não pago é feito principalmente por:", ["Mulheres", "Robôs", "Empresas", "Governos"], 0, "Parte da dupla jornada feminina."),
  q("O toyotismo exige trabalhadores:", ["Polivalentes", "Que façam só uma tarefa", "Sem formação", "Sem metas"], 0, "Flexibilidade e trabalho em equipe."),
], "n");

extend(SOCIOLOGIA, "Movimentos sociais", [
  q("O movimento sufragista lutava pelo:", ["Voto feminino", "Fim do voto", "Voto censitário", "Voto dos reis"], 0, "No Brasil, conquistado em 1932."),
  q("O movimento negro conquistou no Brasil:", ["Cotas e lei antirracismo", "O fim da República", "O voto censitário", "A volta da monarquia"], 0, "Também o ensino de história afro-brasileira (Lei 10.639)."),
  q("Movimentos ambientalistas lutam por:", ["Preservação", "Mais desmatamento legal", "Fim dos parques nacionais", "Liberação da poluição"], 0, "Ex.: Chico Mendes e os seringueiros."),
  q("O movimento LGBTQIA+ conquistou no Brasil:", ["O casamento civil", "A proibição de direitos", "O fim do voto direto", "A censura de filmes"], 0, "Por decisão do STF (2011) e do CNJ (2013)."),
  qe("Em 1978, metalúrgicos do ABC fizeram greves que desafiaram a ditadura.", "Esse movimento ficou conhecido como:", ["Novo sindicalismo", "Tenentismo militar", "Coronelismo rural", "Integralismo fascista"], 0, "Daí surgiu a CUT e o PT."),
  qe("Estudantes ocuparam escolas em São Paulo em 2015 contra o fechamento de unidades.", "Esse movimento mostra:", ["Participação juvenil", "Desinteresse total por política", "Apoio ao fechamento das escolas", "O fim da escola pública"], 0, "O governo recuou da reorganização escolar."),
  q("Movimentos indígenas lutam principalmente por:", ["Demarcação de terras", "Fim das florestas", "Mineração livre", "Fim da cultura"], 0, "A terra é base da vida e da cultura."),
  q("Hashtags e petições online são formas de:", ["Ativismo digital", "Censura prévia", "Voto eletrônico", "Comércio digital"], 0, "Mobilizam pessoas, mas críticos falam em 'ativismo de sofá'."),
], "n");

extend(SOCIOLOGIA, "Estado e democracia", [
  q("O Estado moderno tem como elementos:", ["Povo, território e soberania", "Rei, igreja e exército feudal", "Moeda, banco e bolsa de valores", "Clima, solo e rios do país"], 0, "Também um governo que exerce o poder."),
  q("A separação de poderes busca:", ["Evitar abusos", "Concentrar poder", "Acabar com eleições", "Fortalecer o rei"], 0, "Legislativo, Executivo e Judiciário se controlam."),
  q("Plebiscito e referendo são formas de:", ["Democracia direta", "Ditadura militar", "Monarquia absoluta", "Censura prévia"], 0, "O povo decide diretamente."),
  q("O Estado de bem-estar social garante:", ["Direitos sociais", "Só a segurança pública", "Nenhum serviço público", "Só a cobrança de impostos"], 0, "Welfare State, forte na Europa após 1945."),
  qe("O neoliberalismo defende privatizações, corte de gastos e menos regulação.", "Ele se opõe ao:", ["Estado de bem-estar", "Mercado livre global", "Capitalismo financeiro", "Comércio internacional"], 0, "Críticos dizem que aumenta desigualdades."),
  qe("Em 1993, um plebiscito no Brasil decidiu entre república e monarquia, presidencialismo e parlamentarismo.", "Venceram:", ["República e presidencialismo", "Monarquia e parlamentarismo", "República e parlamentarismo", "Monarquia e presidencialismo"], 0, "O sistema atual foi mantido."),
  q("Totalitarismo é:", ["Controle total do Estado", "Democracia plena e livre", "Federalismo entre estados", "Anarquia sem governo"], 0, "Ex.: nazismo e stalinismo."),
  q("O habeas corpus protege o direito:", ["De ir e vir", "De votar em branco", "De receber herança", "De abrir empresa"], 0, "Garante que ninguém seja preso ilegalmente."),
], "n");

extend(SOCIOLOGIA, "Cidadania e direitos humanos", [
  q("A Declaração Universal dos Direitos Humanos é de:", ["1948", "1789", "1988", "1945"], 0, "Aprovada pela ONU após a Segunda Guerra."),
  q("Para Marshall, a cidadania inclui direitos:", ["Civis, políticos e sociais", "Só econômicos e de mercado", "Só religiosos e de culto", "Só militares e de defesa"], 0, "Conquistados em etapas na Inglaterra."),
  q("Direitos sociais incluem:", ["Saúde e educação", "Voto e candidatura", "Liberdade de ir e vir", "Propriedade"], 0, "Garantidos pelo artigo 6º da Constituição."),
  q("Ser candidato a vereador é um direito:", ["Político", "Social", "Ambiental", "Trabalhista"], 0, "Direitos políticos: votar e ser votado."),
  qe("José Murilo de Carvalho diz que no Brasil os direitos sociais vieram antes dos políticos, com Vargas.", "Isso é diferente do modelo inglês, em que vieram primeiro os direitos:", ["Civis", "Sociais", "Ambientais", "Digitais"], 0, "Na Inglaterra: civis → políticos → sociais."),
  qe("Uma escola pública sem rampas impede um aluno cadeirante de frequentar as aulas.", "Esse caso viola o direito à:", ["Acessibilidade", "Propriedade privada", "Liberdade religiosa", "Herança familiar"], 0, "Garantido pela Lei Brasileira de Inclusão (2015)."),
  q("O ECA protege:", ["Crianças", "Idosos aposentados", "Empresas privadas", "Partidos políticos"], 0, "Estatuto da Criança e do Adolescente, de 1990."),
  q("Direitos humanos são:", ["Universais", "Só para cidadãos", "Só para ricos", "Opcionais"], 0, "Valem para todos, sem distinção."),
], "n");

extend(SOCIOLOGIA, "Globalização e mídia", [
  q("A 'aldeia global' é um conceito de:", ["McLuhan", "Marx", "Comte", "Durkheim"], 0, "A mídia conecta o mundo como uma aldeia."),
  q("Fake news são:", ["Notícias falsas", "Notícias novas", "Notícias pagas", "Notícias antigas"], 0, "Espalham desinformação, muitas vezes de propósito."),
  q("A 'bolha' das redes sociais ocorre porque os algoritmos:", ["Repetem o que você curte", "Mostram tudo igual a todos", "Desligam a internet à noite", "Bloqueiam os amigos antigos"], 0, "Reduz o contato com opiniões diferentes."),
  q("Concentração da mídia é:", ["Poucos donos de meios", "Muitos jornais diferentes", "O fim da televisão aberta", "Internet livre para todos"], 0, "Pode limitar a pluralidade de vozes."),
  qe("Um vídeo falso de um político viraliza antes da eleição e é visto por milhões.", "Um risco disso para a democracia é:", ["Manipular o voto", "Aumentar a informação", "Acabar com a internet", "Fortalecer o debate"], 0, "Desinformação afeta escolhas."),
  qe("Ao ver uma notícia chocante, a pessoa verifica a fonte, a data e procura em outros sites antes de compartilhar.", "Essa atitude é chamada de:", ["Checagem", "Censura prévia", "Alienação política", "Viralização de posts"], 0, "Educação midiática combate fake news."),
  q("Influenciadores digitais exercem:", ["Influência", "Poder judiciário", "Poder militar", "Nenhum tipo de poder"], 0, "Afetam hábitos, compras e opiniões."),
  q("A hibridização cultural é:", ["Mistura de culturas", "Fim de todas as culturas", "Cultura pura e isolada", "Cultura proibida pelo Estado"], 0, "Ex.: K-pop cantado em português."),
], "n");

extend(SOCIOLOGIA, "Questões contemporâneas", [
  q("O racismo ambiental ocorre quando:", ["Os vulneráveis sofrem mais", "Todos sofrem igualmente", "Não existe poluição alguma", "Os ricos sofrem mais que todos"], 0, "Ex.: lixões perto de bairros pobres."),
  q("Quando migrantes são hostilizados por serem estrangeiros, ocorre:", ["Xenofobia", "Relativismo", "Aculturação", "Meritocracia"], 0, "Aversão a estrangeiros; atinge migrantes e refugiados."),
  q("Gordofobia é:", ["Preconceito", "Dieta saudável e equilibrada", "Esporte de academia", "Tipo de comida rápida"], 0, "Discriminação no trabalho, na saúde e nas redes."),
  q("O envelhecimento da população exige:", ["Políticas para idosos", "Menos hospitais", "Fim da previdência", "Menos escolas técnicas"], 0, "Saúde, cuidado e acessibilidade."),
  qe("Muitos jovens relatam ansiedade ligada a comparações nas redes sociais.", "Uma leitura sociológica diz que esse problema:", ["Tem causas sociais", "É só individual e íntimo", "Não existe de verdade", "É apenas genético"], 0, "Padrões de beleza e sucesso são construídos socialmente."),
  qe("Em grandes cidades, motoristas de aplicativo trabalham longas horas para pagar o aluguel do carro.", "Esse cenário levanta debates sobre:", ["Direitos trabalhistas", "Fim dos carros", "Turismo urbano", "Moda e estilo"], 0, "Discussão sobre vínculos e proteção social."),
  q("A Lei do Feminicídio (2015) trata do assassinato de mulheres:", ["Por razões de gênero", "Em acidentes de trânsito", "Por doenças contagiosas", "Em assaltos comuns na rua"], 0, "Qualificadora do homicídio, com pena maior."),
  q("Inclusão digital busca:", ["Acesso à tecnologia", "Proibir celulares nas ruas", "Fechar escolas técnicas", "Aumentar o preço da internet"], 0, "A exclusão digital amplia desigualdades."),
], "n");

extend(SOCIOLOGIA, "Indústria cultural e mídia", [
  q("Adorno e Horkheimer pertenciam à:", ["Escola de Frankfurt", "Escola de Chicago", "Escola de Sagres", "Academia de Platão"], 0, "Criaram o conceito de indústria cultural nos anos 1940."),
  q("Para Adorno, a indústria cultural:", ["Padroniza a arte", "Liberta o público da alienação", "Acaba com o lucro das empresas", "Cria obras únicas e raras"], 0, "Produtos culturais em série para o consumo."),
  q("Cultura de massa é:", ["Feita para grandes públicos", "Feita por uma só pessoa", "Só a cultura erudita", "Proibida pelo governo"], 0, "Ex.: novelas, hits, blockbusters."),
  q("Walter Benjamin discutiu a perda da 'aura' da obra de arte pela:", ["Reprodução técnica", "Pintura a óleo em tela", "Escultura em mármore", "Censura do Estado"], 0, "Fotografia e cinema multiplicam as obras."),
  qe("Plataformas de música recomendam sempre artistas parecidos com os que você já ouve.", "Para a teoria crítica, isso reforça a:", ["Padronização do gosto", "Diversidade cultural", "Arte de vanguarda", "Autonomia total"], 0, "Algoritmos favorecem o que já é popular."),
  qe("Uma novela lança um figurino que vira moda e é vendido em lojas do país todo.", "Isso mostra a relação entre mídia e:", ["Consumo", "Religião", "Clima", "Esporte"], 0, "A indústria cultural estimula o consumo."),
  q("Para Adorno, o público da indústria cultural tende a ser:", ["Passivo", "Crítico sempre", "Produtor", "Rebelde"], 0, "Recebe produtos prontos que pedem pouca reflexão."),
  q("Uma crítica à visão de Adorno é que ela:", ["Ignora o público ativo", "Valoriza demais o público", "Defende o lucro das empresas", "Nega a existência da arte"], 0, "Estudos culturais mostram que o público reinterpreta o que consome."),
], "n");
