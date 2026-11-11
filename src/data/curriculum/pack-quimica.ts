import { QUIMICA as Q } from "./exatas";
import { c, f, pack, q } from "./pack";

pack(Q, "atomistica", 1, 1, "Separação de misturas", [
  q("Para separar areia de água, o método mais simples é:", ["Destilação", "Filtração ou decantação", "Fusão", "Centrifugação obrigatória"], 1, "Mistura heterogênea sólido-líquido: filtração ou decantação."),
  q("Para obter água pura a partir de água salgada, usa-se:", ["Filtração", "Destilação simples", "Peneiração", "Imantação"], 1, "A água evapora e condensa; o sal fica."),
  q("O petróleo é separado em frações por:", ["Filtração", "Destilação fracionada", "Catação", "Decantação"], 1, "Componentes com pontos de ebulição diferentes saem em alturas diferentes da coluna."),
  q("Separar limalha de ferro de areia: método mais prático?", ["Imantação (separação magnética)", "Destilação", "Evaporação", "Sifonação"], 0, "O ímã atrai o ferro."),
  q("Água e óleo formam uma mistura:", ["Homogênea", "Heterogênea bifásica", "Substância pura", "Solução"], 1, "Duas fases visíveis; separa com funil de decantação."),
  q("No tratamento de água, a etapa em que se adiciona sulfato de alumínio para juntar sujeira é a:", ["Cloração", "Floculação/coagulação", "Fluoretação", "Filtração"], 1, "Os flocos formados depois decantam."),
  f("Mistura homogênea x heterogênea", "Homogênea: uma fase (água + sal dissolvido). Heterogênea: mais de uma fase (água + óleo)."),
  f("Etapas do tratamento de água", "Coagulação → floculação → decantação → filtração → cloração → fluoretação."),
  c(["Sólido + líquido heterogêneo: filtrar ou decantar.", "Sólido dissolvido: evaporar ou destilar.", "Líquidos miscíveis: destilação fracionada.", "Líquidos imiscíveis: funil de decantação."], "Pergunte: quantas fases? Qual a propriedade diferente?"),
]);

pack(Q, "atomistica", 1, 2, "Distribuição eletrônica e tabela", [
  q("O número atômico (Z) indica a quantidade de:", ["Nêutrons", "Prótons", "Elétrons + nêutrons", "Massa"], 1, "Z = prótons; num átomo neutro, também = elétrons."),
  q("Um átomo com 11 prótons e 12 nêutrons tem número de massa:", ["11", "12", "23", "1"], 2, "A = Z + n = 11 + 12 = 23."),
  q("Isótopos são átomos com mesmo:", ["Número de massa", "Número de prótons", "Número de nêutrons", "Número de elétrons sempre"], 1, "Mesmo elemento (mesmo Z), massas diferentes (ex.: C-12 e C-14)."),
  q("Os elementos de uma mesma família (coluna) da tabela têm:", ["Mesma massa", "Mesmo número de elétrons na camada de valência", "Mesmo número de camadas", "Mesmo estado físico"], 1, "Por isso têm propriedades químicas parecidas."),
  q("Os gases nobres são pouco reativos porque:", ["São pesados", "Têm a camada de valência completa", "Não têm elétrons", "São metais"], 1, "Já estão estáveis (octeto)."),
  q("Ao perder 2 elétrons, o magnésio (Z = 12) vira:", ["Mg²⁻", "Mg²⁺", "Mg", "Mg⁺"], 1, "Perde elétrons → íon positivo (cátion)."),
  f("Ordem do diagrama de Linus Pauling (início)", "1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹⁰ 4p⁶…"),
  f("Raio atômico na tabela", "Aumenta para baixo (mais camadas) e para a esquerda (menos prótons puxando)."),
  c(["Linha (período) = número de camadas.", "Coluna (família) = elétrons de valência.", "Metais à esquerda perdem elétrons fácil.", "Ametais à direita ganham elétrons."], "Eletronegatividade: cresce para cima e para a direita (flúor no topo)."),
]);

pack(Q, "ligacoes", 1, 3, "Geometria e polaridade", [
  q("A molécula de água é polar porque:", ["É linear", "É angular e o oxigênio é mais eletronegativo", "Não tem elétrons livres", "Tem ligação iônica"], 1, "A geometria angular não cancela os vetores de polaridade."),
  q("O CO₂ é apolar porque:", ["Não tem ligações polares", "É linear e as polaridades se anulam", "É angular", "É iônico"], 1, "O=C=O: vetores iguais e opostos."),
  q("\"Semelhante dissolve semelhante\" explica por que:", ["Sal dissolve em óleo", "Óleo não se mistura com água", "Água evapora", "Gelo flutua"], 1, "Óleo apolar, água polar."),
  q("A ligação de hidrogênio explica:", ["O ponto de ebulição alto da água", "O brilho dos metais", "A cor do cobre", "A dureza do diamante"], 0, "Interações fortes entre moléculas exigem mais energia para separar."),
  q("A geometria da molécula de amônia (NH₃) é:", ["Linear", "Trigonal plana", "Piramidal", "Tetraédrica"], 2, "3 ligações + 1 par isolado no N: piramidal."),
  q("O metano (CH₄) tem geometria:", ["Angular", "Tetraédrica", "Linear", "Piramidal"], 1, "4 ligações em torno do carbono, ângulos de ~109,5°."),
  f("Forças intermoleculares (mais fraca → mais forte)", "Dipolo induzido (London) < dipolo-dipolo < ligação de hidrogênio."),
  f("Ligação de hidrogênio", "H ligado a F, O ou N interagindo com F, O ou N de outra molécula."),
  c(["Polaridade da ligação: diferença de eletronegatividade.", "Polaridade da molécula: depende da geometria.", "Polar dissolve polar.", "Apolar dissolve apolar."], "Sabão tem um lado polar e outro apolar: por isso tira gordura."),
]);

pack(Q, "ligacoes", 1, 4, "Ácidos, bases, sais e óxidos", [
  q("Segundo Arrhenius, ácido é a substância que em água libera:", ["OH⁻", "H⁺ (H₃O⁺)", "Na⁺", "Cl⁻"], 1, "Ex.: HCl → H⁺ + Cl⁻."),
  q("Ácido + base produz:", ["Só água", "Sal + água", "Óxido", "Gás oxigênio"], 1, "Neutralização: HCl + NaOH → NaCl + H₂O."),
  q("Qual é uma base?", ["HCl", "NaOH", "NaCl", "CO₂"], 1, "Hidróxido de sódio (soda cáustica) libera OH⁻."),
  q("A chuva ácida é causada principalmente por óxidos de:", ["Sódio e potássio", "Enxofre e nitrogênio", "Ferro", "Hélio"], 1, "SO₂ e NOx reagem com a água formando ácidos."),
  q("O leite de magnésia alivia a azia porque:", ["É ácido", "É uma base que neutraliza o excesso de ácido", "É sal", "É açúcar"], 1, "Mg(OH)₂ neutraliza o HCl do estômago."),
  q("A fenolftaleína fica rosa em meio:", ["Ácido", "Básico", "Neutro", "Qualquer um"], 1, "Indicador ácido-base: incolor no ácido, rosa no básico."),
  f("Nomenclatura dos ácidos", "Hidrácidos (sem O): ídrico (clorídrico). Oxiácidos: ico/oso (sulfúrico, sulfuroso)."),
  f("Óxido", "Composto binário com oxigênio como elemento mais eletronegativo (CO₂, CaO, SO₃)."),
  c(["Ácido: sabor azedo, libera H⁺.", "Base: adstringente, libera OH⁻.", "Sal: vem da neutralização.", "Óxido: elemento + oxigênio."], "Cal (CaO) corrige solo ácido na agricultura."),
]);

pack(Q, "solucoes", 2, 1, "Diluição e mistura de soluções", [
  q("Para diluir uma solução, adiciona-se:", ["Mais soluto", "Mais solvente", "Calor", "Sal"], 1, "A quantidade de soluto fica igual; o volume aumenta."),
  q("100 mL de solução 2 mol/L diluídos até 400 mL ficam com concentração:", ["0,5 mol/L", "1 mol/L", "8 mol/L", "2 mol/L"], 0, "C₁V₁ = C₂V₂ → 2·100 = C₂·400 → C₂ = 0,5 mol/L."),
  q("20 g de açúcar em 500 mL de água: concentração comum?", ["40 g/L", "10 g/L", "25 g/L", "4 g/L"], 0, "C = m/V = 20 g / 0,5 L = 40 g/L."),
  q("Soro fisiológico tem 0,9% de NaCl. Em 1 L (≈1.000 g), há:", ["0,9 g", "9 g", "90 g", "0,09 g"], 1, "0,9% de 1.000 g = 9 g."),
  q("Uma solução saturada:", ["Não tem soluto", "Contém o máximo de soluto dissolvido naquela temperatura", "Tem corpo de fundo sempre", "É sempre gasosa"], 1, "Acima disso o excesso não dissolve (pode precipitar)."),
  q("Refrigerante perde gás mais rápido quente porque:", ["Gases são mais solúveis a quente", "Gases são menos solúveis em temperatura alta", "O açúcar sai", "A garrafa dilata"], 1, "A solubilidade dos gases diminui com o aumento da temperatura."),
  f("Concentração em quantidade de matéria", "M = n/V (mol/L)"),
  f("Diluição", "C₁·V₁ = C₂·V₂ (a massa/mols de soluto não mudam)"),
  c(["Soluto: o que dissolve.", "Solvente: em quem dissolve (geralmente água).", "Diluir: mais solvente, mesmo soluto.", "Concentrar: evaporar solvente."], "ppm = partes por milhão: 1 mg por kg."),
]);

pack(Q, "solucoes", 2, 1, "Propriedades coligativas", [
  q("Adicionar sal à água faz o ponto de ebulição:", ["Diminuir", "Aumentar", "Não mudar", "Chegar a 0 °C"], 1, "Ebulioscopia: soluto não volátil eleva o ponto de ebulição."),
  q("Jogar sal na neve das estradas serve para:", ["Aumentar o atrito apenas", "Baixar o ponto de congelamento e derreter o gelo", "Esquentar a rua", "Evaporar a água"], 1, "Crioscopia: a solução congela abaixo de 0 °C."),
  q("Alface temperada com sal murcha porque:", ["O sal cozinha", "A água sai das células por osmose", "O sal entra nas células", "Evaporação"], 1, "O meio externo fica mais concentrado e puxa água."),
  q("Na osmose, o solvente passa:", ["Do meio mais concentrado para o menos concentrado", "Do meio menos concentrado para o mais concentrado", "Nos dois sentidos igualmente", "Não passa"], 1, "Atravessa a membrana em direção à maior concentração de soluto."),
  q("A panela de pressão cozinha mais rápido porque:", ["Aumenta o ponto de ebulição da água", "Diminui o ponto de ebulição", "Aquece sem fogo", "Tira o ar"], 0, "Maior pressão → água ferve acima de 100 °C."),
  q("Em lugares altos, a água ferve:", ["Acima de 100 °C", "Abaixo de 100 °C", "Exatamente a 100 °C", "Não ferve"], 1, "Pressão atmosférica menor → ebulição em temperatura menor."),
  f("Propriedades coligativas", "Dependem do número de partículas de soluto, não da natureza: tonoscopia, ebulioscopia, crioscopia e osmose."),
  f("Dessalinização por osmose reversa", "Aplica pressão maior que a osmótica para forçar a água a sair do lado salgado."),
  c(["Mais partículas dissolvidas…", "…menor pressão de vapor.", "…maior ponto de ebulição.", "…menor ponto de congelamento."], "NaCl conta dobrado: vira Na⁺ e Cl⁻."),
]);

pack(Q, "fisico-quimica", 2, 2, "Termoquímica no cotidiano", [
  q("Uma reação exotérmica:", ["Absorve calor", "Libera calor (ΔH < 0)", "Não troca calor", "Só ocorre no frio"], 1, "Ex.: combustão."),
  q("A evaporação do suor é um processo:", ["Exotérmico", "Endotérmico, que resfria a pele", "Nuclear", "Químico"], 1, "A água absorve calor do corpo para evaporar."),
  q("A combustão completa do etanol produz:", ["CO e água", "CO₂ e H₂O", "Só água", "Hidrogênio"], 1, "C₂H₅OH + 3 O₂ → 2 CO₂ + 3 H₂O."),
  q("Bolsas de gelo instantâneo usadas em lesões funcionam com dissolução:", ["Exotérmica", "Endotérmica", "Nuclear", "Elétrica"], 1, "A dissolução absorve calor e resfria."),
  q("A lei de Hess afirma que o ΔH de uma reação:", ["Depende do caminho", "Depende só dos estados inicial e final", "É sempre positivo", "É zero"], 1, "Dá para somar etapas como equações."),
  q("Combustão incompleta é perigosa porque pode liberar:", ["O₂", "CO (monóxido de carbono)", "N₂", "Água"], 1, "CO é tóxico: se liga à hemoglobina."),
  f("Entalpia (ΔH)", "ΔH = H_produtos − H_reagentes. Negativo: exo; positivo: endo."),
  f("Energia de ligação", "Quebrar ligação absorve energia; formar ligação libera."),
  c(["Exotérmica: libera calor (queimar, respirar).", "Endotérmica: absorve calor (fotossíntese, cozinhar).", "ΔH negativo = sai energia.", "Gráfico: produtos abaixo dos reagentes = exo."], "Fotossíntese guarda energia; respiração devolve."),
]);

pack(Q, "fisico-quimica", 2, 4, "pH e equilíbrio no dia a dia", [
  q("Uma solução de pH 3 é:", ["Básica", "Neutra", "Ácida", "Salina neutra"], 2, "pH < 7 (a 25 °C) é ácido."),
  q("Do pH 5 para o pH 3, a acidez aumenta:", ["2 vezes", "20 vezes", "100 vezes", "3 vezes"], 2, "Escala logarítmica: cada unidade é ×10. Duas unidades: ×100."),
  q("A água pura a 25 °C tem pH:", ["0", "7", "14", "1"], 1, "[H⁺] = [OH⁻] = 10⁻⁷ mol/L."),
  q("Pelo princípio de Le Chatelier, aumentar a concentração de um reagente desloca o equilíbrio:", ["Para os reagentes", "Para os produtos", "Não desloca", "Para a fase gasosa"], 1, "O sistema tenta consumir o excesso."),
  q("Um catalisador num equilíbrio químico:", ["Desloca o equilíbrio", "Faz atingir o equilíbrio mais rápido sem deslocá-lo", "Aumenta o rendimento", "Consome os produtos"], 1, "Acelera ida e volta igualmente."),
  q("O sangue humano tem pH próximo de:", ["2", "5,5", "7,4", "12"], 2, "Levemente básico, mantido por sistemas tampão."),
  f("pH e [H⁺]", "pH = −log[H⁺]. [H⁺] = 10⁻³ → pH 3."),
  f("Solução tampão", "Resiste a variações de pH ao receber pequenas quantidades de ácido ou base."),
  c(["pH 0–7: ácido; 7: neutro; 7–14: básico.", "Escala logarítmica: 1 unidade = 10×.", "Equilíbrio: ida e volta na mesma velocidade.", "Le Chatelier: o sistema reage à perturbação."], "Refrigerante pH ~3; sabão ~10; estômago ~2."),
]);

pack(Q, "fisico-quimica", 2, 4, "Eletroquímica", [
  q("Numa pilha, o ânodo é o eletrodo onde ocorre:", ["Redução", "Oxidação", "Nada", "Eletrólise"], 1, "Ânodo: oxidação (perde elétrons). Cátodo: redução."),
  q("Na pilha, os elétrons fluem:", ["Do cátodo para o ânodo", "Do ânodo para o cátodo pelo fio", "Pela ponte salina", "Não fluem"], 1, "Saem de onde há oxidação e vão para onde há redução."),
  q("A eletrólise é:", ["Uma reação espontânea que gera corrente", "Uma reação forçada por corrente elétrica", "Uma combustão", "Uma filtração"], 1, "Pilha: química → elétrica. Eletrólise: elétrica → química."),
  q("Por que se prende magnésio ao casco de navios de aço?", ["Para enfeitar", "Ele se oxida no lugar do ferro (metal de sacrifício)", "Para aumentar o peso", "Para atrair peixes"], 1, "O magnésio tem maior tendência a oxidar e protege o ferro."),
  q("A ferrugem é a:", ["Redução do ferro", "Oxidação do ferro na presença de água e oxigênio", "Fusão do ferro", "Dissolução do ferro em óleo"], 1, "Forma óxidos de ferro hidratados."),
  q("Pilhas e baterias usadas devem ser:", ["Jogadas no lixo comum", "Levadas a pontos de coleta", "Queimadas", "Enterradas no quintal"], 1, "Contêm metais pesados que contaminam solo e água."),
  f("Oxidação x redução", "Oxidação: perde elétrons (nox sobe). Redução: ganha elétrons (nox desce)."),
  f("Galvanização", "Revestir o ferro com zinco para protegê-lo da corrosão."),
  c(["Pilha: reação espontânea gera corrente.", "Ânodo (−) oxida; cátodo (+) reduz.", "Eletrólise: corrente força a reação.", "Assim se obtém alumínio e cloro."], "Macete: ÂNODO e OXIDAÇÃO começam com vogal; CÁTODO e REDUÇÃO, com consoante."),
]);

pack(Q, "organica", 3, 2, "Funções orgânicas no cotidiano", [
  q("O grupo funcional —OH ligado a carbono saturado caracteriza:", ["Ácido carboxílico", "Álcool", "Éter", "Cetona"], 1, "Ex.: etanol, CH₃CH₂OH."),
  q("O vinagre contém principalmente:", ["Etanol", "Ácido acético (ácido carboxílico)", "Acetona", "Metano"], 1, "CH₃COOH."),
  q("A acetona do removedor de esmalte é uma:", ["Cetona", "Aldeído", "Éster", "Amina"], 0, "Carbonila (C=O) entre dois carbonos."),
  q("Os ésteres são responsáveis por:", ["Cheiro de peixe", "Aromas de frutas", "Gosto amargo", "Cor das folhas"], 1, "Muitos aromatizantes artificiais são ésteres."),
  q("O cheiro de peixe vem de:", ["Aminas", "Ésteres", "Alcanos", "Álcoois"], 0, "Aminas derivam da amônia e têm odor característico."),
  q("A gasolina é formada principalmente por:", ["Hidrocarbonetos", "Proteínas", "Sais", "Ácidos"], 0, "Cadeias de C e H vindas do petróleo."),
  f("Reconhecer a carbonila", "C=O. No fim da cadeia (com H): aldeído. No meio: cetona. Com OH: ácido carboxílico."),
  f("Amina x amida", "Amina: N ligado a carbono. Amida: N ligado a carbonila (C=O)."),
  c(["Hidrocarboneto: só C e H.", "Álcool: OH em carbono saturado.", "Fenol: OH no anel aromático.", "Éster: ácido + álcool."], "Nome terminado em -ol: álcool; -ona: cetona; -al: aldeído."),
]);

pack(Q, "organica", 3, 4, "Polímeros e combustíveis", [
  q("PET, PVC e polietileno são:", ["Metais", "Polímeros sintéticos", "Proteínas", "Sais"], 1, "Macromoléculas formadas por muitos monômeros."),
  q("O etanol brasileiro é obtido principalmente da:", ["Mandioca", "Cana-de-açúcar", "Soja", "Petróleo"], 1, "Fermentação do caldo de cana."),
  q("O biodiesel é produzido a partir de:", ["Carvão", "Óleos vegetais ou gorduras", "Gás natural", "Areia"], 1, "Transesterificação de óleos com álcool."),
  q("Combustíveis fósseis são considerados não renováveis porque:", ["Não queimam", "Levam milhões de anos para se formar", "São líquidos", "São caros"], 1, "Vêm de matéria orgânica soterrada há milhões de anos."),
  q("O plástico comum demora a se decompor porque:", ["É natural", "Microrganismos quase não conseguem degradá-lo", "É solúvel em água", "É metálico"], 1, "Por isso a reciclagem é importante."),
  q("Proteínas e amido são exemplos de:", ["Polímeros naturais", "Polímeros sintéticos", "Gases", "Metais"], 0, "Proteínas: aminoácidos; amido: glicose."),
  f("Polímero de adição x condensação", "Adição: monômeros se somam (polietileno). Condensação: libera molécula pequena, como água (PET, náilon)."),
  f("Craqueamento do petróleo", "Quebra de cadeias longas em menores, aumentando a produção de gasolina."),
  c(["Monômero: a peça.", "Polímero: o colar de peças.", "Termoplástico: derrete e remolda (recicla).", "Termofixo: não derrete de novo."], "Símbolo de reciclagem com número indica o tipo de plástico."),
]);

pack(Q, "estequiometria", 1, 4, "Mol e massa molar", [
  q("1 mol de qualquer substância contém aproximadamente:", ["6·10²³ partículas", "1.000 partículas", "6·10²³ gramas", "22,4 partículas"], 0, "Constante de Avogadro."),
  q("Massa molar da água (H = 1, O = 16):", ["16 g/mol", "17 g/mol", "18 g/mol", "34 g/mol"], 2, "2·1 + 16 = 18 g/mol."),
  q("Quantos mols há em 88 g de CO₂ (44 g/mol)?", ["1", "2", "4", "0,5"], 1, "n = 88/44 = 2 mol."),
  q("Nas CNTP, 1 mol de gás ideal ocupa cerca de:", ["1 L", "22,4 L", "6 L", "100 L"], 1, "Volume molar nas CNTP."),
  q("Qual tem mais moléculas: 1 mol de H₂ ou 1 mol de O₂?", ["H₂", "O₂", "A mesma quantidade", "Depende da temperatura"], 2, "1 mol é sempre 6·10²³ partículas, independente da massa."),
  q("Massa de 3 mol de NaCl (58,5 g/mol):", ["58,5 g", "117 g", "175,5 g", "19,5 g"], 2, "3 × 58,5 = 175,5 g."),
  f("Relação básica", "n = m/M (mols = massa ÷ massa molar)"),
  f("Massa molar de um composto", "Soma das massas atômicas de todos os átomos da fórmula."),
  c(["Mol é uma \"dúzia\" gigante.", "1 dúzia = 12; 1 mol = 6·10²³.", "Massa molar diz quanto pesa 1 mol.", "Tudo em química quantitativa passa pelo mol."], "Massa → mol → partículas ou volume: sempre pelo mol."),
]);

pack(Q, "estequiometria", 1, 4, "Cálculo estequiométrico", [
  q("Na reação 2 H₂ + O₂ → 2 H₂O, quantos mols de água se formam com 4 mol de H₂?", ["2", "4", "8", "1"], 1, "Proporção H₂ : H₂O = 2 : 2 = 1 : 1."),
  q("Em N₂ + 3 H₂ → 2 NH₃, 6 mol de H₂ produzem quantos mols de NH₃?", ["2", "3", "4", "6"], 2, "3 H₂ : 2 NH₃ → 6 H₂ : 4 NH₃."),
  q("Quantos gramas de água se formam a partir de 2 g de H₂ (excesso de O₂)?", ["2 g", "9 g", "18 g", "36 g"], 2, "2 g de H₂ = 1 mol → 1 mol de H₂O = 18 g."),
  q("Reagente limitante é aquele que:", ["Está em excesso", "Acaba primeiro e limita a quantidade de produto", "Não reage", "É sempre o gás"], 1, "O outro sobra (reagente em excesso)."),
  q("A lei de Lavoisier diz que, em sistema fechado:", ["A massa total se conserva", "A massa aumenta", "A massa diminui", "O volume se conserva sempre"], 0, "\"Nada se cria, nada se perde, tudo se transforma.\""),
  q("Rendimento de 80% numa reação que teoricamente daria 50 g de produto resulta em:", ["40 g", "50 g", "62,5 g", "10 g"], 0, "80% de 50 = 40 g."),
  f("Passo a passo do cálculo estequiométrico", "1) balanceie; 2) proporção em mols; 3) converta para o que pede (massa, volume, partículas)."),
  f("Pureza", "Se a amostra tem 90% de pureza, só 90% da massa reage."),
  c(["Balancear é obrigatório.", "Os coeficientes são a proporção em mols.", "Regra de três entre o dado e o pedido.", "Ajuste por pureza e rendimento no fim."], "Coeficiente da equação = receita do bolo."),
]);
