import { GEOGRAFIA } from "./natureza-humanas";
import { extend, m, o, q, qe } from "./pack";

// Novas questões de Geografia (diretas e estilo ENEM). Ids: `${topic.id}-nN`.

extend(GEOGRAFIA, "Cartografia", [
  q("A rosa dos ventos serve para indicar:", ["Direções", "Altitudes do relevo", "Fusos horários do mundo", "Escalas de um mapa"], 0, "Pontos cardeais (N, S, L, O), colaterais e subcolaterais."),
  q("A legenda de um mapa explica:", ["Os símbolos usados", "A data de impressão", "O nome do autor", "O preço do mapa"], 0, "Cores, ícones e linhas só fazem sentido com a legenda."),
  q("Num mapa topográfico, curvas de nível muito próximas indicam:", ["Terreno íngreme", "Limites entre países vizinhos", "Rios largos e lagos", "Rodovias federais duplicadas"], 0, "Cada curva liga pontos de mesma altitude; quanto mais juntas, maior a declividade."),
  q("Mapas temáticos mostram:", ["Um tema específico", "Só o relevo do mundo", "Apenas os oceanos", "Somente as capitais"], 0, "Ex.: densidade populacional, clima, IDH."),
  q("A projeção cilíndrica distorce mais as áreas:", ["Próximas aos polos", "Próximas ao Equador", "Do hemisfério sul", "Dos oceanos tropicais"], 0, "Na de Mercator, a Groenlândia parece do tamanho da África."),
  qe("O GPS usa sinais de vários satélites para calcular a posição de um aparelho na Terra.", "A posição é dada em:", ["Latitude e longitude", "Graus Celsius e umidade", "Fusos e estações do ano", "Metros por segundo de sinal"], 0, "Coordenadas geográficas localizam qualquer ponto do planeta."),
  qe("A projeção de Peters mostra os continentes com áreas proporcionais, mas formas alongadas. Ela foi divulgada como crítica à de Mercator.", "A crítica era que Mercator:", ["Exagerava o Norte", "Mostrava formas erradas da África", "Não tinha a linha do Equador", "Não mostrava os oceanos"], 0, "Peters questionava a visão eurocêntrica do mapa mais usado."),
  qe("Imagens de satélite mostram a expansão do desmatamento na Amazônia ao longo dos anos.", "Esse uso da tecnologia é chamado de:", ["Sensoriamento remoto", "Escala gráfica do mapa", "Rosa dos ventos digital", "Curva de nível por satélite"], 0, "O Inpe monitora o desmatamento por satélite (Prodes e Deter)."),
  qe("Um aplicativo de mapas mostra trânsito, restaurantes e rotas em camadas sobre o mapa.", "Esses sistemas que cruzam dados geográficos são os:", ["SIGs", "IDHs", "PIBs", "GMTs"], 0, "Sistemas de Informação Geográfica juntam mapas e bancos de dados."),
  m("Marque elementos de um mapa:", ["Título", "Legenda", "Escala", "Assinatura do leitor", "Preço"], [0, 1, 2], "Também é comum a orientação (rosa dos ventos) e a fonte."),
  m("Marque as afirmações corretas sobre projeções:", ["Toda projeção tem distorções", "Mercator conserva as formas", "Peters conserva as áreas", "Existe projeção sem distorção", "Mercator conserva as áreas"], [0, 1, 2], "É impossível planificar a esfera sem distorcer algo."),
], "n");

extend(GEOGRAFIA, "Geologia e relevo", [
  q("O relevo é moldado por agentes internos e externos. Um agente externo é:", ["A chuva", "O vulcanismo", "O tectonismo", "O magma"], 0, "Agentes externos (chuva, vento, rios) desgastam e depositam."),
  q("O Brasil tem poucos terremotos fortes porque:", ["Fica no meio de uma placa", "Não tem rochas no subsolo", "Está numa borda de placas", "É um país muito plano"], 0, "Longe das bordas, onde ocorre a maior parte dos tremores."),
  q("Os planaltos são formas de relevo onde predomina:", ["O desgaste (erosão)", "A deposição de sedimentos", "A formação de corais", "O gelo permanente"], 0, "Nas planícies, predomina a deposição."),
  q("O ponto mais alto do Brasil é o:", ["Pico da Neblina", "Pico da Bandeira", "Monte Roraima", "Pico das Agulhas Negras"], 0, "Cerca de 2.995 m, no Amazonas, perto da Venezuela."),
  q("As rochas sedimentares se formam pela:", ["Deposição de sedimentos", "Solidificação do magma", "Ação de altas pressões", "Fusão do manto"], 0, "Ex.: arenito; nelas pode haver petróleo e fósseis."),
  qe("O Círculo de Fogo do Pacífico concentra a maior parte dos vulcões e terremotos do mundo.", "Isso ocorre porque a região:", ["Tem muitos limites de placas", "Fica muito perto do Equador", "Tem muito gelo nas montanhas", "É formada só por planícies"], 0, "Japão, Chile e Indonésia estão nessa faixa."),
  qe("Em 2004, um terremoto submarino na Indonésia gerou ondas gigantes que mataram mais de 200 mil pessoas.", "Essas ondas são chamadas de:", ["Tsunamis", "Furacões", "Monções", "Geleiras"], 0, "O deslocamento do fundo do mar empurra grandes volumes de água."),
  qe("Em encostas desmatadas e ocupadas por moradias, chuvas fortes provocam deslizamentos.", "Uma medida de prevenção é:", ["Manter a vegetação nas encostas", "Construir mais nas encostas", "Retirar as raízes do solo", "Impermeabilizar o topo dos morros"], 0, "A vegetação segura o solo e reduz a erosão."),
  qe("A cordilheira dos Andes se formou pelo choque entre a placa de Nazca e a placa Sul-Americana.", "Esse tipo de encontro é um limite:", ["Convergente", "Divergente", "Transformante", "Passivo"], 0, "Placas se chocam; a oceânica mergulha sob a continental."),
  m("Marque agentes internos do relevo:", ["Tectonismo", "Vulcanismo", "Abalos sísmicos", "Vento", "Chuva"], [0, 1, 2], "Vento e chuva são agentes externos."),
  m("Marque formas de relevo:", ["Planalto", "Planície", "Depressão", "Estuário", "Bioma"], [0, 1, 2], "Estuário é foz de rio; bioma é um conjunto de ecossistemas."),
], "n");

extend(GEOGRAFIA, "Clima e hidrografia", [
  q("O clima semiárido do Nordeste é marcado por:", ["Chuvas escassas e irregulares", "Neve frequente nos meses de inverno", "Chuvas fortes em todos os dias", "Temperaturas negativas o ano todo"], 0, "Secas prolongadas no Sertão."),
  q("A maior bacia hidrográfica do mundo é a:", ["Amazônica", "Do Prata", "Do São Francisco", "Do Nilo"], 0, "Também tem o rio de maior volume de água."),
  q("O rio São Francisco é chamado de 'rio da integração nacional' porque:", ["Liga o Sudeste ao Nordeste", "Nasce na floresta amazônica", "Deságua no oceano Pacífico", "Atravessa toda a região Sul"], 0, "Nasce em Minas e corre até a divisa de Alagoas e Sergipe."),
  q("Umidade relativa do ar baixa é comum no:", ["Inverno do Centro-Oeste", "Verão da Amazônia", "Litoral do Sul", "Inverno do litoral nordestino"], 0, "Pode ficar abaixo de 20%, com risco à saúde e às queimadas."),
  q("Rios de planalto são bons para:", ["Gerar energia", "Navegação fácil de barcos", "Formar grandes deltas", "Pescar sob o gelo"], 0, "Desníveis e quedas d'água favorecem as hidrelétricas."),
  qe("Em São Paulo, no inverno, uma camada de ar quente pode ficar sobre o ar frio perto do solo e prender a poluição.", "Esse fenômeno atmosférico é a:", ["Inversão térmica", "Ilha de calor urbana", "Chuva ácida de inverno", "Maritimidade do litoral"], 0, "Sem a subida do ar, os poluentes se acumulam."),
  qe("Cidades litorâneas costumam ter menor diferença de temperatura entre o dia e a noite do que cidades do interior.", "Isso ocorre pela influência da:", ["Maritimidade", "Continentalidade", "Altitude", "Latitude"], 0, "A água do mar aquece e esfria mais devagar e suaviza o clima."),
  qe("Cidades de serra, como Campos do Jordão, são mais frias que o litoral na mesma latitude.", "O fator climático que explica isso é a:", ["Altitude", "Maritimidade", "Longitude", "Vegetação"], 0, "A temperatura cai cerca de 0,6 °C a cada 100 m de altitude."),
  qe("Aquíferos, como o Guarani, guardam enormes volumes de água no subsolo.", "Um risco para esses reservatórios é:", ["Contaminação por agrotóxicos", "Excesso de chuva nas cidades", "Falta de rochas no subsolo", "Frio intenso durante o inverno"], 0, "Áreas de recarga precisam ser protegidas da poluição e da superexploração."),
  m("Marque fatores climáticos:", ["Latitude", "Altitude", "Massas de ar", "Fuso horário", "Densidade demográfica"], [0, 1, 2], "Fuso e densidade não influenciam o clima."),
  m("Marque climas do Brasil:", ["Equatorial", "Tropical", "Subtropical", "Polar", "Desértico frio"], [0, 1, 2], "O Brasil não tem clima polar."),
  o("Explique o que são os 'rios voadores' e por que importam para o Brasil.", "Os rios voadores são grandes fluxos de vapor de água que saem da Amazônia, formados pela evaporação e pela transpiração da floresta. Os ventos levam essa umidade para o Centro-Oeste, o Sudeste e o Sul, onde vira chuva. Por isso o desmatamento pode reduzir as chuvas e afetar a agricultura e o abastecimento.", [
    ["Vapor da floresta / transpiração", "vapor", "umidade", "transpira", "evapora"],
    ["Levado pelos ventos a outras regiões", "vento", "sudeste", "centro-oeste", "sul", "regi"],
    ["Desmatamento reduz chuvas / afeta agricultura", "desmat", "chuva", "agricult", "abastec"],
  ]),
], "n");

extend(GEOGRAFIA, "Biomas e questões ambientais", [
  q("A tundra é um bioma típico de regiões:", ["Polares", "Equatoriais", "Desérticas quentes", "Tropicais úmidas"], 0, "Solo congelado (permafrost), musgos e liquens."),
  q("A taiga, ou floresta boreal, é formada principalmente por:", ["Coníferas", "Cactos", "Palmeiras", "Gramíneas baixas"], 0, "Pinheiros e abetos no norte do Canadá, da Europa e da Rússia."),
  q("As savanas africanas são parecidas com o:", ["Cerrado", "Pampa", "Mangue", "Pantanal"], 0, "Gramíneas com árvores espaçadas; clima com estação seca."),
  q("O Protocolo de Montreal (1987) combateu:", ["Os gases que destroem o ozônio", "O desmatamento da Amazônia", "A poluição dos grandes rios", "O lixo plástico nos oceanos"], 0, "Proibiu os CFCs; a camada de ozônio está se recuperando."),
  q("A desertificação é:", ["A degradação de terras secas", "O avanço do mar sobre o litoral", "O degelo rápido das geleiras", "A criação de oásis no deserto"], 0, "Causada por desmatamento, uso intensivo do solo e secas."),
  qe("O derretimento do permafrost na tundra libera metano, um gás de efeito estufa.", "Isso pode:", ["Acelerar o aquecimento global", "Esfriar o planeta em poucos anos", "Aumentar a camada de ozônio", "Acabar com as chuvas tropicais"], 0, "Retroalimentação: mais calor, mais degelo, mais metano."),
  qe("O Acordo de Paris (2015) propôs limitar o aquecimento global a bem menos de 2 °C acima dos níveis pré-industriais.", "Para isso, os países devem principalmente:", ["Reduzir emissões de gases", "Aumentar o uso de carvão", "Desmatar mais florestas", "Parar de plantar alimentos"], 0, "Cada país apresenta suas metas (NDCs)."),
  qe("O plástico descartado no mar se fragmenta em pedaços minúsculos que entram na cadeia alimentar.", "Esses fragmentos são chamados de:", ["Microplásticos", "Biocombustíveis", "Sedimentos", "Corais"], 0, "Já foram encontrados em peixes, no sal e até no sangue humano."),
  qe("Os créditos de carbono permitem que empresas compensem suas emissões financiando projetos que retiram ou evitam CO₂.", "Uma crítica a esse mecanismo é que ele pode:", ["Permitir poluir pagando", "Acabar com as florestas", "Aumentar a camada de ozônio", "Reduzir as chuvas ácidas"], 0, "Sem metas rígidas, vira licença para emitir."),
  m("Marque biomas de clima frio:", ["Tundra", "Taiga", "Pradarias temperadas", "Floresta equatorial", "Savana"], [0, 1, 2], "Floresta equatorial e savana são de clima quente."),
  m("Marque problemas ambientais globais:", ["Aquecimento global", "Perda de biodiversidade", "Poluição dos oceanos", "Rotação da Terra", "Fusos horários"], [0, 1, 2], "Rotação e fusos são fenômenos naturais ou convenções, não problemas."),
], "n");

extend(GEOGRAFIA, "População e demografia", [
  q("O crescimento vegetativo é a diferença entre:", ["Nascimentos e mortes", "Emigrantes e imigrantes", "Homens e mulheres", "Jovens e idosos"], 0, "Se a natalidade é maior que a mortalidade, a população cresce naturalmente."),
  q("A pirâmide etária mostra a população por:", ["Idade e sexo", "Renda e profissão", "Religião e cor", "Estado e cidade"], 0, "Base larga indica muitos jovens; topo largo, muitos idosos."),
  q("O país mais populoso do mundo hoje é a:", ["Índia", "China", "Indonésia", "Nigéria"], 0, "A Índia ultrapassou a China em 2023."),
  q("Taxa de mortalidade infantil mede mortes de crianças:", ["Antes de 1 ano", "Até 18 anos", "Na escola", "Antes de nascer"], 0, "É um bom indicador da qualidade da saúde e do saneamento."),
  q("O IDH combina saúde, educação e:", ["Renda", "Área territorial", "Número de cidades", "Clima"], 0, "Expectativa de vida, escolaridade e renda per capita."),
  qe("No Japão, a fecundidade é baixa e a expectativa de vida é das maiores do mundo.", "A pirâmide etária japonesa tem:", ["Base estreita e topo largo", "Base larga e topo estreito", "Forma de triângulo perfeito", "Só jovens"], 0, "Poucas crianças e muitos idosos: população envelhecida."),
  qe("Malthus (1798) dizia que a população cresceria mais rápido que a produção de alimentos.", "Sua previsão falhou, sobretudo por causa:", ["Da tecnologia no campo", "Do fim das grandes cidades", "Do aumento da natalidade", "Das duas guerras mundiais"], 0, "A mecanização e a Revolução Verde multiplicaram a produção."),
  qe("Em muitas cidades brasileiras, a população negra tem menor renda média e maior taxa de desemprego.", "Esses dados revelam:", ["Desigualdade racial", "Igualdade de oportunidades", "Fim do racismo", "Crescimento vegetativo"], 0, "Herança da escravidão e da falta de políticas de inclusão."),
  qe("Bangladesh tem cerca de 1.100 habitantes por km²; o Canadá, cerca de 4.", "Esse indicador é a:", ["Densidade demográfica", "Taxa de natalidade", "Expectativa de vida", "Renda per capita"], 0, "Habitantes divididos pela área."),
  m("Marque indicadores sociais:", ["Expectativa de vida", "Taxa de alfabetização", "Mortalidade infantil", "Altitude média", "Área do país"], [0, 1, 2], "Altitude e área são dados físicos."),
  m("Marque causas da queda da fecundidade no Brasil:", ["Urbanização", "Mulheres no mercado de trabalho", "Acesso a métodos contraceptivos", "Êxodo urbano para o campo", "Fim das escolas"], [0, 1, 2], "A urbanização, e não a volta ao campo, reduziu a fecundidade."),
], "n");

extend(GEOGRAFIA, "Urbanização", [
  q("No ABC paulista, as cidades cresceram até se encontrarem. Esse encontro de manchas urbanas é a:", ["Conurbação", "Gentrificação", "Periferização", "Êxodo urbano"], 0, "Conurbação: cidades vizinhas formam uma só mancha urbana contínua."),
  q("Megalópole é a união de:", ["Duas ou mais metrópoles", "Bairros de uma vila", "Fazendas vizinhas", "Ilhas de um arquipélago"], 0, "Ex.: o eixo Rio–São Paulo, ligado pela Via Dutra."),
  q("O Estatuto da Cidade (2001) prevê o:", ["Plano diretor", "Fim das prefeituras", "Voto distrital", "Imposto único"], 0, "Obrigatório para cidades com mais de 20 mil habitantes."),
  q("Segregação socioespacial é:", ["A separação social no espaço", "A divisão entre dois estados vizinhos", "O crescimento das cidades médias", "A construção de linhas de metrô"], 0, "Ricos em bairros com infraestrutura; pobres em periferias e áreas de risco."),
  q("A hierarquia urbana organiza as cidades segundo:", ["Sua influência", "O número de rios que têm", "A altitude em relação ao mar", "A data em que foram fundadas"], 0, "Metrópoles nacionais, regionais, capitais regionais, centros locais."),
  qe("Nas grandes cidades, o asfalto, o concreto e a falta de árvores deixam o centro mais quente que a periferia arborizada.", "Esse fenômeno é chamado de:", ["Ilha de calor", "Inversão térmica", "Efeito estufa natural", "El Niño"], 0, "Mais áreas verdes e telhados claros ajudam a reduzir o calor."),
  qe("Em muitas cidades, áreas impermeabilizadas e rios canalizados fazem a água da chuva escoar rápido e causar alagamentos.", "Uma solução urbana é:", ["Criar parques e piscinões", "Asfaltar ainda mais ruas", "Retirar toda a vegetação", "Construir sobre os rios"], 0, "Solo permeável e reservatórios retêm a água."),
  qe("Imóveis vazios em áreas centrais aguardam valorização, enquanto falta moradia para muitas famílias.", "Essa prática é a:", ["Especulação imobiliária", "Reforma agrária", "Conurbação", "Desconcentração industrial"], 0, "O IPTU progressivo pode punir imóveis que não cumprem função social."),
  qe("Bairros antigos e degradados passam por reformas e valorização, e os moradores pobres acabam saindo pelo aumento do aluguel.", "Essa transformação urbana é a:", ["Gentrificação", "Favelização", "Êxodo rural", "Periferização industrial"], 0, "A renovação urbana sem política social expulsa a população original."),
  m("Marque problemas urbanos:", ["Déficit habitacional", "Mobilidade precária", "Enchentes", "Excesso de áreas verdes", "Falta de população"], [0, 1, 2], "Excesso de áreas verdes não é problema; falta de população é rara nas metrópoles."),
  m("Marque metrópoles brasileiras:", ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Paraty", "Lençóis"], [0, 1, 2], "Paraty e Lençóis são cidades pequenas."),
], "n");

extend(GEOGRAFIA, "Agropecuária e espaço rural", [
  q("A agricultura familiar no Brasil é responsável por:", ["Boa parte da comida", "Toda a soja que o país exporta", "Nenhum alimento consumido no país", "Somente flores e plantas ornamentais"], 0, "Feijão, mandioca, leite e hortaliças vêm em boa parte dela."),
  q("A Revolução Verde se baseou em:", ["Sementes, adubos e máquinas", "Fim do uso de agrotóxicos", "Volta ao trabalho com enxada", "Agricultura apenas orgânica"], 0, "Aumentou a produção, mas trouxe dependência química e impactos ambientais."),
  q("Pecuária extensiva é aquela com:", ["Gado solto em grandes áreas", "Animais confinados", "Muita tecnologia por hectare", "Pequenas propriedades"], 0, "Baixa produtividade por área; avança sobre florestas."),
  q("A agricultura orgânica evita:", ["Agrotóxicos", "O uso de qualquer água", "A colheita feita à mão", "O plantio direto no solo"], 0, "Usa controle biológico e adubação natural."),
  q("Boias-frias são:", ["Trabalhadores rurais temporários", "Donos de grandes fazendas", "Técnicos agrícolas formados", "Pescadores do litoral nordestino"], 0, "Recebem por dia ou por produção, muitas vezes sem direitos."),
  qe("A produção de soja no Brasil avançou do Sul para o Cerrado, com uso de calcário para corrigir a acidez do solo.", "Essa expansão foi possível graças à:", ["Pesquisa da Embrapa", "Proibição de máquinas", "Falta de chuvas", "Volta da escravidão"], 0, "A Embrapa adaptou variedades de soja ao clima tropical."),
  qe("Sistemas de integração lavoura-pecuária-floresta alternam plantio, pasto e árvores na mesma área.", "Uma vantagem é:", ["Recuperar o solo", "Aumentar a erosão do solo", "Acabar com a produção da fazenda", "Usar sempre áreas novas de mata"], 0, "Produz mais na mesma área, sem abrir novas fronteiras."),
  qe("Feiras e cestas de produtos agroecológicos crescem nas cidades.", "A agroecologia propõe:", ["Produção sustentável e diversa", "Monocultura voltada à exportação", "Uso intensivo de agrotóxicos", "Fim dos pequenos produtores rurais"], 0, "Respeita ciclos naturais e valoriza o agricultor familiar."),
  qe("Em alguns estados, a mecanização da colheita da cana substituiu o corte manual com queimadas.", "Uma consequência social foi:", ["Desemprego de cortadores", "Aumento de boias-frias", "Fim da produção de etanol", "Volta das queimadas"], 0, "Menos poluição, mas muitos trabalhadores perderam a ocupação."),
  m("Marque produtos que o Brasil lidera na exportação:", ["Soja", "Café", "Suco de laranja", "Trigo", "Petróleo refinado"], [0, 1, 2], "O Brasil importa trigo e derivados de petróleo."),
  m("Marque impactos do uso excessivo de agrotóxicos:", ["Contaminação da água", "Riscos à saúde", "Morte de polinizadores", "Aumento da biodiversidade", "Solo mais rico"], [0, 1, 2], "Agrotóxicos reduzem a biodiversidade."),
], "n");

extend(GEOGRAFIA, "Indústria e energia", [
  q("Na indústria, o modelo fordista se baseou na:", ["Linha de montagem", "Produção artesanal em oficinas", "Produção só sob encomenda", "Fábrica sem nenhum trabalhador"], 0, "Henry Ford: cada operário faz uma tarefa repetida."),
  q("O toyotismo introduziu o sistema:", ["Just in time", "Linha única", "Estoque gigante", "Trabalho escravo"], 0, "Produzir só o necessário, na hora certa, sem grandes estoques."),
  q("A Quarta Revolução Industrial envolve:", ["IA e automação", "Máquina a vapor e teares", "Carvão mineral e ferrovias", "Moinhos de vento e rodas d'água"], 0, "Também internet das coisas, robótica e big data."),
  q("A energia eólica é gerada pelo:", ["Vento", "Sol direto", "Calor da Terra", "Movimento das marés"], 0, "O Nordeste brasileiro lidera, com ventos constantes."),
  q("A energia geotérmica aproveita:", ["O calor interno da Terra", "A força das ondas do mar", "A luz direta do Sol", "A queima do lixo urbano"], 0, "Muito usada na Islândia, área vulcânica."),
  qe("Montadoras de carros deixaram a região do ABC paulista e se instalaram em cidades do interior e de outros estados.", "Esse movimento é a:", ["Desconcentração industrial", "Revolução Verde no campo", "Gentrificação dos centros", "Conurbação de metrópoles"], 0, "Busca de incentivos fiscais, mão de obra mais barata e menos sindicatos."),
  qe("Usinas nucleares produzem energia sem emitir CO₂, mas geram resíduos radioativos.", "O maior desafio dessa fonte é:", ["O lixo radioativo", "Falta de vento constante", "Depender de muitas chuvas", "Emitir muito CO₂ no ar"], 0, "Acidentes como Chernobyl (1986) e Fukushima (2011) também preocupam."),
  qe("A China concentra grande parte da produção industrial do mundo e é chamada de 'fábrica do mundo'.", "Um fator que atraiu indústrias para lá foi:", ["Mão de obra barata", "Falta de portos e de ferrovias", "Pouca população nas cidades", "Proibição de exportar produtos"], 0, "Também infraestrutura, Zonas Econômicas Especiais e incentivos."),
  qe("O Brasil tem o pré-sal, petróleo em grande profundidade sob uma camada de sal no oceano.", "A exploração do pré-sal exige:", ["Alta tecnologia", "Pouco investimento", "Apenas mão de obra manual", "Nenhum navio"], 0, "A Petrobras desenvolveu tecnologia para perfurar a mais de 5 mil metros."),
  m("Marque fontes renováveis:", ["Solar", "Eólica", "Hidráulica", "Carvão", "Gás natural"], [0, 1, 2], "Carvão e gás são fósseis."),
  m("Marque fatores de localização industrial:", ["Mão de obra", "Infraestrutura de transportes", "Mercado consumidor", "Fase da Lua", "Signo do dono"], [0, 1, 2], "Fase da Lua e signo não influenciam."),
], "n");

extend(GEOGRAFIA, "Globalização e blocos econômicos", [
  q("Empresas transnacionais são aquelas que:", ["Atuam em vários países", "Vendem só no país de origem", "Pertencem ao governo", "Não exportam"], 0, "Sede num país e filiais pelo mundo."),
  q("A OMC (Organização Mundial do Comércio) busca:", ["Regular o comércio", "Controlar o clima do planeta", "Organizar eleições nacionais", "Fiscalizar hospitais e a saúde"], 0, "Resolve disputas comerciais e negocia redução de tarifas."),
  q("O FMI empresta dinheiro a países em:", ["Crise financeira", "Guerra declarada", "Período eleitoral", "Crescimento rápido"], 0, "Costuma exigir ajustes fiscais em troca."),
  q("O Brics reúne inicialmente Brasil, Rússia, Índia, China e:", ["África do Sul", "Argentina, no Mercosul", "Bolívia, na América do Sul", "Bélgica, na Europa"], 0, "Economias emergentes; o grupo foi ampliado em 2024."),
  q("Uma zona de livre comércio elimina:", ["Tarifas entre os membros", "Fronteiras políticas dos países", "Moedas nacionais de cada um", "Os governos locais e estaduais"], 0, "Na união aduaneira, há também uma tarifa externa comum."),
  qe("Um tênis é desenhado nos EUA, fabricado no Vietnã com borracha da Malásia e vendido no Brasil.", "Isso exemplifica:", ["A produção global fragmentada", "O isolamento das economias", "O fim do comércio mundial", "A autossuficiência de cada país"], 0, "Cadeias globais de valor espalham etapas pelo mundo."),
  qe("Bilhões de dólares circulam por bolsas do mundo em segundos, de um país para outro.", "Isso só é possível graças:", ["Às redes de informação", "Ao transporte a cavalo", "Ao fim dos bancos", "Ao isolamento dos países"], 0, "A revolução técnico-científico-informacional acelerou os fluxos."),
  qe("Críticos dizem que a globalização aumentou a desigualdade entre países ricos e pobres.", "Um argumento a favor dessa crítica é que:", ["A riqueza se concentra", "Todos os países ficaram iguais", "As tecnologias chegam a todos", "Não existem mais fronteiras"], 0, "Os ganhos não se distribuíram de forma igual."),
  qe("O Mercosul é uma união aduaneira imperfeita entre Brasil, Argentina, Uruguai, Paraguai e, mais tarde, Bolívia.", "'Imperfeita' porque:", ["A tarifa externa tem exceções", "Não existe comércio entre eles", "O bloco não tem nenhum membro", "Os membros usam o euro como moeda"], 0, "Há listas de produtos fora da tarifa externa comum."),
  m("Marque traços da economia globalizada:", ["Fluxos rápidos de capitais", "Expansão das transnacionais", "Internet", "Fim das desigualdades", "Isolamento cultural"], [0, 1, 2], "A globalização não acabou com as desigualdades."),
  m("Marque organismos internacionais:", ["ONU", "OMC", "FMI", "Mercosul de 1500", "Liga Hanseática atual"], [0, 1, 2], "O Mercosul é de 1991; a Liga Hanseática foi medieval."),
], "n");

extend(GEOGRAFIA, "Geopolítica e conflitos", [
  q("O conflito na Caxemira envolve:", ["Índia e Paquistão", "China e Japão", "Rússia e Turquia", "Irã e Iraque"], 0, "Duas potências nucleares disputam a região desde 1947."),
  q("Os curdos são:", ["Um povo sem Estado", "Um país da Europa central", "Uma religião oficial do Irã", "Um bloco econômico asiático"], 0, "Vivem entre Turquia, Iraque, Irã e Síria."),
  q("O conflito entre Israel e palestinos envolve disputas por:", ["Território", "Neve", "Petróleo do Ártico", "Mares do Sul da China"], 0, "Também por Jerusalém, assentamentos e o direito de retorno."),
  q("Soft power é o poder de influenciar por meio de:", ["Cultura e diplomacia", "Armas nucleares", "Invasões militares", "Bloqueios navais"], 0, "Filmes, música, idioma e prestígio também são formas de poder."),
  q("O Mar do Sul da China é disputado principalmente por causa de:", ["Rotas e recursos", "Neve permanente no inverno", "Desertos de areia nas ilhas", "Florestas tropicais intocadas"], 0, "Petróleo, gás, pesca e passagem de navios."),
  qe("Muitas fronteiras africanas foram traçadas por europeus com régua, sem respeitar povos e culturas locais.", "Um efeito dessas fronteiras foi:", ["Conflitos étnicos", "Paz total no continente", "Fim de todas as religiões", "Unificação política da África"], 0, "Grupos rivais ficaram no mesmo país, e povos aliados foram separados."),
  qe("Grupos armados usam ataques contra civis para espalhar medo e pressionar governos.", "Essa prática é o:", ["Terrorismo", "Pacifismo", "Neutralismo", "Federalismo"], 0, "Ex.: atentados de 11 de setembro de 2001."),
  qe("A Antártida não pertence a nenhum país; um tratado de 1959 a reserva para pesquisa científica.", "Esse tratado proíbe:", ["Atividades militares", "Pesquisas científicas", "Visitas de cientistas", "Estações de pesquisa"], 0, "O Brasil tem a Estação Comandante Ferraz."),
  qe("A água doce é escassa em regiões como o Oriente Médio, onde rios atravessam vários países.", "Isso pode gerar:", ["Conflitos pela água", "Excesso de chuvas", "Fim da agricultura irrigada", "Redução da população"], 0, "Ex.: disputas pelos rios Tigre, Eufrates e Jordão."),
  m("Marque conflitos territoriais ou separatistas:", ["Caxemira", "Questão curda", "Catalunha", "Fuso horário de Brasília", "Linha do Equador"], [0, 1, 2], "Fuso e Equador não são conflitos."),
  o("Explique por que a água pode ser motivo de conflitos internacionais.", "A água doce é um recurso essencial e escasso em muitas regiões. Quando um rio atravessa vários países, o país que fica a montante pode construir barragens ou desviar água, reduzindo o volume para os vizinhos. Com o crescimento da população e da irrigação, a disputa aumenta, como no Oriente Médio.", [
    ["Recurso essencial e escasso", "escass", "essencial", "falta"],
    ["Rios que cruzam vários países / barragens", "rio", "barragem", "desvi", "paises"],
    ["Exemplo ou aumento da demanda", "oriente medio", "nilo", "tigre", "eufrates", "populacao", "irrigac"],
  ]),
], "n");

extend(GEOGRAFIA, "Regiões do Brasil", [
  q("A região Norte é a maior do Brasil em:", ["Área", "População", "Indústrias", "Cidades"], 0, "Mas tem a menor densidade demográfica."),
  q("A Zona da Mata nordestina fica:", ["No litoral úmido", "No Sertão, área mais seca", "No Agreste, entre as zonas", "Na Amazônia, ao norte"], 0, "Área de antigos engenhos de cana, com Mata Atlântica original."),
  q("O Agreste nordestino é:", ["Uma zona de transição", "Um deserto de areia", "Uma floresta densa", "Uma área de neve"], 0, "Fica entre a Zona da Mata úmida e o Sertão seco."),
  q("O Centro-Oeste se destaca hoje pela:", ["Produção de grãos", "Indústria têxtil", "Mineração de ouro", "Pesca marítima"], 0, "Soja, milho e algodão, sobretudo em Mato Grosso."),
  q("A Sudene foi criada em 1959 para desenvolver o:", ["Nordeste", "Sul, de imigrantes", "Sudeste industrial", "Norte amazônico"], 0, "Proposta por Celso Furtado."),
  qe("O IBGE divide o país em cinco regiões, com base em critérios naturais, econômicos e sociais.", "Essas regiões seguem:", ["Os limites dos estados", "Os biomas", "As bacias hidrográficas", "As latitudes"], 0, "Cada estado fica inteiro em uma região."),
  qe("Geógrafos como Pedro Geiger propuseram dividir o Brasil em três complexos regionais: Amazônia, Nordeste e Centro-Sul.", "Essa divisão:", ["Ignora os limites estaduais", "Tem cinco regiões oficiais", "Usa só critérios de clima", "Foi criada pelo próprio IBGE"], 0, "Baseia-se na formação histórica e econômica; o norte de Minas fica no Nordeste."),
  qe("A Zona Franca de Manaus oferece incentivos fiscais para indústrias de eletrônicos e motos.", "Seu objetivo foi:", ["Desenvolver a região", "Desmatar a floresta", "Exportar soja do Cerrado", "Acabar com a indústria local"], 0, "Criada em 1967 para levar empregos e ocupação à região."),
  qe("O Sul tem forte presença de descendentes de alemães, italianos e poloneses.", "Isso se explica pela:", ["Imigração do século XIX", "Chegada da corte em 1808", "Colonização feita pela Espanha", "Migração vinda do Nordeste"], 0, "Colônias de pequenos proprietários foram criadas no Sul."),
  m("Marque estados do Nordeste:", ["Bahia", "Pernambuco", "Ceará", "Goiás", "Tocantins"], [0, 1, 2], "Goiás é do Centro-Oeste; Tocantins, do Norte."),
  m("Marque características do Sudeste:", ["Maior população", "Maior PIB", "Maiores metrópoles", "Menor densidade", "Clima polar"], [0, 1, 2], "A menor densidade é a do Norte."),
], "n");

extend(GEOGRAFIA, "Meio ambiente e sustentabilidade", [
  q("Os 3 Rs da sustentabilidade são:", ["Reduzir, reutilizar e reciclar", "Rir, rezar e repetir sempre", "Retirar, rasgar e recortar papel", "Remar, reduzir e retirar lixo"], 0, "Reduzir vem primeiro: é o mais eficaz."),
  q("A Agenda 2030 da ONU tem:", ["17 objetivos", "3 metas militares globais", "Um só objetivo econômico", "100 leis para cada país"], 0, "Inclui fim da pobreza, educação de qualidade e ação climática."),
  q("Pegada ecológica mede:", ["O impacto do consumo", "O tamanho médio do pé humano", "A altitude de um lugar no mapa", "O número de árvores de uma cidade"], 0, "Área necessária para sustentar nosso estilo de vida."),
  q("A logística reversa obriga empresas a:", ["Recolher produtos usados", "Vender mais rápido seus produtos", "Produzir sem seguir regras", "Exportar o lixo para outros países"], 0, "Ex.: pilhas, pneus e embalagens de agrotóxicos."),
  q("A Eco-92 aconteceu no:", ["Rio de Janeiro", "Estocolmo, na Suécia", "Kyoto, no Japão", "Paris, na França"], 0, "Conferência da ONU sobre meio ambiente; gerou a Agenda 21."),
  qe("A Política Nacional de Resíduos Sólidos (2010) determinou o fim dos lixões a céu aberto.", "Os lixões são problemáticos porque:", ["Contaminam solo e água", "Produzem energia limpa", "Reciclam tudo", "Não geram odores"], 0, "O chorume infiltra no solo; o ideal são aterros sanitários e reciclagem."),
  qe("Catadores de materiais recicláveis organizados em cooperativas separam toneladas de lixo por dia.", "Eles contribuem para:", ["Reciclagem e renda", "Aumento dos lixões", "Fim da coleta", "Poluição dos rios"], 0, "Ainda assim, muitos trabalham sem direitos e com baixa remuneração."),
  qe("O desenvolvimento sustentável foi definido como aquele que atende às necessidades do presente sem comprometer as gerações futuras.", "Esse conceito foi divulgado pelo:", ["Relatório Brundtland", "Tratado de Versalhes", "Manifesto Comunista", "Código de Hamurábi"], 0, "O relatório 'Nosso Futuro Comum', da ONU."),
  qe("Unidades de conservação como parques nacionais protegem ecossistemas e espécies.", "No Brasil, quem cria e gere boa parte delas é o:", ["ICMBio", "Banco Central", "IBGE", "Detran"], 0, "O Instituto Chico Mendes administra as unidades federais."),
  m("Marque atitudes sustentáveis:", ["Separar o lixo", "Economizar água", "Usar transporte coletivo", "Queimar lixo no quintal", "Jogar óleo na pia"], [0, 1, 2], "Queimar lixo e jogar óleo na pia poluem."),
  m("Marque conferências ambientais:", ["Estocolmo-72", "Eco-92", "Rio+20", "Conferência de Berlim", "Congresso de Viena"], [0, 1, 2], "Berlim (1884) e Viena (1815) foram encontros políticos."),
], "n");

extend(GEOGRAFIA, "Escalas, coordenadas e fusos", [
  q("A linha do Equador corresponde à latitude:", ["0°", "90°", "180°", "23°"], 0, "Divide a Terra em hemisférios norte e sul."),
  q("O Meridiano de Greenwich corresponde à longitude:", ["0°", "90°", "180°", "45°"], 0, "Divide a Terra em hemisférios leste e oeste."),
  q("A latitude máxima é de:", ["90°", "180°", "360°", "45°"], 0, "Nos polos norte e sul."),
  q("O Brasil tem quantos fusos horários oficiais?", ["4", "1", "2", "6"], 0, "Incluindo o de Fernando de Noronha (−2 h em relação a Greenwich)."),
  q("A Linha Internacional de Data fica perto do meridiano de:", ["180°", "0°", "90° O", "45° L"], 0, "Ao cruzá-la para oeste, avança-se um dia no calendário."),
  qe("Num mapa de escala 1:100.000, a distância entre duas cidades é de 5 cm.", "A distância real é:", ["5 km", "50 km", "500 m", "500 km"], 0, "5 cm × 100.000 = 500.000 cm = 5 km."),
  qe("São Paulo está a cerca de 45° de longitude oeste. Cada fuso equivale a 15°.", "A diferença em relação a Greenwich é de:", ["3 horas a menos", "3 horas a mais", "5 horas a menos", "1 hora a mais"], 0, "45 ÷ 15 = 3; a oeste, o horário é atrasado."),
  qe("Quando são 12h em Brasília (−3 h), um amigo em Lisboa (0 h, sem horário de verão) liga.", "Que horas são em Lisboa?", ["15h", "9h", "12h", "18h"], 0, "Lisboa está 3 horas à frente de Brasília."),
  qe("Um mapa de um bairro mostra ruas, casas e praças com muitos detalhes.", "Esse mapa tem escala:", ["Grande", "Pequena", "Nula", "Negativa"], 0, "Escala grande = área pequena com muitos detalhes (ex.: 1:5.000)."),
  q("O Trópico de Capricórnio passa pelo estado de:", ["São Paulo", "Bahia", "Amazonas", "Rio Grande do Sul"], 0, "Também por Paraná e Mato Grosso do Sul."),
  m("Marque afirmações corretas sobre coordenadas:", ["Latitude vai de 0° a 90°", "Longitude vai de 0° a 180°", "Paralelos indicam latitude", "Meridianos indicam latitude", "Latitude vai até 180°"], [0, 1, 2], "Meridianos indicam longitude."),
  m("Marque países atravessados pela linha do Equador:", ["Brasil", "Equador", "Quênia", "Argentina", "Japão"], [0, 1, 2], "Argentina e Japão ficam fora da linha."),
], "n");

extend(GEOGRAFIA, "Biomas brasileiros", [
  q("O maior bioma brasileiro em área é a:", ["Amazônia", "Caatinga", "Mata Atlântica", "Cerrado"], 0, "Ocupa cerca de 49% do território."),
  q("O Cerrado é chamado de 'berço das águas' porque:", ["Nele nascem grandes rios", "Chove forte o ano inteiro", "É coberto por grandes lagos", "Fica todo no litoral do país"], 0, "Abastece as bacias do São Francisco, do Paraná e do Tocantins-Araguaia."),
  q("A Caatinga é o único bioma:", ["Exclusivamente brasileiro", "Com neve no inverno", "De clima equatorial", "Sem nenhuma espécie endêmica"], 0, "Muitas de suas espécies só existem ali."),
  q("O Pampa é marcado por:", ["Campos e gado", "Florestas densas e úmidas", "Dunas de areia branca", "Manguezais no litoral"], 0, "No Rio Grande do Sul, com relevo de coxilhas."),
  q("O Pantanal é a maior:", ["Planície alagável do mundo", "Floresta de coníferas da Terra", "Área de dunas da América", "Cadeia de montanhas do Brasil"], 0, "Ciclo de cheias e secas define a vida no bioma."),
  qe("Restam cerca de 12% da cobertura original da Mata Atlântica, que se estende ao longo do litoral.", "A principal causa dessa devastação foi:", ["A ocupação histórica", "Excesso de chuvas no litoral", "Ataques de animais à mata", "Terremotos frequentes na costa"], 0, "Pau-brasil, cana, café e cidades ocuparam a região."),
  qe("No Cerrado, muitas árvores têm cascas grossas e raízes profundas.", "Essas adaptações ajudam a resistir:", ["Ao fogo e à seca", "À neve do inverno", "Às marés do oceano", "Ao frio polar intenso"], 0, "Queimadas naturais e estação seca fazem parte do bioma."),
  qe("Os manguezais ficam na transição entre rios e mar e servem de berçário para peixes e caranguejos.", "Uma ameaça a eles é:", ["Aterros e poluição", "Excesso natural de sal", "Falta de lama nas margens", "Neve nas regiões costeiras"], 0, "São áreas de preservação permanente."),
  qe("Em 2020, incêndios queimaram cerca de um quarto do Pantanal.", "Um efeito desses incêndios foi:", ["Grande perda de animais", "Aumento da biodiversidade", "Mais áreas alagadas", "Fim da estação seca"], 0, "Milhões de animais morreram; a seca agravou o fogo."),
  m("Marque biomas brasileiros:", ["Pantanal", "Pampa", "Caatinga", "Tundra", "Taiga"], [0, 1, 2], "Tundra e taiga são de clima frio."),
  m("Marque ameaças ao Cerrado:", ["Expansão da soja", "Queimadas fora de época", "Pastagens", "Neve em excesso", "Tsunamis"], [0, 1, 2], "Neve e tsunamis não atingem o Cerrado."),
], "n");

extend(GEOGRAFIA, "Transição demográfica", [
  q("Na primeira fase da transição demográfica, há:", ["Natalidade e mortalidade altas", "Natalidade e mortalidade baixas", "Só natalidade baixa", "População em queda"], 0, "A população cresce pouco, como antes da industrialização."),
  q("Bônus demográfico é o período com:", ["Muitos em idade ativa", "Muitos idosos aposentados", "Muitas crianças pequenas", "Queda rápida da população"], 0, "Boa chance de crescer economicamente, se houver empregos e educação."),
  q("A taxa de reposição populacional é de cerca de:", ["2,1 filhos por mulher", "1 filho por mulher", "4 filhos por mulher", "6 filhos por mulher"], 0, "Abaixo dela, a população tende a encolher; o Brasil está em cerca de 1,6."),
  q("A expectativa de vida no Brasil:", ["Aumentou nas últimas décadas", "Caiu sem parar desde 1950", "Ficou igual desde o ano 1900", "É a maior de todo o mundo"], 0, "Saneamento, vacinas e acesso à saúde ajudaram."),
  qe("Na segunda fase da transição, vacinas e saneamento reduziram rapidamente a mortalidade, enquanto a natalidade seguiu alta.", "Isso provocou:", ["Explosão demográfica", "Queda da população", "Fim dos nascimentos", "Envelhecimento rápido"], 0, "Foi o que ocorreu no Brasil entre 1940 e 1970."),
  qe("Países como Itália e Japão têm mais mortes do que nascimentos.", "Nesses países, a população:", ["Diminui", "Explode", "Fica muito jovem", "Dobra a cada década"], 0, "Crescimento vegetativo negativo."),
  qe("Com o envelhecimento da população, cresce o número de aposentados em relação aos trabalhadores ativos.", "Isso pressiona principalmente:", ["A previdência social", "A indústria de brinquedos", "As escolas infantis", "As maternidades"], 0, "Por isso se discutem reformas da previdência."),
  qe("A China adotou a política do filho único (1979-2015) para frear o crescimento populacional.", "Um resultado dessa política foi:", ["Envelhecimento acelerado", "Explosão de nascimentos", "Mais crianças que adultos", "Fim da urbanização"], 0, "Hoje a China estimula as famílias a terem mais filhos."),
  q("A razão de dependência compara:", ["Dependentes e ativos", "Homens e mulheres de um país", "População da cidade e do campo", "Imigrantes e emigrantes do país"], 0, "Quanto maior, mais pessoas dependem de quem trabalha."),
  m("Marque efeitos do envelhecimento populacional:", ["Mais gastos com saúde", "Pressão na previdência", "Menos jovens no mercado", "Mais escolas infantis", "Explosão de nascimentos"], [0, 1, 2], "Com menos crianças, a demanda por escolas infantis cai."),
  m("Marque fases da transição demográfica em ordem correta:", ["Mortalidade cai antes da natalidade", "Natalidade cai depois", "Ao fim, as duas ficam baixas", "Natalidade cai primeiro", "As duas sobem no fim"], [0, 1, 2], "Primeiro cai a mortalidade, depois a natalidade."),
], "n");

extend(GEOGRAFIA, "Regiões e migrações no Brasil", [
  q("O êxodo rural é a migração do:", ["Campo para a cidade", "Exterior para o Brasil", "Litoral para o interior", "Sul para o Norte"], 0, "Ganhou força no Brasil entre 1950 e 1980."),
  q("A migração pendular ocorre quando pessoas:", ["Vão e voltam todo dia", "Mudam de país para sempre", "Migram em certas estações", "Fogem de guerras e conflitos"], 0, "Ex.: moram numa cidade vizinha e trabalham na capital."),
  q("Migração sazonal é aquela que ocorre:", ["Em certas épocas", "Todos os dias úteis", "Uma única vez na vida", "Somente entre países"], 0, "Ex.: trabalhadores que vão à colheita da cana ou da laranja."),
  q("Os 'soldados da borracha' migraram para a Amazônia durante:", ["A Segunda Guerra", "O Império", "A ditadura militar", "A crise de 2008"], 0, "Nordestinos foram recrutados para extrair látex para os Aliados."),
  qe("Nos anos 1950-1970, milhões de nordestinos foram para São Paulo e Rio de Janeiro.", "Um fator de atração foi:", ["Empregos na indústria", "Secas fortes no Sudeste", "Falta de cidades grandes", "Neve no Nordeste"], 0, "Fatores de repulsão: seca, concentração de terras e pobreza no Nordeste."),
  qe("Nos últimos anos, cresceu o número de nordestinos que voltam a seus estados de origem.", "Essa volta à terra natal é chamada de:", ["Migração de retorno", "Êxodo urbano para o mar", "Diáspora internacional", "Transumância de gado"], 0, "Ligado ao crescimento econômico do Nordeste e à crise nas metrópoles."),
  qe("Gaúchos e paranaenses migraram para Mato Grosso e Rondônia em busca de terras baratas a partir dos anos 1970.", "Esse fluxo acompanhou:", ["A fronteira agrícola", "A crise da borracha", "A abolição da escravidão", "A Revolução Industrial inglesa"], 0, "Projetos de colonização e incentivos do governo militar."),
  qe("Desde 2015, milhares de venezuelanos chegaram a Roraima fugindo da crise em seu país.", "Para distribuí-los, o governo criou a:", ["Interiorização", "Proibição de entrada no país", "Expulsão em massa pela fronteira", "Zona Franca de Roraima"], 0, "A Operação Acolhida leva migrantes a outras cidades com mais empregos."),
  q("Brasília atraiu migrantes chamados de:", ["Candangos", "Bandeirantes", "Retirantes", "Emboabas"], 0, "Trabalhadores que construíram a capital nos anos 1950."),
  m("Marque fatores de repulsão no campo:", ["Concentração de terras", "Mecanização", "Secas", "Empregos industriais", "Hospitais melhores"], [0, 1, 2], "Empregos e hospitais são fatores de atração das cidades."),
  m("Marque tipos de migração:", ["Pendular", "Sazonal", "Êxodo rural", "Rotação", "Translação"], [0, 1, 2], "Rotação e translação são movimentos da Terra."),
], "n");

extend(GEOGRAFIA, "Matriz energética", [
  q("A matriz elétrica brasileira tem como principal fonte a:", ["Hidrelétrica", "Nuclear de Angra", "Termelétrica a carvão", "Queima de petróleo"], 0, "Cerca de 60% da eletricidade; eólica e solar crescem rápido."),
  q("O etanol brasileiro é feito principalmente de:", ["Cana-de-açúcar", "Milho de exportação", "Soja transgênica", "Trigo importado"], 0, "Nos EUA, o etanol vem do milho."),
  q("Biodiesel é produzido a partir de:", ["Óleos vegetais", "Carvão mineral de Santa Catarina", "Urânio enriquecido em Angra", "Areia das praias do litoral"], 0, "Soja é a principal matéria-prima no Brasil."),
  q("A maior hidrelétrica do Brasil em produção é:", ["Itaipu", "Belo Monte", "Tucuruí", "Sobradinho"], 0, "Binacional, com o Paraguai, no rio Paraná."),
  q("Mundialmente, a fonte de energia mais usada ainda é o:", ["Petróleo", "Vento das usinas eólicas", "Sol dos painéis fotovoltaicos", "Biogás de aterros sanitários"], 0, "Fontes fósseis ainda dominam a matriz mundial."),
  qe("Em 2001, a falta de chuvas reduziu os reservatórios e o Brasil teve racionamento de energia ('apagão').", "Isso mostrou o risco de:", ["Depender de hidrelétricas", "Usar a energia solar", "Ter muitos ventos no litoral", "Exportar petróleo bruto"], 0, "Diversificar a matriz reduz a vulnerabilidade às secas."),
  qe("Painéis solares em telhados permitem que casas gerem a própria eletricidade e enviem o excedente à rede.", "Esse modelo é chamado de:", ["Geração distribuída", "Energia nuclear", "Termelétrica a carvão", "Matriz fóssil"], 0, "A energia é produzida perto de onde é consumida."),
  qe("A usina de Belo Monte, no rio Xingu, gerou polêmica.", "Uma crítica foi o impacto sobre:", ["Indígenas e ribeirinhos", "O frio na região Sul", "As geleiras dos Andes", "O deserto do Saara"], 0, "Alterou o fluxo do rio e o modo de vida das comunidades locais."),
  qe("O hidrogênio verde é produzido pela eletrólise da água usando energia renovável.", "Ele é visto como promissor porque:", ["Não emite CO₂ na queima", "É barato e abundante hoje", "Vem do petróleo", "Gera lixo radioativo"], 0, "Queimado, gera só água; o Nordeste brasileiro tem potencial para produzi-lo."),
  m("Marque fontes de energia não renováveis:", ["Petróleo", "Carvão mineral", "Urânio", "Vento", "Sol"], [0, 1, 2], "Vento e sol se renovam."),
  o("Explique por que a matriz elétrica brasileira é considerada limpa, mas também vulnerável.", "A matriz elétrica brasileira é limpa porque a maior parte vem de fontes renováveis, principalmente hidrelétricas, além de eólica, solar e biomassa, que emitem pouco CO₂. Mas é vulnerável porque depende muito das chuvas: em secas, os reservatórios baixam e é preciso acionar termelétricas, mais caras e poluentes.", [
    ["Maioria renovável / hidrelétricas", "renovav", "hidreletr", "eolic", "solar"],
    ["Emite pouco CO₂", "pouco", "co2", "emiss", "limpa"],
    ["Depende de chuvas / secas", "chuva", "seca", "reservat", "termel"],
  ]),
], "n");

extend(GEOGRAFIA, "Agronegócio e questão agrária", [
  q("Latifúndio é:", ["Uma grande propriedade rural", "Uma horta pequena no quintal", "Um bairro urbano planejado", "Uma reserva indígena demarcada"], 0, "No Brasil, a concentração de terras é uma das maiores do mundo."),
  q("Os assentamentos rurais do Incra servem para:", ["Assentar famílias sem-terra", "Ampliar latifúndios de soja", "Abrigar indústrias pesadas", "Criar reservas de caça"], 0, "Terras desapropriadas são divididas entre famílias; o MST luta pela reforma agrária desde 1984."),
  q("O Incra é o órgão federal responsável pela:", ["Reforma agrária", "Previsão do tempo", "Coleta de impostos", "Educação básica"], 0, "Instituto Nacional de Colonização e Reforma Agrária."),
  q("A grilagem é a:", ["Falsificação de títulos de terra", "Criação comercial de grilos", "Irrigação por gotejamento", "Rotação de culturas no campo"], 0, "O nome vem do truque de envelhecer papéis com grilos numa gaveta."),
  qe("A Constituição de 1988 diz que a propriedade rural deve cumprir sua função social.", "Terras improdutivas podem ser:", ["Desapropriadas", "Vendidas a estrangeiros sem regra", "Isentas de todos os impostos", "Transformadas em lixões a céu aberto"], 0, "O proprietário é indenizado com títulos da dívida agrária."),
  qe("O agronegócio responde por grande parte das exportações brasileiras, sobretudo soja, carne e açúcar.", "Uma crítica comum a esse modelo é:", ["Concentrar terras", "Falta de tecnologia no campo", "Pouca exportação de produtos", "Excesso de pequenos produtores"], 0, "Também se criticam o uso de agrotóxicos e os conflitos no campo."),
  qe("Em 1996, 19 trabalhadores sem-terra foram mortos pela polícia em Eldorado dos Carajás (PA).", "O episódio revela:", ["Violência nos conflitos agrários", "Paz no campo brasileiro", "Fim da concentração de terras", "Sucesso da reforma agrária"], 0, "17 de abril virou o Dia Internacional de Luta Camponesa."),
  qe("Quilombolas lutam pelo reconhecimento e pela titulação das terras ocupadas por seus antepassados.", "Esse direito está previsto na:", ["Constituição de 1988", "Lei Áurea", "Lei de Terras de 1850", "Constituição de 1824"], 0, "O artigo 68 do ADCT garante a titulação das terras quilombolas."),
  q("O Brasil é um dos maiores exportadores mundiais de:", ["Carne bovina", "Trigo", "Arroz basmati", "Vinho"], 0, "Também lidera em soja, café, açúcar e suco de laranja."),
  m("Marque problemas da questão agrária brasileira:", ["Concentração de terras", "Grilagem", "Conflitos violentos", "Excesso de reforma agrária", "Falta de latifúndios"], [0, 1, 2], "O problema é a concentração, e não a falta de latifúndios."),
  m("Marque produtos importantes do agronegócio brasileiro:", ["Soja", "Carne bovina", "Celulose", "Neve", "Petróleo de xisto"], [0, 1, 2], "Celulose vem do eucalipto plantado."),
], "n");

extend(GEOGRAFIA, "Blocos econômicos", [
  q("O Nafta foi substituído em 2020 pelo:", ["USMCA", "Mercosul", "Apec", "Brics"], 0, "Acordo entre EUA, México e Canadá."),
  q("O G20 reúne:", ["Grandes economias", "Só países africanos", "Países sem litoral", "Ilhas do Pacífico Sul"], 0, "19 países mais a União Europeia e a União Africana; o Brasil presidiu o grupo em 2024."),
  q("A União Europeia é um exemplo de:", ["União econômica e monetária", "Zona de livre comércio simples", "Aliança militar", "Organização religiosa"], 0, "Tem moeda comum (euro) em parte dos membros e livre circulação de pessoas."),
  q("O Espaço Schengen permite:", ["Circular sem fronteiras", "Usar o dólar na Europa", "Votar em qualquer país", "Fechar todas as fronteiras"], 0, "Abrange a maior parte dos países da União Europeia e outros."),
  q("A Asean reúne países do:", ["Sudeste Asiático", "Oriente Médio árabe", "Norte da Europa nórdica", "Caribe e da América Central"], 0, "Ex.: Indonésia, Tailândia, Vietnã, Filipinas."),
  qe("Em um mercado comum, além de mercadorias, circulam livremente pessoas, serviços e capitais.", "Esse estágio é mais profundo que:", ["A união aduaneira", "A união monetária", "A união política", "O federalismo"], 0, "Ordem: zona de livre comércio → união aduaneira → mercado comum → união econômica e monetária."),
  qe("O acordo comercial entre Mercosul e União Europeia foi negociado por mais de 20 anos.", "Um ponto de resistência dos agricultores europeus foi:", ["A concorrência agrícola", "A falta de soja na Europa", "O excesso de indústrias no Mercosul", "O uso do euro no Brasil"], 0, "Temiam carnes e grãos mais baratos; também houve debate ambiental."),
  qe("A Grécia, em crise da dívida (2010), não podia desvalorizar a própria moeda para ganhar competitividade.", "Isso ocorria porque:", ["Usava o euro", "Não tinha moeda", "Usava o dólar", "Saiu da UE"], 0, "Na união monetária, a política de juros e câmbio é do Banco Central Europeu."),
  qe("A União Africana busca integração, paz e desenvolvimento no continente.", "Em 2021, entrou em vigor a:", ["Área de livre comércio africana", "Moeda única de toda a África", "União militar com a Otan", "Saída coletiva da ONU"], 0, "A AfCFTA busca ampliar o comércio entre os países africanos."),
  m("Marque membros plenos do Mercosul:", ["Brasil", "Argentina", "Uruguai", "Chile", "México"], [0, 1, 2], "Chile é associado; México não participa."),
  m("Marque vantagens dos blocos econômicos:", ["Mais comércio entre membros", "Mais poder de negociação", "Redução de tarifas", "Fim da soberania de todos", "Proibição de exportar"], [0, 1, 2], "Os países mantêm sua soberania, ainda que cedam parte dela."),
], "n");

extend(GEOGRAFIA, "Conflitos e refugiados", [
  q("Pela Convenção de 1951, é refugiado quem:", ["Foge de perseguição", "Muda de cidade por emprego", "Viaja a turismo por um mês", "Estuda no exterior com bolsa"], 0, "Protegida pela Convenção de 1951 e pelo Acnur."),
  q("O Acnur é a agência da ONU para:", ["Refugiados", "Comércio", "Saúde animal", "Aviação"], 0, "Alto Comissariado das Nações Unidas para Refugiados."),
  q("Deslocados internos são pessoas que fogem:", ["Sem sair do país", "Para outro continente", "Só por turismo de verão", "Para estudar no exterior"], 0, "Não cruzam fronteiras internacionais, mas perderam suas casas."),
  q("A crise dos rohingyas atinge uma minoria muçulmana de:", ["Mianmar", "Brasil", "Canadá", "Noruega"], 0, "Fugiram em massa para Bangladesh após violência em 2017."),
  qe("A guerra civil na Síria, iniciada em 2011, forçou milhões a deixarem o país.", "Muitos foram para países vizinhos, como:", ["Turquia e Líbano", "Brasil e Chile", "Japão e Coreia", "Canadá e México"], 0, "A Turquia abriga o maior número de refugiados sírios."),
  qe("Mudanças climáticas aumentam secas, enchentes e a subida do nível do mar em ilhas do Pacífico.", "Pessoas forçadas a sair por esses motivos são chamadas de:", ["Refugiados climáticos", "Turistas ambientais", "Migrantes pendulares", "Retirantes urbanos"], 0, "O termo ainda não tem proteção jurídica plena na Convenção de 1951."),
  qe("O Brasil concede um visto humanitário a haitianos, sírios, afegãos e ucranianos.", "Esse visto facilita:", ["Entrada e trabalho legais", "A expulsão rápida do país", "A proibição de entrada", "O serviço militar obrigatório"], 0, "Permite residir e trabalhar com documentos."),
  qe("Muros e cercas foram erguidos em fronteiras, como entre EUA e México e no leste da Europa.", "Esses muros buscam:", ["Barrar migrantes", "Facilitar o comércio", "Proteger florestas", "Marcar fusos horários"], 0, "Críticos dizem que desviam rotas e aumentam mortes em travessias perigosas."),
  q("O princípio de não devolução (non-refoulement) proíbe:", ["Devolvê-los ao perigo", "Receber refugiados no país", "Dar documentos aos refugiados", "Abrigar crianças desacompanhadas"], 0, "É base do direito internacional dos refugiados."),
  m("Marque causas de deslocamentos forçados:", ["Guerras", "Perseguição política", "Desastres climáticos", "Férias escolares", "Intercâmbio cultural"], [0, 1, 2], "Férias e intercâmbio são deslocamentos voluntários."),
  m("Marque direitos dos refugiados no Brasil:", ["Documentos", "Trabalho", "Saúde pelo SUS", "Expulsão sem motivo", "Proibição de estudar"], [0, 1, 2], "A Lei de Migração (2017) garante acesso a serviços públicos."),
], "n");

// Complemento (mais prática por assunto).
extend(GEOGRAFIA, "Cartografia", [
  q("Numa escala 1:50.000, 1 cm no mapa vale:", ["500 m", "5 km no terreno", "50 m no terreno", "50 km no terreno"], 0, "50.000 cm = 500 m."),
  q("A orientação de um mapa costuma usar:", ["O norte", "A linha da costa", "O maior rio do país", "A capital mais próxima"], 0, "Por convenção, o norte fica para cima."),
  qe("Um mapa-múndi com o Sul para cima, feito por um artista uruguaio, questiona a convenção do Norte no topo.", "A obra mostra que mapas:", ["Expressam pontos de vista", "São sempre neutros e exatos", "Não têm convenções", "Devem mostrar só a Europa"], 0, "Ex.: 'América Invertida', de Joaquín Torres García."),
  q("Anamorfose é um mapa que:", ["Distorce áreas por um dado", "Mostra só o relevo do país", "Usa apenas a cor azul", "Não tem nenhuma legenda"], 0, "Ex.: países 'inflados' conforme a população."),
  q("A cartografia que mapeia com drones e GPS é chamada de:", ["Digital", "Medieval portuguesa", "Rupestre das cavernas", "Manual com bússola"], 0, "Dados em tempo real e grande precisão."),
], "n");

extend(GEOGRAFIA, "Geologia e relevo", [
  q("A Pangeia foi:", ["Um supercontinente", "Um oceano gelado", "Uma cordilheira andina", "Uma placa do Pacífico"], 0, "Há cerca de 250 milhões de anos; depois se fragmentou."),
  q("A teoria da deriva continental foi proposta por:", ["Wegener", "Charles Darwin", "Isaac Newton", "Galileu Galilei"], 0, "Alfred Wegener, em 1912."),
  qe("No Brasil, o relevo é antigo e muito desgastado, com altitudes modestas.", "Isso se explica por:", ["Longa ação da erosão", "Vulcões ativos no país", "Choque recente de placas", "Muito gelo nas serras"], 0, "Estruturas antigas, erodidas por milhões de anos."),
  q("Intemperismo é:", ["A decomposição das rochas", "A formação de vulcões", "O choque de placas", "A queda de meteoros"], 0, "Pode ser físico (temperatura) ou químico (água)."),
  q("As voçorocas são:", ["Grandes erosões no solo", "Lagos de origem vulcânica", "Picos de montanhas altas", "Ilhas no meio do mar"], 0, "Causadas por chuva em solo sem vegetação."),
], "n");

extend(GEOGRAFIA, "Clima e hidrografia", [
  q("O El Niño é:", ["O aquecimento do Pacífico", "Um furacão do Atlântico", "Um rio da Amazônia", "Uma montanha andina"], 0, "Muda chuvas: seca no Norte/Nordeste e chuva no Sul do Brasil."),
  q("A maior bacia hidrográfica totalmente brasileira é a:", ["Do São Francisco", "Do rio Amazonas", "Do rio da Prata", "Do rio Paraguai"], 0, "A Amazônica e a do Prata abrangem outros países."),
  qe("A transposição do rio São Francisco leva água a áreas do semiárido por canais.", "Uma crítica ao projeto é:", ["Impactos e custo alto", "Excesso de chuva no Sertão", "Falta total de canais", "Água salgada demais"], 0, "Também se discute quem realmente recebe a água."),
  q("As monções são:", ["Ventos sazonais com chuvas", "Rios subterrâneos frios", "Geleiras dos Himalaias", "Desertos da Ásia"], 0, "Típicas do sul da Ásia, como na Índia."),
  q("Frentes frias trazem ao Sul e Sudeste:", ["Queda de temperatura", "Calor intenso e seco", "Neve em todo o país", "Fim das chuvas no verão"], 0, "Massa polar avança e provoca chuva e frio."),
], "n");

extend(GEOGRAFIA, "Biomas e questões ambientais", [
  q("A chuva ácida é causada principalmente por:", ["Gases de fábricas e carros", "Excesso de árvores nas cidades", "Água do mar evaporada", "Neve derretida nas serras"], 0, "Óxidos de enxofre e nitrogênio reagem com a água."),
  qe("Ilhas do Pacífico, como Tuvalu, correm risco de desaparecer.", "O motivo é:", ["A subida do mar", "O excesso de vulcões ativos", "A queda do nível do oceano", "O frio intenso do inverno"], 0, "O aquecimento derrete geleiras e expande a água do mar."),
  q("O efeito estufa natural é:", ["Necessário à vida", "Sempre um desastre", "Causado só por carros", "Inexistente na Terra"], 0, "Sem ele, a Terra seria muito fria; o problema é a intensificação."),
  q("A COP é a conferência anual da ONU sobre:", ["Mudanças climáticas", "Futebol entre seleções", "Comércio de armas", "Turismo internacional"], 0, "Em 2025, foi realizada em Belém (COP30)."),
  q("Desmatar florestas tropicais contribui para:", ["Mais CO₂ no ar", "Mais chuva em todo lugar", "Menos calor no planeta", "Mais oxigênio no ar"], 0, "Queimadas e perda de árvores liberam carbono."),
], "n");

extend(GEOGRAFIA, "População e demografia", [
  q("Imigrante é quem:", ["Entra em outro país", "Sai do próprio país", "Nunca muda de lugar", "Viaja só a turismo"], 0, "Emigrante é quem sai."),
  q("Expectativa de vida é:", ["A média de anos vividos", "A idade da pessoa mais velha", "O número de nascimentos", "A idade para votar"], 0, "No Brasil, cerca de 76 anos."),
  qe("O Censo 2022 mostrou que o Brasil tem cerca de 203 milhões de habitantes.", "O Censo é feito pelo:", ["IBGE", "Banco Central do Brasil", "Ministério da Defesa", "Supremo Tribunal Federal"], 0, "Recenseamento a cada dez anos (em geral)."),
  q("País populoso é aquele com:", ["Muitos habitantes", "Muita área territorial", "Muitos habitantes por km²", "Muitos idosos e poucos jovens"], 0, "Povoado refere-se à densidade."),
  q("A taxa de natalidade mede:", ["Nascimentos por mil habitantes", "Mortes de idosos por ano", "Casamentos por cidade", "Migrantes por estado"], 0, "Em geral, ao longo de um ano."),
], "n");

extend(GEOGRAFIA, "Urbanização", [
  q("Metrópole é:", ["Uma grande cidade influente", "Um bairro rural isolado", "Uma vila de pescadores", "Uma fazenda de café"], 0, "Polariza cidades vizinhas e outras regiões."),
  q("Cidade global é aquela que:", ["Comanda fluxos mundiais", "Fica perto do Equador", "Tem só população idosa", "Não tem conexões externas"], 0, "Ex.: Nova York, Londres, Tóquio, São Paulo."),
  qe("Em São Paulo, muitos moram longe do trabalho e passam horas no transporte público.", "Isso revela um problema de:", ["Mobilidade urbana", "Excesso de áreas verdes", "Falta de população", "Clima polar urbano"], 0, "Moradia longe dos empregos e transporte insuficiente."),
  q("Favelização é ligada principalmente a:", ["Falta de moradia acessível", "Excesso de parques urbanos", "Riqueza bem distribuída", "Baixa população urbana"], 0, "Ocupações em áreas de risco e sem infraestrutura."),
  q("A urbanização brasileira foi:", ["Rápida e desigual", "Lenta e bem planejada", "Inexistente até hoje", "Só no século XIX"], 0, "Acelerou entre 1950 e 1980."),
], "n");

extend(GEOGRAFIA, "Agropecuária e espaço rural", [
  q("Plantation é um sistema baseado em:", ["Latifúndio e monocultura", "Hortas familiares variadas", "Caça e coleta na mata", "Pesca artesanal no rio"], 0, "Herança colonial voltada à exportação."),
  q("Agricultura de precisão usa:", ["GPS, sensores e drones", "Apenas enxadas e foices", "Somente queimadas", "Nenhuma tecnologia"], 0, "Aplicar insumos só onde é preciso."),
  qe("Plantio direto mantém a palha da colheita anterior sobre o solo.", "Isso ajuda a:", ["Reduzir a erosão", "Aumentar a erosão", "Secar o solo mais rápido", "Acabar com a matéria orgânica"], 0, "Protege o solo e retém água."),
  q("A pecuária intensiva se caracteriza por:", ["Alta produtividade por área", "Gado solto em áreas enormes", "Nenhum uso de tecnologia", "Baixa produção de carne"], 0, "Confinamento, ração e manejo técnico."),
  q("O êxodo rural no Brasil foi impulsionado pela:", ["Mecanização do campo", "Falta de cidades no país", "Abundância de terras livres", "Reforma agrária ampla"], 0, "Também pela concentração fundiária."),
], "n");

extend(GEOGRAFIA, "Indústria e energia", [
  q("A Primeira Revolução Industrial usava como fonte principal o:", ["Carvão", "Petróleo do pré-sal", "Urânio enriquecido", "Vento das eólicas"], 0, "Máquinas a vapor movidas a carvão."),
  q("A Segunda Revolução Industrial trouxe:", ["Eletricidade e petróleo", "Apenas a máquina a vapor", "A internet e os robôs", "O fim das fábricas"], 0, "Fim do século XIX: aço, química, motor a combustão."),
  qe("Um tecnopolo reúne universidades, centros de pesquisa e empresas de tecnologia.", "Um exemplo no Brasil é:", ["Campinas (SP)", "Uma vila de pescadores", "Uma fazenda de gado", "Um garimpo na mata"], 0, "Também São José dos Campos e Florianópolis."),
  q("A matriz energética mundial ainda depende de:", ["Combustíveis fósseis", "Energia das marés", "Energia geotérmica", "Biogás de aterros"], 0, "Petróleo, carvão e gás somam a maior parte."),
  q("Indústrias de base produzem:", ["Matérias para outras indústrias", "Roupas e calçados prontos", "Alimentos industrializados", "Celulares e televisores"], 0, "Ex.: siderurgia e petroquímica."),
], "n");

extend(GEOGRAFIA, "Globalização e blocos econômicos", [
  q("Deslocalização industrial é:", ["Fábricas mudando de país", "Fim de todas as fábricas", "Fábricas só no campo", "Fábricas sem trabalhadores"], 0, "Busca custos menores em outros países."),
  q("Paraísos fiscais são países com:", ["Impostos baixos e sigilo", "Muita neve e turismo", "Praias e resorts caros", "Leis fiscais rigorosas"], 0, "Atraem capitais, às vezes de origem ilegal."),
  qe("Uma pandemia interrompeu fábricas na Ásia e faltaram peças para carros no Brasil.", "Isso mostra:", ["A interdependência global", "O isolamento das economias", "A autossuficiência do Brasil", "O fim do comércio exterior"], 0, "Cadeias produtivas globais são vulneráveis."),
  q("Protecionismo é:", ["Proteger o mercado interno", "Abrir totalmente o comércio", "Proibir toda exportação", "Usar só moeda estrangeira"], 0, "Tarifas e cotas contra importados."),
  q("O Banco Mundial financia principalmente:", ["Projetos de desenvolvimento", "Campanhas eleitorais", "Times de futebol", "Guerras entre países"], 0, "Infraestrutura, saúde e educação."),
], "n");

extend(GEOGRAFIA, "Geopolítica e conflitos", [
  q("A Otan é uma aliança:", ["Militar", "Comercial do Mercosul", "Religiosa europeia", "Esportiva mundial"], 0, "Criada em 1949; defesa coletiva."),
  q("O Conselho de Segurança da ONU tem membros permanentes com direito a:", ["Veto", "Voto duplo nas eleições", "Moeda própria", "Exército da ONU"], 0, "EUA, Rússia, China, Reino Unido e França."),
  qe("O Ártico está ficando com menos gelo e novas rotas de navegação se abrem.", "Isso aumenta a disputa por:", ["Rotas e recursos", "Neve e geleiras", "Florestas tropicais", "Desertos de areia"], 0, "Petróleo, gás e passagem de navios."),
  q("A Primavera Árabe começou na:", ["Tunísia", "Argentina", "Noruega", "Austrália"], 0, "Em 2010, com protestos contra a ditadura."),
  q("Separatismo é o desejo de:", ["Formar um novo país", "Unir dois países", "Acabar com fronteiras", "Mudar de capital"], 0, "Ex.: Catalunha, Escócia, País Basco."),
], "n");

extend(GEOGRAFIA, "Regiões do Brasil", [
  q("A região com maior PIB do Brasil é o:", ["Sudeste", "Norte amazônico", "Nordeste do Sertão", "Centro-Oeste agrícola"], 0, "Concentra indústria, serviços e população."),
  q("O MATOPIBA é uma fronteira agrícola entre:", ["MA, TO, PI e BA", "MG, SP, RJ e ES", "RS, SC, PR e SP", "AM, PA, AC e RO"], 0, "Expansão da soja no Cerrado nordestino."),
  qe("A região Norte tem a maior área, mas baixa densidade demográfica.", "Isso se explica em parte pela:", ["Floresta e poucas vias", "Falta de rios na região", "Neve no inverno amazônico", "Excesso de indústrias pesadas"], 0, "Ocupação concentrada ao longo dos rios e capitais."),
  q("A região Sul se destaca por:", ["Bons índices sociais", "Clima equatorial úmido", "Maior população do país", "Ausência de agricultura"], 0, "Alto IDH e forte agropecuária."),
  q("Brasília fica na região:", ["Centro-Oeste", "Sudeste do país", "Nordeste do país", "Norte do país"], 0, "Inaugurada em 1960 para interiorizar o país."),
], "n");

extend(GEOGRAFIA, "Meio ambiente e sustentabilidade", [
  q("Aterro sanitário é melhor que lixão porque:", ["Trata o chorume e o gás", "Fica mais perto das casas", "Queima o lixo ao ar livre", "Não precisa de controle"], 0, "Solo impermeabilizado e controle ambiental."),
  q("Compostagem transforma restos orgânicos em:", ["Adubo", "Plástico reciclado", "Vidro novo", "Combustível fóssil"], 0, "Reduz lixo e devolve nutrientes ao solo."),
  qe("Uma cidade cria ciclovias e melhora o transporte coletivo.", "Essas ações contribuem para:", ["Reduzir emissões", "Aumentar o trânsito", "Poluir mais o ar", "Diminuir áreas verdes"], 0, "Menos carros, menos poluição."),
  q("Economia circular propõe:", ["Reaproveitar materiais", "Descartar tudo após o uso", "Produzir sem nenhum plano", "Queimar o lixo urbano"], 0, "Produtos pensados para reuso e reciclagem."),
  q("O Código Florestal protege as:", ["Áreas de preservação", "Áreas de mineração livre", "Rodovias federais", "Zonas industriais"], 0, "APPs e reserva legal nas propriedades rurais."),
], "n");

extend(GEOGRAFIA, "Escalas, coordenadas e fusos", [
  q("Os paralelos indicam a:", ["Latitude", "Longitude oeste", "Altitude do relevo", "Hora do lugar"], 0, "Linhas paralelas ao Equador."),
  q("A cada 15° de longitude, a hora muda em:", ["1 hora", "15 minutos", "2 horas", "30 minutos"], 0, "360° ÷ 24 h = 15° por hora."),
  qe("Um voo sai de São Paulo às 22h e chega a Lisboa após 10 horas de voo. Lisboa está 3 horas à frente.", "Que horas são em Lisboa na chegada?", ["11h", "8h", "13h", "5h"], 0, "22h + 10h = 8h (SP); +3 h = 11h em Lisboa."),
  q("Escala pequena mostra:", ["Áreas grandes, pouco detalhe", "Áreas pequenas, muito detalhe", "Só o relevo do bairro", "Só as ruas da cidade"], 0, "Ex.: um mapa-múndi (1:50.000.000)."),
  q("O Trópico de Câncer fica no hemisfério:", ["Norte", "Sul", "Oeste", "Leste"], 0, "O de Capricórnio fica no Sul."),
], "n");

extend(GEOGRAFIA, "Biomas brasileiros", [
  q("O bioma com maior número de espécies ameaçadas é a:", ["Mata Atlântica", "Caatinga seca", "Floresta Amazônica", "Campos do Pampa"], 0, "Foi o mais devastado ao longo da história."),
  q("A Mata dos Cocais fica entre a Amazônia e a:", ["Caatinga", "Mata Atlântica do Sul", "Floresta de araucárias", "Área do Pampa"], 0, "Babaçu e carnaúba, no Maranhão e Piauí."),
  qe("A carnaúba, árvore da Mata dos Cocais e da Caatinga, produz uma cera usada em cosméticos e polidores.", "Esse uso é um exemplo de:", ["Extrativismo vegetal", "Mineração de ouro", "Pecuária extensiva", "Pesca industrial"], 0, "Coleta de produtos da vegetação nativa."),
  q("A Mata de Araucárias ocorre principalmente no:", ["Sul", "Norte amazônico", "Sertão nordestino", "Pantanal mato-grossense"], 0, "Pinheiro-do-paraná; muito desmatada."),
  q("A vegetação da Caatinga perde as folhas na seca para:", ["Economizar água", "Ganhar mais sol", "Atrair animais", "Crescer mais rápido"], 0, "Caducifólia: reduz a transpiração."),
], "n");

extend(GEOGRAFIA, "Transição demográfica", [
  q("Na última fase da transição, a população:", ["Cresce pouco ou cai", "Explode rapidamente", "Fica muito jovem", "Tem natalidade altíssima"], 0, "Natalidade e mortalidade baixas."),
  q("O Brasil está hoje numa fase de:", ["Envelhecimento", "Explosão demográfica", "Natalidade altíssima", "Mortalidade alta"], 0, "Fecundidade baixa e vida mais longa."),
  qe("Em 2050, o Brasil deve ter mais idosos do que crianças.", "Uma política necessária é:", ["Ampliar cuidados a idosos", "Fechar todos os hospitais", "Reduzir a previdência a zero", "Proibir a imigração"], 0, "Saúde, cuidadores e cidades acessíveis."),
  q("A queda da mortalidade infantil se deve principalmente a:", ["Vacinas e saneamento", "Aumento das guerras", "Falta de hospitais", "Fim das escolas"], 0, "Também ao pré-natal e à amamentação."),
  q("O bônus demográfico do Brasil:", ["Está terminando", "Ainda vai começar", "Nunca existiu", "Dura para sempre"], 0, "A proporção de idosos cresce rápido."),
], "n");

extend(GEOGRAFIA, "Regiões e migrações no Brasil", [
  q("Os 'retirantes' fugiam principalmente da:", ["Seca", "Neve do inverno", "Enchente do Sul", "Guerra civil"], 0, "Retratados em 'Vidas Secas' e 'O Quinze'."),
  q("A migração de japoneses para o Brasil começou em:", ["1908", "1500", "1822", "1990"], 0, "Com o navio Kasato Maru, em Santos."),
  qe("Haitianos chegaram ao Brasil após o terremoto de 2010.", "Muitos foram trabalhar em:", ["Indústrias e serviços", "Minas de ouro coloniais", "Engenhos de açúcar", "Fazendas de café do Império"], 0, "Sobretudo no Sul e no Sudeste."),
  q("Transumância é a migração:", ["Com rebanhos por estação", "Diária para o trabalho", "Entre continentes", "De turistas no verão"], 0, "Pastores levam o gado conforme o clima."),
  q("A 'fuga de cérebros' é a saída de:", ["Profissionais qualificados", "Trabalhadores rurais", "Turistas em férias", "Crianças para estudar"], 0, "Cientistas e técnicos que emigram."),
], "n");

extend(GEOGRAFIA, "Matriz energética", [
  q("O carvão mineral brasileiro concentra-se no:", ["Sul", "Norte amazônico", "Sertão nordestino", "Centro-Oeste"], 0, "Santa Catarina e Rio Grande do Sul."),
  q("As usinas nucleares brasileiras ficam em:", ["Angra dos Reis (RJ)", "Manaus (AM)", "Brasília (DF)", "Salvador (BA)"], 0, "Angra 1 e 2; Angra 3 em construção."),
  qe("O biogás é produzido pela decomposição de lixo orgânico e dejetos de animais.", "Uma vantagem do biogás é:", ["Aproveitar resíduos", "Gerar lixo radioativo", "Depender de petróleo", "Aumentar o desmatamento"], 0, "Transforma um problema em energia."),
  q("Termelétricas são acionadas em secas porque:", ["Não dependem de chuva", "São as mais baratas", "Não poluem nada", "Usam só energia solar"], 0, "Queimam gás, óleo ou carvão."),
  q("A energia maremotriz vem:", ["Das marés", "Do calor da Terra", "Do vento forte", "Da queima de lixo"], 0, "Pouco usada no Brasil."),
], "n");

extend(GEOGRAFIA, "Agronegócio e questão agrária", [
  q("Reforma agrária é:", ["Redistribuir terras", "Concentrar terras", "Vender terras ao exterior", "Fechar as fazendas"], 0, "Dar terra a quem quer produzir."),
  q("A Lei de Terras de 1850 dificultou o acesso à terra porque:", ["Exigia compra", "Doava terras aos pobres", "Proibia o café", "Libertava os escravizados"], 0, "Pobres e libertos ficaram sem acesso."),
  qe("A soja avança sobre o Cerrado e empurra a pecuária para a Amazônia.", "Esse efeito indireto aumenta o:", ["Desmatamento", "Reflorestamento", "Número de geleiras", "Volume de chuvas"], 0, "O gado ocupa novas áreas de floresta."),
  q("Agricultura familiar recebe crédito pelo:", ["Pronaf", "FGTS", "Enem", "Detran"], 0, "Programa Nacional de Fortalecimento da Agricultura Familiar."),
  q("Commodities agrícolas são:", ["Produtos padronizados exportados", "Artesanato regional", "Produtos de luxo raros", "Serviços de turismo"], 0, "Ex.: soja, milho, café, açúcar."),
], "n");

extend(GEOGRAFIA, "Blocos econômicos", [
  q("O euro é a moeda da:", ["Zona do Euro", "América do Sul", "Ásia oriental", "África do Norte"], 0, "Parte dos países da União Europeia."),
  q("A Comunidade Andina reúne:", ["Bolívia, Colômbia, Equador e Peru", "Brasil e Argentina", "EUA e Canadá", "China e Japão"], 0, "Bloco sul-americano criado em 1969."),
  qe("Um carro fabricado no Brasil é vendido na Argentina sem pagar imposto de importação.", "Isso ocorre por causa:", ["Do Mercosul", "Da Otan", "Do G7", "Da Opep"], 0, "Livre comércio entre os membros."),
  q("A Opep reúne países exportadores de:", ["Petróleo", "Café", "Soja", "Ouro"], 0, "Influencia o preço mundial do petróleo."),
  q("A União Europeia tem um parlamento:", ["Eleito pelos cidadãos", "Escolhido pelo papa", "Formado só por reis", "Sem poder nenhum"], 0, "O Parlamento Europeu, eleito a cada 5 anos."),
], "n");

extend(GEOGRAFIA, "Conflitos e refugiados", [
  q("A maior crise de refugiados das Américas recente envolve a:", ["Venezuela", "Canadá", "Uruguai", "Chile"], 0, "Milhões deixaram o país desde 2015."),
  q("Apátrida é a pessoa:", ["Sem nacionalidade", "Com duas pátrias", "Que nasceu no mar", "Que é diplomata"], 0, "Nenhum país a reconhece como cidadã."),
  qe("Crianças refugiadas muitas vezes perdem anos de escola durante a fuga.", "Uma medida importante é:", ["Garantir matrícula", "Proibir a matrícula", "Separar as famílias", "Fechar as fronteiras"], 0, "Educação ajuda a integração."),
  q("A Convenção dos Refugiados é de:", ["1951", "1500", "1888", "2020"], 0, "Criada após a Segunda Guerra."),
  q("O Brasil reconheceu muitos refugiados de qual país em guerra desde 2011?", ["Síria", "Japão", "Suíça", "Islândia"], 0, "Também afegãos e ucranianos, com vistos humanitários."),
], "n");
