import { GEOGRAFIA as G, HISTORIA as H } from "./natureza-humanas";
import { c, f, pack, q } from "./pack";

// ── História ─────────────────────────────────────────────────────────────────
pack(H, "antiguidade", 1, 1, "Egito e Mesopotâmia", [
  q("A civilização egípcia se desenvolveu às margens do rio:", ["Tigre", "Nilo", "Eufrates", "Ganges"], 1, "O Egito é \"um presente do Nilo\": as cheias anuais deixavam um lodo fértil nas margens, base da agricultura. Tigre e Eufrates são da Mesopotâmia."),
  q("Os fenícios ficaram conhecidos na Antiguidade por:", ["Alfabeto e comércio marítimo", "Pirâmides e mumificação", "Democracia direta", "Escrita cuneiforme"], 1, "Os fenícios, grandes navegadores e comerciantes do Mediterrâneo, criaram um alfabeto fonético que deu origem ao grego e ao latino."),
  q("Os hebreus se destacaram na Antiguidade por:", ["Serem monoteístas", "Erguerem pirâmides", "Criarem a democracia", "Inventarem a moeda"], 1, "Os hebreus acreditavam em um só Deus (monoteísmo), numa época de povos politeístas. Essa crença influenciou o judaísmo, o cristianismo e o islamismo."),
  q("A mumificação no Egito Antigo estava ligada à crença:", ["Na vida após a morte", "Na reencarnação em animais", "No fim próximo do mundo", "No poder dos mercadores"], 1, "Os egípcios acreditavam que a alma precisava do corpo preservado para a vida após a morte. Por isso mumificavam os mortos e enchiam os túmulos de objetos."),
  q("A Mesopotâmia ficava entre os rios:", ["Nilo e Jordão", "Tigre e Eufrates", "Amazonas e Negro", "Indo e Ganges"], 1, "\"Mesopotâmia\" significa \"terra entre rios\": Tigre e Eufrates, no atual Iraque. Lá surgiram cidades como Ur e Babilônia."),
  q("As pirâmides de Gizé eram principalmente:", ["Templos para o povo", "Túmulos de faraós", "Celeiros", "Fortalezas"], 1, "Eram túmulos monumentais de faraós (Quéops, Quéfren e Miquerinos), ligados à crença na vida após a morte, construídos por trabalhadores organizados pelo Estado."),
  f("Modo de produção asiático", "Terra pertencia ao Estado; camponeses pagavam tributos e prestavam trabalho compulsório."),
  f("Hieróglifos", "Escrita sagrada egípcia, decifrada graças à Pedra de Roseta."),
  c(["Primeiras civilizações nasceram perto de rios.", "Agricultura gerou excedente.", "Excedente gerou cidades e Estado.", "Escrita surgiu para registrar tributos."], "Rio fértil + irrigação = civilização."),
]);

pack(H, "antiguidade", 1, 2, "Democracia grega e Império Romano", [
  q("Na Grécia Antiga, a pólis era:", ["Uma cidade-Estado independente", "Um templo dedicado a Zeus", "Um exército de mercenários", "Uma assembleia de escravizados"], 1, "Cada pólis (Atenas, Esparta, Corinto…) tinha governo, leis e exército próprios. A Grécia não era um país unificado."),
  q("O ostracismo, em Atenas, era:", ["Exílio de 10 anos para quem ameaçasse a democracia", "Um imposto sobre o comércio marítimo", "O sorteio dos generais da cidade", "Uma festa em honra à deusa Atena"], 1, "Os cidadãos escreviam em cacos de cerâmica (óstracos) o nome de quem consideravam perigoso; o mais votado era exilado por 10 anos."),
  q("A política do \"pão e circo\" em Roma servia para:", ["Educar a plebe nas leis da República", "Conter a insatisfação da plebe", "Recrutar soldados para as legiões", "Arrecadar impostos nas províncias"], 1, "Distribuir trigo e oferecer espetáculos (gladiadores, corridas) mantinha a plebe ocupada e evitava revoltas contra o governo."),
  q("Constantinopla, capital do Império Bizantino, caiu em:", ["476", "1453", "1492", "1517"], 0, "Em 1453, os turcos otomanos tomaram Constantinopla (atual Istambul): marco do fim da Idade Média. 476 é a queda do Império do Ocidente."),
  q("Os plebeus romanos conquistaram representação política com os:", ["Cônsules", "Tribunos da plebe", "Senadores patrícios", "Pretores"], 1, "Após revoltas na República, os plebeus conquistaram os tribunos da plebe, que podiam vetar leis contrárias aos seus interesses."),
  q("A Lei das Doze Tábuas foi importante porque:", ["Criou a monarquia e o cargo de rei", "Pôs por escrito leis antes só orais", "Libertou os escravizados por dívida", "Dividiu as terras públicas entre plebeus"], 1, "Por volta de 450 a.C., as leis foram escritas em 12 tábuas expostas em público. Assim os patrícios não podiam interpretá-las como quisessem: base do direito romano."),
  f("Pólis", "Cidade-Estado grega, independente, com governo e leis próprias (Atenas, Esparta)."),
  f("Fases de Roma", "Monarquia → República → Império."),
  c(["Grécia: filosofia, teatro e democracia.", "Roma: direito, engenharia e império.", "Ambas usavam trabalho escravizado.", "O latim deu origem ao português."], "Nossa ideia de cidadania vem de Atenas; nosso direito, de Roma."),
]);

pack(H, "medieval-moderna", 1, 3, "Feudalismo e Igreja medieval", [
  q("Nas cidades medievais, os artesãos se organizavam em:", ["Corporações de ofício", "Sindicatos modernos", "Feudos", "Mosteiros"], 1, "As corporações de ofício reuniam mestres de uma profissão, controlavam preços, qualidade e quem podia trabalhar. Sindicatos só surgem com a industrialização."),
  q("A talha, no feudalismo, era:", ["Trabalho gratuito nas terras do senhor", "Parte da produção entregue ao senhor", "Imposto pago apenas à Igreja", "Taxa para usar o moinho e o forno"], 1, "Talha = parte da produção do servo entregue ao senhor. Corveia era o trabalho gratuito; banalidade, a taxa pelo moinho e forno; dízimo, o que ia à Igreja."),
  q("A corveia era:", ["Um imposto pago em moedas ao rei", "Trabalho gratuito nas terras do senhor", "Parte da colheita entregue à Igreja", "Taxa para usar o moinho e o forno"], 1, "Corveia era o trabalho gratuito que o servo devia, alguns dias por semana, nas terras do senhor (manso senhorial)."),
  q("As Cruzadas foram:", ["Viagens de comércio às Índias", "Expedições militares cristãs ao Oriente", "Revoltas camponesas contra os nobres feudais", "Concílios que reformaram a Igreja"], 1, "Expedições militares cristãs (séculos XI a XIII) para tomar Jerusalém dos muçulmanos. Reabriram o comércio no Mediterrâneo e ajudaram as cidades italianas."),
  q("Na Baixa Idade Média, o renascimento comercial fez crescer:", ["Os burgos e a burguesia", "Os feudos e a servidão", "O poder dos vikings", "O trabalho escravo urbano"], 1, "Com o comércio e as feiras, cresceram as cidades (burgos) e um novo grupo, os burgueses: comerciantes e artesãos que viviam do dinheiro, não da terra."),
  q("O Cisma do Oriente (1054) dividiu o cristianismo em:", ["Católicos e ortodoxos", "Católicos e protestantes", "Cristãos e muçulmanos", "Anglicanos e calvinistas"], 1, "Em 1054, a Igreja de Roma (católica) e a de Constantinopla (ortodoxa) se separaram. A divisão com protestantes só vem com a Reforma, em 1517."),
  f("Sociedade estamental", "Clero (rezava), nobreza (guerreava) e servos (trabalhavam); quase sem mobilidade social."),
  f("Renascimento comercial", "Rotas reabertas, feiras e cidades (burgos) fizeram surgir a burguesia."),
  c(["Feudo: grande propriedade rural.", "Servo preso à terra, não era escravizado.", "Poder descentralizado nos senhores.", "Igreja unificava a cultura."], "Burgos + burguesia = semente do capitalismo."),
]);

pack(H, "medieval-moderna", 2, 2, "Revolução Francesa e Industrial", [
  q("Na França pré-revolucionária, o Terceiro Estado reunia:", ["Burguesia, camponeses e trabalhadores", "O clero e a nobreza", "Só o rei e a corte", "Os militares de carreira"], 1, "O 1º Estado era o clero; o 2º, a nobreza; o 3º, todo o resto (burgueses, camponeses, trabalhadores), que pagava os impostos e não tinha privilégios."),
  q("Napoleão decretou o Bloqueio Continental (1806) para:", ["Isolar o comércio inglês", "Proteger Portugal da Espanha", "Abolir a escravidão na Europa", "Unificar a Itália"], 1, "O bloqueio proibia os países europeus de comerciar com a Inglaterra. Portugal não aderiu, foi invadido, e a família real veio para o Brasil (1808)."),
  q("A Revolução Industrial começou na:", ["França", "Inglaterra", "Alemanha", "Holanda e Bélgica"], 1, "Na Inglaterra, no século XVIII: tinha carvão e ferro, capital acumulado no comércio colonial, mão de obra expulsa do campo (cercamentos) e mercados."),
  q("Os ludistas eram trabalhadores que:", ["Exigiam mais máquinas nas fábricas inglesas", "Quebravam máquinas que tiravam empregos", "Eram donos de pequenas oficinas", "Fugiam das cidades para o campo"], 1, "Os ludistas quebravam máquinas, que viam como causa do desemprego e dos salários baixos. Depois, os operários se organizaram em sindicatos e no cartismo."),
  q("A Declaração dos Direitos do Homem e do Cidadão afirmava que:", ["O rei governa por vontade divina", "Os homens nascem livres e iguais", "Só o clero e a nobreza têm direitos", "A escravidão colonial é legítima"], 1, "Aprovada em 1789, afirmava que \"os homens nascem e permanecem livres e iguais em direitos\", contra os privilégios do Antigo Regime."),
  q("Uma consequência da Revolução Industrial foi:", ["Êxodo rural e cidades maiores", "Fim imediato do trabalho infantil", "Redução da poluição urbana", "Volta da produção artesanal"], 0, "As fábricas atraíram camponeses: houve êxodo rural, cidades inchadas, jornadas longas, trabalho infantil e poluição."),
  f("Iluminismo", "Movimento do século XVIII que defendia a razão, a liberdade e a crítica ao absolutismo (Locke, Voltaire, Rousseau, Montesquieu)."),
  f("Três poderes (Montesquieu)", "Executivo, Legislativo e Judiciário, independentes e equilibrados."),
  c(["Revolução Francesa: fim dos privilégios.", "Revolução Industrial: máquina e fábrica.", "Surge o proletariado.", "Surgem sindicatos e ideias socialistas."], "Duas revoluções que inventaram o mundo contemporâneo."),
]);

pack(H, "brasil-colonia", 2, 1, "Ciclo do açúcar e do ouro", [
  q("A principal mão de obra nos engenhos de açúcar era:", ["Assalariada europeia", "Africana escravizada", "Imigrante japonesa", "Cooperativa"], 1, "Africanos escravizados, trazidos pelo tráfico atlântico. O tráfico em si dava enorme lucro aos comerciantes portugueses."),
  q("A Guerra dos Emboabas (1707–1709) foi um conflito entre:", ["Paulistas e forasteiros pelas minas", "Portugueses e holandeses no Nordeste", "Senhores e escravizados de Palmares", "Jesuítas e bandeirantes no Sul"], 1, "Os paulistas, que acharam o ouro, disputaram as minas com os \"emboabas\" (forasteiros, sobretudo portugueses). Os emboabas venceram."),
  q("O quinto era:", ["Uma taxa sobre escravizados", "Imposto de 20% sobre o ouro", "A quinta parte do açúcar", "Uma moeda de prata colonial"], 1, "O quinto era o imposto de 20% sobre todo o ouro, cobrado nas casas de fundição. A derrama cobrava à força o que faltava."),
  q("Os quilombos, como Palmares, eram:", ["Fazendas de gado no sertão nordestino", "Comunidades de escravizados fugidos", "Aldeias dirigidas por jesuítas", "Postos de troca no litoral"], 1, "Quilombos eram comunidades de pessoas escravizadas que fugiram. Palmares, em Alagoas, liderado por Zumbi, resistiu por quase um século. 20 de novembro lembra Zumbi."),
  q("A Conjuração Baiana (1798) se diferenciou da Inconfidência Mineira por:", ["Ter participação popular e defender a abolição", "Ser liderada pela elite rica do ouro", "Defender a volta do poder do rei", "Lutar contra a ocupação holandesa"], 0, "Também chamada Revolta dos Alfaiates, teve artesãos, soldados e negros livres, e defendia república e fim da escravidão. Os líderes pobres foram enforcados."),
  q("O Governo-Geral (1548) foi criado para:", ["Centralizar a administração da colônia", "Dividir o Brasil em capitanias", "Proclamar a independência", "Expulsar os jesuítas"], 0, "Com o fracasso da maioria das capitanias, Portugal criou o Governo-Geral para centralizar o poder. Tomé de Sousa fundou Salvador, a primeira capital."),
  f("Pacto colonial", "A colônia só podia comerciar com a metrópole, vendendo matéria-prima barata e comprando manufaturados caros."),
  f("Plantation", "Grande propriedade, monocultura, mão de obra escravizada e produção para exportação."),
  c(["Pau-brasil: exploração inicial.", "Açúcar: Nordeste, séc. XVI–XVII.", "Ouro: Minas, séc. XVIII.", "Café: Sudeste, séc. XIX."], "A economia colonial foi organizada para enriquecer Portugal."),
]);

pack(H, "brasil-colonia", 2, 3, "Independência e Segundo Reinado", [
  q("Em que ano o Brasil foi elevado a Reino Unido a Portugal e Algarves?", ["1808", "1815", "1822", "1831"], 1, "Em 1815, com a Corte no Rio, o Brasil deixou de ser colônia e virou parte do Reino Unido. A chegada da Corte foi em 1808; a independência, em 1822."),
  q("A abertura dos portos (1808) beneficiou principalmente:", ["A Espanha", "A Inglaterra", "A França napoleônica", "A Holanda"], 1, "Com a abertura dos portos às \"nações amigas\", acabou o monopólio português. A maior beneficiada foi a Inglaterra, aliada e grande exportadora."),
  q("A Lei do Ventre Livre (1871) declarava livres:", ["Os filhos de escravizadas nascidos a partir dela", "Todos os escravizados com mais de 60 anos", "Os escravizados que lutaram no Paraguai", "Os africanos chegados após 1850"], 1, "Os filhos de escravizadas nascidos depois de 1871 seriam livres, mas na prática ficavam sob tutela dos senhores até 21 anos. Os maiores de 60 foram libertos em 1885 (Sexagenários)."),
  q("A Lei Eusébio de Queirós (1850):", ["Libertou os idosos", "Proibiu o tráfico de escravizados", "Libertou os nascidos de mães escravizadas", "Criou a República"], 1, "Sob pressão da Inglaterra, proibiu o tráfico de africanos escravizados para o Brasil. O capital do tráfico migrou para outras atividades."),
  q("O principal produto da economia no Segundo Reinado foi:", ["Açúcar", "Café", "Borracha", "Ouro"], 1, "O café: primeiro no Vale do Paraíba, com mão de obra escravizada, depois no Oeste Paulista, com imigrantes europeus."),
  q("A Guerra do Paraguai (1864–1870) opôs o Paraguai à:", ["Tríplice Aliança", "Grã-Bretanha", "Bolívia e ao Chile", "Liga Hanseática"], 0, "À Tríplice Aliança: Brasil, Argentina e Uruguai. Foi o maior conflito armado da América do Sul e devastou o Paraguai."),
  f("Lei do Ventre Livre (1871)", "Filhos de mulheres escravizadas nascidos a partir dela seriam livres (na prática, com muitas restrições)."),
  f("Lei de Terras (1850)", "Terra só podia ser obtida por compra: dificultou o acesso de libertos e imigrantes pobres."),
  c(["1808: família real chega.", "1822: Independência.", "1888: abolição.", "1889: República."], "A abolição veio aos poucos e sem reparação."),
]);

pack(H, "brasil-republica", 3, 1, "Era Vargas", [
  q("Getúlio Vargas chegou ao poder em 1930 por meio de:", ["Uma eleição direta para presidente", "Uma revolução contra a República Velha", "Uma indicação do imperador Pedro II", "O golpe militar de 31 de março de 1964"], 1, "A Revolução de 1930 derrubou Washington Luís e impediu a posse de Júlio Prestes, encerrando a República Velha e o café com leite."),
  q("A CLT (Consolidação das Leis do Trabalho) foi criada em:", ["1888", "1943", "1964", "1988"], 1, "Em 1943, no Estado Novo: reuniu leis trabalhistas como salário mínimo, férias, jornada de 8 horas e carteira de trabalho."),
  q("No Estado Novo, o DIP (Departamento de Imprensa e Propaganda) servia para:", ["Fazer propaganda e censura", "Construir estradas e ferrovias", "Organizar as eleições", "Cuidar da saúde pública"], 1, "O DIP censurava jornais, rádio e cinema e fazia propaganda da imagem de Vargas como \"pai dos pobres\"."),
  q("A Companhia Siderúrgica Nacional e a Petrobras simbolizam:", ["Liberalismo econômico", "Industrialização estatal", "Privatização de empresas", "Economia agroexportadora"], 1, "Vargas apostou na indústria de base estatal: CSN (1941) e Petrobras (1953), com a campanha \"O petróleo é nosso\"."),
  q("O voto feminino no Brasil foi conquistado em:", ["1889", "1932", "1988", "1960"], 1, "O Código Eleitoral de 1932 garantiu o voto às mulheres, fruto da luta de sufragistas como Bertha Lutz."),
  q("Vargas encerrou sua trajetória política em 1954 com:", ["Um golpe", "Seu suicídio", "A renúncia para viajar", "Uma eleição perdida"], 1, "Pressionado por uma grave crise política, Vargas se suicidou em agosto de 1954 e deixou a carta-testamento: \"Saio da vida para entrar na história.\""),
  f("Populismo", "Liderança carismática que se apresenta como protetora do povo, combinando concessões sociais e controle."),
  f("Política do café com leite", "Alternância de presidentes de SP e MG na República Velha."),
  c(["1930: Revolução.", "1934: Constituição.", "1937: golpe do Estado Novo.", "1945: deposição; 1951: volta eleito."], "Vargas: direitos trabalhistas + autoritarismo."),
]);

pack(H, "brasil-republica", 3, 3, "Ditadura militar", [
  q("Qual presidente foi derrubado pelo golpe de 1964?", ["Juscelino Kubitschek", "João Goulart", "Jânio Quadros", "Getúlio Vargas"], 1, "João Goulart (Jango), que defendia as reformas de base (como a agrária), foi derrubado em 31 de março de 1964. Jânio tinha renunciado em 1961."),
  q("Na ditadura militar, o DOI-CODI estava ligado à:", ["Repressão a opositores", "Reforma agrária", "Abertura política", "Campanha das Diretas"], 1, "O DOI-CODI foi um órgão de repressão que prendeu, torturou e matou opositores do regime, sobretudo após o AI-5."),
  q("Como o governo Geisel descreveu a abertura política no fim da ditadura?", ["Lenta, gradual e segura", "Rápida e revolucionária", "Imposta pela ONU", "Decidida em plebiscito"], 0, "A abertura \"lenta, gradual e segura\" (Geisel e Figueiredo) controlou a transição: anistia (1979), volta do pluripartidarismo e eleição indireta em 1985."),
  q("O movimento Diretas Já (1984) reivindicava:", ["Eleições diretas para presidente", "A volta da monarquia parlamentar", "O fim do voto das mulheres", "Uma intervenção militar no país"], 0, "Milhões foram às ruas pela emenda Dante de Oliveira, que daria eleições diretas para presidente. Ela foi derrotada no Congresso, mas acelerou o fim do regime."),
  q("A Lei da Anistia (1979):", ["Puniu os agentes do Estado que torturaram presos", "Perdoou crimes políticos dos dois lados", "Instituiu o AI-5 e a censura prévia", "Extinguiu o MDB e a ARENA"], 1, "Perdoou crimes políticos de opositores e também de agentes do Estado. O perdão aos torturadores ainda é debatido."),
  q("O bipartidarismo da ditadura tinha:", ["PT e PSDB", "ARENA e MDB", "UDN e PSD", "PCB, PTB e PSD"], 1, "Após o AI-2 (1965), só dois partidos: ARENA, do governo, e MDB, oposição consentida. O pluripartidarismo voltou em 1979."),
  f("Censura na ditadura", "Jornais, músicas, peças e filmes passavam por censura prévia; artistas usavam metáforas."),
  f("Fim da ditadura", "1985: Tancredo Neves eleito indiretamente; José Sarney assume."),
  c(["1964: golpe.", "1968: AI-5, anos de chumbo.", "1979: anistia e abertura.", "1985: fim do regime; 1988: nova Constituição."], "Música de protesto driblava a censura com duplo sentido."),
]);

pack(H, "brasil-republica", 3, 4, "Nova República", [
  q("Pela Constituição de 1988, o racismo passou a ser:", ["Crime inafiançável e imprescritível", "Infração leve punida com multa", "Assunto apenas da esfera civil", "Crime punido só com advertência"], 1, "A Constituição de 1988 tornou o racismo crime inafiançável (sem fiança) e imprescritível (pode ser punido a qualquer tempo). A Lei Caó (1989) o regulamentou."),
  q("Qual era a moeda brasileira logo antes do real (1993–1994)?", ["Cruzado", "Cruzeiro real", "Mil-réis", "Cruzado novo"], 0, "O cruzeiro real durou de 1993 a 1994. Na transição, a URV serviu de ponte para o real, lançado em julho de 1994."),
  q("O movimento dos \"caras-pintadas\" (1992) pedia:", ["O impeachment de Collor", "As eleições Diretas Já", "A volta da monarquia", "O fim do Plano Real"], 1, "Estudantes de rosto pintado foram às ruas pelo impeachment de Fernando Collor, acusado de corrupção. Ele renunciou e teve os direitos políticos cassados."),
  q("O SUS garante:", ["Saúde apenas a quem contribui", "Acesso universal e gratuito", "Somente vacinas e campanhas", "Planos de saúde privados"], 1, "O SUS, criado pela Constituição de 1988, garante saúde universal (para todos), integral e gratuita, de vacinas a transplantes."),
  q("O voto no Brasil é obrigatório para:", ["Todos os maiores de 16 anos", "Alfabetizados de 18 a 70 anos", "Todos os brasileiros acima de 18", "Apenas quem tem emprego formal"], 1, "Obrigatório para alfabetizados de 18 a 70 anos. Facultativo para jovens de 16 e 17, maiores de 70 e analfabetos."),
  q("O Estatuto da Criança e do Adolescente (ECA) é de:", ["1964", "1990", "2010", "1940"], 1, "O ECA (1990) garante proteção integral a crianças e adolescentes, com direitos à educação, saúde, convivência familiar e proteção contra o trabalho infantil."),
  f("Cláusulas pétreas", "Partes da Constituição que não podem ser abolidas por emenda: federação, voto direto/secreto/universal/periódico, separação dos poderes e direitos individuais."),
  f("Impeachment", "Processo de afastamento do presidente por crime de responsabilidade, julgado pelo Congresso."),
  c(["1985: fim da ditadura.", "1988: Constituição Cidadã.", "1994: Plano Real.", "Democracia exige participação contínua."], "A Constituição de 1988 é a mais longeva da República."),
]);

pack(H, "guerras", 2, 4, "Primeira Guerra Mundial", [
  q("A \"Paz Armada\" (1871–1914) foi um período de:", ["Corrida armamentista entre as potências", "Desarmamento geral da Europa", "Paz garantida pela ONU", "Guerra aberta entre EUA e URSS"], 1, "Sem guerra aberta, as potências europeias se armavam e formavam alianças, num clima de rivalidade imperialista que explodiu em 1914."),
  q("A Rússia saiu da Primeira Guerra em 1918 por causa:", ["Da Revolução Russa", "Da vitória sobre a Alemanha", "Da entrada dos EUA", "Da gripe espanhola"], 1, "Os bolcheviques, no poder desde 1917, assinaram a paz com a Alemanha (Brest-Litovsk, 1918) para sair da guerra, mesmo perdendo territórios."),
  q("A Primeira Guerra ficou marcada pela guerra de:", ["Trincheiras", "Guerrilha urbana", "Drones", "Bombas atômicas"], 0, "Na frente ocidental, exércitos ficaram anos em trincheiras, com metralhadoras, gás e arame farpado, quase sem avançar."),
  q("A Liga das Nações, criada após a 1ª Guerra, fracassou em parte porque:", ["Os EUA não entraram nela", "Tinha um exército forte demais", "Reunia só países asiáticos", "Foi criada pela URSS"], 0, "Proposta pelo presidente americano Wilson, a Liga ficou sem os EUA (o Senado recusou) e sem força para impedir agressões. Foi substituída pela ONU."),
  q("Os EUA entraram na guerra em:", ["1914", "1917", "1939", "1941"], 1, "Em 1917, após ataques de submarinos alemães a navios e o telegrama Zimmermann. Ajudaram a decidir a vitória da Entente."),
  q("Uma das causas da Primeira Guerra foi:", ["O imperialismo e a disputa por colônias", "A rivalidade entre EUA e URSS", "A crise de 1929 e o desemprego em massa na Europa", "A expansão do nazismo na Europa"], 0, "Imperialismo (disputa por colônias e mercados), nacionalismos, corrida armamentista e o sistema de alianças. EUA × URSS é Guerra Fria."),
  f("Paz armada", "Período antes de 1914 em que as potências se armavam e formavam alianças."),
  f("Liga das Nações", "Organização criada após a guerra para manter a paz; fracassou e foi substituída pela ONU."),
  c(["Imperialismo + nacionalismo + alianças.", "1914: atentado em Sarajevo.", "Trincheiras, gás e metralhadoras.", "1919: Versalhes humilha a Alemanha."], "Versalhes plantou as sementes da Segunda Guerra."),
]);

pack(H, "guerras", 3, 2, "Segunda Guerra Mundial", [
  q("A política de apaziguamento da Inglaterra e da França diante de Hitler consistiu em:", ["Ceder às exigências para evitar a guerra", "Declarar guerra imediata à Alemanha", "Fazer aliança com o Japão", "Invadir a Itália fascista"], 1, "No Acordo de Munique (1938), Inglaterra e França aceitaram a anexação dos Sudetos para evitar a guerra. Isso só encorajou Hitler, que invadiu a Polônia em 1939."),
  q("O Dia D (6 de junho de 1944) foi:", ["O desembarque aliado na Normandia", "O ataque japonês a Pearl Harbor", "A rendição da Alemanha", "A tomada de Berlim"], 1, "Os Aliados desembarcaram na Normandia (França), abrindo a frente ocidental contra a Alemanha. A rendição alemã veio em maio de 1945."),
  q("O Brasil participou da Segunda Guerra enviando a:", ["Marinha à Ásia", "FEB à Itália", "Tropas à Rússia", "Aviões ao Japão"], 1, "A Força Expedicionária Brasileira (FEB) lutou na Itália ao lado dos Aliados (batalha de Monte Castelo). Contradição: Vargas era ditador e lutou contra ditaduras."),
  q("O que levou os EUA a entrarem na Segunda Guerra, em 1941?", ["O ataque japonês a Pearl Harbor", "A invasão alemã da Polônia", "O desembarque do Dia D", "A Revolução Russa"], 1, "Em 7 de dezembro de 1941, o Japão atacou a base americana de Pearl Harbor, no Havaí. No dia seguinte, os EUA declararam guerra."),
  q("O Eixo era formado por:", ["EUA, URSS e Inglaterra", "Alemanha, Itália e Japão", "França, Polônia e Bélgica", "Espanha, Portugal e Grécia"], 1, "Alemanha (nazista), Itália (fascista) e Japão (militarista). Os Aliados tinham Reino Unido, URSS, EUA, França e outros."),
  q("A OTAN, criada em 1949, era uma aliança militar:", ["Liderada pelos EUA", "Liderada pela URSS", "Entre países africanos", "De países neutros"], 1, "A OTAN uniu EUA, Canadá e países da Europa Ocidental contra a URSS. Em resposta, os soviéticos criaram o Pacto de Varsóvia (1955)."),
  f("Totalitarismo", "Regime em que o Estado controla todos os aspectos da vida: nazismo, fascismo e stalinismo."),
  f("Crise de 1929", "Quebra da Bolsa de Nova York; desemprego em massa ajudou a ascensão de regimes autoritários."),
  c(["1929: crise econômica mundial.", "Ascensão de Hitler e Mussolini.", "1939–1945: guerra global.", "Pós-guerra: ONU e Guerra Fria."], "A Declaração Universal dos Direitos Humanos (1948) nasce desse trauma."),
]);

pack(H, "mundo-atual", 3, 3, "Guerra Fria", [
  q("A Guerra Fria foi a disputa entre:", ["Alemanha e França pela Europa", "EUA e URSS", "China e Japão pela Ásia", "Inglaterra e França pelas colônias"], 1, "EUA (capitalismo) e URSS (socialismo) disputaram influência, armas nucleares e o espaço, sem guerra direta entre eles, mas com guerras indiretas (Coreia, Vietnã)."),
  q("O Muro de Berlim caiu em:", ["1961", "1989", "1991", "1945"], 1, "Em 9 de novembro de 1989, berlinenses derrubaram o muro, erguido em 1961. A Alemanha se reunificou em 1990."),
  q("A crise dos mísseis (1962) envolveu:", ["Coreia", "Cuba", "Vietnã", "Afeganistão"], 1, "A URSS instalou mísseis nucleares em Cuba, perto dos EUA. Após 13 dias de tensão, foram retirados em troca da retirada de mísseis americanos da Turquia."),
  q("A corrida espacial teve como marco a chegada do homem à Lua em:", ["1957", "1961", "1969", "1975"], 2, "Em 1969, a Apollo 11 (EUA) levou Neil Armstrong à Lua. Antes, a URSS tinha lançado o Sputnik (1957) e Gagarin, o primeiro homem no espaço (1961)."),
  q("O Plano Marshall foi:", ["Ajuda econômica dos EUA à Europa", "Um plano soviético de industrialização", "Um acordo de desarmamento nuclear", "Uma aliança militar entre países asiáticos"], 0, "Ajuda econômica dos EUA para reconstruir a Europa Ocidental após a guerra e, assim, conter o avanço do socialismo."),
  q("A Perestroika e a Glasnost, de Gorbachev, buscavam:", ["Reformar a economia e abrir a política", "Fortalecer o regime de Stalin", "Invadir o Afeganistão", "Erguer o Muro de Berlim"], 2, "Perestroika (reestruturação econômica) e Glasnost (transparência política) tentaram salvar a URSS nos anos 1980, mas aceleraram sua dissolução em 1991."),
  f("OTAN x Pacto de Varsóvia", "Alianças militares do bloco capitalista (OTAN, 1949) e socialista (Varsóvia, 1955)."),
  f("Conflitos indiretos", "Guerra da Coreia, Guerra do Vietnã e Afeganistão: as superpotências apoiavam lados opostos."),
  c(["Mundo bipolar: EUA x URSS.", "Ameaça nuclear permanente.", "Disputa por influência em todos os continentes.", "Fim em 1991 com o colapso soviético."], "\"Fria\" porque as duas nunca se enfrentaram diretamente."),
]);

pack(H, "mundo-atual", 3, 4, "Mundo pós-1991", [
  q("Após o fim da Guerra Fria, a ordem mundial passou a ser vista como:", ["Bipolar, com EUA e URSS no comando", "Multipolar, com peso dos EUA", "Isolada, sem comércio entre blocos", "Colonial, com novas metrópoles europeias"], 1, "Com o fim da URSS, os EUA ficaram como superpotência militar, mas a economia se espalhou entre vários polos: União Europeia, China, Japão. Fala-se em mundo multipolar."),
  q("Os atentados de 11 de setembro de 2001 levaram os EUA a:", ["Invadir o Afeganistão", "Sair da ONU e da OTAN", "Adotar o euro no comércio", "Dissolver a OTAN de vez"], 0, "Após os ataques da Al-Qaeda, os EUA invadiram o Afeganistão (2001), que abrigava o grupo, e depois o Iraque (2003): a \"guerra ao terror\"."),
  q("A Primavera Árabe (2010–2012) foi:", ["Um festival cultural no Cairo", "Uma onda de protestos contra ditaduras", "Uma crise financeira no Golfo Pérsico", "Um acordo climático entre países árabes"], 1, "Protestos, muitos organizados por redes sociais, derrubaram governos na Tunísia, no Egito e na Líbia e levaram à guerra civil na Síria."),
  q("A crise financeira de 2008 começou:", ["Na bolsa de valores da China", "No mercado imobiliário dos EUA", "No sistema bancário do Brasil", "Na dívida pública da Rússia"], 1, "Bancos americanos emprestaram para compra de imóveis a quem não podia pagar (subprime). A bolha estourou, bancos quebraram (Lehman Brothers) e a crise se espalhou."),
  q("A sigla BRICS vem das iniciais de:", ["Brasil, Rússia, Índia, China e África do Sul", "Bolívia, Rússia, Irã, Chile e Suécia", "Bélgica, Romênia, Itália, Croácia e Sérvia", "Brasil, Reino Unido, Itália, Canadá e Suíça"], 0, "Brasil, Rússia, Índia, China e África do Sul (South Africa, que entrou em 2011). Desde 2024, o grupo recebeu novos membros."),
  q("O Brexit foi:", ["A saída do Reino Unido da União Europeia", "Uma guerra entre Reino Unido e Irlanda", "Um tratado de controle de armas nucleares", "A adoção do euro pela Inglaterra e Escócia"], 0, "Num plebiscito em 2016, o Reino Unido decidiu sair da União Europeia. A saída se concretizou em 2020."),
  f("Globalização", "Integração econômica, cultural e tecnológica mundial, intensificada após 1991 e pela internet."),
  f("Apartheid", "Regime de segregação racial na África do Sul, encerrado em 1994 com a eleição de Nelson Mandela."),
  c(["Fim da URSS: EUA como superpotência.", "Ascensão da China.", "Terrorismo e novos conflitos.", "Crises econômicas globais."], "Hoje: disputa EUA x China pela liderança tecnológica."),
]);

// ── Geografia ────────────────────────────────────────────────────────────────
pack(G, "cartografia", 1, 1, "Escalas, coordenadas e fusos", [
  q("Numa escala 1:50.000, 2 cm no mapa correspondem a:", ["100 m", "1 km", "10 km", "50 km"], 1, "2 cm · 50.000 = 100.000 cm = 1.000 m = 1 km. Corte dois zeros (cm → m) e mais três (m → km)."),
  q("Uma escala maior (ex.: 1:1.000) mostra:", ["Área maior com menos detalhes", "Área menor com mais detalhes", "Nada", "O mundo inteiro"], 1, "Escala grande = denominador pequeno: cada cm vale pouco no real, então mostra área pequena com muito detalhe (planta de bairro). Escala pequena mostra países."),
  q("A latitude é medida a partir:", ["Do Meridiano de Greenwich", "Da Linha do Equador", "Do Trópico de Câncer", "Do Polo Sul"], 1, "Latitude: distância em graus da Linha do Equador, de 0° a 90° norte ou sul. Longitude é medida a partir de Greenwich."),
  q("A longitude é medida a partir:", ["Da Linha do Equador", "Do Meridiano de Greenwich", "Do Polo Norte geográfico", "Do Trópico de Capricórnio"], 1, "Longitude: distância em graus do Meridiano de Greenwich (Londres), de 0° a 180° leste ou oeste."),
  q("Se em Brasília (fuso −3) são 10 h, que horas são em Londres (fuso 0)?", ["7 h", "13 h", "10 h", "3 h"], 1, "Londres está 3 fusos a leste, e a leste as horas adiantam: 10 + 3 = 13 h. Subtrair (7 h) é andar para o lado errado."),
  q("Indo para o leste, as horas:", ["Atrasam", "Adiantam", "Não mudam", "Viram o dia anterior"], 1, "A Terra gira de oeste para leste: o Sol nasce primeiro no leste. Por isso, indo para leste, os relógios estão adiantados."),
  f("Projeção de Mercator", "Mantém os ângulos (boa para navegação) mas distorce áreas perto dos polos (Groenlândia parece enorme)."),
  f("Rosa dos ventos", "Pontos cardeais (N, S, L, O), colaterais (NE, SE, SO, NO) e subcolaterais."),
  c(["Escala: relação entre mapa e realidade.", "Latitude: norte-sul (paralelos).", "Longitude: leste-oeste (meridianos).", "Fuso: 15° = 1 hora."], "Leste adianta, oeste atrasa."),
]);

pack(G, "cartografia", 1, 4, "Biomas brasileiros", [
  q("O bioma brasileiro mais desmatado proporcionalmente é a:", ["Amazônia", "Mata Atlântica", "Caatinga", "Mata dos Cocais"], 1, "A Mata Atlântica, no litoral onde a colonização começou e onde vive a maioria dos brasileiros, guarda pouco mais de 10% da cobertura original."),
  q("A Mata dos Cocais, entre a Amazônia e a Caatinga, é marcada por:", ["Babaçu e carnaúba", "Araucárias", "Cactos gigantes", "Campos de gelo"], 1, "É uma faixa de transição no Maranhão e Piauí, com palmeiras como babaçu (óleo) e carnaúba (cera), importantes para a renda local."),
  q("O manguezal é importante porque:", ["É berçário de peixes e crustáceos", "Tem solo ótimo para a soja", "Não abriga vida animal", "Fica no interior do país"], 1, "Na transição entre rio e mar, o mangue abriga a reprodução de muitas espécies, protege o litoral e sustenta pescadores e catadores de caranguejo."),
  q("A Mata de Araucárias é típica:", ["Do Sul, com clima frio de altitude", "Do sertão nordestino", "Da planície amazônica", "Do litoral do Nordeste"], 1, "A Mata de Araucárias (pinheiro-do-paraná) aparece nos planaltos frios do Sul. Foi muito derrubada pela madeira; o pinhão é sua semente."),
  q("Os Pampas ficam principalmente no estado:", ["Da Bahia", "Do Rio Grande do Sul", "Do Amazonas", "De Mato Grosso do Sul"], 1, "No Rio Grande do Sul: campos de vegetação rasteira, ótimos para a pecuária. É o bioma da cultura gaúcha."),
  q("A principal ameaça atual ao Cerrado é:", ["A expansão agropecuária", "Os terremotos frequentes", "O avanço das geleiras", "A subida do nível do mar"], 0, "A expansão da soja, do milho e da pecuária substitui a vegetação nativa. O Cerrado já perdeu cerca de metade da cobertura original."),
  f("Rios voadores", "Umidade da Amazônia transportada pelos ventos, que leva chuva ao Centro-Sul do Brasil."),
  f("Mata de Araucárias", "Floresta de pinheiro-do-paraná no Sul, muito devastada pela exploração de madeira."),
  c(["Amazônia: floresta equatorial, maior biodiversidade.", "Cerrado: savana, berço das águas.", "Caatinga: semiárido.", "Mata Atlântica: litoral, muito devastada."], "Desmatar a Amazônia afeta a chuva no Sudeste."),
]);

pack(G, "populacao", 2, 1, "Transição demográfica", [
  q("A transição demográfica descreve a passagem de:", ["Natalidade e mortalidade altas para baixas", "População do campo para a cidade", "Economia industrial para agrícola", "Crescimento lento para explosão de nascimentos"], 0, "Primeiro cai a mortalidade (saneamento, vacinas) e a população explode; depois cai a natalidade (urbanização, mulheres no mercado) e o crescimento desacelera."),
  q("O envelhecimento da população brasileira traz como desafio:", ["Sobra de vagas nas escolas de ensino médio", "Pressão sobre a previdência e a saúde", "Falta de pessoas acima de 65 anos", "Aumento rápido da natalidade"], 1, "Mais idosos e menos jovens: menos gente contribuindo para a previdência e mais demanda por aposentadoria e saúde."),
  q("Uma pirâmide etária de base estreita e topo largo indica:", ["População envelhecida", "Natalidade muito alta", "Muitas crianças", "Alta mortalidade infantil"], 1, "Base estreita = poucos nascimentos; topo largo = muitos idosos. É o perfil de países como o Japão e, cada vez mais, do Brasil."),
  q("Crescimento vegetativo é:", ["Imigrantes menos emigrantes", "Nascimentos menos óbitos", "Crescimento das plantas", "Área urbana"], 1, "Crescimento vegetativo (natural) = nascimentos − óbitos. Não conta migração; com ela, temos o crescimento total."),
  q("A taxa de fecundidade do Brasil hoje está:", ["Acima de 5 filhos por mulher", "Abaixo de 2,1 filhos por mulher", "Em torno de 4 filhos por mulher", "Perto de 3,5 filhos por mulher"], 1, "Está abaixo de 2,1 filhos por mulher, o nível de reposição. Nos anos 1960 passava de 6."),
  q("O \"bônus demográfico\" acontece quando:", ["A maioria da população tem mais de 65 anos", "Muita gente está em idade de trabalhar", "Não nascem mais crianças no país", "A população total começa a cair"], 1, "Quando há muita gente em idade de trabalhar e poucos dependentes (crianças e idosos): oportunidade de crescer, se houver emprego e educação."),
  f("Densidade demográfica", "Habitantes ÷ área (hab/km²). Populoso ≠ povoado."),
  f("Expectativa de vida", "Média de anos que se espera que uma pessoa viva; aumentou muito no Brasil desde 1950."),
  c(["Fase 1: tudo alto.", "Fase 2: mortalidade cai (saneamento, vacinas).", "Fase 3: natalidade cai (urbanização, mulher no mercado).", "Fase 4: tudo baixo, população envelhece."], "O Brasil está entre as fases 3 e 4."),
]);

pack(G, "populacao", 3, 3, "Regiões e migrações no Brasil", [
  q("Qual região brasileira tem a menor densidade demográfica?", ["Norte", "Sudeste", "Sul", "Nordeste"], 1, "O Norte tem a maior área e relativamente pouca população: menos de 5 habitantes por km². O Sudeste é a mais densa."),
  q("Qual estado brasileiro tem a maior área?", ["Amazonas", "Pará", "Mato Grosso", "Minas Gerais"], 1, "O Amazonas tem cerca de 1,5 milhão de km², quase 18% do Brasil. Pará e Mato Grosso vêm em seguida."),
  q("Nas décadas de 1950–1970, o principal fluxo migratório interno foi:", ["Sul → Norte", "Nordeste → Sudeste", "Sudeste → Nordeste", "Centro-Oeste → Sul"], 1, "Milhões de nordestinos foram para o Sudeste, sobretudo São Paulo e Rio, fugindo da seca e buscando emprego na industrialização."),
  q("A construção de Brasília (1960) estimulou migrações para o:", ["Sul", "Centro-Oeste", "Nordeste", "Litoral do Sudeste"], 1, "Brasília, no Planalto Central, atraiu trabalhadores (os \"candangos\") e ajudou a interiorizar o país, abrindo o Centro-Oeste."),
  q("O êxodo rural é:", ["Migração da cidade para o campo", "Migração do campo para a cidade", "Emigração para o exterior", "Turismo rural"], 1, "Êxodo rural é a saída em massa do campo para a cidade, causada pela mecanização, concentração de terras e atração dos empregos urbanos."),
  q("A divisão do Brasil em 5 regiões foi feita pelo:", ["IBGE", "Exército", "Banco Central", "IBAMA"], 0, "O IBGE (Instituto Brasileiro de Geografia e Estatística) definiu a divisão atual em 5 regiões em 1969, com ajustes em 1988."),
  f("Migração pendular", "Deslocamento diário de casa para o trabalho em outra cidade (comum em regiões metropolitanas)."),
  f("Regiões geoeconômicas", "Amazônia, Nordeste e Centro-Sul: divisão por características econômicas, não por limites estaduais."),
  c(["Norte: maior área, menor densidade.", "Nordeste: maior número de estados (9).", "Sudeste: mais populoso e industrializado.", "Sul e Centro-Oeste: agronegócio forte."], "Migração segue o emprego."),
]);

pack(G, "economia-geo", 2, 4, "Matriz energética", [
  q("Uma usina termelétrica a gás ou carvão gera eletricidade:", ["Queimando combustível para gerar vapor", "Com a força dos ventos", "Com a luz do sol", "Com a queda-d'água"], 1, "O calor da queima ferve água; o vapor gira a turbina e o gerador. É poluente, mas pode ser ligada a qualquer hora, por isso complementa as hidrelétricas na seca."),
  q("Uma desvantagem das hidrelétricas é:", ["Emitir mais CO₂ que termelétricas a carvão", "Alagar grandes áreas e afetar povos", "Custar caro para operar no dia a dia", "Gerar energia só durante o dia"], 1, "As represas alagam grandes áreas, deslocam comunidades ribeirinhas e indígenas e afetam peixes e florestas (ex.: Belo Monte)."),
  q("A energia eólica cresce muito no:", ["Nordeste", "Norte", "Centro-Oeste", "Sudeste"], 0, "O litoral do Nordeste tem ventos fortes e constantes: Bahia, Rio Grande do Norte e Piauí lideram a geração eólica."),
  q("A energia solar fotovoltaica cresce no Brasil por causa de:", ["Alta insolação e painéis mais baratos", "Falta de rios no país", "Proibição de hidrelétricas", "Clima frio o ano todo"], 2, "O Brasil recebe muito sol o ano todo e o preço dos painéis caiu muito. Telhados residenciais e grandes usinas no Nordeste puxam o crescimento."),
  q("O pré-sal é:", ["Uma mina de sal no litoral nordestino", "Petróleo em águas muito profundas", "Uma usina de energia solar no mar", "Um aquífero de água doce no Sul"], 1, "Petróleo em águas ultraprofundas, abaixo de uma espessa camada de sal, no litoral do Sudeste. Hoje é a maior parte da produção brasileira."),
  q("O Brasil se destaca mundialmente na produção de biocombustíveis com:", ["Etanol de cana", "Carvão vegetal", "Urânio", "Xisto"], 0, "O etanol de cana, desde o Proálcool (anos 1970). Os carros flex (desde 2003) usam gasolina, etanol ou qualquer mistura."),
  f("Matriz energética x matriz elétrica", "Energética: todas as fontes (inclui transporte e indústria). Elétrica: só geração de eletricidade."),
  f("Energia limpa x renovável", "Renovável: não se esgota. Limpa: emite pouco poluente. Hidrelétrica é renovável, mas tem impactos."),
  c(["Hidrelétricas dominam a eletricidade.", "Petróleo domina transporte.", "Eólica e solar crescem rápido.", "Seca nos reservatórios encarece a conta."], "Bandeira vermelha na conta = térmicas ligadas."),
]);

pack(G, "economia-geo", 2, 3, "Agronegócio e questão agrária", [
  q("A grilagem de terras é:", ["Tomar terra pública com documento falso", "Plantar grãos em rotação", "Irrigar áreas do semiárido", "Dividir terra pela reforma agrária"], 0, "Grileiros falsificam títulos para se apossar de terras públicas (o nome vem de guardar papéis com grilos para envelhecê-los). É ligada ao desmatamento."),
  q("A soja brasileira é produzida principalmente para:", ["Consumo nas cidades do país", "Exportação, como commodity", "Fabricação de aço e cimento", "Uso medicinal e cosmético"], 1, "A soja é uma commodity de exportação: grão, farelo e óleo vão sobretudo para a China, para ração animal."),
  q("O que é agroecologia?", ["Produzir imitando a natureza e sem agrotóxicos", "Plantar só soja transgênica", "Criar gado confinado em larga escala", "Usar adubo químico em excesso"], 1, "A agroecologia usa diversidade de culturas, adubação natural e controle biológico de pragas, unindo produção, ambiente e renda do agricultor."),
  q("A Revolução Verde trouxe:", ["O fim do uso de agrotóxicos", "Máquinas, sementes melhoradas e adubos", "A reforma agrária em toda a América Latina", "A expansão da agricultura orgânica e familiar"], 1, "A partir dos anos 1960: máquinas, sementes melhoradas, adubos e agrotóxicos. A produção aumentou, mas com impactos ambientais e concentração de terras."),
  q("O MST luta principalmente por:", ["Industrialização", "Reforma agrária", "Privatizações", "Fim da agricultura"], 1, "O Movimento dos Trabalhadores Rurais Sem Terra luta pela reforma agrária, ocupando latifúndios improdutivos para pressionar a desapropriação."),
  q("O avanço da fronteira agrícola ocorre principalmente sobre:", ["Cerrado e Amazônia", "Pampas", "Litoral", "Mata de Araucárias"], 0, "A agropecuária avança sobre o Cerrado e o sul da Amazônia, no chamado arco do desmatamento (MT, PA, RO)."),
  f("Commodity", "Produto padronizado, com preço definido no mercado internacional (soja, minério, café)."),
  f("Agroindústria", "Integração entre agricultura e indústria: processamento de alimentos, máquinas, insumos."),
  c(["Agronegócio: exportação e tecnologia.", "Agricultura familiar: comida no prato.", "Terra concentrada gera conflitos.", "Expansão agrícola pressiona biomas."], "O Brasil é um dos maiores exportadores de alimentos do mundo."),
]);

pack(G, "geopolitica", 3, 1, "Blocos econômicos", [
  q("Qual país passou a ser membro pleno do Mercosul em 2024?", ["Chile", "Bolívia", "Peru", "Colômbia"], 0, "A Bolívia completou sua adesão em 2024 e se juntou a Brasil, Argentina, Paraguai e Uruguai. Chile, Peru e Colômbia são associados."),
  q("A Zona do Euro é formada pelos países que:", ["Adotaram o euro como moeda", "Estão em guerra entre si", "Saíram da União Europeia", "Usam o dólar no comércio"], 1, "Dos países da União Europeia, cerca de 20 adotaram o euro. Alguns membros, como Suécia e Polônia, mantêm moeda própria."),
  q("Zona de livre comércio significa:", ["Fim das tarifas entre os membros", "Uma moeda única para todos", "Livre circulação obrigatória de pessoas", "Um exército e uma polícia comuns aos países"], 0, "Zona de livre comércio: tarifas zeradas entre os membros, mas cada um cobra o que quiser de fora. É o nível mais simples de integração."),
  q("O USMCA (antigo NAFTA) reúne:", ["EUA, México e Canadá", "Brasil, Argentina e Chile", "China, Japão e Coreia do Sul", "Rússia e Índia"], 0, "Estados Unidos, México e Canadá, numa zona de livre comércio que substituiu o NAFTA em 2020."),
  q("A APEC reúne países:", ["Do Atlântico Norte e da Europa", "Da Ásia e do Pacífico", "Da África Subsaariana", "Do Mediterrâneo e do Oriente Médio"], 1, "A APEC (Cooperação Econômica Ásia-Pacífico) reúne países banhados pelo Pacífico, como EUA, China, Japão, Austrália, Chile e Peru."),
  q("A Tarifa Externa Comum (TEC) caracteriza uma:", ["Zona de livre comércio", "União aduaneira", "União política", "Federação"], 1, "Na união aduaneira (como o Mercosul), os membros cobram a mesma tarifa de quem é de fora: a TEC. É um passo além da zona de livre comércio."),
  f("Níveis de integração", "Zona de livre comércio → união aduaneira → mercado comum → união econômica e monetária."),
  f("Protecionismo", "Barreiras (tarifas, cotas) para proteger a produção nacional da concorrência estrangeira."),
  c(["Blocos aumentam o comércio entre membros.", "Mercosul: união aduaneira imperfeita.", "UE: moeda única e livre circulação.", "Globalização e regionalização caminham juntas."], "O Brasil comercia mais com a China que com o Mercosul."),
]);

pack(G, "geopolitica", 3, 2, "Conflitos e refugiados", [
  q("A Faixa de Gaza e a Cisjordânia são territórios reivindicados:", ["Pelos palestinos", "Pela Síria", "Pelo Egito", "Pela Turquia"], 1, "São os territórios onde os palestinos reivindicam um Estado próprio, ocupados ou cercados por Israel em diferentes momentos desde 1967."),
  q("Refugiado é a pessoa que:", ["Viaja a turismo para outro país", "Foge do país por perseguição ou guerra", "Muda de cidade em busca de emprego melhor", "Estuda fora com bolsa do governo"], 1, "Refugiado foge do próprio país por perseguição, guerra ou violação de direitos e tem proteção pelo direito internacional (não pode ser devolvido ao perigo)."),
  q("A Guerra da Síria (desde 2011) provocou:", ["Pouca migração e um acordo rápido de paz", "Uma das maiores crises de refugiados", "A entrada da Síria na União Europeia", "O fim dos conflitos no Oriente Médio"], 1, "Milhões de sírios deixaram o país, sobretudo para Turquia, Líbano e Europa: uma das maiores crises de refugiados do século."),
  q("A invasão da Ucrânia pela Rússia (2022) gerou impacto global em:", ["Preços de energia e alimentos", "Produção mundial de vacinas", "Turismo espacial e satélites", "Nenhum setor da economia mundial"], 0, "Rússia e Ucrânia exportam muito gás, petróleo, trigo e fertilizantes. A guerra fez os preços de energia e alimentos dispararem no mundo."),
  q("O que faz o Tribunal Penal Internacional, com sede em Haia?", ["Julga crimes de guerra e contra a humanidade", "Organiza os Jogos Olímpicos", "Define os fusos horários", "Emite a moeda euro"], 1, "O TPI julga pessoas acusadas de genocídio, crimes de guerra e crimes contra a humanidade, quando os países não o fazem."),
  q("Etnocentrismo é:", ["Julgar outras culturas a partir da própria", "Respeitar todas as culturas igualmente", "Estudar a origem dos povos", "Migrar para outro país"], 1, "Etnocentrismo é tomar a própria cultura como medida de tudo e ver as outras como inferiores. O oposto é o relativismo cultural."),
  f("Geopolítica", "Estudo das relações de poder entre Estados ligadas ao território, recursos e posição estratégica."),
  f("Soft power", "Influência por cultura, diplomacia e economia, sem uso da força."),
  c(["Conflitos têm raízes históricas.", "Território e recursos estão no centro.", "Guerras geram refugiados.", "A ONU media, mas o veto trava decisões."], "Para entender um conflito: mapa, história e recursos."),
]);
