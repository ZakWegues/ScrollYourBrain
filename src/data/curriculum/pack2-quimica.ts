import { QUIMICA } from "./exatas";
import { extend, m, o, q, qe } from "./pack";

/* Química, 2ª leva: questões diretas e no estilo ENEM (situação do cotidiano + pergunta). Chave "n". */

extend(QUIMICA, "Matéria, substâncias e misturas", [
  q("Qual destas é uma mistura homogênea?", ["Água com sal dissolvido", "Água com areia no fundo", "Água e óleo no copo", "Granito com grãos visíveis"], 0, "Homogênea tem uma só fase: o sal dissolvido não se vê. As outras têm fases visíveis."),
  q("O ar atmosférico filtrado é:", ["Uma mistura homogênea", "Uma substância pura simples", "Uma substância composta", "Uma mistura de duas fases"], 0, "É uma mistura de gases (N₂, O₂, Ar, CO₂…) numa só fase."),
  q("Densidade é a razão entre:", ["Massa e volume", "Volume e temperatura", "Peso e altura do corpo", "Massa e área da base"], 0, "d = m/V. O óleo flutua na água por ser menos denso."),
  q("Fenômeno químico é aquele em que:", ["Surgem novas substâncias", "Só muda o estado físico", "Só muda a forma do objeto", "A substância só se dissolve"], 0, "Queimar papel e enferrujar ferro formam substâncias novas; derreter gelo é físico."),
  q("Ponto de fusão de uma substância pura é:", ["Constante e característico", "Variável a cada medida", "Igual para todas as substâncias", "Sempre igual a 0 °C"], 0, "Substâncias puras têm PF e PE fixos (a uma pressão); misturas, em geral, não."),
  qe("Um estudante mede 50 g de um metal que ocupa 10 cm³ de volume.", "Qual é a densidade do metal?", ["5 g/cm³", "500 g/cm³", "0,2 g/cm³", "60 g/cm³"], 0, "d = 50/10 = 5 g/cm³."),
  qe("Um ovo fresco afunda em água pura, mas flutua em água com bastante sal.", "Isso ocorre porque o sal:", ["Aumenta a densidade da água", "Diminui a massa do ovo", "Esquenta a água do copo", "Faz o ovo perder a casca"], 0, "Com sal, a água fica mais densa que o ovo, que passa a flutuar."),
  qe("Ao cozinhar um ovo, a clara transparente vira branca e firme, e não volta ao normal ao esfriar.", "Esse é um fenômeno:", ["Químico, com proteínas alteradas", "Físico, de simples mudança de cor", "Físico, de solidificação da água", "Químico reversível pelo frio"], 0, "O calor altera a estrutura das proteínas (desnaturação): formam-se novas estruturas, sem volta."),
  qe("Num gráfico de aquecimento, uma amostra derrete em várias temperaturas, sem patamar fixo.", "A amostra provavelmente é:", ["Uma mistura", "Uma substância pura", "Um elemento químico", "Água destilada pura"], 0, "Substância pura tem patamar de fusão fixo; a mistura derrete numa faixa de temperatura."),
  q("Alotropia é quando um mesmo elemento forma:", ["Substâncias simples diferentes", "Misturas com outros elementos", "Isótopos com nêutrons diferentes", "Íons de cargas diferentes"], 0, "Ex.: carbono forma grafite e diamante; oxigênio forma O₂ e O₃."),
  m("Marque os fenômenos químicos:", ["Queima de uma vela", "Ferrugem num portão", "Digestão dos alimentos", "Gelo derretendo", "Açúcar dissolvido no café"], [0, 1, 2], "Derreter e dissolver não formam substâncias novas."),
  m("Marque as substâncias simples:", ["O₂", "O₃", "Fe", "H₂O", "NaCl"], [0, 1, 2], "H₂O e NaCl têm mais de um elemento: são compostas."),
  o("Explique a diferença entre fenômeno físico e químico, com um exemplo de cada.", "No fenômeno físico, a substância continua a mesma e só muda de estado, forma ou tamanho, como o gelo derretendo. No fenômeno químico, surgem substâncias novas, como na queima de papel, que forma gás carbônico, água e cinzas.", [
    ["Físico: a substância continua a mesma", "mesma", "nao muda", "estado", "forma"],
    ["Químico: surgem novas substâncias", "nova", "novas substancias", "diferente"],
    ["Exemplos corretos", "gelo", "queima", "ferrugem", "derret", "papel", "exemplo"],
  ]),
], "n");

extend(QUIMICA, "Modelos atômicos e tabela periódica", [
  q("O modelo de Dalton imaginava o átomo como:", ["Uma esfera maciça e indivisível", "Um núcleo com elétrons em órbitas", "Um pudim com cargas espalhadas", "Uma nuvem de probabilidade"], 0, "Dalton (1808): bolinhas maciças. Thomson trouxe o elétron; Rutherford, o núcleo."),
  q("Thomson descobriu que o átomo tem:", ["Partículas negativas (elétrons)", "Um núcleo positivo e denso", "Nêutrons sem carga elétrica", "Órbitas de energia definida"], 0, "Com os raios catódicos, Thomson identificou o elétron e propôs o 'pudim de passas'."),
  q("No modelo de Bohr, os elétrons:", ["Ocupam níveis de energia fixos", "Ficam parados dentro do núcleo", "Estão espalhados num pudim positivo", "Não têm nenhuma energia própria"], 0, "Cada camada tem energia fixa; ao trocar de nível, o elétron absorve ou emite energia."),
  q("Na tabela periódica, os metais alcalinos ficam no grupo:", ["1", "17", "18", "2"], 0, "Grupo 1: Li, Na, K… muito reativos. Grupo 17: halogênios; 18: gases nobres."),
  q("Eletronegatividade é a tendência de um átomo:", ["Atrair elétrons numa ligação", "Perder prótons do núcleo", "Ganhar nêutrons ao aquecer", "Emitir luz quando excitado"], 0, "O flúor é o mais eletronegativo. Nos períodos, cresce da esquerda para a direita."),
  qe("No experimento de Rutherford, a maioria das partículas alfa atravessou a lâmina de ouro, mas algumas foram muito desviadas.", "A conclusão foi que o átomo:", ["Tem núcleo pequeno e denso", "É uma esfera maciça e indivisível", "Tem cargas espalhadas por igual", "Não tem nenhum espaço vazio dentro"], 0, "Muitas passaram: há muito vazio. Poucas voltaram: há um núcleo pequeno e denso."),
  qe("Fogos de artifício têm cores diferentes conforme o sal metálico usado (sódio: amarelo; estrôncio: vermelho).", "Isso é explicado pelo modelo de:", ["Bohr, com saltos de elétrons", "Dalton, com bolinhas maciças", "Thomson, com o pudim de passas", "Demócrito, com átomos e vazio"], 0, "Elétrons excitados voltam a níveis menores emitindo luz de cor própria de cada elemento."),
  qe("O cloro (Cl) e o bromo (Br) estão na mesma coluna da tabela.", "Por isso, eles têm:", ["Propriedades parecidas", "O mesmo número de prótons", "A mesma massa atômica exata", "O mesmo estado físico sempre"], 0, "Mesma família = mesmo número de elétrons de valência = comportamento químico semelhante."),
  qe("O raio atômico aumenta de cima para baixo numa família.", "Isso acontece porque, ao descer:", ["Aumenta o número de camadas", "Diminui o número de prótons", "Os elétrons somem do átomo", "O núcleo fica sem nêutrons"], 0, "Cada período a mais acrescenta uma camada eletrônica."),
  q("Os elementos de transição ficam:", ["No bloco central da tabela", "Na primeira coluna à esquerda", "Na última coluna à direita", "Fora da tabela periódica"], 0, "Grupos 3 a 12: ferro, cobre, ouro, prata…"),
  m("Marque os pares cientista → contribuição corretos:", ["Dalton: átomo maciço", "Thomson: elétron", "Rutherford: núcleo", "Bohr: átomo indivisível", "Thomson: nêutron"], [0, 1, 2], "Bohr: níveis de energia. O nêutron foi descoberto por Chadwick."),
  m("Marque os halogênios:", ["Flúor", "Cloro", "Iodo", "Sódio", "Neônio"], [0, 1, 2], "Sódio é alcalino; neônio, gás nobre."),
], "n");

extend(QUIMICA, "Ligações químicas", [
  q("A ligação iônica ocorre geralmente entre:", ["Metal e ametal", "Dois ametais", "Dois metais", "Dois gases nobres"], 0, "O metal doa elétrons e o ametal recebe: formam íons que se atraem."),
  q("Compostos iônicos, como o sal, conduzem eletricidade quando:", ["Fundidos ou em solução", "Estão sólidos, secos e inteiros", "Ficam guardados no congelador", "Estão moídos em pó bem fino"], 0, "Só com os íons livres (fundidos ou em solução) há corrente."),
  q("A regra do octeto diz que os átomos tendem a:", ["Ter 8 elétrons na valência", "Perder todos os seus elétrons de uma vez", "Ter exatamente 8 prótons no núcleo", "Formar sempre 8 ligações com vizinhos"], 0, "Ficam com a configuração dos gases nobres (o hidrogênio, com 2)."),
  q("Na molécula de N₂, os átomos estão unidos por:", ["Ligação tripla", "Ligação simples", "Ligação iônica", "Ligação metálica"], 0, "Cada N compartilha 3 elétrons: N≡N, ligação muito forte."),
  q("Ligas metálicas, como o bronze, são:", ["Misturas de metais", "Compostos iônicos", "Moléculas covalentes", "Gases nobres sólidos"], 0, "Bronze = cobre + estanho; aço = ferro + carbono."),
  qe("O sal de cozinha tem ponto de fusão de 801 °C, enquanto o açúcar derrete a cerca de 186 °C.", "A diferença se explica porque o sal:", ["É iônico, com forte atração entre íons", "É covalente e tem moléculas leves", "É metálico e tem elétrons livres", "É uma mistura de vários sais"], 0, "A rede cristalina iônica exige muita energia para ser desfeita."),
  qe("Fios elétricos são de cobre, e panelas, de alumínio.", "Essas aplicações aproveitam características da ligação:", ["Metálica, com elétrons livres", "Iônica, com íons fixos", "Covalente, com pares fixos", "De hidrogênio, entre moléculas"], 0, "O 'mar de elétrons' conduz eletricidade e calor e permite moldar o metal."),
  qe("O diamante, formado só por carbono, é o material natural mais duro.", "Sua dureza vem de:", ["Uma rede de ligações covalentes fortes", "Ligações iônicas entre íons de carbono", "Elétrons livres entre os átomos", "Forças fracas entre moléculas"], 0, "Cada C se liga a outros 4 numa rede tridimensional covalente."),
  qe("Uma solução de açúcar em água não acende uma lâmpada num teste de condutividade; uma de sal acende.", "Isso ocorre porque o açúcar:", ["Não forma íons ao se dissolver", "Não se dissolve na água", "Forma íons demais na água", "É um metal pouco reativo"], 0, "O açúcar é molecular: se dissolve sem liberar íons. O sal libera Na⁺ e Cl⁻."),
  q("A fórmula do composto entre Ca²⁺ e Cl⁻ é:", ["CaCl₂", "CaCl", "Ca₂Cl", "Ca₂Cl₃"], 0, "Para neutralizar +2, são necessários dois Cl⁻."),
  m("Marque os compostos iônicos:", ["NaCl", "CaO", "KBr", "H₂O", "CO₂"], [0, 1, 2], "H₂O e CO₂ são moleculares (covalentes)."),
  m("Marque as propriedades típicas dos metais:", ["Brilho metálico", "Boa condução de calor", "Maleabilidade", "Quebrar como vidro", "Isolar eletricidade"], [0, 1, 2], "Metais não são quebradiços nem isolantes."),
  o("Explique por que o sal de cozinha sólido não conduz eletricidade, mas a água salgada conduz.", "No sal sólido, os íons Na⁺ e Cl⁻ ficam presos na rede cristalina e não se movem. Ao dissolver em água, os íons se separam e ficam livres para se movimentar, carregando a corrente elétrica.", [
    ["No sólido os íons estão presos", "preso", "fixo", "rede", "cristal"],
    ["Na água os íons ficam livres", "livre", "separ", "dissoci", "movimentar"],
    ["Cita íons ou carga elétrica", "ions", "carga", "sodio", "cloreto"],
  ]),
], "n");

extend(QUIMICA, "Funções inorgânicas", [
  q("Qual é a fórmula do ácido sulfúrico?", ["H₂SO₄", "HCl", "HNO₃", "H₂CO₃"], 0, "H₂SO₄, usado em baterias de carro e na indústria."),
  q("O hidróxido de cálcio, Ca(OH)₂, é:", ["Uma base", "Um ácido", "Um sal", "Um óxido"], 0, "Libera OH⁻ em água; é a cal hidratada usada na construção."),
  q("CaCO₃ (calcário, mármore) é classificado como:", ["Sal", "Base", "Ácido", "Óxido"], 0, "É o carbonato de cálcio, um sal."),
  q("O ácido do estômago é o:", ["Ácido clorídrico", "Ácido sulfúrico", "Ácido acético", "Ácido cítrico"], 0, "O HCl do suco gástrico ajuda a digerir proteínas."),
  qe("Agricultores aplicam calcário (CaCO₃) em solos muito ácidos.", "Essa prática serve para:", ["Neutralizar a acidez do solo", "Deixar o solo mais ácido", "Matar as minhocas do solo", "Aumentar o sal do solo"], 0, "A calagem reage com o ácido e eleva o pH, melhorando a absorção de nutrientes."),
  qe("Em caso de queimadura com soda cáustica (NaOH), não se deve usar ácido forte para neutralizar.", "O correto é:", ["Lavar com muita água corrente", "Passar vinagre concentrado", "Cobrir com sal de cozinha", "Esfregar com álcool puro"], 0, "A reação de neutralização libera calor e pode piorar a lesão: lava-se com água e procura-se atendimento."),
  qe("O mármore de monumentos antigos se desgasta em cidades com chuva ácida.", "Isso acontece porque o ácido:", ["Reage com o carbonato", "Esfria e racha a pedra aos poucos", "Deposita mais calcário sobre a pedra", "Pinta a pedra de preto com o tempo"], 0, "CaCO₃ + ácido → sal solúvel + CO₂ + água: a pedra 'dissolve' aos poucos."),
  qe("O bicarbonato de sódio (NaHCO₃) é usado como antiácido e no fermento de bolo.", "No bolo, ele ajuda porque:", ["Libera CO₂ e faz a massa crescer", "Deixa a massa mais pesada", "Absorve toda a água da massa", "Muda a cor da massa para azul"], 0, "Com calor ou ácido, libera gás carbônico, que forma bolhas na massa."),
  q("Óxidos básicos, como o CaO, reagem com água formando:", ["Bases", "Ácidos", "Sais neutros", "Gases nobres"], 0, "CaO + H₂O → Ca(OH)₂."),
  m("Marque os ácidos:", ["HCl", "H₂SO₄", "HNO₃", "NaOH", "NaCl"], [0, 1, 2], "NaOH é base; NaCl, sal."),
  m("Marque os pares substância → uso corretos:", ["NaCl: tempero", "NaOH: fabricação de sabão", "NaHCO₃: antiácido", "H₂SO₄: tempero de salada", "HCl: creme dental"], [0, 1, 2], "H₂SO₄ e HCl são ácidos fortes, perigosos para consumo."),
], "n");

extend(QUIMICA, "Soluções e concentração", [
  q("Numa solução de água com açúcar, o soluto é:", ["O açúcar", "A água", "A mistura toda", "O copo"], 0, "Soluto é o que se dissolve; solvente é o que dissolve (água)."),
  q("Coeficiente de solubilidade é:", ["O máximo de soluto que dissolve", "A massa total da solução pronta", "O volume do recipiente usado", "A cor da solução depois de pronta"], 0, "Depende da temperatura: ex., 36 g de NaCl por 100 g de água a 20 °C."),
  q("Uma solução com 0,5 mol de NaCl em 250 mL tem concentração de:", ["2 mol/L", "0,125 mol/L", "0,5 mol/L", "1 mol/L"], 0, "C = n/V = 0,5/0,25 = 2 mol/L."),
  q("Uma solução insaturada:", ["Ainda dissolve mais soluto", "Já tem o máximo possível de soluto", "Tem soluto sobrando no fundo do copo", "Não tem nenhum soluto dissolvido"], 0, "Está abaixo do coeficiente de solubilidade."),
  qe("O rótulo de um soro diz: glicose 5% (m/V), ou seja, 5 g em cada 100 mL.", "Quantos gramas de glicose há em 500 mL desse soro?", ["25 g", "5 g", "50 g", "2,5 g"], 0, "5 g/100 mL × 500 mL = 25 g."),
  qe("Uma água mineral tem 20 mg de cálcio por litro.", "Quantos mg de cálcio há numa garrafa de 1,5 L?", ["30 mg", "20 mg", "13 mg", "300 mg"], 0, "20 mg/L · 1,5 L = 30 mg."),
  qe("Um aquário de água doce recebe 3 g de sal para cada 10 L, por recomendação do veterinário. O aquário tem 60 L.", "Quanto sal deve ser colocado?", ["18 g", "30 g", "6 g", "180 g"], 0, "Proporção: 3 g/10 L × 60 L = 18 g."),
  qe("A legislação permite até 0,1 mg/L de chumbo na água. Uma amostra tem 0,3 mg/L.", "Essa amostra:", ["Está 3 vezes acima do limite", "Está dentro do que é permitido", "Tem a metade do limite máximo", "Não tem nenhum chumbo dissolvido"], 0, "0,3/0,1 = 3: três vezes o máximo permitido."),
  q("A unidade ppm (partes por milhão) é usada para:", ["Concentrações minúsculas", "Medir a temperatura do ambiente", "Medir o volume de um gás no balão", "Medir a pressão do ar atmosférico"], 0, "1 ppm = 1 mg por kg (ou por litro de água). Usado para poluentes e flúor."),
  m("Numa solução de 40 g de NaOH em 1 L (M = 40 g/mol), marque as corretas:", ["Concentração comum: 40 g/L", "Concentração molar: 1 mol/L", "O soluto é o NaOH", "O solvente é o NaOH", "Concentração molar: 40 mol/L"], [0, 1, 2], "40 g = 1 mol; o solvente é a água."),
  m("Marque fatores que costumam aumentar a solubilidade de sólidos em água:", ["Aumentar a temperatura (na maioria)", "Agitar a mistura", "Triturar o sólido", "Retirar a água", "Esfriar até congelar"], [0, 1, 2], "Agitar e triturar aceleram a dissolução; retirar água ou congelar a impedem."),
], "n");

extend(QUIMICA, "Termoquímica", [
  q("A entalpia de combustão é sempre:", ["Negativa (libera calor)", "Positiva (absorve calor)", "Igual a zero", "Maior que 1.000 kJ"], 0, "Combustões são exotérmicas: ΔH < 0."),
  q("Num gráfico de entalpia de reação endotérmica, os produtos estão:", ["Acima dos reagentes", "Abaixo dos reagentes", "No mesmo nível", "Fora do gráfico"], 0, "Produtos com mais energia: o sistema absorveu calor (ΔH > 0)."),
  q("A energia de ligação é a energia para:", ["Romper uma ligação", "Formar um núcleo", "Ferver a água", "Acender uma chama"], 0, "Romper ligações absorve energia; formar ligações libera."),
  q("Se A → B tem ΔH = −100 kJ, então 2A → 2B tem ΔH:", ["−200 kJ", "−100 kJ", "+200 kJ", "−50 kJ"], 0, "Multiplicar a equação multiplica o ΔH."),
  qe("Um 'saco de calor' para as mãos contém ferro em pó que enferruja rapidamente ao contato com o ar.", "O saco esquenta porque a oxidação do ferro é:", ["Exotérmica", "Endotérmica", "Nuclear", "Isotérmica"], 0, "A reação libera calor para o ambiente (ΔH < 0)."),
  qe("Gasolina libera cerca de 47 kJ/g; etanol, cerca de 30 kJ/g.", "Para a mesma massa queimada, a gasolina:", ["Libera mais energia", "Libera menos energia", "Libera a mesma energia", "Não libera energia"], 0, "47 > 30 kJ/g: por isso o carro roda mais km por litro com gasolina."),
  qe("Na reação de fotossíntese, a planta absorve energia luminosa para formar glicose.", "Do ponto de vista energético, a fotossíntese é:", ["Endotérmica", "Exotérmica", "Neutra", "Explosiva"], 0, "Os produtos (glicose e O₂) guardam mais energia que os reagentes."),
  qe("A lei de Hess permite calcular o ΔH de uma reação somando etapas conhecidas.", "Ela funciona porque o ΔH:", ["Só depende do início e do fim", "Depende do caminho percorrido", "É sempre um valor positivo", "Muda quando há catalisador"], 0, "A entalpia é função de estado: o caminho não importa."),
  q("A unidade usual de entalpia é:", ["kJ/mol", "mol/L", "g/cm³", "atm·L"], 0, "Energia por quantidade de matéria."),
  m("Marque processos exotérmicos:", ["Queima de carvão", "Respiração celular", "Condensação do vapor", "Fusão do gelo", "Evaporação do suor"], [0, 1, 2], "Fusão e evaporação absorvem calor."),
  m("Marque as afirmações corretas:", ["Romper ligações absorve energia", "Formar ligações libera energia", "Inverter a reação inverte o sinal de ΔH", "ΔH > 0 indica liberação de calor", "Catalisador muda o ΔH"], [0, 1, 2], "ΔH > 0 é absorção; catalisador não altera o ΔH."),
], "n");

extend(QUIMICA, "Cinética química", [
  q("A velocidade de uma reação mede:", ["Reagente gasto por tempo", "A temperatura final da mistura toda", "A massa total do sistema fechado", "A cor dos produtos que se formaram"], 0, "Ou quanto produto se forma por unidade de tempo."),
  q("Um catalisador acelera a reação porque:", ["Baixa a energia de ativação", "Aumenta o ΔH total da reação", "É consumido totalmente no processo", "Muda quais produtos são formados"], 0, "Oferece um caminho com barreira menor e sai inalterado no fim."),
  q("Para haver reação, as colisões entre as partículas devem:", ["Ter energia e boa orientação", "Acontecer sempre bem devagar", "Envolver apenas gases nobres", "Ocorrer sem nenhuma energia"], 0, "Teoria das colisões: só choques efetivos formam produtos."),
  q("As enzimas do corpo funcionam como:", ["Catalisadores biológicos", "Combustíveis do músculo", "Ácidos fortes do sangue", "Sais minerais da dieta"], 0, "Aceleram reações vitais a 37 °C, que seriam lentíssimas sem elas."),
  qe("Lenha em toras pequenas queima mais rápido que um tronco inteiro de mesma massa.", "O fator que explica isso é a:", ["Maior superfície de contato", "Menor temperatura da chama", "Presença de um catalisador", "Menor quantidade de oxigênio"], 0, "Pedaços menores expõem mais área ao oxigênio: mais colisões efetivas."),
  qe("Alimentos estragam mais rápido no verão do que no inverno.", "Isso acontece porque, no calor:", ["As reações ficam mais rápidas", "As reações ficam mais lentas", "Os micróbios morrem logo", "O oxigênio do ar acaba"], 0, "Mais temperatura = partículas mais agitadas = mais colisões efetivas."),
  qe("O catalisador do escapamento dos carros transforma CO e NOₓ em CO₂ e N₂.", "Ele é útil porque:", ["Acelera a redução de poluentes", "Aumenta a potência do motor do carro", "Produz mais gasolina no tanque", "Esfria o motor durante a viagem"], 0, "Metais como platina aceleram a conversão de gases tóxicos em gases menos nocivos."),
  qe("A água oxigenada se decompõe devagar no frasco, mas borbulha forte numa ferida.", "O sangue acelera a reação porque contém:", ["A enzima catalase", "Muito sal de cozinha", "Ácido sulfúrico", "Gás carbônico livre"], 0, "A catalase catalisa 2 H₂O₂ → 2 H₂O + O₂ (as bolhas são oxigênio)."),
  q("Aumentar a concentração dos reagentes, em geral:", ["Acelera a reação", "Para a reação", "Não muda a velocidade", "Muda o ΔH"], 0, "Mais partículas por volume = mais colisões."),
  m("Marque fatores que aceleram reações:", ["Aumento de temperatura", "Catalisador", "Maior superfície de contato", "Diminuir a concentração", "Resfriar o sistema"], [0, 1, 2], "Menos concentração e frio deixam as reações mais lentas."),
  m("Marque situações em que se deseja reduzir a velocidade de reações:", ["Conservar alimentos na geladeira", "Usar conservantes em alimentos", "Pintar o ferro contra ferrugem", "Acender uma fogueira", "Fermentar o pão mais rápido"], [0, 1, 2], "Fogueira e fermentação rápida são acelerações desejadas."),
  o("Explique por que guardar alimentos na geladeira faz com que eles durem mais.", "A baixa temperatura diminui a agitação das partículas e o número de colisões efetivas, deixando mais lentas as reações químicas que estragam o alimento. Além disso, o frio reduz a atividade dos micro-organismos e de suas enzimas.", [
    ["Baixa temperatura deixa as reações mais lentas", "lenta", "devagar", "temperatura"],
    ["Menos colisões / agitação", "colis", "agita", "energia"],
    ["Micro-organismos menos ativos", "micro", "bacteria", "fungo", "enzima"],
  ]),
], "n");

extend(QUIMICA, "Equilíbrio químico e pH", [
  q("No equilíbrio químico, as velocidades das reações direta e inversa são:", ["Iguais", "Nulas, a reação para", "Sempre crescentes", "Diferentes entre si"], 0, "O equilíbrio é dinâmico: as duas reações continuam, na mesma velocidade."),
  q("Uma constante de equilíbrio (Kc) muito grande indica:", ["Predomínio de produtos", "Predomínio de reagentes", "Reação muito lenta", "Ausência de reação"], 0, "Kc = [produtos]/[reagentes]: valor alto, muito produto no equilíbrio."),
  q("Uma solução com pH 2 tem [H⁺] igual a:", ["10⁻² mol/L", "2 mol/L", "10² mol/L", "0,2 mol/L"], 0, "pH = −log [H⁺] → [H⁺] = 10⁻ᵖᴴ."),
  q("A soma pH + pOH, a 25 °C, vale:", ["14", "7", "10", "1"], 0, "pH + pOH = 14; se pH = 3, pOH = 11."),
  qe("O sangue tem pH entre 7,35 e 7,45, mantido por sistemas tampão.", "Uma solução tampão serve para:", ["Resistir a mudanças de pH", "Deixar o meio muito ácido", "Ferver mais rápido", "Mudar de cor sempre"], 0, "Tampões neutralizam pequenas adições de ácido ou base, mantendo o pH estável."),
  qe("Num refrigerante fechado há o equilíbrio CO₂(g) + H₂O ⇌ H₂CO₃. Ao abrir a garrafa, a pressão cai.", "Segundo Le Chatelier, o equilíbrio se desloca para:", ["Liberar CO₂ (as bolhas)", "Formar mais ácido carbônico", "Lado nenhum", "Formar água sólida"], 0, "Com menos pressão, o sistema favorece o lado com gás: o CO₂ escapa em bolhas."),
  qe("O suco de repolho roxo muda de cor: rosa em vinagre, verde em sabão.", "O suco funciona como:", ["Indicador ácido-base", "Catalisador natural da reação", "Solução tampão de pH fixo", "Combustível de origem vegetal"], 0, "Pigmentos (antocianinas) mudam de cor conforme o pH do meio."),
  qe("Na reação N₂ + 3 H₂ ⇌ 2 NH₃ (exotérmica), uma indústria quer produzir mais amônia.", "Uma medida que favorece a amônia é:", ["Aumentar a pressão", "Aumentar o volume do reator", "Retirar o N₂ do sistema", "Adicionar mais NH₃ pronta"], 0, "Mais pressão desloca para o lado com menos mols de gás (2 contra 4): mais NH₃."),
  q("Uma solução com pH 9 é:", ["Básica", "Ácida", "Neutra", "Explosiva"], 0, "pH acima de 7 (a 25 °C) é básico."),
  m("Marque as substâncias básicas (pH > 7):", ["Sabão", "Água sanitária", "Leite de magnésia", "Vinagre", "Suco de limão"], [0, 1, 2], "Vinagre e limão são ácidos."),
  m("Num equilíbrio, marque perturbações que o deslocam:", ["Mudar a concentração de um reagente", "Mudar a temperatura", "Mudar a pressão (com gases)", "Adicionar catalisador", "Mudar a cor do frasco"], [0, 1, 2], "Catalisador só acelera a chegada ao equilíbrio; cor do frasco não interfere."),
], "n");

extend(QUIMICA, "Cadeias carbônicas", [
  q("Uma cadeia saturada tem:", ["Só ligações simples", "Pelo menos uma ligação dupla", "Um anel aromático na estrutura", "Um átomo de oxigênio no meio"], 0, "Saturada: só C–C simples. Insaturada: há dupla ou tripla."),
  q("Cadeia heterogênea é aquela que tem:", ["Heteroátomo entre carbonos", "Só carbono e hidrogênio", "Apenas ligações duplas", "Carbonos em anel fechado"], 0, "Ex.: um O ou N entre dois carbonos (C–O–C)."),
  q("Um carbono ligado a três outros carbonos é classificado como:", ["Terciário", "Primário", "Secundário", "Quaternário"], 0, "Primário: 1 C vizinho; secundário: 2; terciário: 3; quaternário: 4."),
  q("A cadeia do butano (C–C–C–C) é:", ["Aberta, normal e saturada", "Fechada e aromática", "Ramificada e insaturada", "Heterogênea e cíclica"], 0, "Quatro carbonos em linha, só ligações simples."),
  qe("O petróleo é formado principalmente por hidrocarbonetos com cadeias de diferentes tamanhos.", "Cadeias maiores, como as do asfalto, em geral têm:", ["Pontos de ebulição maiores", "Pontos de ebulição menores", "Estado gasoso sempre", "Nenhuma ligação C–H"], 0, "Moléculas maiores têm mais interações e precisam de mais energia para ferver."),
  qe("O benzeno, C₆H₆, tem um anel de 6 carbonos com ligações duplas alternadas.", "Sua cadeia é classificada como:", ["Aromática", "Aberta e saturada", "Alifática ramificada", "Heterogênea"], 0, "O anel benzênico define os compostos aromáticos."),
  qe("A gasolina de alta octanagem tem cadeias ramificadas, como o isoctano.", "Uma cadeia ramificada é aquela que:", ["Tem carbono terciário", "Só tem carbonos primários", "Não tem nenhum hidrogênio", "É sempre fechada em anel"], 0, "Ramificações surgem quando um carbono se liga a 3 ou 4 outros."),
  qe("O etileno (eteno), C₂H₄, é usado para amadurecer frutas.", "Sua cadeia é:", ["Insaturada, com uma dupla", "Saturada, com só simples", "Aromática, com anel", "Heterogênea, com oxigênio"], 0, "H₂C=CH₂: dois carbonos unidos por ligação dupla."),
  q("O carbono forma tantos compostos porque:", ["Faz 4 ligações e cadeias", "Tem muitos prótons no núcleo", "É um metal muito reativo", "Não se liga ao hidrogênio"], 0, "Tetravalência e capacidade de ligar-se a outros carbonos em cadeias longas."),
  m("Marque as classificações corretas para o propano (C–C–C):", ["Aberta", "Saturada", "Homogênea", "Aromática", "Ramificada"], [0, 1, 2], "Não tem anel nem ramificação."),
  m("Marque os hidrocarbonetos:", ["Metano", "Etano", "Benzeno", "Etanol", "Ácido acético"], [0, 1, 2], "Etanol e ácido acético têm oxigênio."),
], "n");

extend(QUIMICA, "Funções orgânicas", [
  q("O grupo –COOH caracteriza:", ["Ácidos carboxílicos", "Álcoois de cadeia longa", "Cetonas aromáticas", "Aminas primárias"], 0, "Carboxila. Ex.: ácido acético (vinagre)."),
  q("O grupo –CHO, na ponta da cadeia, caracteriza:", ["Aldeídos", "Cetonas", "Éteres", "Ésteres"], 0, "Ex.: metanal (formol) e etanal."),
  q("Um éter tem o oxigênio:", ["Entre dois carbonos", "Ligado a um hidrogênio", "Numa dupla com carbono", "Fora da molécula"], 0, "R–O–R'. Ex.: éter dietílico, antigo anestésico."),
  q("O sufixo '-ol' no nome indica:", ["Álcool", "Aldeído", "Cetona", "Ácido"], 0, "Etanol, metanol, propanol."),
  qe("O cheiro de banana de alguns doces vem do acetato de isoamila.", "Esse composto pertence à função:", ["Éster", "Amina", "Álcool", "Aldeído"], 0, "'Acetato de…' indica éster; ésteres dão aromas de frutas."),
  qe("A cafeína e a nicotina têm átomos de nitrogênio em sua estrutura e são estimulantes.", "A presença de nitrogênio ligado a carbono indica a função:", ["Amina", "Éter", "Cetona", "Ácido"], 0, "Muitos alcaloides naturais são aminas."),
  qe("O vinagre é usado para tirar o cheiro de peixe das mãos.", "Isso funciona porque o ácido acético:", ["Reage com as aminas", "Perfuma a pele com outro cheiro", "Mata as bactérias do peixe cru", "Evapora as gorduras das mãos"], 0, "Ácido + amina (básica) formam um sal sem cheiro forte."),
  qe("O formol (metanal) é proibido em alisantes de cabelo pela Anvisa.", "O formol é um:", ["Aldeído tóxico", "Álcool inofensivo", "Sal de cozinha", "Açúcar natural"], 0, "Libera vapores irritantes e é considerado cancerígeno."),
  q("A propanona (acetona) pertence à função:", ["Cetona", "Aldeído", "Álcool", "Éter"], 0, "Carbonila no carbono do meio da cadeia."),
  m("Marque os pares grupo → função corretos:", ["–OH em C saturado: álcool", "–COOH: ácido carboxílico", "–NH₂: amina", "–CHO: cetona", "–O–: éster"], [0, 1, 2], "–CHO é aldeído; –O– entre carbonos é éter."),
  m("Marque os compostos com a função correta:", ["Etanol: álcool", "Ácido acético: ácido carboxílico", "Acetona: cetona", "Metano: álcool", "Vinagre: éter"], [0, 1, 2], "Metano é hidrocarboneto; vinagre contém ácido acético."),
], "n");

extend(QUIMICA, "Isomeria", [
  q("Butano e metilpropano (C₄H₁₀) são isômeros de:", ["Cadeia", "Função", "Posição", "Óptica"], 0, "Mesma fórmula; um tem cadeia normal e o outro, ramificada."),
  q("Propan-1-ol e propan-2-ol são isômeros de:", ["Posição", "Função", "Cadeia", "Óptica"], 0, "O grupo –OH muda de posição na mesma cadeia."),
  q("Um carbono quiral (assimétrico) está ligado a:", ["4 grupos diferentes", "Dois grupos exatamente iguais", "Uma ligação dupla com oxigênio", "Somente átomos de hidrogênio"], 0, "Ele gera isomeria óptica: duas formas espelhadas."),
  q("Isômeros cis e trans diferem:", ["Na posição em torno da dupla", "Na fórmula molecular inteira", "No número total de carbonos", "Na massa molar de cada um"], 0, "Cis: grupos do mesmo lado; trans: lados opostos."),
  qe("A talidomida, nos anos 1960, tinha uma forma que tratava enjoos e outra que causava malformações.", "As duas formas eram isômeros:", ["Ópticos", "De função", "De cadeia", "Iguais"], 0, "Enantiômeros podem ter efeitos biológicos muito diferentes."),
  qe("Gorduras trans, ligadas a doenças cardíacas, aparecem na hidrogenação parcial de óleos.", "O termo 'trans' se refere a:", ["Isomeria geométrica", "Gorduras sem nenhum carbono", "Gorduras que são radioativas", "Ácidos muito fortes e corrosivos"], 0, "Na configuração trans, os grupos ficam em lados opostos da dupla."),
  qe("Etanol (álcool) e metoximetano (éter) têm a mesma fórmula, C₂H₆O, mas o etanol ferve a 78 °C e o éter a −24 °C.", "A diferença no ponto de ebulição vem de:", ["Funções diferentes", "Massas molares diferentes", "Números de átomos diferentes", "Cores diferentes"], 0, "São isômeros de função; o álcool faz ligações de hidrogênio, o éter não."),
  qe("A carvona tem uma forma com cheiro de hortelã e outra com cheiro de cominho.", "Isso mostra que isômeros ópticos podem:", ["Ter efeitos biológicos distintos", "Ter fórmulas moleculares diferentes", "Ser idênticos em todas as propriedades", "Não ter carbono na sua estrutura"], 0, "Nossos receptores de olfato distinguem as formas espelhadas."),
  q("Isômeros têm, obrigatoriamente, a mesma:", ["Fórmula molecular", "Fórmula estrutural", "Temperatura de ebulição", "Atividade biológica"], 0, "Mesmos átomos em quantidade, arranjos diferentes."),
  m("Marque os tipos de isomeria plana:", ["De cadeia", "De posição", "De função", "Óptica", "Geométrica"], [0, 1, 2], "Óptica e geométrica são isomerias espaciais."),
  m("Marque condições para isomeria geométrica (cis-trans) em alcenos:", ["Ligação dupla entre carbonos", "Ligantes diferentes em cada carbono da dupla", "Rotação impedida na dupla", "Carbono quiral obrigatório", "Anel benzênico obrigatório"], [0, 1, 2], "Carbono quiral é para isomeria óptica; anel não é necessário."),
], "n");

extend(QUIMICA, "Reações orgânicas e polímeros", [
  q("A reação de um ácido carboxílico com um álcool forma:", ["Éster e água", "Sal e água", "Aldeído e gás", "Amina e ácido"], 0, "Esterificação: ácido + álcool ⇌ éster + água."),
  q("Na adição de H₂ a um alceno (hidrogenação), forma-se:", ["Um alcano", "Um alcino", "Um álcool", "Um éster"], 0, "A dupla se rompe e recebe hidrogênios: vira ligação simples."),
  q("A combustão completa do metano produz:", ["CO₂ e H₂O", "CO e H₂", "C e H₂O", "O₂ e CO₂"], 0, "CH₄ + 2 O₂ → CO₂ + 2 H₂O."),
  q("Monômero é:", ["A unidade que se repete", "Um polímero muito grande e longo", "Um tipo de metal de transição", "Uma enzima produzida pelo corpo"], 0, "Ex.: o eteno é o monômero do polietileno."),
  qe("A margarina é produzida a partir de óleos vegetais líquidos, que viram sólidos.", "A reação usada é a:", ["Hidrogenação", "Combustão completa", "Saponificação", "Fermentação alcoólica"], 0, "Adicionar H₂ às duplas dos óleos os torna mais saturados e sólidos."),
  qe("O náilon é obtido pela reação entre monômeros que liberam água a cada ligação.", "Esse tipo de polimerização é de:", ["Condensação", "Adição simples", "Combustão", "Fissão nuclear"], 0, "Na condensação, sai uma molécula pequena (água) a cada união."),
  qe("Garrafas PET recicladas podem virar fibras para roupas.", "Isso é possível porque o PET é um:", ["Termoplástico", "Termofixo que não derrete mais", "Metal leve e muito maleável", "Tipo especial de vidro grosso"], 0, "Termoplásticos podem ser derretidos e moldados de novo."),
  qe("Na fermentação, leveduras transformam glicose em etanol e CO₂.", "Esse processo é usado para produzir:", ["Pão, cerveja e etanol", "Plástico e borracha sintética", "Aço inoxidável e vidro", "Sal de cozinha e açúcar refinado"], 0, "O CO₂ faz o pão crescer; o etanol vira bebida ou combustível."),
  q("O PVC é muito usado em:", ["Canos e tubos", "Pneus de carro", "Garrafas de vidro", "Fios de cobre"], 0, "Policloreto de vinila: tubos, conexões, revestimentos."),
  m("Marque os polímeros naturais:", ["Celulose", "Amido", "Proteínas", "Polietileno", "PVC"], [0, 1, 2], "Polietileno e PVC são sintéticos."),
  m("Marque os produtos da esterificação entre ácido acético e etanol:", ["Acetato de etila", "Água", "Um éster", "Sal de cozinha", "Gás oxigênio"], [0, 1, 2], "Ácido + álcool → éster (acetato de etila) + água."),
  o("Explique a diferença entre polimerização por adição e por condensação.", "Na adição, os monômeros (com ligação dupla) se juntam abrindo a dupla, sem perder átomos, como no polietileno. Na condensação, a cada ligação entre monômeros sai uma molécula pequena, como água, como no náilon e no PET.", [
    ["Adição: abre a dupla, sem perder átomos", "dupla", "adicao", "sem perder"],
    ["Condensação: libera molécula pequena", "agua", "libera", "condensac", "molecula pequena"],
    ["Exemplos", "polietileno", "nailon", "pet", "pvc", "exemplo"],
  ]),
], "n");

extend(QUIMICA, "Separação de misturas", [
  q("Para separar o sal da água do mar nas salinas, usa-se:", ["Evaporação", "Filtração", "Imantação", "Decantação"], 0, "O sol evapora a água e o sal cristaliza."),
  q("A centrifugação acelera a:", ["Decantação", "Destilação", "Evaporação", "Dissolução"], 0, "Gira rápido e separa por densidade (ex.: sangue em laboratório)."),
  q("A cromatografia em papel separa:", ["Pigmentos de uma tinta", "Areia grossa e pedrinhas", "Água e óleo de cozinha", "Limalha de ferro e enxofre"], 0, "Cada pigmento sobe com o solvente numa velocidade diferente."),
  q("A destilação fracionada é usada para separar:", ["Líquidos miscíveis", "Sólidos de tamanhos diferentes", "Gases de líquidos que não se misturam", "Metais atraídos por ímãs"], 0, "Ex.: petróleo e ar liquefeito."),
  qe("No coador de café, o pó fica no filtro e o líquido passa.", "O processo de separação é a:", ["Filtração", "Destilação", "Catação", "Sublimação"], 0, "O filtro retém o sólido insolúvel (e a água extrai o café solúvel)."),
  qe("Na peneira de uma obra, separa-se a areia fina das pedrinhas.", "Esse método se chama:", ["Peneiração", "Levigação", "Flotação", "Fusão fracionada"], 0, "Separação de sólidos de tamanhos diferentes."),
  qe("Na lavagem do ouro nos garimpos, a água arrasta a areia leve e o ouro, mais denso, fica.", "O método é a:", ["Levigação", "Destilação", "Imantação", "Sublimação"], 0, "Uma corrente de água leva o material menos denso."),
  qe("Na estação de tratamento de água, após a floculação, a água fica parada para a sujeira ir ao fundo.", "Essa etapa é a:", ["Decantação", "Cloração", "Fluoretação", "Filtração"], 0, "Os flocos, mais densos, depositam no fundo."),
  q("Água e álcool formam mistura homogênea e são separados por:", ["Destilação fracionada", "Filtração simples em papel", "Decantação em funil comum", "Peneiração em malha fina"], 0, "Pontos de ebulição diferentes (100 °C e 78 °C)."),
  m("Marque cada mistura com o método de separação adequado:", ["Água e areia: filtração", "Água e sal: evaporação", "Petróleo: destilação fracionada", "Água e álcool: filtração", "Ferro e areia: destilação"], [0, 1, 2], "Água e álcool: destilação; ferro e areia: imantação."),
  m("Marque as etapas do tratamento de água:", ["Floculação", "Decantação", "Filtração", "Fermentação", "Saponificação"], [0, 1, 2], "Fermentação e saponificação não fazem parte."),
], "n");

extend(QUIMICA, "Distribuição eletrônica e tabela", [
  q("A distribuição eletrônica do sódio (Z = 11) termina em:", ["3s¹", "2p⁶", "3p¹", "2s²"], 0, "1s² 2s² 2p⁶ 3s¹: um elétron de valência, típico dos alcalinos."),
  q("Quantas camadas eletrônicas tem um elemento do 4º período?", ["4", "2", "8", "18"], 0, "O período indica o número de camadas ocupadas."),
  q("O cloro (Z = 17) tem quantos elétrons na camada de valência?", ["7", "17", "1", "8"], 0, "2, 8, 7: por isso tende a ganhar 1 elétron (Cl⁻)."),
  q("O oxigênio (Z = 8) tende a formar o íon:", ["O²⁻", "O²⁺", "O⁺", "O⁸⁻"], 0, "Tem 6 elétrons de valência; ganha 2 para completar o octeto."),
  qe("O magnésio (Z = 12) é usado em ligas leves para aviões e bicicletas.", "Sua distribuição por camadas é:", ["2, 8, 2", "2, 10", "2, 8, 1, 1", "12"], 0, "K = 2, L = 8, M = 2. Família 2 (alcalino-terrosos)."),
  qe("O silício, usado em chips, está no 3º período e na família 14.", "Ele tem quantos elétrons de valência?", ["4", "3", "14", "2"], 0, "Família 14: 4 elétrons de valência, como o carbono."),
  qe("Na tabela, a energia de ionização cresce para a direita e para cima.", "Qual destes perde elétrons com mais facilidade?", ["Potássio (K)", "Flúor (F)", "Neônio (Ne)", "Oxigênio (O)"], 0, "Metais alcalinos, à esquerda e embaixo, têm baixa energia de ionização."),
  qe("O cálcio do leite e dos ossos tem Z = 20.", "Ele forma o íon:", ["Ca²⁺", "Ca²⁻", "Ca⁺", "Ca⁴⁺"], 0, "2, 8, 8, 2: perde os 2 elétrons de valência."),
  q("Gases nobres, exceto o hélio, têm na camada de valência:", ["8 elétrons", "2 elétrons", "1 elétron", "4 elétrons"], 0, "Octeto completo: muito estáveis."),
  m("Marque os pares elemento → íon típico corretos:", ["Na → Na⁺", "Cl → Cl⁻", "Mg → Mg²⁺", "O → O²⁺", "Ca → Ca⁻"], [0, 1, 2], "O forma O²⁻; Ca forma Ca²⁺."),
  m("Marque as tendências corretas na tabela periódica:", ["Raio atômico cresce para baixo", "Eletronegatividade cresce para a direita", "Metais ficam majoritariamente à esquerda", "Gases nobres ficam no grupo 1", "Raio cresce para a direita"], [0, 1, 2], "Gases nobres: grupo 18; o raio diminui para a direita."),
], "n");

extend(QUIMICA, "Geometria e polaridade", [
  q("A geometria da molécula de água é:", ["Angular", "Linear", "Tetraédrica", "Trigonal plana"], 0, "Dois pares livres no O dobram a molécula (≈104,5°)."),
  q("A molécula de BF₃ tem geometria:", ["Trigonal plana", "Piramidal, como a amônia", "Angular, como a água", "Linear, como o CO₂"], 0, "Três ligações e nenhum par livre no boro."),
  q("Moléculas polares se dissolvem melhor em:", ["Solventes polares", "Solventes apolares", "Metais líquidos", "Vácuo"], 0, "'Semelhante dissolve semelhante'."),
  q("As forças de London (dipolo induzido) são típicas de moléculas:", ["Apolares", "Iônicas", "Metálicas", "Muito polares"], 0, "Ex.: entre moléculas de gasolina ou O₂."),
  qe("A água sobe por tubos finos e forma gotas arredondadas numa folha.", "Esses fenômenos se devem principalmente a:", ["Ligações de hidrogênio", "Ligações iônicas dentro da água", "Ausência de qualquer força entre moléculas", "Ligações metálicas entre as moléculas"], 0, "As fortes atrações entre moléculas de água geram tensão superficial e capilaridade."),
  qe("Um sabão tem uma ponta polar e uma longa cauda apolar.", "Isso permite que ele:", ["Ligue gordura e água", "Dissolva somente o sal", "Evite a formação de espuma", "Endureça a água da torneira"], 0, "A cauda apolar prende a gordura; a cabeça polar fica na água: forma micelas."),
  qe("Gasolina não se mistura com água, mas se mistura com óleo.", "A explicação é que a gasolina é:", ["Apolar", "Polar, como a água", "Iônica, como o sal", "Metálica, como o mercúrio"], 0, "Apolar dissolve apolar."),
  qe("O metano (CH₄) é um gás à temperatura ambiente, e a água, um líquido, apesar de massas parecidas (16 e 18).", "A diferença vem de:", ["Ligações de hidrogênio na água", "O metano ser mais pesado", "A água ter mais carbono", "O metano ser iônico"], 0, "Água tem interações fortes; metano, apolar, só tem forças fracas."),
  q("A molécula de CCl₄ é apolar porque:", ["É simétrica", "Não tem nenhuma ligação polar", "É um composto iônico", "Tem par de elétrons livre no carbono"], 0, "As ligações C–Cl são polares, mas a geometria tetraédrica simétrica as anula."),
  m("Quais destas moléculas têm polaridade? Marque todas:", ["HCl", "NH₃", "H₂O", "CH₄", "O₂"], [0, 1, 2], "CH₄ e O₂ são apolares."),
  m("Marque os pares molécula → geometria corretos:", ["CO₂: linear", "CH₄: tetraédrica", "NH₃: piramidal", "H₂O: linear", "BF₃: angular"], [0, 1, 2], "H₂O é angular; BF₃, trigonal plana."),
], "n");

extend(QUIMICA, "Ácidos, bases, sais e óxidos", [
  q("Ácidos fortes, como o HCl, em água:", ["Ionizam quase todo", "Quase não se ionizam", "Se transformam em bases", "Não conduzem nenhuma corrente"], 0, "Liberam muitos H⁺: conduzem bem a corrente."),
  q("O gás que causa o efeito estufa e forma ácido carbônico na água é o:", ["CO₂", "N₂", "O₂", "Ar (argônio)"], 0, "CO₂ + H₂O ⇌ H₂CO₃ (por isso a água com gás é levemente ácida)."),
  q("A neutralização entre HNO₃ e KOH forma:", ["KNO₃ e água", "KOH e água", "HNO₃ e sal", "Gás hidrogênio"], 0, "Ácido + base → sal (KNO₃, nitrato de potássio) + água."),
  q("O óxido de ferro presente na ferrugem é um:", ["Óxido básico", "Ácido forte", "Sal neutro", "Gás nobre"], 0, "Óxidos de metais tendem a ser básicos."),
  qe("Em piscinas, usa-se hipoclorito de sódio (NaClO) para desinfetar a água.", "O hipoclorito é classificado como:", ["Sal", "Ácido", "Base", "Óxido"], 0, "NaClO é um sal; em água forma ácido hipocloroso, que mata micróbios."),
  qe("O SO₂ liberado por fábricas reage com a água da chuva.", "O resultado é:", ["Chuva ácida", "Chuva básica", "Neve salgada", "Água mais pura"], 0, "Óxidos ácidos + água → ácidos (sulfuroso/sulfúrico)."),
  qe("Antiácidos com hidróxido de alumínio aliviam a azia.", "Eles agem porque:", ["Neutralizam o excesso de ácido", "Aumentam a acidez do estômago", "Matam bactérias da boca", "Viram açúcar no estômago"], 0, "Base + ácido → sal + água, reduzindo a acidez."),
  qe("A cal virgem (CaO) esquenta muito ao ser misturada com água.", "A reação forma:", ["Ca(OH)₂, uma base", "CaCO₃, um ácido", "Ca, um metal puro", "CO₂, um gás"], 0, "CaO + H₂O → Ca(OH)₂: reação exotérmica."),
  q("O ácido presente no vinagre é o:", ["Acético", "Sulfúrico", "Nítrico", "Clorídrico"], 0, "CH₃COOH, um ácido fraco."),
  m("Marque as bases:", ["NaOH", "Mg(OH)₂", "NH₄OH", "HCl", "CO₂"], [0, 1, 2], "HCl é ácido; CO₂, óxido."),
  m("Marque os óxidos:", ["CO₂", "CaO", "Fe₂O₃", "NaCl", "H₂SO₄"], [0, 1, 2], "NaCl é sal; H₂SO₄, ácido."),
  o("Explique o que acontece numa reação de neutralização e dê um exemplo do cotidiano.", "Na neutralização, um ácido reage com uma base: o H⁺ do ácido e o OH⁻ da base formam água, e os outros íons formam um sal. Ex.: o leite de magnésia, uma base, neutraliza o excesso de ácido clorídrico do estômago e alivia a azia.", [
    ["Ácido + base", "acido", "base"],
    ["Formam sal e água", "sal", "agua"],
    ["Exemplo do cotidiano", "azia", "magnesia", "antiacido", "estomago", "calcario", "exemplo"],
  ]),
], "n");

extend(QUIMICA, "Diluição e mistura de soluções", [
  q("Ao diluir uma solução, a quantidade de soluto:", ["Não muda", "Aumenta junto com a água", "Some totalmente da solução", "Cai pela metade sempre"], 0, "Só se acrescenta solvente; o soluto é o mesmo."),
  q("Misturando 1 L de solução 2 mol/L com 1 L de 4 mol/L do mesmo soluto, a concentração final é:", ["3 mol/L", "6 mol/L", "2 mol/L", "8 mol/L"], 0, "n total = 2 + 4 = 6 mol em 2 L: 3 mol/L."),
  q("200 mL de suco concentrado são diluídos até 1 L. A concentração ficou:", ["5 vezes menor", "5 vezes maior", "Igual à de antes", "2 vezes menor"], 0, "O volume passou de 0,2 L para 1 L: 5 vezes maior volume, 5 vezes menos concentrado."),
  q("Para preparar 500 mL de solução 0,2 mol/L a partir de uma 1 mol/L, usam-se:", ["100 mL da solução 1 mol/L", "50 mL da solução 1 mol/L", "250 mL da solução 1 mol/L", "500 mL da solução 1 mol/L"], 0, "C₁V₁ = C₂V₂ → 1 · V₁ = 0,2 · 500 → V₁ = 100 mL."),
  qe("O rótulo de um suco concentrado diz: 'dilua 1 parte de suco para 4 partes de água'.", "O suco pronto terá a concentração original dividida por:", ["5", "4", "1", "3"], 0, "1 parte de suco vira 5 partes de volume total: concentração 5 vezes menor."),
  qe("Um desinfetante deve ser usado na proporção de 50 mL para 1 L de água.", "Quanto desinfetante se usa num balde de 4 L?", ["200 mL", "50 mL", "100 mL", "400 mL"], 0, "50 mL por litro × 4 L = 200 mL."),
  qe("Uma enfermeira precisa de 100 mL de soro a 0,9% e tem uma solução a 9%.", "Quantos mL da solução a 9% ela deve diluir até 100 mL?", ["10 mL", "1 mL", "90 mL", "9 mL"], 0, "9% · V = 0,9% · 100 → V = 10 mL."),
  qe("Ao misturar duas soluções de solutos que não reagem, cada soluto passa a ocupar o volume total.", "Por isso, a concentração de cada um:", ["Diminui", "Aumenta", "Fica igual", "Dobra"], 0, "O mesmo número de mols se espalha num volume maior."),
  q("Evaporar parte do solvente de uma solução faz a concentração:", ["Aumentar", "Diminuir", "Ficar igual", "Zerar"], 0, "Menos solvente com o mesmo soluto: mais concentrado."),
  m("Na diluição C₁V₁ = C₂V₂, marque as corretas:", ["O número de mols se mantém", "Se o volume dobra, C cai pela metade", "Acrescenta-se solvente", "Acrescenta-se soluto", "A concentração aumenta"], [0, 1, 2], "Na diluição, não se acrescenta soluto e a concentração diminui."),
  m("Marque exemplos de diluição no cotidiano:", ["Fazer suco a partir do concentrado", "Diluir água sanitária para limpar", "Pôr água no café forte", "Ferver o molho para engrossar", "Deixar a água do mar evaporar"], [0, 1, 2], "Ferver e evaporar concentram, não diluem."),
], "n");

extend(QUIMICA, "Propriedades coligativas", [
  q("Propriedades coligativas dependem:", ["Do número de partículas de soluto", "Da cor do soluto", "Do tipo de recipiente", "Do formato das moléculas"], 0, "Não importa qual é o soluto, e sim quantas partículas há."),
  q("Adicionar soluto não volátil à água faz a pressão de vapor:", ["Diminuir", "Aumentar", "Não mudar", "Zerar"], 0, "Tonoscopia: as partículas do soluto atrapalham a saída das moléculas de água."),
  q("1 mol de NaCl em água gera quantos mols de partículas?", ["2", "1", "3", "0,5"], 0, "NaCl → Na⁺ + Cl⁻: dobra o efeito coligativo em relação a 1 mol de açúcar."),
  q("A pressão osmótica é a pressão necessária para:", ["Impedir a osmose", "Acelerar a evaporação", "Ferver a solução", "Congelar a água"], 0, "É a pressão que bloqueia a passagem do solvente pela membrana."),
  qe("Nas regiões frias, coloca-se etilenoglicol na água do radiador do carro.", "O aditivo serve para:", ["Baixar o ponto de congelamento", "Aumentar a pressão de vapor", "Deixar a água azul", "Diminuir a densidade do motor"], 0, "Crioscopia: a solução só congela bem abaixo de 0 °C, protegendo o motor."),
  qe("Hemácias colocadas em água pura incham e podem estourar.", "Isso acontece porque a água pura é, em relação à célula:", ["Hipotônica", "Hipertônica", "Isotônica", "Saturada"], 0, "A água entra por osmose na célula, que é mais concentrada."),
  qe("Para conservar carne, povos antigos a salgavam (charque).", "O sal ajuda porque:", ["Desidrata os micróbios", "Esquenta a carne por dentro", "Aumenta a umidade da carne", "Alimenta as bactérias boas"], 0, "O meio salgado (hipertônico) desidrata micro-organismos, impedindo seu crescimento."),
  qe("A dessalinização por osmose reversa produz água potável a partir da água do mar.", "Nesse processo, aplica-se pressão para:", ["Empurrar só a água pela membrana", "Fazer o sal atravessar a membrana", "Ferver a água do mar mais rápido", "Congelar o sal e separá-lo da água"], 0, "Com pressão maior que a osmótica, a água vai do lado salgado para o lado puro."),
  q("Uma solução isotônica em relação ao sangue:", ["Tem a mesma pressão osmótica", "Tem mais sal que o sangue", "Não tem sal nenhum", "É sempre ácida"], 0, "Ex.: soro fisiológico (0,9% de NaCl), que não faz as células incharem nem murcharem."),
  m("Marque as propriedades coligativas:", ["Tonoscopia", "Ebulioscopia", "Crioscopia", "Densidade", "Cor"], [0, 1, 2], "Também há a osmoscopia. Densidade e cor não são coligativas."),
  m("Marque os efeitos de dissolver sal na água:", ["Ferve acima de 100 °C", "Congela abaixo de 0 °C", "Pressão de vapor menor", "Ferve abaixo de 100 °C", "Congela acima de 0 °C"], [0, 1, 2], "O soluto eleva o ponto de ebulição e baixa o de congelamento."),
  o("Explique por que a alface murcha quando temperada com sal muito antes de ser servida.", "O sal deixa o meio externo das folhas mais concentrado (hipertônico). Por osmose, a água sai das células da alface em direção ao meio mais concentrado. As células perdem água e a folha murcha.", [
    ["Meio externo mais concentrado", "concentrad", "hipertonic"],
    ["Osmose", "osmose"],
    ["Água sai das células", "agua sai", "perde agua", "celula"],
  ]),
], "n");

extend(QUIMICA, "Termoquímica no cotidiano", [
  q("Ao acender um fósforo, a reação de combustão:", ["Libera calor e luz", "Absorve calor do ar", "Não troca energia", "Produz frio"], 0, "Combustão é exotérmica."),
  q("A sensação de frio ao passar álcool na pele vem da:", ["Evaporação, que absorve calor", "Combustão do álcool", "Reação com a pele", "Condensação do vapor"], 0, "O álcool evapora rápido e retira calor da pele."),
  q("O 'valor calórico' de um alimento indica:", ["A energia liberada no metabolismo", "A temperatura do alimento", "A massa de gordura apenas", "O preço por quilo"], 0, "Medido em kcal; 1 kcal ≈ 4,2 kJ."),
  q("O gelo-seco (CO₂ sólido) produz 'fumaça' fria porque:", ["Sublima absorvendo calor", "Queima rapidamente", "Libera calor ao derreter", "Reage com o oxigênio"], 0, "Passa direto a gás retirando calor do ar, que condensa vapor d'água em névoa."),
  qe("Um rótulo diz: 100 g de chocolate fornecem 540 kcal.", "Quantas kcal há numa barra de 25 g?", ["135 kcal", "540 kcal", "21,6 kcal", "270 kcal"], 0, "540 · 25/100 = 135 kcal."),
  qe("Compressas instantâneas quentes contêm cloreto de cálcio que se dissolve na água ao serem apertadas.", "A dissolução desse sal é:", ["Exotérmica", "Endotérmica", "Nuclear", "Sem troca de calor"], 0, "A dissolução libera calor e a compressa esquenta."),
  qe("Ao suar num dia quente, o corpo resfria.", "A transformação responsável é:", ["A evaporação do suor (endotérmica)", "A condensação do suor (exotérmica)", "A fusão do suor", "A combustão do suor"], 0, "A água do suor absorve calor da pele para evaporar."),
  qe("Para ferver 1 L de água, um fogão a gás consumiu certa quantidade de gás de cozinha (propano e butano).", "A energia para o aquecimento veio:", ["Da combustão do gás", "Da evaporação da água", "Do frio do ambiente", "Da panela de metal"], 0, "A queima do gás libera calor, transferido para a água."),
  q("Uma reação com ΔH = +50 kJ:", ["Absorve 50 kJ", "Libera 50 kJ", "Não troca energia", "Explode"], 0, "ΔH positivo: endotérmica."),
  m("Marque os processos endotérmicos:", ["Evaporação da água", "Fotossíntese", "Derretimento do gelo", "Queima do gás de cozinha", "Respiração celular"], [0, 1, 2], "Queima e respiração liberam energia."),
  m("Marque usos práticos de processos exotérmicos:", ["Aquecer comida com gás", "Compressa quente instantânea", "Motores a combustão", "Bolsa de gelo instantâneo", "Geladeira"], [0, 1, 2], "Bolsa de gelo é endotérmica; geladeira usa trabalho para retirar calor."),
], "n");

extend(QUIMICA, "pH e equilíbrio no dia a dia", [
  q("O pH da saliva fica próximo de:", ["7", "1", "13", "3"], 0, "Próximo do neutro; após comer doces, cai e favorece a cárie."),
  q("A cárie dentária está ligada a ácidos produzidos por:", ["Bactérias que comem açúcar", "Excesso de flúor na água", "Água pura em excesso", "Vitamina C das frutas"], 0, "Bactérias fermentam o açúcar e liberam ácidos que dissolvem o esmalte."),
  q("O flúor no creme dental ajuda porque:", ["Fortalece o esmalte", "Aumenta a acidez da boca", "Alimenta as bactérias da placa", "Clareia os dentes na hora"], 0, "Forma fluorapatita, menos solúvel em meio ácido."),
  q("Hortênsias ficam azuis em solo ácido e rosa em solo básico. Elas funcionam como:", ["Indicadores de pH", "Catalisadores do solo", "Fertilizantes naturais", "Soluções tampão vivas"], 0, "A cor depende do pH e da disponibilidade de alumínio no solo."),
  qe("Após comer, o pH da boca cai e depois volta ao normal em cerca de 30 minutos.", "O que ajuda a saliva a recuperar o pH é:", ["O efeito tampão da saliva", "Mais açúcar na boca", "Refrigerante ácido", "Ficar sem beber água"], 0, "Bicarbonato e fosfatos da saliva neutralizam os ácidos."),
  qe("Refrigerantes de cola têm pH perto de 2,5, por causa do ácido fosfórico.", "O consumo frequente pode:", ["Desgastar o esmalte dos dentes", "Fortalecer os dentes", "Deixar a saliva básica", "Aumentar o flúor"], 0, "Meio muito ácido dissolve minerais do esmalte."),
  qe("Num aquário, o pH ideal para certos peixes é 6,5–7,5. Uma medição deu 5,0.", "Para corrigir, o aquarista deve:", ["Adicionar algo levemente básico", "Adicionar vinagre", "Adicionar ácido sulfúrico", "Não fazer nada"], 0, "pH 5 é ácido demais; uma base fraca (como bicarbonato, com cuidado) eleva o pH."),
  qe("Na piscina, o cloro desinfeta melhor quando o pH fica entre 7,2 e 7,6.", "Se o pH estiver em 8,5, a água está:", ["Básica demais", "Ácida demais", "Neutra", "Salgada demais"], 0, "pH 8,5 é básico; usa-se redutor de pH para corrigir."),
  q("O pH do estômago, por causa do HCl, fica em torno de:", ["1 a 3", "7 a 8", "10 a 12", "13 a 14"], 0, "Muito ácido, ajuda a digerir e mata micróbios."),
  m("Marque as substâncias ácidas do cotidiano:", ["Suco de laranja", "Vinagre", "Refrigerante de cola", "Sabão em pó", "Soda cáustica"], [0, 1, 2], "Sabão e soda cáustica são básicos."),
  m("Marque atitudes que protegem os dentes contra ácidos:", ["Escovar com creme dental com flúor", "Reduzir doces entre as refeições", "Beber água após refrigerante", "Comer bala o dia todo", "Escovar com vinagre"], [0, 1, 2], "Bala o dia todo e vinagre favorecem a desmineralização."),
], "n");

extend(QUIMICA, "Eletroquímica", [
  q("Na pilha de Daniell (zinco e cobre), o zinco:", ["Sofre oxidação (ânodo)", "Sofre redução (cátodo)", "Não reage", "Ganha elétrons"], 0, "O zinco perde elétrons e corrói; o cobre recebe e deposita."),
  q("Oxidação é:", ["Perda de elétrons", "Ganho de elétrons", "Ganho de prótons", "Perda de nêutrons"], 0, "O número de oxidação aumenta."),
  q("Na eletrólise da água, formam-se:", ["H₂ e O₂", "CO₂ e H₂", "Cl₂ e Na", "O₃ e H₂O₂"], 0, "2 H₂O → 2 H₂ + O₂, com corrente elétrica."),
  q("A galvanoplastia é usada para:", ["Revestir com metal", "Produzir plástico novo", "Purificar a água potável", "Fabricar vidro temperado"], 0, "Por eletrólise, deposita-se uma camada fina (ex.: cromar uma peça)."),
  qe("Baterias de celular são recarregáveis: na carga, a corrente da tomada inverte as reações.", "Durante a carga, ocorre:", ["Eletrólise (reação forçada)", "Combustão do lítio", "Fusão nuclear", "Simples evaporação"], 0, "A energia elétrica força a reação não espontânea, que depois, na descarga, gera corrente."),
  qe("Telhas e calhas de aço são 'galvanizadas' com uma camada de zinco.", "O zinco protege o aço porque:", ["Oxida no lugar do ferro", "É mais bonito", "Não conduz eletricidade", "Impede o sol de esquentar"], 0, "O zinco, mais reativo, se oxida primeiro (proteção de sacrifício)."),
  qe("O alumínio é produzido pela eletrólise da alumina, que consome muita energia elétrica.", "Por isso, reciclar latas de alumínio:", ["Economiza muita energia", "Gasta mais energia", "Não faz diferença", "Produz energia nuclear"], 0, "Refundir a lata usa cerca de 5% da energia para produzir alumínio novo."),
  qe("Uma colher de prata escurece com o tempo, formando sulfeto de prata.", "O escurecimento é uma:", ["Oxidação da prata", "Redução da prata", "Fusão da prata", "Dissolução simples"], 0, "A prata perde elétrons ao reagir com compostos de enxofre do ar."),
  q("Na pilha, a ponte salina serve para:", ["Manter o equilíbrio de cargas", "Gerar os elétrons", "Esquentar a pilha", "Impedir a reação"], 0, "Íons migram pela ponte e mantêm as soluções eletricamente neutras."),
  m("Marque as afirmações corretas sobre pilhas:", ["Transformam energia química em elétrica", "No ânodo ocorre oxidação", "Elétrons vão do ânodo ao cátodo", "Precisam de corrente externa para funcionar", "No cátodo ocorre oxidação"], [0, 1, 2], "Pilhas são espontâneas; no cátodo ocorre redução."),
  m("Marque formas de proteger o ferro da corrosão:", ["Pintar a superfície", "Galvanizar com zinco", "Usar metal de sacrifício", "Deixar em água salgada", "Riscar a pintura"], [0, 1, 2], "Água salgada e riscos aceleram a corrosão."),
  o("Explique a diferença entre pilha e eletrólise.", "A pilha transforma energia química em elétrica por meio de uma reação espontânea de oxirredução, como numa bateria descarregando. A eletrólise faz o contrário: usa energia elétrica para forçar uma reação não espontânea, como na produção de alumínio ou na recarga de baterias.", [
    ["Pilha: química → elétrica, espontânea", "espontane", "quimica em eletrica", "pilha"],
    ["Eletrólise: elétrica → química, forçada", "forca", "nao espontane", "eletrica em quimica", "eletrolise"],
    ["Exemplos", "bateria", "aluminio", "recarga", "exemplo"],
  ]),
], "n");

extend(QUIMICA, "Funções orgânicas no cotidiano", [
  q("O principal componente do gás de cozinha (GLP) é:", ["Propano e butano", "Metano e etano", "Etanol e metanol", "Hidrogênio e oxigênio"], 0, "Gás liquefeito de petróleo: propano e butano."),
  q("A glicose é classificada como um:", ["Carboidrato", "Lipídio", "Hidrocarboneto", "Éster"], 0, "C₆H₁₂O₆, com grupos álcool e aldeído."),
  q("O ácido cítrico está presente em:", ["Frutas cítricas", "O gás de cozinha", "As garrafas PET", "O vidro de janela"], 0, "Dá o sabor azedo às frutas cítricas."),
  q("A ureia, usada como fertilizante, contém a função:", ["Amida", "Éter", "Cetona", "Aldeído"], 0, "Nitrogênio ligado a carbonila: rica em nitrogênio para plantas."),
  qe("A capsaicina dá ardência à pimenta e não se dissolve bem em água, mas se dissolve em gordura.", "Por isso, para aliviar a ardência, é melhor:", ["Beber leite", "Beber água gelada", "Comer sal", "Beber refrigerante"], 0, "A capsaicina é pouco polar; a gordura do leite a dissolve e remove."),
  qe("O ácido acetilsalicílico (aspirina) é um medicamento que tem as funções éster e ácido carboxílico.", "Uma molécula com mais de um grupo funcional é chamada de:", ["Polifuncional (mista)", "Hidrocarboneto", "Monofuncional", "Inorgânica"], 0, "Moléculas com várias funções são comuns em fármacos."),
  qe("O álcool 70% é mais eficaz como antisséptico que o álcool 99%.", "A água presente ajuda porque:", ["Ajuda o álcool a penetrar", "Dilui o cheiro forte do álcool", "Deixa o álcool apenas menos inflamável", "Mata os micróbios sozinha, sem o álcool"], 0, "Com água, o álcool penetra e desnatura proteínas; o 99% evapora rápido e coagula só a superfície."),
  qe("Gorduras e óleos são formados por ésteres de glicerol e ácidos graxos.", "Óleos líquidos em temperatura ambiente costumam ter:", ["Mais ligações duplas", "Somente ligações simples", "Nenhum átomo de carbono", "Íons metálicos dissolvidos"], 0, "As duplas criam dobras que dificultam o empacotamento: ponto de fusão menor."),
  q("O etanol é usado como:", ["Combustível e antisséptico", "Fertilizante e plástico", "Metal e vidro", "Sal e açúcar"], 0, "Abastece carros e desinfeta superfícies."),
  m("Marque cada composto orgânico com seu uso real:", ["Etanol: combustível", "Acetona: removedor de esmalte", "Ácido acético: vinagre", "Metanol: bebida segura", "Formol: alimento"], [0, 1, 2], "Metanol é tóxico e formol não é alimento."),
  m("Marque os compostos orgânicos:", ["Glicose", "Etanol", "Metano", "Água", "Sal de cozinha"], [0, 1, 2], "Água e NaCl são inorgânicos."),
], "n");

extend(QUIMICA, "Polímeros e combustíveis", [
  q("O gás natural é formado principalmente por:", ["Metano", "Butano", "Etanol", "Hidrogênio"], 0, "CH₄; usado em indústrias, residências e carros (GNV)."),
  q("A octanagem da gasolina indica:", ["Resistência à detonação", "A cor da gasolina no tanque", "A quantidade de etanol misturado", "O preço do litro na bomba"], 0, "Maior octanagem aguenta mais compressão sem 'bater pino'."),
  q("O biogás é obtido a partir de:", ["Matéria orgânica decomposta", "Petróleo refinado em torres", "Urânio enriquecido em usinas", "Areia retirada do fundo do mar"], 0, "Bactérias decompõem lixo e esterco sem oxigênio e produzem metano."),
  q("Plásticos biodegradáveis são aqueles que:", ["Micróbios conseguem degradar", "Duram para sempre no ambiente", "Não pegam fogo em nenhum caso", "São feitos de metal reciclado"], 0, "Ex.: PLA, de amido de milho."),
  qe("O Brasil adiciona etanol anidro à gasolina vendida nos postos.", "Uma vantagem dessa mistura é:", ["Reduzir parte do uso de fóssil", "Aumentar a poluição", "Deixar a gasolina mais cara sempre", "Eliminar a necessidade de motor"], 0, "O etanol é renovável e eleva a octanagem."),
  qe("Sacolas plásticas comuns levam centenas de anos para se decompor no ambiente.", "Isso acontece porque o polietileno:", ["Resiste aos micro-organismos", "Dissolve facilmente na água da chuva", "É feito de papel prensado", "Evapora quando fica exposto ao sol"], 0, "Poucas enzimas conseguem quebrar suas longas cadeias."),
  qe("A queima de combustíveis fósseis libera carbono que estava guardado há milhões de anos.", "Isso contribui para:", ["O aumento do efeito estufa", "A diminuição do CO₂", "O resfriamento do planeta", "A produção de petróleo"], 0, "O CO₂ extra se acumula na atmosfera e intensifica o efeito estufa."),
  qe("Pneus usados podem ser triturados e misturados ao asfalto.", "Essa prática é um exemplo de:", ["Reaproveitamento de polímeros", "Produção de petróleo", "Queima de resíduos", "Fusão nuclear"], 0, "A borracha (polímero) ganha nova utilidade em vez de ir para o lixo."),
  q("A vulcanização da borracha usa enxofre para:", ["Ligar as cadeias", "Derreter a borracha toda", "Deixar a borracha transparente", "Tornar a borracha líquida"], 0, "Pontes de enxofre entre cadeias deixam a borracha mais firme e elástica."),
  m("Marque combustíveis renováveis:", ["Etanol", "Biodiesel", "Biogás", "Carvão mineral", "Óleo diesel"], [0, 1, 2], "Carvão e diesel são fósseis."),
  m("Marque atitudes que reduzem o lixo plástico:", ["Usar sacolas retornáveis", "Separar plástico para reciclagem", "Evitar descartáveis", "Queimar plástico no quintal", "Jogar plástico no rio"], [0, 1, 2], "Queimar ou jogar no rio polui o ar e a água."),
], "n");

extend(QUIMICA, "Mol e massa molar", [
  q("Qual é a massa molar do CO₂ (C = 12, O = 16)?", ["44 g/mol", "28 g/mol", "32 g/mol", "60 g/mol"], 0, "12 + 2 · 16 = 44 g/mol."),
  q("Quantos mols há em 36 g de água (18 g/mol)?", ["2 mol", "18 mol", "0,5 mol", "36 mol"], 0, "n = 36/18 = 2 mol."),
  q("Quantas moléculas há em 2 mol de O₂?", ["1,2 · 10²⁴", "6 · 10²³", "2 · 10²³", "3 · 10²³"], 0, "2 · 6 · 10²³ = 1,2 · 10²⁴."),
  q("A massa molar do NaCl (Na = 23, Cl = 35,5) é:", ["58,5 g/mol", "12,5 g/mol", "35,5 g/mol", "81 g/mol"], 0, "23 + 35,5 = 58,5 g/mol."),
  qe("Uma colher de chá tem cerca de 5 g de açúcar (sacarose, 342 g/mol).", "Quantos mols de sacarose há na colher, aproximadamente?", ["0,015 mol", "1,5 mol", "68 mol", "0,15 mol"], 0, "5/342 ≈ 0,0146 mol."),
  qe("Um copo tem 180 mL de água (densidade 1 g/mL, M = 18 g/mol).", "Quantos mols de água há no copo?", ["10 mol", "180 mol", "1 mol", "18 mol"], 0, "180 g / 18 g/mol = 10 mol."),
  qe("Num botijão há 13 kg de butano (C₄H₁₀, 58 g/mol).", "A ordem de grandeza da quantidade de butano é:", ["Cerca de 224 mol", "Cerca de 13 mol", "Cerca de 58 mol", "Cerca de 1 mol"], 0, "13.000/58 ≈ 224 mol."),
  qe("Um comprimido tem 0,5 g de ácido acetilsalicílico (180 g/mol).", "Quantas moléculas há, aproximadamente?", ["1,7 · 10²¹", "6 · 10²³", "3 · 10²³", "9 · 10²⁰"], 0, "0,5/180 ≈ 0,0028 mol; × 6 · 10²³ ≈ 1,7 · 10²¹."),
  q("Massa molar é a massa de:", ["1 mol de partículas", "Um só átomo", "1 litro da substância", "1 kg de substância"], 0, "Em g/mol: massa de 6 · 10²³ partículas."),
  m("Com H = 1, C = 12, O = 16, marque as massas molares corretas:", ["H₂O: 18 g/mol", "CH₄: 16 g/mol", "O₂: 32 g/mol", "CO₂: 28 g/mol", "C₂H₆O: 36 g/mol"], [0, 1, 2], "CO₂ = 44; C₂H₆O = 46."),
  m("Sobre 1 mol de qualquer substância, marque as corretas:", ["Tem ~6 · 10²³ partículas", "Sua massa é a massa molar", "Se for gás ideal nas CNTP, ocupa ~22,4 L", "Sempre pesa 1 g", "Sempre ocupa 1 L"], [0, 1, 2], "A massa e o volume dependem da substância (exceto volume de gases ideais nas mesmas condições)."),
], "n");

extend(QUIMICA, "Cálculo estequiométrico", [
  q("Em 2 H₂ + O₂ → 2 H₂O, quantos mols de O₂ reagem com 6 mol de H₂?", ["3 mol", "6 mol", "12 mol", "2 mol"], 0, "Proporção H₂ : O₂ = 2 : 1."),
  q("Em CaCO₃ → CaO + CO₂, 100 g de CaCO₃ (100 g/mol) produzem quantos g de CO₂ (44 g/mol)?", ["44 g", "56 g", "100 g", "22 g"], 0, "1 mol de CaCO₃ → 1 mol de CO₂ = 44 g."),
  q("Na combustão CH₄ + 2 O₂ → CO₂ + 2 H₂O, 1 mol de metano forma quantos mols de água?", ["2", "1", "4", "0,5"], 0, "Pela equação, 1 CH₄ → 2 H₂O."),
  q("Pureza de 80% num reagente significa que:", ["80% da massa é a substância", "Há 80 g de impureza", "O rendimento é 80%", "A reação é 80% lenta"], 0, "Em 100 g de amostra, só 80 g reagem."),
  qe("A fermentação da glicose: C₆H₁₂O₆ → 2 C₂H₆O + 2 CO₂. Uma usina fermenta 180 kg de glicose (180 g/mol).", "Quantos mols de etanol, no máximo, são produzidos?", ["2.000 mol", "1.000 mol", "180 mol", "360 mol"], 0, "180 kg = 1.000 mol de glicose → 2.000 mol de etanol."),
  qe("Um carro queima 4 mol de octano (C₈H₁₈). Pela equação, cada mol de octano libera 8 mol de CO₂.", "Quantos mols de CO₂ são emitidos?", ["32 mol", "8 mol", "4 mol", "12 mol"], 0, "4 · 8 = 32 mol de CO₂."),
  qe("Para produzir 2 mol de NH₃ (N₂ + 3 H₂ → 2 NH₃), uma indústria usou 1 mol de N₂ e 5 mol de H₂.", "Qual reagente sobrou?", ["H₂, com 2 mol em excesso", "N₂, com 1 mol em excesso", "Nenhum sobrou", "Os dois sobraram"], 0, "1 mol de N₂ usa só 3 mol de H₂: sobram 2 mol de H₂."),
  qe("Uma reação deveria produzir 50 g de produto, mas produziu 40 g.", "Qual foi o rendimento?", ["80%", "40%", "125%", "20%"], 0, "40/50 = 0,8 = 80%."),
  q("A estequiometria se baseia principalmente:", ["Na massa e nas proporções", "Na cor dos reagentes usados", "No preço de mercado dos produtos", "Na temperatura do ambiente de trabalho"], 0, "Lavoisier (massa) e Proust (proporções definidas)."),
  m("Para N₂ + 3 H₂ → 2 NH₃ (N = 14, H = 1), marque as corretas:", ["1 mol de N₂ reage com 3 mol de H₂", "Formam-se 2 mol de NH₃", "28 g de N₂ formam 34 g de NH₃", "1 mol de H₂ forma 2 mol de NH₃", "A massa total diminui"], [0, 1, 2], "28 g + 6 g = 34 g: a massa se conserva."),
  m("Marque fatores que fazem o produto real ser menor que o teórico:", ["Reagente impuro", "Reação incompleta", "Perdas no processo", "Excesso de pureza", "Conservação da massa"], [0, 1, 2], "Pureza alta não diminui o rendimento."),
  o("Explique o que é reagente limitante usando um exemplo do cotidiano.", "Reagente limitante é o que acaba primeiro e limita a quantidade de produto. Ex.: para fazer sanduíches com 2 fatias de pão e 1 de queijo, com 10 fatias de pão e 3 de queijo, só faço 3 sanduíches: o queijo é o limitante e sobra pão (excesso).", [
    ["Acaba primeiro e limita o produto", "acaba primeiro", "limita", "termina"],
    ["O outro fica em excesso", "excesso", "sobra"],
    ["Exemplo coerente", "sanduiche", "receita", "bolo", "exemplo"],
  ]),
], "n");
