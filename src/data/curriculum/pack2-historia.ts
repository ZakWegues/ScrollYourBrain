import { HISTORIA } from "./natureza-humanas";
import { extend, m, o, q, qe } from "./pack";

// Novas questões de História (diretas e estilo ENEM). Ids: `${topic.id}-nN`.

extend(HISTORIA, "Pré-história e Antiguidade oriental", [
  q("O Paleolítico é marcado por:", ["Caça, coleta e nomadismo", "Agricultura irrigada e cidades", "Escrita alfabética e impérios", "Moeda cunhada e comércio longo"], 0, "Também chamado de Idade da Pedra Lascada; os grupos se deslocavam atrás de alimento."),
  q("A Revolução Neolítica foi:", ["A adoção da agricultura", "A invenção da escrita cuneiforme", "A queda do Império Romano", "A chegada dos europeus à América"], 0, "Plantar e criar animais permitiu a sedentarização e as primeiras aldeias."),
  q("Em qual região surgiu a escrita cuneiforme?", ["Mesopotâmia", "China imperial", "Grécia clássica", "América pré-colombiana"], 0, "Sinais em forma de cunha marcados em tábuas de argila, por volta de 3200 a.C."),
  q("O Código de Hamurábi é famoso pelo princípio:", ["Olho por olho, dente por dente", "Todos são iguais perante a lei", "O rei é eleito pelo povo", "Liberdade de crença"], 0, "Lei de talião: a pena equivalente ao dano, mas variando conforme a camada social."),
  q("Os hebreus se destacaram por:", ["Monoteísmo", "Construir pirâmides", "Criar a democracia", "Inventar a pólvora"], 0, "A crença em um só Deus influenciou o cristianismo e o islamismo."),
  q("Os fenícios ficaram conhecidos pelo:", ["Comércio marítimo e alfabeto", "Exército montado em elefantes", "Rígido sistema de castas hindu", "Culto ao deus Sol dos incas"], 0, "Seu alfabeto fonético deu origem ao grego e, depois, ao latino."),
  qe("Heródoto escreveu que 'o Egito é uma dádiva do Nilo'.", "A frase destaca que:", ["As cheias fertilizavam o solo", "O Nilo separava o Egito da Ásia", "O rio era usado apenas para a pesca", "O Egito não tinha nenhum deserto"], 0, "As cheias deixavam um lodo fértil nas margens, base da agricultura egípcia."),
  qe("No Egito antigo, o faraó era visto como um deus vivo e dono das terras; os camponeses pagavam tributos em produtos e trabalho.", "Esse sistema é chamado de:", ["Modo de produção asiático", "Feudalismo da Europa ocidental", "Capitalismo industrial moderno", "Democracia direta dos cidadãos"], 0, "Estado forte, terras do soberano e servidão coletiva dos camponeses."),
  qe("Na Mesopotâmia, os rios Tigre e Eufrates tinham cheias irregulares e violentas.", "Para aproveitar a água, os povos da região:", ["Construíram diques e canais", "Abandonaram de vez a agricultura", "Passaram a viver só da caça", "Mudaram-se todos para o litoral"], 0, "Obras hidráulicas exigiam organização coletiva e ajudaram a formar Estados."),
  qe("Arqueólogos encontram pinturas de animais em cavernas de Lascaux (França) e da Serra da Capivara (Piauí).", "Essas pinturas são chamadas de:", ["Arte rupestre", "Hieróglifos egípcios", "Mosaicos bizantinos", "Afrescos renascentistas"], 0, "A Serra da Capivara tem uma das maiores concentrações de arte rupestre das Américas."),
  q("O Período dos Metais trouxe:", ["Ferramentas e armas de metal", "A primeira escrita alfabética", "O fim completo da agricultura", "O surgimento dos primeiros hominídeos"], 0, "Cobre, bronze e ferro; armas melhores ajudaram a formar exércitos."),
  m("Marque características do Neolítico:", ["Agricultura", "Domesticação de animais", "Sedentarização", "Escrita alfabética", "Uso de moedas"], [0, 1, 2], "Escrita e moedas vêm depois, já na Antiguidade."),
  m("Marque os pares povo → legado corretos:", ["Sumérios: escrita cuneiforme", "Egípcios: hieróglifos", "Hebreus: monoteísmo", "Fenícios: pirâmides", "Persas: democracia"], [0, 1, 2], "Pirâmides são egípcias; democracia é grega."),
  o("Explique por que os rios foram importantes para as primeiras civilizações.", "Os rios forneciam água para beber e irrigar, e suas cheias deixavam o solo fértil, o que permitiu a agricultura e o excedente de alimentos. Também serviam de via de transporte e comércio. Isso favoreceu o crescimento das cidades e a formação de Estados, como no Egito e na Mesopotâmia.", [
    ["Água e solo fértil para a agricultura", "agricult", "fertil", "irrig", "cheia"],
    ["Transporte e comércio", "transport", "comercio", "navega"],
    ["Cidades e Estados / Egito ou Mesopotâmia", "cidade", "estado", "egito", "mesopotamia"],
  ]),
], "n");

extend(HISTORIA, "Grécia e Roma", [
  q("Esparta era conhecida por:", ["Educação militar rígida", "Democracia direta e assembleias", "Filósofos famosos e academias", "Grande comércio marítimo"], 0, "Os meninos eram treinados para a guerra desde os 7 anos."),
  q("Nas pólis gregas, a ágora era:", ["A praça pública", "O templo principal", "O porto da cidade", "A casa do rei"], 0, "Lugar de comércio, debates e assembleias."),
  q("Os Jogos Olímpicos surgiram:", ["Na Grécia antiga", "Em Roma, no Coliseu", "No Egito dos faraós", "Na Pérsia de Dario"], 0, "Em Olímpia, em honra a Zeus, a partir de 776 a.C."),
  q("Em Roma, os plebeus eram:", ["Livres, mas sem privilégios", "Os nobres donos das terras", "Os escravizados de guerra", "Os sacerdotes do império"], 0, "Lutaram por direitos e conquistaram o tribuno da plebe."),
  q("Para os plebeus, a Lei das Doze Tábuas foi uma conquista porque:", ["Escreveu as leis romanas", "Libertou todos os escravos", "Criou o cristianismo", "Dividiu o império"], 0, "Leis escritas reduziam o arbítrio dos patrícios contra os plebeus."),
  q("O Império Romano foi dividido em 395 em:", ["Ocidente e Oriente", "Norte e Sul da Itália", "Grécia e Egito romanos", "Gália e Hispânia unidas"], 0, "O Oriente (Bizantino) durou até 1453."),
  qe("Em Atenas, Péricles afirmou que a cidade era governada 'pela maioria, e não por poucos'.", "Porém, a democracia ateniense excluía:", ["Mulheres, estrangeiros e escravizados", "Todos os homens adultos da cidade", "Os cidadãos nascidos em Atenas", "Os homens livres que sabiam ler e escrever"], 0, "Só homens livres, adultos e filhos de atenienses votavam."),
  qe("A política do 'pão e circo' distribuía trigo e oferecia lutas de gladiadores à população de Roma.", "O objetivo dessa política era:", ["Evitar revoltas populares", "Formar novos soldados para as guerras", "Ensinar a população a ler e escrever", "Aumentar os impostos sobre os pobres"], 0, "Comida e diversão mantinham a plebe urbana sob controle."),
  qe("No século III, Roma enfrentou crise econômica, falta de escravos, invasões germânicas e disputas pelo trono.", "Esses fatores contribuíram para:", ["A queda do Império do Ocidente", "O início da República romana", "A fundação da cidade de Atenas", "As Guerras Médicas contra os persas"], 0, "Em 476, Odoacro depôs o último imperador do Ocidente."),
  qe("O latim, o direito romano, os aquedutos e o calendário juliano chegaram até nós.", "Esses elementos mostram:", ["O legado de Roma", "A herança dos persas", "A cultura maia", "A influência chinesa"], 0, "O português vem do latim; nosso direito civil tem base romana."),
  q("As Guerras Púnicas foram entre Roma e:", ["Cartago", "Esparta", "Egito", "Pérsia"], 0, "Roma venceu e passou a dominar o Mediterrâneo ocidental."),
  q("O período helenístico resultou:", ["Das conquistas de Alexandre", "Da queda de Roma no Ocidente", "Das Cruzadas a Jerusalém", "Do Renascimento italiano"], 0, "Fusão da cultura grega com a oriental, com centro em Alexandria."),
  m("Marque legados gregos:", ["Democracia", "Filosofia", "Teatro", "Hieróglifos", "Código de Hamurábi"], [0, 1, 2], "Hieróglifos são egípcios; o Código é babilônico."),
  m("Marque as fases da história política de Roma:", ["Monarquia", "República", "Império", "Feudalismo", "Absolutismo"], [0, 1, 2], "Feudalismo e absolutismo são europeus, posteriores."),
], "n");

extend(HISTORIA, "Idade Média", [
  q("A Idade Média vai aproximadamente de:", ["476 a 1453", "1500 a 1800", "3000 a.C. a 476", "1789 a 1914"], 0, "Da queda de Roma do Ocidente à tomada de Constantinopla."),
  q("O Império Carolíngio teve como maior rei:", ["Carlos Magno", "Júlio César, o cônsul", "Napoleão Bonaparte", "Luís XIV, o Rei Sol"], 0, "Coroado imperador pelo papa no ano 800; incentivou escolas e copistas."),
  q("O Império Bizantino tinha capital em:", ["Constantinopla", "Roma, na Itália", "Paris, na França", "Jerusalém, na Judeia"], 0, "Atual Istambul; caiu para os turcos otomanos em 1453."),
  q("As corporações de ofício reuniam:", ["Artesãos da mesma profissão", "Camponeses e servos do feudo", "Monges copistas dos mosteiros", "Cavaleiros que iam às Cruzadas"], 0, "Controlavam preços, qualidade e a formação de aprendizes."),
  q("A Peste Negra no século XIV:", ["Matou um terço da Europa", "Atingiu somente a Ásia", "Foi curada em apenas um ano", "Fortaleceu a servidão nos feudos"], 0, "A falta de mão de obra enfraqueceu a servidão e gerou revoltas camponesas."),
  q("O islamismo surgiu no século VII na:", ["Península Arábica", "Península Ibérica", "Itália", "Índia"], 0, "Com Maomé; em pouco tempo se expandiu do Oriente Médio à Península Ibérica."),
  qe("Nos séculos XI a XIII, cristãos europeus organizaram expedições armadas para tomar Jerusalém dos muçulmanos.", "Essas expedições ficaram conhecidas como:", ["Cruzadas", "Grandes Navegações", "Guerras Púnicas", "Reconquista americana"], 0, "Além da fé, havia interesses comerciais e de terras."),
  qe("A partir do século XI, cresceram feiras e cidades (burgos) com comerciantes e artesãos.", "Esse processo é chamado de:", ["Renascimento comercial", "Revolução Industrial inglesa", "Êxodo rural do século XX", "Absolutismo monárquico"], 0, "Os burgueses, moradores dos burgos, ganharam força econômica."),
  qe("Os árabes levaram à Europa medieval os algarismos indo-arábicos, a álgebra e traduções de filósofos gregos.", "Isso mostra que o mundo islâmico:", ["Preservou e difundiu saberes", "Destruiu a cultura grega antiga", "Não tinha nenhuma ciência própria", "Vivia isolado do Ocidente cristão"], 0, "Bagdá e Córdoba eram grandes centros de saber."),
  qe("Na Península Ibérica, reinos cristãos lutaram por séculos para retomar as terras dominadas pelos muçulmanos.", "Esse processo, concluído em 1492, foi a:", ["Reconquista", "Reforma", "Contrarreforma", "Revolução Gloriosa"], 0, "Terminou com a tomada de Granada; ajudou a formar Portugal e Espanha."),
  q("As primeiras universidades europeias surgiram:", ["Na Baixa Idade Média", "Na Grécia antiga, em Atenas", "No século XIX, com a indústria", "No Império Romano, com Augusto"], 0, "Bolonha, Paris e Oxford, ligadas à Igreja."),
  q("A Guerra dos Cem Anos foi entre:", ["França e Inglaterra", "Roma e Cartago", "Espanha e Portugal", "Árabes e persas"], 0, "1337–1453; Joana d'Arc se destacou pelo lado francês."),
  m("Marque fatores da crise do século XIV:", ["Peste Negra", "Fome", "Guerra dos Cem Anos", "Revolução Industrial", "Descoberta do ouro no Brasil"], [0, 1, 2], "Revolução Industrial e ouro do Brasil são do século XVIII."),
  m("Marque características do Império Bizantino:", ["Capital em Constantinopla", "Código de Justiniano", "Igreja Ortodoxa", "Capital em Roma", "Fim em 476"], [0, 1, 2], "O Bizantino durou até 1453, com capital em Constantinopla."),
], "n");

extend(HISTORIA, "Renascimento, Reformas e Navegações", [
  q("O mecenas no Renascimento era:", ["Quem financiava artistas", "Um estilo de pintura em tela", "Um monge que copiava livros", "Um navegador das Índias"], 0, "Ex.: a família Médici, em Florença."),
  q("A prensa de tipos móveis foi criada por:", ["Gutenberg", "Galileu Galilei", "Martinho Lutero", "Cristóvão Colombo"], 0, "Por volta de 1450; barateou os livros e ajudou a difundir a Reforma."),
  q("Galileu foi condenado pela Igreja por defender:", ["O heliocentrismo", "O geocentrismo de Ptolomeu", "A ideia de uma Terra plana", "A alquimia e a magia"], 0, "A ideia de Copérnico: a Terra gira em torno do Sol."),
  q("O anglicanismo surgiu com:", ["Henrique VIII", "João Calvino, em Genebra", "Martinho Lutero, na Alemanha", "Luís XIV, na França"], 0, "O rei rompeu com o papa, que negou a anulação de seu casamento."),
  q("O Concílio de Trento fez parte da:", ["Contrarreforma", "Reforma luterana", "Revolução Francesa", "Reconquista"], 0, "Reafirmou dogmas católicos, criou seminários e o Índice de livros proibidos."),
  q("Vasco da Gama chegou às Índias em:", ["1498", "1492", "1500", "1453"], 0, "Contornando a África; abriu a rota marítima das especiarias."),
  qe("Leonardo da Vinci foi pintor, engenheiro, anatomista e inventor.", "Ele representa o ideal renascentista do:", ["Homem universal", "Monge recluso", "Servo feudal", "Cavaleiro cruzado"], 0, "Humanismo: o ser humano capaz de dominar vários saberes."),
  qe("Calvino ensinava que Deus já escolheu quem será salvo e que o sucesso no trabalho seria um sinal disso.", "Essa doutrina é a:", ["Predestinação", "Venda de indulgências", "Infalibilidade papal", "Transubstanciação"], 0, "Agradou a burguesia, pois valorizava o trabalho e o lucro."),
  qe("Em 1453, os turcos tomaram Constantinopla e passaram a controlar rotas comerciais para o Oriente.", "Isso estimulou os europeus a:", ["Buscar uma rota marítima", "Abandonar o comércio", "Fazer novas Cruzadas", "Proibir as especiarias"], 0, "Portugal e Espanha investiram em navegações pelo Atlântico."),
  qe("O Tratado de Tordesilhas (1494) traçou uma linha imaginária a 370 léguas de Cabo Verde.", "O tratado dividia as terras entre:", ["Portugal e Espanha", "França e Inglaterra", "Holanda e Portugal", "Espanha e Itália"], 0, "A leste, terras de Portugal; a oeste, da Espanha."),
  q("O pioneirismo português nas navegações se explica, entre outros fatores, pela:", ["Centralização política precoce", "Falta total de acesso ao mar", "Ausência de uma burguesia mercantil", "Aliança comercial com os turcos"], 0, "Estado unificado cedo, burguesia mercantil e a Escola de Sagres."),
  q("Michelangelo pintou o teto da:", ["Capela Sistina", "Torre de Pisa", "Catedral de Notre-Dame", "Abadia de Westminster"], 0, "No Vaticano, entre 1508 e 1512."),
  m("Marque características do Renascimento:", ["Humanismo", "Valorização da Antiguidade clássica", "Racionalismo", "Teocentrismo rígido", "Rejeição à ciência"], [0, 1, 2], "O Renascimento é antropocêntrico e valoriza a investigação."),
  m("Marque críticas de Lutero à Igreja:", ["Venda de indulgências", "Riqueza do clero", "Autoridade do papa", "Uso da Bíblia", "Leitura individual da fé"], [0, 1, 2], "Lutero defendia a Bíblia e a leitura individual."),
  o("Explique por que a imprensa de Gutenberg ajudou a Reforma Protestante.", "A prensa de tipos móveis permitiu imprimir livros e panfletos em grande quantidade e mais baratos. Assim, as ideias de Lutero e a Bíblia traduzida para o alemão se espalharam rapidamente, e mais pessoas puderam ler os textos sagrados sem depender do clero.", [
    ["Impressão em massa e barata", "imprim", "barat", "quantidade", "massa"],
    ["Difusão das ideias de Lutero / Bíblia", "lutero", "biblia", "ideias", "panflet"],
    ["Leitura sem depender do clero", "ler", "leitura", "clero", "igreja"],
  ]),
], "n");

extend(HISTORIA, "Brasil Colônia", [
  q("As capitanias hereditárias foram criadas em:", ["1534", "1500", "1808", "1822"], 0, "D. João III dividiu a colônia em faixas entregues a donatários."),
  q("O Governo-Geral, com sede em Salvador, foi criado para:", ["Centralizar a administração", "Libertar os indígenas", "Proibir o açúcar", "Separar o Brasil de Portugal"], 0, "Tomé de Sousa, o primeiro governador, chegou em 1549."),
  q("Os jesuítas no Brasil colonial se dedicaram à:", ["Catequese dos indígenas", "Mineração do ouro", "Revolta contra Portugal", "Produção de café"], 0, "Fundaram aldeamentos, escolas e cidades, como São Paulo (1554)."),
  q("A União Ibérica (1580-1640) ocorreu quando:", ["Portugal ficou sob o rei espanhol", "O Brasil se tornou independente", "A Holanda dominou a cidade de Lisboa", "Portugal conquistou o reino da Espanha"], 0, "Na prática, a linha de Tordesilhas perdeu força e os bandeirantes avançaram para o oeste."),
  q("Os holandeses dominaram parte do Nordeste para controlar:", ["A produção de açúcar", "As minas de ouro", "O comércio de café", "As plantações de borracha"], 0, "Maurício de Nassau governou Pernambuco de 1637 a 1644."),
  q("O pacto colonial determinava que a colônia:", ["Só comerciasse com a metrópole", "Tivesse indústrias próprias", "Elegesse seus governantes", "Comerciasse com todos"], 0, "Exclusivo metropolitano: comprar e vender só por Portugal."),
  qe("No engenho, a casa-grande era a moradia do senhor e a senzala, a dos escravizados.", "Essa organização revela uma sociedade:", ["Patriarcal e escravista", "Igualitária e livre", "Industrial e urbana", "Democrática e plural"], 0, "Poder concentrado no senhor de engenho e trabalho forçado de africanos."),
  qe("Palmares, na Serra da Barriga (AL), resistiu por quase um século e chegou a ter milhares de habitantes.", "Palmares foi o maior:", ["Quilombo colonial", "Engenho de Pernambuco", "Aldeamento jesuíta do Sul", "Porto de chegada de africanos"], 0, "Zumbi, seu líder mais lembrado, morreu em 1695; 20 de novembro é o Dia da Consciência Negra."),
  qe("Os bandeirantes paulistas entravam no sertão para capturar indígenas e procurar metais preciosos.", "Uma consequência dessas expedições foi:", ["A expansão das fronteiras", "O fim da escravidão", "A queda da monarquia", "A chegada da família real"], 0, "Ultrapassaram Tordesilhas; o Tratado de Madri (1750) reconheceu boa parte dessas terras."),
  qe("A pecuária avançou pelo sertão nordestino ao longo do rio São Francisco.", "Ela foi importante porque:", ["Ocupou o interior e abasteceu engenhos", "Substituiu totalmente a produção de açúcar", "Usou apenas mão de obra vinda da Europa", "Concentrou-se só no litoral, perto dos portos"], 0, "O gado dava carne, couro e força de tração."),
  q("As drogas do sertão eram:", ["Produtos da floresta", "Remédios importados da Europa", "Bebidas trazidas de Portugal", "Minerais do sertão nordestino"], 0, "Cacau, cravo, guaraná e urucum, coletados com trabalho indígena."),
  q("A primeira vila fundada no Brasil foi:", ["São Vicente", "Salvador", "Rio de Janeiro", "Recife"], 0, "Fundada por Martim Afonso de Sousa em 1532."),
  m("Marque formas de resistência à escravidão:", ["Fugas e quilombos", "Revoltas", "Preservação de religiões africanas", "Pagamento de impostos", "Trabalho voluntário"], [0, 1, 2], "Resistir incluía a fuga, a luta e a cultura."),
  m("Marque atividades econômicas do Brasil Colônia:", ["Açúcar", "Mineração", "Pecuária", "Indústria automobilística", "Exportação de petróleo"], [0, 1, 2], "Indústria e petróleo são do século XX."),
], "n");

extend(HISTORIA, "Iluminismo e Revoluções", [
  q("Montesquieu defendeu:", ["A divisão em três poderes", "O poder absoluto e divino do rei", "O fim de todas as leis escritas", "A volta da ordem feudal medieval"], 0, "Legislativo, Executivo e Judiciário se fiscalizam."),
  q("Segundo Rousseau, o poder soberano cabe:", ["Ao povo", "Ao rei", "À Igreja", "Aos nobres"], 0, "No 'Contrato Social', a lei deve expressar a vontade geral."),
  q("Voltaire criticava principalmente:", ["A intolerância religiosa", "A ciência", "A liberdade de expressão", "A razão"], 0, "Defendia a liberdade de pensamento e de crença."),
  q("A Revolução Gloriosa (1688) na Inglaterra estabeleceu:", ["A monarquia parlamentar", "A república presidencialista", "O absolutismo do rei Stuart", "O socialismo dos trabalhadores"], 0, "O Bill of Rights limitou o poder do rei."),
  q("O liberalismo econômico de Adam Smith defende:", ["Pouca intervenção do Estado", "Monopólio comercial do rei", "Fim da propriedade privada", "Preços fixados pela Igreja"], 0, "A 'mão invisível' do mercado regularia a economia."),
  q("Os déspotas esclarecidos foram reis que:", ["Reformaram sem largar o poder", "Aboliram a monarquia em seus países", "Seguiram as ideias de Rousseau à risca", "Entregaram o governo às assembleias do povo"], 0, "Ex.: Marquês de Pombal em Portugal e Frederico II na Prússia."),
  qe("A Declaração de Independência dos EUA (1776) afirma que todos os homens têm direito à 'vida, liberdade e busca da felicidade'.", "Esse trecho mostra influência do:", ["Iluminismo", "Absolutismo", "Feudalismo", "Mercantilismo"], 0, "A ideia de direitos naturais vem de Locke e de outros iluministas."),
  qe("A Enciclopédia, organizada por Diderot e D'Alembert, reuniu o conhecimento da época em linguagem acessível.", "O objetivo da obra era:", ["Difundir a razão e a ciência", "Defender o poder do papa sobre os reis", "Proibir a publicação de novos livros", "Restaurar a ordem feudal na França"], 0, "Saber para combater a ignorância e o autoritarismo."),
  qe("Os colonos ingleses protestaram contra impostos como a Lei do Selo com o lema 'nenhuma taxação sem representação'.", "Eles reclamavam de:", ["Pagar impostos sem ter voto", "Não terem um rei próprio na América", "Serem obrigados a lutar na Europa", "Falta de escravizados nas fazendas do Norte"], 0, "As colônias não tinham deputados no Parlamento britânico."),
  qe("Inspirados nas Luzes, inconfidentes mineiros planejaram uma república em 1789.", "O movimento descrito é a:", ["Inconfidência Mineira", "Revolução Farroupilha", "Cabanagem", "Balaiada"], 0, "Delatado; Tiradentes foi enforcado em 1792."),
  q("John Locke defendia que o governo deve proteger:", ["Vida, liberdade e propriedade", "Os privilégios do clero católico", "O poder hereditário dos nobres", "O comércio exclusivo da metrópole"], 0, "Se o governo violar esses direitos, o povo pode resistir."),
  q("A independência dos EUA foi reconhecida pela Inglaterra em:", ["1783", "1776", "1789", "1804"], 0, "Pelo Tratado de Paris, após a guerra de independência."),
  m("Marque pensadores iluministas:", ["Voltaire", "Rousseau", "Montesquieu", "Santo Agostinho", "Maquiavel"], [0, 1, 2], "Agostinho é medieval; Maquiavel, renascentista."),
  m("Marque ideias do Iluminismo:", ["Razão", "Liberdade", "Separação de poderes", "Direito divino dos reis", "Censura religiosa"], [0, 1, 2], "Os iluministas criticavam o direito divino e a censura."),
], "n");

extend(HISTORIA, "Independências e Brasil Império", [
  q("A família real portuguesa veio ao Brasil em 1808 fugindo de:", ["Napoleão", "Uma epidemia de peste", "Uma revolta em Lisboa", "Um ataque dos ingleses"], 0, "As tropas francesas invadiram Portugal; a Inglaterra escoltou a viagem."),
  q("Com a corte no Rio a partir de 1808, foi criado o:", ["Banco do Brasil", "Primeiro parlamento eleito", "Voto universal masculino", "Fim do tráfico de africanos"], 0, "Também vieram a Imprensa Régia, o Jardim Botânico e a Biblioteca Real."),
  q("Quem proclamou a independência do Brasil?", ["D. Pedro I", "D. João VI, o rei", "Tiradentes, o alferes", "Marechal Deodoro"], 0, "Em 7 de setembro de 1822, às margens do Ipiranga."),
  q("A Constituição de 1824 criou o Poder:", ["Moderador", "Popular eleito", "Militar supremo", "Religioso independente"], 0, "Exercido pelo imperador, ficava acima dos outros três."),
  q("O voto na Constituição de 1824 era:", ["Censitário", "Universal e secreto", "Obrigatório às mulheres", "Livre para escravizados"], 0, "Só votava quem tivesse certa renda."),
  q("A Revolução Farroupilha ocorreu no:", ["Rio Grande do Sul", "Pará, na Amazônia", "Maranhão e Piauí", "Bahia, em Salvador"], 0, "1835–1845; pecuaristas gaúchos contra impostos sobre o charque."),
  qe("Durante o Período Regencial (1831-1840), explodiram revoltas como a Cabanagem, a Sabinada e a Balaiada.", "Para encerrar essa instabilidade, os liberais defenderam:", ["O Golpe da Maioridade", "A proclamação da República", "A volta de D. Pedro I", "A união com Portugal"], 0, "Em 1840, D. Pedro II foi declarado maior aos 14 anos."),
  qe("A Lei Eusébio de Queirós (1850) proibiu o tráfico de africanos para o Brasil.", "Uma consequência foi:", ["Capital livre para outros negócios", "O fim imediato de toda a escravidão", "A queda da monarquia no mesmo ano", "A volta da corte portuguesa ao Rio"], 0, "O dinheiro do tráfico passou para bancos, ferrovias e indústrias."),
  qe("A Lei do Ventre Livre (1871) declarou livres os filhos de escravizadas nascidos a partir dali.", "Na prática, a lei:", ["Teve efeito limitado", "Libertou todos os cativos", "Indenizou os escravizados", "Proibiu o tráfico"], 0, "As crianças podiam ficar com o senhor até os 21 anos."),
  qe("A Guerra do Paraguai (1864-1870) opôs o Paraguai à Tríplice Aliança.", "A Tríplice Aliança era formada por:", ["Brasil, Argentina e Uruguai", "Brasil, Chile e Bolívia", "Argentina, Peru e Chile", "Uruguai, Bolívia e Peru"], 0, "A guerra fortaleceu o Exército brasileiro, que depois apoiou a República."),
  q("A Lei Áurea, de 1888, foi assinada pela:", ["Princesa Isabel", "Imperatriz Leopoldina", "Rainha Maria I", "Marquesa de Santos"], 0, "Aboliu a escravidão, mas sem integrar os libertos à sociedade."),
  q("O café se tornou o principal produto do Império a partir do:", ["Vale do Paraíba", "Sertão do Ceará", "Recôncavo baiano", "Pantanal mato-grossense"], 0, "Depois avançou para o oeste paulista, com mão de obra imigrante."),
  m("Marque fatores da queda da monarquia:", ["Questão religiosa", "Questão militar", "Abolição sem indenização", "Apoio total dos fazendeiros", "Vitória do Paraguai"], [0, 1, 2], "Os fazendeiros escravistas abandonaram o Império; o Paraguai perdeu a guerra."),
  m("Marque revoltas do Período Regencial:", ["Cabanagem", "Sabinada", "Balaiada", "Inconfidência Mineira", "Canudos"], [0, 1, 2], "A Inconfidência é colonial; Canudos, republicana."),
], "n");

extend(HISTORIA, "Imperialismo e Primeira Guerra", [
  q("A Conferência de Berlim (1884-1885) tratou da:", ["Partilha da África", "Paz após a Primeira Guerra", "Unificação alemã", "Criação da ONU"], 0, "Potências europeias dividiram o continente sem ouvir os africanos."),
  q("O 'fardo do homem branco' era uma ideia que:", ["Justificava o imperialismo", "Combatia o racismo científico", "Defendia a autonomia dos africanos", "Pregava a igualdade entre os povos"], 0, "Dizia que os europeus deveriam 'civilizar' outros povos."),
  q("A Guerra do Ópio foi entre a China e a:", ["Inglaterra", "Rússia czarista", "França de Napoleão", "Alemanha de Bismarck"], 0, "A China foi obrigada a abrir portos e ceder Hong Kong."),
  q("A Tríplice Entente reunia:", ["Inglaterra, França e Rússia", "Alemanha, Áustria e Itália", "EUA, Japão e China", "Espanha, Portugal e Brasil"], 0, "A Tríplice Aliança era Alemanha, Áustria-Hungria e Itália."),
  q("Os EUA entraram na Primeira Guerra em:", ["1917", "1914", "1918", "1939"], 0, "Após ataques de submarinos alemães a navios americanos."),
  q("A Liga das Nações foi criada para:", ["Manter a paz mundial", "Dividir a África", "Organizar a Guerra Fria", "Financiar o nazismo"], 0, "Fracassou: os EUA não entraram e ela não impediu a Segunda Guerra."),
  qe("O imperialismo do século XIX buscava matérias-primas, mercados consumidores e áreas para investir capitais.", "Esse movimento foi impulsionado pela:", ["Segunda Revolução Industrial", "Reforma Protestante de Lutero", "Crise do feudalismo medieval", "Revolução Neolítica agrícola"], 0, "A indústria em expansão precisava de recursos e consumidores."),
  qe("Na Primeira Guerra, soldados passaram anos em valas cavadas na terra, com lama, ratos e doenças.", "Esse tipo de combate é a guerra de:", ["Trincheiras", "Movimento rápido", "Guerrilha urbana", "Blitzkrieg"], 0, "Frentes paradas e ataques que custavam milhares de vidas por poucos metros."),
  qe("Em 1914, o herdeiro do trono austro-húngaro foi assassinado em Sarajevo por um nacionalista sérvio.", "Esse fato foi:", ["O estopim da guerra", "A causa única da guerra", "O fim da guerra", "Irrelevante para a guerra"], 0, "As causas profundas eram a disputa imperialista, o nacionalismo e as alianças."),
  qe("A Revolução Russa de 1917 levou os bolcheviques ao poder.", "Logo depois, a Rússia:", ["Saiu da guerra", "Entrou na Tríplice Aliança", "Venceu a Alemanha", "Invadiu os EUA"], 0, "O Tratado de Brest-Litovsk (1918) tirou a Rússia do conflito."),
  q("Gandhi liderou a independência da Índia com:", ["Resistência não violenta", "Uma guerra de guerrilha", "Apoio militar soviético", "Um golpe de Estado"], 0, "Boicotes e desobediência civil; a independência veio em 1947."),
  q("O Brasil entrou na Primeira Guerra após:", ["Ter navios afundados", "Ser invadido pela Alemanha no Sul", "Receber um pedido formal do papa", "Perder o território do Acre"], 0, "Submarinos alemães atacaram navios mercantes brasileiros em 1917."),
  m("Marque fatores que levaram à guerra de 1914:", ["Disputas imperialistas", "Nacionalismos", "Sistema de alianças", "Crise de 1929", "Ascensão do nazismo"], [0, 1, 2], "A crise de 1929 e o nazismo vêm depois da guerra."),
  o("Explique por que o Tratado de Versalhes é visto como uma das causas da Segunda Guerra.", "O Tratado de Versalhes culpou a Alemanha pela guerra e impôs indenizações pesadas, perda de territórios e limites ao exército. Isso gerou humilhação e crise econômica, que foram exploradas pelo nazismo para ganhar apoio com um discurso revanchista.", [
    ["Punições à Alemanha (indenizações, territórios)", "indeniza", "territor", "culp", "puni"],
    ["Humilhação e crise", "humilh", "crise", "ressent"],
    ["Aproveitado pelo nazismo / revanchismo", "nazis", "hitler", "revanch"],
  ]),
], "n");

extend(HISTORIA, "República Velha e Era Vargas", [
  q("O primeiro presidente civil do Brasil foi:", ["Prudente de Morais", "Deodoro da Fonseca", "Floriano Peixoto", "Getúlio Vargas"], 0, "Eleito em 1894, depois dos dois marechais."),
  q("O coronelismo era:", ["O mando local dos fazendeiros", "Um posto de alta patente do Exército", "Um partido formado por operários", "Uma ordem religiosa do interior"], 0, "Os 'coronéis' controlavam votos, empregos e a polícia local."),
  q("A Guerra do Contestado ocorreu entre:", ["Paraná e Santa Catarina", "Bahia e Sergipe, no sertão", "São Paulo e Minas, no café", "Pará e Amazonas, na borracha"], 0, "1912–1916; camponeses expulsos por uma ferrovia e uma madeireira."),
  q("A Semana de Arte Moderna de 1922 aconteceu em:", ["São Paulo", "Salvador", "Recife", "Porto Alegre"], 0, "No Theatro Municipal, com Mário e Oswald de Andrade."),
  q("O tenentismo foi um movimento de:", ["Jovens oficiais do Exército", "Grandes fazendeiros de café", "Operários anarquistas das fábricas", "Padres católicos do interior"], 0, "Exigiam voto secreto e moralização política; ex.: Coluna Prestes."),
  q("O Estado Novo durou de:", ["1937 a 1945", "1930 a 1934", "1945 a 1954", "1964 a 1985"], 0, "Ditadura de Vargas, com censura e o DIP."),
  qe("Na República Velha, o voto era aberto e os eleitores eram pressionados pelos coronéis a votar em seus candidatos.", "Essa prática ficou conhecida como:", ["Voto de cabresto", "Voto secreto", "Sufrágio universal", "Voto distrital"], 0, "Sem sigilo, o eleitor era vigiado; só em 1932 o voto ficou secreto."),
  qe("Em 1904, a população do Rio se rebelou contra a vacinação obrigatória e as demolições do centro da cidade.", "A revolta de 1904 ficou conhecida como:", ["Revolta da Vacina", "Revolta da Chibata", "Sabinada", "Inconfidência Carioca"], 0, "Oswaldo Cruz liderava a campanha; faltou informação e diálogo com a população."),
  qe("Em 1910, marinheiros, em sua maioria negros, tomaram navios na baía de Guanabara exigindo o fim dos castigos físicos.", "O líder dessa revolta foi:", ["João Cândido", "Antônio Conselheiro", "Luís Carlos Prestes", "Zumbi"], 0, "Revolta da Chibata; ficou conhecido como o 'Almirante Negro'."),
  qe("Getúlio Vargas criou a CLT em 1943, com salário mínimo, férias e jornada de 8 horas.", "Ao mesmo tempo, o governo:", ["Controlava os sindicatos", "Proibia toda indústria", "Acabava com o salário", "Permitia greves livres"], 0, "Trabalhismo com tutela: sindicatos ligados ao Ministério do Trabalho."),
  q("A Revolução de 1930 começou após:", ["A eleição de Júlio Prestes", "A morte de Getúlio Vargas", "O fim do Estado Novo de Vargas", "A abolição da escravidão no país"], 0, "Com o assassinato de João Pessoa, a Aliança Liberal derrubou Washington Luís."),
  q("A Constituição de 1934 trouxe:", ["O voto feminino", "A volta do Império", "O fim das eleições", "A censura prévia"], 0, "Confirmou o voto das mulheres, conquistado no Código Eleitoral de 1932."),
  m("Marque revoltas da República Velha:", ["Canudos", "Contestado", "Revolta da Vacina", "Cabanagem", "Inconfidência Mineira"], [0, 1, 2], "Cabanagem é regencial; a Inconfidência, colonial."),
  m("Marque realizações da Era Vargas:", ["CLT", "Companhia Siderúrgica Nacional", "Petrobras", "Brasília", "Plano Real"], [0, 1, 2], "Brasília é de JK; o Plano Real, de 1994."),
], "n");

extend(HISTORIA, "Entreguerras e Segunda Guerra", [
  q("A quebra da Bolsa de Nova York ocorreu em:", ["1929", "1918", "1939", "1945"], 0, "Iniciou a Grande Depressão, com desemprego em massa no mundo."),
  q("O New Deal, de Roosevelt, apostou em:", ["Intervenção do Estado na economia", "Fim de todos os impostos federais", "Liberdade total do mercado financeiro", "Volta do padrão-ouro mais rígido"], 0, "Obras públicas, seguro-desemprego e regulação dos bancos."),
  q("O fascismo italiano foi liderado por:", ["Mussolini", "Francisco Franco", "Josef Stálin", "Winston Churchill"], 0, "Chegou ao poder após a Marcha sobre Roma (1922)."),
  q("A Guerra Civil Espanhola terminou com a vitória de:", ["Franco", "Os republicanos", "Os anarquistas", "Os bascos"], 0, "Franco governou a Espanha como ditador até 1975."),
  q("A Batalha de Stalingrado foi decisiva porque:", ["Derrotou os alemães no leste", "Deu a vitória ao Japão", "Começou a Guerra Fria", "Encerrou a Primeira Guerra"], 0, "A partir de 1943, os soviéticos passaram a avançar até Berlim."),
  q("O Dia D (1944) foi o desembarque aliado na:", ["Normandia", "Sicília italiana", "Grécia ocupada", "Noruega do norte"], 0, "Abriu a frente ocidental contra a Alemanha."),
  qe("Na Alemanha, a hiperinflação de 1923 fez o pão custar bilhões de marcos.", "Esse caos econômico ajudou:", ["A ascensão do nazismo", "A volta da monarquia", "O fim do nacionalismo", "A vitória dos comunistas"], 0, "Crise e humilhação pós-Versalhes alimentaram discursos extremistas."),
  qe("A propaganda nazista culpava judeus e comunistas pelos problemas da Alemanha.", "Essa estratégia de eleger um culpado é chamada de:", ["Bode expiatório", "Diplomacia secreta", "Política de boa vizinhança", "Livre mercado"], 0, "Unir a população contra um 'inimigo' facilitava o controle e a perseguição."),
  qe("Nos campos de extermínio, cerca de 6 milhões de judeus foram mortos, além de ciganos, homossexuais e pessoas com deficiência.", "Esse genocídio é chamado de:", ["Holocausto", "Apartheid", "Guerra Fria", "Diáspora"], 0, "Também chamado de Shoah; lembrado para que nunca se repita."),
  qe("Em agosto de 1945, os EUA lançaram bombas atômicas sobre Hiroshima e Nagasaki.", "Logo depois:", ["O Japão se rendeu", "A Alemanha invadiu a URSS", "A guerra recomeçou na Europa", "Os EUA saíram da ONU"], 0, "A rendição japonesa encerrou a Segunda Guerra."),
  q("O Brasil enviou à Itália a:", ["FEB", "Legião Estrangeira", "Guarda Nacional", "Coluna Prestes"], 0, "A Força Expedicionária Brasileira lutou, por exemplo, em Monte Castelo."),
  q("O Pacto Germano-Soviético (1939) foi um acordo de:", ["Não agressão", "Aliança total", "Comércio de ouro", "Divisão da China"], 0, "Rompido em 1941, quando a Alemanha invadiu a URSS."),
  m("Marque países do Eixo:", ["Alemanha", "Itália", "Japão", "Inglaterra", "União Soviética"], [0, 1, 2], "Inglaterra e URSS eram Aliados."),
  m("Marque características dos regimes totalitários:", ["Partido único", "Culto ao líder", "Censura", "Eleições livres", "Liberdade de imprensa"], [0, 1, 2], "Eleições livres e imprensa livre não existem nesses regimes."),
], "n");

extend(HISTORIA, "Guerra Fria e Ditadura Militar", [
  q("O Muro de Berlim foi construído em:", ["1961", "1945", "1989", "1949"], 0, "A Alemanha Oriental o ergueu para impedir fugas para o Ocidente; caiu em 1989."),
  q("A Revolução Cubana (1959) foi liderada por:", ["Fidel Castro", "Salvador Allende", "Juan Perón", "Augusto Pinochet"], 0, "Com Che Guevara; Cuba se aproximou da URSS."),
  q("A Crise dos Mísseis (1962) envolveu mísseis soviéticos em:", ["Cuba", "Turquia ocidental", "Alemanha Oriental", "Coreia do Norte"], 0, "O mundo esteve perto de uma guerra nuclear."),
  q("O primeiro satélite artificial, lançado pela URSS em 1957, foi o:", ["Sputnik", "Apollo 11", "Hubble", "Challenger"], 0, "O susto levou os EUA a criarem a NASA; em 1969, chegaram à Lua."),
  q("O AI-5, de 1968, ficou conhecido por:", ["Endurecer a repressão", "Convocar eleições diretas no país", "Anistiar todos os presos políticos", "Criar uma nova moeda nacional"], 0, "Permitiu censura, cassações e prisões sem habeas corpus."),
  q("O 'milagre econômico' (1968-1973) teve como problema:", ["A concentração de renda", "O crescimento zero do PIB", "A falta total de obras públicas", "A inflação negativa por anos"], 0, "O PIB cresceu muito, mas a desigualdade aumentou e a dívida externa disparou."),
  qe("Após a Segunda Guerra, o mundo se dividiu entre um bloco capitalista liderado pelos EUA e um socialista liderado pela URSS.", "O conflito entre eles foi chamado de 'Guerra Fria' porque:", ["Não houve guerra direta entre eles", "Aconteceu apenas nos meses de inverno", "Foi travado sobretudo no Polo Ártico", "Usou somente armas químicas e biológicas"], 0, "Disputavam por corridas armamentistas, propaganda e guerras em outros países."),
  qe("O Plano Marshall emprestou bilhões de dólares para reconstruir a Europa Ocidental.", "Além de reconstruir, o plano buscava:", ["Conter o socialismo", "Fortalecer a economia da URSS", "Acabar com o capitalismo europeu", "Unificar as duas Alemanhas"], 0, "Economias fortes seriam menos atraídas pelo comunismo."),
  qe("Em 1964, militares derrubaram o presidente João Goulart, que propunha reformas de base como a reforma agrária.", "O golpe teve apoio de:", ["Empresários, militares e dos EUA", "Movimentos camponeses do Nordeste", "Sindicatos operários de São Paulo", "Estudantes e diretoria da UNE"], 0, "Parte da imprensa, da Igreja e da classe média também apoiou."),
  qe("Em 1984, milhões foram às ruas pedindo eleições diretas para presidente.", "Esse movimento foi o:", ["Diretas Já", "Fora Collor", "Tenentismo", "Queremismo"], 0, "A emenda Dante de Oliveira foi rejeitada, mas o movimento acelerou a abertura."),
  q("A Lei da Anistia (1979) permitiu:", ["A volta dos exilados", "A prisão de torturadores", "O fim do voto", "A reeleição de militares"], 0, "Também perdoou agentes do Estado acusados de tortura."),
  q("A Guerra do Vietnã terminou com:", ["A vitória do Vietnã do Norte", "A vitória dos EUA", "A divisão definitiva do país", "A ocupação soviética"], 0, "Em 1975, o país foi unificado sob o regime comunista."),
  m("Marque conflitos da Guerra Fria:", ["Guerra da Coreia", "Guerra do Vietnã", "Crise dos Mísseis", "Guerra do Paraguai", "Guerra dos Cem Anos"], [0, 1, 2], "Paraguai e Cem Anos são de outros séculos."),
  o("Explique o que era a censura durante a ditadura militar no Brasil e dê um exemplo.", "A censura era o controle do governo sobre o que podia ser publicado ou exibido. Jornais, músicas, peças e filmes passavam por censores, que cortavam ou proibiam conteúdos críticos ao regime. Um exemplo são as músicas de Chico Buarque, como 'Cálice', que foram proibidas.", [
    ["Controle do governo sobre o que se publicava", "controle", "proib", "corta", "censor"],
    ["Atingia jornais, músicas, filmes ou peças", "jornal", "musica", "filme", "teatro", "peca"],
    ["Dá um exemplo", "chico", "calice", "pasquim", "estadao", "exemplo", "caetano", "vandre"],
  ]),
], "n");

extend(HISTORIA, "Redemocratização e mundo contemporâneo", [
  q("O primeiro presidente civil após a ditadura a tomar posse foi:", ["José Sarney", "Tancredo Neves", "Fernando Collor", "Itamar Franco"], 0, "Tancredo foi eleito indiretamente, mas adoeceu e morreu; Sarney, vice, assumiu."),
  q("O Plano Cruzado (1986) tentou combater:", ["A inflação", "O desmatamento", "A seca", "O analfabetismo"], 0, "Congelou preços, mas fracassou em poucos meses."),
  q("Fernando Collor sofreu impeachment em:", ["1992", "1989", "1994", "2016"], 0, "Acusado de corrupção; o movimento 'caras-pintadas' foi às ruas."),
  q("A primeira eleição direta para presidente após a ditadura foi em:", ["1989", "1985", "1979", "1994"], 0, "Collor venceu Lula no segundo turno."),
  q("O Mercosul foi criado em 1991 pelo Tratado de:", ["Assunção", "Tordesilhas", "Versalhes", "Maastricht"], 0, "Brasil, Argentina, Uruguai e Paraguai."),
  q("O 11 de Setembro de 2001 foi:", ["Um atentado nos EUA", "A queda do Muro de Berlim", "O fim oficial da URSS", "A Crise dos Mísseis em Cuba"], 0, "Levou às guerras no Afeganistão e no Iraque."),
  qe("A Constituição de 1988 ampliou direitos: voto aos analfabetos, SUS, criminalização do racismo e proteção aos indígenas.", "Por isso, ela é chamada de:", ["Constituição Cidadã", "Constituição Polaca", "Carta Outorgada", "Ato Institucional"], 0, "Apelido dado por Ulysses Guimarães, presidente da Constituinte."),
  qe("O Plano Real (1994) criou uma nova moeda e a URV como etapa de transição.", "Seu principal resultado foi:", ["Controlar a hiperinflação", "Acabar com o desemprego", "Zerar a dívida externa", "Fechar as estatais"], 0, "A inflação caiu de mais de 2.000% ao ano para um dígito."),
  qe("Em 2008, a quebra do banco Lehman Brothers espalhou uma crise financeira pelo mundo.", "A crise começou no mercado de:", ["Imóveis nos EUA", "Petróleo do Oriente Médio", "Café exportado pelo Brasil", "Ouro extraído na África do Sul"], 0, "Empréstimos de alto risco (subprime) viraram títulos que perderam o valor."),
  qe("A Primavera Árabe (2010-2012) foi uma onda de protestos no Norte da África e no Oriente Médio, organizada muitas vezes por redes sociais.", "Os manifestantes pediam:", ["Democracia e fim de ditaduras", "A volta de monarquias absolutas", "A união com a Europa", "O fim da internet"], 0, "Derrubou governos na Tunísia, no Egito e na Líbia; na Síria, virou guerra civil."),
  q("O Bolsa Família é um programa de:", ["Transferência de renda", "Construção de estradas", "Exportação de grãos", "Privatização de bancos"], 0, "Exige frequência escolar e vacinação das crianças."),
  q("A Comissão Nacional da Verdade (2012-2014) investigou:", ["Crimes da ditadura", "A corrupção no Império", "A Guerra do Paraguai e suas mortes", "As causas da crise financeira de 2008"], 0, "Identificou centenas de mortos e desaparecidos políticos."),
  m("Marque direitos garantidos pela Constituição de 1988:", ["SUS universal", "Voto dos analfabetos", "Racismo como crime inafiançável", "Censura prévia", "Voto censitário"], [0, 1, 2], "Censura e voto censitário são contrários à Constituição."),
  m("Marque características da globalização atual:", ["Internet e redes sociais", "Empresas transnacionais", "Fluxo rápido de capitais", "Fim do comércio mundial", "Isolamento dos países"], [0, 1, 2], "A globalização aumenta, e não reduz, as trocas."),
], "n");

extend(HISTORIA, "Egito e Mesopotâmia", [
  q("Os hieróglifos foram decifrados graças à:", ["Pedra de Roseta", "Lei das Doze Tábuas", "Epopeia de Gilgamesh", "Biblioteca de Alexandria"], 0, "O mesmo texto em grego e em egípcio permitiu a Champollion decifrá-los em 1822."),
  q("A mumificação no Egito estava ligada à crença:", ["Na vida após a morte", "Na reencarnação em animais", "No fim do mundo próximo", "Na ausência de deuses"], 0, "O corpo preservado seria necessário para a vida no além."),
  q("Os zigurates eram:", ["Templos em degraus", "Navios de guerra", "Tábuas de leis", "Túmulos de faraós"], 0, "Construções mesopotâmicas dedicadas aos deuses."),
  q("A Epopeia de Gilgamesh é uma obra:", ["Mesopotâmica", "Grega clássica", "Romana imperial", "Chinesa antiga"], 0, "Um dos textos literários mais antigos, com relato de um grande dilúvio."),
  q("Os escribas no Egito eram valorizados porque:", ["Dominavam a escrita", "Lutavam nas guerras", "Plantavam o trigo", "Eram estrangeiros"], 0, "Registravam impostos, colheitas e leis; poucos sabiam escrever."),
  qe("As pirâmides de Gizé foram construídas por milhares de trabalhadores, muitos deles camponeses no período das cheias do Nilo.", "Isso mostra que o Estado egípcio:", ["Mobilizava muita mão de obra", "Não tinha governo central", "Dependia só de escravizados gregos", "Proibia a agricultura"], 0, "Com os campos alagados, os camponeses trabalhavam nas obras do faraó."),
  qe("Os babilônios dividiram o círculo em 360 graus e a hora em 60 minutos.", "Isso se deve ao sistema numérico de base:", ["60", "10", "2", "12"], 0, "O sistema sexagesimal da Mesopotâmia sobrevive na medida do tempo e dos ângulos."),
  qe("O Crescente Fértil vai do Egito à Mesopotâmia, em forma de meia-lua.", "A região recebeu esse nome porque:", ["Tinha terras férteis junto a rios", "Era coberta por densas florestas", "Tinha muitas minas de ouro e prata", "Era cercada por geleiras e neve"], 0, "Nilo, Tigre e Eufrates permitiram as primeiras agriculturas."),
  q("Os persas criaram estradas e um sistema de correios para:", ["Controlar o império", "Isolar as províncias", "Proibir o comércio", "Fugir dos gregos"], 0, "A Estrada Real ligava Sardes a Susa; sátrapas governavam as províncias."),
  m("Marque características do Egito antigo:", ["Faraó como deus vivo", "Hieróglifos", "Agricultura às margens do Nilo", "Democracia direta", "Escrita cuneiforme"], [0, 1, 2], "Democracia é grega; o cuneiforme é mesopotâmico."),
  m("Marque povos da Mesopotâmia:", ["Sumérios", "Babilônios", "Assírios", "Fenícios", "Hebreus"], [0, 1, 2], "Fenícios e hebreus viviam no litoral do Mediterrâneo e na Palestina."),
], "n");

extend(HISTORIA, "Democracia grega e Império Romano", [
  q("Clístenes é considerado o pai da:", ["Democracia ateniense", "Monarquia espartana", "República romana", "Tirania de Corinto"], 0, "Por volta de 508 a.C., reorganizou Atenas em demos e criou o ostracismo."),
  q("Em Atenas, o nome do cidadão a ser exilado no ostracismo era escrito em:", ["Cacos de cerâmica", "Folhas de papiro egípcio", "Tábuas de bronze do templo", "Muros da ágora com tinta"], 0, "Os cacos (óstracos) deram nome à prática; o exílio durava dez anos."),
  q("Otávio Augusto foi o primeiro:", ["Imperador de Roma", "Cônsul da República", "Rei etrusco", "Papa de Roma"], 0, "Governou de 27 a.C. a 14 d.C.; iniciou a Pax Romana."),
  q("Júlio César foi assassinado em:", ["44 a.C.", "476 d.C.", "753 a.C.", "313 d.C."], 0, "Senadores temiam que ele se tornasse rei."),
  q("O Édito de Milão (313) garantiu:", ["Liberdade aos cristãos", "O fim do Império Romano", "A divisão do Império em dois", "A volta da monarquia etrusca"], 0, "Promulgado por Constantino; em 380, o cristianismo virou religião oficial."),
  qe("Na assembleia ateniense (Eclésia), os cidadãos falavam e votavam diretamente as leis, sem representantes.", "Esse modelo é chamado de democracia:", ["Direta", "Representativa", "Censitária", "Parlamentar"], 0, "Hoje, a maioria dos países usa a democracia representativa."),
  qe("A Pax Romana (séc. I e II) foi um longo período de relativa estabilidade no império.", "Ela favoreceu:", ["O comércio e as obras públicas", "A queda imediata do Império", "As grandes invasões germânicas", "O abandono das estradas romanas"], 0, "Estradas seguras, aquedutos e cidades cresceram nesse período."),
  qe("Os irmãos Graco, tribunos da plebe, propuseram dividir terras públicas entre os pobres de Roma.", "A reação dos grandes proprietários foi:", ["Matar os irmãos", "Apoiar a reforma", "Doar suas terras", "Fugir para a Grécia"], 0, "Tibério e Caio Graco foram mortos; a questão agrária gerou guerras civis."),
  q("As províncias romanas pagavam ao Estado:", ["Tributos", "Nada, eram livres", "Só em escravizados", "Votos no Senado"], 0, "Os impostos das províncias sustentavam Roma e seu exército."),
  m("Marque instituições da República romana:", ["Senado", "Cônsules", "Tribunos da plebe", "Faraó", "Eclésia ateniense"], [0, 1, 2], "Faraó é egípcio; a Eclésia, grega."),
  m("Marque quem não era cidadão em Atenas:", ["Mulheres", "Metecos (estrangeiros)", "Escravizados", "Homens livres filhos de atenienses", "Soldados atenienses"], [0, 1, 2], "Homens livres filhos de atenienses tinham cidadania."),
  o("Compare a democracia ateniense com a democracia atual.", "Em Atenas, a democracia era direta: os cidadãos votavam as leis na assembleia. Mas só homens livres filhos de atenienses eram cidadãos, excluindo mulheres, estrangeiros e escravizados. Hoje a democracia costuma ser representativa, com eleição de representantes, e o voto é universal para adultos.", [
    ["Atenas: direta", "direta", "assembleia"],
    ["Atenas excluía mulheres, estrangeiros, escravizados", "mulher", "estrangeir", "escrav", "exclu"],
    ["Hoje: representativa e voto universal", "representa", "universal", "eleic", "elege"],
  ]),
], "n");

extend(HISTORIA, "Feudalismo e Igreja medieval", [
  q("A corveia era a obrigação do servo de:", ["Trabalhar nas terras do senhor", "Pagar pelo uso do moinho e do forno", "Lutar nas Cruzadas no Oriente", "Entregar um décimo da colheita à Igreja"], 0, "Alguns dias por semana no manso senhorial, sem pagamento."),
  q("As banalidades eram pagas pelo uso:", ["Do moinho e do forno", "Das terras comunais", "Da igreja da aldeia", "Das estradas reais"], 0, "Instalações do senhor que o servo era obrigado a usar."),
  q("O dízimo correspondia a:", ["10% da produção à Igreja", "Metade da colheita ao rei", "Um dia de trabalho", "Uma moeda de ouro"], 0, "Era pago à Igreja, além das obrigações com o senhor."),
  q("A excomunhão significava:", ["Expulsão da Igreja", "Coroação de um rei", "Promoção a bispo", "Ida às Cruzadas"], 0, "Um castigo temido: o excomungado ficava sem sacramentos e isolado."),
  q("Os monges beneditinos seguiam o lema:", ["Ora et labora", "Penso, logo existo", "Liberdade e igualdade", "Pão e circo"], 0, "'Reza e trabalha': oração e trabalho manual nos mosteiros."),
  qe("Na Idade Média, a sociedade era vista como dividida entre os que rezam (clero), os que lutam (nobreza) e os que trabalham (servos).", "Essa visão justificava:", ["Uma sociedade estamental", "A igualdade entre todos", "A mobilidade social", "A democracia nos feudos"], 0, "Cada um nascia em sua ordem e quase não mudava de posição."),
  qe("Durante a Idade Média, muitos mosteiros copiavam à mão textos antigos.", "Esse trabalho foi importante porque:", ["Preservou obras clássicas", "Acabou com a escrita na Europa", "Proibiu a leitura dos camponeses", "Criou a imprensa de tipos móveis"], 0, "Monges copistas guardaram textos de autores gregos e romanos."),
  qe("Os tribunais da Inquisição julgavam pessoas acusadas de heresia.", "Heresia era:", ["Contrariar a doutrina", "Não pagar impostos ao rei", "Fugir do feudo à noite", "Ser estrangeiro no reino"], 0, "Ideias religiosas contrárias à Igreja podiam levar à prisão ou à fogueira."),
  q("A arte gótica é marcada por:", ["Vitrais e arcos ogivais", "Paredes grossas e escuras", "Pirâmides de pedra", "Colunas gregas lisas"], 0, "Catedrais altas e iluminadas, como Notre-Dame de Paris."),
  m("Marque obrigações dos servos:", ["Corveia", "Talha", "Banalidades", "Voto nas eleições", "Serviço como bispo"], [0, 1, 2], "Servos não votavam nem eram bispos."),
  m("Marque características do feudalismo:", ["Economia agrária", "Poder descentralizado", "Relações de suserania e vassalagem", "Grandes fábricas", "Moeda única europeia"], [0, 1, 2], "Fábricas e moeda única são da era moderna e contemporânea."),
], "n");

extend(HISTORIA, "Revolução Francesa e Industrial", [
  q("A Tomada da Bastilha ocorreu em:", ["14 de julho de 1789", "7 de setembro de 1822", "15 de novembro de 1889", "4 de julho de 1776"], 0, "A prisão era símbolo do absolutismo; a data é feriado nacional na França."),
  q("Os jacobinos representavam:", ["A ala mais radical", "A nobreza do Antigo Regime", "Os monarquistas", "O alto clero"], 0, "Liderados por Robespierre; sentavam-se à esquerda na Convenção."),
  q("O Código Napoleônico garantiu:", ["Igualdade perante a lei", "A volta dos privilégios", "O fim da propriedade", "O voto das mulheres"], 0, "Também protegeu a propriedade privada; influenciou códigos civis pelo mundo."),
  q("O Bloqueio Continental de Napoleão foi contra a:", ["Inglaterra", "Espanha dos Bourbon", "Rússia dos czares", "Áustria dos Habsburgo"], 0, "Proibia países europeus de comerciar com os ingleses; Portugal não aderiu."),
  q("A máquina a vapor foi aperfeiçoada por:", ["James Watt", "Thomas Edison", "Henry Ford", "Isaac Newton"], 0, "Na década de 1760; movia fábricas, trens e navios."),
  q("Os cercamentos (enclosures) na Inglaterra:", ["Expulsaram camponeses do campo", "Deram terras aos mais pobres", "Acabaram com a produção de lã", "Proibiram a abertura de fábricas"], 0, "As terras comunais viraram pastos cercados; a mão de obra foi para as fábricas."),
  qe("Antes de 1789, o Terceiro Estado (burgueses, camponeses e trabalhadores urbanos) pagava quase todos os impostos da França.", "Clero e nobreza:", ["Tinham isenções e privilégios", "Pagavam mais impostos que todos", "Já não existiam como grupos", "Eram eleitos pelo povo francês"], 0, "Esse desequilíbrio, somado à crise, levou à revolução."),
  qe("No período do Terror (1793-1794), milhares foram guilhotinados como 'inimigos da revolução'.", "Esse período foi liderado por:", ["Robespierre", "Napoleão", "Luís XVI", "Maria Antonieta"], 0, "O próprio Robespierre foi guilhotinado em 1794."),
  qe("No início da Revolução Industrial, crianças trabalhavam até 14 horas por dia em minas e fábricas.", "Essa situação levou, com o tempo, a:", ["Leis trabalhistas e sindicatos", "Fim imediato de todas as fábricas", "Volta ao trabalho servil feudal", "Proibição do uso de máquinas"], 0, "A luta operária conquistou limites de jornada e proibição do trabalho infantil."),
  qe("Os cartistas ingleses (1838-1848) enviaram petições ao Parlamento.", "Eles pediam principalmente:", ["Voto para os trabalhadores", "O fim do Parlamento", "A volta do absolutismo", "Mais horas de trabalho"], 0, "A Carta do Povo pedia sufrágio universal masculino e voto secreto."),
  q("A Inglaterra foi pioneira na industrialização, entre outros motivos, por ter:", ["Carvão e capital acumulado", "Poucos portos e rios navegáveis", "Proibição do comércio exterior", "Nenhuma colônia ou mercado externo"], 0, "Também tinha mão de obra liberada pelos cercamentos e mercado colonial."),
  m("Marque fases da Revolução Francesa:", ["Assembleia Nacional", "Convenção", "Diretório", "Reconquista", "Renascimento"], [0, 1, 2], "Depois do Diretório veio o Consulado de Napoleão (1799)."),
  m("Marque consequências da Revolução Industrial:", ["Urbanização", "Formação do operariado", "Poluição", "Fim do capitalismo", "Volta da servidão"], [0, 1, 2], "A industrialização fortaleceu o capitalismo."),
], "n");

extend(HISTORIA, "Ciclo do açúcar e do ouro", [
  q("O açúcar foi escolhido como primeiro grande produto colonial porque:", ["Valia muito na Europa", "Era uma planta nativa do Brasil", "Dispensava qualquer mão de obra", "Só crescia em regiões muito frias"], 0, "Portugal já o cultivava nas ilhas atlânticas, como a Madeira."),
  q("A plantation se baseava em:", ["Latifúndio, monocultura e escravidão", "Pequenas propriedades de famílias livres", "Produção só para o consumo local", "Trabalho assalariado de imigrantes europeus"], 0, "Grandes terras, um produto principal, exportação e trabalho escravizado."),
  q("O quinto era um imposto que cobrava:", ["20% do ouro extraído", "10% do açúcar vendido", "Metade do café exportado", "Um escravizado por família"], 0, "O ouro era fundido nas Casas de Fundição para garantir a cobrança."),
  q("A capital do Brasil passou de Salvador para o Rio de Janeiro em:", ["1763", "1808", "1549", "1822"], 0, "O Rio era o porto mais próximo das minas."),
  q("O Aleijadinho foi um grande artista do:", ["Barroco mineiro", "Modernismo paulista", "Romantismo carioca", "Renascimento italiano"], 0, "Esculturas em pedra-sabão, como os Profetas de Congonhas."),
  qe("A derrama era a cobrança forçada dos impostos atrasados sobre o ouro, com confisco de bens.", "O anúncio de uma derrama em 1789 ajudou a provocar a:", ["Inconfidência Mineira", "Revolta da Chibata no Rio", "Guerra dos Emboabas nas minas", "Balaiada no Maranhão"], 0, "Os inconfidentes planejavam o levante para o dia da derrama."),
  qe("Paulistas e forasteiros (portugueses e baianos) lutaram pelo controle das minas entre 1707 e 1709.", "Esse conflito foi a:", ["Guerra dos Emboabas", "Guerra dos Mascates", "Revolta de Beckman", "Guerra dos Farrapos"], 0, "Os paulistas perderam e foram buscar ouro em Goiás e Mato Grosso."),
  qe("Com a mineração, cresceram cidades como Vila Rica, Mariana e Sabará, com comerciantes, artesãos e funcionários.", "Isso mostra que a mineração:", ["Estimulou a vida urbana", "Isolou o interior", "Acabou com o comércio", "Usou só trabalho livre"], 0, "Também criou um mercado interno, ligado ao Sul pelo gado e pelas mulas."),
  qe("Parte do ouro brasileiro foi parar na Inglaterra por causa do Tratado de Methuen (1703).", "Isso ocorreu porque Portugal:", ["Comprava tecidos ingleses", "Vendia ouro à Espanha", "Proibia o comércio", "Fabricava muitos tecidos"], 0, "Portugal vendia vinhos e comprava tecidos; o déficit era pago com ouro."),
  m("Marque características da sociedade mineradora:", ["Maior vida urbana", "Forte fiscalização da Coroa", "Trabalho escravizado", "Ausência de impostos", "Igualdade entre todos"], [0, 1, 2], "A Coroa cobrava pesado; a desigualdade continuava."),
  m("Marque as etapas da produção no engenho:", ["Moenda", "Casa das caldeiras", "Casa de purgar", "Casa de fundição", "Lavra do ouro"], [0, 1, 2], "Fundição e lavra eram da mineração."),
], "n");

extend(HISTORIA, "Independência e Segundo Reinado", [
  q("O 'Dia do Fico' (1822) foi quando D. Pedro:", ["Decidiu ficar no Brasil", "Proclamou a República no Rio", "Abdicou do trono em favor do filho", "Aboliu a escravidão no Império"], 0, "As Cortes de Lisboa exigiam seu retorno."),
  q("D. Pedro I abdicou do trono em:", ["1831", "1822", "1840", "1889"], 0, "Deixou o filho de 5 anos e voltou a Portugal; começou o Período Regencial."),
  q("No Segundo Reinado, o parlamentarismo era chamado 'às avessas' porque:", ["O imperador escolhia o ministério", "Não existia nenhum Parlamento", "O povo elegia diretamente o rei", "Os ministros eram vitalícios no cargo"], 0, "O Poder Moderador permitia a D. Pedro II nomear e trocar o gabinete."),
  q("A Lei de Terras (1850) determinou que a terra só podia ser obtida por:", ["Compra", "Doação do rei", "Ocupação livre", "Herança indígena"], 0, "Dificultou o acesso à terra para imigrantes pobres e libertos."),
  q("O Barão de Mauá ficou conhecido por:", ["Investir em indústrias e ferrovias", "Liderar o movimento abolicionista", "Proclamar a República com Deodoro", "Comandar as tropas no Paraguai"], 0, "Fundou estaleiro, banco e a primeira ferrovia do Brasil (1854)."),
  qe("Após a independência, províncias como a Bahia resistiram e tropas portuguesas lutaram até 2 de julho de 1823.", "Isso mostra que a independência:", ["Envolveu lutas armadas", "Foi totalmente pacífica", "Foi só em São Paulo", "Não teve oposição"], 0, "Houve guerras na Bahia, no Maranhão, no Piauí e na Cisplatina."),
  qe("A partir de 1870, fazendeiros paulistas trouxeram imigrantes italianos para as lavouras de café.", "Isso ocorreu principalmente porque:", ["Faltava mão de obra escrava", "O café deixou de ser exportado", "Os italianos eram donos das fazendas", "O governo imperial proibiu o café"], 0, "Muitos vieram pelo sistema de colonato, com promessas nem sempre cumpridas."),
  qe("A Lei dos Sexagenários (1885) libertava escravizados com mais de 60 anos.", "A lei foi criticada porque:", ["Poucos chegavam a essa idade", "Libertou todos de uma vez", "Indenizou os escravizados", "Proibiu a imigração"], 0, "A dura vida no cativeiro fazia poucos chegarem aos 60."),
  qe("Em 15 de novembro de 1889, o marechal Deodoro liderou o movimento que derrubou a monarquia.", "A participação popular nesse fato foi:", ["Pequena", "Enorme e organizada", "Decisiva nas ruas", "Feita por eleição"], 0, "O jornalista Aristides Lobo escreveu que o povo assistiu 'bestializado'."),
  m("Marque abolicionistas brasileiros:", ["Joaquim Nabuco", "André Rebouças", "Luís Gama", "Duque de Caxias", "Barão de Cotegipe"], [0, 1, 2], "Caxias foi militar do Império; Cotegipe se opôs à Lei Áurea."),
  m("Marque fatores da expansão do café no Segundo Reinado:", ["Solo de terra roxa", "Ferrovias", "Demanda externa", "Proibição da exportação", "Fim do comércio com os EUA"], [0, 1, 2], "Os EUA eram grandes compradores de café brasileiro."),
], "n");

extend(HISTORIA, "Era Vargas", [
  q("O DIP, no Estado Novo, cuidava de:", ["Propaganda e censura", "Saúde pública e vacinação", "Exportação de café e açúcar", "Organização das eleições livres"], 0, "Departamento de Imprensa e Propaganda: exaltava Vargas e censurava a imprensa."),
  q("A Revolução Constitucionalista de 1932 ocorreu em:", ["São Paulo", "Rio Grande do Sul", "Minas Gerais", "Pernambuco"], 0, "Os paulistas exigiam uma nova Constituição; foram derrotados."),
  q("A Intentona Comunista de 1935 foi liderada pela:", ["Aliança Nacional Libertadora", "Ação Integralista Brasileira", "União Democrática Nacional", "Liga das Nações"], 0, "Com Luís Carlos Prestes; serviu de pretexto para endurecer o regime."),
  q("O Plano Cohen (1937) foi:", ["Um falso plano comunista", "Um plano econômico real", "Uma lei trabalhista", "Um tratado de paz"], 0, "Documento forjado usado para justificar o golpe do Estado Novo."),
  q("Getúlio Vargas morreu em 1954:", ["Por suicídio, no Catete", "Num acidente de avião no mar", "Assassinado em São Paulo", "Exilado na Europa, já idoso"], 0, "Deixou a carta-testamento: 'saio da vida para entrar na história'."),
  qe("O Estado Novo (1937) fechou o Congresso, extinguiu partidos e criou uma Constituição inspirada em regimes autoritários europeus.", "Essa Constituição ficou conhecida como:", ["Polaca", "Cidadã", "Imperial", "Republicana"], 0, "O apelido vem da Constituição autoritária da Polônia."),
  qe("Vargas se apresentava como 'pai dos pobres' e falava diretamente às massas pelo rádio.", "Esse estilo político é chamado de:", ["Populismo", "Coronelismo", "Federalismo", "Liberalismo"], 0, "Líder carismático, apoio popular e controle dos trabalhadores."),
  qe("Em troca de apoio aos Aliados na Segunda Guerra, os EUA financiaram a Companhia Siderúrgica Nacional, em Volta Redonda.", "Isso mostra que Vargas:", ["Negociou vantagens com os EUA", "Apoiou a Alemanha até o fim", "Não participou da guerra", "Proibiu a indústria"], 0, "Barganha diplomática: o Brasil cedeu bases e enviou a FEB."),
  qe("Em 1953, com o lema 'O petróleo é nosso', foi criada uma estatal para explorar o petróleo.", "Essa empresa é a:", ["Petrobras", "Vale do Rio Doce", "Eletrobras", "Embraer"], 0, "Criada no segundo governo Vargas, com monopólio da exploração."),
  m("Marque características do Estado Novo:", ["Censura", "Partidos extintos", "Centralização do poder", "Eleições diretas livres", "Imprensa livre"], [0, 1, 2], "Não houve eleições nem imprensa livre."),
  m("Marque órgãos ou leis criados por Vargas:", ["Ministério do Trabalho", "Justiça do Trabalho", "Salário mínimo", "SUS", "Bolsa Família"], [0, 1, 2], "SUS é de 1988; Bolsa Família, de 2003."),
], "n");

extend(HISTORIA, "Ditadura militar", [
  q("O primeiro presidente militar após o golpe de 1964 foi:", ["Castelo Branco", "Ernesto Geisel", "Emílio Médici", "João Figueiredo"], 0, "Governou de 1964 a 1967."),
  q("No bipartidarismo, o partido do governo era a:", ["Arena", "MDB, da oposição", "UDN, de Lacerda", "PTB, de Vargas"], 0, "O MDB era a oposição consentida."),
  q("O DOI-Codi era um órgão de:", ["Repressão política", "Saúde pública", "Educação básica", "Planejamento urbano"], 0, "Onde muitos presos foram torturados e mortos."),
  q("A Guerrilha do Araguaia ocorreu na região:", ["Do Pará e Tocantins", "Do litoral paulista", "Da serra gaúcha", "Do sertão baiano"], 0, "Militantes do PCdoB foram combatidos pelo Exército no início dos anos 1970."),
  q("A abertura 'lenta, gradual e segura' começou no governo:", ["Geisel", "Médici", "Costa e Silva", "Castelo Branco"], 0, "Geisel (1974–1979) iniciou a distensão; Figueiredo concluiu a transição."),
  qe("O jornalista Vladimir Herzog morreu em 1975 nas dependências do DOI-Codi; o regime alegou suicídio, mas fotos e laudos mostraram tortura.", "O caso gerou:", ["Protestos contra a repressão", "Apoio total ao regime", "O fim do AI-5 no mesmo dia", "A eleição direta de 1975"], 0, "Um culto ecumênico na Sé reuniu milhares de pessoas em protesto."),
  qe("Músicas como 'Pra não dizer que não falei das flores', de Geraldo Vandré, foram proibidas.", "Isso mostra que a ditadura:", ["Censurava a cultura", "Incentivava a crítica", "Patrocinava protestos", "Não ligava para a música"], 0, "Artistas usavam metáforas para driblar os censores."),
  qe("No final dos anos 1970, metalúrgicos do ABC paulista fizeram grandes greves.", "Desse movimento surgiu a liderança de:", ["Lula", "Collor", "Sarney", "Brizola"], 0, "O novo sindicalismo ajudou a fundar o PT em 1980."),
  qe("Nas eleições de 1985, o Colégio Eleitoral escolheu Tancredo Neves como presidente.", "A eleição foi:", ["Indireta", "Direta", "Censitária", "Por sorteio"], 0, "A emenda das Diretas Já tinha sido rejeitada em 1984."),
  m("Marque instrumentos de repressão da ditadura:", ["Atos Institucionais", "Censura", "Tortura de presos", "Eleições diretas", "Liberdade sindical"], [0, 1, 2], "Eleições diretas e liberdade sindical eram reivindicações da oposição."),
  m("Marque obras do período militar:", ["Ponte Rio-Niterói", "Usina de Itaipu", "Rodovia Transamazônica", "Brasília", "Petrobras"], [0, 1, 2], "Brasília é de JK; a Petrobras, de Vargas."),
], "n");

extend(HISTORIA, "Nova República", [
  q("O Estatuto do Idoso, que garante direitos a pessoas com 60 anos ou mais, é de:", ["2003", "1988", "1964", "1990"], 0, "Prevê prioridade no atendimento, transporte gratuito e combate à violência contra idosos."),
  q("O real começou a circular em:", ["1994", "1986", "1989", "2002"], 0, "Lançado no governo Itamar Franco, com FHC na Fazenda."),
  q("FHC foi o primeiro presidente a ser:", ["Reeleito", "Eleito indiretamente", "Afastado por impeachment", "Militar"], 0, "A emenda da reeleição foi aprovada em 1997."),
  q("A Lei de Responsabilidade Fiscal (2000) busca:", ["Controlar gastos públicos", "Aumentar a inflação anual", "Acabar com todos os impostos", "Proibir eleições municipais"], 0, "Limita gastos com pessoal e endividamento dos governos."),
  q("Em 2016, sofreu impeachment a presidente:", ["Dilma Rousseff", "Marina Silva", "Benedita da Silva", "Marta Suplicy"], 0, "Acusada de 'pedaladas fiscais'; Michel Temer assumiu."),
  qe("Em junho de 2013, protestos contra o aumento das passagens de ônibus se espalharam por todo o Brasil.", "Com o tempo, as pautas passaram a incluir:", ["Saúde, educação e corrupção", "Apenas o preço do transporte", "A volta da monarquia no Brasil", "O fim do voto obrigatório e direto"], 0, "As Jornadas de Junho reuniram milhões em centenas de cidades."),
  qe("A Lei Maria da Penha (2006) criou mecanismos para coibir a violência doméstica contra a mulher.", "A lei recebeu esse nome em homenagem a:", ["Uma vítima de agressão", "Uma presidente do país", "Uma juíza do Supremo", "Uma rainha de Portugal"], 0, "Maria da Penha ficou paraplégica após agressões do marido e lutou por anos."),
  qe("A partir de 2012, a Lei de Cotas reservou vagas nas universidades federais para alunos de escolas públicas, negros, pardos e indígenas.", "O objetivo dessa política é:", ["Reduzir desigualdades", "Diminuir o número de vagas", "Fechar universidades", "Acabar com o Enem"], 0, "Ação afirmativa para ampliar o acesso de grupos historicamente excluídos."),
  qe("Com o impeachment de Collor em 1992, o vice assumiu a presidência.", "O vice era:", ["Itamar Franco", "José Sarney", "Ulysses Guimarães", "Tancredo Neves"], 0, "Itamar governou até 1994 e lançou o Plano Real."),
  m("Marque leis ou políticas da Nova República:", ["ECA", "Lei Maria da Penha", "Lei de Cotas", "AI-5", "Lei Áurea"], [0, 1, 2], "AI-5 é da ditadura; Lei Áurea, do Império."),
  o("Explique por que a Constituição de 1988 é considerada um marco da redemocratização.", "A Constituição de 1988 foi feita por uma Assembleia Constituinte eleita após a ditadura. Ela restabeleceu eleições diretas e liberdades, e ampliou direitos sociais, como saúde pelo SUS e voto dos analfabetos. Assim, marcou o fim do autoritarismo e garantiu a cidadania.", [
    ["Feita após a ditadura / Constituinte", "constituinte", "ditadura", "apos"],
    ["Eleições diretas e liberdades", "eleic", "direta", "liberdade"],
    ["Ampliou direitos sociais / cidadania", "direito", "sus", "cidad", "analfabet"],
  ]),
], "n");

extend(HISTORIA, "Primeira Guerra Mundial", [
  q("A Primeira Guerra durou de:", ["1914 a 1918", "1939 a 1945", "1904 a 1910", "1917 a 1921"], 0, "Terminou com o armistício de 11 de novembro de 1918."),
  q("A Itália, membro da Tríplice Aliança, em 1915:", ["Mudou para o lado da Entente", "Venceu a guerra sozinha no front", "Ficou neutra até o fim do conflito", "Invadiu o território da Inglaterra"], 0, "Recebeu promessas de territórios para trocar de lado."),
  q("O armistício de 1918 foi assinado pela:", ["Alemanha", "Inglaterra", "França", "Rússia"], 0, "A Alemanha pediu paz com o país em crise e revoltas internas."),
  q("A gripe espanhola (1918-1920) se espalhou rapidamente, entre outros motivos, por causa:", ["Do movimento de tropas", "Da falta de navios", "Do fim do comércio", "Do isolamento dos países"], 0, "Matou dezenas de milhões; no Brasil, vitimou o presidente eleito Rodrigues Alves."),
  qe("Na Primeira Guerra, surgiram tanques, aviões de combate, metralhadoras e gases tóxicos.", "Isso fez da guerra um conflito:", ["Industrial e muito mortal", "Rápido e quase sem mortes", "Travado só com cavalaria", "Restrito aos combates no mar"], 0, "Cerca de 10 milhões de soldados morreram."),
  qe("Com milhões de homens no front, mulheres passaram a trabalhar em fábricas de munição e em serviços antes masculinos.", "Uma consequência disso foi:", ["Reforço da luta pelo voto feminino", "A proibição do trabalho das mulheres", "O fechamento de todas as fábricas", "A volta das relações feudais na Europa"], 0, "Vários países concederam o voto às mulheres logo depois da guerra."),
  qe("Os 14 Pontos do presidente Wilson (1918) propunham autodeterminação dos povos e uma liga de nações.", "Esses pontos buscavam:", ["Uma paz duradoura", "Punir só a França", "Dividir os EUA", "Recriar impérios"], 0, "Muitos pontos foram ignorados em Versalhes."),
  qe("O Império Austro-Húngaro e o Império Otomano deixaram de existir após 1918.", "Em seus territórios surgiram:", ["Novos Estados nacionais", "Colônias inglesas na Ásia", "Reinos medievais", "Uma única república"], 0, "Ex.: Tchecoslováquia, Iugoslávia e a moderna Turquia."),
  q("A Batalha do Marne (1914):", ["Barrou os alemães perto de Paris", "Encerrou a guerra com a paz", "Foi vencida pela Rússia no leste", "Ocorreu no oceano Pacífico"], 0, "Depois dela, a guerra de movimento virou guerra de trincheiras."),
  m("Marque países da Tríplice Entente:", ["França", "Reino Unido", "Rússia", "Alemanha", "Áustria-Hungria"], [0, 1, 2], "Alemanha e Áustria-Hungria eram os Impérios Centrais."),
  m("Marque consequências da Primeira Guerra:", ["Fim de impérios", "Tratado de Versalhes", "Criação da Liga das Nações", "Fim do nacionalismo", "Criação da ONU"], [0, 1, 2], "A ONU é de 1945; o nacionalismo continuou forte."),
], "n");

extend(HISTORIA, "Segunda Guerra Mundial", [
  q("A Segunda Guerra começou com a invasão alemã da:", ["Polônia", "França", "Bélgica", "Noruega"], 0, "Em 1º de setembro de 1939; França e Reino Unido declararam guerra à Alemanha."),
  q("A Blitzkrieg era a tática alemã de:", ["Guerra-relâmpago", "Guerra de trincheiras", "Cerco prolongado", "Defesa passiva"], 0, "Ataques rápidos com tanques e aviões."),
  q("O ataque a Pearl Harbor (1941) foi feito pelo:", ["Japão", "Alemanha", "Itália", "URSS"], 0, "Levou os EUA a entrarem na guerra."),
  q("A política de apaziguamento, antes da guerra, consistiu em:", ["Ceder às exigências de Hitler", "Atacar a Alemanha antes de tudo", "Aliar-se ao Japão contra a URSS", "Boicotar o comércio com a Itália"], 0, "No Acordo de Munique (1938), cederam os Sudetos tchecos a Hitler."),
  q("A guerra na Europa terminou em:", ["Maio de 1945", "Setembro de 1939", "Dezembro de 1941", "Agosto de 1944"], 0, "A Alemanha se rendeu em 8 de maio; o Japão, em setembro."),
  qe("Na Conferência de Yalta (1945), Roosevelt, Churchill e Stálin discutiram o mundo pós-guerra.", "Um dos resultados foi:", ["A divisão da Alemanha em zonas", "A volta do Império Alemão", "A criação do Mercosul", "A independência da Índia"], 0, "A Alemanha e Berlim foram divididas entre os vencedores."),
  qe("O Tribunal de Nuremberg (1945-1946) julgou líderes nazistas.", "Ele criou o precedente de julgar:", ["Crimes contra a humanidade", "Apenas crimes comuns de rua", "Somente os soldados rasos", "Os países que ficaram neutros"], 0, "Obedecer ordens não livrava ninguém da responsabilidade."),
  qe("Durante a guerra, o Brasil cedeu bases no Nordeste aos EUA, como a de Natal.", "Essas bases eram estratégicas porque:", ["Ficavam perto da África", "Tinham petróleo", "Eram longe do mar", "Ficavam na Europa"], 0, "Natal era o ponto mais próximo da África, rota para o norte africano."),
  qe("A ONU foi criada em 1945 com o Conselho de Segurança, que tem cinco membros permanentes com direito a veto.", "Esses membros são:", ["EUA, Rússia, China, Reino Unido e França", "Brasil, EUA, Japão, Índia e Alemanha", "Itália, Espanha, Canadá, Japão e EUA", "Só os países europeus"], 0, "São as potências vencedoras da Segunda Guerra."),
  m("Marque países Aliados:", ["EUA", "Reino Unido", "URSS", "Japão", "Itália fascista"], [0, 1, 2], "Japão e Itália fascista eram do Eixo."),
  m("Marque fatos da Segunda Guerra:", ["Holocausto", "Bombas atômicas no Japão", "Batalha de Stalingrado", "Tratado de Versalhes", "Batalha do Marne"], [0, 1, 2], "Versalhes e Marne são da Primeira Guerra."),
], "n");

extend(HISTORIA, "Guerra Fria", [
  q("A Otan foi criada em 1949 como uma aliança:", ["Militar ocidental", "Econômica asiática", "Socialista", "Religiosa"], 0, "Liderada pelos EUA; a resposta soviética foi o Pacto de Varsóvia (1955)."),
  q("A Doutrina Truman propunha:", ["Conter o comunismo", "Apoiar a URSS", "Isolar os EUA", "Dividir a China"], 0, "Ajuda a países ameaçados pelo avanço socialista (1947)."),
  q("A Revolução Chinesa de 1949 foi liderada por:", ["Mao Tsé-tung", "Chiang Kai-shek", "Ho Chi Minh", "Deng Xiaoping"], 0, "Criou a República Popular da China, socialista."),
  q("O macarthismo, nos EUA, foi:", ["Uma caça a supostos comunistas", "Um plano de paz com a URSS", "Uma lei que abriu a imigração", "Um programa espacial da NASA"], 0, "Nos anos 1950; artistas e funcionários foram acusados sem provas."),
  q("A Coreia foi dividida no paralelo:", ["38", "17", "45", "0"], 0, "A Guerra da Coreia (1950–1953) terminou sem tratado de paz."),
  qe("EUA e URSS acumularam milhares de ogivas nucleares, capazes de destruir o planeta várias vezes.", "O equilíbrio baseado nesse medo era chamado de:", ["Equilíbrio do terror", "Paz perpétua", "Coexistência agrícola", "Neutralidade armada"], 0, "Uma guerra direta significaria destruição mútua assegurada."),
  qe("Em 1955, países da Ásia e da África se reuniram em Bandung, na Indonésia, buscando não se alinhar a nenhum bloco.", "Esse grupo ficou conhecido como:", ["Não alinhados", "Países do Eixo", "Pacto de Varsóvia", "Otan"], 0, "Também chamado de Terceiro Mundo, defendia a descolonização."),
  qe("Gorbachev lançou a perestroika (reforma econômica) e a glasnost (transparência política) nos anos 1980.", "Essas reformas acabaram contribuindo para:", ["O fim da URSS", "O fortalecimento de Stálin", "A Guerra da Coreia", "A criação da Otan"], 0, "Em 1991, a União Soviética se dissolveu em 15 países."),
  qe("Na América Latina, os EUA apoiaram golpes militares em países como Brasil (1964) e Chile (1973).", "O objetivo era:", ["Impedir governos de esquerda", "Implantar o socialismo", "Apoiar a URSS", "Acabar com as Forças Armadas"], 0, "No Chile, Allende foi derrubado por Pinochet."),
  m("Marque países do bloco socialista:", ["URSS", "Cuba", "Alemanha Oriental", "Alemanha Ocidental", "Japão"], [0, 1, 2], "Alemanha Ocidental e Japão eram aliados dos EUA."),
  m("Marque disputas típicas da Guerra Fria:", ["Corrida armamentista", "Corrida espacial", "Propaganda ideológica", "Cruzadas religiosas", "Disputa pelo ouro de Minas"], [0, 1, 2], "Cruzadas e ouro de Minas são de outros períodos."),
], "n");

extend(HISTORIA, "Mundo pós-1991", [
  q("A União Europeia foi criada pelo Tratado de:", ["Maastricht", "Assunção", "Versalhes", "Tordesilhas"], 0, "Em 1992; o euro começou a circular em 2002."),
  q("O Brexit foi a saída do Reino Unido da:", ["União Europeia", "Otan, a aliança militar", "ONU e de suas agências", "Commonwealth britânica"], 0, "Decidida em plebiscito em 2016 e concluída em 2020."),
  q("O genocídio de Ruanda (1994) opôs:", ["Hutus e tutsis", "Sérvios e croatas", "Curdos e turcos", "Árabes e judeus"], 0, "Cerca de 800 mil tutsis e hutus moderados foram mortos em 100 dias."),
  q("O apartheid na África do Sul terminou com a eleição de:", ["Nelson Mandela", "Desmond Tutu", "Kofi Annan", "Robert Mugabe"], 0, "Em 1994, após 27 anos de prisão de Mandela."),
  q("A pandemia de covid-19 foi declarada pela OMS em:", ["2020", "2009", "2015", "2023"], 0, "Afetou economias, escolas e sistemas de saúde do mundo todo."),
  qe("Com o fim da URSS, os EUA ficaram como única superpotência militar.", "Esse cenário é chamado de:", ["Ordem unipolar", "Ordem bipolar", "Feudalismo", "Mercantilismo"], 0, "Com a ascensão da China e de outros polos, fala-se hoje em multipolaridade."),
  qe("A Iugoslávia se fragmentou nos anos 1990 em guerras marcadas por 'limpeza étnica'.", "Esses conflitos tiveram forte componente:", ["Étnico e religioso", "Climático e de secas", "Espacial e de satélites", "Agrícola e de pragas"], 0, "Sérvios, croatas e bósnios muçulmanos se enfrentaram; ex.: massacre de Srebrenica."),
  qe("A China se tornou a segunda maior economia do mundo com reformas iniciadas por Deng Xiaoping.", "Esse modelo combina:", ["Partido único e economia de mercado", "Democracia e socialismo puro", "Monarquia e feudalismo", "Anarquia e comércio livre"], 0, "Chamado de 'socialismo de mercado'."),
  qe("Em 2022, a Rússia invadiu a Ucrânia, provocando sanções do Ocidente e uma crise energética na Europa.", "A Europa foi afetada porque dependia:", ["Do gás russo", "Do café ucraniano", "Do petróleo brasileiro", "Do carvão chinês"], 0, "Grande parte do gás natural europeu vinha da Rússia."),
  m("Marque fatos posteriores a 1991:", ["Fim do apartheid", "Criação do euro", "Atentados de 11 de setembro", "Queda do Muro de Berlim", "Revolução Cubana"], [0, 1, 2], "O Muro caiu em 1989; a Revolução Cubana é de 1959."),
  o("Explique o que mudou na ordem mundial com o fim da Guerra Fria.", "Com o fim da URSS em 1991, acabou a disputa bipolar entre EUA e União Soviética. Os EUA ficaram como única superpotência, e o capitalismo e a globalização se espalharam. Depois, surgiram novos polos de poder, como a China e a União Europeia, levando a uma ordem multipolar.", [
    ["Fim da bipolaridade / URSS", "bipolar", "urss", "uniao sovietica"],
    ["Hegemonia dos EUA / globalização", "superpot", "eua", "globaliz", "unipolar"],
    ["Novos polos / multipolaridade", "multipolar", "china", "polo", "uniao europeia"],
  ]),
], "n");
