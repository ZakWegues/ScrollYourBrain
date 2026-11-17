import { BIOLOGIA } from "./natureza-humanas";
import { extend, m, o, q, qe } from "./pack";

/* Biologia, 2ª leva: questões diretas e no estilo ENEM (situação, dado ou experimento + pergunta). Chave "n". */

extend(BIOLOGIA, "Bioquímica", [
  q("As enzimas são, em sua maioria:", ["Proteínas", "Lipídios de reserva", "Sais minerais", "Açúcares simples"], 0, "Proteínas que aceleram reações; cada uma tem um encaixe específico (chave-fechadura)."),
  q("O amido é a principal reserva de energia:", ["Das plantas", "Dos animais", "Dos fungos", "Das bactérias"], 0, "Nos animais e fungos, a reserva de carboidrato é o glicogênio."),
  q("A água é importante para a vida porque:", ["Dissolve muitas substâncias", "Não participa de nenhuma reação", "Está como gás dentro do corpo", "Não consegue conduzir o calor"], 0, "Solvente universal, transporta substâncias e ajuda a manter a temperatura."),
  q("A falta de ferro na alimentação pode causar:", ["Anemia", "Escorbuto", "Bócio", "Raquitismo"], 0, "O ferro faz parte da hemoglobina. Bócio vem da falta de iodo."),
  qe("Ao aquecer um ovo, a clara endurece e não volta a ser líquida.", "Isso acontece porque as proteínas:", ["Sofrem desnaturação", "Viram açúcar", "Se dissolvem na água", "Se transformam em gordura"], 0, "O calor desfaz a forma espacial das proteínas, que perdem a função e coagulam."),
  qe("Atletas de longa distância comem massas na véspera da prova.", "O objetivo é aumentar a reserva de:", ["Glicogênio", "Proteína", "Vitamina C", "Colesterol"], 0, "Carboidratos são armazenados como glicogênio no fígado e nos músculos, fonte rápida de energia."),
  qe("O raquitismo, com ossos fracos em crianças, é ligado à falta de vitamina D.", "Uma forma natural de obter vitamina D é:", ["Tomar sol com moderação", "Beber apenas água o dia todo", "Comer somente açúcar refinado", "Evitar qualquer tipo de alimento"], 0, "A pele produz vitamina D com a luz solar; ela ajuda a absorver cálcio."),
  qe("Um suco de mamão amacia a carne antes do preparo.", "Isso ocorre porque o mamão tem uma enzima que:", ["Quebra proteínas", "Produz gordura", "Faz fotossíntese", "Cria açúcar"], 0, "A papaína digere proteínas da carne, deixando-a macia."),
  q("Os lipídios incluem:", ["Óleos, gorduras e ceras", "Amido e celulose das plantas", "DNA e RNA do núcleo celular", "Enzimas e anticorpos do sangue"], 0, "Insolúveis em água; reserva de energia, membranas e hormônios."),
  m("Marque os pares nutriente → função corretos:", ["Carboidrato: energia rápida", "Proteína: construção de tecidos", "Cálcio: ossos e dentes", "Vitamina C: coagulação", "Ferro: visão noturna"], [0, 1, 2], "Vitamina C: colágeno e defesa; ferro: hemoglobina."),
  m("Marque as moléculas que são proteínas:", ["Hemoglobina", "Insulina", "Anticorpos", "Celulose", "Glicose"], [0, 1, 2], "Celulose e glicose são carboidratos."),
  o("Explique por que as enzimas param de funcionar com febre muito alta.", "Enzimas são proteínas com forma espacial específica, que se encaixa no substrato. Temperaturas muito altas desfazem essa forma (desnaturação). Sem o encaixe, a enzima perde a função e as reações do corpo ficam comprometidas.", [
    ["Enzimas são proteínas com forma específica", "proteina", "forma", "encaixe"],
    ["Calor causa desnaturação", "desnatur", "deforma", "perde a forma"],
    ["Perdem a função", "funcao", "param", "nao funciona"],
  ]),
], "n");

extend(BIOLOGIA, "Citologia", [
  q("A teoria celular afirma que:", ["Todo ser vivo tem células", "Só os animais têm células", "Vírus são células completas", "Células surgem do nada no ar"], 0, "Células vêm de outras células e são a unidade da vida."),
  q("Qual estrutura existe em células vegetais e não em animais?", ["Parede de celulose", "Membrana plasmática", "Ribossomo", "Mitocôndria"], 0, "Também o cloroplasto e o grande vacúolo."),
  q("Bactérias são células:", ["Procariontes", "Eucariontes", "Vegetais", "Sem material genético"], 0, "Não têm núcleo organizado (sem carioteca)."),
  q("O núcleo da célula guarda principalmente:", ["O material genético", "A reserva de amido", "As enzimas digestivas", "A clorofila"], 0, "Contém o DNA, que controla a célula."),
  qe("Um microscópio mostra células com parede celular, cloroplastos e um grande vacúolo.", "As células são de:", ["Uma planta", "Um animal", "Uma bactéria", "Um vírus"], 0, "Essas três estruturas são típicas de células vegetais."),
  qe("Robert Hooke, em 1665, viu 'pequenas celas' ao observar cortiça no microscópio.", "O que ele viu eram:", ["Paredes de células mortas", "Bactérias vivas se movendo", "Núcleos cheios de DNA", "Vírus que atacam a cortiça"], 0, "A cortiça é tecido vegetal morto: Hooke viu as paredes celulares e cunhou o termo 'célula'."),
  qe("Hemácias de mamíferos não têm núcleo quando maduras.", "Isso permite que elas:", ["Levem mais hemoglobina", "Se dividam bem mais rápido", "Façam fotossíntese no sangue", "Produzam anticorpos sozinhas"], 0, "Sem núcleo, sobra mais espaço para hemoglobina e o transporte de O₂."),
  qe("O transporte ativo leva substâncias para dentro da célula contra a diferença de concentração.", "Esse transporte exige:", ["Gasto de energia (ATP)", "Nenhum gasto de energia", "Ausência de membrana", "Presença de parede celular"], 0, "Ex.: bomba de sódio e potássio, que gasta ATP."),
  q("A difusão simples é o movimento de substâncias:", ["Do mais concentrado para o menos", "Do menos concentrado para o mais", "Sempre com gasto de ATP", "Só em células vegetais"], 0, "Ocorre a favor do gradiente, sem gasto de energia (ex.: O₂ e CO₂)."),
  m("Marque as estruturas presentes em células animais:", ["Membrana plasmática", "Mitocôndrias", "Núcleo", "Parede de celulose", "Cloroplastos"], [0, 1, 2], "Parede e cloroplastos são de células vegetais."),
  m("Marque as afirmações corretas sobre a membrana plasmática:", ["É formada principalmente por lipídios e proteínas", "É seletivamente permeável", "Controla entradas e saídas", "É rígida como madeira", "Só existe em plantas"], [0, 1, 2], "É flexível (mosaico fluido) e existe em todas as células."),
], "n");

extend(BIOLOGIA, "Divisão celular", [
  q("A fase da divisão em que as cromátides-irmãs se separam é a:", ["Anáfase", "Prófase", "Metáfase", "Telófase"], 0, "As fibras do fuso puxam as cromátides para polos opostos."),
  q("A meiose reduz o número de cromossomos na:", ["Meiose I", "Meiose II", "Interfase", "Citocinese"], 0, "Na meiose I os homólogos se separam; na II, as cromátides."),
  q("A mitose ocorre em:", ["Células do corpo", "Apenas nos gametas sexuais", "Somente em bactérias", "Só nas hemácias maduras"], 0, "Serve para crescer, repor e regenerar."),
  q("Células que se dividem sem controle podem formar:", ["Tumores", "Gametas", "Tecido de cicatriz normal", "Vitaminas"], 0, "Mutações em genes do ciclo celular levam ao câncer."),
  qe("Após um corte na pele, a ferida fecha em alguns dias.", "O processo de divisão responsável é a:", ["Mitose", "Meiose", "Fecundação", "Fotossíntese"], 0, "Células da pele se multiplicam por mitose, regenerando o tecido."),
  qe("Uma célula com 2n = 12 passa por mitose.", "Quantos cromossomos tem cada célula-filha?", ["12", "6", "24", "3"], 0, "A mitose mantém o número de cromossomos."),
  qe("A síndrome de Down é causada, na maioria dos casos, por um cromossomo 21 a mais.", "Esse erro geralmente ocorre na:", ["Meiose", "Digestão de proteínas", "Respiração celular", "Fotossíntese das plantas"], 0, "Uma não disjunção na meiose gera gameta com 24 cromossomos; o zigoto fica com 47."),
  qe("Muitas quimioterapias atacam células que se dividem rápido.", "Por isso, efeitos colaterais comuns incluem:", ["Queda de cabelo", "Aumento da visão", "Ganho de altura", "Melhora da memória"], 0, "Células do folículo capilar e do intestino também se dividem rápido e são afetadas."),
  q("A variabilidade genética da meiose vem de:", ["Crossing-over e acaso", "Cópia exata de todo o DNA", "Divisão simples por fissão", "Perda completa do núcleo"], 0, "Recombinação e combinação ao acaso dos cromossomos geram gametas diferentes."),
  m("Marque as diferenças corretas entre mitose e meiose:", ["Mitose gera 2 células; meiose, 4", "Mitose mantém o número; meiose reduz", "Meiose forma gametas", "Mitose gera variabilidade por crossing-over", "Meiose ocorre na pele"], [0, 1, 2], "Crossing-over é da meiose; a pele se renova por mitose."),
  m("Marque os eventos da interfase:", ["Duplicação do DNA", "Crescimento da célula", "Síntese de proteínas", "Separação das cromátides", "Alinhamento na placa equatorial"], [0, 1, 2], "Separação e alinhamento ocorrem durante a mitose."),
  o("Explique por que a meiose é importante para a reprodução sexuada.", "A meiose forma gametas com metade dos cromossomos (n). Na fecundação, dois gametas se unem e o zigoto volta a ter o número normal (2n), mantendo o número da espécie. Além disso, o crossing-over e a separação ao acaso geram variabilidade genética.", [
    ["Gametas com metade dos cromossomos", "metade", "haploide"],
    ["Mantém o número na fecundação", "fecundac", "mantem", "2n", "zigoto"],
    ["Gera variabilidade", "variabilidade", "crossing", "diferente"],
  ]),
], "n");

extend(BIOLOGIA, "Histologia e embriologia", [
  q("O tecido adiposo armazena:", ["Gordura", "Cálcio", "Oxigênio", "Hemoglobina"], 0, "Também isola o calor e protege órgãos."),
  q("O tecido ósseo é rico em:", ["Cálcio e fosfato", "Gordura e muita água", "Clorofila e amido", "Hemoglobina e ferro"], 0, "Sais de cálcio dão rigidez; o colágeno dá resistência."),
  q("O músculo liso tem contração:", ["Involuntária e lenta", "Voluntária e rápida", "Voluntária e lenta", "Igual à do coração"], 0, "Está no intestino, estômago e vasos sanguíneos."),
  q("A fecundação humana normalmente ocorre:", ["Na tuba uterina", "No interior do útero", "Dentro do ovário", "No canal da vagina"], 0, "O zigoto segue para o útero, onde se implanta."),
  qe("Atletas de força aumentam o volume muscular após meses de treino.", "Esse aumento ocorre principalmente porque as fibras musculares:", ["Ficam mais grossas", "Se transformam em ossos", "Viram gordura", "Perdem proteínas"], 0, "Hipertrofia: as fibras acumulam mais proteínas contráteis."),
  qe("Os gêmeos univitelinos são geneticamente idênticos.", "Eles se formam quando:", ["Um zigoto se divide em dois embriões", "Dois óvulos são fecundados", "Dois espermatozoides fecundam um óvulo", "O embrião recebe DNA da mãe"], 0, "Gêmeos fraternos vêm de dois óvulos fecundados por espermatozoides diferentes."),
  qe("A placenta liga a mãe ao feto durante a gestação.", "Uma de suas funções é:", ["Trocar nutrientes e gases", "Produzir os ossos do feto", "Fazer o feto respirar ar", "Impedir todas as substâncias"], 0, "Pela placenta passam O₂ e nutrientes; álcool e drogas também podem passar."),
  qe("O tecido nervoso é formado por neurônios e células da glia.", "As células da glia:", ["Apoiam os neurônios", "Conduzem o sangue pelo corpo", "Produzem os hormônios sexuais", "Fazem a digestão dos alimentos"], 0, "Dão suporte, isolamento (mielina) e defesa aos neurônios."),
  q("A cartilagem é encontrada:", ["Na orelha e no nariz", "Nos dentes e nas unhas", "Somente nos pulmões", "No sangue e na linfa"], 0, "Tecido conjuntivo flexível, também nas articulações."),
  m("Marque os tipos de tecido conjuntivo:", ["Ósseo", "Sanguíneo", "Adiposo", "Nervoso", "Epitelial"], [0, 1, 2], "Nervoso e epitelial são tecidos próprios."),
  m("Marque as funções do tecido epitelial:", ["Revestir o corpo", "Formar glândulas", "Proteger contra perda de água", "Contrair os músculos", "Conduzir impulsos nervosos"], [0, 1, 2], "Contração é do muscular; impulsos, do nervoso."),
], "n");

extend(BIOLOGIA, "Vírus, bactérias, protistas e fungos", [
  q("Os fungos se alimentam por:", ["Absorção", "Fotossíntese nas folhas", "Fagocitose de presas grandes", "Quimiossíntese em rochas"], 0, "Liberam enzimas no meio e absorvem os nutrientes."),
  q("O cogumelo que comemos é:", ["O corpo de frutificação", "Uma planta sem flores nem folhas", "Uma bactéria gigante do solo", "Uma alga marrom de água doce"], 0, "A maior parte do fungo fica no solo como micélio."),
  q("Os protozoários são:", ["Eucariontes unicelulares", "Procariontes sem núcleo", "Vírus de tamanho grande", "Plantas muito pequenas"], 0, "Ex.: ameba, plasmódio, tripanossomo."),
  q("A penicilina, primeiro antibiótico, foi obtida de um:", ["Fungo", "Vírus", "Protozoário", "Peixe"], 0, "Fleming notou que o fungo Penicillium matava bactérias (1928)."),
  qe("Leveduras são usadas para fazer pão crescer.", "Elas produzem gás carbônico por meio da:", ["Fermentação", "Fotossíntese", "Respiração das plantas", "Digestão humana"], 0, "As leveduras (fungos) fermentam açúcares e liberam CO₂."),
  qe("A doença de Chagas é transmitida pelas fezes do inseto barbeiro.", "O causador da doença é um:", ["Protozoário", "Vírus de RNA", "Fungo do solo", "Verme intestinal"], 0, "Trypanosoma cruzi."),
  qe("Os vírus da gripe mudam com frequência, e a vacina é atualizada todo ano.", "Isso acontece porque os vírus:", ["Sofrem mutações rápidas", "Viram bactérias", "Desaparecem no verão", "Ficam mais fracos sempre"], 0, "Mutações alteram as proteínas do vírus; o sistema imune deixa de reconhecê-lo."),
  qe("Bactérias decompositoras transformam restos de animais e plantas em sais minerais.", "Esse papel é importante porque:", ["Recicla nutrientes", "Aumenta a poluição", "Destrói o solo", "Impede o crescimento das plantas"], 0, "Sem decompositores, a matéria não voltaria ao ambiente."),
  q("O micoses, como o pé de atleta, são causadas por:", ["Fungos", "Vírus", "Bactérias", "Vermes"], 0, "Fungos se desenvolvem em locais úmidos e quentes."),
  m("Marque as doenças causadas por protozoários:", ["Malária", "Doença de Chagas", "Toxoplasmose", "Gripe", "Tuberculose"], [0, 1, 2], "Gripe é viral; tuberculose, bacteriana."),
  m("Marque usos benéficos de micro-organismos:", ["Fermentar pão", "Produzir iogurte", "Decompor matéria orgânica", "Causar cárie", "Estragar alimentos"], [0, 1, 2], "Cárie e alimentos estragados são efeitos indesejados."),
], "n");

extend(BIOLOGIA, "Botânica", [
  q("A fotossíntese ocorre principalmente nas:", ["Folhas", "Raízes", "Sementes", "Flores"], 0, "Folhas têm muitos cloroplastos e estômatos."),
  q("A raiz tem como funções principais:", ["Fixar a planta e absorver água", "Fazer a maior parte da fotossíntese", "Produzir as flores", "Liberar o oxigênio"], 0, "Também pode armazenar reservas (cenoura, mandioca)."),
  q("A polinização é o transporte do:", ["Pólen até o estigma", "Fruto até o solo", "Óvulo até o pólen", "Néctar até a raiz"], 0, "Pode ser feita por insetos, aves, vento ou água."),
  q("O floema transporta:", ["Seiva elaborada", "Água e sais", "Gás oxigênio", "Grãos de pólen"], 0, "Açúcares produzidos nas folhas vão para o resto da planta."),
  qe("Plantas colocadas perto de uma janela crescem curvadas em direção à luz.", "Esse movimento é chamado de:", ["Fototropismo", "Geotropismo", "Tigmotropismo", "Fotoperiodismo"], 0, "A auxina se acumula no lado sombreado, que cresce mais e curva o caule para a luz."),
  qe("Agricultores plantam leguminosas (feijão, soja) para enriquecer o solo.", "Isso ocorre graças a bactérias nas raízes que:", ["Fixam nitrogênio do ar", "Produzem gás carbônico", "Fazem fotossíntese", "Absorvem o fósforo"], 0, "Rizóbios transformam N₂ em compostos que as plantas usam."),
  qe("Cactos têm espinhos no lugar de folhas e caule verde e grosso.", "Essas adaptações ajudam a:", ["Reduzir a perda de água", "Aumentar a transpiração", "Atrair polinizadores", "Absorver mais sal"], 0, "Menos superfície de folha = menos transpiração; o caule armazena água e faz fotossíntese."),
  qe("Bananas verdes amadurecem mais rápido quando embrulhadas em jornal junto de uma banana madura.", "O responsável é o gás:", ["Etileno", "Oxigênio", "Nitrogênio", "Hélio"], 0, "O etileno é um hormônio vegetal que acelera o amadurecimento."),
  q("As sementes servem para:", ["Proteger e espalhar o embrião", "Fazer fotossíntese no solo", "Absorver água do solo", "Produzir o pólen da flor"], 0, "Contêm o embrião e reservas para a germinação."),
  m("Marque os agentes polinizadores:", ["Abelhas", "Beija-flores", "Vento", "Raízes", "Pedras"], [0, 1, 2], "Raízes e pedras não transportam pólen."),
  m("Marque os fatores necessários para a fotossíntese:", ["Luz", "Água", "Gás carbônico", "Oxigênio do solo", "Escuridão total"], [0, 1, 2], "A fotossíntese libera O₂ e precisa de luz."),
  o("Explique por que a fotossíntese é importante para quase toda a vida na Terra.", "Na fotossíntese, as plantas e algas usam a luz para transformar gás carbônico e água em glicose, liberando oxigênio. A glicose é a base das cadeias alimentares, e o oxigênio é usado na respiração dos seres vivos. Ela também retira CO₂ da atmosfera.", [
    ["Produz glicose / alimento", "glicose", "alimento", "materia organica", "acucar"],
    ["Libera oxigênio", "oxigenio", "o2"],
    ["Base das cadeias / retira CO₂", "cadeia", "co2", "gas carbonico"],
  ]),
], "n");

extend(BIOLOGIA, "Zoologia", [
  q("Os répteis têm a pele:", ["Seca e com escamas", "Úmida e lisa", "Coberta de penas", "Coberta de pelos"], 0, "Pele com queratina, que evita a perda de água."),
  q("O ovo com casca dos répteis e aves foi uma adaptação para:", ["Reproduzir fora da água", "Nadar melhor", "Respirar debaixo d'água", "Voar mais longe"], 0, "O ovo amniótico protege o embrião contra a desidratação."),
  q("As aves têm ossos:", ["Leves e ocos", "Maciços e muito pesados", "Feitos só de cartilagem", "Sem nenhum cálcio"], 0, "Ossos pneumáticos reduzem o peso e ajudam no voo."),
  q("Os cnidários, como as águas-vivas, têm:", ["Células urticantes", "Coluna vertebral flexível", "Pulmões bem desenvolvidos", "Penas e um bico curvo"], 0, "Os cnidócitos injetam toxinas para captura e defesa."),
  qe("Baleias vivem no mar, mas sobem à superfície para respirar.", "Isso acontece porque elas:", ["São mamíferos com pulmões", "São peixes com brânquias", "São répteis marinhos", "Não precisam de oxigênio"], 0, "Baleias respiram ar pelos pulmões, como todo mamífero."),
  qe("O ornitorrinco bota ovos, mas amamenta os filhotes.", "Ele é classificado como:", ["Mamífero", "Ave aquática", "Réptil com pelos", "Anfíbio de água doce"], 0, "É um monotremado: mamífero (tem pelos e mamas) que põe ovos."),
  qe("Sapos dependem de ambientes úmidos para se reproduzir.", "A dependência ocorre porque:", ["Ovos e girinos ficam na água", "Eles não têm nenhum tipo de pulmão", "Comem apenas algas e plantas aquáticas", "Têm a pele coberta de escamas secas"], 0, "Os ovos não têm casca e os girinos respiram por brânquias."),
  qe("Uma borboleta passa por ovo, lagarta, pupa e adulto.", "Esse tipo de desenvolvimento se chama:", ["Metamorfose completa", "Desenvolvimento direto", "Metamorfose incompleta", "Regeneração"], 0, "Holometabolia: lagarta e adulto são muito diferentes."),
  q("Os artrópodes têm:", ["Exoesqueleto e patas articuladas", "Esqueleto interno feito de osso", "Corpo mole, sem patas nem casca", "Penas, bico e ossos ocos"], 0, "Insetos, aranhas, crustáceos: o maior filo animal."),
  m("Marque os mamíferos:", ["Morcego", "Golfinho", "Ser humano", "Tubarão", "Pinguim"], [0, 1, 2], "Tubarão é peixe; pinguim é ave."),
  m("Marque os artrópodes:", ["Aranha", "Camarão", "Formiga", "Minhoca", "Caracol"], [0, 1, 2], "Minhoca é anelídeo; caracol, molusco."),
], "n");

extend(BIOLOGIA, "Fisiologia humana", [
  q("A troca de gases na respiração ocorre:", ["Nos alvéolos", "Na traqueia", "No esôfago", "Na laringe"], 0, "O O₂ passa para o sangue e o CO₂ sai, por difusão."),
  q("O coração humano tem:", ["4 cavidades", "2 cavidades", "3 cavidades", "6 cavidades"], 0, "Dois átrios e dois ventrículos."),
  q("O pâncreas produz:", ["Insulina e enzimas", "Bile para as gorduras", "Saliva para o amido", "Adrenalina para o susto"], 0, "É glândula endócrina (insulina, glucagon) e exócrina (enzimas digestivas)."),
  q("O diafragma, ao contrair, provoca:", ["A entrada de ar", "A saída de ar dos pulmões", "A digestão dos alimentos", "O batimento do coração"], 0, "Ele desce, o tórax aumenta e o ar entra (inspiração)."),
  qe("Ao subir uma montanha muito alta, a respiração fica ofegante.", "Isso ocorre porque, na altitude:", ["Há menos oxigênio por fôlego", "O ar tem mais oxigênio que no mar", "O coração para de bater por instantes", "Os pulmões encolhem com o frio"], 0, "A pressão do ar é menor e cada respiração traz menos O₂."),
  qe("Após exercício intenso, sentimos sede e urinamos menos.", "O hormônio que faz os rins economizarem água é o:", ["ADH", "Insulina", "Adrenalina", "Tiroxina"], 0, "O ADH aumenta a reabsorção de água nos rins."),
  qe("Pessoas com diabetes tipo 1 não produzem insulina.", "Sem tratamento, a glicose no sangue:", ["Fica alta", "Fica baixa demais", "Desaparece", "Vira proteína"], 0, "Sem insulina, a glicose não entra nas células e se acumula no sangue."),
  qe("O fumo destrói os cílios das vias respiratórias.", "Com isso, a pessoa fica mais sujeita a:", ["Infecções e catarro", "Melhora geral da respiração", "Ganho de fôlego nos esportes", "Diminuição da tosse e do muco"], 0, "Os cílios varrem impurezas e muco; sem eles, a limpeza falha."),
  q("O sistema linfático ajuda a:", ["Defender e drenar", "Produzir a bile do fígado", "Fazer a fotossíntese no corpo", "Controlar a visão de perto"], 0, "Linfonodos filtram a linfa e abrigam células de defesa."),
  m("Marque os órgãos do sistema respiratório:", ["Traqueia", "Brônquios", "Pulmões", "Estômago", "Rins"], [0, 1, 2], "Estômago é digestório; rins, urinário."),
  m("Marque as funções dos rins:", ["Filtrar o sangue", "Formar a urina", "Regular a água do corpo", "Produzir bile", "Digerir proteínas"], [0, 1, 2], "Bile é do fígado; digestão de proteínas, estômago e intestino."),
], "n");

extend(BIOLOGIA, "Genética mendeliana", [
  q("Genótipo é:", ["A composição genética", "A aparência do indivíduo", "O ambiente onde ele vive", "A idade do organismo todo"], 0, "Ex.: Aa. Fenótipo é a característica observável (cor, altura)."),
  q("Um indivíduo homozigoto recessivo é representado por:", ["Dois recessivos (aa)", "Dois dominantes (AA)", "Um de cada (Aa)", "Um alelo só (a)"], 0, "Dois alelos recessivos iguais."),
  q("A 1ª lei de Mendel diz que cada característica é determinada por:", ["Um par de fatores que se separam", "Um único fator que nunca se separa", "Vários genes que se misturam no filho", "O ambiente, sem nenhum fator herdado"], 0, "Os fatores (alelos) se separam na formação dos gametas: cada gameta leva um."),
  q("O cruzamento-teste usa um indivíduo:", ["Homozigoto recessivo", "Homozigoto dominante", "Heterozigoto", "Sem genes"], 0, "Cruza-se com aa para revelar se o dominante é AA ou Aa."),
  qe("Mendel cruzou ervilhas amarelas puras (VV) com verdes (vv); toda a 1ª geração foi amarela.", "Isso mostra que o amarelo é:", ["Dominante", "Recessivo", "Codominante", "Ligado ao sexo"], 0, "Os filhos Vv mostram só o amarelo: o alelo V domina o v."),
  qe("Dois pais heterozigotos (Aa) para uma doença recessiva têm um filho.", "Qual a chance de o filho ter a doença?", ["25%", "50%", "75%", "0%"], 0, "Só o aa é afetado: 1 em 4."),
  qe("Na flor maravilha, vermelha (VV) × branca (BB) dá filhos rosa (VB).", "Esse é um caso de:", ["Dominância incompleta", "Dominância completa", "Alelos letais", "Herança ligada ao X"], 0, "O heterozigoto tem fenótipo intermediário."),
  qe("Um casal de olhos castanhos (Aa × Aa) quer saber a chance de um filho de olhos castanhos.", "A chance é:", ["3/4", "1/4", "1/2", "1"], 0, "AA, Aa, Aa = 3 de 4 com olhos castanhos."),
  q("Alelos são:", ["Formas de um mesmo gene", "Cromossomos inteiros pareados", "Proteínas presentes no sangue", "Células sexuais já maduras"], 0, "Ocupam o mesmo locus em cromossomos homólogos."),
  m("No cruzamento Aa × aa, marque as corretas:", ["50% heterozigotos (Aa)", "50% homozigotos recessivos", "É um cruzamento-teste", "25% homozigotos dominantes", "100% dos filhos recessivos"], [0, 1, 2], "Aa × aa não gera AA."),
  m("Marque os pares termo → definição corretos:", ["Fenótipo: característica visível", "Homozigoto: alelos iguais", "Heterozigoto: alelos diferentes", "Genótipo: cor dos olhos", "Recessivo: sempre aparece"], [0, 1, 2], "Cor dos olhos é fenótipo; o recessivo só aparece em dose dupla."),
  o("Explique por que dois pais sem uma doença recessiva podem ter um filho com ela.", "Os pais podem ser heterozigotos (Aa): têm o alelo recessivo, mas não manifestam a doença. Se cada um passar o alelo a para o filho, ele será aa e terá a doença. A chance é de 1/4 em cada gestação.", [
    ["Pais heterozigotos / portadores", "heterozig", "portador"],
    ["Cada um passa o alelo recessivo", "cada um", "passa", "recessivo"],
    ["Chance de 1/4", "1/4", "25%"],
  ]),
], "n");

extend(BIOLOGIA, "Genética molecular e biotecnologia", [
  q("A técnica PCR serve para:", ["Copiar muitas vezes um trecho de DNA", "Destruir todo o DNA presente na amostra", "Produzir proteínas sem nenhum molde", "Ver células vivas no microscópio comum"], 0, "Multiplica o DNA para testes de covid, paternidade e investigação."),
  q("O exame de DNA em investigação criminal compara:", ["Trechos variáveis do DNA", "A cor do sangue", "O tipo sanguíneo apenas", "As impressões dos sapatos"], 0, "Cada pessoa tem um padrão próprio (exceto gêmeos idênticos)."),
  q("Células-tronco são valiosas porque:", ["Originam vários tipos de células", "São idênticas às hemácias do sangue", "Não se dividem em nenhuma situação", "Não possuem núcleo nem material genético"], 0, "Têm potencial para regenerar tecidos."),
  q("Terapia gênica busca:", ["Corrigir genes defeituosos", "Criar vírus totalmente novos", "Retirar todo o DNA da célula", "Mudar o tipo sanguíneo da pessoa"], 0, "Insere ou edita genes para tratar doenças."),
  qe("A insulina usada por diabéticos hoje é produzida por bactérias geneticamente modificadas.", "Essas bactérias produzem insulina porque:", ["Receberam o gene humano da insulina", "Comem açúcar em excesso no meio de cultura", "São células retiradas do pâncreas humano", "Foram vacinadas contra o diabetes antes"], 0, "Com o gene humano inserido, a bactéria fabrica a proteína."),
  qe("O milho Bt recebeu um gene de bactéria que produz uma toxina contra lagartas.", "Uma vantagem dessa tecnologia é:", ["Reduzir o uso de inseticidas", "Acabar com todas as pragas", "Eliminar a fotossíntese", "Aumentar a erosão do solo"], 0, "A planta se defende; críticos citam riscos de resistência das pragas e impactos ambientais."),
  qe("A técnica CRISPR permite cortar o DNA em pontos precisos.", "Ela é usada principalmente para:", ["Editar genes", "Contar células", "Medir a pressão", "Fazer vacinas de gripe"], 0, "Funciona como uma 'tesoura molecular' guiada por RNA."),
  qe("Um exame de paternidade compara o DNA do filho com o da mãe e o do suposto pai.", "Metade das bandas do filho deve coincidir com:", ["O pai biológico", "Um irmão qualquer", "Um vizinho", "Nenhum dos pais"], 0, "O filho herda metade do material genético de cada genitor."),
  q("Organismo transgênico é aquele que:", ["Recebeu gene de outra espécie", "É um clone exato de outro indivíduo", "Não possui DNA em suas células", "Consegue viver totalmente sem água"], 0, "Ex.: bactérias com gene humano de insulina."),
  m("Marque aplicações da biotecnologia:", ["Produção de insulina por bactérias", "Testes de DNA", "Plantas resistentes a pragas", "Fabricação de vidro", "Produção de aço"], [0, 1, 2], "Vidro e aço não são biotecnologia."),
  m("Marque as afirmações corretas sobre clonagem:", ["Gera indivíduos geneticamente iguais", "A ovelha Dolly foi um clone", "Gêmeos idênticos são clones naturais", "Clones têm DNA diferente", "Clonagem é igual a transgenia"], [0, 1, 2], "Clones têm o mesmo DNA; transgenia insere gene de outra espécie."),
], "n");

extend(BIOLOGIA, "Evolução", [
  q("A evolução das espécies acontece ao longo de:", ["Muitas gerações", "Um único dia", "A vida de um indivíduo", "Um só ano sempre"], 0, "Populações mudam gradualmente com o tempo."),
  q("Órgãos análogos, como a asa da borboleta e a do morcego, têm:", ["Mesma função, origem diferente", "A mesma origem embrionária e o mesmo plano", "Exatamente a mesma sequência de DNA", "Nenhuma função no corpo do animal"], 0, "Resultam de convergência evolutiva, não de ancestral comum próximo."),
  q("A mutação é importante para a evolução porque:", ["Gera novas variações", "Impede qualquer mudança", "Elimina a seleção natural", "Ocorre só em vírus"], 0, "É a fonte primária de variabilidade genética."),
  q("Deriva genética é a mudança nas frequências gênicas por:", ["Acaso, em populações pequenas", "Escolha consciente do indivíduo", "Força de vontade dos organismos", "Uso repetido de um órgão do corpo"], 0, "Ex.: um desastre que mata indivíduos ao acaso."),
  qe("Mariposas claras eram comuns na Inglaterra. Com a poluição das fábricas, os troncos escureceram e as escuras ficaram mais comuns.", "O fenômeno exemplifica:", ["Seleção natural", "Uso e desuso", "Geração espontânea", "Criação recente"], 0, "As escuras ficaram camufladas e sobreviveram mais aos predadores."),
  qe("Os tentilhões de Galápagos têm bicos diferentes conforme o alimento de cada ilha.", "Darwin explicou essa variação por:", ["Seleção dos bicos mais adequados", "Esforço dos pássaros para alongar o bico", "Acaso, sem nenhum efeito do ambiente", "Mistura frequente com aves do continente"], 0, "Bicos adequados ao alimento local deram vantagem e se espalharam."),
  qe("O apêndice humano é considerado por muitos um órgão vestigial.", "Órgãos vestigiais são evidências de:", ["Ancestrais com o órgão funcional", "Criação recente e separada das espécies", "Que o órgão ainda vai crescer muito", "Mutações que surgiram no último século"], 0, "Restos de estruturas que tinham função maior em ancestrais."),
  qe("Insetos resistentes a um inseticida se multiplicam após anos de uso do produto.", "Segundo o neodarwinismo, a resistência:", ["Já existia e foi selecionada", "Foi criada pelo inseticida", "Foi aprendida pelos insetos", "Surgiu por uso e desuso"], 0, "Alguns já tinham mutações de resistência; o veneno matou os outros."),
  q("Um fóssil é:", ["Vestígio preservado de ser antigo", "Um ser vivo atual que vive em cavernas", "Um tipo de rocha formada por vulcões", "Uma bactéria viva encontrada no solo"], 0, "Permite reconstruir a história da vida."),
  m("Marque as evidências da evolução:", ["Fósseis", "Órgãos homólogos", "Semelhanças no DNA", "Mitos de criação", "Horóscopo"], [0, 1, 2], "Mitos e horóscopo não são evidências científicas."),
  m("Marque fatores evolutivos:", ["Mutação", "Seleção natural", "Migração (fluxo gênico)", "Força de vontade", "Uso e desuso"], [0, 1, 2], "Vontade e uso e desuso não alteram o DNA dos descendentes."),
], "n");

extend(BIOLOGIA, "Ecologia", [
  q("Nicho ecológico é:", ["O papel da espécie no ambiente", "O endereço onde a espécie vive", "O número de indivíduos da área", "O tipo de clima da região toda"], 0, "Inclui o que come, quando age, como se reproduz. O endereço é o hábitat."),
  q("Uma população é o conjunto de:", ["Indivíduos da mesma espécie numa área", "Todas as espécies que vivem em um lugar", "Seres vivos e todo o ambiente físico", "Apenas os produtores de uma cadeia alimentar"], 0, "Comunidade = várias populações; ecossistema = comunidade + ambiente físico."),
  q("Sucessão ecológica é:", ["A troca gradual de comunidades", "A extinção de uma única espécie", "A migração anual de aves e peixes", "O ciclo da água entre rios e mares"], 0, "Ex.: uma rocha nua colonizada por liquens, depois musgos, gramíneas…"),
  q("Espécies invasoras costumam causar problemas porque:", ["Faltam predadores no novo local", "São sempre muito pequenas e frágeis", "Não conseguem se reproduzir no local", "Ajudam todas as espécies nativas a crescer"], 0, "Crescem sem controle e competem com espécies nativas."),
  qe("Após um incêndio numa floresta, primeiro aparecem capins, depois arbustos e, anos depois, árvores.", "O processo é uma:", ["Sucessão secundária", "Cadeia alimentar simples", "Seleção artificial feita pelo homem", "Bioacumulação de substâncias tóxicas"], 0, "Secundária: ocorre onde já havia vida e solo."),
  qe("O mexilhão-dourado, vindo da Ásia em navios, se espalhou por rios brasileiros e entope tubulações de usinas.", "Ele é um exemplo de:", ["Espécie invasora", "Espécie nativa ameaçada", "Produtor primário", "Decompositor"], 0, "Introduzido sem predadores, se espalhou e causa prejuízos."),
  qe("Numa área, onças comem capivaras, que comem capim.", "Se as onças forem caçadas até sumir, é provável que:", ["As capivaras aumentem e o capim diminua", "O capim cresça sem parar e sem limite algum", "As capivaras desapareçam também em pouco tempo", "Nada mude, pois as onças não influenciam a cadeia"], 0, "Sem o predador, a população de capivaras cresce e consome mais capim."),
  qe("Abelhas estão diminuindo no mundo por agrotóxicos e perda de habitat.", "Isso preocupa porque as abelhas:", ["Polinizam muitas plantas cultivadas", "São as únicas produtoras de oxigênio", "Comem as pragas do solo", "Decompõem a matéria orgânica"], 0, "Sem polinização, cai a produção de frutas e sementes."),
  q("Biodiversidade é:", ["A variedade de formas de vida", "O número de rios de uma região", "A temperatura média de um bioma", "A quantidade de solo fértil disponível"], 0, "Inclui genes, espécies e ecossistemas."),
  m("Marque os níveis de organização ecológica em ordem crescente correta:", ["População antes de comunidade", "Comunidade antes de ecossistema", "Ecossistema antes de biosfera", "Biosfera antes de população", "Ecossistema antes de população"], [0, 1, 2], "Ordem: população → comunidade → ecossistema → biosfera."),
  m("Marque as ameaças à biodiversidade:", ["Desmatamento", "Espécies invasoras", "Poluição", "Unidades de conservação", "Reflorestamento"], [0, 1, 2], "Unidades de conservação e reflorestamento protegem."),
  o("Explique por que a introdução de uma espécie exótica pode prejudicar um ecossistema.", "A espécie exótica chega a um ambiente onde não tem predadores, parasitas ou competidores naturais. Assim, sua população cresce sem controle e ela compete com as espécies nativas por alimento e espaço, podendo levá-las ao declínio ou à extinção e desequilibrar as cadeias alimentares.", [
    ["Sem predadores naturais", "predador", "inimigo", "controle"],
    ["Cresce sem controle", "cresce", "aumenta", "se espalha"],
    ["Compete com nativas / desequilibra", "compet", "nativa", "desequilib", "extin"],
  ]),
], "n");

extend(BIOLOGIA, "Organelas", [
  q("O retículo endoplasmático liso produz principalmente:", ["Lipídios", "Proteínas", "DNA", "Clorofila"], 0, "Também ajuda a desintoxicar (ex.: no fígado)."),
  q("Os centríolos participam:", ["Da divisão celular", "Da fotossíntese nas folhas", "Da digestão dos alimentos", "Do armazenamento de amido"], 0, "Organizam as fibras do fuso nas células animais."),
  q("O vacúolo grande das células vegetais ajuda a:", ["Manter a célula túrgida", "Produzir energia em forma de ATP", "Fabricar proteínas para exportação", "Guardar o DNA da célula vegetal"], 0, "Cheio de água, dá sustentação à planta."),
  q("Os peroxissomos decompõem:", ["Água oxigenada", "Amido das sementes", "Clorofila das folhas", "Celulose da parede"], 0, "Contêm catalase, que quebra o H₂O₂ tóxico."),
  qe("Células musculares do coração têm grande quantidade de mitocôndrias.", "Isso ocorre porque elas:", ["Gastam muita energia", "Fazem fotossíntese o dia todo", "Produzem muco para o estômago", "Guardam gordura como reserva"], 0, "Contraem sem parar e precisam de muito ATP."),
  qe("Células das glândulas salivares produzem muitas enzimas para secretar.", "Nelas são abundantes:", ["Ribossomos e complexo golgiense", "Cloroplastos e grandes vacúolos", "Centríolos e muitos cílios móveis", "Parede celular e plastos de amido"], 0, "Ribossomos fabricam as proteínas e o golgiense as empacota para exportar."),
  qe("Na doença de Tay-Sachs, os lisossomos não conseguem digerir certas gorduras, que se acumulam nos neurônios.", "A doença afeta a função de:", ["Digestão intracelular", "Fotossíntese nas células", "Respiração celular aeróbica", "Síntese de DNA no núcleo"], 0, "Lisossomos fazem a digestão dentro da célula."),
  qe("Espermatozoides têm uma vesícula chamada acrossomo, com enzimas que perfuram o óvulo.", "O acrossomo é formado pelo:", ["Complexo golgiense", "Cloroplasto do óvulo", "Núcleo do óvulo maduro", "Ribossomo livre do citoplasma"], 0, "O golgiense empacota as enzimas nessa vesícula."),
  q("Cílios e flagelos servem para:", ["Movimento", "Fotossíntese", "Digestão", "Reserva de amido"], 0, "Movem a célula (espermatozoide) ou o meio (cílios da traqueia)."),
  m("Marque os pares organela → função corretos:", ["Mitocôndria: respiração celular", "Ribossomo: síntese de proteínas", "Lisossomo: digestão intracelular", "Cloroplasto: digestão", "Núcleo: fotossíntese"], [0, 1, 2], "Cloroplasto faz fotossíntese; o núcleo guarda o DNA."),
  m("Marque as organelas que têm DNA próprio:", ["Mitocôndria", "Cloroplasto", "Núcleo (contém o DNA)", "Lisossomo", "Complexo golgiense"], [0, 1, 2], "Lisossomo e golgiense não têm DNA."),
], "n");

extend(BIOLOGIA, "Mitose e meiose", [
  q("Na metáfase, os cromossomos estão:", ["Alinhados no centro da célula", "Descondensados dentro do núcleo", "Migrando para os polos opostos", "Formando dois novos núcleos-filhos"], 0, "Na placa equatorial, presos às fibras do fuso."),
  q("Na prófase, ocorre:", ["Condensação dos cromossomos", "Separação das cromátides-irmãs", "Divisão completa do citoplasma", "Duplicação de todo o DNA celular"], 0, "Os cromossomos ficam visíveis e a carioteca se desfaz."),
  q("A citocinese é a divisão do:", ["Citoplasma", "Núcleo celular", "DNA da célula", "Ribossomo livre"], 0, "Separa as duas células-filhas no fim da divisão."),
  q("Quantas divisões tem a meiose?", ["2", "1", "4", "3"], 0, "Meiose I e meiose II, com uma única duplicação do DNA antes."),
  qe("Uma célula da medula óssea produz milhões de células sanguíneas por dia.", "O tipo de divisão envolvido é:", ["Mitose", "Meiose", "Fissão nuclear", "Brotamento"], 0, "As células do sangue vêm de mitoses sucessivas de células-tronco."),
  qe("Nos testículos, células com 46 cromossomos originam espermatozoides com 23.", "Esse processo usa:", ["Meiose", "Mitose", "Fecundação", "Clonagem"], 0, "A meiose reduz o número de cromossomos à metade."),
  qe("Um aluno observa no microscópio uma célula com cromossomos sendo puxados para lados opostos.", "A célula está na:", ["Anáfase", "Prófase", "Interfase", "Metáfase"], 0, "Na anáfase, as cromátides migram para os polos."),
  qe("A planária cortada em pedaços regenera indivíduos inteiros.", "A regeneração depende principalmente de:", ["Mitose", "Meiose", "Fecundação", "Mutação"], 0, "Células se multiplicam por mitose e reconstroem as partes perdidas."),
  q("Na telófase:", ["Formam-se dois novos núcleos", "Os cromossomos se duplicam todos", "Ocorre o crossing-over entre homólogos", "Começa a interfase da célula-mãe"], 0, "A carioteca se refaz em volta de cada conjunto de cromossomos."),
  m("Marque as fases da mitose em ordem correta:", ["Prófase antes da metáfase", "Metáfase antes da anáfase", "Anáfase antes da telófase", "Telófase antes da prófase", "Anáfase antes da metáfase"], [0, 1, 2], "Ordem: prófase → metáfase → anáfase → telófase."),
  m("Marque situações em que ocorre mitose:", ["Crescimento de uma criança", "Cicatrização da pele", "Renovação do sangue", "Formação de óvulos", "Formação de espermatozoides"], [0, 1, 2], "Gametas vêm da meiose."),
], "n");

extend(BIOLOGIA, "Heredogramas e grupos sanguíneos", [
  q("Numa transfusão, uma pessoa do tipo A pode receber sangue:", ["A ou O", "Só AB", "B ou AB", "Qualquer tipo"], 0, "Tipo A tem anti-B no plasma: rejeita B e AB."),
  q("O tipo AB é chamado de receptor universal porque:", ["Não tem anti-A nem anti-B", "Tem todos os anticorpos do sistema", "Não possui hemácias no sangue", "Tem sempre o fator Rh negativo"], 0, "Sem anticorpos contra A e B, recebe de todos os tipos ABO."),
  q("Num heredograma, um quadrado representa:", ["Um homem", "Uma mulher", "Um casamento", "Um filho adotado"], 0, "Círculo = mulher; símbolos pintados = afetados."),
  q("O sistema Rh classifica o sangue pela presença do:", ["Fator Rh nas hemácias", "Anticorpo anti-A no plasma", "Antígeno B nas plaquetas", "Ferro na hemoglobina livre"], 0, "Rh+ tem o antígeno; Rh− não tem."),
  qe("Um pai tipo A (IᴬIᴬ) e uma mãe tipo B (IᴮIᴮ) têm um filho.", "O tipo sanguíneo do filho será:", ["AB", "A, como o pai", "B, como a mãe", "O, sem antígenos"], 0, "O filho recebe Iᴬ do pai e Iᴮ da mãe: IᴬIᴮ (codominância)."),
  qe("Um casal tipo A (Iᴬi) e tipo B (Iᴮi) pode ter filhos de vários tipos.", "Qual é a chance de um filho tipo O?", ["25%", "50%", "0%", "75%"], 0, "ii exige i de cada genitor: 1/2 · 1/2 = 1/4."),
  qe("Num heredograma, dois pais não afetados têm uma filha afetada por uma doença.", "A doença provavelmente é:", ["Autossômica recessiva", "Autossômica dominante", "Ligada ao Y", "Causada por vírus"], 0, "Pais sem a doença, filha com ela: os pais são portadores (Aa) de um alelo recessivo."),
  qe("Uma mãe Rh− teve um primeiro filho Rh+ e, no parto, ficou sensibilizada.", "Para proteger uma futura gestação, ela recebe:", ["Soro anti-Rh após o parto", "Vitamina C durante toda a gravidez", "Transfusão de sangue tipo AB", "Antibiótico logo após o parto"], 0, "A imunoglobulina anti-Rh impede a mãe de produzir anticorpos que atacariam o próximo feto Rh+."),
  q("O daltonismo é mais comum em homens porque o gene está no:", ["Cromossomo X", "Cromossomo Y", "Cromossomo 21", "DNA mitocondrial"], 0, "Homens têm um X: um alelo recessivo já se manifesta."),
  m("Marque os doadores possíveis para uma pessoa tipo B:", ["Tipo B", "Tipo O", "Doador B Rh compatível", "Tipo A", "Tipo AB"], [0, 1, 2], "Quem é B tem anti-A: não recebe A nem AB."),
  m("Marque as afirmações corretas sobre o sistema ABO:", ["Iᴬ e Iᴮ são codominantes", "i é recessivo", "Tipo O é ii", "Tipo AB é ii", "Iᴬ é recessivo em relação a i"], [0, 1, 2], "AB é IᴬIᴮ; Iᴬ domina i."),
  o("Explique por que uma pessoa do tipo O pode doar sangue para todos os tipos do sistema ABO.", "As hemácias do tipo O não têm os antígenos A nem B na superfície. Por isso, os anticorpos anti-A e anti-B do receptor não as reconhecem nem atacam. Assim, o sangue O é compatível com A, B, AB e O (considerando só o sistema ABO).", [
    ["Hemácias sem antígenos A e B", "antigeno", "sem a nem b", "nao tem"],
    ["Anticorpos do receptor não atacam", "anticorpo", "nao ataca", "nao reconhec", "aglutin"],
    ["Compatível com todos os tipos", "todos", "doador universal", "compativel"],
  ]),
], "n");

extend(BIOLOGIA, "DNA, RNA e proteínas", [
  q("A replicação do DNA é chamada de semiconservativa porque:", ["Cada cópia mantém uma fita antiga", "As duas fitas de cada cópia são novas", "O DNA não se copia antes da divisão", "Só existe uma fita em cada molécula"], 0, "Cada fita serve de molde para uma nova."),
  q("O RNA transportador (RNAt) leva:", ["Aminoácidos ao ribossomo", "DNA para dentro do núcleo", "Glicose para as células do corpo", "Oxigênio através do sangue"], 0, "Cada RNAt tem um anticódon que reconhece o códon do RNAm."),
  q("O código genético é dito 'degenerado' porque:", ["Vários códons dão o mesmo aminoácido", "Ele está estragado em muitas espécies", "Cada códon serve para vários aminoácidos", "Não existe nenhum códon de parada nele"], 0, "São 64 códons para 20 aminoácidos."),
  q("O gene é:", ["Trecho de DNA com uma instrução", "Uma proteína que circula no sangue", "Um tipo especial de célula nervosa", "Uma organela presente no citoplasma"], 0, "Geralmente codifica uma proteína ou RNA funcional."),
  qe("Uma mutação troca uma única base no gene da hemoglobina e causa a anemia falciforme.", "Isso mostra que uma mutação pontual pode:", ["Alterar a proteína", "Não ter efeito nunca", "Mudar o tipo sanguíneo", "Destruir o núcleo todo"], 0, "A troca de uma base muda um aminoácido; a hemoglobina deforma as hemácias."),
  qe("Vacinas de RNAm, como as da covid-19, levam ao corpo instruções para fabricar uma proteína do vírus.", "Essa proteína é produzida nos:", ["Ribossomos das nossas células", "Núcleos das partículas virais", "Glóbulos vermelhos do sangue", "Alvéolos dos pulmões apenas"], 0, "Nossas células traduzem o RNAm em proteína; o sistema imune aprende a reconhecê-la."),
  qe("Uma fita de DNA tem a sequência TAC. Na transcrição, forma-se o códon de RNAm correspondente.", "Qual é esse códon?", ["AUG", "ATG", "UAC", "TAC"], 0, "T→A, A→U, C→G: AUG, o códon de início (metionina)."),
  qe("Todos os seres vivos usam praticamente o mesmo código genético.", "Esse fato é uma evidência de:", ["Ancestral comum", "Criação separada de cada espécie", "Que vírus são células", "Que o DNA não muda"], 0, "A universalidade do código indica origem comum da vida."),
  q("O DNA tem a forma de:", ["Dupla hélice", "Fita simples reta", "Esfera maciça", "Anel de açúcar"], 0, "Modelo de Watson e Crick (1953), com base nos dados de Rosalind Franklin."),
  m("Marque as diferenças entre DNA e RNA:", ["DNA tem timina; RNA, uracila", "DNA tem desoxirribose; RNA, ribose", "DNA é dupla fita; RNA, em geral simples", "RNA tem timina", "DNA é fita simples"], [0, 1, 2], "RNA tem uracila e o DNA é dupla fita."),
  m("Marque as etapas da síntese de proteínas:", ["Transcrição do DNA em RNAm", "Tradução no ribossomo", "União de aminoácidos", "Fotossíntese", "Digestão no estômago"], [0, 1, 2], "Fotossíntese e digestão não fazem parte da síntese proteica."),
], "n");

extend(BIOLOGIA, "Teorias evolutivas", [
  q("Para Lamarck, uma característica adquirida em vida:", ["Passaria aos filhos", "Nunca existiria", "Mataria o indivíduo", "Mudaria só o ambiente"], 0, "Lei da herança dos caracteres adquiridos, hoje rejeitada: o que se adquire em vida não altera o DNA dos gametas."),
  q("Quem propôs a seleção natural junto com Darwin?", ["Alfred Wallace", "Gregor Mendel", "Louis Pasteur", "Isaac Newton"], 0, "Wallace chegou à mesma ideia de forma independente; os dois apresentaram juntos em 1858."),
  q("O livro de Darwin de 1859 se chama:", ["A Origem das Espécies", "O Capital", "Princípios de Geologia", "Filosofia Zoológica"], 0, "'Filosofia Zoológica' é de Lamarck (1809)."),
  q("O neodarwinismo uniu a seleção natural com:", ["A genética", "A astrologia", "O lamarckismo", "A geração espontânea"], 0, "Também chamado de teoria sintética: mutação e recombinação geram a variação que a seleção filtra."),
  qe("Um fisiculturista ganhou muita massa muscular ao longo de anos de treino.", "Segundo a genética moderna, seus filhos:", ["Não herdam esses músculos", "Nascem já musculosos", "Herdam metade da massa", "Herdam só se forem meninos"], 0, "Músculo ganho em treino não muda o DNA dos gametas: não é herdado."),
  qe("Para Lamarck, as girafas esticavam o pescoço para comer folhas altas e passavam o pescoço longo aos filhos.", "Para Darwin, o pescoço longo se explica porque:", ["Girafas de pescoço longo sobreviviam mais", "Elas esticavam o pescoço de propósito", "O ambiente mudava o DNA direto", "Os filhos imitavam os pais"], 0, "Já havia variação; as de pescoço longo comiam melhor e deixavam mais filhotes."),
  qe("Bactérias resistentes a antibióticos aumentam quando o remédio é usado de forma errada.", "Esse aumento é explicado por:", ["Seleção natural", "Uso e desuso", "Herança adquirida", "Geração espontânea"], 0, "O antibiótico mata as sensíveis e as resistentes se multiplicam."),
  qe("Cobras perderam as patas ao longo da evolução, mas algumas têm restos de ossos da bacia.", "Esses restos indicam que:", ["Os ancestrais tinham patas", "As patas vão voltar logo", "Cobras usam a bacia para andar", "Foram criadas assim"], 0, "São estruturas vestigiais: evidência de ancestrais com membros."),
  q("A especiação ocorre quando populações:", ["Ficam isoladas e não cruzam mais", "Crescem muito de tamanho em pouco tempo", "Mudam de cor uma única vez na história", "Vivem juntas no mesmo lugar e cruzam"], 0, "Com isolamento reprodutivo, formam-se espécies novas."),
  m("Marque o que faz parte da teoria de Darwin:", ["Variação entre indivíduos", "Luta pela sobrevivência", "Os mais adaptados deixam mais filhos", "Herança de caracteres adquiridos", "Lei do uso e desuso"], [0, 1, 2], "Uso e desuso e herança adquirida são ideias de Lamarck."),
  m("Marque fontes de variação genética:", ["Mutação", "Recombinação na meiose", "Reprodução sexuada", "Exercício físico", "Bronzeamento"], [0, 1, 2], "Exercício e bronzeamento não mudam o DNA dos gametas."),
], "n");

extend(BIOLOGIA, "Ciclos biogeoquímicos", [
  q("No ciclo do carbono, as plantas retiram CO₂ do ar pela:", ["Fotossíntese", "Respiração", "Decomposição", "Combustão"], 0, "Fixam o carbono em matéria orgânica."),
  q("Bactérias do gênero Rhizobium vivem em raízes de:", ["Leguminosas", "Pinheiros altos", "Cactos do sertão", "Gramas de jardim"], 0, "Feijão, soja, ervilha: fixam N₂ e enriquecem o solo."),
  q("A evaporação e a transpiração das plantas levam água para:", ["A atmosfera", "O núcleo da Terra", "O fundo do mar", "As rochas"], 0, "Depois a água condensa em nuvens e volta como chuva."),
  q("O fósforo é essencial porque faz parte do:", ["DNA e do ATP", "Oxigênio do ar", "Sal de cozinha", "Gás carbônico"], 0, "Fosfato está em ácidos nucleicos e na molécula de energia ATP."),
  qe("Agricultores plantam feijão em rotação com milho para reduzir o uso de adubo nitrogenado.", "Isso funciona porque o feijão:", ["Tem bactérias que fixam nitrogênio", "Absorve o nitrogênio do milho", "Produz gás carbônico no solo", "Impede a chuva de lavar o solo"], 0, "As bactérias das raízes do feijão convertem N₂ do ar em compostos que ficam no solo."),
  qe("O desmatamento da Amazônia reduz as chuvas em regiões do Centro-Sul do Brasil.", "Isso ocorre porque a floresta:", ["Transpira muito vapor", "Bloqueia toda a luz do sol", "Produz oxigênio para as nuvens", "Absorve todo o vento da região"], 0, "Os 'rios voadores' levam umidade da Amazônia para outras regiões."),
  qe("O excesso de fertilizantes escorre para lagos e causa proliferação de algas e morte de peixes.", "Esse fenômeno é a:", ["Eutrofização", "Inversão térmica", "Chuva ácida", "Desertificação"], 0, "Excesso de nutrientes → algas → decomposição consome o O₂ → peixes morrem."),
  qe("Queimar petróleo e carvão libera carbono que ficou guardado por milhões de anos.", "Isso aumenta na atmosfera a quantidade de:", ["CO₂", "O₂", "N₂", "Vapor de ferro"], 0, "Mais CO₂ intensifica o efeito estufa."),
  q("A amonificação é feita por:", ["Decompositores", "Plantas verdes", "Raios", "Animais herbívoros"], 0, "Bactérias e fungos transformam restos orgânicos em amônia."),
  m("Marque processos que devolvem CO₂ ao ar:", ["Respiração", "Decomposição", "Queima de combustíveis", "Fotossíntese", "Fixação em conchas"], [0, 1, 2], "Fotossíntese e formação de conchas retiram carbono do ar."),
  m("Marque etapas do ciclo do nitrogênio:", ["Fixação", "Nitrificação", "Desnitrificação", "Fotossíntese", "Transpiração"], [0, 1, 2], "Fotossíntese e transpiração são de outros ciclos."),
  o("Explique a importância dos decompositores nos ciclos da matéria.", "Os decompositores, como fungos e bactérias, quebram restos de seres mortos e excrementos. Com isso, devolvem ao solo e ao ar nutrientes como nitrogênio, fósforo e carbono. Sem eles, a matéria não seria reciclada e os produtores ficariam sem nutrientes.", [
    ["Fungos e bactérias decompõem restos", "fungo", "bacteria", "decomp", "restos", "morto"],
    ["Devolvem nutrientes ao ambiente", "devolv", "nutriente", "recicl"],
    ["Sem eles, os produtores ficariam sem nutrientes", "sem eles", "produtor", "acumul", "plantas"],
  ]),
], "n");

extend(BIOLOGIA, "Relações ecológicas e cadeias", [
  q("Os líquens são uma associação de fungo com:", ["Alga", "Vírus", "Minhoca", "Pássaro"], 0, "Mutualismo: a alga faz fotossíntese, o fungo dá proteção e água."),
  q("A rêmora presa ao tubarão come restos sem prejudicá-lo. É:", ["Comensalismo", "Parasitismo", "Predação", "Competição"], 0, "Um se beneficia e o outro não ganha nem perde."),
  q("Leões e hienas disputando a mesma presa é um caso de:", ["Competição", "Mutualismo obrigatório", "Comensalismo entre carnívoros", "Protocooperação na caça"], 0, "Espécies diferentes disputam o mesmo recurso."),
  q("Na cadeia alimentar, os herbívoros são:", ["Consumidores primários", "Produtores", "Decompositores", "Consumidores terciários"], 0, "Comem os produtores (plantas, algas)."),
  qe("A orquídea vive sobre o tronco de árvores para pegar mais luz, sem tirar seiva delas.", "A relação entre a orquídea e a árvore é:", ["Epifitismo", "Parasitismo", "Predatismo", "Amensalismo"], 0, "A orquídea só usa a árvore como apoio; não a prejudica."),
  qe("Num pasto, o capim é comido por gafanhotos, que são comidos por sapos, que são comidos por cobras.", "O sapo é um:", ["Consumidor secundário", "Produtor da cadeia", "Consumidor primário herbívoro", "Decompositor do solo"], 0, "Ele come o consumidor primário (gafanhoto)."),
  qe("O mercúrio despejado em rios por garimpos aparece em concentração maior nos peixes grandes do que nos pequenos.", "Isso acontece por causa da:", ["Bioacumulação na cadeia", "Fotossíntese das algas", "Evaporação do rio", "Decomposição rápida"], 0, "O mercúrio não é eliminado e se acumula a cada nível trófico."),
  qe("O cipó-chumbo não tem clorofila e retira seiva de outras plantas.", "Essa relação é de:", ["Parasitismo", "Mutualismo", "Comensalismo", "Inquilinismo"], 0, "O cipó ganha e a planta hospedeira perde."),
  q("Uma teia alimentar é:", ["Várias cadeias interligadas", "Uma única cadeia linear", "Um tipo de parasita de insetos", "Um ciclo da água no ambiente"], 0, "Mostra as várias relações de alimentação num ecossistema."),
  m("Marque relações em que as duas espécies ganham:", ["Mutualismo", "Protocooperação", "Liquens (fungo + alga)", "Parasitismo", "Predação"], [0, 1, 2], "Em parasitismo e predação, um perde."),
  m("Marque os pares relação → exemplo corretos:", ["Parasitismo: piolho no homem", "Predação: onça e veado", "Mutualismo: cupim e protozoário", "Comensalismo: carrapato no boi", "Competição: abelha e flor"], [0, 1, 2], "Carrapato é parasita; abelha e flor é mutualismo."),
], "n");

extend(BIOLOGIA, "Digestão e circulação", [
  q("A bile, produzida pelo fígado, ajuda a digerir:", ["Gorduras", "Proteínas", "Vitaminas", "Água"], 0, "Ela emulsiona as gorduras, separando-as em gotas menores."),
  q("A maior parte da absorção dos nutrientes ocorre no:", ["Intestino delgado", "Estômago, pelo suco", "Esôfago, na passagem", "Intestino grosso, sempre"], 0, "As vilosidades aumentam muito a área de absorção."),
  q("O sangue venoso chega ao coração pelo:", ["Átrio direito", "Ventrículo esquerdo", "Átrio esquerdo", "Ventrículo direito"], 0, "Vem pelas veias cavas; depois vai ao pulmão pelo ventrículo direito."),
  q("As plaquetas atuam na:", ["Coagulação", "Defesa contra vírus", "Respiração", "Digestão"], 0, "Formam o tampão que estanca sangramentos."),
  qe("Uma pessoa com hipertensão é orientada a reduzir o sal na comida.", "O excesso de sal piora a pressão porque:", ["Retém água no sangue", "Destrói as hemácias", "Para o coração", "Dilata os vasos"], 0, "Mais sódio retém líquido; maior volume de sangue aumenta a pressão."),
  qe("Após remover a vesícula biliar, um paciente sente desconforto ao comer frituras.", "Isso ocorre porque fica mais difícil digerir:", ["Gorduras", "Açúcares", "Fibras", "Sais"], 0, "A vesícula guarda a bile, que é liberada em grande quantidade ao comer gordura."),
  qe("Atletas que treinam em altitude produzem mais hemácias.", "Isso melhora o desempenho porque aumenta o transporte de:", ["Oxigênio", "Gordura", "Insulina", "Bile"], 0, "Mais hemoglobina leva mais O₂ aos músculos."),
  qe("O teste do pezinho e outros exames de sangue usam uma pequena amostra de sangue.", "No sangue, quem combate infecções são:", ["Os leucócitos", "As hemácias", "As plaquetas", "Os sais"], 0, "Glóbulos brancos fazem a defesa do organismo."),
  q("A circulação humana é dita dupla porque:", ["O sangue passa duas vezes pelo coração", "Existem dois corações em cada pessoa", "O sangue arterial e o venoso se misturam", "Há dois tipos de sangue de cores diferentes"], 0, "Pequena circulação (pulmões) e grande circulação (corpo)."),
  m("Marque os órgãos do tubo digestório:", ["Esôfago", "Estômago", "Intestino delgado", "Pâncreas", "Fígado"], [0, 1, 2], "Pâncreas e fígado são glândulas anexas; o alimento não passa por eles."),
  m("Marque os pares vaso → função corretos:", ["Artéria: sai do coração", "Veia: chega ao coração", "Capilar: troca com os tecidos", "Veia: sempre com sangue arterial", "Artéria: só sangue venoso"], [0, 1, 2], "Veias pulmonares levam sangue arterial; a artéria pulmonar, venoso."),
  o("Explique como o sangue rico em oxigênio chega às células do corpo.", "O sangue passa nos pulmões, onde recebe oxigênio, e volta ao átrio esquerdo. Do ventrículo esquerdo, é bombeado para a aorta e as artérias. Nos capilares, o oxigênio passa do sangue para as células dos tecidos.", [
    ["Recebe oxigênio nos pulmões", "pulmao", "pulmoes", "alveolo"],
    ["Bombeado pelo lado esquerdo do coração / aorta", "esquerdo", "aorta", "arteria"],
    ["Troca nos capilares", "capilar", "tecido", "celula"],
  ]),
], "n");

extend(BIOLOGIA, "Sistema nervoso, hormônios e imunidade", [
  q("O hormônio que diminui a glicose no sangue é a:", ["Insulina", "Adrenalina", "Tiroxina", "Ocitocina"], 0, "Produzida pelo pâncreas; leva a glicose para dentro das células."),
  q("O neurônio transmite o impulso nervoso pelo:", ["Axônio", "Núcleo", "Ribossomo", "Lisossomo"], 0, "O axônio leva o impulso até a próxima célula."),
  q("Anticorpos são produzidos por:", ["Linfócitos B", "Hemácias", "Plaquetas", "Neurônios"], 0, "Os linfócitos B viram plasmócitos, que liberam anticorpos."),
  q("O cerebelo é responsável pelo:", ["Equilíbrio e coordenação", "Controle da digestão", "Produção de insulina", "Filtro do sangue"], 0, "Lesões no cerebelo afetam o equilíbrio e a precisão dos movimentos."),
  qe("Ao tomar um susto, o coração acelera e a respiração fica mais rápida.", "O hormônio liberado nessa situação é a:", ["Adrenalina", "Insulina", "Melatonina", "Progesterona"], 0, "Produzida pelas suprarrenais, prepara o corpo para luta ou fuga."),
  qe("O soro antiofídico é aplicado em quem foi picado por cobra.", "Ele age rápido porque já contém:", ["Anticorpos prontos", "O veneno enfraquecido", "Vírus inativados", "Antibióticos fortes"], 0, "Imunização passiva: os anticorpos neutralizam o veneno na hora."),
  qe("O HIV destrói linfócitos T auxiliares (CD4).", "Por isso, quem tem aids sem tratamento fica:", ["Mais vulnerável a infecções", "Imune a todas as doenças", "Com mais hemácias", "Sem glicose no sangue"], 0, "Sem os linfócitos que coordenam a defesa, infecções oportunistas aparecem."),
  qe("Ao encostar a mão numa panela quente, a pessoa tira a mão antes mesmo de sentir dor.", "Esse movimento é um ato reflexo comandado pela:", ["Medula espinal", "Glândula tireoide", "Hipófise", "Pele"], 0, "O arco reflexo passa pela medula, sem esperar o cérebro."),
  q("A melatonina regula:", ["O ciclo do sono", "A digestão", "O crescimento ósseo", "A coagulação"], 0, "Produzida à noite pela glândula pineal; a luz de telas reduz sua liberação."),
  m("Marque glândulas endócrinas:", ["Tireoide", "Hipófise", "Suprarrenais", "Glândulas salivares", "Glândulas sudoríparas"], [0, 1, 2], "Salivares e sudoríparas são exócrinas: liberam secreções em ductos."),
  m("Marque as diferenças entre vacina e soro:", ["Vacina previne; soro trata", "Vacina tem antígeno; soro, anticorpos", "Vacina gera memória; soro não", "Soro dá imunidade para sempre", "Vacina já traz anticorpos prontos"], [0, 1, 2], "O soro dá proteção rápida e passageira."),
], "n");

extend(BIOLOGIA, "Vírus e bactérias", [
  q("O vírus só se multiplica:", ["Dentro de uma célula", "Solto no ar livre", "Em água pura e limpa", "Na luz direta do sol"], 0, "Ele usa a maquinaria da célula hospedeira para fazer cópias."),
  q("A tuberculose é causada por:", ["Bactéria", "Vírus de RNA", "Fungo do solo", "Verme intestinal"], 0, "Mycobacterium tuberculosis; tratada com antibióticos por meses."),
  q("Vírus que infectam bactérias são chamados de:", ["Bacteriófagos", "Protozoários parasitas", "Fungos microscópicos", "Liquens unicelulares"], 0, "Fagos; são estudados como alternativa aos antibióticos."),
  q("Bactérias se reproduzem principalmente por:", ["Divisão binária", "Meiose", "Esporos sexuados", "Brotamento de folhas"], 0, "Uma célula se divide em duas; em condições boas, a cada 20 minutos."),
  qe("Bactérias do iogurte (lactobacilos) transformam o açúcar do leite em ácido láctico.", "A produção de iogurte usa a:", ["Fermentação", "Fotossíntese", "Respiração aeróbica", "Digestão"], 0, "O ácido coagula as proteínas do leite e dá o sabor azedo."),
  qe("A dengue é transmitida pela picada do Aedes aegypti.", "O causador da dengue é um:", ["Vírus", "Fungo", "Protozoário", "Verme"], 0, "O mosquito é o vetor; o agente é o vírus da dengue."),
  qe("A vacina da gripe precisa ser tomada todo ano.", "Isso ocorre porque o vírus da gripe:", ["Muta com frequência", "Morre no inverno", "Só infecta idosos", "Não gera anticorpos"], 0, "Novas variantes surgem e a vacina é atualizada."),
  qe("O tétano pode ocorrer após um corte com objeto enferrujado e sujo de terra.", "O agente do tétano é uma:", ["Bactéria", "Vírus", "Ferrugem", "Fungo"], 0, "Clostridium tetani vive no solo; a ferrugem não causa a doença."),
  q("A cólera é transmitida principalmente por:", ["Água contaminada", "Picada de mosquito", "Aperto de mão", "Sangue"], 0, "Saneamento básico previne a cólera."),
  m("Marque doenças causadas por vírus:", ["Sarampo", "Gripe", "Covid-19", "Tuberculose", "Cólera"], [0, 1, 2], "Tuberculose e cólera são bacterianas."),
  m("Marque benefícios das bactérias:", ["Fixação de nitrogênio", "Decomposição", "Produção de iogurte", "Causam a gripe", "Causam a dengue"], [0, 1, 2], "Gripe e dengue são viroses."),
], "n");

extend(BIOLOGIA, "Plantas", [
  q("As samambaias são:", ["Pteridófitas", "Briófitas", "Gimnospermas", "Angiospermas"], 0, "Têm vasos condutores, mas não sementes."),
  q("O pinheiro-do-paraná, que dá o pinhão, é uma:", ["Gimnosperma", "Briófita", "Pteridófita", "Angiosperma"], 0, "Tem sementes nuas, sem fruto (ex.: pinhão)."),
  q("A função da raiz inclui:", ["Absorver água e sais", "Fazer fotossíntese principal", "Produzir flores", "Produzir pólen"], 0, "Também fixa a planta no solo."),
  q("A polinização consiste em levar o:", ["Pólen até o estigma", "Fruto até o solo", "Óvulo até a raiz", "Caule até a folha"], 0, "Feita por vento, água ou animais como abelhas e beija-flores."),
  qe("Uma planta deixada perto de uma janela cresce curvada em direção à luz.", "Esse movimento é o:", ["Fototropismo", "Geotropismo", "Tigmotropismo", "Nastismo"], 0, "A auxina se acumula no lado escuro e o faz crescer mais."),
  qe("Agricultores usam etileno para fazer frutas verdes amadurecerem mais rápido.", "O etileno é um:", ["Hormônio vegetal", "Tipo de adubo", "Inseticida", "Tipo de solo"], 0, "Por isso uma fruta madura acelera o amadurecimento das outras."),
  qe("Em dias muito quentes e secos, muitas plantas fecham os estômatos.", "Com isso, elas:", ["Perdem menos água", "Fazem mais fotossíntese", "Produzem mais flores", "Absorvem mais CO₂"], 0, "Fechando os estômatos, reduzem a transpiração (mas também a entrada de CO₂)."),
  qe("Um morango tem pequenos 'pontinhos' por fora, que são os verdadeiros frutos.", "A parte carnosa vermelha é um:", ["Pseudofruto", "Fruto verdadeiro", "Caule", "Semente"], 0, "Vem do receptáculo floral, não do ovário."),
  q("Os vasos do xilema levam:", ["Água e sais minerais", "Açúcares feitos na folha", "Pólen até as flores", "Sementes até o solo"], 0, "Seiva bruta, da raiz até as folhas."),
  m("Marque grupos de plantas com sementes:", ["Gimnospermas", "Angiospermas", "Pinheiros e ipês", "Briófitas", "Pteridófitas"], [0, 1, 2], "Musgos e samambaias se reproduzem por esporos."),
  m("Marque as partes de uma flor:", ["Pétalas", "Estames", "Pistilo (carpelo)", "Xilema", "Raiz"], [0, 1, 2], "Xilema e raiz não fazem parte da flor."),
], "n");

extend(BIOLOGIA, "Animais", [
  q("Os anfíbios, como o sapo, vivem:", ["Na água e na terra", "Só em desertos secos", "Só no fundo do mar", "Só no alto das árvores"], 0, "A larva (girino) é aquática; o adulto respira também pela pele."),
  q("O tubarão é um peixe:", ["Cartilaginoso", "Ósseo, como a sardinha", "Anfíbio, como o sapo", "Mamífero, como a baleia"], 0, "Esqueleto de cartilagem; arraias também são cartilaginosas."),
  q("As minhocas pertencem aos:", ["Anelídeos", "Moluscos", "Artrópodes", "Equinodermos"], 0, "Corpo em anéis; arejam e adubam o solo."),
  q("O polvo e a lula são:", ["Moluscos", "Peixes", "Artrópodes", "Cnidários"], 0, "Moluscos cefalópodes, com tentáculos e concha interna reduzida ou ausente."),
  qe("A estrela-do-mar e o ouriço-do-mar têm o corpo dividido em cinco partes iguais e sistema ambulacral.", "Eles pertencem aos:", ["Equinodermos", "Poríferos (esponjas)", "Cnidários (águas-vivas)", "Anelídeos (minhocas)"], 0, "Exclusivamente marinhos; o sistema ambulacral move os pés."),
  qe("O morcego voa, mas tem pelos, dá à luz filhotes e os amamenta.", "O morcego é classificado como:", ["Mamífero", "Ave, por voar", "Réptil, pelas asas", "Inseto grande"], 0, "Pelos e glândulas mamárias definem os mamíferos; as asas são análogas às das aves."),
  qe("Aves e mamíferos mantêm a temperatura do corpo constante, mesmo no frio.", "Esses animais são chamados de:", ["Endotérmicos", "Ectotérmicos", "Pecilotérmicos", "Hermafroditas"], 0, "Produzem calor pelo metabolismo; répteis dependem do ambiente."),
  qe("Os corais formam recifes e vivem em associação com algas que fazem fotossíntese.", "Os corais pertencem ao grupo dos:", ["Cnidários", "Poríferos", "Moluscos", "Peixes"], 0, "Parentes das águas-vivas; o aquecimento do mar causa o branqueamento."),
  q("Quantas patas tem um inseto adulto?", ["Seis", "Oito", "Dez", "Quatro"], 0, "Aracnídeos têm oito; crustáceos como o caranguejo, dez."),
  m("Marque animais vertebrados:", ["Sapo", "Tubarão", "Morcego", "Minhoca", "Polvo"], [0, 1, 2], "Minhoca e polvo não têm coluna vertebral."),
  m("Marque características dos répteis:", ["Pele com escamas", "Ovo com casca", "Respiração pulmonar", "Penas", "Glândulas mamárias"], [0, 1, 2], "Penas são das aves; glândulas mamárias, dos mamíferos."),
  o("Explique por que o ovo com casca foi importante para os répteis conquistarem o ambiente terrestre.", "O ovo com casca e membranas, como o âmnio, protege o embrião contra a desidratação. Assim, os répteis não precisam voltar à água para se reproduzir, como os anfíbios. Isso permitiu ocupar ambientes secos.", [
    ["Protege o embrião contra perda de água", "desidrat", "perda de agua", "protege"],
    ["Não precisam voltar à água", "agua", "anfibio", "independ"],
    ["Ocupar ambientes secos / terrestres", "seco", "terrestre", "terra"],
  ]),
], "n");
