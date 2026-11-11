import { GEOGRAFIA as G, HISTORIA as H } from "./natureza-humanas";
import { c, f, pack, q } from "./pack";

// ── História ─────────────────────────────────────────────────────────────────
pack(H, "antiguidade", 1, 1, "Egito e Mesopotâmia", [
  q("A civilização egípcia se desenvolveu às margens do rio:", ["Tigre", "Nilo", "Eufrates", "Ganges"], 1, "As cheias do Nilo fertilizavam o solo."),
  q("A escrita cuneiforme surgiu na:", ["Grécia", "Mesopotâmia", "China", "Roma"], 1, "Sumérios, em placas de argila."),
  q("O Código de Hamurábi ficou conhecido pelo princípio:", ["Da igualdade perante a lei", "Olho por olho, dente por dente", "Do habeas corpus", "Da democracia"], 1, "Lei de talião, na Babilônia."),
  q("No Egito Antigo, o faraó era considerado:", ["Um sacerdote comum", "Um deus vivo", "Um escravo", "Um comerciante"], 1, "Monarquia teocrática."),
  q("A Mesopotâmia ficava entre os rios:", ["Nilo e Jordão", "Tigre e Eufrates", "Amazonas e Negro", "Indo e Ganges"], 1, "\"Terra entre rios\"."),
  q("As pirâmides de Gizé eram principalmente:", ["Templos para o povo", "Túmulos de faraós", "Celeiros", "Fortalezas"], 1, "Ligadas à crença na vida após a morte."),
  f("Modo de produção asiático", "Terra pertencia ao Estado; camponeses pagavam tributos e prestavam trabalho compulsório."),
  f("Hieróglifos", "Escrita sagrada egípcia, decifrada graças à Pedra de Roseta."),
  c(["Primeiras civilizações nasceram perto de rios.", "Agricultura gerou excedente.", "Excedente gerou cidades e Estado.", "Escrita surgiu para registrar tributos."], "Rio fértil + irrigação = civilização."),
]);

pack(H, "antiguidade", 1, 2, "Democracia grega e Império Romano", [
  q("A democracia ateniense excluía:", ["Homens livres nascidos em Atenas", "Mulheres, estrangeiros e escravizados", "Ninguém", "Apenas os ricos"], 1, "Só cidadãos homens atenienses participavam."),
  q("Esparta era conhecida por:", ["Filosofia e teatro", "Formação militar rigorosa", "Democracia direta", "Comércio marítimo"], 1, "Sociedade militarista e oligárquica."),
  q("A política do \"pão e circo\" em Roma servia para:", ["Educar o povo", "Controlar a insatisfação da plebe", "Treinar soldados", "Financiar guerras"], 1, "Distribuir comida e espetáculos para evitar revoltas."),
  q("O Império Romano do Ocidente caiu em:", ["476 d.C.", "1453", "1789", "27 a.C."], 0, "Marco do início da Idade Média."),
  q("Os plebeus romanos conquistaram representação política com os:", ["Faraós", "Tribunos da plebe", "Éforos", "Reis"], 1, "Após revoltas na República."),
  q("A Lei das Doze Tábuas foi importante porque:", ["Criou a monarquia", "Escreveu as leis, antes orais e controladas pelos patrícios", "Libertou os escravizados", "Fundou o cristianismo"], 1, "Base do direito romano."),
  f("Pólis", "Cidade-Estado grega, independente, com governo e leis próprias (Atenas, Esparta)."),
  f("Fases de Roma", "Monarquia → República → Império."),
  c(["Grécia: filosofia, teatro e democracia.", "Roma: direito, engenharia e império.", "Ambas usavam trabalho escravizado.", "O latim deu origem ao português."], "Nossa ideia de cidadania vem de Atenas; nosso direito, de Roma."),
]);

pack(H, "medieval-moderna", 1, 3, "Feudalismo e Igreja medieval", [
  q("A base econômica do feudalismo era:", ["O comércio marítimo", "A terra e a agricultura", "A indústria", "Os bancos"], 1, "Economia rural e de subsistência."),
  q("A relação entre suserano e vassalo envolvia:", ["Salário em dinheiro", "Doação de terras em troca de fidelidade e apoio militar", "Compra de escravizados", "Impostos ao rei apenas"], 1, "Laços de suserania e vassalagem."),
  q("A corveia era:", ["Um imposto em dinheiro", "Trabalho gratuito do servo nas terras do senhor", "Uma festa religiosa", "Um tipo de castelo"], 1, "Obrigação servil."),
  q("As Cruzadas foram:", ["Viagens comerciais à América", "Expedições militares cristãs ao Oriente", "Revoltas camponesas", "Concílios"], 1, "Contribuíram para reabrir o comércio no Mediterrâneo."),
  q("A Peste Negra (século XIV) provocou:", ["Aumento da população", "Morte de cerca de um terço dos europeus", "O fim da Igreja", "A descoberta da América"], 1, "Crise que enfraqueceu o feudalismo."),
  q("Na Idade Média, a Igreja Católica:", ["Não tinha influência", "Era a instituição mais poderosa, inclusive economicamente", "Era perseguida", "Defendia a separação de Estado e religião"], 1, "Detinha terras, cultura e poder político."),
  f("Sociedade estamental", "Clero (rezava), nobreza (guerreava) e servos (trabalhavam); quase sem mobilidade social."),
  f("Renascimento comercial", "Rotas reabertas, feiras e cidades (burgos) fizeram surgir a burguesia."),
  c(["Feudo: grande propriedade rural.", "Servo preso à terra, não era escravizado.", "Poder descentralizado nos senhores.", "Igreja unificava a cultura."], "Burgos + burguesia = semente do capitalismo."),
]);

pack(H, "medieval-moderna", 2, 2, "Revolução Francesa e Industrial", [
  q("O lema da Revolução Francesa era:", ["Ordem e progresso", "Liberdade, igualdade e fraternidade", "Deus, pátria e família", "Paz, terra e pão"], 1, "Inspirado no Iluminismo."),
  q("A queda da Bastilha (1789) simbolizou:", ["A vitória de Napoleão", "O fim do absolutismo e o início da Revolução", "A restauração do rei", "A independência dos EUA"], 1, "14 de julho é a data nacional francesa."),
  q("A Revolução Industrial começou na:", ["França", "Inglaterra", "Alemanha", "Itália"], 1, "Século XVIII, com carvão, ferro e máquinas a vapor."),
  q("Os ludistas eram trabalhadores que:", ["Defendiam as máquinas", "Quebravam máquinas, vistas como causa do desemprego", "Eram donos de fábricas", "Viviam no campo"], 1, "Reação às condições da industrialização."),
  q("A Declaração dos Direitos do Homem e do Cidadão afirmava que:", ["O rei é escolhido por Deus", "Os homens nascem livres e iguais em direitos", "Só o clero tem direitos", "A escravidão é legítima"], 1, "Base dos direitos civis modernos."),
  q("Uma consequência da Revolução Industrial foi:", ["Êxodo rural e crescimento das cidades", "Fim do trabalho infantil imediato", "Redução da poluição", "Fim do capitalismo"], 0, "Fábricas atraíram camponeses para as cidades."),
  f("Iluminismo", "Movimento do século XVIII que defendia a razão, a liberdade e a crítica ao absolutismo (Locke, Voltaire, Rousseau, Montesquieu)."),
  f("Três poderes (Montesquieu)", "Executivo, Legislativo e Judiciário, independentes e equilibrados."),
  c(["Revolução Francesa: fim dos privilégios.", "Revolução Industrial: máquina e fábrica.", "Surge o proletariado.", "Surgem sindicatos e ideias socialistas."], "Duas revoluções que inventaram o mundo contemporâneo."),
]);

pack(H, "brasil-colonia", 2, 1, "Ciclo do açúcar e do ouro", [
  q("A principal mão de obra nos engenhos de açúcar era:", ["Assalariada europeia", "Africana escravizada", "Imigrante japonesa", "Cooperativa"], 1, "Tráfico atlântico de africanos."),
  q("O ciclo do ouro (século XVIII) deslocou o centro econômico para:", ["Nordeste", "Minas Gerais", "Amazônia", "Rio Grande do Sul"], 1, "E a capital passou de Salvador para o Rio (1763)."),
  q("O quinto era:", ["Uma festa colonial", "Imposto de 20% sobre o ouro extraído", "Um tipo de engenho", "Uma moeda"], 1, "Cobrado nas casas de fundição."),
  q("Os quilombos, como Palmares, eram:", ["Fazendas de gado", "Comunidades de resistência de pessoas escravizadas que fugiram", "Igrejas", "Portos"], 1, "Palmares, liderado por Zumbi, resistiu por quase um século."),
  q("A Inconfidência Mineira (1789) foi motivada principalmente:", ["Pela derrama e pelos altos impostos", "Pela abolição", "Pela vinda da família real", "Pelo café"], 0, "Tiradentes foi o único executado."),
  q("As capitanias hereditárias foram:", ["Faixas de terra doadas a donatários para colonizar", "Igrejas", "Tribos indígenas", "Bancos"], 0, "Modelo que, em geral, fracassou."),
  f("Pacto colonial", "A colônia só podia comerciar com a metrópole, vendendo matéria-prima barata e comprando manufaturados caros."),
  f("Plantation", "Grande propriedade, monocultura, mão de obra escravizada e produção para exportação."),
  c(["Pau-brasil: exploração inicial.", "Açúcar: Nordeste, séc. XVI–XVII.", "Ouro: Minas, séc. XVIII.", "Café: Sudeste, séc. XIX."], "A economia colonial foi organizada para enriquecer Portugal."),
]);

pack(H, "brasil-colonia", 2, 3, "Independência e Segundo Reinado", [
  q("A vinda da família real portuguesa (1808) teve como causa:", ["A descoberta do ouro", "A invasão de Portugal pelas tropas de Napoleão", "A abolição", "Um tratado com a Espanha"], 1, "Fugiram com apoio inglês."),
  q("A abertura dos portos (1808) beneficiou principalmente:", ["A Espanha", "A Inglaterra", "A França", "O Japão"], 1, "Fim do monopólio comercial português."),
  q("A Lei Áurea (1888) foi assinada pela:", ["Imperatriz Leopoldina", "Princesa Isabel", "Rainha Maria I", "Dona Carlota"], 1, "Aboliu a escravidão sem indenização nem integração dos libertos."),
  q("A Lei Eusébio de Queirós (1850):", ["Libertou os idosos", "Proibiu o tráfico de escravizados", "Libertou os nascidos de mães escravizadas", "Criou a República"], 1, "Pressão inglesa contra o tráfico."),
  q("O principal produto da economia no Segundo Reinado foi:", ["Açúcar", "Café", "Borracha", "Ouro"], 1, "Vale do Paraíba e depois Oeste Paulista."),
  q("A Guerra do Paraguai (1864–1870) opôs o Paraguai à:", ["Tríplice Aliança: Brasil, Argentina e Uruguai", "Inglaterra", "Bolívia e Chile", "Portugal"], 0, "Maior conflito armado da América do Sul."),
  f("Lei do Ventre Livre (1871)", "Filhos de mulheres escravizadas nascidos a partir dela seriam livres (na prática, com muitas restrições)."),
  f("Lei de Terras (1850)", "Terra só podia ser obtida por compra: dificultou o acesso de libertos e imigrantes pobres."),
  c(["1808: família real chega.", "1822: Independência.", "1888: abolição.", "1889: República."], "A abolição veio aos poucos e sem reparação."),
]);

pack(H, "brasil-republica", 3, 1, "Era Vargas", [
  q("Getúlio Vargas chegou ao poder em 1930 por meio de:", ["Eleição direta", "Uma revolução que derrubou a República Velha", "Herança", "Golpe militar de 1964"], 1, "Fim da política do café com leite."),
  q("A CLT (Consolidação das Leis do Trabalho) foi criada em:", ["1888", "1943", "1964", "1988"], 1, "Garantiu salário mínimo, férias e carteira de trabalho."),
  q("O Estado Novo (1937–1945) foi um período:", ["Democrático", "Ditatorial", "Monárquico", "Parlamentarista"], 1, "Censura (DIP), fechamento do Congresso, centralização."),
  q("A Companhia Siderúrgica Nacional e a Petrobras simbolizam:", ["Liberalismo", "Nacionalismo e industrialização estatal", "Privatização", "Agrarismo"], 1, "\"O petróleo é nosso\"."),
  q("O voto feminino no Brasil foi conquistado em:", ["1889", "1932", "1988", "1960"], 1, "Código Eleitoral de 1932."),
  q("Vargas encerrou sua trajetória política em 1954 com:", ["Um golpe", "Seu suicídio", "A renúncia para viajar", "Uma eleição perdida"], 1, "\"Saio da vida para entrar na história.\""),
  f("Populismo", "Liderança carismática que se apresenta como protetora do povo, combinando concessões sociais e controle."),
  f("Política do café com leite", "Alternância de presidentes de SP e MG na República Velha."),
  c(["1930: Revolução.", "1934: Constituição.", "1937: golpe do Estado Novo.", "1945: deposição; 1951: volta eleito."], "Vargas: direitos trabalhistas + autoritarismo."),
]);

pack(H, "brasil-republica", 3, 3, "Ditadura militar", [
  q("O golpe militar no Brasil ocorreu em:", ["1945", "1964", "1985", "1930"], 1, "Derrubou o presidente João Goulart."),
  q("O AI-5 (1968):", ["Restabeleceu a democracia", "Endureceu o regime: fechou o Congresso e suspendeu o habeas corpus", "Criou o real", "Anistiou presos políticos"], 1, "Ato mais repressivo da ditadura."),
  q("O \"milagre econômico\" (1968–1973) foi marcado por:", ["Crescimento alto com concentração de renda e dívida externa", "Fim da desigualdade", "Hiperinflação imediata", "Recessão"], 0, "\"Fazer o bolo crescer para depois dividir.\""),
  q("O movimento Diretas Já (1984) reivindicava:", ["Eleições diretas para presidente", "Volta da monarquia", "Fim do voto feminino", "Intervenção militar"], 0, "A emenda foi derrotada, mas o movimento marcou a redemocratização."),
  q("A Lei da Anistia (1979):", ["Puniu os torturadores", "Permitiu a volta de exilados e perdoou crimes políticos dos dois lados", "Criou o AI-5", "Fechou partidos"], 1, "Até hoje debatida por incluir agentes do Estado."),
  q("O bipartidarismo da ditadura tinha:", ["PT e PSDB", "ARENA e MDB", "UDN e PSD", "PCB e PTB"], 1, "ARENA (governo) e MDB (oposição consentida)."),
  f("Censura na ditadura", "Jornais, músicas, peças e filmes passavam por censura prévia; artistas usavam metáforas."),
  f("Fim da ditadura", "1985: Tancredo Neves eleito indiretamente; José Sarney assume."),
  c(["1964: golpe.", "1968: AI-5, anos de chumbo.", "1979: anistia e abertura.", "1985: fim do regime; 1988: nova Constituição."], "Música de protesto driblava a censura com duplo sentido."),
]);

pack(H, "brasil-republica", 3, 4, "Nova República", [
  q("A Constituição de 1988 é chamada de \"Constituição Cidadã\" porque:", ["Criou a monarquia", "Ampliou direitos sociais e civis", "Proibiu o voto", "Foi escrita por militares"], 1, "Criou o SUS, garantiu voto aos analfabetos e muito mais."),
  q("O Plano Real (1994) teve como principal objetivo:", ["Acabar com a hiperinflação", "Criar a Petrobras", "Abolir a escravidão", "Mudar a capital"], 0, "Estabilizou a moeda."),
  q("O primeiro presidente eleito diretamente após a ditadura foi:", ["Sarney", "Collor", "Itamar", "FHC"], 1, "Eleito em 1989 e afastado por impeachment em 1992."),
  q("O SUS garante:", ["Saúde só para quem paga", "Acesso universal e gratuito à saúde", "Apenas vacinas", "Planos privados"], 1, "Princípios: universalidade, integralidade e equidade."),
  q("O voto no Brasil é obrigatório para:", ["Maiores de 16", "Alfabetizados de 18 a 70 anos", "Todos acima de 18", "Só homens"], 1, "Facultativo para 16–17 anos, maiores de 70 e analfabetos."),
  q("O Estatuto da Criança e do Adolescente (ECA) é de:", ["1964", "1990", "2010", "1940"], 1, "Garante proteção integral a crianças e adolescentes."),
  f("Cláusulas pétreas", "Partes da Constituição que não podem ser abolidas por emenda: federação, voto direto/secreto/universal/periódico, separação dos poderes e direitos individuais."),
  f("Impeachment", "Processo de afastamento do presidente por crime de responsabilidade, julgado pelo Congresso."),
  c(["1985: fim da ditadura.", "1988: Constituição Cidadã.", "1994: Plano Real.", "Democracia exige participação contínua."], "A Constituição de 1988 é a mais longeva da República."),
]);

pack(H, "guerras", 2, 4, "Primeira Guerra Mundial", [
  q("O estopim da Primeira Guerra foi:", ["A invasão da Polônia", "O assassinato do arquiduque Francisco Ferdinando", "O ataque a Pearl Harbor", "A Revolução Russa"], 1, "Em Sarajevo, 1914."),
  q("A Tríplice Entente era formada por:", ["Alemanha, Áustria-Hungria e Itália", "Inglaterra, França e Rússia", "EUA, Japão e China", "Brasil, Argentina e Chile"], 1, "Contra a Tríplice Aliança."),
  q("A Primeira Guerra ficou marcada pela guerra de:", ["Trincheiras", "Guerrilha urbana", "Drones", "Bombas atômicas"], 0, "Frentes paralisadas por anos."),
  q("O Tratado de Versalhes (1919):", ["Puniu duramente a Alemanha", "Dividiu a Coreia", "Criou a ONU", "Encerrou a Segunda Guerra"], 0, "Reparações e perdas territoriais alimentaram o revanchismo alemão."),
  q("Os EUA entraram na guerra em:", ["1914", "1917", "1939", "1941"], 1, "Contribuíram para a vitória da Entente."),
  q("Uma das causas da Primeira Guerra foi:", ["O imperialismo e a disputa por colônias", "A Guerra Fria", "O nazismo", "A globalização digital"], 0, "Além de nacionalismos e corrida armamentista."),
  f("Paz armada", "Período antes de 1914 em que as potências se armavam e formavam alianças."),
  f("Liga das Nações", "Organização criada após a guerra para manter a paz; fracassou e foi substituída pela ONU."),
  c(["Imperialismo + nacionalismo + alianças.", "1914: atentado em Sarajevo.", "Trincheiras, gás e metralhadoras.", "1919: Versalhes humilha a Alemanha."], "Versalhes plantou as sementes da Segunda Guerra."),
]);

pack(H, "guerras", 3, 2, "Segunda Guerra Mundial", [
  q("A Segunda Guerra começou com:", ["O ataque a Pearl Harbor", "A invasão da Polônia pela Alemanha (1939)", "A queda do Muro de Berlim", "A Revolução Francesa"], 1, "Inglaterra e França declaram guerra à Alemanha."),
  q("O Holocausto foi:", ["Uma batalha naval", "O genocídio de cerca de 6 milhões de judeus pelo regime nazista", "Um tratado de paz", "Uma revolução"], 1, "Também perseguiu ciganos, homossexuais, pessoas com deficiência e opositores."),
  q("O Brasil participou da Segunda Guerra enviando a:", ["Marinha à Ásia", "FEB à Itália", "Tropas à Rússia", "Aviões ao Japão"], 1, "Força Expedicionária Brasileira, ao lado dos Aliados."),
  q("As bombas atômicas foram lançadas em 1945 sobre:", ["Tóquio e Osaka", "Hiroshima e Nagasaki", "Berlim e Roma", "Pearl Harbor"], 1, "Pelos EUA, levando à rendição do Japão."),
  q("O Eixo era formado por:", ["EUA, URSS e Inglaterra", "Alemanha, Itália e Japão", "França e Brasil", "China e Índia"], 1, "Contra os Aliados."),
  q("Após a guerra foi criada, em 1945, a:", ["Liga das Nações", "ONU", "OTAN", "União Europeia"], 1, "Organização das Nações Unidas."),
  f("Totalitarismo", "Regime em que o Estado controla todos os aspectos da vida: nazismo, fascismo e stalinismo."),
  f("Crise de 1929", "Quebra da Bolsa de Nova York; desemprego em massa ajudou a ascensão de regimes autoritários."),
  c(["1929: crise econômica mundial.", "Ascensão de Hitler e Mussolini.", "1939–1945: guerra global.", "Pós-guerra: ONU e Guerra Fria."], "A Declaração Universal dos Direitos Humanos (1948) nasce desse trauma."),
]);

pack(H, "mundo-atual", 3, 3, "Guerra Fria", [
  q("A Guerra Fria foi a disputa entre:", ["Alemanha e França", "EUA (capitalismo) e URSS (socialismo)", "China e Japão", "Brasil e Argentina"], 1, "Disputa ideológica, militar e tecnológica sem confronto direto entre as duas."),
  q("O Muro de Berlim caiu em:", ["1961", "1989", "1991", "1945"], 1, "Símbolo do fim da Guerra Fria."),
  q("A crise dos mísseis (1962) envolveu:", ["Coreia", "Cuba", "Vietnã", "Afeganistão"], 1, "Mísseis soviéticos em Cuba: o mundo perto da guerra nuclear."),
  q("A corrida espacial teve como marco a chegada do homem à Lua em:", ["1957", "1961", "1969", "1975"], 2, "Apollo 11, dos EUA. A URSS lançou o Sputnik (1957) e Gagarin (1961)."),
  q("O Plano Marshall foi:", ["Ajuda econômica dos EUA à Europa Ocidental", "Um plano soviético", "Uma guerra", "Uma aliança militar asiática"], 0, "Reconstruir a Europa e conter o socialismo."),
  q("A URSS se dissolveu em:", ["1985", "1989", "1991", "2000"], 2, "Fim oficial da Guerra Fria."),
  f("OTAN x Pacto de Varsóvia", "Alianças militares do bloco capitalista (OTAN, 1949) e socialista (Varsóvia, 1955)."),
  f("Conflitos indiretos", "Guerra da Coreia, Guerra do Vietnã e Afeganistão: as superpotências apoiavam lados opostos."),
  c(["Mundo bipolar: EUA x URSS.", "Ameaça nuclear permanente.", "Disputa por influência em todos os continentes.", "Fim em 1991 com o colapso soviético."], "\"Fria\" porque as duas nunca se enfrentaram diretamente."),
]);

pack(H, "mundo-atual", 3, 4, "Mundo pós-1991", [
  q("Após o fim da Guerra Fria, a ordem mundial passou a ser vista como:", ["Bipolar", "Multipolar, com hegemonia dos EUA no início", "Feudal", "Colonial"], 1, "Novos polos: União Europeia, China, Japão…"),
  q("Os atentados de 11 de setembro de 2001 levaram os EUA a:", ["Invadir o Afeganistão", "Sair da ONU", "Criar o euro", "Dissolver a OTAN"], 0, "Início da \"guerra ao terror\"."),
  q("A Primavera Árabe (2010–2012) foi:", ["Um festival", "Uma onda de protestos contra governos autoritários no Oriente Médio e Norte da África", "Uma crise financeira", "Um acordo climático"], 1, "Começou na Tunísia."),
  q("A crise financeira de 2008 começou:", ["Na China", "No mercado imobiliário dos EUA", "No Brasil", "Na Rússia"], 1, "Crédito de alto risco (subprime)."),
  q("A sigla BRICS vem das iniciais de:", ["Brasil, Rússia, Índia, China e África do Sul (South Africa)", "Bolívia, Rússia, Irã, Chile e Suécia", "Bélgica, Romênia, Itália, Croácia e Sérvia", "Brasil, Reino Unido, Itália, Canadá e Suíça"], 0, "Economias emergentes; a África do Sul entrou em 2011 e o grupo se ampliou depois."),
  q("O Brexit foi:", ["A saída do Reino Unido da União Europeia", "Uma guerra", "Um tratado nuclear", "A criação do euro"], 0, "Decidido em plebiscito em 2016."),
  f("Globalização", "Integração econômica, cultural e tecnológica mundial, intensificada após 1991 e pela internet."),
  f("Apartheid", "Regime de segregação racial na África do Sul, encerrado em 1994 com a eleição de Nelson Mandela."),
  c(["Fim da URSS: EUA como superpotência.", "Ascensão da China.", "Terrorismo e novos conflitos.", "Crises econômicas globais."], "Hoje: disputa EUA x China pela liderança tecnológica."),
]);

// ── Geografia ────────────────────────────────────────────────────────────────
pack(G, "cartografia", 1, 1, "Escalas, coordenadas e fusos", [
  q("Numa escala 1:50.000, 2 cm no mapa correspondem a:", ["100 m", "1 km", "10 km", "50 km"], 1, "2 × 50.000 = 100.000 cm = 1 km."),
  q("Uma escala maior (ex.: 1:1.000) mostra:", ["Área maior com menos detalhes", "Área menor com mais detalhes", "Nada", "O mundo inteiro"], 1, "Escala grande = denominador pequeno = mais detalhe."),
  q("A latitude é medida a partir:", ["Do Meridiano de Greenwich", "Da Linha do Equador", "Do Trópico de Câncer", "Do Polo Sul"], 1, "Vai de 0° a 90° N ou S."),
  q("A longitude é medida a partir:", ["Da Linha do Equador", "Do Meridiano de Greenwich", "Do Polo Norte", "De Brasília"], 1, "Vai de 0° a 180° L ou O."),
  q("Cada fuso horário corresponde a:", ["10°", "15°", "24°", "30°"], 1, "360° ÷ 24 h = 15° por hora."),
  q("Indo para o leste, as horas:", ["Atrasam", "Adiantam", "Não mudam", "Viram o dia anterior"], 1, "O Sol nasce primeiro a leste."),
  f("Projeção de Mercator", "Mantém os ângulos (boa para navegação) mas distorce áreas perto dos polos (Groenlândia parece enorme)."),
  f("Rosa dos ventos", "Pontos cardeais (N, S, L, O), colaterais (NE, SE, SO, NO) e subcolaterais."),
  c(["Escala: relação entre mapa e realidade.", "Latitude: norte-sul (paralelos).", "Longitude: leste-oeste (meridianos).", "Fuso: 15° = 1 hora."], "Leste adianta, oeste atrasa."),
]);

pack(G, "cartografia", 1, 4, "Biomas brasileiros", [
  q("O bioma brasileiro mais desmatado proporcionalmente é a:", ["Amazônia", "Mata Atlântica", "Caatinga", "Pantanal"], 1, "Resta pouco da cobertura original."),
  q("O Cerrado é chamado de \"berço das águas\" porque:", ["Chove o ano todo", "Abriga nascentes de grandes bacias hidrográficas", "Tem muitos lagos", "É litorâneo"], 1, "Nascentes que abastecem bacias como a do São Francisco e do Paraná."),
  q("A Caatinga se caracteriza por:", ["Floresta densa e úmida", "Clima semiárido e vegetação adaptada à seca", "Campos alagados", "Araucárias"], 1, "Exclusivamente brasileira."),
  q("O Pantanal é:", ["Uma floresta de pinheiros", "A maior planície alagável do mundo", "Um deserto", "Uma área de geleiras"], 1, "Cheias periódicas definem a paisagem."),
  q("Os Pampas ficam principalmente no estado:", ["Bahia", "Rio Grande do Sul", "Amazonas", "Goiás"], 1, "Campos com vegetação rasteira."),
  q("A principal ameaça atual ao Cerrado é:", ["Expansão agropecuária", "Vulcões", "Gelo", "Tsunamis"], 0, "Soja e pecuária substituem a vegetação nativa."),
  f("Rios voadores", "Umidade da Amazônia transportada pelos ventos, que leva chuva ao Centro-Sul do Brasil."),
  f("Mata de Araucárias", "Floresta de pinheiro-do-paraná no Sul, muito devastada pela exploração de madeira."),
  c(["Amazônia: floresta equatorial, maior biodiversidade.", "Cerrado: savana, berço das águas.", "Caatinga: semiárido.", "Mata Atlântica: litoral, muito devastada."], "Desmatar a Amazônia afeta a chuva no Sudeste."),
]);

pack(G, "populacao", 2, 1, "Transição demográfica", [
  q("A transição demográfica descreve a passagem de:", ["Natalidade e mortalidade altas para baixas", "Cidade para campo", "Indústria para agricultura", "Monarquia para república"], 0, "Primeiro cai a mortalidade, depois a natalidade."),
  q("O envelhecimento da população brasileira traz como desafio:", ["Excesso de escolas", "Pressão sobre a previdência e a saúde", "Falta de idosos", "Aumento da natalidade"], 1, "Menos jovens contribuindo, mais aposentados."),
  q("Uma pirâmide etária de base larga indica:", ["População envelhecida", "Alta natalidade (população jovem)", "Baixa natalidade", "Muitos idosos"], 1, "Muitas crianças."),
  q("Crescimento vegetativo é:", ["Imigrantes menos emigrantes", "Nascimentos menos óbitos", "Crescimento das plantas", "Área urbana"], 1, "Não inclui migração."),
  q("A taxa de fecundidade do Brasil hoje está:", ["Acima de 5 filhos por mulher", "Abaixo de 2,1 filhos por mulher", "Exatamente 4", "Em 10"], 1, "Abaixo do nível de reposição."),
  q("O \"bônus demográfico\" acontece quando:", ["Há muitos idosos", "A proporção de pessoas em idade ativa é alta", "Não há crianças", "A população diminui"], 1, "Oportunidade de crescimento econômico."),
  f("Densidade demográfica", "Habitantes ÷ área (hab/km²). Populoso ≠ povoado."),
  f("Expectativa de vida", "Média de anos que se espera que uma pessoa viva; aumentou muito no Brasil desde 1950."),
  c(["Fase 1: tudo alto.", "Fase 2: mortalidade cai (saneamento, vacinas).", "Fase 3: natalidade cai (urbanização, mulher no mercado).", "Fase 4: tudo baixo, população envelhece."], "O Brasil está entre as fases 3 e 4."),
]);

pack(G, "populacao", 3, 3, "Regiões e migrações no Brasil", [
  q("A região mais populosa do Brasil é a:", ["Norte", "Sudeste", "Centro-Oeste", "Sul"], 1, "São Paulo, Minas e Rio concentram muita gente."),
  q("A região de maior área é a:", ["Sudeste", "Norte", "Nordeste", "Sul"], 1, "Cerca de 45% do território."),
  q("Nas décadas de 1950–1970, o principal fluxo migratório interno foi:", ["Sul → Norte", "Nordeste → Sudeste", "Sudeste → Nordeste", "Centro-Oeste → Sul"], 1, "Busca de emprego na industrialização."),
  q("A construção de Brasília (1960) estimulou migrações para o:", ["Sul", "Centro-Oeste", "Nordeste", "Litoral"], 1, "Interiorização do país."),
  q("O êxodo rural é:", ["Migração da cidade para o campo", "Migração do campo para a cidade", "Emigração para o exterior", "Turismo rural"], 1, "Causado por mecanização e concentração de terras."),
  q("A divisão do Brasil em 5 regiões foi feita pelo:", ["IBGE", "Exército", "Banco Central", "IBAMA"], 0, "Instituto Brasileiro de Geografia e Estatística."),
  f("Migração pendular", "Deslocamento diário de casa para o trabalho em outra cidade (comum em regiões metropolitanas)."),
  f("Regiões geoeconômicas", "Amazônia, Nordeste e Centro-Sul: divisão por características econômicas, não por limites estaduais."),
  c(["Norte: maior área, menor densidade.", "Nordeste: maior número de estados (9).", "Sudeste: mais populoso e industrializado.", "Sul e Centro-Oeste: agronegócio forte."], "Migração segue o emprego."),
]);

pack(G, "economia-geo", 2, 4, "Matriz energética", [
  q("A matriz elétrica brasileira é baseada principalmente em:", ["Carvão", "Hidrelétricas", "Usinas nucleares", "Petróleo"], 1, "Por isso é considerada relativamente limpa."),
  q("Uma desvantagem das hidrelétricas é:", ["Emitem muito CO₂", "Alagam grandes áreas e afetam povos e ecossistemas", "São caras de operar", "Não geram energia"], 1, "Impactos socioambientais na construção."),
  q("A energia eólica cresce muito no:", ["Nordeste", "Norte", "Centro-Oeste", "Sudeste"], 0, "Ventos fortes e constantes no litoral nordestino."),
  q("Fonte de energia não renovável:", ["Solar", "Eólica", "Petróleo", "Biomassa"], 2, "Fóssil: estoque limitado."),
  q("O pré-sal é:", ["Uma mina de sal", "Reserva de petróleo em águas muito profundas", "Uma usina solar", "Um rio subterrâneo"], 1, "Abaixo de uma camada de sal no litoral do Sudeste."),
  q("O Brasil se destaca mundialmente na produção de biocombustíveis com:", ["Etanol de cana", "Carvão vegetal", "Urânio", "Xisto"], 0, "Carros flex desde 2003."),
  f("Matriz energética x matriz elétrica", "Energética: todas as fontes (inclui transporte e indústria). Elétrica: só geração de eletricidade."),
  f("Energia limpa x renovável", "Renovável: não se esgota. Limpa: emite pouco poluente. Hidrelétrica é renovável, mas tem impactos."),
  c(["Hidrelétricas dominam a eletricidade.", "Petróleo domina transporte.", "Eólica e solar crescem rápido.", "Seca nos reservatórios encarece a conta."], "Bandeira vermelha na conta = térmicas ligadas."),
]);

pack(G, "economia-geo", 2, 3, "Agronegócio e questão agrária", [
  q("Estrutura fundiária concentrada significa que:", ["Muita gente tem pouca terra e poucos têm muita", "Todos têm a mesma área", "Não há terras", "O Estado é dono de tudo"], 0, "Herança das sesmarias e do latifúndio."),
  q("A soja brasileira é produzida principalmente para:", ["Consumo local", "Exportação (commodity)", "Fabricar aço", "Uso medicinal"], 1, "China é o maior comprador."),
  q("A agricultura familiar no Brasil é responsável por:", ["Nada da comida", "Grande parte dos alimentos da mesa (feijão, mandioca, leite)", "Apenas exportação", "Só soja"], 1, "Ocupa menos área, mas produz muito do que se consome."),
  q("A Revolução Verde trouxe:", ["Fim dos agrotóxicos", "Mecanização, sementes selecionadas e insumos químicos", "Reforma agrária", "Agricultura orgânica"], 1, "Aumentou a produção, com impactos ambientais e sociais."),
  q("O MST luta principalmente por:", ["Industrialização", "Reforma agrária", "Privatizações", "Fim da agricultura"], 1, "Movimento dos Trabalhadores Rurais Sem Terra."),
  q("O avanço da fronteira agrícola ocorre principalmente sobre:", ["Cerrado e Amazônia", "Pampas", "Litoral", "Mata de Araucárias"], 0, "Arco do desmatamento."),
  f("Commodity", "Produto padronizado, com preço definido no mercado internacional (soja, minério, café)."),
  f("Agroindústria", "Integração entre agricultura e indústria: processamento de alimentos, máquinas, insumos."),
  c(["Agronegócio: exportação e tecnologia.", "Agricultura familiar: comida no prato.", "Terra concentrada gera conflitos.", "Expansão agrícola pressiona biomas."], "O Brasil é um dos maiores exportadores de alimentos do mundo."),
]);

pack(G, "geopolitica", 3, 1, "Blocos econômicos", [
  q("O Mercosul foi criado em 1991 por:", ["Brasil, Argentina, Uruguai e Paraguai", "Brasil e EUA", "Chile e Peru", "México e Canadá"], 0, "Tratado de Assunção."),
  q("A União Europeia é o bloco mais integrado porque tem:", ["Só zona de livre comércio", "Mercado comum e moeda única (euro) em vários países", "Nenhuma regra", "Apenas acordos militares"], 1, "União econômica e monetária."),
  q("Zona de livre comércio significa:", ["Redução ou fim de tarifas entre os membros", "Moeda única", "Livre circulação de pessoas obrigatória", "Exército comum"], 0, "Primeiro nível de integração."),
  q("O USMCA (antigo NAFTA) reúne:", ["EUA, México e Canadá", "Brasil e Argentina", "China e Japão", "Rússia e Índia"], 0, "América do Norte."),
  q("A APEC reúne países:", ["Do Atlântico", "Da Ásia e do Pacífico", "Da África", "Da Europa"], 1, "Cooperação Econômica Ásia-Pacífico."),
  q("A Tarifa Externa Comum (TEC) caracteriza uma:", ["Zona de livre comércio", "União aduaneira", "União política", "Federação"], 1, "Membros cobram a mesma tarifa de quem é de fora."),
  f("Níveis de integração", "Zona de livre comércio → união aduaneira → mercado comum → união econômica e monetária."),
  f("Protecionismo", "Barreiras (tarifas, cotas) para proteger a produção nacional da concorrência estrangeira."),
  c(["Blocos aumentam o comércio entre membros.", "Mercosul: união aduaneira imperfeita.", "UE: moeda única e livre circulação.", "Globalização e regionalização caminham juntas."], "O Brasil comercia mais com a China que com o Mercosul."),
]);

pack(G, "geopolitica", 3, 2, "Conflitos e refugiados", [
  q("O conflito entre Israel e palestinos envolve principalmente disputa por:", ["Petróleo no Ártico", "Território e reconhecimento de Estado", "Água do Nilo", "Ouro"], 1, "Questão territorial e nacional desde 1948."),
  q("Refugiado é a pessoa que:", ["Viaja a turismo", "Foi forçada a deixar seu país por perseguição, guerra ou violência", "Muda de cidade por emprego", "Estuda fora"], 1, "Tem proteção prevista no direito internacional."),
  q("A Guerra da Síria (desde 2011) provocou:", ["Pouca migração", "Uma das maiores crises de refugiados do século", "A união da Europa", "O fim do Oriente Médio"], 1, "Milhões de deslocados."),
  q("A invasão da Ucrânia pela Rússia (2022) gerou impacto global em:", ["Preços de energia e alimentos", "Vacinas", "Turismo espacial", "Nada"], 0, "Gás, trigo e fertilizantes."),
  q("O Conselho de Segurança da ONU tem membros permanentes com direito a veto:", ["Brasil e Índia", "EUA, Rússia, China, Reino Unido e França", "Alemanha e Japão", "Todos os países"], 1, "Os vencedores da Segunda Guerra."),
  q("Xenofobia é:", ["Medo de altura", "Aversão ou hostilidade a estrangeiros", "Amor por viagens", "Um tipo de imigração"], 1, "Cresce em crises econômicas."),
  f("Geopolítica", "Estudo das relações de poder entre Estados ligadas ao território, recursos e posição estratégica."),
  f("Soft power", "Influência por cultura, diplomacia e economia, sem uso da força."),
  c(["Conflitos têm raízes históricas.", "Território e recursos estão no centro.", "Guerras geram refugiados.", "A ONU media, mas o veto trava decisões."], "Para entender um conflito: mapa, história e recursos."),
]);
