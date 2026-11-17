import { MATEMATICA } from "./exatas";
import { extend, m, o, q, qe } from "./pack";

/* Matemática, 2ª leva: questões diretas e no estilo ENEM (situação do dia a dia + pergunta). Chave "n". */

extend(MATEMATICA, "Conjuntos e intervalos", [
  q("Se A = {1, 2, 3, 4} e B = {3, 4, 5}, quanto é A − B?", ["{1, 2}", "{5}", "{3, 4}", "{1, 2, 5}"], 0, "A − B tem o que está em A e NÃO está em B: tira-se 3 e 4 de A, sobra {1, 2}. {5} seria B − A."),
  q("Quantos subconjuntos tem um conjunto com 3 elementos?", ["6", "8", "3", "9"], 1, "Cada elemento entra ou não: 2³ = 8 subconjuntos, contando o vazio e o próprio conjunto."),
  q("O número −3/4 pertence a qual conjunto, mas não a ℤ?", ["ℕ", "ℚ", "ℤ", "nenhum"], 1, "−3/4 é fração (racional, ℚ), mas não é inteiro (ℤ) nem natural (ℕ)."),
  q("Qual intervalo representa os x com −2 < x ≤ 5?", ["[−2, 5]", "]−2, 5]", "[−2, 5[", "]−2, 5["], 1, "O −2 não entra (< estrito): colchete aberto ]−2. O 5 entra (≤): colchete fechado 5]."),
  q("[1, 4] ∩ [3, 6] é igual a:", ["[3, 4]", "[1, 6]", "[1, 3]", "[4, 6]"], 0, "A interseção é a parte comum aos dois intervalos: de 3 a 4, com as duas pontas incluídas."),
  qe("Numa turma de 40 alunos, 25 gostam de futebol, 20 gostam de vôlei e 10 gostam dos dois.", "Quantos alunos não gostam de nenhum dos dois esportes?", ["5", "15", "0", "10"], 0, "Gostam de pelo menos um: 25 + 20 − 10 = 35 (tira-se a interseção contada duas vezes). Nenhum: 40 − 35 = 5."),
  qe("Numa pesquisa com 100 pessoas, 60 usam o app A, 50 usam o app B e 30 usam os dois.", "Quantas pessoas usam só o app A?", ["30", "60", "20", "10"], 0, "Só A = total de A − os que usam os dois = 60 − 30 = 30."),
  qe("Um termômetro marca temperaturas entre −10 °C e 40 °C, inclusive.", "Qual intervalo representa a faixa de medição?", ["[−10, 40]", "]−10, 40[", "]−10, 40]", "[−10, 40["], 0, "'Inclusive' significa que os extremos entram: intervalo fechado nas duas pontas."),
  qe("Um site aceita senhas com 8 a 12 caracteres. Uma senha de 12 caracteres foi aceita; uma de 13 foi recusada.", "Qual intervalo descreve os tamanhos aceitos?", ["[8, 12]", "]8, 12[", "[8, 13]", "]8, 12]"], 0, "8 e 12 são aceitos (a de 12 passou): intervalo fechado [8, 12]. O 13 fica de fora."),
  q("Qual afirmação é verdadeira?", ["Todo natural é inteiro", "Todo inteiro é natural", "Todo racional é inteiro", "√2 é racional"], 0, "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ. Mas −1 é inteiro e não natural; 1/2 é racional e não inteiro; √2 é irracional."),
  m("Marque os números irracionais:", ["√3", "π", "√5", "0,333…", "√16"], [0, 1, 2], "0,333… = 1/3 (dízima periódica, racional) e √16 = 4 (inteiro)."),
  m("Sendo A = {1, 2, 3} e B = {2, 3, 4}, marque as corretas:", ["A ∪ B = {1, 2, 3, 4}", "A ∩ B = {2, 3}", "4 ∉ A", "A − B = {4}", "A ∩ B = ∅"], [0, 1, 2], "A − B = {1}; a interseção não é vazia."),
  o("Numa pesquisa, 30 pessoas leem jornal, 20 leem revista e 8 leem os dois. Quantas leem pelo menos um? Explique o raciocínio.", "Somando 30 + 20 = 50, as 8 pessoas que leem os dois foram contadas duas vezes. Então tiro a interseção: 50 − 8 = 42 pessoas leem pelo menos um. É a fórmula n(A ∪ B) = n(A) + n(B) − n(A ∩ B).", [
    ["Resultado 42", "42"],
    ["Tirar a interseção contada duas vezes", "duas vezes", "intersec", "subtrai", "tirar", "− 8", "- 8"],
    ["Fórmula da união", "uniao", "n(a", "formula", "pelo menos"],
  ]),
], "n");

extend(MATEMATICA, "Função afim (1º grau)", [
  q("Qual é a raiz de f(x) = 5x − 20?", ["4", "−4", "20", "5"], 0, "f(x) = 0 → 5x = 20 → x = 4. O −20 é onde a reta corta o eixo y."),
  q("A reta que passa por (0, 2) e (1, 5) tem coeficiente angular:", ["3", "2", "5", "7"], 0, "a = Δy/Δx = (5 − 2)/(1 − 0) = 3. A função é f(x) = 3x + 2."),
  q("Se f(x) = −x + 7, qual é f(−3)?", ["10", "4", "−10", "−4"], 0, "f(−3) = −(−3) + 7 = 3 + 7 = 10. Cuidado com o sinal: menos com menos dá mais."),
  q("Qual função é crescente?", ["f(x) = 2x − 9", "f(x) = −3x + 1", "f(x) = −x", "f(x) = 4 − 2x"], 0, "Cresce quando o coeficiente de x é positivo: só 2x − 9 tem a > 0."),
  q("O gráfico de f(x) = 4 (função constante) é:", ["Uma reta horizontal", "Uma reta vertical", "Uma parábola", "Uma reta inclinada"], 0, "Para qualquer x, y = 4: reta paralela ao eixo x."),
  qe("Um eletricista cobra R$ 60 pela visita mais R$ 40 por hora de trabalho.", "Quanto ele cobra por um serviço de 3 horas?", ["R$ 180", "R$ 120", "R$ 100", "R$ 220"], 0, "f(h) = 40h + 60 → f(3) = 120 + 60 = R$ 180. Esquecer a visita dá R$ 120."),
  qe("Um plano de celular custa R$ 30 fixos mais R$ 0,50 por minuto além da franquia. Num mês, Ana pagou R$ 45.", "Quantos minutos além da franquia Ana usou?", ["30", "15", "90", "45"], 0, "30 + 0,5m = 45 → 0,5m = 15 → m = 30 minutos."),
  qe("Uma vela de 20 cm queima 2 cm por hora.", "A altura h da vela após t horas é dada por:", ["h = 20 − 2t", "h = 20 + 2t", "h = 2t − 20", "h = 20t − 2"], 0, "Começa com 20 cm e perde 2 cm por hora: h = 20 − 2t. Ela acaba quando t = 10 h."),
  qe("Um carro está a 100 km de casa e se afasta a 60 km/h.", "Em quantas horas estará a 340 km de casa?", ["4 h", "5 h", "3 h", "6 h"], 0, "d = 100 + 60t = 340 → 60t = 240 → t = 4 h."),
  qe("Uma empresa de táxi A cobra R$ 4 fixos + R$ 3/km; a B cobra R$ 10 fixos + R$ 2/km.", "A partir de quantos km a empresa B fica mais barata?", ["Acima de 6 km", "Acima de 3 km", "Acima de 10 km", "Nunca fica"], 0, "Iguais quando 4 + 3x = 10 + 2x → x = 6 km. Acima de 6 km, a tarifa por km menor de B compensa."),
  q("A função f(x) = ax + b tem f(0) = 3 e f(2) = 7. Quanto vale a?", ["2", "3", "4", "5"], 0, "f(0) = b = 3. f(2) = 2a + 3 = 7 → a = 2."),
  m("Sobre f(x) = −2x + 6, marque as corretas:", ["É decrescente", "Corta o eixo y em 6", "Sua raiz é x = 3", "É crescente", "Sua raiz é x = −3"], [0, 1, 2], "a = −2 < 0 (decrescente); b = 6; −2x + 6 = 0 → x = 3."),
  m("Marque as situações modeladas por função afim:", ["Conta de água com taxa fixa + valor por m³", "Salário fixo + comissão por venda", "Distância em velocidade constante", "Área de um quadrado pelo lado", "População que dobra todo ano"], [0, 1, 2], "Área do quadrado é quadrática (l²); população que dobra é exponencial."),
  o("Uma academia cobra R$ 50 de matrícula e R$ 90 por mês. Escreva a função do gasto total e calcule o gasto em 6 meses.", "O gasto é G(m) = 90m + 50, em que m é o número de meses: 90 é a taxa por mês (coeficiente angular) e 50 é o valor fixo (coeficiente linear). Em 6 meses: G(6) = 540 + 50 = R$ 590.", [
    ["Função G(m) = 90m + 50", "90m", "90 m", "90x", "90 x"],
    ["Resultado R$ 590", "590"],
    ["Identifica parte fixa e parte por mês", "fixo", "matricula", "por mes", "taxa"],
  ]),
], "n");

extend(MATEMATICA, "Função quadrática", [
  q("Quais são as raízes de x² − 9 = 0?", ["3 e −3", "9 e −9", "3 apenas", "0 e 9"], 0, "x² = 9 → x = 3 ou x = −3."),
  q("Qual é o vértice de f(x) = x² − 2x − 3?", ["(1, −4)", "(−1, 0)", "(2, −3)", "(1, 4)"], 0, "xv = −b/2a = 2/2 = 1; yv = f(1) = 1 − 2 − 3 = −4."),
  q("Em f(x) = 2x² + 3x − 5, onde o gráfico corta o eixo y?", ["−5", "2", "3", "5"], 0, "No eixo y, x = 0: f(0) = −5 (o termo c)."),
  q("Quantas raízes reais tem x² + 2x + 5 = 0?", ["Nenhuma", "Uma", "Duas", "Três"], 0, "Δ = 4 − 20 = −16 < 0: não há raízes reais; a parábola não toca o eixo x."),
  q("A parábola de f(x) = −x² + 4x tem valor máximo igual a:", ["4", "2", "0", "8"], 0, "xv = −4/(−2) = 2; f(2) = −4 + 8 = 4. Como a < 0, o vértice é ponto de máximo."),
  qe("Uma bola é chutada e sua altura, em metros, é h(t) = −5t² + 20t, com t em segundos.", "Qual é a altura máxima atingida pela bola?", ["20 m", "10 m", "40 m", "5 m"], 0, "tv = −20/(−10) = 2 s; h(2) = −20 + 40 = 20 m."),
  qe("Com 40 m de cerca, um fazendeiro quer cercar um terreno retangular com a maior área possível.", "Qual é a maior área que ele consegue?", ["100 m²", "400 m²", "80 m²", "200 m²"], 0, "Lados x e 20 − x: A = x(20 − x), máxima em x = 10. O melhor é um quadrado 10 × 10 = 100 m²."),
  qe("O lucro de uma loja é L(x) = −x² + 60x − 500, em que x é o preço de um produto, em reais.", "Qual preço dá o maior lucro?", ["R$ 30", "R$ 60", "R$ 50", "R$ 500"], 0, "xv = −60/(−2) = 30: o lucro é máximo com o preço de R$ 30."),
  qe("Uma pedra cai de um prédio e sua altura é h(t) = 80 − 5t².", "Em quantos segundos ela chega ao chão?", ["4 s", "16 s", "8 s", "5 s"], 0, "No chão, h = 0: 5t² = 80 → t² = 16 → t = 4 s (só vale o positivo)."),
  q("Se as raízes de uma quadrática são 2 e 5 e a = 1, a função é:", ["x² − 7x + 10", "x² + 7x + 10", "x² − 10x + 7", "x² + 3x − 10"], 0, "f(x) = (x − 2)(x − 5) = x² − 7x + 10: soma 7 e produto 10."),
  q("O gráfico de f(x) = x² + 1 em relação ao de g(x) = x² está:", ["1 unidade acima", "1 unidade abaixo", "1 unidade à direita", "1 unidade à esquerda"], 0, "Somar 1 à função sobe todo o gráfico 1 unidade. Trocar x por x − 1 deslocaria para a direita."),
  m("Sobre f(x) = x² − 6x + 8, marque as corretas:", ["As raízes são 2 e 4", "O vértice tem x = 3", "A concavidade é para cima", "O valor máximo é 8", "Não tem raízes reais"], [0, 1, 2], "a > 0: tem mínimo (yv = −1), não máximo; Δ = 4 > 0."),
  m("Marque situações que costumam ser modeladas por função quadrática:", ["Trajetória de uma bola chutada", "Área de um quadrado pelo lado", "Lucro com preço ótimo", "Conta com taxa fixa por km", "Juros simples mensais"], [0, 1, 2], "Taxa fixa por km e juros simples são funções afins."),
  o("Explique como o sinal de 'a' e o valor de Δ determinam o gráfico de uma função quadrática.", "O sinal de a define a concavidade: a > 0, parábola para cima (tem mínimo); a < 0, para baixo (tem máximo). O Δ define quantas vezes ela toca o eixo x: Δ > 0, duas raízes reais; Δ = 0, uma raiz; Δ < 0, nenhuma raiz real.", [
    ["a > 0 para cima / a < 0 para baixo", "concavidade", "para cima", "para baixo"],
    ["Mínimo ou máximo", "minimo", "maximo"],
    ["Δ define número de raízes", "raiz", "raizes", "delta", "toca"],
  ]),
], "n");

extend(MATEMATICA, "Exponencial e logaritmo", [
  q("Quanto vale 2⁻³?", ["1/8", "−8", "−6", "1/6"], 0, "Expoente negativo inverte: 2⁻³ = 1/2³ = 1/8."),
  q("Resolva 3ˣ = 81.", ["4", "3", "27", "9"], 0, "81 = 3⁴, então x = 4."),
  q("Quanto vale log₃ 1/9?", ["−2", "2", "1/2", "−1/2"], 0, "3⁻² = 1/9, logo log₃ 1/9 = −2."),
  q("Pela propriedade, log 5 + log 2 é igual a:", ["1", "log 7", "log 3", "10"], 0, "log 5 + log 2 = log (5 · 2) = log 10 = 1."),
  q("log 100 − log 10 vale:", ["1", "90", "log 90", "10"], 0, "log 100 − log 10 = 2 − 1 = 1. Ou log (100/10) = log 10 = 1."),
  q("Qual é o domínio de f(x) = log (x − 3)?", ["x > 3", "x ≥ 3", "x < 3", "ℝ"], 0, "O logaritmando tem que ser positivo: x − 3 > 0 → x > 3 (zero não serve)."),
  qe("Uma cultura começa com 500 bactérias e dobra a cada 2 horas.", "Quantas bactérias haverá após 8 horas?", ["8.000", "4.000", "16.000", "2.000"], 0, "8 h = 4 dobras: 500 · 2⁴ = 500 · 16 = 8.000."),
  qe("Um carro novo custa R$ 80.000 e perde 10% do valor a cada ano.", "Qual é o valor após 2 anos?", ["R$ 64.800", "R$ 64.000", "R$ 72.000", "R$ 60.000"], 0, "80.000 · 0,9 · 0,9 = 80.000 · 0,81 = R$ 64.800. Descontar 20% de uma vez (R$ 64.000) está errado."),
  qe("A escala Richter é logarítmica: cada ponto a mais significa amplitude 10 vezes maior.", "Um terremoto de magnitude 7 tem amplitude quantas vezes maior que um de magnitude 5?", ["100", "2", "20", "10"], 0, "Dois pontos de diferença: 10 · 10 = 100 vezes."),
  qe("Um investimento rende 10% ao ano, e o dinheiro é multiplicado por 1,1 a cada ano.", "Qual expressão dá o valor de R$ 1.000 após n anos?", ["1.000 · 1,1ⁿ", "1.000 + 1,1n", "1.000 · 0,1ⁿ", "1.000 · 1,1 · n"], 0, "Multiplica-se por 1,1 a cada ano: 1.000 · 1,1ⁿ (crescimento exponencial)."),
  q("Se log 2 ≈ 0,30 e log 3 ≈ 0,48, quanto vale log 6?", ["0,78", "0,18", "0,144", "1,44"], 0, "log 6 = log (2 · 3) = log 2 + log 3 ≈ 0,78."),
  m("Marque as propriedades corretas dos logaritmos:", ["log (a·b) = log a + log b", "log (a/b) = log a − log b", "log aⁿ = n · log a", "log (a + b) = log a · log b", "log 1 = 1"], [0, 1, 2], "Não há regra para log de uma soma; log 1 = 0."),
  m("Sobre f(x) = 2ˣ, marque as corretas:", ["É crescente", "Passa por (0, 1)", "Nunca é negativa", "Corta o eixo x", "É decrescente"], [0, 1, 2], "2ˣ > 0 sempre, então não corta o eixo x; com base > 1 é crescente."),
  o("Uma cidade tem 10.000 habitantes e a população dobra a cada 10 anos. Quantos habitantes haverá em 30 anos? Explique por que esse crescimento é exponencial.", "Em 30 anos são 3 períodos de 10 anos: 10.000 · 2³ = 10.000 · 8 = 80.000 habitantes. É exponencial porque a população é multiplicada pelo mesmo fator (2) a cada período, e não somada a um valor fixo.", [
    ["Resultado 80.000", "80000", "80.000", "80 mil"],
    ["3 dobras / 2³", "2³", "2^3", "tres", "3 vezes", "3 periodos"],
    ["Multiplica pelo mesmo fator", "multiplic", "fator", "dobra", "nao soma"],
  ]),
], "n");

extend(MATEMATICA, "Trigonometria", [
  q("Num triângulo retângulo, sen α é a razão entre:", ["Cateto oposto e hipotenusa", "Cateto adjacente e hipotenusa", "Cateto oposto e adjacente", "Hipotenusa e cateto oposto"], 0, "sen = oposto/hipotenusa; cos = adjacente/hipotenusa; tg = oposto/adjacente."),
  q("Quanto vale tg 45°?", ["1", "√2/2", "√3", "0"], 0, "No triângulo de 45°, os catetos são iguais: tg 45° = 1."),
  q("Quanto vale cos 30°?", ["√3/2", "1/2", "√2/2", "√3"], 0, "cos 30° = √3/2 (igual a sen 60°)."),
  q("Num triângulo retângulo, a hipotenusa mede 10 e um ângulo agudo mede 30°. O cateto oposto a esse ângulo mede:", ["5", "10", "5√3", "√3"], 0, "Cateto oposto = hipotenusa · sen 30° = 10 · 1/2 = 5."),
  q("Se sen x = 0,6 num triângulo retângulo, quanto vale cos x?", ["0,8", "0,4", "1,6", "0,6"], 0, "sen² + cos² = 1 → cos² = 1 − 0,36 = 0,64 → cos = 0,8 (triângulo 6-8-10)."),
  qe("Uma escada de 6 m está apoiada num muro, formando 60° com o chão.", "A que altura do muro a escada toca?", ["3√3 m", "3 m", "6√3 m", "2√3 m"], 0, "Altura = 6 · sen 60° = 6 · √3/2 = 3√3 ≈ 5,2 m."),
  qe("Uma rampa sobe 1 m de altura ao longo de 2 m de comprimento (medido na própria rampa).", "Qual é o ângulo da rampa com o chão?", ["30°", "45°", "60°", "15°"], 0, "sen α = 1/2 → α = 30°."),
  qe("Do alto de um farol de 30 m, um observador vê um barco sob um ângulo de depressão de 45°.", "A que distância da base do farol está o barco?", ["30 m", "15 m", "30√2 m", "60 m"], 0, "tg 45° = 30/d = 1 → d = 30 m."),
  qe("Uma pipa está presa a uma linha esticada de 50 m, que forma 30° com o chão.", "A que altura (aproximada) está a pipa?", ["25 m", "43 m", "50 m", "15 m"], 0, "Altura = 50 · sen 30° = 25 m (ignorando a altura da mão)."),
  q("Num triângulo retângulo com catetos 5 e 12, a hipotenusa mede:", ["13", "17", "7", "60"], 0, "5² + 12² = 25 + 144 = 169 → √169 = 13."),
  q("tg α é igual a:", ["sen α / cos α", "cos α / sen α", "sen α · cos α", "1 / sen α"], 0, "tg = (oposto/hip)/(adjacente/hip) = oposto/adjacente = sen/cos."),
  m("Marque os valores trigonométricos corretos dos ângulos notáveis:", ["sen 60° = √3/2", "cos 45° = √2/2", "tg 30° = √3/3", "tg 60° = 1", "cos 60° = √3/2"], [0, 1, 2], "tg 60° = √3; cos 60° = 1/2."),
  m("Num triângulo retângulo 3-4-5, para o ângulo oposto ao lado 3, marque as corretas:", ["sen = 3/5", "cos = 4/5", "tg = 3/4", "sen = 4/5", "tg = 4/3"], [0, 1, 2], "Oposto 3, adjacente 4, hipotenusa 5."),
  o("Explique como medir a altura de um prédio usando a sombra e um ângulo, com trigonometria.", "Mede-se o comprimento da sombra (cateto adjacente) e o ângulo de elevação do sol (do chão até o topo). A altura é o cateto oposto: altura = sombra · tangente do ângulo. Ex.: sombra de 20 m e ângulo de 45° → altura = 20 · 1 = 20 m.", [
    ["Sombra como cateto adjacente", "sombra", "adjacente"],
    ["Usa a tangente do ângulo", "tangente", "tg 45"],
    ["Exemplo numérico", "20", "exemplo", "45"],
  ]),
], "n");

extend(MATEMATICA, "Progressões (PA e PG)", [
  q("Qual é a razão da PA (12, 9, 6, 3, …)?", ["−3", "3", "−9", "1/3"], 0, "r = 9 − 12 = −3: a PA é decrescente."),
  q("O 20º termo da PA (5, 9, 13, …) é:", ["81", "85", "80", "77"], 0, "r = 4; a₂₀ = 5 + 19 · 4 = 5 + 76 = 81."),
  q("Qual é a razão da PG (81, 27, 9, …)?", ["1/3", "3", "−54", "−3"], 0, "q = 27/81 = 1/3: a PG é decrescente."),
  q("A soma dos 5 primeiros termos da PG (1, 3, 9, …) é:", ["121", "81", "243", "120"], 0, "Termos: 1 + 3 + 9 + 27 + 81 = 121. Pela fórmula: (3⁵ − 1)/(3 − 1) = 242/2 = 121."),
  q("Em uma PA, a₁ = 2 e a₁₀ = 29. A razão é:", ["3", "2,7", "27", "9"], 0, "a₁₀ = a₁ + 9r → 29 = 2 + 9r → r = 3."),
  qe("Uma pessoa guarda R$ 10 na 1ª semana, R$ 15 na 2ª, R$ 20 na 3ª, e assim por diante.", "Quanto ela guarda na 10ª semana?", ["R$ 55", "R$ 60", "R$ 50", "R$ 65"], 0, "PA com a₁ = 10 e r = 5: a₁₀ = 10 + 9 · 5 = R$ 55."),
  qe("Um teatro tem 20 fileiras: a 1ª com 10 cadeiras e cada fileira seguinte com 2 a mais.", "Quantas cadeiras tem o teatro?", ["580", "480", "400", "600"], 0, "a₂₀ = 10 + 19 · 2 = 48. Soma = (10 + 48) · 20/2 = 58 · 10 = 580."),
  qe("Uma notícia é compartilhada por 3 pessoas; cada uma compartilha com 3 novas, e assim por diante, a cada hora.", "Quantas pessoas recebem a notícia na 5ª hora?", ["243", "15", "81", "125"], 0, "PG de razão 3: 3, 9, 27, 81, 243. Na 5ª hora, 3⁵ = 243."),
  qe("Uma bola é solta de 16 m e, a cada quique, sobe metade da altura anterior.", "Qual altura ela atinge após o 3º quique?", ["2 m", "4 m", "8 m", "1 m"], 0, "16 → 8 → 4 → 2: após 3 quiques, 2 m (PG de razão 1/2)."),
  q("Os números 4, x, 16 formam uma PG positiva. Quanto vale x?", ["8", "10", "12", "6"], 0, "Na PG, o termo do meio ao quadrado é o produto dos vizinhos: x² = 64 → x = 8."),
  q("Os números 4, x, 16 formam uma PA. Quanto vale x?", ["10", "8", "12", "6"], 0, "Na PA, o termo do meio é a média dos vizinhos: (4 + 16)/2 = 10."),
  m("Marque as PGs:", ["2, 6, 18, 54", "5, −10, 20, −40", "100, 10, 1, 0,1", "1, 2, 3, 4", "1, 4, 9, 16"], [0, 1, 2], "1, 2, 3, 4 é PA; 1, 4, 9, 16 são quadrados (nem PA nem PG)."),
  m("Para a PA (3, 7, 11, 15, …), marque as corretas:", ["A razão é 4", "O 6º termo é 23", "A soma dos 4 primeiros é 36", "A razão é 3", "O 6º termo é 27"], [0, 1, 2], "a₆ = 3 + 5 · 4 = 23; soma = 3 + 7 + 11 + 15 = 36."),
  o("Explique a diferença entre PA e PG e dê um exemplo de situação real para cada.", "Na PA, cada termo é o anterior SOMADO a uma razão constante (crescimento linear), como guardar R$ 5 a mais por semana. Na PG, cada termo é o anterior MULTIPLICADO por uma razão (crescimento exponencial), como uma população de bactérias que dobra a cada hora.", [
    ["PA: soma uma razão", "soma", "somado", "adiciona"],
    ["PG: multiplica por uma razão", "multiplic"],
    ["Exemplos reais", "exemplo", "bacteria", "dobra", "semana", "salario", "poupan"],
  ]),
], "n");

extend(MATEMATICA, "Matrizes e sistemas", [
  q("Qual é a soma das matrizes [[1, 2], [3, 4]] e [[5, 6], [7, 8]]?", ["[[6, 8], [10, 12]]", "[[5, 12], [21, 32]]", "[[4, 4], [4, 4]]", "[[6, 8], [12, 10]]"], 0, "Soma-se elemento a elemento: 1+5, 2+6, 3+7, 4+8."),
  q("O elemento a₂₁ de uma matriz fica na:", ["2ª linha e 1ª coluna", "1ª linha e 2ª coluna", "2ª linha e 2ª coluna", "1ª linha e 1ª coluna"], 0, "O primeiro índice é a linha; o segundo, a coluna."),
  q("A matriz identidade 2×2 é:", ["[[1, 0], [0, 1]]", "[[1, 1], [1, 1]]", "[[0, 1], [1, 0]]", "[[0, 0], [0, 0]]"], 0, "Tem 1 na diagonal principal e 0 fora dela; multiplicar por ela não altera a matriz."),
  q("Qual é o determinante de [[3, 1], [2, 4]]?", ["10", "14", "2", "−10"], 0, "3 · 4 − 1 · 2 = 12 − 2 = 10."),
  q("Resolva: 2x + y = 7 e x − y = 2.", ["x = 3, y = 1", "x = 2, y = 3", "x = 1, y = 5", "x = 4, y = −1"], 0, "Somando: 3x = 9 → x = 3; então y = 7 − 6 = 1. Confira: 3 − 1 = 2."),
  q("Um sistema linear sem nenhuma solução é chamado de:", ["Impossível", "Determinado", "Indeterminado", "Homogêneo"], 0, "SPD: uma solução; SPI: infinitas; SI: nenhuma (retas paralelas distintas)."),
  qe("Num estacionamento há carros e motos, somando 20 veículos e 64 rodas.", "Quantos carros há?", ["12", "8", "10", "16"], 0, "c + m = 20 e 4c + 2m = 64. Do primeiro, m = 20 − c: 4c + 40 − 2c = 64 → 2c = 24 → c = 12."),
  qe("Num show, a inteira custa R$ 80 e a meia, R$ 40. Foram vendidos 300 ingressos e arrecadados R$ 18.000.", "Quantas meias-entradas foram vendidas?", ["150", "100", "200", "225"], 0, "i + m = 300 e 80i + 40m = 18.000. Dividindo a 2ª por 40: 2i + m = 450. Subtraindo: i = 150, m = 150."),
  qe("Uma tabela mostra as notas de 3 alunos (linhas) em 2 provas (colunas).", "Essa tabela pode ser representada por uma matriz de ordem:", ["3 × 2", "2 × 3", "3 × 3", "6 × 1"], 0, "Ordem = linhas × colunas: 3 alunos (linhas) e 2 provas (colunas)."),
  qe("Ana tem o dobro da idade de Bia, e juntas têm 36 anos.", "Qual é a idade de Ana?", ["24", "12", "18", "30"], 0, "a = 2b e a + b = 36 → 3b = 36 → b = 12 e a = 24."),
  q("Para multiplicar uma matriz 2×3 por uma 3×4, o resultado tem ordem:", ["2 × 4", "3 × 3", "2 × 3", "4 × 2"], 0, "As 'de dentro' (3 e 3) têm que ser iguais; o resultado fica com as 'de fora': 2 × 4."),
  m("Marque as corretas sobre matrizes:", ["Somam-se só matrizes de mesma ordem", "A·B nem sempre é igual a B·A", "Matriz identidade tem 1 na diagonal", "Toda matriz tem determinante", "A·B sempre é igual a B·A"], [0, 1, 2], "Só matrizes quadradas têm determinante; o produto não é comutativo em geral."),
  m("Sobre o sistema x + y = 10 e x − y = 4, marque as corretas:", ["x = 7", "y = 3", "É possível e determinado", "Não tem solução", "Tem infinitas soluções"], [0, 1, 2], "Somando: 2x = 14, x = 7, y = 3: uma única solução."),
  o("Explique, com um exemplo, como montar e resolver um sistema de equações a partir de um problema.", "Primeiro escolho incógnitas para o que não sei, depois transformo cada informação em equação e resolvo. Ex.: 'carros e motos somam 10 veículos e 30 rodas': c + m = 10 e 4c + 2m = 30. Substituindo m = 10 − c: 2c = 10, c = 5 carros e m = 5 motos.", [
    ["Escolher incógnitas", "incognita", "variavel", "chamo", "escolho"],
    ["Montar as equações a partir do texto", "equac", "montar", "transformo"],
    ["Resolver (substituição/adição) com exemplo", "substitu", "adicao", "somando", "exemplo"],
  ]),
], "n");

extend(MATEMATICA, "Combinatória e probabilidade", [
  q("De quantas formas 5 pessoas podem se sentar em 5 cadeiras em fila?", ["120", "25", "60", "5"], 0, "Permutação: 5! = 5 · 4 · 3 · 2 · 1 = 120."),
  q("Quantos anagramas tem a palavra ARARA?", ["10", "120", "20", "60"], 0, "5 letras com A repetido 3 vezes e R 2 vezes: 5!/(3! · 2!) = 120/12 = 10."),
  q("Quantos pódios (1º, 2º, 3º) são possíveis com 8 corredores?", ["336", "56", "512", "24"], 0, "A ordem importa (arranjo): 8 · 7 · 6 = 336."),
  q("De quantas formas escolher 3 sabores de sorvete entre 6 (ordem não importa)?", ["20", "120", "18", "216"], 0, "Combinação: C(6,3) = 6!/(3! · 3!) = 20."),
  q("Qual a probabilidade de sair um número primo num dado comum?", ["1/2", "1/3", "2/3", "1/6"], 0, "Primos de 1 a 6: 2, 3 e 5. São 3 de 6 = 1/2. (O 1 não é primo.)"),
  q("Ao tirar uma carta de um baralho de 52, a chance de ser de copas é:", ["1/4", "1/13", "1/52", "1/2"], 0, "São 13 cartas de copas em 52: 13/52 = 1/4."),
  qe("Um restaurante oferece 3 entradas, 4 pratos principais e 2 sobremesas.", "Quantos menus diferentes (uma de cada) é possível montar?", ["24", "9", "12", "48"], 0, "Princípio multiplicativo: 3 · 4 · 2 = 24."),
  qe("As placas de carro no padrão antigo tinham 3 letras (26 opções) e 4 algarismos (10 opções).", "Qual expressão dá o total de placas possíveis?", ["26³ · 10⁴", "26 · 3 + 10 · 4", "3 · 26 + 4 · 10", "(26 + 10)⁷"], 0, "Cada posição é independente: 26 · 26 · 26 · 10 · 10 · 10 · 10."),
  qe("Numa turma de 30 alunos, 18 são meninas. Sorteia-se um aluno.", "Qual a probabilidade de ser um menino?", ["2/5", "3/5", "1/2", "12/18"], 0, "Meninos = 12; 12/30 = 2/5."),
  qe("Uma urna tem 5 bolas azuis e 3 vermelhas. Retiram-se 2 bolas, sem reposição.", "Qual a probabilidade de as duas serem vermelhas?", ["3/28", "9/64", "3/8", "1/4"], 0, "3/8 · 2/7 = 6/56 = 3/28. Sem reposição, a segunda retirada tem uma bola a menos."),
  q("Numa comissão de 10 pessoas, quantas duplas diferentes podem ser formadas?", ["45", "90", "20", "100"], 0, "C(10,2) = 10 · 9/2 = 45 (a ordem na dupla não importa)."),
  m("Marque as situações em que a ordem importa (arranjo ou permutação):", ["Pódio de uma corrida", "Senha de banco", "Fila de pessoas", "Escolher 3 frutas para a salada", "Formar uma comissão sem cargos"], [0, 1, 2], "Salada e comissão sem cargos são combinações: trocar a ordem não muda o grupo."),
  m("Num lançamento de dado, marque as chances certas:", ["Sair 5: 1/6", "Sair par: 1/2", "Sair maior que 4: 1/3", "Sair 0: 1/6", "Sair menor que 7: 1/2"], [0, 1, 2], "Sair 0 é impossível (0); menor que 7 é certo (1)."),
  o("Explique a diferença entre arranjo e combinação, com um exemplo de cada.", "No arranjo a ordem importa: escolher presidente e vice entre 5 pessoas dá 5 · 4 = 20 formas. Na combinação a ordem não importa: escolher 2 pessoas para uma dupla entre 5 dá 20/2 = 10 formas, pois Ana-Beto é igual a Beto-Ana.", [
    ["Arranjo: a ordem importa", "ordem importa", "arranjo"],
    ["Combinação: a ordem não importa", "nao importa", "combinac"],
    ["Exemplos", "presidente", "dupla", "comissao", "podio", "exemplo"],
  ]),
], "n");

extend(MATEMATICA, "Geometria plana e espacial", [
  q("Qual é a área de um círculo de raio 5 (use π)?", ["25π", "10π", "5π", "50π"], 0, "A = π · r² = π · 25 = 25π. 10π seria o perímetro (2πr)."),
  q("Qual é o perímetro de um retângulo de lados 7 e 3?", ["20", "21", "10", "42"], 0, "P = 2 · (7 + 3) = 20. 21 seria a área."),
  q("Quanto mede cada ângulo interno de um hexágono regular?", ["120°", "108°", "135°", "60°"], 0, "Soma = (6 − 2) · 180° = 720°; cada um: 720/6 = 120°."),
  q("O volume de um paralelepípedo de 2 × 3 × 5 m é:", ["30 m³", "10 m³", "31 m³", "60 m³"], 0, "V = 2 · 3 · 5 = 30 m³."),
  q("Quantas arestas tem um cubo?", ["12", "8", "6", "24"], 0, "Cubo: 6 faces, 8 vértices e 12 arestas. Relação de Euler: V − A + F = 8 − 12 + 6 = 2."),
  q("A área de um losango com diagonais 6 e 8 é:", ["24", "48", "14", "28"], 0, "A = D · d/2 = 6 · 8/2 = 24."),
  qe("Uma sala retangular de 5 m por 4 m será coberta com piso. Cada caixa cobre 2 m².", "Quantas caixas, no mínimo, são necessárias?", ["10", "20", "9", "18"], 0, "Área = 5 · 4 = 20 m²; 20/2 = 10 caixas (sem considerar perdas)."),
  qe("Uma caixa-d'água cúbica tem 2 m de aresta.", "Quantos litros ela comporta?", ["8.000 L", "800 L", "6.000 L", "4.000 L"], 0, "V = 2³ = 8 m³ = 8.000 litros (1 m³ = 1.000 L)."),
  qe("Uma pizza grande tem 40 cm de diâmetro e uma média, 30 cm. Usar π ≈ 3.", "Quanto a área da grande é maior que a da média, em cm²?", ["525", "100", "300", "1.200"], 0, "Grande: 3 · 20² = 1.200; média: 3 · 15² = 675. Diferença: 525 cm²."),
  qe("Um jardim circular tem raio 7 m e será cercado com 3 voltas de arame. Use π ≈ 22/7.", "Quantos metros de arame são necessários?", ["132 m", "44 m", "154 m", "462 m"], 0, "Uma volta: 2 · 22/7 · 7 = 44 m. Três voltas: 132 m."),
  q("Dobrando o lado de um quadrado, sua área fica:", ["4 vezes maior", "2 vezes maior", "8 vezes maior", "Igual"], 0, "Área = l². Com 2l: (2l)² = 4l²."),
  m("Marque as fórmulas de área e volume corretas:", ["Área do trapézio: (B + b)·h/2", "Volume do cilindro: π·r²·h", "Área do círculo: π·r²", "Volume da esfera: 4·π·r²", "Perímetro do círculo: π·r²"], [0, 1, 2], "Volume da esfera: (4/3)·π·r³; perímetro: 2·π·r."),
  m("Marque os sólidos que são poliedros:", ["Cubo", "Pirâmide", "Prisma", "Esfera", "Cilindro"], [0, 1, 2], "Esfera e cilindro têm superfícies curvas: não são poliedros."),
  o("Explique por que, ao dobrar o lado de um cubo, o volume fica 8 vezes maior.", "O volume do cubo é V = a³ (a aresta ao cubo). Se o lado passa a ser 2a, o novo volume é (2a)³ = 8a³. Cada uma das três dimensões dobra, então o volume é multiplicado por 2 · 2 · 2 = 8.", [
    ["Volume = a³", "ao cubo", "a^3", "aresta"],
    ["(2a)³ = 8a³", "8a", "2 · 2 · 2", "2x2x2", "8 vezes"],
    ["Três dimensões dobram", "tres dimens", "comprimento", "largura", "altura"],
  ]),
], "n");

extend(MATEMATICA, "Geometria analítica", [
  q("Qual é a distância entre (1, 2) e (4, 6)?", ["5", "7", "25", "√7"], 0, "d = √[(4−1)² + (6−2)²] = √(9 + 16) = 5."),
  q("O coeficiente angular da reta que passa por (2, 3) e (4, 11) é:", ["4", "8", "2", "1/4"], 0, "m = (11 − 3)/(4 − 2) = 8/2 = 4."),
  q("Retas paralelas têm:", ["O mesmo coeficiente angular", "Coeficientes angulares opostos", "O produto dos coeficientes igual a −1", "Sempre o mesmo ponto de corte"], 0, "Paralelas: mesma inclinação. Produto −1 é a condição de perpendicularidade."),
  q("O centro e o raio da circunferência (x − 2)² + (y + 1)² = 9 são:", ["(2, −1) e 3", "(−2, 1) e 3", "(2, −1) e 9", "(2, 1) e 3"], 0, "Na forma (x − a)² + (y − b)² = r²: a = 2, b = −1, r = √9 = 3."),
  q("Em que quadrante está o ponto (−3, 5)?", ["2º", "1º", "3º", "4º"], 0, "x negativo e y positivo: 2º quadrante."),
  q("A reta y = −2x + 4 corta o eixo x no ponto:", ["(2, 0)", "(0, 4)", "(−2, 0)", "(4, 0)"], 0, "y = 0 → −2x + 4 = 0 → x = 2."),
  qe("No mapa de uma cidade com malha quadriculada, a escola fica em (2, 3) e a casa de Lia em (8, 11), em quarteirões.", "Qual é a distância em linha reta entre os dois pontos?", ["10 quarteirões", "14 quarteirões", "8 quarteirões", "100 quarteirões"], 0, "d = √(6² + 8²) = √100 = 10. (14 seria o caminho pelas ruas.)"),
  qe("Um aplicativo localiza dois amigos nos pontos (−1, 4) e (5, 2) de um plano.", "Qual é o ponto médio, bom para um encontro?", ["(2, 3)", "(3, 1)", "(4, 6)", "(6, −2)"], 0, "Média das coordenadas: ((−1 + 5)/2, (4 + 2)/2) = (2, 3)."),
  qe("A reta de um gráfico passa pelos pontos (0, 100) e (5, 0), representando um tanque que esvazia.", "Qual é a equação da reta?", ["y = −20x + 100", "y = 20x + 100", "y = −5x + 100", "y = 100x − 5"], 0, "m = (0 − 100)/(5 − 0) = −20 e corta y em 100: y = −20x + 100."),
  qe("Um robô parte da origem e anda 3 unidades para a direita e 4 para cima.", "A que distância da origem ele termina?", ["5", "7", "12", "1"], 0, "Ponto (3, 4): d = √(9 + 16) = 5."),
  q("Retas perpendiculares a y = 2x + 1 têm coeficiente angular:", ["−1/2", "2", "−2", "1/2"], 0, "m₁ · m₂ = −1 → 2 · m₂ = −1 → m₂ = −1/2."),
  m("Sobre a reta y = 3x − 6, marque as corretas:", ["O coeficiente angular é 3", "Corta o eixo y em −6", "Corta o eixo x em 2", "É decrescente", "É paralela a y = −3x"], [0, 1, 2], "a = 3 > 0 (crescente); paralela seria y = 3x + k."),
  m("Sobre a circunferência x² + y² = 16, marque as corretas:", ["O centro é (0, 0)", "O raio é 4", "(4, 0) pertence a ela", "O raio é 16", "(2, 2) pertence a ela"], [0, 1, 2], "r = √16 = 4; (2, 2) dá 4 + 4 = 8 ≠ 16."),
  o("Explique como saber se duas retas são paralelas ou perpendiculares pelos coeficientes angulares.", "Escrevo as retas na forma y = mx + b. Se os coeficientes angulares m são iguais, as retas são paralelas (mesma inclinação). Se o produto dos coeficientes é −1, elas são perpendiculares. Ex.: y = 2x e y = −x/2 são perpendiculares, pois 2 · (−1/2) = −1.", [
    ["Paralelas: mesmo coeficiente angular", "paralel", "iguais", "mesma inclina"],
    ["Perpendiculares: produto −1", "−1", "-1", "perpendic"],
    ["Exemplo", "exemplo", "2x", "y 2x"],
  ]),
], "n");

extend(MATEMATICA, "Estatística e matemática financeira", [
  q("Qual é a média de 10, 20, 30 e 60?", ["30", "25", "40", "120"], 0, "(10 + 20 + 30 + 60)/4 = 120/4 = 30."),
  q("A mediana de 2, 8, 5, 9, 1, 7 é:", ["6", "5", "7", "5,5"], 0, "Ordenando: 1, 2, 5, 7, 8, 9. Número par de dados: média dos dois do meio, (5 + 7)/2 = 6."),
  q("R$ 2.000 a juros compostos de 10% ao ano, por 2 anos, resultam em:", ["R$ 2.420", "R$ 2.400", "R$ 2.200", "R$ 2.440"], 0, "2.000 · 1,1² = 2.000 · 1,21 = R$ 2.420. Com juros simples seriam R$ 2.400."),
  q("Frequência relativa de um valor é:", ["A fração das vezes em que ele aparece", "O valor que mais aparece", "A diferença entre maior e menor", "A soma de todos os dados"], 0, "Ex.: se 5 de 20 alunos tiraram nota 8, a frequência relativa é 5/20 = 25%."),
  q("Um produto de R$ 200 teve aumento de 10% e depois desconto de 10%. Preço final:", ["R$ 198", "R$ 200", "R$ 202", "R$ 180"], 0, "200 · 1,1 = 220; 220 · 0,9 = 198. O desconto incide sobre um valor maior."),
  q("Numa pesquisa, a moda é o valor:", ["Mais frequente", "Do meio", "Médio", "Maior"], 0, "Moda = o que mais se repete."),
  qe("Notas de um aluno no ano: 6, 7, 8 e 9, com pesos 1, 1, 2 e 2, respectivamente.", "Qual é a média ponderada?", ["7,83", "7,5", "8", "7"], 0, "(6·1 + 7·1 + 8·2 + 9·2)/6 = (6 + 7 + 16 + 18)/6 = 47/6 ≈ 7,83."),
  qe("Uma loja vende uma TV por R$ 1.500 à vista ou em 3 parcelas de R$ 550.", "Quanto o cliente paga a mais no parcelado?", ["R$ 150", "R$ 50", "R$ 550", "R$ 100"], 0, "3 · 550 = R$ 1.650. Diferença: 1.650 − 1.500 = R$ 150."),
  qe("Os salários de uma pequena empresa são R$ 2.000, R$ 2.000, R$ 2.500, R$ 3.000 e R$ 20.500 (do dono).", "Qual medida representa melhor o salário típico dos funcionários?", ["A mediana (R$ 2.500)", "A média (R$ 6.000)", "O maior valor", "A soma total"], 0, "A média (30.000/5 = 6.000) é puxada pelo salário do dono. A mediana não é afetada pelo extremo."),
  qe("Uma aplicação rende 1% ao mês em juros compostos.", "Após 12 meses, o rendimento total é:", ["Um pouco mais que 12%", "Exatamente 12%", "Exatamente 1%", "Menos que 12%"], 0, "1,01¹² ≈ 1,127: cerca de 12,7%, mais que 12% porque há juros sobre juros."),
  q("Um gráfico de colunas é mais indicado para:", ["Comparar quantidades entre categorias", "Mostrar partes de um todo", "Mostrar tendência contínua", "Representar fórmulas"], 0, "Colunas comparam categorias; setores mostram partes do todo; linhas, evolução no tempo."),
  m("Para os dados 3, 3, 5, 7, 12, marque as corretas:", ["Média = 6", "Mediana = 5", "Moda = 3", "Amplitude = 12", "Média = 5"], [0, 1, 2], "Soma 30/5 = 6; amplitude = 12 − 3 = 9."),
  m("Marque as afirmações corretas sobre juros compostos:", ["Rendem juros sobre juros", "Crescem de forma exponencial", "Superam os simples após o 1º período", "Crescem em linha reta", "São sempre menores que os simples"], [0, 1, 2], "No 1º período são iguais; depois, os compostos superam os simples."),
  o("Por que a média pode enganar quando há valores muito extremos? Dê um exemplo.", "Porque a média soma todos os valores e é puxada por extremos. Ex.: salários de 2, 2, 2, 2 e 22 mil têm média de 6 mil, mas quase todos ganham 2 mil. Nesses casos a mediana (2 mil) representa melhor o grupo.", [
    ["A média é puxada por extremos", "puxad", "extremo", "distorc"],
    ["Exemplo numérico", "exemplo", "salario", "mil"],
    ["A mediana é melhor nesses casos", "mediana"],
  ]),
], "n");

extend(MATEMATICA, "Números complexos e polinômios", [
  q("Quanto é (3 + 2i) · (1 − i)?", ["5 − i", "3 − 2i", "5 + i", "1 − i"], 0, "3 − 3i + 2i − 2i² = 3 − i + 2 = 5 − i (lembre: i² = −1)."),
  q("O conjugado de 4 − 7i é:", ["4 + 7i", "−4 + 7i", "−4 − 7i", "7 − 4i"], 0, "O conjugado troca o sinal da parte imaginária."),
  q("Quanto vale a potência i elevado a 3?", ["−i", "i", "−1", "1"], 0, "i³ = i² · i = −1 · i = −i."),
  q("O módulo de 3 + 4i é:", ["5", "7", "1", "25"], 0, "|z| = √(3² + 4²) = √25 = 5."),
  q("Qual é o resto da divisão de P(x) = x² + 3x + 1 por (x − 1)?", ["5", "1", "3", "0"], 0, "Teorema do resto: P(1) = 1 + 3 + 1 = 5."),
  q("Se 2 é raiz de P(x) = x³ − 8, então P(x) é divisível por:", ["x − 2", "x + 2", "x − 8", "x + 8"], 0, "Se P(a) = 0, então P(x) é divisível por (x − a): aqui, x − 2."),
  qe("Em engenharia elétrica, a impedância de um circuito é representada por Z = 6 + 8i ohms.", "Qual é o módulo da impedância?", ["10 ohms", "14 ohms", "48 ohms", "2 ohms"], 0, "|Z| = √(36 + 64) = √100 = 10 ohms."),
  qe("Um polinômio de grau 4 tem coeficientes reais e as raízes 1, 2 e 3 + i.", "Qual é a quarta raiz?", ["3 − i", "−3 + i", "i", "4"], 0, "Com coeficientes reais, raízes complexas vêm em pares conjugados: 3 + i e 3 − i."),
  qe("A soma das raízes de x³ − 6x² + 11x − 6 = 0 pode ser obtida sem resolvê-la.", "Qual é essa soma?", ["6", "−6", "11", "1"], 0, "Relação de Girard: soma = −b/a = −(−6)/1 = 6. (As raízes são 1, 2 e 3.)"),
  qe("Um número complexo z = a + bi está no plano de Argand-Gauss no ponto (−2, 3).", "Qual é z?", ["−2 + 3i", "3 − 2i", "−2 − 3i", "2 + 3i"], 0, "O eixo horizontal é a parte real e o vertical, a imaginária: z = −2 + 3i."),
  q("O grau do polinômio (x² + 1)(x³ − x) é:", ["5", "6", "3", "2"], 0, "Ao multiplicar, os graus se somam: 2 + 3 = 5."),
  m("Marque as igualdades corretas:", ["i² = −1", "i⁴ = 1", "(1 + i)² = 2i", "i³ = i", "i⁰ = 0"], [0, 1, 2], "i³ = −i; i⁰ = 1."),
  m("Sobre P(x) = x² − 5x + 6, marque as corretas:", ["P(2) = 0", "P(3) = 0", "É divisível por x − 2", "P(0) = 0", "Tem grau 3"], [0, 1, 2], "P(0) = 6; o grau é 2."),
  o("Explique o teorema do resto e use-o para achar o resto de x³ + 2x − 4 dividido por x − 2.", "O teorema do resto diz que o resto da divisão de P(x) por (x − a) é P(a). Aqui a = 2: P(2) = 8 + 4 − 4 = 8. Então o resto é 8, sem precisar fazer a divisão.", [
    ["Resto é P(a)", "p(a)", "valor de p", "resto e"],
    ["Substitui x = 2", "x = 2", "p(2)", "a = 2"],
    ["Resultado 8", " 8"],
  ]),
], "n");

extend(MATEMATICA, "Porcentagem", [
  q("Quanto é 15% de 240?", ["36", "24", "16", "40"], 0, "10% de 240 = 24; 5% = 12; 15% = 36."),
  q("Um preço passou de R$ 50 para R$ 65. O aumento foi de:", ["30%", "15%", "23%", "65%"], 0, "Aumento de 15 sobre 50: 15/50 = 0,3 = 30%."),
  q("Dois descontos sucessivos de 10% equivalem a um desconto de:", ["19%", "20%", "21%", "10%"], 0, "0,9 · 0,9 = 0,81: paga-se 81%, desconto total de 19%."),
  q("Qual fração corresponde a 75%?", ["3/4", "7/5", "1/75", "4/3"], 0, "75/100 = 3/4."),
  q("Se 20% de um valor é 50, o valor todo é:", ["250", "100", "70", "1.000"], 0, "20% = 1/5. Valor = 50 · 5 = 250."),
  qe("Uma pesquisa com 2.000 pessoas mostrou que 35% preferem ônibus.", "Quantas pessoas preferem ônibus?", ["700", "350", "570", "1.300"], 0, "35% de 2.000 = 0,35 · 2.000 = 700."),
  qe("Um celular de R$ 1.200 está com desconto de 15% no Pix.", "Qual é o preço no Pix?", ["R$ 1.020", "R$ 1.050", "R$ 180", "R$ 1.185"], 0, "1.200 · 0,85 = R$ 1.020. O desconto em si é R$ 180."),
  qe("A conta de luz subiu de R$ 120 para R$ 150 por causa da bandeira tarifária.", "Qual foi o aumento percentual?", ["25%", "30%", "20%", "15%"], 0, "Aumento de 30 sobre 120: 30/120 = 0,25 = 25%."),
  qe("Numa eleição com 50.000 votos válidos, um candidato teve 52% dos votos.", "Por quantos votos ele superou a metade?", ["1.000", "2.000", "26.000", "500"], 0, "52% de 50.000 = 26.000. A metade é 25.000. Diferença: 1.000 votos."),
  qe("O preço da gasolina caiu 10% em um mês e subiu 10% no mês seguinte.", "Em relação ao preço inicial, o preço final ficou:", ["1% menor", "Igual", "1% maior", "10% menor"], 0, "0,9 · 1,1 = 0,99: ficou 1% abaixo do inicial."),
  q("Uma loja aumenta um preço em 25%. Para voltar ao preço original, o desconto deve ser de:", ["20%", "25%", "15%", "30%"], 0, "1,25 · (1 − d) = 1 → 1 − d = 0,8 → d = 20%."),
  m("Marque as porcentagens calculadas corretamente:", ["10% de 80 = 8", "50% de 36 = 18", "1% de 500 = 5", "25% de 40 = 25", "200% de 10 = 2"], [0, 1, 2], "25% de 40 = 10; 200% de 10 = 20."),
  m("Marque as afirmações corretas sobre fatores de aumento e desconto:", ["Multiplicar por 1,2 é aumentar 20%", "Multiplicar por 0,7 é dar 30% de desconto", "Dobrar é aumentar 100%", "Multiplicar por 0,2 é dar 20% de desconto", "Aumentar 50% é multiplicar por 0,5"], [0, 1, 2], "× 0,2 é ficar com 20% (desconto de 80%); aumentar 50% é × 1,5."),
  o("Um produto subiu 20% e depois baixou 20%. Ele voltou ao preço original? Use um exemplo numérico.", "Não. Com preço inicial de R$ 100, o aumento de 20% leva a R$ 120. O desconto de 20% é calculado sobre 120, o que tira R$ 24, e o preço vai a R$ 96. No total, ficou 4% mais barato (1,2 · 0,8 = 0,96).", [
    ["Não volta ao original", "nao", "menor", "mais barato"],
    ["Exemplo numérico (100 → 120 → 96)", "96", "120"],
    ["O desconto é sobre um valor maior", "sobre 120", "maior", "base"],
  ]),
], "n");

extend(MATEMATICA, "Juros, inflação e parcelas", [
  q("R$ 500 a juros simples de 3% ao mês, por 4 meses, geram juros de:", ["R$ 60", "R$ 15", "R$ 120", "R$ 560"], 0, "J = 500 · 0,03 · 4 = R$ 60. Montante = R$ 560."),
  q("No regime de juros compostos, o montante cresce como uma função:", ["Exponencial", "Afim", "Constante", "Quadrática"], 0, "M = C · (1 + i)ⁿ: o tempo está no expoente."),
  q("Se a inflação do ano foi de 5% e o salário subiu 3%, o poder de compra:", ["Diminuiu", "Aumentou", "Ficou igual", "Dobrou"], 0, "Os preços subiram mais que o salário: compra-se menos."),
  q("A taxa de 2% ao mês em juros simples equivale, num ano, a:", ["24%", "2%", "12%", "26,8%"], 0, "Em juros simples, 2% · 12 = 24%. (Em compostos seria cerca de 26,8%.)"),
  q("Juros do cartão de crédito costumam ser:", ["Muito altos", "Os mais baixos do mercado", "Inexistentes", "Iguais aos da poupança"], 0, "O rotativo do cartão está entre os créditos mais caros: pagar só o mínimo faz a dívida crescer rápido."),
  qe("Uma geladeira custa R$ 2.000 à vista ou R$ 2.400 em 12 parcelas iguais.", "Qual é o valor de cada parcela?", ["R$ 200", "R$ 166,67", "R$ 240", "R$ 120"], 0, "2.400 / 12 = R$ 200. O cliente paga R$ 400 a mais no parcelado."),
  qe("Ana deixou R$ 1.000 numa aplicação que rende 5% ao ano, em juros compostos.", "Quanto ela terá após 2 anos?", ["R$ 1.102,50", "R$ 1.100,00", "R$ 1.050,00", "R$ 1.150,00"], 0, "1.000 · 1,05² = 1.000 · 1,1025 = R$ 1.102,50."),
  qe("Um empréstimo de R$ 1.000 deve ser pago em uma única parcela de R$ 1.150 após 3 meses (juros simples).", "Qual é a taxa mensal?", ["5%", "15%", "3%", "50%"], 0, "Juros de 150 em 3 meses: 50 por mês. 50/1.000 = 5% ao mês."),
  qe("Uma dívida de cartão de R$ 1.000 cresce 10% ao mês e não é paga.", "Após 3 meses, a dívida será de aproximadamente:", ["R$ 1.331", "R$ 1.300", "R$ 1.030", "R$ 1.100"], 0, "1.000 · 1,1³ = 1.000 · 1,331 = R$ 1.331: juros sobre juros."),
  qe("Um salário de R$ 2.000 teve reajuste de 10% num ano em que a inflação foi de 10%.", "O ganho real foi de:", ["0%", "10%", "20%", "5%"], 0, "O salário e os preços subiram igual: o poder de compra não mudou."),
  q("Comprar à vista com desconto costuma ser vantajoso quando:", ["O desconto supera o rendimento do dinheiro", "Os juros do parcelado são zero", "A inflação é negativa", "Nunca é vantajoso"], 0, "Se o desconto à vista é maior que o que o dinheiro renderia aplicado, vale pagar à vista."),
  m("Marque as afirmações corretas sobre juros e inflação:", ["Juros compostos crescem mais rápido que simples", "Inflação reduz o poder de compra", "Parcelar pode embutir juros", "Juros simples rendem juros sobre juros", "Inflação aumenta o valor do dinheiro"], [0, 1, 2], "Juros sobre juros são compostos; inflação diminui o valor do dinheiro."),
  m("Marque atitudes de educação financeira:", ["Comparar à vista e parcelado", "Evitar o rotativo do cartão", "Guardar parte da renda", "Pagar só o mínimo do cartão sempre", "Ignorar os juros das parcelas"], [0, 1, 2], "Pagar só o mínimo e ignorar juros fazem a dívida crescer."),
  o("Explique por que uma dívida no cartão de crédito pode crescer tão rápido.", "Porque os juros do cartão são compostos e muito altos: a cada mês, os juros incidem sobre a dívida já aumentada pelos juros anteriores (juros sobre juros). Ex.: com 10% ao mês, R$ 1.000 viram cerca de R$ 1.331 em 3 meses, sem nenhuma compra nova.", [
    ["Juros compostos (juros sobre juros)", "composto", "juros sobre juros"],
    ["Taxas muito altas", "alto", "alta", "caro"],
    ["Exemplo numérico", "1.331", "1331", "exemplo", "1,1"],
  ]),
], "n");

extend(MATEMATICA, "Razão, proporção e regra de três", [
  q("Se 4 kg de arroz custam R$ 22, quanto custam 10 kg?", ["R$ 55", "R$ 50", "R$ 88", "R$ 44"], 0, "Cada kg custa 22/4 = 5,50. 10 kg = R$ 55."),
  q("A razão entre 15 e 45, na forma simplificada, é:", ["1/3", "3", "1/30", "15/45"], 0, "15/45 = 1/3 (dividindo por 15)."),
  q("6 máquinas fazem um trabalho em 10 dias. Em quantos dias 4 máquinas fazem o mesmo trabalho?", ["15", "6,7", "20", "12"], 0, "Inversa: 6 · 10 = 4 · d → d = 15 dias."),
  q("Numa receita, 3 xícaras de farinha rendem 12 biscoitos. Para 20 biscoitos, são necessárias:", ["5 xícaras", "4 xícaras", "6 xícaras", "7 xícaras"], 0, "12 biscoitos/3 xícaras = 4 por xícara. 20/4 = 5 xícaras."),
  q("Grandezas inversamente proporcionais são aquelas em que:", ["Uma dobra e a outra cai pela metade", "As duas dobram juntas", "Uma não afeta a outra", "As duas caem juntas"], 0, "O produto é constante: velocidade × tempo, para uma distância fixa."),
  qe("Num mapa, 2 cm representam 5 km.", "Quantos km representam 7 cm?", ["17,5 km", "14 km", "35 km", "10 km"], 0, "5 km / 2 cm = 2,5 km por cm. 7 · 2,5 = 17,5 km."),
  qe("Um carro faz 300 km com 25 litros.", "Quantos litros ele gasta para fazer 480 km?", ["40", "35", "48", "30"], 0, "Consumo: 300/25 = 12 km/L. 480/12 = 40 litros."),
  qe("Um prêmio de R$ 9.000 será dividido entre Ana e Bia em partes proporcionais a 2 e 3.", "Quanto recebe Bia?", ["R$ 5.400", "R$ 3.600", "R$ 4.500", "R$ 6.000"], 0, "2 + 3 = 5 partes; cada parte = 1.800. Bia: 3 · 1.800 = R$ 5.400."),
  qe("A 80 km/h, uma viagem dura 3 horas.", "Quanto tempo leva a 120 km/h?", ["2 h", "4,5 h", "1,5 h", "3 h"], 0, "Inversa: 80 · 3 = 120 · t → t = 2 h. (Distância: 240 km.)"),
  qe("Numa escola, a razão entre alunos e professores é de 25 para 1. Há 1.000 alunos.", "Quantos professores há?", ["40", "25", "250", "100"], 0, "1.000 / 25 = 40 professores."),
  q("Se x/12 = 3/4, quanto vale x?", ["9", "16", "4", "36"], 0, "4x = 36 → x = 9."),
  m("Marque os pares de grandezas diretamente proporcionais:", ["Quantidade comprada e preço total", "Distância e combustível gasto", "Tempo trabalhado e salário por hora pago", "Velocidade e tempo de viagem", "Número de pintores e dias de obra"], [0, 1, 2], "Velocidade × tempo e pintores × dias são inversamente proporcionais."),
  m("Sabendo que 5 canetas custam R$ 15, marque as corretas:", ["Cada caneta custa R$ 3", "10 canetas custam R$ 30", "2 canetas custam R$ 6", "1 caneta custa R$ 5", "20 canetas custam R$ 45"], [0, 1, 2], "1 caneta = R$ 3; 20 canetas = R$ 60."),
  o("Explique a diferença entre grandezas diretamente e inversamente proporcionais, com exemplos.", "Diretamente proporcionais crescem juntas na mesma razão: se compro o dobro de pães, pago o dobro. Inversamente proporcionais variam em sentidos opostos: se dobro o número de pedreiros, a obra leva metade do tempo. Na direta a razão é constante; na inversa, o produto.", [
    ["Direta: aumentam juntas", "juntas", "mesma razao", "dobro", "diretamente"],
    ["Inversa: uma sobe, a outra desce", "inversa", "oposto", "metade"],
    ["Exemplos", "exemplo", "pao", "pedreiro", "velocidade", "preco"],
  ]),
], "n");

extend(MATEMATICA, "Equações do 2º grau", [
  q("Quais são as raízes de x² − 4x = 0?", ["0 e 4", "2 e −2", "4 e −4", "0 e −4"], 0, "x(x − 4) = 0 → x = 0 ou x = 4."),
  q("Qual é o Δ de 2x² − 3x + 1 = 0?", ["1", "17", "−1", "9"], 0, "Δ = (−3)² − 4·2·1 = 9 − 8 = 1."),
  q("Resolva x² + 6x + 9 = 0.", ["x = −3", "x = 3", "x = ±3", "x = 9"], 0, "É o quadrado perfeito (x + 3)² = 0 → x = −3 (raiz dupla)."),
  q("O produto das raízes de x² − 7x + 12 = 0 é:", ["12", "7", "−12", "−7"], 0, "Produto = c/a = 12. (As raízes são 3 e 4.)"),
  q("Resolva 3x² − 27 = 0.", ["x = ±3", "x = 9", "x = ±9", "x = 3"], 0, "3x² = 27 → x² = 9 → x = 3 ou x = −3."),
  qe("Um terreno retangular tem 60 m² de área, e o comprimento é 4 m maior que a largura.", "Qual é a largura do terreno?", ["6 m", "10 m", "4 m", "15 m"], 0, "x(x + 4) = 60 → x² + 4x − 60 = 0 → x = 6 (a raiz −10 não serve). Comprimento: 10 m."),
  qe("O quadrado da idade de um jovem, menos o triplo dela, dá 180.", "Qual é a idade do jovem?", ["15 anos", "12 anos", "18 anos", "20 anos"], 0, "x² − 3x − 180 = 0 → Δ = 9 + 720 = 729 → x = (3 + 27)/2 = 15."),
  qe("Num campeonato, cada time joga uma vez contra cada outro. Ao todo, houve 45 jogos.", "Quantos times participaram?", ["10", "9", "15", "45"], 0, "n(n − 1)/2 = 45 → n² − n − 90 = 0 → n = 10."),
  qe("Uma moldura de largura x envolve uma foto de 10 × 10 cm; o conjunto tem 196 cm².", "Qual é a largura x da moldura?", ["2 cm", "4 cm", "1 cm", "3 cm"], 0, "(10 + 2x)² = 196 → 10 + 2x = 14 → x = 2 cm."),
  q("Se uma raiz de x² − 5x + k = 0 é 2, quanto vale k?", ["6", "10", "3", "−6"], 0, "Substituindo x = 2: 4 − 10 + k = 0 → k = 6."),
  m("Sobre x² − x − 6 = 0, marque as corretas:", ["As raízes são 3 e −2", "Δ = 25", "A soma das raízes é 1", "Não tem raízes reais", "O produto é 6"], [0, 1, 2], "Δ = 1 + 24 = 25 > 0; produto c/a = −6."),
  m("Marque as equações que têm raízes reais iguais (Δ = 0):", ["x² − 2x + 1 = 0", "x² + 4x + 4 = 0", "4x² − 4x + 1 = 0", "x² + 1 = 0", "x² − 5x + 6 = 0"], [0, 1, 2], "x² + 1 tem Δ < 0; x² − 5x + 6 tem Δ = 1."),
  o("Mostre como resolver x² − 5x + 6 = 0 por soma e produto.", "Procuro dois números cuja soma é −b/a = 5 e cujo produto é c/a = 6. Esses números são 2 e 3, pois 2 + 3 = 5 e 2 · 3 = 6. Então as raízes são x = 2 e x = 3.", [
    ["Soma = 5 (−b/a)", "soma", "−b/a", "-b/a"],
    ["Produto = 6 (c/a)", "produto", "c/a"],
    ["Raízes 2 e 3", "2 e 3", "3 e 2"],
  ]),
], "n");

extend(MATEMATICA, "Domínio, imagem e gráficos", [
  q("Qual é o domínio de f(x) = √(4 − x)?", ["x ≤ 4", "x ≥ 4", "x < 4", "ℝ"], 0, "O radicando não pode ser negativo: 4 − x ≥ 0 → x ≤ 4."),
  q("Qual é a imagem de f(x) = x² + 2?", ["y ≥ 2", "y ≥ 0", "ℝ", "y ≤ 2"], 0, "x² ≥ 0, logo x² + 2 ≥ 2."),
  q("Uma função é par quando:", ["f(−x) = f(x)", "f(−x) = −f(x)", "f(x) = 0", "f(x) = x"], 0, "Ex.: f(x) = x². O gráfico é simétrico em relação ao eixo y."),
  q("O gráfico de f(x) = |x| tem formato de:", ["V", "Parábola", "Reta horizontal", "Círculo"], 0, "|x| = x para x ≥ 0 e −x para x < 0: duas semirretas formando um V."),
  q("Uma função é injetora quando:", ["Valores de x diferentes dão y diferentes", "Todo y tem dois x", "É constante", "Corta o eixo x duas vezes"], 0, "Ex.: f(x) = 2x é injetora; f(x) = x² não é, pois f(2) = f(−2)."),
  qe("O gráfico mostra a temperatura de uma cidade ao longo de um dia: sobe das 6h às 14h e cai das 14h às 22h.", "Em que horário a temperatura foi máxima?", ["14h", "6h", "22h", "10h"], 0, "A função cresce até 14h e depois decresce: o máximo é às 14h."),
  qe("Um táxi cobra de acordo com o gráfico: R$ 5 de bandeirada e R$ 3 por km, para corridas de até 20 km.", "Qual é a imagem da função preço?", ["De R$ 5 a R$ 65", "De R$ 0 a R$ 20", "De R$ 3 a R$ 60", "Todos os reais"], 0, "Para 0 km: R$ 5; para 20 km: 5 + 60 = R$ 65. A imagem vai de 5 a 65."),
  qe("A altura h de um projétil, em metros, é dada por h(t) = 20t − 5t², para 0 ≤ t ≤ 4 s.", "Qual é o domínio que faz sentido físico?", ["[0, 4]", "ℝ", "t > 4", "t < 0"], 0, "O projétil está no ar de t = 0 até t = 4 s (quando h volta a zero)."),
  qe("Um gráfico de vendas mostra uma reta subindo de 100 unidades em janeiro para 400 em julho.", "Quantas unidades a mais por mês foram vendidas, em média?", ["50", "300", "57", "100"], 0, "Variação de 300 em 6 meses: 300/6 = 50 por mês (coeficiente angular)."),
  q("Se f(x) = 3x − 1, qual é f⁻¹(5)?", ["2", "14", "4/3", "−2"], 0, "f(x) = 5 → 3x − 1 = 5 → x = 2. Então f⁻¹(5) = 2."),
  m("Sobre f(x) = x² − 4, marque as corretas:", ["É par", "A imagem é y ≥ −4", "Raízes ±2", "É injetora", "É ímpar"], [0, 1, 2], "f(2) = f(−2): não é injetora; é par, não ímpar."),
  m("Marque as funções crescentes em todo o domínio:", ["f(x) = 2x + 1", "f(x) = 3ˣ", "f(x) = log x", "f(x) = −x", "f(x) = x²"], [0, 1, 2], "−x é decrescente; x² decresce para x < 0."),
], "n");

extend(MATEMATICA, "Exponencial e log na prática", [
  qe("A meia-vida do césio-137 é de cerca de 30 anos.", "Que fração de uma amostra resta após 90 anos?", ["1/8", "1/3", "1/4", "1/6"], 0, "90 anos = 3 meias-vidas: (1/2)³ = 1/8."),
  qe("O pH é definido por pH = −log [H⁺]. Um suco tem [H⁺] = 10⁻³ mol/L.", "Qual é o pH do suco?", ["3", "−3", "0,001", "7"], 0, "pH = −log 10⁻³ = 3: ácido."),
  qe("O som de 60 dB é uma conversa; 90 dB, um caminhão. A escala de decibéis é logarítmica: cada 10 dB a mais = intensidade 10 vezes maior.", "O som do caminhão é quantas vezes mais intenso que a conversa?", ["1.000", "30", "1,5", "300"], 0, "30 dB de diferença = 3 saltos de 10: 10 · 10 · 10 = 1.000 vezes."),
  qe("Um vídeo viral teve 1.000 visualizações no 1º dia, e o número triplicou a cada dia.", "Quantas visualizações no 5º dia?", ["81.000", "15.000", "243.000", "27.000"], 0, "1.000 · 3⁴ = 1.000 · 81 = 81.000 (do 1º ao 5º dia são 4 triplicações)."),
  qe("Um remédio é eliminado do corpo à taxa de 20% por hora.", "Que fração da dose resta após 2 horas?", ["64%", "60%", "40%", "80%"], 0, "Resta 80% a cada hora: 0,8 · 0,8 = 0,64 = 64%."),
  qe("Um empréstimo cresce a 2% ao mês. Use log 2 ≈ 0,30 e log 1,02 ≈ 0,0086.", "Em quanto tempo, aproximadamente, a dívida dobra?", ["35 meses", "50 meses", "24 meses", "12 meses"], 0, "1,02ⁿ = 2 → n = log 2 / log 1,02 ≈ 0,30/0,0086 ≈ 35 meses."),
  q("Por que a escala Richter é logarítmica?", ["Para comprimir números muito grandes", "Porque terremotos são pequenos", "Porque é mais fácil somar", "Para medir só tremores fracos"], 0, "As energias variam em ordens de grandeza enormes; o log transforma isso numa escala de 1 a 10."),
  q("Resolva 10ˣ = 0,01.", ["−2", "2", "−1", "0,2"], 0, "0,01 = 10⁻², então x = −2."),
  q("Se log x = 3, então x vale:", ["1.000", "30", "3", "300"], 0, "log x = 3 → x = 10³ = 1.000."),
  m("Marque fenômenos que seguem crescimento ou decaimento exponencial:", ["Juros compostos", "Decaimento radioativo", "Reprodução de bactérias sem limite", "Salário com aumento fixo de R$ 100 por ano", "Corrida a velocidade constante"], [0, 1, 2], "Aumento fixo e velocidade constante são lineares."),
  m("Marque as escalas logarítmicas:", ["pH", "Decibéis", "Escala Richter", "Celsius", "Metro"], [0, 1, 2], "Celsius e metro são escalas lineares."),
  o("Explique o que é meia-vida e calcule quanto resta de 80 g de uma substância após 3 meias-vidas.", "Meia-vida é o tempo para metade de uma substância radioativa (ou de um remédio) se transformar ou ser eliminada. Após cada meia-vida, a quantidade cai pela metade: 80 → 40 → 20 → 10 g. Após 3 meias-vidas restam 10 g.", [
    ["Tempo para cair pela metade", "metade"],
    ["Resultado 10 g", "10 g", "10g", "10 gramas"],
    ["Sequência de divisões por 2", "40", "20", "1/8", "dividir"],
  ]),
], "n");

extend(MATEMATICA, "Semelhança e relações no triângulo", [
  q("Dois triângulos semelhantes têm lados correspondentes 4 e 10. A razão de semelhança é:", ["2/5", "5/2", "6", "40"], 0, "4/10 = 2/5 (ou 5/2, no sentido inverso)."),
  q("Num triângulo retângulo, os catetos medem 6 e 8. A hipotenusa mede:", ["10", "14", "48", "100"], 0, "6² + 8² = 36 + 64 = 100 → 10."),
  q("O teorema de Tales trata de:", ["Retas paralelas cortadas por transversais", "Soma dos ângulos de um polígono", "Área do círculo", "Volume de pirâmides"], 0, "Paralelas cortadas por transversais determinam segmentos proporcionais."),
  q("Num triângulo retângulo, a altura relativa à hipotenusa divide-a em 4 e 9. A altura mede:", ["6", "13", "36", "5"], 0, "h² = m · n = 4 · 9 = 36 → h = 6."),
  q("Triângulos semelhantes com razão 3 têm perímetros na razão:", ["3", "9", "27", "1/3"], 0, "Perímetros (comprimentos) seguem a razão k = 3; áreas, k² = 9."),
  qe("Uma pessoa de 1,60 m projeta uma sombra de 2 m no mesmo instante em que uma árvore projeta 15 m.", "Qual é a altura da árvore?", ["12 m", "18,75 m", "9,4 m", "24 m"], 0, "h/15 = 1,6/2 → h = 15 · 0,8 = 12 m."),
  qe("Uma rampa de acesso sobe 0,6 m numa distância horizontal de 0,8 m (no início).", "Qual é o comprimento da rampa nesse trecho?", ["1,0 m", "1,4 m", "0,7 m", "1,2 m"], 0, "Pitágoras: √(0,36 + 0,64) = √1 = 1 m."),
  qe("Uma TV é anunciada como '50 polegadas', que é a medida da diagonal. A largura é 40 polegadas.", "Qual é a altura da tela?", ["30 polegadas", "10 polegadas", "20 polegadas", "45 polegadas"], 0, "50² − 40² = 2.500 − 1.600 = 900 → altura = 30."),
  qe("Numa maquete na escala 1:50, uma parede tem 6 cm de altura.", "Qual é a altura real da parede?", ["3 m", "30 m", "0,3 m", "300 m"], 0, "6 cm · 50 = 300 cm = 3 m."),
  q("Qual terna NÃO forma triângulo retângulo?", ["4, 5, 6", "3, 4, 5", "5, 12, 13", "8, 15, 17"], 0, "4² + 5² = 41 ≠ 36. As outras satisfazem a² + b² = c²."),
  m("Marque as ternas pitagóricas:", ["3, 4, 5", "6, 8, 10", "5, 12, 13", "2, 3, 4", "1, 1, 2"], [0, 1, 2], "2² + 3² = 13 ≠ 16; 1, 1, 2 nem forma triângulo."),
  m("Se dois triângulos são semelhantes com razão 2, marque as corretas:", ["Os ângulos são iguais", "Os lados estão na razão 2", "As áreas estão na razão 4", "As áreas estão na razão 2", "Os ângulos dobram"], [0, 1, 2], "Áreas na razão k² = 4; ângulos não mudam."),
], "n");

extend(MATEMATICA, "Prismas, cilindros e esferas", [
  q("O volume de um prisma é dado por:", ["Área da base × altura", "Área da base × altura / 3", "Perímetro × altura", "Lado × lado"], 0, "V = Ab · h. Dividir por 3 é para pirâmides e cones."),
  q("A área da superfície de uma esfera de raio r é:", ["4πr²", "πr²", "(4/3)πr³", "2πr"], 0, "Área = 4πr² (quatro círculos máximos)."),
  q("Um cilindro de raio 3 e altura 4 tem área lateral de:", ["24π", "36π", "12π", "48π"], 0, "Área lateral = 2πr · h = 2π · 3 · 4 = 24π."),
  q("Quantos litros cabem num cilindro de raio 1 m e altura 2 m (use π ≈ 3)?", ["6.000", "600", "60.000", "6"], 0, "V = 3 · 1² · 2 = 6 m³ = 6.000 L."),
  q("Dobrando o raio de uma esfera, seu volume fica:", ["8 vezes maior", "2 vezes maior", "4 vezes maior", "Igual"], 0, "V ∝ r³: (2r)³ = 8r³."),
  qe("Uma lata de refrigerante tem forma de cilindro com raio 3 cm e altura 12 cm. Use π ≈ 3,14.", "Qual é o volume aproximado da lata?", ["339 mL", "113 mL", "452 mL", "226 mL"], 0, "V = 3,14 · 9 · 12 ≈ 339 cm³ = 339 mL."),
  qe("Uma piscina tem a forma de um paralelepípedo de 8 m × 4 m × 1,5 m.", "Quantos litros de água ela comporta cheia?", ["48.000 L", "4.800 L", "13.500 L", "480 L"], 0, "V = 8 · 4 · 1,5 = 48 m³ = 48.000 L."),
  qe("Uma bola de basquete tem raio de 12 cm. Use π ≈ 3.", "Qual é o volume aproximado da bola?", ["6.912 cm³", "1.728 cm³", "576 cm³", "20.736 cm³"], 0, "V = (4/3) · 3 · 12³ = 4 · 1.728 = 6.912 cm³."),
  qe("Uma embalagem tem forma de prisma de base triangular: a base é um triângulo de base 6 cm e altura 4 cm; a embalagem tem 10 cm de comprimento.", "Qual é o volume da embalagem?", ["120 cm³", "240 cm³", "60 cm³", "200 cm³"], 0, "Área da base = 6 · 4/2 = 12 cm². V = 12 · 10 = 120 cm³."),
  q("O volume de um cone de raio 3 e altura 4 é:", ["12π", "36π", "48π", "4π"], 0, "V = (1/3) · π · 9 · 4 = 12π."),
  m("Marque as fórmulas de volume corretas:", ["Cubo: a³", "Cilindro: πr²h", "Esfera: (4/3)πr³", "Cone: πr²h", "Pirâmide: Ab·h"], [0, 1, 2], "Cone e pirâmide: (1/3) da base vezes a altura."),
  m("Uma caixa tem 2 m × 3 m × 4 m. Marque as corretas:", ["Volume = 24 m³", "Comporta 24.000 L", "Tem 6 faces", "Volume = 9 m³", "Tem 8 arestas"], [0, 1, 2], "V = 2·3·4 = 24; tem 12 arestas."),
], "n");

extend(MATEMATICA, "Ciclo trigonométrico", [
  q("Quanto vale sen 270°?", ["−1", "1", "0", "1/2"], 0, "270° corresponde ao ponto (0, −1): o seno é a coordenada y, −1."),
  q("Quanto vale cos 90°?", ["0", "1", "−1", "1/2"], 0, "90° é o ponto (0, 1): o cosseno (x) é 0."),
  q("Qual é o arco côngruo a 390°?", ["30°", "90°", "300°", "60°"], 0, "390° − 360° = 30°: dão a mesma posição no ciclo."),
  q("π/3 rad equivale a:", ["60°", "30°", "45°", "120°"], 0, "π rad = 180°; π/3 = 180/3 = 60°."),
  q("No 3º quadrante, seno e cosseno são:", ["Ambos negativos", "Ambos positivos", "Seno +, cosseno −", "Seno −, cosseno +"], 0, "No 3º quadrante, x < 0 e y < 0."),
  q("Quanto vale cos 120°?", ["−1/2", "1/2", "−√3/2", "√3/2"], 0, "120° = 180° − 60°: no 2º quadrante o cosseno é negativo: −cos 60° = −1/2."),
  qe("A altura de uma cadeira de roda-gigante é h(t) = 10 + 8 sen(t), em metros.", "Qual é a altura máxima da cadeira?", ["18 m", "10 m", "8 m", "2 m"], 0, "O seno vai de −1 a 1. Máximo: 10 + 8 = 18 m; mínimo: 10 − 8 = 2 m."),
  qe("A maré de um porto segue h(t) = 3 + 2 cos(πt/6), em metros, com t em horas.", "Qual é a altura mínima da maré?", ["1 m", "3 m", "5 m", "−1 m"], 0, "O cosseno mínimo é −1: 3 − 2 = 1 m."),
  qe("Um ponteiro de relógio gira 360° em 60 minutos.", "Quantos graus ele gira em 20 minutos?", ["120°", "60°", "20°", "180°"], 0, "360 · 20/60 = 120° (equivale a 2π/3 rad)."),
  qe("Uma função periódica descreve a temperatura média de uma cidade ao longo do ano e se repete a cada 12 meses.", "Qual é o período dessa função?", ["12 meses", "6 meses", "1 mês", "24 meses"], 0, "Período é o intervalo após o qual a função se repete."),
  q("Quanto vale tg 135°?", ["−1", "1", "0", "√3"], 0, "135° = 180° − 45°: no 2º quadrante, tg negativa: −tg 45° = −1."),
  m("Marque os valores corretos no ciclo trigonométrico:", ["sen 0° = 0", "cos 0° = 1", "sen 180° = 0", "cos 180° = 1", "sen 90° = 0"], [0, 1, 2], "cos 180° = −1; sen 90° = 1."),
  m("Marque as conversões corretas:", ["90° = π/2 rad", "45° = π/4 rad", "360° = 2π rad", "60° = π/6 rad", "120° = π/3 rad"], [0, 1, 2], "60° = π/3; 120° = 2π/3."),
], "n");

extend(MATEMATICA, "Lei dos senos e dos cossenos", [
  q("Num triângulo, a = 7, b = 5, c = 3. O maior ângulo é oposto ao lado:", ["a", "b", "c", "Nenhum"], 0, "O maior ângulo fica oposto ao maior lado: a = 7."),
  q("Num triângulo, A = 30°, B = 45° e a = 4. Pela lei dos senos, b vale:", ["4√2", "2√2", "8", "4"], 0, "a/sen A = b/sen B → 4/(1/2) = b/(√2/2) → b = 8 · √2/2 = 4√2."),
  q("Para um triângulo com lados 3, 5 e 7, o ângulo oposto ao lado 7 é:", ["120°", "60°", "90°", "150°"], 0, "49 = 9 + 25 − 30 cos C → 15 = −30 cos C → cos C = −1/2 → C = 120°."),
  q("A lei dos senos relaciona cada lado com:", ["O seno do ângulo oposto", "O seno do ângulo vizinho", "O cosseno do ângulo oposto", "A área do triângulo"], 0, "a/sen A = b/sen B = c/sen C."),
  q("Se num triângulo a² > b² + c², o ângulo A é:", ["Obtuso", "Agudo", "Reto", "Nulo"], 0, "Pela lei dos cossenos, cos A < 0, então A > 90°."),
  qe("Dois navios saem de um porto: um navega 6 km para o leste e outro 10 km numa direção que forma 60° com a do primeiro.", "Qual é a distância entre os navios?", ["√76 km", "16 km", "8 km", "4 km"], 0, "d² = 36 + 100 − 2·6·10·(1/2) = 136 − 60 = 76 → d = √76 ≈ 8,7 km."),
  qe("Um terreno triangular tem dois lados de 8 m e 5 m formando um ângulo de 60°.", "Quanto mede o terceiro lado?", ["7 m", "13 m", "√39 m", "9 m"], 0, "x² = 64 + 25 − 2·8·5·0,5 = 89 − 40 = 49 → x = 7 m."),
  qe("Para medir a largura de um rio, um topógrafo mede dois ângulos e a distância entre dois pontos da mesma margem.", "Qual lei permite calcular a largura com dois ângulos e um lado?", ["Lei dos senos", "Lei dos cossenos", "Teorema de Tales", "Relação de Euler"], 0, "Dois ângulos e um lado (ALA): a lei dos senos resolve."),
  qe("Um triângulo tem lados 5 e 8 e o ângulo entre eles mede 90°.", "A lei dos cossenos, nesse caso, vira:", ["O teorema de Pitágoras", "A lei dos senos", "A fórmula de Bhaskara", "A relação de Euler"], 0, "cos 90° = 0: c² = a² + b², o teorema de Pitágoras."),
  q("A área de um triângulo com lados a e b e ângulo C entre eles é:", ["(a·b·sen C)/2", "a·b·cos C", "(a + b)·C", "a·b/2·tg C"], 0, "Altura relativa a a é b·sen C; área = a·b·sen C/2."),
  m("Marque quando usar a lei dos cossenos:", ["Três lados conhecidos", "Dois lados e o ângulo entre eles", "Descobrir se um ângulo é obtuso", "Dois ângulos e um lado", "Só triângulos retângulos"], [0, 1, 2], "Dois ângulos e um lado: lei dos senos. A lei dos cossenos vale para qualquer triângulo."),
  m("Num triângulo com lados 3, 4 e 5, marque as corretas:", ["É retângulo", "O maior ângulo mede 90°", "A área é 6", "É obtusângulo", "A área é 12"], [0, 1, 2], "3² + 4² = 5²; área = 3·4/2 = 6."),
], "n");

extend(MATEMATICA, "Probabilidade no dia a dia", [
  q("A chance de acertar a Mega-Sena com uma aposta simples é de 1 em cerca de 50 milhões. Isso é uma probabilidade:", ["Baixíssima", "De 50%", "Alta", "Igual à de cara ou coroa"], 0, "1/50.000.000 = 0,000002%."),
  q("Se a previsão diz 80% de chance de chuva, a chance de não chover é:", ["20%", "80%", "8%", "0%"], 0, "Complementar: 100% − 80% = 20%."),
  q("Lançando duas moedas, a probabilidade de sair uma cara e uma coroa é:", ["1/2", "1/4", "1/3", "3/4"], 0, "Casos: KK, KC, CK, CC. Favoráveis: KC e CK → 2/4 = 1/2."),
  q("Numa sala com 10 meninos e 15 meninas, sorteia-se uma pessoa. A chance de ser menina é:", ["60%", "15%", "50%", "40%"], 0, "15/25 = 0,6 = 60%."),
  q("Eventos independentes são aqueles em que:", ["Um não altera a chance do outro", "Um sempre causa o outro", "Nunca acontecem juntos", "Têm a mesma probabilidade"], 0, "Ex.: lançar uma moeda duas vezes."),
  qe("Um exame detecta uma doença em 95% dos doentes. Numa cidade, 100 pessoas doentes fazem o exame.", "Quantas, em média, terão resultado positivo?", ["95", "100", "5", "50"], 0, "95% de 100 = 95. As outras 5 teriam falso negativo."),
  qe("Numa rifa, foram vendidos 200 números e Ana comprou 8.", "Qual é a chance de Ana ganhar?", ["4%", "8%", "2,5%", "25%"], 0, "8/200 = 0,04 = 4%."),
  qe("Uma pesquisa mostrou que 30% dos clientes de uma loja compram pelo app. Escolhem-se 2 clientes ao acaso, de forma independente.", "Qual a probabilidade de os dois comprarem pelo app?", ["9%", "60%", "30%", "15%"], 0, "0,3 · 0,3 = 0,09 = 9%."),
  qe("Um jogador acerta 70% dos pênaltis. Ele cobra um pênalti.", "Qual é a chance de ele errar?", ["30%", "70%", "7%", "0%"], 0, "Complementar: 100% − 70% = 30%."),
  qe("Num jogo de dados, ganha quem tirar soma 12 com dois dados.", "Qual é a chance de ganhar numa jogada?", ["1/36", "1/12", "1/6", "2/36"], 0, "Só (6, 6) dá 12: 1 caso em 36."),
  q("A probabilidade de um evento impossível é:", ["0", "1", "0,5", "−1"], 0, "Impossível = 0; certo = 1. Toda probabilidade fica entre 0 e 1."),
  m("Marque as afirmações corretas sobre probabilidade:", ["Varia de 0 a 1", "Evento certo tem probabilidade 1", "P(A) + P(não A) = 1", "Pode passar de 100%", "Evento impossível tem probabilidade 1"], [0, 1, 2], "Nunca passa de 100%; impossível tem 0."),
  m("Ao tirar uma carta de um baralho comum de 52 cartas, marque as probabilidades corretas:", ["Ás: 1/13", "Carta vermelha: 1/2", "Rei de copas: 1/52", "Figura (J, Q, K): 1/4", "Carta de espadas: 1/13"], [0, 1, 2], "Figuras: 12/52 = 3/13; espadas: 13/52 = 1/4."),
  o("Explique por que jogar na loteria toda semana não garante ganhar, usando a ideia de eventos independentes.", "Cada sorteio é independente: o resultado anterior não muda as chances do próximo. Se a chance de ganhar é 1 em 50 milhões, ela continua igual toda semana. Jogar mais vezes aumenta um pouco a chance total, mas ela segue muito pequena.", [
    ["Sorteios independentes", "independ"],
    ["A chance não muda a cada sorteio", "nao muda", "continua", "mesma chance", "igual"],
    ["Chance continua muito pequena", "pequena", "baixa", "milhoes"],
  ]),
], "n");

extend(MATEMATICA, "Gráficos e medidas de dispersão", [
  q("Variância e desvio padrão medem:", ["A dispersão dos dados", "O valor mais frequente", "O valor central", "O total dos dados"], 0, "Indicam o quanto os dados se espalham em torno da média."),
  q("Se todos os valores de um conjunto são iguais, o desvio padrão é:", ["0", "1", "Igual à média", "Infinito"], 0, "Não há variação: desvio padrão zero."),
  q("O desvio padrão é a raiz quadrada da:", ["Variância", "Média", "Mediana", "Amplitude"], 0, "DP = √variância, na mesma unidade dos dados."),
  q("Para mostrar como a renda se distribui por faixas, usa-se principalmente:", ["Histograma", "Gráfico de setores", "Pictograma", "Mapa"], 0, "O histograma mostra a frequência em intervalos (faixas) contínuos."),
  q("A variância de 2, 4 e 6 é:", ["8/3", "4", "2", "16"], 0, "Média 4; desvios −2, 0, 2; quadrados 4, 0, 4; variância = 8/3 ≈ 2,67 (populacional)."),
  qe("Duas turmas tiveram média 7 numa prova. Na turma A as notas foram todas entre 6 e 8; na B, de 2 a 10.", "O que se pode afirmar?", ["A turma B tem maior desvio padrão", "As turmas têm a mesma dispersão", "A turma A tem maior desvio padrão", "As medianas são iguais"], 0, "Mesma média, mas as notas da B se espalham mais: maior dispersão."),
  qe("Um gráfico de linha mostra que o desemprego caiu de 12% para 8% em 4 anos.", "Qual foi a queda média, em pontos percentuais por ano?", ["1 ponto", "4 pontos", "3 pontos", "2 pontos"], 0, "Queda de 4 pontos em 4 anos: 1 ponto por ano."),
  qe("Um gráfico de barras tem o eixo vertical começando em 90, não em 0, e mostra vendas de 95 e 100.", "Por que esse gráfico pode enganar?", ["Exagera a diferença entre as barras", "Esconde o total de vendas", "Usa cores erradas", "Não tem título"], 0, "A barra de 100 parece o dobro da de 95, mas a diferença real é só 5%."),
  qe("Numa fábrica, o peso de pacotes de arroz deve ser 1 kg com pouca variação.", "Para controlar a qualidade, a medida mais importante é:", ["O desvio padrão do peso", "Só a média do peso", "A moda das cores", "O total de pacotes"], 0, "Média certa não basta: é preciso pouca variação (desvio padrão baixo)."),
  qe("Uma pesquisa mostra que 45% preferem o candidato A, com margem de erro de 3 pontos.", "O apoio real ao candidato A provavelmente está entre:", ["42% e 48%", "45% e 48%", "40% e 50%", "3% e 45%"], 0, "45 ± 3: de 42% a 48%."),
  q("Coeficiente de variação compara dispersões porque é:", ["O desvio padrão dividido pela média", "A soma dos desvios", "O dobro da média", "A diferença entre moda e mediana"], 0, "CV = DP/média: medida relativa, sem unidade."),
  m("Marque as medidas de dispersão:", ["Desvio padrão", "Variância", "Amplitude", "Média", "Moda"], [0, 1, 2], "Média e moda são medidas de tendência central."),
  m("Marque as escolhas de gráfico adequadas:", ["Evolução no tempo: linha", "Partes de um todo: setores", "Comparar categorias: barras", "Partes de um todo: linha", "Evolução no tempo: setores"], [0, 1, 2], "Linha para tempo, setores para partes do todo."),
  o("Por que duas turmas com a mesma média podem ter desempenhos bem diferentes? Use o conceito de desvio padrão.", "A média só mostra o centro dos dados. O desvio padrão mostra o quanto as notas se espalham. Uma turma com notas todas perto de 7 tem desvio baixo e desempenho homogêneo; outra com notas de 2 a 10 tem desvio alto: alguns alunos vão muito bem e outros muito mal.", [
    ["A média mostra só o centro", "centro", "media so", "media nao"],
    ["Desvio padrão mede o espalhamento", "desvio", "espalh", "dispers"],
    ["Exemplo de turma homogênea vs. heterogênea", "homogen", "perto", "2 a 10", "exemplo"],
  ]),
], "n");
