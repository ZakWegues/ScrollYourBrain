import { FISICA, MATEMATICA, QUIMICA } from "./exatas";
import { FILOSOFIA, INGLES, PORTUGUES, SOCIOLOGIA } from "./linguagens";
import { BIOLOGIA, GEOGRAFIA, HISTORIA } from "./natureza-humanas";
import { extend, o } from "./pack";

/*
 * Dissertativas: short "explain why" questions with a model answer and the key points a good answer
 * mentions. Each point lists words that show it is there (accents and case don't matter, and a word
 * start is enough: "evapor" matches "evapora", "evaporação"…).
 */

// Matemática
extend(MATEMATICA, "Função afim (1º grau)", [
  o("Explique o que o coeficiente angular (a) diz sobre o gráfico de f(x) = ax + b.", "O coeficiente a é a taxa de variação: diz quanto y muda quando x aumenta 1. Se a > 0 a reta sobe (crescente); se a < 0, desce (decrescente). Quanto maior |a|, mais inclinada.", [
    ["Taxa de variação (quanto y muda por unidade de x)", "taxa", "variacao", "varia", "aumenta", "muda"],
    ["a > 0: crescente; a < 0: decrescente", "crescente", "decrescente", "sobe", "desce"],
    ["Mede a inclinação da reta", "inclina", "inclinação", "angulo"],
  ]),
]);
extend(MATEMATICA, "Porcentagem", [
  o("Um produto subiu 10% e depois caiu 10%. Ele voltou ao preço original? Explique.", "Não. Os 10% de queda são calculados sobre o preço já aumentado, que é maior. Ex.: 100 → 110 → 99. No fim, o preço fica 1% menor (1,1 × 0,9 = 0,99).", [
    ["Não volta ao preço original", "nao", "menor", "abaixo"],
    ["A queda é sobre um valor maior", "sobre", "base", "maior", "aumentado"],
    ["Fica 1% menor (99 de 100)", "99", "1%", "0,99"],
  ]),
]);
extend(MATEMATICA, "Combinatória e probabilidade", [
  o("Por que a chance de tirar cara duas vezes seguidas numa moeda é 1/4?", "Os lançamentos são independentes: cada um tem chance 1/2. Para os dois acontecerem, multiplicam-se as chances: 1/2 × 1/2 = 1/4. Os resultados possíveis são CC, CK, KC e KK, e só um é favorável.", [
    ["Eventos independentes", "independ"],
    ["Multiplicam-se as probabilidades", "multiplic", "vezes", "1/2"],
    ["4 resultados possíveis, 1 favorável", "4", "quatro", "resultados", "casos"],
  ]),
]);

// Física
extend(FISICA, "Leis de Newton", [
  o("Por que o passageiro de um ônibus é jogado para frente quando o motorista freia?", "Por inércia (1ª lei de Newton): o corpo tende a manter a velocidade que tinha. O ônibus para, mas o corpo do passageiro continua em movimento até que uma força (cinto, banco) o pare.", [
    ["Inércia / 1ª lei de Newton", "inercia", "primeira lei", "1ª lei"],
    ["O corpo tende a manter o movimento", "manter", "continua", "tende"],
    ["É preciso uma força para pará-lo", "forca", "cinto", "segura"],
  ]),
]);
extend(FISICA, "Conservação da energia", [
  o("Numa montanha-russa sem atrito, por que o carrinho é mais rápido no ponto mais baixo?", "A energia mecânica se conserva. Ao descer, a energia potencial gravitacional diminui e vira energia cinética. No ponto mais baixo a potencial é mínima, então a cinética (e a velocidade) é máxima.", [
    ["A energia mecânica se conserva", "conserva", "constante", "mecanica"],
    ["Potencial vira cinética na descida", "potencial", "transforma", "converte", "vira"],
    ["No ponto mais baixo a cinética é máxima", "cinetica", "maxima", "maior velocidade"],
  ]),
]);
extend(FISICA, "Dilatação e transmissão de calor", [
  o("Por que o ar-condicionado é instalado no alto da parede e o aquecedor perto do chão?", "Por convecção. O ar frio é mais denso e desce; o ar quente é menos denso e sobe. Assim, o ar frio sai do alto e desce, e o quente sai de baixo e sobe, misturando o ar do ambiente.", [
    ["Convecção", "convec", "correntes"],
    ["Ar frio é mais denso e desce", "denso", "desce", "frio"],
    ["Ar quente sobe", "quente", "sobe"],
  ]),
]);
extend(FISICA, "Som e acústica", [
  o("Por que no espaço (vácuo) não se ouve o som de uma explosão?", "O som é uma onda mecânica: precisa de um meio material (ar, água, sólido) para se propagar, vibrando as partículas. No vácuo não há partículas, então o som não chega.", [
    ["O som é onda mecânica", "mecanica", "onda"],
    ["Precisa de um meio material", "meio", "material", "particulas", "do ar"],
    ["No vácuo não há meio", "vacuo", "nao ha", "nao tem"],
  ]),
]);
extend(FISICA, "Circuitos e consumo na conta de luz", [
  o("Por que trocar o chuveiro para a posição \"verão\" reduz a conta de luz?", "Na posição verão o chuveiro usa menos potência (a resistência esquenta menos). A energia gasta é potência × tempo (E = P·t), e a conta é cobrada em kWh: menos potência no mesmo tempo é menos energia.", [
    ["Menor potência", "potencia", "menos", "watts"],
    ["Energia = potência × tempo", "tempo", "p·t", "p.t", "energia"],
    ["A conta é cobrada em kWh", "kwh", "quilowatt"],
  ]),
]);

// Química
extend(QUIMICA, "Separação de misturas", [
  o("Explique como a destilação simples separa a água do sal.", "Aquece-se a mistura: a água evapora (o sal não, pois tem ponto de ebulição muito maior). O vapor passa por um condensador, esfria e volta a ser líquido em outro recipiente. O sal fica no balão.", [
    ["A água evapora ao aquecer", "evapor", "ferve", "aquece"],
    ["O vapor é condensado", "condens", "esfria"],
    ["O sal fica no recipiente", "sal fica", "fica no", "resta", "sobra"],
  ]),
]);
extend(QUIMICA, "Geometria e polaridade", [
  o("Por que água e óleo não se misturam?", "A água é polar e o óleo é apolar. Substâncias se dissolvem quando têm polaridade parecida (\"semelhante dissolve semelhante\"). As moléculas de água se atraem mais entre si (pontes de hidrogênio) e expulsam o óleo, que fica por cima por ser menos denso.", [
    ["Água é polar e óleo apolar", "polar", "apolar"],
    ["Semelhante dissolve semelhante", "semelhante"],
    ["Óleo flutua por ser menos denso", "denso", "densidade", "flutua", "em cima"],
  ]),
]);
extend(QUIMICA, "Cinética química", [
  o("Por que os alimentos duram mais na geladeira?", "A temperatura baixa diminui a energia das moléculas e a frequência de colisões efetivas, deixando mais lentas as reações de decomposição e o crescimento de microrganismos.", [
    ["Temperatura baixa", "temperatura", "frio", "baixa"],
    ["Reações ficam mais lentas", "lenta", "devagar", "velocidade"],
    ["Menos colisões / menos microrganismos", "colis", "microrganismo", "bacteria", "fungo"],
  ]),
]);
extend(QUIMICA, "Polímeros e combustíveis", [
  o("Por que o etanol de cana é considerado renovável e a gasolina não?", "A cana pode ser plantada de novo a cada safra, e durante o crescimento absorve CO₂ pela fotossíntese. A gasolina vem do petróleo, que leva milhões de anos para se formar.", [
    ["A cana é replantada", "replant", "planta", "safra", "cultiv"],
    ["A planta absorve CO₂ ao crescer", "absorve", "fotossintese", "co2", "carbono"],
    ["Petróleo leva milhões de anos", "milhoes", "fossil", "petroleo"],
  ]),
]);

// Biologia
extend(BIOLOGIA, "Mitose e meiose", [
  o("Por que a meiose é importante para a reprodução sexuada?", "A meiose forma gametas haploides (n), com metade dos cromossomos. Na fecundação, dois gametas se unem e o número de cromossomos da espécie (2n) se mantém. Além disso, o crossing-over aumenta a variabilidade genética.", [
    ["Forma gametas haploides (metade)", "haploide", "metade", "gameta"],
    ["Mantém o número de cromossomos na fecundação", "mantem", "fecunda", "2n"],
    ["Aumenta a variabilidade genética", "variabilidade", "crossing", "variacao"],
  ]),
]);
extend(BIOLOGIA, "Vírus e bactérias", [
  o("Por que antibióticos não curam gripe?", "A gripe é causada por um vírus. Antibióticos agem em estruturas de bactérias (parede celular, ribossomos bacterianos), que os vírus não têm. Usar antibiótico sem necessidade ainda favorece bactérias resistentes.", [
    ["A gripe é causada por vírus", "virus"],
    ["Antibiótico age só em bactérias", "bacteria", "parede", "so age"],
    ["Uso errado cria resistência", "resisten"],
  ]),
]);
extend(BIOLOGIA, "Sistema nervoso, hormônios e imunidade", [
  o("Explique como a vacina protege o corpo.", "A vacina apresenta ao sistema imune um antígeno (vírus enfraquecido, inativado ou parte dele) sem causar a doença. O corpo produz anticorpos e células de memória. Num contato real, a resposta é rápida e forte.", [
    ["Apresenta um antígeno sem causar a doença", "antigeno", "enfraquec", "inativ", "parte do"],
    ["Produz anticorpos", "anticorpo"],
    ["Cria memória imunológica", "memoria"],
  ]),
]);
extend(BIOLOGIA, "Teorias evolutivas", [
  o("Explique, pela seleção natural, por que surgem bactérias resistentes a antibióticos.", "Numa população de bactérias já existem variantes com mutações de resistência. O antibiótico mata as sensíveis; as resistentes sobrevivem e se reproduzem, e a população passa a ser, em sua maioria, resistente. O remédio seleciona, não cria a resistência.", [
    ["Já existiam variantes resistentes (mutação)", "variant", "mutac", "ja existiam", "variacao"],
    ["O antibiótico elimina as sensíveis", "sensive", "mata", "elimina"],
    ["As resistentes sobrevivem e se reproduzem", "sobreviv", "reproduz", "multiplic"],
  ]),
]);
extend(BIOLOGIA, "Relações ecológicas e cadeias", [
  o("Por que as cadeias alimentares raramente têm mais de 4 ou 5 níveis?", "Em cada nível trófico, boa parte da energia é perdida como calor (respiração, movimento) e só cerca de 10% passa para o nível seguinte. Depois de poucos níveis, sobra energia pouca demais para sustentar mais consumidores.", [
    ["Energia se perde a cada nível", "perde", "perda", "calor"],
    ["Só ~10% passa adiante", "10", "dez"],
    ["Falta energia para mais níveis", "pouca", "falta", "sustentar", "nao sobra"],
  ]),
]);

// História
extend(HISTORIA, "Revolução Francesa e Industrial", [
  o("Cite duas consequências sociais da Revolução Industrial.", "Êxodo rural e crescimento desordenado das cidades; surgimento do operariado, com jornadas longas, trabalho infantil e salários baixos; e, depois, organização de sindicatos e leis trabalhistas.", [
    ["Êxodo rural / crescimento das cidades", "exodo", "cidades", "urbaniz"],
    ["Surgimento do operariado e más condições", "operari", "jornada", "infantil", "salario"],
    ["Sindicatos e luta por direitos", "sindicato", "greve", "direitos", "leis"],
  ]),
]);
extend(HISTORIA, "Ciclo do açúcar e do ouro", [
  o("Explique por que a Coroa portuguesa cobrava o quinto e o que era a derrama.", "O ouro de Minas era a principal riqueza da colônia no século XVIII, e a Coroa queria ficar com parte dele: o quinto era o imposto de 20% sobre o ouro extraído. Quando a arrecadação não atingia a meta, a derrama cobrava os atrasados à força, o que gerou revoltas como a Inconfidência Mineira.", [
    ["Quinto: imposto de 20% sobre o ouro", "20", "imposto", "ouro"],
    ["Derrama: cobrança forçada dos atrasados", "derrama", "atrasad", "forca", "cobranca"],
    ["Gerou revoltas (Inconfidência)", "inconfidencia", "revolta"],
  ]),
]);
extend(HISTORIA, "Era Vargas", [
  o("Por que Getúlio Vargas é chamado de \"pai dos pobres\" por uns e de ditador por outros?", "Ele criou leis trabalhistas (CLT, salário mínimo, férias) e ampliou a indústria, o que agradou aos trabalhadores. Mas no Estado Novo (1937–1945) fechou o Congresso, censurou a imprensa e perseguiu opositores.", [
    ["Direitos trabalhistas (CLT, salário mínimo)", "clt", "trabalhist", "salario minimo", "ferias"],
    ["Estado Novo foi uma ditadura", "estado novo", "ditadura", "1937"],
    ["Censura e perseguição", "censura", "persegu", "fechou o congresso"],
  ]),
]);
extend(HISTORIA, "Guerra Fria", [
  o("Por que a Guerra Fria recebeu esse nome?", "Porque EUA e URSS nunca guerrearam diretamente: a disputa foi ideológica (capitalismo × socialismo), econômica, tecnológica (corrida espacial e armamentista) e por meio de conflitos indiretos em outros países, como Coreia e Vietnã.", [
    ["Sem confronto direto entre EUA e URSS", "direto", "nunca", "sem guerra"],
    ["Disputa ideológica capitalismo × socialismo", "ideolog", "capitalismo", "socialismo"],
    ["Corrida armamentista/espacial e guerras indiretas", "corrida", "armament", "espacial", "coreia", "vietna", "indiret"],
  ]),
]);

// Geografia
extend(GEOGRAFIA, "Urbanização", [
  o("Por que as enchentes são mais frequentes nas grandes cidades?", "O asfalto e o concreto impermeabilizam o solo, então a água da chuva não infiltra e escorre rápido. Rios canalizados, lixo nos bueiros e ocupação das várzeas pioram o problema.", [
    ["Solo impermeabilizado", "impermeab", "asfalto", "concreto"],
    ["A água não infiltra e escorre", "infiltr", "escorre", "escoa"],
    ["Lixo, rios canalizados e ocupação de várzeas", "lixo", "bueiro", "canaliz", "varzea", "margens"],
  ]),
]);
extend(GEOGRAFIA, "Biomas brasileiros", [
  o("Por que o Cerrado é chamado de \"berço das águas\" e qual é sua principal ameaça?", "No Cerrado nascem rios de grandes bacias (São Francisco, Paraná, Tocantins) e ficam áreas de recarga de aquíferos. A principal ameaça é o desmatamento para a expansão da agropecuária, sobretudo soja e pecuária.", [
    ["Nascentes de grandes bacias", "nascente", "bacia", "rios"],
    ["Recarga de aquíferos", "aquifero", "recarga"],
    ["Ameaça: expansão agropecuária", "agro", "soja", "pecuaria", "desmat"],
  ]),
]);
extend(GEOGRAFIA, "Transição demográfica", [
  o("Quais desafios o envelhecimento da população traz para o Brasil?", "Com menos jovens e mais idosos, há mais aposentados para menos trabalhadores, o que pressiona a previdência. Também cresce a demanda por saúde e cuidados de longo prazo.", [
    ["Pressão sobre a previdência", "previdencia", "aposentad"],
    ["Mais demanda por saúde", "saude", "cuidado", "hospital"],
    ["Menos pessoas em idade de trabalhar", "menos trabalhador", "idade ativa", "trabalhar", "jovens"],
  ]),
]);
extend(GEOGRAFIA, "Conflitos e refugiados", [
  o("Qual a diferença entre um refugiado e um migrante econômico?", "O refugiado é forçado a deixar o país por perseguição (política, religiosa, étnica) ou guerra e tem proteção internacional. O migrante econômico sai por escolha, em busca de trabalho e renda melhores.", [
    ["Refugiado foge de perseguição ou guerra", "persegu", "guerra", "forcad", "fog"],
    ["Refugiado tem proteção internacional", "protecao", "acnur", "direito"],
    ["Migrante econômico busca trabalho/renda", "trabalho", "renda", "emprego", "escolha"],
  ]),
]);

// Português
extend(PORTUGUES, "Figuras de linguagem na prática", [
  o("Explique a diferença entre metáfora e comparação, com um exemplo de cada.", "As duas aproximam ideias por semelhança. A comparação usa um conectivo explícito (como, tal qual): \"Ela é forte como uma rocha\". A metáfora faz a aproximação direta, sem conectivo: \"Ela é uma rocha\".", [
    ["Ambas aproximam por semelhança", "semelhan", "aproxim", "parecid"],
    ["Comparação usa conectivo (como)", "como", "conectivo", "tal qual"],
    ["Metáfora é direta, sem conectivo", "direta", "sem conectivo", "sem o como", "implicit"],
  ]),
]);
extend(PORTUGUES, "Crase", [
  o("Explique por que se escreve \"Vou à escola\" mas \"Vou a pé\".", "Crase é a junção da preposição \"a\" (exigida por \"ir a\") com o artigo feminino \"a\". \"Escola\" é feminina e aceita artigo: a + a = à. \"Pé\" é masculino e não aceita o artigo \"a\", então só há a preposição.", [
    ["Crase = preposição + artigo", "preposicao", "artigo", "juncao", "fusao", "contração"],
    ["Escola é feminina e aceita artigo", "feminin", "escola"],
    ["Pé é masculino: só preposição", "masculin"],
  ]),
]);
extend(PORTUGUES, "Repertório e proposta de intervenção", [
  o("Escreva uma proposta de intervenção completa para o tema \"evasão escolar\".", "Exemplo: O Ministério da Educação (agente) deve ampliar bolsas de permanência e transporte escolar (ação), por meio de parceria com as prefeituras (meio), a fim de manter os jovens na escola (finalidade), priorizando as regiões com maior abandono (detalhamento).", [
    ["Agente (quem faz)", "ministerio", "governo", "escola", "estado", "prefeitura", "mec"],
    ["Ação e meio (o que e como)", "por meio", "atraves", "mediante", "ampliar", "criar", "investir"],
    ["Finalidade (para quê)", "a fim de", "para que", "com o objetivo", "visando"],
    ["Detalhamento", "priorizando", "por exemplo", "especialmente", "sobretudo"],
  ]),
]);
extend(PORTUGUES, "Romantismo", [
  o("Cite duas características da poesia ultrarromântica (mal do século).", "Pessimismo e tédio diante da vida, obsessão pela morte, subjetivismo exagerado, idealização da mulher amada (inatingível) e fuga da realidade pelo sonho ou pela noite.", [
    ["Pessimismo / tédio", "pessimis", "tedio", "melancol", "tristeza"],
    ["Obsessão pela morte", "morte", "morrer"],
    ["Idealização da mulher / do amor", "idealiz", "mulher", "amor"],
    ["Fuga da realidade (sonho, noite)", "fuga", "sonho", "noite", "evasao"],
  ]),
]);

// Inglês
extend(INGLES, "Present perfect", [
  o("Explique a diferença entre \"I lived in Rio\" e \"I have lived in Rio\".", "\"I lived in Rio\" (simple past) fala de algo terminado no passado: não moro mais lá. \"I have lived in Rio\" (present perfect) liga passado e presente: morei lá e ainda moro, ou a experiência importa agora.", [
    ["Simple past: ação terminada", "terminad", "acabou", "nao moro", "passado"],
    ["Present perfect liga passado e presente", "ainda", "presente", "ate hoje", "liga"],
    ["Nomeia os tempos verbais", "simple past", "present perfect"],
  ]),
]);
extend(INGLES, "Reading for ENEM", [
  o("Descreva uma boa estratégia para ler um texto em inglês no ENEM.", "Ler primeiro a pergunta para saber o que procurar; observar título, fonte, imagens e data; fazer uma leitura rápida para a ideia geral (skimming); depois procurar a informação pedida (scanning), aproveitando os cognatos.", [
    ["Ler a pergunta antes", "pergunta antes", "ler a pergunta", "primeiro a pergunta", "enunciado"],
    ["Observar título, fonte e imagens", "titulo", "fonte", "imagem"],
    ["Skimming e scanning", "skimming", "scanning", "ideia geral", "procurar"],
    ["Usar cognatos", "cognato", "parecid"],
  ]),
]);

// Filosofia
extend(FILOSOFIA, "Sócrates e Platão", [
  o("Explique o que o Mito da Caverna, de Platão, quer mostrar.", "Os prisioneiros só veem sombras e acham que elas são a realidade: são os que vivem pelas aparências e pela opinião. Quem sai da caverna chega à luz do sol, que representa o conhecimento verdadeiro (o mundo das ideias). Voltar para libertar os outros é o papel do filósofo, que costuma ser rejeitado.", [
    ["Sombras = aparências / opinião", "sombra", "aparencia", "opiniao", "ilusao"],
    ["Sair da caverna = conhecimento verdadeiro", "conhecimento", "verdade", "ideias", "luz"],
    ["Papel do filósofo de libertar os outros", "filosofo", "libertar", "voltar", "educa"],
  ]),
]);
extend(FILOSOFIA, "Contratualistas", [
  o("Compare o estado de natureza em Hobbes e em Rousseau.", "Para Hobbes, no estado de natureza há guerra de todos contra todos, pois o homem é egoísta e movido pelo medo; por isso é preciso um Estado forte. Para Rousseau, o homem nasce bom e livre, e é a sociedade (com a propriedade) que o corrompe.", [
    ["Hobbes: guerra de todos contra todos", "guerra", "todos contra", "lobo"],
    ["Hobbes defende um Estado forte", "estado forte", "absolut", "soberano", "leviata"],
    ["Rousseau: o homem nasce bom", "bom", "bondade"],
    ["Rousseau: a sociedade corrompe", "corromp", "sociedade", "propriedade"],
  ]),
]);

// Sociologia
extend(SOCIOLOGIA, "Durkheim", [
  o("O que é fato social para Durkheim? Dê um exemplo.", "É um modo de agir, pensar ou sentir que existe fora do indivíduo (exterior), se impõe a ele (coercitivo) e vale para a maioria (geral). Exemplos: a língua, as leis, a moda, a obrigação de ir à escola.", [
    ["Exterior ao indivíduo", "exterior"],
    ["Coercitivo (se impõe)", "coerc", "impoe", "obriga"],
    ["Geral (coletivo)", "geral", "coletiv", "maioria"],
    ["Dá um exemplo", "lingua", "lei", "moda", "escola", "religiao", "exemplo"],
  ]),
]);
extend(SOCIOLOGIA, "Indústria cultural e mídia", [
  o("Como as bolhas de filtro das redes sociais afetam o debate público?", "Os algoritmos mostram principalmente conteúdos que confirmam o que já pensamos. Isso reduz o contato com opiniões diferentes, reforça crenças, facilita a desinformação e aumenta a polarização.", [
    ["Algoritmos mostram o que confirma nossas ideias", "algoritmo", "confirma", "mesm"],
    ["Menos contato com opiniões diferentes", "diferente", "contrari", "divers"],
    ["Polarização e desinformação", "polariz", "fake", "desinforma"],
  ]),
]);
