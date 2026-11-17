import { MATEMATICA as M } from "./exatas";
import { c, f, pack, q } from "./pack";

pack(M, "financeira", 1, 1, "Porcentagem", [
  q("Um produto de R$ 80 tem desconto de 25%. Quanto passa a custar?", ["R$ 55", "R$ 60", "R$ 64", "R$ 20"], 1, "25% de 80 = 20, então 80 − 20 = R$ 60. Atalho: pagar 75% → 80 · 0,75 = 60. R$ 20 é o valor do desconto, não o preço final."),
  q("30 é quantos por cento de 120?", ["20%", "25%", "30%", "40%"], 1, "Parte/todo: 30/120 = 1/4 = 0,25 = 25%. Inverter (120/30 = 4) não dá porcentagem."),
  q("Uma conta de R$ 50 com 10% de serviço fica em:", ["R$ 51", "R$ 55", "R$ 60", "R$ 50,10"], 1, "10% de 50 = 5, então 50 + 5 = R$ 55. Atalho: 50 · 1,10. Somar só \"10 centavos\" (R$ 50,10) é confundir 10% com R$ 0,10."),
  q("Um salário subiu de R$ 2.000 para R$ 2.300. O aumento foi de:", ["3%", "13%", "15%", "30%"], 2, "Aumento de 300 sobre o valor INICIAL: 300/2.000 = 0,15 = 15%. Dividir pelo valor final (300/2.300 ≈ 13%) é o erro clássico."),
  q("Depois de um desconto de 20%, uma blusa custa R$ 96. Qual era o preço original?", ["R$ 115,20", "R$ 116", "R$ 120", "R$ 76,80"], 2, "Com 20% de desconto paga-se 80%: P · 0,8 = 96 → P = 120. Somar 20% de volta (R$ 115,20) erra porque o desconto foi sobre o preço original, não sobre 96."),
  q("Numa turma de 40 alunos, 35% são meninos. Quantas meninas há?", ["14", "24", "26", "35"], 2, "Meninas = 100% − 35% = 65%. 65% de 40 = 26. Pegadinha: 14 é o número de meninos."),
  f("Como calcular 15% de um valor de cabeça?", "10% (anda a vírgula uma casa) + metade disso (5%). Ex.: 15% de 80 = 8 + 4 = 12."),
  f("Diferença entre pontos percentuais e porcentagem", "Juros de 10% para 12% subiram 2 pontos percentuais, mas 20% em termos relativos (2/10)."),
  c(["Porcentagem é uma fração de denominador 100.", "x% de um valor = valor × x/100.", "Aumento de x%: multiplique por (1 + x/100).", "Desconto de x%: multiplique por (1 − x/100)."], "Pense em fator: +12% = ×1,12; −30% = ×0,7."),
]);

pack(M, "financeira", 3, 3, "Juros, inflação e parcelas", [
  q("R$ 1.000 a juros simples de 2% ao mês por 6 meses geram montante de:", ["R$ 1.012", "R$ 1.120", "R$ 1.200", "R$ 1.126,16"], 1, "Juros simples: J = 1.000 · 0,02 · 6 = 120. Montante = capital + juros = R$ 1.120. R$ 1.126,16 seria com juros compostos."),
  q("Qual é a principal diferença entre juros simples e compostos?", ["Compostos são sempre menores", "No composto o juro de cada período entra no cálculo do próximo", "Simples só existem em bancos", "Não há diferença após 1 ano"], 1, "No simples, o juro é sempre sobre o capital inicial (cresce em linha reta). No composto, o juro de cada período soma ao capital: juro sobre juro, crescimento exponencial."),
  q("Inflação de 5% num ano significa que, em média:", ["Os salários subiram 5%", "Os preços subiram 5%", "O dinheiro rendeu 5%", "O PIB cresceu 5%"], 1, "Inflação é a alta geral dos preços. Com 5%, o que custava R$ 100 passa a custar R$ 105: o mesmo dinheiro compra menos."),
  q("Um investimento rendeu 10% num ano com inflação de 10%. O ganho real foi:", ["10%", "20%", "0%", "5%"], 2, "O dinheiro cresceu 10%, mas os preços também: o poder de compra ficou igual. Ganho real = 0%."),
  q("À vista R$ 900 ou 2 × R$ 500 (a primeira no ato). Os juros cobrados sobre o valor financiado são:", ["11,1%", "25%", "10%", "50%"], 1, "Pagando R$ 500 na hora, você fica devendo 900 − 500 = R$ 400 e paga R$ 500 depois: juros de R$ 100 sobre R$ 400 = 25%. Não é 100/900!"),
  q("Um capital dobra em quanto tempo a juros compostos de 10% ao ano (aproximadamente)?", ["5 anos", "7 anos", "10 anos", "20 anos"], 1, "Regra do 72: 72 ÷ taxa = 72/10 ≈ 7 anos. Confira: 1,1⁷ ≈ 1,95. Com juros simples levaria 10 anos."),
  f("Fórmula do montante a juros compostos", "M = C·(1 + i)ᵗ", "C = capital, i = taxa na forma decimal, t = número de períodos."),
  f("Regra do 72", "Tempo para dobrar ≈ 72 ÷ taxa (%). A 6% ao ano, ≈ 12 anos."),
  c(["Parcelar \"sem juros\" muitas vezes embute juros no preço.", "Compare sempre com o preço à vista.", "Desconto à vista = juros do parcelado.", "Calcule a taxa sobre o valor que fica devendo."], "Desconto de 10% à vista em 2 vezes = juros bem maiores que 10% ao mês."),
]);

pack(M, "algebra", 1, 1, "Razão, proporção e regra de três", [
  q("Se 3 cadernos custam R$ 24, quanto custam 5?", ["R$ 30", "R$ 35", "R$ 40", "R$ 45"], 2, "Grandezas diretamente proporcionais: cada caderno custa 24/3 = R$ 8; 5 cadernos = 5 · 8 = R$ 40."),
  q("4 pedreiros fazem um muro em 6 dias. Quantos dias 8 pedreiros levam (mesmo ritmo)?", ["3", "4", "12", "2"], 0, "Inversamente proporcional: mais pedreiros, menos dias. Dobrou a equipe → metade do tempo: 3 dias. Regra de três direta daria 12, errado."),
  q("Num mapa de escala 1:100.000, 3 cm representam:", ["300 m", "3 km", "30 km", "300 km"], 1, "1 cm = 100.000 cm = 1 km. Então 3 cm = 3 km. Conversão: 100.000 cm ÷ 100 = 1.000 m = 1 km."),
  q("A razão entre meninos e meninas é 2:3 numa turma de 30. Quantos meninos?", ["10", "12", "18", "20"], 1, "2 + 3 = 5 partes; 30/5 = 6 alunos por parte. Meninos = 2 · 6 = 12; meninas = 18."),
  q("Um carro faz 12 km por litro. Quantos litros para 300 km?", ["20", "24", "25", "36"], 2, "Litros = distância/consumo = 300/12 = 25 L. Multiplicar não faz sentido: quanto mais km por litro, MENOS litros."),
  q("Se x/4 = 15/20, então x vale:", ["3", "5", "12", "75"], 0, "Produto cruzado: 20x = 4 · 15 = 60 → x = 3. Ou simplifique: 15/20 = 3/4, logo x = 3."),
  f("Como saber se a regra de três é inversa?", "Quando uma grandeza aumenta e a outra diminui (mais operários → menos dias). Aí inverta uma das razões."),
  f("Propriedade fundamental da proporção", "a/b = c/d ⇔ a·d = b·c (produto dos meios = produto dos extremos)."),
  c(["Regra de três: monte a tabela com as grandezas.", "Setas no mesmo sentido: direta.", "Setas opostas: inversa, inverta uma fração.", "Multiplique cruzado e isole x."], "Pergunte: se uma dobra, a outra dobra ou cai pela metade?"),
]);

pack(M, "algebra", 1, 1, "Equações do 2º grau", [
  q("Quais são as raízes de x² − x − 12 = 0?", ["3 e −4", "4 e −3", "−4 e −3", "6 e −2"], 1, "Soma = −b/a = 1 e produto = c/a = −12: os números são 4 e −3. Confira: 4² − 4 − 12 = 0. 3 e −4 somam −1."),
  q("Quanto vale o discriminante Δ de x² + 4x + 4 = 0?", ["0", "4", "8", "32"], 0, "Δ = b² − 4ac = 4² − 4·1·4 = 16 − 16 = 0 → uma raiz real dupla, x = −2. É o quadrado perfeito (x + 2)²."),
  q("Para que valor de k a equação x² + 6x + k = 0 tem duas raízes reais iguais?", ["k = 6", "k = 9", "k = 36", "k = 3"], 2, "Raízes iguais ⇔ Δ = 0: 6² − 4·1·k = 0 → 36 = 4k → k = 9. Aí x² + 6x + 9 = (x + 3)²."),
  q("Resolva x² − 16 = 0.", ["x = 4", "x = ±4", "x = ±8", "x = 16"], 1, "x² = 16 → x = 4 ou x = −4, pois (−4)² também dá 16. Esquecer o negativo é o erro mais comum."),
  q("Resolva x² − 7x = 0.", ["x = 7", "x = 0 ou x = 7", "x = ±7", "x = 0 ou x = −7"], 1, "Coloque x em evidência: x(x − 7) = 0. Produto zero → x = 0 ou x = 7. Dividir tudo por x \"perde\" a raiz 0."),
  q("A soma das raízes de 2x² − 8x + 3 = 0 é:", ["−4", "4", "3/2", "8"], 1, "Soma das raízes = −b/a = −(−8)/2 = 4. Não precisa achar as raízes! Produto seria c/a = 3/2."),
  f("Fórmula de Bhaskara", "x = (−b ± √Δ) / 2a, com Δ = b² − 4ac"),
  f("Soma e produto das raízes", "Soma = −b/a; Produto = c/a. Com a = 1, procure dois números que somem −b e multipliquem c."),
  c(["Equação incompleta sem c: coloque x em evidência.", "Sem b: isole x² e tire a raiz (±).", "Completa: tente soma e produto primeiro.", "Se não sair de cabeça, Bhaskara."], "Δ > 0: duas raízes; Δ = 0: uma; Δ < 0: nenhuma real."),
]);

pack(M, "funcoes", 1, 2, "Domínio, imagem e gráficos", [
  q("Qual é o domínio de f(x) = 1/(x − 3)?", ["ℝ", "ℝ − {3}", "ℝ − {0}", "x > 3"], 1, "O denominador não pode ser zero: x − 3 ≠ 0 → x ≠ 3. Domínio: todos os reais menos o 3."),
  q("Qual é o domínio de f(x) = √(x − 2)?", ["x ≥ 2", "x > 2", "x ≤ 2", "ℝ"], 0, "Nos reais, raiz quadrada exige radicando ≥ 0: x − 2 ≥ 0 → x ≥ 2. O 2 entra, porque √0 = 0 existe."),
  q("Se f(x) = x² e o domínio é {−2, 0, 3}, a imagem é:", ["{−4, 0, 9}", "{0, 4, 9}", "{4, 9}", "{−2, 0, 3}"], 1, "Calcule cada valor: f(−2) = 4, f(0) = 0, f(3) = 9. Imagem = {0, 4, 9}. O quadrado nunca dá negativo, por isso não há −4."),
  q("Um gráfico representa uma função se:", ["Toda reta horizontal o corta uma vez", "Toda reta vertical o corta no máximo uma vez", "Passa pela origem", "É uma reta"], 1, "Teste da reta vertical: cada x pode ter no máximo um y. Se alguma reta vertical corta o gráfico duas vezes, não é função (ex.: uma circunferência)."),
  q("Se f(x) = 2x + 1 e g(x) = x², quanto vale f(g(3))?", ["19", "49", "10", "7"], 0, "De dentro para fora: g(3) = 9; depois f(9) = 2·9 + 1 = 19. Fazer na ordem errada, g(f(3)) = 7² = 49."),
  q("A função inversa de f(x) = 2x + 6 é:", ["f⁻¹(x) = (x − 6)/2", "f⁻¹(x) = 2x − 6", "f⁻¹(x) = x/2 + 6", "f⁻¹(x) = 1/(2x + 6)"], 0, "Escreva y = 2x + 6, troque x e y (x = 2y + 6) e isole y: y = (x − 6)/2. A inversa \"desfaz\": soma 6 vira subtrai 6; dobra vira divide por 2."),
  f("Domínio x Imagem", "Domínio: valores de x que podem entrar. Imagem: valores de y que realmente saem."),
  f("O que é função crescente?", "Quando x aumenta, f(x) aumenta. Na afim, acontece quando a > 0."),
  c(["Função liga cada x a um único y.", "Domínio: onde a fórmula faz sentido.", "Fique de olho em divisão por zero e raiz de negativo.", "Composta: f(g(x)) — calcule de dentro para fora."], "Inversa: troca x com y e isola de novo."),
]);

pack(M, "funcoes", 1, 4, "Exponencial e log na prática", [
  q("Uma bactéria dobra a cada hora. Começando com 100, quantas haverá após 5 horas?", ["500", "1.000", "3.200", "10.000"], 2, "Dobrar 5 vezes: 100 · 2⁵ = 100 · 32 = 3.200. Somar 100 por hora (500) seria crescimento linear."),
  q("Um remédio perde metade da concentração a cada 6 h. Após 18 h, resta:", ["1/3", "1/6", "1/8", "1/2"], 2, "18 h = 3 meias-vidas: 1 → 1/2 → 1/4 → 1/8. Ou (1/2)³ = 1/8. Dividir 18 por 6 e fazer 1/3 é o engano comum."),
  q("Sabendo que log 2 ≈ 0,3, quanto vale log 8?", ["0,6", "0,9", "2,4", "1,2"], 1, "8 = 2³, então log 8 = 3 · log 2 ≈ 3 · 0,3 = 0,9. Propriedade: log aⁿ = n · log a."),
  q("Quanto vale log₂ 8 + log₂ 4?", ["log₂ 12", "5", "6", "32"], 1, "log₂ 8 = 3 e log₂ 4 = 2: soma 5. Ou pela propriedade: log₂ (8·4) = log₂ 32 = 5. Somar os números de dentro (log₂ 12) está errado."),
  q("Qual é o valor de log₅ 1?", ["0", "1", "5", "Não existe"], 0, "log₅ 1 pergunta \"5 elevado a quanto dá 1?\". Todo número (≠ 0) elevado a 0 dá 1: log de 1 em qualquer base é 0."),
  q("O gráfico de f(x) = 2ˣ:", ["Corta o eixo x em 1", "Passa por (0, 1) e nunca toca o eixo x", "É uma reta", "Passa pela origem"], 1, "2⁰ = 1, então passa por (0, 1). E 2ˣ é sempre positivo: o gráfico chega perto do eixo x à esquerda, mas nunca toca."),
  f("Propriedades do log", "log(a·b) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n·log a."),
  f("Meia-vida", "Tempo para uma quantidade cair pela metade. Após n meias-vidas, resta (1/2)ⁿ do inicial."),
  c(["Crescimento exponencial: multiplica por um fator fixo a cada período.", "Ex.: dobra a cada hora → ×2, ×2, ×2…", "Log responde: \"quantos períodos até chegar lá?\"", "Escala Richter e pH são logarítmicas."], "Exponencial cresce devagar no começo e explode depois."),
]);

pack(M, "geometria", 1, 4, "Semelhança e relações no triângulo", [
  q("Um poste projeta sombra de 6 m no mesmo instante em que uma pessoa de 1,8 m projeta sombra de 1,2 m. Qual a altura do poste?", ["4 m", "7,2 m", "9 m", "10,8 m"], 2, "Os raios de sol são paralelos: triângulos semelhantes. h/6 = 1,8/1,2 = 1,5 → h = 9 m."),
  q("Triângulos semelhantes com razão 2 têm áreas na razão:", ["2", "4", "8", "√2"], 1, "Comprimentos na razão k → áreas na razão k² e volumes na razão k³. Com k = 2, as áreas ficam 4 vezes maiores."),
  q("Qual é a soma dos ângulos internos de um hexágono?", ["360°", "540°", "720°", "1.080°"], 1, "Soma = (n − 2)·180° = (6 − 2)·180° = 720°. O hexágono pode ser dividido em 4 triângulos a partir de um vértice."),
  q("Num triângulo equilátero de lado 6, a altura mede:", ["3", "3√3", "6√3", "√3"], 1, "h = l√3/2 = 6√3/2 = 3√3 ≈ 5,2. Vem de Pitágoras: h² = 6² − 3²."),
  q("A diagonal de um quadrado de lado 5 mede:", ["5", "5√2", "10", "25"], 1, "d = l√2 = 5√2 ≈ 7,07, por Pitágoras: d² = 5² + 5² = 50. Somar os lados (10) daria um caminho maior que a diagonal."),
  q("Em um triângulo retângulo, a hipotenusa é sempre:", ["O menor lado", "O lado oposto ao ângulo reto", "Igual à soma dos catetos", "Perpendicular a um cateto"], 1, "A hipotenusa é o lado oposto ao ângulo reto e o maior lado do triângulo retângulo. Os outros dois lados são os catetos."),
  f("Casos de semelhança de triângulos", "AA (dois ângulos iguais), LAL (dois lados proporcionais e ângulo entre eles igual), LLL (três lados proporcionais)."),
  f("Teorema de Tales", "Retas paralelas cortadas por transversais determinam segmentos proporcionais."),
  c(["Triângulos semelhantes têm mesmo formato, tamanhos diferentes.", "Lados correspondentes são proporcionais.", "Medir altura de prédio pela sombra é semelhança.", "Razão k nos lados → k² nas áreas."], "Ache os ângulos iguais e monte a proporção."),
]);

pack(M, "geometria", 2, 3, "Prismas, cilindros e esferas", [
  q("Qual é o volume de um cilindro de raio 3 cm e altura 10 cm?", ["30π cm³", "60π cm³", "90π cm³", "900π cm³"], 2, "V = π·r²·h = π·3²·10 = 90π cm³ (≈ 283 cm³). Esquecer de elevar o raio ao quadrado dá 30π."),
  q("Quantos litros cabem numa caixa de 1 m × 1 m × 1 m?", ["10", "100", "1.000", "10.000"], 2, "1 m³ = 1.000 dm³ e 1 dm³ = 1 L. Logo, 1 m³ = 1.000 litros. Uma caixa-d'água de 1.000 L tem 1 m³."),
  q("Qual é o volume de um cubo de aresta 4?", ["16", "48", "64", "96"], 2, "V = a³ = 4·4·4 = 64. 16 é a área de uma face (a²) e 96 é a área total (6a²)."),
  q("Comparado a um cilindro de mesma base e altura, o volume de um cone é:", ["Igual", "Metade", "Um terço", "Dobro"], 2, "V_cone = (1/3)·π·r²·h: cabe exatamente um terço do cilindro. Três cones de água enchem o cilindro."),
  q("Qual é o volume de uma esfera de raio 3?", ["12π", "27π", "36π", "108π"], 2, "V = (4/3)·π·r³ = (4/3)·π·27 = 36π. A área da superfície seria 4πr² = 36π também, coincidência só para r = 3."),
  q("Qual é a área total de um cubo de aresta 3?", ["9", "27", "54", "36"], 2, "O cubo tem 6 faces quadradas de área 3² = 9: área total = 6 · 9 = 54. O volume seria 27."),
  f("Volume de prismas e cilindros", "V = área da base × altura"),
  f("Volume de pirâmides e cones", "V = (área da base × altura) / 3"),
  c(["1 cm³ = 1 mL.", "1 dm³ = 1 L.", "1 m³ = 1.000 L.", "Converter unidade de volume: cada degrau vale ×1.000."], "Caixa d'água de 2 m³ guarda 2.000 litros."),
]);

pack(M, "trigonometria", 2, 1, "Ciclo trigonométrico", [
  q("Em qual quadrante está o ângulo de 210°?", ["1º", "2º", "3º", "4º"], 2, "1º: 0°–90°; 2º: 90°–180°; 3º: 180°–270°; 4º: 270°–360°. 210° está entre 180° e 270°: 3º quadrante."),
  q("Quanto vale sen 150°?", ["−1/2", "1/2", "√3/2", "−√3/2"], 1, "150° = 180° − 30°: é o simétrico de 30° no 2º quadrante, onde o seno é positivo. sen 150° = sen 30° = 1/2."),
  q("Quanto vale cos 180°?", ["0", "1", "−1", "1/2"], 2, "No ciclo trigonométrico, 180° corresponde ao ponto (−1, 0). O cosseno é a coordenada x: −1."),
  q("No 4º quadrante, o cosseno é:", ["Positivo", "Negativo", "Zero", "Indefinido"], 0, "No 4º quadrante, x > 0 e y < 0. O cosseno (x) é positivo e o seno (y) é negativo."),
  q("Se sen x = 3/5 e x está no 1º quadrante, quanto vale cos x?", ["3/4", "4/5", "2/5", "5/3"], 1, "sen²x + cos²x = 1 → cos²x = 1 − 9/25 = 16/25 → cos x = 4/5 (positivo no 1º quadrante). É o triângulo 3-4-5."),
  q("Qual o período de f(x) = sen x?", ["π", "2π", "π/2", "4π"], 1, "O seno se repete a cada volta completa no ciclo: período 2π rad (360°). Já sen(2x) teria período π."),
  f("Sinais por quadrante (seno, cosseno)", "1º: + +; 2º: + −; 3º: − −; 4º: − +"),
  f("Redução ao 1º quadrante", "sen(180° − x) = sen x; cos(180° − x) = −cos x."),
  c(["Ciclo: círculo de raio 1.", "Cosseno é a coordenada x do ponto.", "Seno é a coordenada y.", "Tangente = seno/cosseno."], "Todo ângulo \"volta\" para um do 1º quadrante com o sinal certo."),
]);

pack(M, "trigonometria", 2, 1, "Lei dos senos e dos cossenos", [
  q("A lei dos cossenos para o lado a é:", ["a² = b² + c² − 2bc·cos A", "a² = b² + c²", "a = b·cos C", "a/sen A = b"], 0, "a² = b² + c² − 2bc·cos A. Se A = 90°, cos A = 0 e vira Pitágoras: a lei dos cossenos generaliza o teorema."),
  q("Num triângulo, b = 3, c = 5 e A = 60°. Quanto vale a²?", ["19", "34", "49", "4"], 0, "a² = 3² + 5² − 2·3·5·cos 60° = 9 + 25 − 30·(1/2) = 34 − 15 = 19. Esquecer o termo do cosseno dá 34."),
  q("Como se escreve a lei dos senos?", ["a·sen A = b·sen B", "a/sen A = b/sen B = c/sen C", "sen A + sen B = 1", "a² = sen²A"], 1, "a/sen A = b/sen B = c/sen C: cada lado é proporcional ao seno do ângulo oposto. A razão comum é igual a 2R (R = raio da circunferência circunscrita)."),
  q("Em um triângulo, o maior lado fica oposto:", ["Ao menor ângulo", "Ao maior ângulo", "Ao ângulo de 60°", "Não há relação"], 1, "Lados e ângulos opostos crescem juntos: o maior lado fica oposto ao maior ângulo, e o menor lado, ao menor ângulo."),
  q("Quando usar a lei dos cossenos?", ["Dois ângulos e um lado", "Dois lados e o ângulo entre eles", "Só triângulos retângulos", "Nunca no ENEM"], 1, "Quando você tem dois lados e o ângulo entre eles (LAL), ou os três lados e quer um ângulo. Com dois ângulos e um lado, use a lei dos senos."),
  f("Lei dos senos com o raio da circunferência circunscrita", "a/sen A = b/sen B = c/sen C = 2R"),
  f("Área do triângulo com dois lados e o ângulo", "A = (1/2)·a·b·sen C"),
  c(["Triângulo qualquer: não dá para usar SOH-CAH-TOA.", "Tem lado e ângulo opostos conhecidos? Lei dos senos.", "Tem dois lados e o ângulo do meio? Lei dos cossenos.", "Ângulo de 90° → vira Pitágoras."], "Escolha a lei pelo que o problema já te deu."),
]);

pack(M, "estatistica", 2, 4, "Probabilidade no dia a dia", [
  q("Lançando uma moeda 3 vezes, qual a chance de sair pelo menos uma cara?", ["1/8", "3/8", "1/2", "7/8"], 2, "Use o complementar: a única forma de NÃO ter cara é coroa-coroa-coroa, com chance (1/2)³ = 1/8. Logo, pelo menos uma cara = 1 − 1/8 = 7/8."),
  q("Numa urna com 3 bolas vermelhas e 7 azuis, a chance de tirar vermelha é:", ["3/7", "3/10", "7/10", "1/3"], 1, "Probabilidade = favoráveis/total = 3/(3 + 7) = 3/10. 3/7 compara vermelhas com azuis, não com o total."),
  q("Ao lançar dois dados, quantos resultados possíveis existem?", ["12", "18", "36", "6"], 2, "Cada dado tem 6 faces: 6 · 6 = 36 pares ordenados, de (1,1) a (6,6). Somar (12) conta errado."),
  q("A probabilidade de a soma de dois dados dar 7 é:", ["1/6", "1/12", "7/36", "1/36"], 0, "6 pares somam 7: (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). Probabilidade = 6/36 = 1/6. É a soma mais provável."),
  q("Se a chance de chover é 30%, a de não chover é:", ["30%", "60%", "70%", "100%"], 2, "Evento e complementar somam 100%: 100% − 30% = 70%."),
  q("Quantas senhas de 3 dígitos DIFERENTES entre si (0 a 9) podem ser formadas?", ["1.000", "720", "504", "30"], 2, "Sem repetir: 10 opções para o 1º, 9 para o 2º e 8 para o 3º → 10·9·8 = 720. Com repetição seriam 1.000."),
  f("Probabilidade do complementar", "P(não A) = 1 − P(A). Útil quando \"pelo menos um\" aparece no enunciado."),
  f("Arranjo x Combinação", "Arranjo: a ordem importa (pódio). Combinação: a ordem não importa (comissão)."),
  c(["Probabilidade = favoráveis / possíveis.", "\"E\" (eventos independentes): multiplique.", "\"Ou\" (eventos que não acontecem juntos): some.", "\"Pelo menos um\": faça 1 − P(nenhum)."], "Contar casos com calma vale mais que decorar fórmulas."),
]);

pack(M, "estatistica", 3, 3, "Gráficos e medidas de dispersão", [
  q("Com as notas 2, 4, 4, 5 e 10, qual medida resume melhor o grupo sem ser puxada pelo 10?", ["Média", "Mediana", "Amplitude", "Soma"], 1, "A mediana (o valor do meio, 4) não é afetada por valores extremos. A média (5) é \"puxada\" pelo 10."),
  q("A moda de 3, 5, 5, 6, 7, 7, 7, 9 é:", ["5", "6", "7", "9"], 2, "Moda é o valor que mais aparece: o 7, três vezes. A mediana seria 6,5 e a média, 6,125."),
  q("Qual é a amplitude do conjunto 12, 4, 9, 20, 7?", ["8", "12", "16", "20"], 2, "Amplitude = maior − menor = 20 − 4 = 16. Mede o quanto os dados se espalham, de forma simples."),
  q("Desvio padrão alto indica que os dados estão:", ["Muito concentrados na média", "Muito espalhados em torno da média", "Todos iguais", "Em ordem"], 1, "O desvio padrão mede o quanto os valores se afastam da média. Alto = dados espalhados; zero = todos iguais."),
  q("Para mostrar a divisão de um total em partes (100%), o gráfico mais indicado é:", ["Linha", "Setores (pizza)", "Dispersão", "Histograma"], 1, "O gráfico de setores (pizza) mostra partes de um todo que somam 100%. Para tendência no tempo, use linha."),
  q("Para mostrar evolução ao longo do tempo, use gráfico de:", ["Linha", "Setores", "Pictograma", "Tabela"], 0, "O gráfico de linha liga os pontos ao longo do tempo e deixa ver subidas, quedas e tendências. Setores mostram partes de um todo."),
  f("Média ponderada", "Soma (valor × peso) ÷ soma dos pesos. Ex.: notas 6 (peso 1) e 9 (peso 2): (6 + 18)/3 = 8."),
  f("Mediana com quantidade par de dados", "Média dos dois valores centrais depois de ordenar."),
  c(["Média: soma ÷ quantidade.", "Mediana: valor do meio, dados ordenados.", "Moda: o que mais aparece.", "Dispersão: o quanto os dados variam."], "Salários: a mediana costuma contar a história mais honesta."),
]);
