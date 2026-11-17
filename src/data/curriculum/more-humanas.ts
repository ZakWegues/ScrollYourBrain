import { PORTUGUES } from "./linguagens";
import { more } from "./more";
import { BIOLOGIA, GEOGRAFIA, HISTORIA } from "./natureza-humanas";

const B = BIOLOGIA;
more(B, 1, 1, [
  ["Proteínas são formadas por:", ["Nucleotídeos", "Aminoácidos", "Ácidos graxos", "Monossacarídeos"], 1, "Proteínas são cadeias de aminoácidos unidos por ligações peptídicas. Nucleotídeos formam DNA e RNA; monossacarídeos formam os carboidratos."],
  ["Qual é a principal função dos lipídios?", ["Catalisar reações químicas nas células", "Reserva de energia e membranas", "Transportar oxigênio no sangue", "Guardar a informação genética da célula"], 1, "Lipídios guardam energia (gordura), formam as membranas (fosfolipídios) e isolam o calor. Catalisar reações é papel das enzimas, que são proteínas."],
  ["A falta de qual vitamina causa escorbuto?", ["A", "C", "D", "K"], 1, "Escorbuto (gengivas que sangram) vem da falta de vitamina C, presente em frutas cítricas. Falta de D causa raquitismo; de A, problemas de visão."],
]);
more(B, 1, 2, [
  ["Qual organela realiza a respiração celular?", ["Cloroplasto", "Mitocôndria", "Complexo golgiense", "Vacúolo"], 1, "A mitocôndria quebra a glicose com oxigênio e produz ATP. O cloroplasto faz o oposto (fotossíntese) e só existe em plantas e algas."],
  ["Onde ocorre a síntese de proteínas?", ["Lisossomos", "Ribossomos", "Centríolos", "Peroxissomos"], 1, "Os ribossomos leem o RNA mensageiro e unem aminoácidos (tradução). Lisossomos fazem digestão celular; centríolos ajudam na divisão."],
  ["A membrana plasmática é:", ["Totalmente impermeável", "Seletivamente permeável", "Rígida, como a parede celular", "Exclusiva das células vegetais"], 1, "É seletivamente permeável: deixa passar algumas substâncias e barra outras, controlando o que entra e sai. A parede celular rígida é de plantas, fungos e bactérias."],
]);
more(B, 1, 3, [
  ["Célula humana com 46 cromossomos faz mitose. Cada célula-filha terá:", ["23", "46", "92", "12"], 1, "A mitose produz duas células idênticas à mãe, com o mesmo número de cromossomos: 46. Quem reduz para 23 é a meiose."],
  ["Em que fase ocorre o crossing-over?", ["Mitose", "Meiose I", "Interfase", "Citocinese"], 1, "Na prófase I da meiose, cromossomos homólogos trocam pedaços. Isso mistura genes e aumenta a variabilidade dos gametas."],
  ["Gametas humanos têm quantos cromossomos?", ["23", "46", "92", "44"], 0, "Gametas são haploides (n = 23): na fecundação, 23 do óvulo + 23 do espermatozoide recompõem os 46 do zigoto."],
]);
more(B, 1, 4, [
  ["O sangue é um tecido:", ["Epitelial", "Conjuntivo", "Muscular", "Nervoso"], 1, "O sangue é tecido conjuntivo de matriz líquida (o plasma), com hemácias, leucócitos e plaquetas. Conjuntivo é o tecido de ligação e transporte."],
  ["O neurônio pertence ao tecido:", ["Conjuntivo", "Muscular", "Nervoso", "Epitelial"], 2, "O neurônio é a célula do tecido nervoso: recebe e conduz impulsos elétricos pelos dendritos, corpo celular e axônio."],
  ["O músculo do coração é:", ["Liso", "Estriado esquelético", "Estriado cardíaco", "Conjuntivo"], 2, "O miocárdio é estriado cardíaco: tem estrias como o esquelético, mas contrai de forma involuntária e rítmica, como o liso."],
]);
more(B, 2, 1, [
  ["Qual destas doenças é causada por uma bactéria?", ["Gripe", "Tuberculose", "Dengue", "Sarampo"], 1, "Tuberculose é causada pelo bacilo de Koch (Mycobacterium tuberculosis) e trata-se com antibiótico. Gripe, dengue e sarampo são virais."],
  ["Malária é causada por:", ["Vírus", "Bactéria", "Protozoário", "Fungo"], 2, "Pelo protozoário Plasmodium, transmitido pela picada da fêmea do mosquito Anopheles. Não confundir com a dengue, que é vírus (Aedes)."],
  ["Fungos são:", ["Autótrofos", "Heterótrofos", "Plantas sem flor", "Bactérias"], 1, "Fungos são heterótrofos: não fazem fotossíntese. Liberam enzimas que digerem o alimento fora do corpo e depois absorvem os nutrientes."],
]);
more(B, 2, 2, [
  ["Quais plantas não têm vasos condutores?", ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"], 0, "Briófitas (musgos) não têm xilema e floema: a água passa célula a célula. Por isso são pequenas e vivem em lugares úmidos."],
  ["Estômatos servem para:", ["Absorver água e sais do solo", "Trocas gasosas e transpiração", "Fixar a planta no solo", "Produzir as sementes da planta"], 1, "Estômatos são poros das folhas que abrem e fecham para trocar gases (entra CO₂, sai O₂) e perder vapor d'água (transpiração)."],
  ["O fruto se forma a partir do:", ["Estame", "Ovário da flor", "Caule", "Grão de pólen"], 1, "Após a fecundação, o ovário da flor se desenvolve e vira o fruto; os óvulos dentro dele viram as sementes."],
]);
more(B, 2, 3, [
  ["Insetos têm quantas patas?", ["4", "6", "8", "10"], 1, "Insetos têm 6 patas (3 pares), corpo em cabeça, tórax e abdome e um par de antenas. 8 patas são dos aracnídeos."],
  ["Aranhas são:", ["Insetos", "Aracnídeos", "Crustáceos", "Moluscos"], 1, "Aranhas são aracnídeos: 8 patas, sem antenas e corpo em cefalotórax e abdome. Insetos têm 6 patas."],
  ["Como os peixes respiram?", ["Pulmonar", "Branquial", "Cutânea apenas", "Traqueal"], 1, "Peixes têm respiração branquial: as brânquias retiram o oxigênio dissolvido na água. Respiração traqueal é dos insetos."],
]);
more(B, 2, 4, [
  ["Qual órgão filtra o sangue e forma a urina?", ["Fígado", "Rim", "Pâncreas", "Baço"], 1, "Os rins filtram o sangue nos néfrons, retiram ureia e excesso de sais e formam a urina. O fígado produz a ureia, mas não filtra o sangue assim."],
  ["Hemácias transportam:", ["Anticorpos", "Oxigênio", "Hormônios apenas", "Glicose apenas"], 1, "As hemácias têm hemoglobina, que se liga ao oxigênio nos pulmões e o leva aos tecidos. Anticorpos são produzidos por linfócitos."],
  ["Vacinas funcionam porque:", ["Matam o vírus já instalado no corpo", "Estimulam a memória imunológica", "Agem como antibióticos no sangue", "Sempre trazem anticorpos prontos de outro animal"], 1, "A vacina apresenta ao corpo o antígeno (enfraquecido, inativado ou parte dele). O corpo produz anticorpos e células de memória: imunização ativa."],
]);
more(B, 3, 1, [
  ["Indivíduo aa com alelo recessivo para albinismo é:", ["Normal", "Albino", "Portador saudável", "Heterozigoto"], 1, "Um alelo recessivo só aparece em dose dupla: aa é albino. Aa é heterozigoto e portador, com pigmentação normal."],
  ["Pais Aa × aa: qual a probabilidade de um filho aa?", ["0", "1/4", "1/2", "1"], 2, "Aa dá gametas A ou a (1/2 cada); aa só dá a. Filhos: Aa ou aa, metade cada → 1/2. É o cruzamento-teste."],
  ["Qual tipo sanguíneo é doador universal no sistema ABO?", ["A", "B", "AB", "O"], 3, "O tipo O não tem antígenos A nem B nas hemácias, então não é atacado pelos anticorpos do receptor. AB é o receptor universal."],
]);
more(B, 3, 2, [
  ["A sequência ATG no DNA é transcrita no RNA como:", ["TAC", "UAC", "AUG", "ATG"], 1, "Na transcrição, cada base do DNA chama a complementar no RNA: A→U, T→A, G→C. ATG vira UAC (no RNA não há T)."],
  ["Clonagem produz organismos:", ["Diferentes entre si", "Geneticamente idênticos", "Sempre transgênicos", "Sempre estéreis"], 1, "Clones têm o mesmo material genético do original (ex.: ovelha Dolly). Podem diferir em aparência por influência do ambiente."],
  ["O DNA fica principalmente no:", ["Citoplasma", "Núcleo", "Ribossomo", "Lisossomo"], 1, "Nas células eucariontes, o DNA fica no núcleo, organizado em cromossomos. Há um pouco também nas mitocôndrias e nos cloroplastos."],
]);
more(B, 3, 3, [
  ["Bactérias resistentes a antibióticos surgem por:", ["Herança do que foi adquirido", "Seleção natural de resistentes", "Geração espontânea de mutantes", "Uso e desuso do antibiótico"], 1, "Algumas bactérias já nascem resistentes por mutação. O antibiótico mata as outras e as resistentes se multiplicam: seleção natural."],
  ["Fósseis são evidências de:", ["Geração espontânea", "Evolução", "Fixismo", "Criação recente"], 1, "Fósseis mostram seres extintos e formas de transição (como o Archaeopteryx, entre répteis e aves): evidência de que as espécies mudam."],
  ["Especiação ocorre muitas vezes após:", ["Isolamento geográfico e reprodutivo", "Aumento da temperatura média", "Clonagem natural de indivíduos", "Uso e desuso de órgãos ao longo da vida"], 0, "Populações separadas (rio, montanha) acumulam mutações e seleções diferentes até não conseguirem mais se reproduzir entre si: nova espécie."],
]);
more(B, 3, 4, [
  ["Como se chamam os seres que produzem o próprio alimento?", ["Consumidores", "Produtores", "Decompositores", "Parasitas"], 1, "Produtores (autótrofos): plantas, algas e algumas bactérias fazem fotossíntese ou quimiossíntese. Consumidores dependem deles."],
  ["Que relação ecológica existe entre o carrapato e o cachorro?", ["Mutualismo", "Parasitismo", "Comensalismo", "Predatismo"], 1, "Parasitismo: o carrapato se alimenta do sangue do cão e o prejudica, sem matá-lo de imediato. No mutualismo, os dois ganham."],
  ["Bioacumulação: o poluente fica mais concentrado:", ["Nos produtores", "Nos níveis tróficos mais altos", "Somente no solo", "Nos decompositores"], 1, "Poluentes como mercúrio e DDT não são eliminados e se acumulam a cada nível da cadeia: o predador do topo concentra mais."],
]);

const H = HISTORIA;
more(H, 1, 1, [
  ["A escrita cuneiforme surgiu na:", ["Grécia", "Mesopotâmia", "China", "Roma"], 1, "Os sumérios, na Mesopotâmia, criaram a escrita cuneiforme por volta de 3500 a.C., com sinais em forma de cunha em tábuas de argila."],
  ["Código de Hamurábi ficou conhecido pelo princípio:", ["Dar a outra face ao agressor", "Olho por olho, dente por dente", "Igualdade de todos perante a lei", "Liberdade religiosa para todos"], 1, "O Código de Hamurábi (Babilônia, c. 1750 a.C.) seguia a lei de talião: \"olho por olho, dente por dente\", com penas conforme a classe social."],
  ["Faraó no Egito era considerado:", ["Um sacerdote eleito", "Um deus vivo", "Um comerciante", "Um escravo"], 1, "O faraó era visto como um deus vivo, filho de Rá: concentrava o poder político e religioso (teocracia)."],
]);
more(H, 1, 2, [
  ["Esparta era conhecida por sua sociedade:", ["Comercial", "Militarizada", "Democrática", "Filosófica"], 1, "Esparta formava guerreiros desde os 7 anos e era governada por uma oligarquia. A democracia e a filosofia floresceram em Atenas."],
  ["O Império Romano do Ocidente caiu em:", ["476", "1453", "1492", "27 a.C."], 0, "Em 476, Odoacro depôs o último imperador do Ocidente: marco do fim da Antiguidade. 1453 é a queda de Constantinopla (Oriente)."],
  ["Plebeus e patrícios eram grupos sociais de:", ["Atenas", "Roma", "Egito", "Esparta"], 1, "Em Roma, patrícios eram a aristocracia dona de terras; plebeus eram a maioria livre, que lutou por direitos (como os tribunos da plebe)."],
]);
more(H, 1, 3, [
  ["A relação de suserania e vassalagem envolvia:", ["Servos e escravizados das terras do rei", "Nobres trocando terras por fidelidade", "Comerciantes das cidades e das feiras", "Reis e papas na disputa pelo poder"], 1, "O suserano doava um feudo ao vassalo, que jurava fidelidade e ajuda militar. Era uma relação entre nobres; servos ficavam fora dela."],
  ["Qual era a instituição mais poderosa da Idade Média?", ["O Parlamento", "A Igreja Católica", "As corporações de ofício", "O exército do rei"], 1, "A Igreja Católica tinha terras, cobrava dízimo, controlava a educação e a cultura e influenciava reis."],
  ["A Peste Negra (século XIV) causou:", ["Aumento da população europeia", "Morte de grande parte da Europa", "O fim da influência da Igreja", "A chegada dos europeus à América"], 1, "Transmitida pelas pulgas dos ratos, a Peste Negra matou cerca de um terço dos europeus e acelerou a crise do feudalismo."],
]);
more(H, 1, 4, [
  ["Em que ano Colombo chegou à América?", ["1453", "1492", "1500", "1517"], 1, "Em 1492, a serviço da Espanha, Colombo chegou às Antilhas pensando estar nas Índias. Em 1500 Cabral chegou ao Brasil."],
  ["Mercantilismo defendia:", ["Livre comércio total entre nações", "Acúmulo de metais e balança favorável", "Fim das colônias e da escravidão", "Socialização dos meios de produção"], 1, "Metalismo (acumular ouro e prata), balança comercial favorável (exportar mais que importar) e exploração de colônias."],
  ["Leonardo da Vinci e Michelangelo são artistas do:", ["Barroco", "Renascimento", "Romantismo", "Maneirismo tardio"], 1, "Do Renascimento italiano (séculos XV e XVI), que valorizava o ser humano (humanismo), a perspectiva e a Antiguidade clássica."],
]);
more(H, 2, 1, [
  ["Capitanias hereditárias foram criadas para:", ["Libertar escravizados e indígenas", "Colonizar com recursos de particulares", "Preparar a proclamação da República", "Expulsar os jesuítas do território"], 1, "Sem dinheiro para colonizar, Portugal dividiu a costa em faixas e entregou a donatários, que bancariam a ocupação (1534)."],
  ["O ciclo do ouro no século XVIII se concentrou em:", ["Pernambuco", "Minas Gerais", "Amazonas", "Rio Grande do Sul"], 1, "Em Minas Gerais. O ouro deslocou o eixo econômico para o Sudeste e levou a capital de Salvador para o Rio de Janeiro em 1763."],
  ["A Inconfidência Mineira (1789) teve como líder símbolo:", ["Zumbi", "Tiradentes", "Dom Pedro I", "Frei Caneca"], 1, "Tiradentes, enforcado em 1792. A revolta, inspirada no Iluminismo, reagia à derrama (cobrança forçada de impostos atrasados)."],
]);
more(H, 2, 2, [
  ["\"Penso, logo existo\" e a defesa da razão marcam:", ["O pensamento feudal e escolástico", "Ideias que influenciaram o Iluminismo", "A defesa do Absolutismo de direito divino", "A Contrarreforma da Igreja Católica"], 1, "A frase é de Descartes (racionalismo, século XVII). A confiança na razão abriu caminho para o Iluminismo do século XVIII."],
  ["Montesquieu propôs:", ["O absolutismo", "A separação dos três poderes", "O fim de todas as leis escritas", "A monarquia de direito divino"], 1, "Em \"O Espírito das Leis\", Montesquieu propôs separar Executivo, Legislativo e Judiciário para que um poder limite o outro."],
  ["Queda da Bastilha marcou o início da:", ["Revolução Industrial", "Revolução Francesa", "Independência dos EUA", "Primavera dos Povos"], 1, "A tomada da Bastilha, prisão símbolo do absolutismo, em 14 de julho de 1789, marca o início da Revolução Francesa."],
]);
more(H, 2, 3, [
  ["Em que ano o Brasil se tornou independente?", ["1808", "1822", "1889", "1831"], 1, "Em 7 de setembro de 1822, com Dom Pedro I. 1808 é a chegada da família real; 1889, a Proclamação da República."],
  ["Período Regencial ocorreu porque:", ["Dom Pedro II era menor de idade", "A República tinha sido proclamada", "O Brasil sofreu uma invasão francesa", "Dom João VI voltou ao trono do Brasil"], 0, "Pedro I abdicou em 1831 e o herdeiro, Pedro II, tinha 5 anos. Regentes governaram até o Golpe da Maioridade (1840)."],
  ["A vinda da família real ao Brasil (1808) foi causada por:", ["Revolução Francesa e queda do rei", "Invasão de Portugal por Napoleão", "Independência das colônias espanholas", "Abolição da escravidão em Portugal"], 1, "Napoleão invadiu Portugal (Bloqueio Continental) e a Corte fugiu para o Brasil, com escolta inglesa. Logo vieram a abertura dos portos e outras mudanças."],
]);
more(H, 2, 4, [
  ["Quais países formavam a Tríplice Entente na 1ª Guerra?", ["Alemanha, Áustria-Hungria e Itália", "Inglaterra, França e Rússia", "EUA, Japão e China", "Brasil, Argentina e Chile"], 1, "Inglaterra, França e Rússia. Do outro lado, a Tríplice Aliança: Alemanha, Áustria-Hungria e Itália (que mudou de lado em 1915)."],
  ["Qual tratado encerrou a 1ª Guerra e puniu a Alemanha?", ["Tordesilhas", "Versalhes", "Madri", "Westfália"], 1, "O Tratado de Versalhes (1919) impôs à Alemanha culpa pela guerra, indenizações e perda de territórios, gerando ressentimento que ajudou o nazismo."],
  ["A Revolução Russa de 1917 levou ao poder os:", ["Czaristas", "Bolcheviques", "Nazistas", "Liberais ingleses"], 1, "Os bolcheviques, liderados por Lênin, tomaram o poder em outubro de 1917 e criaram o primeiro Estado socialista."],
]);
more(H, 3, 1, [
  ["Em que ano foi proclamada a República no Brasil?", ["1822", "1888", "1889", "1930"], 2, "Em 15 de novembro de 1889, com o marechal Deodoro da Fonseca, um ano e meio após a abolição."],
  ["Estado Novo (1937–1945) foi:", ["Um governo democrático", "A ditadura de Vargas", "Um governo militar pós-1964", "Uma monarquia"], 1, "Ditadura de Vargas: fechou o Congresso, censurou a imprensa (DIP) e criou a CLT (1943). Acabou com a pressão do fim da Segunda Guerra."],
  ["Revolta da Vacina (1904) ocorreu no:", ["Rio de Janeiro", "Recife", "São Paulo", "Porto Alegre"], 0, "No Rio de Janeiro, contra a vacinação obrigatória (Oswaldo Cruz) e as demolições da reforma urbana, que expulsavam os pobres do centro."],
]);
more(H, 3, 2, [
  ["Em que ano começou a Segunda Guerra Mundial?", ["1914", "1929", "1939", "1945"], 2, "Em 1939, com a invasão da Polônia pela Alemanha; França e Reino Unido declararam guerra. 1914 é a Primeira Guerra."],
  ["Holocausto foi:", ["Um tratado de paz entre Alemanha e França", "O genocídio cometido pelo nazismo", "Uma batalha naval no Pacífico", "A crise econômica alemã de 1923"], 1, "Genocídio cometido pelo nazismo: cerca de 6 milhões de judeus assassinados, além de ciganos, homossexuais, pessoas com deficiência e opositores."],
  ["Sobre quais cidades foram lançadas as bombas atômicas de 1945?", ["Tóquio e Osaka", "Hiroshima e Nagasaki", "Berlim e Roma", "Okinawa e Kobe"], 1, "Os EUA lançaram bombas sobre Hiroshima (6/8) e Nagasaki (9/8) de 1945. O Japão se rendeu dias depois."],
]);
more(H, 3, 3, [
  ["Em que ano houve o golpe que instaurou a ditadura militar no Brasil?", ["1954", "1964", "1968", "1985"], 1, "Em 1964, militares derrubaram João Goulart. 1968 é o AI-5; 1985, o fim do regime com a eleição indireta de Tancredo."],
  ["Muro de Berlim simbolizava:", ["A derrota alemã na Primeira Guerra", "A divisão da Guerra Fria", "A ascensão do nazismo na Alemanha", "Os ideais da Revolução Francesa"], 1, "Erguido em 1961 e derrubado em 1989, separava Berlim Oriental (socialista) e Ocidental (capitalista): símbolo da Guerra Fria."],
  ["O \"milagre econômico\" brasileiro (1968–1973) teve:", ["Boa distribuição de renda e salários altos", "Crescimento alto e mais desigualdade", "Recessão longa e desemprego", "Hiperinflação e calote da dívida"], 1, "O PIB cresceu mais de 10% ao ano, mas com arrocho salarial, concentração de renda e aumento da dívida externa."],
]);
more(H, 3, 4, [
  ["Quem foi o primeiro presidente eleito por voto direto após a ditadura?", ["Tancredo Neves", "José Sarney", "Fernando Collor", "Luiz Inácio Lula da Silva"], 2, "Fernando Collor, eleito em 1989. Tancredo Neves foi eleito indiretamente em 1985 e morreu antes da posse; Sarney assumiu."],
  ["O fim da URSS ocorreu em:", ["1989", "1991", "2001", "1985"], 1, "Em dezembro de 1991, com a renúncia de Gorbachev. Em 1989 caiu o Muro de Berlim, outro marco do fim da Guerra Fria."],
  ["O Plano Real (1994) buscou:", ["Aumentar a inflação para pagar dívidas", "Controlar a hiperinflação", "Fechar a economia às importações", "Recriar o cruzeiro como moeda"], 1, "O Plano Real (URV e depois o real) derrubou a hiperinflação, que chegava a mais de 40% ao mês, e estabilizou a moeda."],
]);

const G = GEOGRAFIA;
more(G, 1, 1, [
  ["Fuso horário: cada 15° de longitude correspondem a:", ["30 min", "1 hora", "2 horas", "15 min"], 1, "A Terra gira 360° em 24 h: 360/24 = 15° por hora. Indo para leste, as horas aumentam; para oeste, diminuem."],
  ["Projeção de Mercator distorce:", ["Nenhuma área, só as distâncias", "As áreas perto dos polos", "Apenas a linha do Equador", "As cores dos continentes"], 1, "Mercator mantém as formas e os ângulos (boa para navegar), mas aumenta muito as áreas perto dos polos: a Groenlândia parece do tamanho da África."],
  ["Curvas de nível representam:", ["O traçado dos rios", "Pontos de mesma altitude", "Os limites entre estados", "As estradas e ferrovias"], 1, "Cada curva liga pontos de mesma altitude. Curvas muito próximas indicam encosta íngreme; afastadas, terreno suave."],
]);
more(G, 1, 2, [
  ["Qual tipo de rocha se forma pelo resfriamento do magma?", ["Sedimentar", "Ígnea", "Metamórfica", "Calcária"], 1, "Rochas ígneas (magmáticas), como granito e basalto. Sedimentares vêm de sedimentos; metamórficas, de rochas transformadas por calor e pressão."],
  ["Qual relevo predomina no Brasil?", ["Cordilheiras jovens e altas", "Planaltos e depressões", "Vulcões ativos e crateras", "Geleiras e vales glaciais"], 1, "Planaltos, planícies e depressões, em estrutura geológica antiga e muito desgastada pela erosão. O Brasil não tem cordilheiras jovens nem vulcões ativos."],
  ["O Brasil está:", ["Num limite entre placas tectônicas", "No centro da Placa Sul-Americana", "Sobre a Placa de Nazca", "Sobre um ponto quente vulcânico"], 1, "No centro da Placa Sul-Americana, longe dos limites. Por isso tem poucos terremotos fortes, ao contrário do Chile, na borda da placa."],
]);
more(G, 1, 3, [
  ["El Niño é o aquecimento anormal das águas do:", ["Atlântico Sul", "Pacífico Equatorial", "Oceano Índico", "Oceano Ártico"], 1, "Do Pacífico Equatorial. No Brasil, costuma trazer seca no Norte e Nordeste e chuva forte no Sul."],
  ["Qual é a maior bacia hidrográfica do mundo?", ["São Francisco", "Amazônica", "Paraná", "Nilo"], 1, "A Bacia Amazônica, com cerca de 7 milhões de km², é a maior em área e em volume de água. O Nilo disputa o título de rio mais longo."],
  ["Clima do semiárido nordestino tem:", ["Chuvas abundantes o ano todo", "Chuvas escassas e irregulares", "Neve nos meses de inverno", "Temperaturas baixas o ano todo"], 1, "Chuvas escassas e irregulares (menos de 800 mm por ano), concentradas em poucos meses, e temperaturas altas. A vegetação é a caatinga."],
]);
more(G, 1, 4, [
  ["Qual bioma tem vegetação adaptada à seca, com cactos e plantas que perdem as folhas?", ["Mata Atlântica", "Caatinga", "Pampa", "Amazônia"], 1, "A Caatinga, exclusivamente brasileira. As plantas perdem as folhas na seca para economizar água (caducifólias)."],
  ["Qual é a maior planície alagável do mundo?", ["Pampa", "Pantanal", "Cerrado", "Caatinga"], 1, "O Pantanal, no MT e MS, com cheias e secas anuais que comandam a vida dos animais e da pecuária pantaneira."],
  ["Desertificação é:", ["A formação de dunas nas praias", "A degradação do solo em áreas secas", "O aumento das florestas tropicais", "O derretimento das geleiras polares"], 1, "É a degradação do solo em áreas secas por clima e uso inadequado (desmatamento, sobrepastoreio). No Brasil, ameaça o semiárido."],
]);
more(G, 2, 1, [
  ["Taxa de natalidade mede:", ["Mortes por mil habitantes", "Nascimentos por mil habitantes", "Migrantes por mil habitantes", "Idosos por mil habitantes"], 1, "Nascidos vivos por mil habitantes em um ano. Natalidade menos mortalidade dá o crescimento vegetativo."],
  ["Pirâmide etária de base larga indica população:", ["Envelhecida", "Jovem", "Estável", "Masculina"], 1, "Base larga = muitas crianças, ou seja, natalidade alta: população jovem, típica de países em desenvolvimento."],
  ["Migração pendular é:", ["Mudança definitiva de país", "Ida e volta diária entre cidades", "Saída do campo para a cidade", "Mudança só em certas estações"], 1, "É o vaivém diário entre a cidade onde se mora e a cidade onde se trabalha ou estuda, comum em regiões metropolitanas."],
]);
more(G, 2, 2, [
  ["Qual destas cidades é a grande metrópole nacional brasileira?", ["Manaus", "São Paulo", "Curitiba", "Salvador"], 1, "Para o IBGE, São Paulo é a grande metrópole nacional, com influência sobre todo o país. Manaus, Curitiba e Salvador são metrópoles regionais."],
  ["Gentrificação é:", ["O desmatamento das áreas urbanas", "Valorização que expulsa os mais pobres", "A saída da população do campo", "A construção de favelas em encostas"], 1, "Um bairro é revitalizado, os aluguéis sobem e os moradores mais pobres acabam saindo, substituídos por gente de renda maior."],
  ["Ilha de calor ocorre:", ["Em áreas rurais com muita plantação", "Em cidades com asfalto e pouco verde", "No meio do oceano, longe da costa", "No alto das montanhas"], 1, "Asfalto e concreto absorvem e retêm calor, há pouco verde e muita poluição: o centro da cidade fica mais quente que os arredores."],
]);
more(G, 2, 3, [
  ["Agricultura familiar no Brasil produz grande parte:", ["Da soja exportada", "Da comida consumida no país", "Do minério de ferro", "Do petróleo e do gás"], 1, "A agricultura familiar produz boa parte do feijão, mandioca, hortaliças e leite que vão à mesa. A soja de exportação vem do agronegócio."],
  ["Estrutura fundiária brasileira é marcada por:", ["Terras bem distribuídas", "Concentração de terras", "Ausência de latifúndios", "Só minifúndios"], 1, "Poucos proprietários detêm grandes áreas (latifúndios), herança das sesmarias. Isso alimenta conflitos e a luta por reforma agrária."],
  ["Qual é a principal causa do desmatamento na Amazônia?", ["O turismo ecológico", "A pecuária e a agricultura", "A mineração de sal", "A urbanização do litoral"], 1, "A abertura de pastos para gado (e depois lavouras) é a principal causa, muitas vezes ligada à grilagem de terras públicas."],
]);
more(G, 2, 4, [
  ["Qual destes é um combustível fóssil?", ["Etanol", "Petróleo", "Energia solar", "Biomassa"], 1, "O petróleo se formou de matéria orgânica soterrada há milhões de anos e não se renova na escala humana. Etanol e biomassa são renováveis."],
  ["Desconcentração industrial no Brasil é a saída de indústrias:", ["Do Sudeste para outras regiões", "Do Norte para o Sul", "Do Brasil para a China apenas", "Das cidades para o oceano"], 0, "Desde os anos 1970, indústrias saem do Sudeste (sobretudo da Grande SP) em busca de incentivos fiscais, terrenos e mão de obra mais baratos."],
  ["Qual é uma vantagem da energia eólica?", ["Não depende do vento para funcionar", "É renovável e não emite na geração", "Funciona sem nenhuma manutenção", "Gera lixo radioativo de fácil descarte"], 1, "É renovável e não emite gases na geração. Depende do vento, por isso o litoral do Nordeste é a maior região produtora do Brasil."],
]);
more(G, 3, 1, [
  ["Qual bloco econômico europeu tem moeda comum?", ["Nafta", "União Europeia", "Mercosul", "Apec"], 1, "A União Europeia, com livre circulação de pessoas, mercadorias e capitais. A maioria dos membros usa o euro."],
  ["BRICS reúne, entre outros:", ["EUA, Canadá e México", "Brasil, Rússia, Índia, China e África do Sul", "França, Alemanha e Itália", "Japão, Coreia do Sul e Austrália"], 1, "Grupo de grandes economias emergentes: Brasil, Rússia, Índia, China e África do Sul, ampliado com novos membros a partir de 2024."],
  ["Multinacionais são empresas que:", ["Atuam em um só país", "Atuam em vários países", "Sempre pertencem ao Estado", "Nunca exportam produtos"], 1, "Têm sede num país (matriz) e filiais em vários outros, buscando mercados, matéria-prima e mão de obra barata."],
]);
more(G, 3, 2, [
  ["Conflito israelo-palestino envolve disputa por:", ["Petróleo no Ártico e no Mar do Norte", "Território e reconhecimento de Estado", "Geleiras e água doce", "Rotas espaciais e satélites"], 1, "Disputa por território e pelo reconhecimento de um Estado palestino, desde a criação de Israel (1948), com guerras e ocupações."],
  ["Conselho de Segurança da ONU tem membros permanentes com poder de:", ["Eleger presidentes", "Veto", "Cobrar impostos", "Fechar fronteiras"], 1, "EUA, Rússia, China, França e Reino Unido têm poder de veto: um \"não\" de qualquer um deles barra uma resolução."],
  ["Xenofobia é:", ["Medo de altura", "Aversão a estrangeiros", "Amor à pátria", "Imigração"], 1, "Xenofobia é a aversão ou o preconceito contra estrangeiros. Ela cresce em crises econômicas e afeta refugiados e imigrantes."],
]);
more(G, 3, 3, [
  ["Qual região do Brasil tem a maior área?", ["Nordeste", "Norte", "Centro-Oeste", "Sudeste"], 1, "O Norte ocupa cerca de 45% do território, com a Amazônia, mas tem baixa densidade populacional. O Centro-Oeste é a segunda maior."],
  ["Transposição do rio São Francisco busca:", ["Produzir petróleo no sertão", "Levar água ao semiárido", "Abastecer usinas nucleares", "Ligar o rio ao Oceano Pacífico"], 1, "Levar água do São Francisco, por canais, ao semiárido do Nordeste setentrional, para abastecimento e irrigação."],
  ["Capital do Brasil foi transferida para Brasília em:", ["1889", "1930", "1960", "1988"], 2, "Em 1960, no governo Juscelino Kubitschek, para interiorizar o desenvolvimento (\"50 anos em 5\"). Antes, a capital era o Rio de Janeiro."],
]);
more(G, 3, 4, [
  ["Camada de ozônio protege contra:", ["Chuva ácida", "Radiação ultravioleta", "Terremotos", "Ventos fortes"], 1, "O ozônio (O₃) na estratosfera filtra boa parte da radiação ultravioleta, que causa câncer de pele. CFCs a destruíam."],
  ["O que é desenvolvimento sustentável?", ["Parar toda a produção industrial", "Atender ao presente sem prejudicar o futuro", "Crescer a qualquer custo ambiental", "Apenas reciclar o lixo doméstico"], 1, "Pelo Relatório Brundtland (1987), é atender às necessidades do presente sem comprometer as das gerações futuras."],
  ["Qual é o principal gás de efeito estufa emitido pela queima de combustíveis?", ["O₂", "CO₂", "N₂", "He"], 1, "O dióxido de carbono (CO₂). O metano (CH₄) é mais potente por molécula, mas o CO₂ é emitido em quantidade muito maior."],
]);

const P = PORTUGUES;
more(P, 1, 1, [
  ["Qual função da linguagem é centrada no emissor e em seus sentimentos?", ["Referencial", "Emotiva", "Fática", "Poética"], 1, "Função emotiva (expressiva): 1ª pessoa, interjeições e exclamações. A referencial foca no assunto; a conativa, no receptor."],
  ["\"Alô, está me ouvindo?\" tem função:", ["Fática", "Poética", "Conativa", "Metalinguística"], 0, "Função fática: testa ou mantém o canal de comunicação (\"alô\", \"entendeu?\"). Não transmite informação nova."],
  ["Notícia de jornal usa predominantemente a função:", ["Emotiva", "Referencial", "Poética", "Fática"], 1, "Função referencial: informa com objetividade, em 3ª pessoa, focando no assunto (referente)."],
]);
more(P, 1, 2, [
  ["\"Ele partiu desta para melhor\" é:", ["Hipérbole", "Eufemismo", "Ironia", "Antítese"], 1, "Eufemismo: suaviza uma ideia dura (morrer). Ironia diria o contrário do que pensa; hipérbole exageraria."],
  ["\"Que lindo, tirou zero!\" é:", ["Ironia", "Metáfora", "Prosopopeia", "Pleonasmo"], 0, "Ironia: diz o contrário do que se pensa, geralmente com tom de crítica ou deboche."],
  ["\"O vento sussurrava\" é:", ["Prosopopeia", "Hipérbole", "Metonímia", "Catacrese"], 0, "Prosopopeia (personificação): atribui ação humana (\"sussurrar\") a algo que não é humano (o vento)."],
]);
more(P, 1, 3, [
  ["Em \"três livros\", \"três\" é:", ["Adjetivo", "Numeral", "Pronome", "Artigo"], 1, "\"Três\" indica quantidade exata: numeral cardinal. Adjetivo indicaria qualidade (\"livros grossos\")."],
  ["\"Mas\", \"porém\", \"contudo\" são:", ["Preposições", "Conjunções adversativas", "Advérbios de modo", "Interjeições"], 1, "São conjunções coordenativas adversativas: ligam orações com ideias opostas. Também entram nesse grupo \"todavia\" e \"entretanto\"."],
  ["Em \"Nós estudamos\", \"nós\" é:", ["Substantivo", "Pronome pessoal", "Artigo", "Verbo"], 1, "\"Nós\" é pronome pessoal do caso reto (funciona como sujeito), 1ª pessoa do plural. Caso oblíquo seria \"nos\"."],
]);
more(P, 1, 4, [
  ["Padre José de Anchieta escreveu no período:", ["Quinhentismo", "Barroco", "Arcadismo", "Realismo"], 0, "Anchieta escreveu poemas e autos para catequizar indígenas no século XVI: literatura de catequese do Quinhentismo."],
  ["Gregório de Matos ficou conhecido como:", ["Boca do Inferno", "Poeta dos escravos", "Pai do Modernismo", "Bruxo do Cosme Velho"], 0, "\"Boca do Inferno\", pela poesia satírica que atacava a sociedade baiana do século XVII (Barroco). \"Bruxo do Cosme Velho\" é Machado."],
  ["Antítese é figura típica do:", ["Barroco", "Arcadismo", "Realismo", "Simbolismo"], 0, "O Barroco vive o conflito entre opostos (céu × terra, pecado × perdão, vida × morte), expresso em antíteses e paradoxos."],
]);
more(P, 2, 1, [
  ["Em \"Choveu muito\", o sujeito é:", ["Simples", "Oculto", "Inexistente", "Indeterminado"], 2, "Verbos que indicam fenômenos da natureza (chover, ventar, nevar) não têm sujeito: oração sem sujeito (sujeito inexistente)."],
  ["Em \"Precisa-se de vendedores\", o sujeito é:", ["Vendedores", "Indeterminado", "Oculto", "Inexistente"], 1, "Verbo + \"se\" + preposição (\"de vendedores\"): o \"se\" indetermina o sujeito. \"Vendedores\" é objeto indireto, não sujeito."],
  ["Em qual frase há predicativo do sujeito?", ["O menino comeu bolo", "A prova estava difícil", "Ele correu muito rápido", "Vi o filme"], 1, "\"A prova estava difícil\": \"estava\" é verbo de ligação e \"difícil\" atribui uma característica ao sujeito \"a prova\"."],
]);
more(P, 2, 2, [
  ["Tomás Antônio Gonzaga escreveu:", ["Marília de Dirceu", "Iracema", "Os Lusíadas", "O Navio Negreiro"], 0, "\"Marília de Dirceu\", poemas líricos do Arcadismo em que o pastor Dirceu fala de amor a Marília. Gonzaga participou da Inconfidência."],
  ["\"O Navio Negreiro\" é de:", ["Álvares de Azevedo", "Castro Alves", "Gonçalves Dias", "José de Alencar"], 1, "De Castro Alves, o \"poeta dos escravos\", da 3ª geração romântica (condoreira), que denunciou o tráfico negreiro."],
  ["Qual era o lema do Arcadismo?", ["Carpe diem e fugere urbem", "Arte pela arte", "Antropofagia", "Mal do século"], 0, "\"Carpe diem\" (aproveite o dia) e \"fugere urbem\" (fugir da cidade): vida simples e bucólica no campo. \"Mal do século\" é romântico."],
]);
more(P, 2, 3, [
  ["Dom Casmurro é narrado por:", ["Capitu", "Bentinho", "Escobar", "Um narrador onisciente"], 1, "Por Bentinho, em 1ª pessoa, já velho e ressentido. Por contar só a sua versão, ele deixa a dúvida: Capitu traiu ou não?"],
  ["O Cortiço é obra de:", ["Machado de Assis", "Aluísio Azevedo", "José de Alencar", "Raul Pompeia"], 1, "De Aluísio Azevedo (1890), marco do Naturalismo: mostra o ser humano determinado pelo meio, pela raça e pelo momento."],
  ["Qual é uma característica do Realismo?", ["Idealização do amor", "Crítica social", "Indianismo heroico", "Sentimentalismo exagerado"], 1, "O Realismo critica a sociedade burguesa (casamento por interesse, hipocrisia) com objetividade, em reação à idealização romântica."],
]);
more(P, 2, 4, [
  ["Qual frase está de acordo com a norma-padrão?", ["Haviam muitas pessoas", "Havia muitas pessoas", "Houveram muitas pessoas", "Hão muitas pessoas"], 1, "\"Haver\" no sentido de existir é impessoal e fica no singular: \"Havia muitas pessoas\". \"Haviam\" e \"Houveram\" estão errados nesse sentido."],
  ["Qual frase usa a regência correta do verbo \"preferir\"?", ["Prefiro mais cinema do que teatro", "Prefiro cinema a teatro", "Prefiro cinema do que teatro", "Prefiro mais cinema a teatro"], 1, "Preferir pede \"algo A algo\", sem \"mais\" e sem \"do que\": \"Prefiro cinema a teatro\". \"Prefiro mais\" é redundante."],
  ["Pela norma-padrão, \"Vende-se casas\" deveria ser:", ["Vende-se as casas", "Vendem-se casas", "Vendem casas-se", "Vende casas"], 1, "É voz passiva sintética: \"casas\" é o sujeito (\"casas são vendidas\"), então o verbo vai ao plural: \"Vendem-se casas\"."],
]);
more(P, 3, 1, [
  ["Em \"Não fui à aula porque estava doente\", a oração \"porque estava doente\" indica:", ["Concessão", "Causa", "Consequência", "Condição"], 1, "Indica a causa de não ter ido: oração subordinada adverbial causal. Consequência seria o efeito (\"estava tão doente que não fui\")."],
  ["\"Embora estivesse cansado, estudou\" expressa:", ["Causa", "Concessão", "Finalidade", "Tempo"], 1, "\"Embora\" introduz um obstáculo que não impede a ação principal: concessão. Também são concessivas: \"ainda que\", \"mesmo que\"."],
  ["\"Quero que você venha\": \"que você venha\" é oração:", ["Adjetiva", "Substantiva objetiva direta", "Adverbial", "Coordenada aditiva"], 1, "\"Quero o quê?\" → \"que você venha\": a oração completa o verbo transitivo direto, funcionando como objeto direto."],
]);
more(P, 3, 2, [
  ["Macunaíma é obra de:", ["Oswald de Andrade", "Mário de Andrade", "Graciliano Ramos", "Jorge Amado"], 1, "De Mário de Andrade (1928): \"o herói sem nenhum caráter\", rapsódia modernista que mistura lendas e falas de todo o Brasil."],
  ["Vidas Secas retrata:", ["A elite urbana carioca", "Retirantes no sertão", "A vida na Amazônia", "A Revolução Farroupilha"], 1, "Graciliano Ramos (1938) retrata Fabiano e sua família de retirantes no sertão, fugindo da seca, com linguagem seca e enxuta."],
  ["Os Sertões, de Euclides da Cunha, trata da:", ["Guerra do Paraguai", "Guerra de Canudos", "Revolta da Vacina", "Inconfidência"], 1, "Da Guerra de Canudos (1896–1897), no sertão da Bahia, contra Antônio Conselheiro. É obra pré-modernista (1902)."],
]);
more(P, 3, 3, [
  ["Qual gênero relata um fato do cotidiano com leveza e linguagem simples?", ["Crônica", "Editorial", "Verbete", "Ata"], 0, "A crônica parte do cotidiano com tom leve e pessoal (Rubem Braga, Verissimo). O editorial expõe a opinião do jornal."],
  ["Charge é:", ["Um texto científico", "Um desenho de humor sobre um fato atual", "Um poema longo", "Um documento oficial"], 1, "Charge é um desenho de humor que critica um fato atual, ligado às notícias. Cartum é parecido, mas sem ligação com um fato específico."],
  ["Variação linguística regional é:", ["Um erro de português", "O uso da língua conforme a região", "Uma linguagem técnica", "A gíria dos jovens"], 1, "É o uso da língua conforme a região (sotaque, vocabulário: \"mandioca\", \"aipim\", \"macaxeira\"). Não é erro: é variedade legítima."],
]);
more(P, 3, 4, [
  ["Quantas competências avaliam a redação do ENEM?", ["3", "4", "5", "10"], 2, "São 5 competências, cada uma vale até 200 pontos, somando até 1000: norma-padrão, tema, argumentação, coesão e proposta de intervenção."],
  ["O que zera a redação do ENEM?", ["Usar a 1ª pessoa", "Fugir totalmente ao tema", "Usar repertório", "Escrever 25 linhas"], 1, "Fuga total ao tema zera. Também zeram: não ser dissertativo-argumentativo, ter até 7 linhas, cópia dos textos motivadores e partes desconectadas."],
  ["Repertório sociocultural é:", ["Copiar os textos da coletânea", "Conhecimento externo que sustenta a tese", "Usar palavras difíceis e raras", "Contar uma história pessoal"], 1, "É conhecimento de fora da coletânea (dados, leis, obras, fatos históricos) usado para sustentar a tese, de forma pertinente e produtiva."],
]);
