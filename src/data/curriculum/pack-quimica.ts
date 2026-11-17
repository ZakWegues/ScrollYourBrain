import { QUIMICA as Q } from "./exatas";
import { c, f, pack, q } from "./pack";

pack(Q, "atomistica", 1, 1, "Separação de misturas", [
  q("Para separar areia de água, o método mais simples é:", ["Destilação", "Filtração ou decantação", "Fusão", "Centrifugação obrigatória"], 1, "Mistura heterogênea de sólido insolúvel e líquido: deixe a areia assentar (decantação) ou passe por um filtro (filtração). Destilação é para separar líquidos ou sal dissolvido."),
  q("Para obter água pura a partir de água salgada, usa-se:", ["Filtração simples", "Destilação simples", "Decantação em funil", "Cristalização fracionada"], 1, "Na destilação simples, a água ferve, o vapor é resfriado e condensa em outro recipiente; o sal, que não evapora, fica para trás. Filtrar não tira sal dissolvido."),
  q("O petróleo é separado em frações por:", ["Filtração a vácuo", "Destilação fracionada", "Catação manual", "Decantação e sifonação"], 1, "Na destilação fracionada, cada fração (gás, gasolina, querosene, diesel) condensa numa altura da torre conforme seu ponto de ebulição."),
  q("Qual é o método mais prático para separar limalha de ferro de areia?", ["Imantação", "Destilação simples", "Evaporação da mistura", "Sifonação"], 0, "Separação magnética (imantação): o ímã atrai o ferro e deixa a areia. Funciona porque só um dos componentes é magnético."),
  q("Para separar água e óleo, o equipamento mais indicado é o:", ["Funil de decantação", "Destilador simples", "Papel de filtro", "Ímã de laboratório"], 1, "Água e óleo não se misturam e formam duas fases. No funil de decantação, a água (mais densa) fica embaixo e sai pela torneira; o óleo fica em cima."),
  q("No tratamento de água, a etapa em que se adiciona sulfato de alumínio para juntar sujeira é a:", ["Cloração", "Floculação", "Fluoretação", "Filtração"], 1, "Floculação: o sulfato de alumínio forma flocos que \"agarram\" a sujeira; depois vêm decantação, filtração, cloração e fluoretação."),
  f("Mistura homogênea x heterogênea", "Homogênea: uma fase (água + sal dissolvido). Heterogênea: mais de uma fase (água + óleo)."),
  f("Etapas do tratamento de água", "Coagulação → floculação → decantação → filtração → cloração → fluoretação."),
  c(["Sólido + líquido heterogêneo: filtrar ou decantar.", "Sólido dissolvido: evaporar ou destilar.", "Líquidos miscíveis: destilação fracionada.", "Líquidos imiscíveis: funil de decantação."], "Pergunte: quantas fases? Qual a propriedade diferente?"),
]);

pack(Q, "atomistica", 1, 2, "Distribuição eletrônica e tabela", [
  q("O número atômico (Z) indica a quantidade de:", ["Nêutrons", "Prótons", "Elétrons + nêutrons", "Massa"], 1, "Z = número de prótons, a \"identidade\" do elemento. Num átomo neutro, também é igual ao número de elétrons. Nêutrons não entram em Z."),
  q("Um átomo de cloro tem Z = 17 e A = 35. Quantos nêutrons ele tem?", ["17", "18", "35", "52"], 2, "A = Z + N → N = A − Z = 35 − 17 = 18 nêutrons. Somar (52) confunde a conta; 17 são os prótons."),
  q("O carbono-14, usado na datação de fósseis, difere do carbono-12 por ter:", ["2 prótons a mais", "2 nêutrons a mais", "2 elétrons a mais", "Outro número atômico"], 1, "São isótopos: mesmo número de prótons (Z = 6), mas o C-14 tem 8 nêutrons e o C-12 tem 6. Mudar os prótons mudaria o elemento."),
  q("Os elementos de uma mesma família (coluna) da tabela têm:", ["A mesma massa atômica", "Os mesmos elétrons de valência", "O mesmo número de camadas eletrônicas", "O mesmo estado físico a 25 °C"], 1, "Mesma família = mesmo número de elétrons na camada de valência. Como as reações dependem desses elétrons, as propriedades químicas se parecem."),
  q("Os gases nobres são pouco reativos porque:", ["São muito pesados e densos", "Têm a camada de valência completa", "Não possuem elétrons na eletrosfera", "Formam ligações metálicas fortes"], 1, "Gases nobres já têm a camada de valência completa (8 elétrons, ou 2 no hélio): estáveis, não precisam ganhar, perder nem compartilhar elétrons."),
  q("Ao perder 2 elétrons, o magnésio (Z = 12) vira:", ["Mg²⁻", "Mg²⁺", "Mg", "Mg⁺"], 1, "Elétrons são negativos: perdendo 2, sobram 2 prótons \"a mais\" → Mg²⁺, um cátion. Ganhar elétrons formaria ânion (negativo)."),
  f("Ordem do diagrama de Linus Pauling (início)", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶…"),
  f("Raio atômico na tabela", "Aumenta para baixo (mais camadas) e para a esquerda (menos prótons puxando)."),
  c(["Linha (período) = número de camadas.", "Coluna (família) = elétrons de valência.", "Metais à esquerda perdem elétrons fácil.", "Ametais à direita ganham elétrons."], "Eletronegatividade: cresce para cima e para a direita (flúor no topo)."),
]);

pack(Q, "ligacoes", 1, 3, "Geometria e polaridade", [
  q("A molécula de água é polar porque:", ["É linear e simétrica", "É angular e o O é mais eletronegativo", "Não tem pares de elétrons livres no oxigênio", "Tem ligações iônicas entre H e O"], 1, "O oxigênio é mais eletronegativo e puxa os elétrons. Como a molécula é angular, as polaridades das duas ligações não se anulam."),
  q("O CO₂ é apolar porque:", ["Não tem nenhuma ligação polar", "É linear e as polaridades se anulam", "É angular, como a água", "Tem ligações iônicas entre C e O"], 1, "As ligações C=O são polares, mas a molécula é linear (O=C=O): as duas polaridades são iguais e opostas e se cancelam."),
  q("\"Semelhante dissolve semelhante\" explica por que:", ["O sal se dissolve bem no óleo", "O óleo não se mistura com a água", "A água evapora mais rápido no calor", "O gelo flutua sobre a água líquida"], 1, "Substâncias polares dissolvem polares; apolares dissolvem apolares. Óleo (apolar) não se mistura com água (polar). Sal (iônico) dissolve na água, não no óleo."),
  q("A ligação de hidrogênio explica:", ["O ponto de ebulição alto da água", "O brilho metálico do cobre e do ouro", "A cor azul de sais de cobre", "A dureza do diamante"], 0, "Ligações de hidrogênio (H ligado a F, O ou N) são forças intermoleculares fortes: separar as moléculas exige muita energia. Por isso a água ferve a 100 °C."),
  q("A geometria da molécula de amônia (NH₃) é:", ["Linear", "Trigonal plana", "Piramidal", "Tetraédrica"], 2, "O nitrogênio tem 3 ligações e 1 par de elétrons livre, que empurra as ligações para baixo: geometria piramidal (não trigonal plana)."),
  q("O metano (CH₄) tem geometria:", ["Angular", "Tetraédrica", "Linear", "Piramidal"], 1, "Quatro ligações em volta do carbono se afastam o máximo possível: tetraedro, com ângulos de cerca de 109,5°."),
  f("Forças intermoleculares (mais fraca → mais forte)", "Dipolo induzido (London) < dipolo-dipolo < ligação de hidrogênio."),
  f("Ligação de hidrogênio", "H ligado a F, O ou N interagindo com F, O ou N de outra molécula."),
  c(["Polaridade da ligação: diferença de eletronegatividade.", "Polaridade da molécula: depende da geometria.", "Polar dissolve polar.", "Apolar dissolve apolar."], "Sabão tem um lado polar e outro apolar: por isso tira gordura."),
]);

pack(Q, "ligacoes", 1, 4, "Ácidos, bases, sais e óxidos", [
  q("Segundo Arrhenius, ácido é a substância que em água libera:", ["OH⁻", "H⁺", "Na⁺", "Cl⁻"], 1, "Ácido de Arrhenius libera H⁺ (na verdade H₃O⁺) em água, como HCl → H⁺ + Cl⁻. Base libera OH⁻."),
  q("Ácido + base produz:", ["Só água", "Sal + água", "Óxido", "Gás oxigênio"], 1, "Neutralização: o H⁺ do ácido e o OH⁻ da base formam água, e os íons restantes formam sal. HCl + NaOH → NaCl + H₂O."),
  q("Qual é uma base?", ["HCl", "NaOH", "NaCl", "CO₂"], 1, "NaOH (hidróxido de sódio, soda cáustica) libera OH⁻ em água: base. HCl é ácido, NaCl é sal e CO₂ é óxido."),
  q("Qual destes NÃO ajuda a diminuir a chuva ácida?", ["Filtros nas chaminés das fábricas", "Diesel com menos enxofre", "Mais carros a combustíveis fósseis", "Trocar carvão por fontes limpas"], 1, "Chuva ácida vem de SO₂ e NOₓ da queima de combustíveis fósseis. Mais carros a gasolina e diesel AUMENTAM essas emissões; as outras medidas as reduzem."),
  q("O leite de magnésia alivia a azia porque:", ["É ácido e reforça a digestão", "É uma base que neutraliza o ácido", "É um sal neutro que acalma o estômago", "Tem açúcar que absorve o ácido"], 1, "Mg(OH)₂ é uma base fraca que neutraliza o excesso de ácido clorídrico do estômago, formando sal e água."),
  q("A fenolftaleína fica rosa em meio:", ["Ácido", "Básico", "Neutro", "Qualquer um"], 1, "A fenolftaleína é um indicador: incolor em meio ácido ou neutro e rosa (carmim) em meio básico."),
  f("Nomenclatura dos ácidos", "Hidrácidos (sem O): ídrico (clorídrico). Oxiácidos: ico/oso (sulfúrico, sulfuroso)."),
  f("Óxido", "Composto binário com oxigênio como elemento mais eletronegativo (CO₂, CaO, SO₃)."),
  c(["Ácido: sabor azedo, libera H⁺.", "Base: adstringente, libera OH⁻.", "Sal: vem da neutralização.", "Óxido: elemento + oxigênio."], "Cal (CaO) corrige solo ácido na agricultura."),
]);

pack(Q, "solucoes", 2, 1, "Diluição e mistura de soluções", [
  q("Para diluir uma solução, adiciona-se:", ["Mais soluto", "Mais solvente", "Calor ao sistema", "Um catalisador"], 1, "Diluir é acrescentar solvente: a quantidade de soluto é a mesma, mas o volume cresce, então a concentração cai."),
  q("Se metade do solvente de uma solução evapora (sem perder soluto), a concentração:", ["Dobra", "Cai pela metade", "Não muda", "Fica 4 vezes maior"], 0, "O soluto é o mesmo e o volume cai à metade: C = n/V → a concentração dobra. É o contrário da diluição."),
  q("Uma solução tem 30 g/L de soluto. Quantos gramas há em 200 mL dela?", ["150 g", "6 g", "60 g", "0,6 g"], 0, "m = C·V = 30 g/L · 0,2 L = 6 g. Converter 200 mL em 0,2 L é o passo-chave; usar 200 direto daria 6.000 g."),
  q("Soro fisiológico tem 0,9% de NaCl. Em 1 L (≈1.000 g), há:", ["0,9 g", "9 g", "90 g", "0,09 g"], 1, "0,9% = 0,9 g em cada 100 g. Em 1.000 g: 0,9 · 10 = 9 g de sal. É a concentração parecida com a do nosso sangue."),
  q("Uma solução saturada de um sal cuja solubilidade cai com o frio é resfriada. O que acontece?", ["Parte do sal precipita", "O sal evapora junto", "Dissolve ainda mais sal", "Nada acontece"], 1, "No frio, cabe menos sal dissolvido. O excesso sai da solução e precipita (corpo de fundo). É assim que se formam cristais."),
  q("Refrigerante perde gás mais rápido quente porque:", ["Gases são mais solúveis em temperatura alta", "Gases são menos solúveis a quente", "O açúcar sai da solução", "A garrafa dilata e deixa o gás escapar"], 1, "Ao contrário dos sólidos, gases são menos solúveis a quente. Por isso o refrigerante quente \"estoura\" mais ao abrir."),
  f("Concentração em quantidade de matéria", "M = n/V (mol/L)"),
  f("Diluição", "C₁·V₁ = C₂·V₂ (a massa/mols de soluto não mudam)"),
  c(["Soluto: o que dissolve.", "Solvente: em quem dissolve (geralmente água).", "Diluir: mais solvente, mesmo soluto.", "Concentrar: evaporar solvente."], "ppm = partes por milhão: 1 mg por kg."),
]);

pack(Q, "solucoes", 2, 1, "Propriedades coligativas", [
  q("Adicionar sal à água faz o ponto de ebulição:", ["Diminuir", "Aumentar", "Não mudar", "Chegar a 0 °C"], 1, "Um soluto não volátil dificulta a saída das moléculas de água: a água salgada ferve acima de 100 °C (efeito ebulioscópico)."),
  q("Jogar sal na neve das estradas serve para:", ["Aumentar só o atrito dos pneus", "Baixar o ponto de congelamento", "Esquentar o asfalto por reação química", "Fazer a água evaporar mais depressa"], 1, "Efeito crioscópico: a água com sal só congela abaixo de 0 °C. O gelo derrete e a pista fica menos escorregadia."),
  q("Alface temperada com sal murcha porque:", ["O sal cozinha as folhas", "A água sai das células por osmose", "O sal entra nas células e as rompe", "A água evapora pelo calor do sal"], 1, "O tempero salgado deixa o lado de fora mais concentrado; por osmose, a água sai das células da folha, que perdem a firmeza e murcham."),
  q("Na osmose, o solvente passa:", ["Do meio mais concentrado para o menos concentrado", "Do meio menos concentrado para o mais concentrado", "Nos dois sentidos igualmente", "Não passa"], 1, "Na osmose, o solvente atravessa a membrana semipermeável do meio menos concentrado (hipotônico) para o mais concentrado (hipertônico)."),
  q("A panela de pressão cozinha mais rápido porque:", ["Aumenta a temperatura de ebulição", "Diminui o ponto de ebulição da água", "Aquece os alimentos sem precisar de fogo", "Retira todo o ar de dentro da panela"], 0, "Com a pressão maior lá dentro, a água só ferve a cerca de 120 °C. Mais quente, o alimento cozinha mais rápido."),
  q("Em lugares altos, a água ferve:", ["Acima de 100 °C", "Abaixo de 100 °C", "Exatamente a 100 °C", "Não ferve"], 1, "No alto, a pressão atmosférica é menor e a água ferve abaixo de 100 °C (em La Paz, ~87 °C). Por isso o feijão demora mais."),
  f("Propriedades coligativas", "Dependem do número de partículas de soluto, não da natureza: tonoscopia, ebulioscopia, crioscopia e osmose."),
  f("Dessalinização por osmose reversa", "Aplica pressão maior que a osmótica para forçar a água a sair do lado salgado."),
  c(["Mais partículas dissolvidas…", "…menor pressão de vapor.", "…maior ponto de ebulição.", "…menor ponto de congelamento."], "NaCl conta dobrado: vira Na⁺ e Cl⁻."),
]);

pack(Q, "fisico-quimica", 2, 2, "Termoquímica no cotidiano", [
  q("A reação A → B tem ΔH = −50 kJ. Qual é o ΔH da reação inversa, B → A?", ["+50 kJ", "−50 kJ", "0 kJ", "−100 kJ"], 1, "Inverter a reação inverte o sinal de ΔH: se A → B libera 50 kJ, B → A absorve 50 kJ (+50 kJ, endotérmica)."),
  q("A evaporação do suor é um processo:", ["Exotérmico, que aquece a pele", "Endotérmico, que resfria a pele", "Nuclear, que libera energia", "Químico, que forma novas substâncias"], 1, "Para evaporar, a água do suor absorve calor da pele (endotérmico). É assim que o corpo se resfria."),
  q("A combustão completa do etanol produz:", ["CO e água", "CO₂ e H₂O", "Só água", "Hidrogênio"], 1, "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O. Com oxigênio suficiente, todo carbono vira CO₂. CO aparece só na combustão incompleta."),
  q("Bolsas de gelo instantâneo usadas em lesões funcionam com dissolução:", ["Exotérmica", "Endotérmica", "Nuclear", "Eletrolítica"], 1, "Ao apertar, um sal (como nitrato de amônio) se dissolve na água absorvendo calor (endotérmica): a bolsa esfria sem geladeira."),
  q("A lei de Hess afirma que o ΔH de uma reação:", ["Depende do caminho percorrido", "Só depende dos estados inicial e final", "É sempre positivo em qualquer reação", "É zero quando há catalisador"], 1, "O ΔH só depende dos estados inicial e final, não do caminho. Dá para somar etapas (e seus ΔH) como equações."),
  q("Combustão incompleta é perigosa porque pode liberar:", ["Gás oxigênio", "Monóxido de carbono", "Gás nitrogênio", "Vapor de água"], 1, "Com pouco oxigênio, forma-se monóxido de carbono (CO), sem cheiro, que se liga à hemoglobina e impede o transporte de O₂. Por isso aquecedor exige ventilação."),
  f("Entalpia (ΔH)", "ΔH = H_produtos − H_reagentes. Negativo: exo; positivo: endo."),
  f("Energia de ligação", "Quebrar ligação absorve energia; formar ligação libera."),
  c(["Exotérmica: libera calor (queimar, respirar).", "Endotérmica: absorve calor (fotossíntese, cozinhar).", "ΔH negativo = sai energia.", "Gráfico: produtos abaixo dos reagentes = exo."], "Fotossíntese guarda energia; respiração devolve."),
]);

pack(Q, "fisico-quimica", 2, 4, "pH e equilíbrio no dia a dia", [
  q("Qual destes líquidos é o mais ácido?", ["Água pura (pH 7)", "Suco de limão (pH 2)", "Água com sabão (pH 10)", "Leite (pH 6,5)"], 2, "Quanto menor o pH, mais ácido. O limão (pH 2) tem 100 mil vezes mais H⁺ que a água pura (pH 7). pH 10 é básico."),
  q("Do pH 5 para o pH 3, a acidez aumenta:", ["2 vezes", "20 vezes", "100 vezes", "3 vezes"], 2, "Escala logarítmica: cada unidade de pH a menos = 10 vezes mais H⁺. Duas unidades = 10 · 10 = 100 vezes."),
  q("A água pura a 25 °C tem pH:", ["0", "7", "14", "1"], 1, "Na água pura, [H⁺] = [OH⁻] = 10⁻⁷ mol/L: pH = 7, neutro. Em outras temperaturas o pH neutro muda um pouco."),
  q("Pelo princípio de Le Chatelier, aumentar a concentração de um reagente desloca o equilíbrio:", ["Para os reagentes", "Para os produtos", "Não desloca", "Para a fase gasosa"], 1, "O sistema reage para consumir o excesso: a reação direta acelera e forma mais produtos até um novo equilíbrio."),
  q("Um catalisador num equilíbrio químico:", ["Desloca o equilíbrio para os produtos", "Só faz o equilíbrio chegar mais rápido", "Aumenta o rendimento final da reação", "Consome os produtos já formados"], 1, "O catalisador acelera a ida e a volta igualmente: o equilíbrio é atingido mais rápido, mas não muda de posição nem o rendimento."),
  q("O sangue humano tem pH próximo de:", ["2", "5,5", "7,4", "12"], 2, "Cerca de 7,4, levemente básico, mantido por tampões (como o bicarbonato). Sair da faixa de 7,35–7,45 já é perigoso."),
  f("pH e [H⁺]", "pH = −log[H⁺]. [H⁺] = 10⁻³ → pH 3."),
  f("Solução tampão", "Resiste a variações de pH ao receber pequenas quantidades de ácido ou base."),
  c(["pH 0–7: ácido; 7: neutro; 7–14: básico.", "Escala logarítmica: 1 unidade = 10×.", "Equilíbrio: ida e volta na mesma velocidade.", "Le Chatelier: o sistema reage à perturbação."], "Refrigerante pH ~3; sabão ~10; estômago ~2."),
]);

pack(Q, "fisico-quimica", 2, 4, "Eletroquímica", [
  q("Numa pilha, o ânodo é o eletrodo onde ocorre:", ["Redução", "Oxidação", "Nada", "Eletrólise"], 1, "Ânodo = oxidação (perde elétrons); cátodo = redução (ganha elétrons). Macete: \"ânodo-oxidação\" começam com vogal; \"cátodo-redução\", com consoante."),
  q("Na pilha, os elétrons fluem:", ["Do cátodo para o ânodo", "Do ânodo para o cátodo", "Pela ponte salina", "Do eletrólito para o fio"], 1, "Os elétrons saem do ânodo, onde há oxidação, e vão pelo fio até o cátodo, onde há redução. Na ponte salina andam íons, não elétrons."),
  q("A eletrólise é:", ["Uma reação espontânea que gera corrente", "Uma reação forçada por corrente", "Uma combustão com chama", "Uma separação por filtração"], 1, "Na eletrólise, uma corrente elétrica força uma reação não espontânea (elétrica → química). A pilha faz o oposto: reação espontânea gera corrente."),
  q("Por que se prende magnésio ao casco de navios de aço?", ["Para deixar o casco mais leve", "Ele se oxida no lugar do ferro", "Para aumentar a força do motor", "Para atrair menos algas ao casco"], 1, "O magnésio oxida mais facilmente que o ferro: ele \"se sacrifica\" e corrói no lugar do casco. É o metal de sacrifício (proteção catódica)."),
  q("A ferrugem é a:", ["Redução do ferro pelo oxigênio do ar", "Oxidação do ferro com água e oxigênio", "Fusão do ferro em altas temperaturas", "Dissolução do ferro em óleos e graxas"], 1, "A ferrugem é a oxidação do ferro na presença de água e oxigênio, formando óxido de ferro hidratado. Por isso a maresia enferruja mais rápido."),
  q("Pilhas e baterias usadas devem ser:", ["Jogadas no lixo comum", "Levadas a pontos de coleta", "Queimadas em incineradores", "Enterradas no quintal de casa"], 1, "Elas têm metais pesados (como mercúrio, cádmio e chumbo) que contaminam solo e água. Devem ir para pontos de coleta para reciclagem."),
  f("Oxidação x redução", "Oxidação: perde elétrons (nox sobe). Redução: ganha elétrons (nox desce)."),
  f("Galvanização", "Revestir o ferro com zinco para protegê-lo da corrosão."),
  c(["Pilha: reação espontânea gera corrente.", "Ânodo (−) oxida; cátodo (+) reduz.", "Eletrólise: corrente força a reação.", "Assim se obtém alumínio e cloro."], "Macete: ÂNODO e OXIDAÇÃO começam com vogal; CÁTODO e REDUÇÃO, com consoante."),
]);

pack(Q, "organica", 3, 2, "Funções orgânicas no cotidiano", [
  q("O formol (metanal), usado para conservar peças de anatomia, pertence à função:", ["Aldeído", "Álcool", "Éter", "Ácido carboxílico"], 1, "O metanal (HCHO) tem a carbonila na ponta da cadeia (–CHO): é um aldeído. O sufixo \"-al\" denuncia a função."),
  q("O vinagre contém principalmente:", ["Etanol", "Ácido acético", "Acetona", "Metanol"], 1, "Vinagre é uma solução de ácido acético (CH₃COOH, ácido etanoico), formado pela oxidação do etanol do vinho."),
  q("A ureia, eliminada na urina, pertence à função:", ["Amida", "Amina", "Álcool", "Cetona"], 0, "A ureia, CO(NH₂)₂, tem nitrogênio ligado a uma carbonila: é uma amida. Foi a primeira substância orgânica sintetizada em laboratório (Wöhler, 1828)."),
  q("Os ésteres são responsáveis por:", ["Cheiro de peixe estragado", "Aromas de frutas", "Gosto amargo do café", "Cor verde das folhas"], 1, "Ésteres dão aroma a frutas e flores; muitos aromatizantes artificiais (de morango, banana) são ésteres. Cheiro de peixe vem de aminas."),
  q("O cheiro de peixe vem de:", ["Aminas", "Ésteres", "Alcanos", "Álcoois"], 0, "Aminas derivam da amônia e têm cheiro forte, como o do peixe. Limão ajuda a tirar o cheiro: o ácido reage com as aminas."),
  q("A gasolina é formada principalmente por:", ["Hidrocarbonetos", "Proteínas", "Sais minerais", "Ácidos carboxílicos"], 0, "Gasolina é uma mistura de hidrocarbonetos (só carbono e hidrogênio), com 5 a 10 carbonos, tirada do petróleo. No Brasil, recebe etanol."),
  f("Reconhecer a carbonila", "C=O. No fim da cadeia (com H): aldeído. No meio: cetona. Com OH: ácido carboxílico."),
  f("Amina x amida", "Amina: N ligado a carbono. Amida: N ligado a carbonila (C=O)."),
  c(["Hidrocarboneto: só C e H.", "Álcool: OH em carbono saturado.", "Fenol: OH no anel aromático.", "Éster: ácido + álcool."], "Nome terminado em -ol: álcool; -ona: cetona; -al: aldeído."),
]);

pack(Q, "organica", 3, 4, "Polímeros e combustíveis", [
  q("PET, PVC e polietileno são:", ["Ligas metálicas", "Polímeros sintéticos", "Proteínas fibrosas", "Sais inorgânicos"], 1, "São polímeros sintéticos: macromoléculas formadas pela união de muitos monômeros. Proteínas e amido são polímeros naturais."),
  q("O etanol brasileiro é obtido principalmente da:", ["Mandioca", "Cana-de-açúcar", "Soja", "Beterraba"], 1, "O caldo da cana-de-açúcar é fermentado por leveduras, que transformam açúcar em etanol, e depois destilado."),
  q("O biodiesel é produzido a partir de:", ["Carvão mineral", "Óleos vegetais ou gorduras", "Gás natural", "Xisto betuminoso"], 1, "Óleos vegetais (soja, palma) ou gorduras reagem com álcool (transesterificação) e formam biodiesel, renovável, mais glicerina."),
  q("Combustíveis fósseis são considerados não renováveis porque:", ["Não queimam completamente nos motores", "Levam milhões de anos para se formar", "São líquidos e evaporam rápido", "São caros para extrair e transportar"], 1, "Petróleo, carvão e gás natural levaram milhões de anos para se formar de matéria orgânica soterrada. Consumimos muito mais rápido do que se repõem."),
  q("O plástico comum demora a se decompor porque:", ["É natural, como a madeira", "Quase nenhum microrganismo o degrada", "É solúvel em água e se espalha", "É metálico e não enferruja"], 1, "Quase nenhum microrganismo consegue quebrar as longas cadeias do plástico comum, que pode durar centenas de anos. Daí a importância de reduzir e reciclar."),
  q("Proteínas e amido são exemplos de:", ["Polímeros naturais", "Polímeros sintéticos", "Gases", "Metais"], 0, "Polímeros naturais: proteínas são cadeias de aminoácidos; amido e celulose são cadeias de glicose."),
  f("Polímero de adição x condensação", "Adição: monômeros se somam (polietileno). Condensação: libera molécula pequena, como água (PET, náilon)."),
  f("Craqueamento do petróleo", "Quebra de cadeias longas em menores, aumentando a produção de gasolina."),
  c(["Monômero: a peça.", "Polímero: o colar de peças.", "Termoplástico: derrete e remolda (recicla).", "Termofixo: não derrete de novo."], "Símbolo de reciclagem com número indica o tipo de plástico."),
]);

pack(Q, "estequiometria", 1, 4, "Mol e massa molar", [
  q("1 mol de qualquer substância contém aproximadamente:", ["6·10²³ partículas", "1.000 partículas", "6·10²³ gramas", "22,4 partículas por litro"], 0, "1 mol = 6,02·10²³ partículas (constante de Avogadro), como \"1 dúzia = 12\". A massa de 1 mol varia de substância para substância."),
  q("Qual é a massa molar da água? (H = 1, O = 16)", ["16 g/mol", "17 g/mol", "18 g/mol", "34 g/mol"], 2, "H₂O tem 2 hidrogênios e 1 oxigênio: 2·1 + 16 = 18 g/mol. Esquecer o índice 2 dá 17."),
  q("Quantos mols há em 88 g de CO₂ (44 g/mol)?", ["1", "2", "4", "0,5"], 1, "n = massa/massa molar = 88/44 = 2 mol. Multiplicar daria um número sem sentido físico."),
  q("Nas CNTP, 1 mol de gás ideal ocupa cerca de:", ["1 L", "22,4 L", "6,02 L", "100 L"], 1, "Nas CNTP (0 °C e 1 atm), 1 mol de qualquer gás ideal ocupa ~22,4 L, não importa qual gás."),
  q("Qual tem mais moléculas: 1 mol de H₂ ou 1 mol de O₂?", ["H₂", "O₂", "A mesma quantidade", "Depende da temperatura"], 2, "1 mol de qualquer coisa tem 6·10²³ partículas. O O₂ pesa mais (32 g contra 2 g), mas o número de moléculas é o mesmo."),
  q("Qual é a massa de 3 mol de NaCl? (58,5 g/mol)", ["58,5 g", "117 g", "175,5 g", "19,5 g"], 2, "m = n · M = 3 · 58,5 = 175,5 g. Dividir (19,5) inverte a relação."),
  f("Relação básica", "n = m/M (mols = massa ÷ massa molar)"),
  f("Massa molar de um composto", "Soma das massas atômicas de todos os átomos da fórmula."),
  c(["Mol é uma \"dúzia\" gigante.", "1 dúzia = 12; 1 mol = 6·10²³.", "Massa molar diz quanto pesa 1 mol.", "Tudo em química quantitativa passa pelo mol."], "Massa → mol → partículas ou volume: sempre pelo mol."),
]);

pack(Q, "estequiometria", 1, 4, "Cálculo estequiométrico", [
  q("Na reação 2 H₂ + O₂ → 2 H₂O, quantos mols de água se formam com 4 mol de H₂?", ["2", "4", "8", "1"], 1, "Pela equação, 2 H₂ formam 2 H₂O: proporção 1 : 1. Com 4 mol de H₂, formam-se 4 mol de água (havendo O₂ suficiente)."),
  q("Em N₂ + 3 H₂ → 2 NH₃, 6 mol de H₂ produzem quantos mols de NH₃?", ["2", "3", "4", "6"], 2, "3 H₂ dão 2 NH₃. Com 6 mol de H₂ (o dobro), formam-se 2 · 2 = 4 mol de NH₃."),
  q("Quantos gramas de água se formam a partir de 2 g de H₂ (excesso de O₂)?", ["2 g", "9 g", "18 g", "36 g"], 2, "2 g de H₂ = 1 mol (M = 2 g/mol). Como 2 H₂ → 2 H₂O (1 : 1), forma-se 1 mol de água = 18 g."),
  q("Reagente limitante é aquele que:", ["Está em excesso na reação", "Acaba primeiro e limita o produto", "Não participa da reação química", "É sempre o reagente gasoso do sistema"], 1, "É o reagente que acaba primeiro e por isso limita quanto produto se forma. O outro sobra: é o reagente em excesso."),
  q("A lei de Lavoisier diz que, em sistema fechado:", ["A massa total se conserva", "A massa aumenta", "A massa diminui", "O volume se conserva sempre"], 0, "Em sistema fechado, a massa dos reagentes é igual à dos produtos: \"Na natureza nada se cria, nada se perde, tudo se transforma\"."),
  q("Rendimento de 80% numa reação que teoricamente daria 50 g de produto resulta em:", ["40 g", "50 g", "62,5 g", "10 g"], 0, "Rendimento real = 80% do teórico = 0,8 · 50 = 40 g. 62,5 g seria dividir por 0,8, o que daria mais que o máximo teórico."),
  f("Passo a passo do cálculo estequiométrico", "1) balanceie; 2) proporção em mols; 3) converta para o que pede (massa, volume, partículas)."),
  f("Pureza", "Se a amostra tem 90% de pureza, só 90% da massa reage."),
  c(["Balancear é obrigatório.", "Os coeficientes são a proporção em mols.", "Regra de três entre o dado e o pedido.", "Ajuste por pureza e rendimento no fim."], "Coeficiente da equação = receita do bolo."),
]);
