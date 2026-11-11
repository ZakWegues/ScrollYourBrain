import { MATEMATICA as M } from "./exatas";
import { c, f, pack, q } from "./pack";

pack(M, "financeira", 1, 1, "Porcentagem", [
  q("Um produto de R$ 80 tem desconto de 25%. Quanto passa a custar?", ["R$ 55", "R$ 60", "R$ 64", "R$ 20"], 1, "25% de 80 = 20. 80 − 20 = 60. Ou direto: 80 × 0,75 = 60."),
  q("30 é quantos por cento de 120?", ["20%", "25%", "30%", "40%"], 1, "30/120 = 0,25 = 25%."),
  q("Uma conta de R$ 50 com 10% de serviço fica em:", ["R$ 51", "R$ 55", "R$ 60", "R$ 50,10"], 1, "50 × 1,10 = 55."),
  q("Um salário subiu de R$ 2.000 para R$ 2.300. O aumento foi de:", ["3%", "13%", "15%", "30%"], 2, "Aumento de 300 sobre 2.000: 300/2.000 = 0,15 = 15%."),
  q("Depois de um desconto de 20%, uma blusa custa R$ 96. Qual era o preço original?", ["R$ 115,20", "R$ 116", "R$ 120", "R$ 76,80"], 2, "96 = P × 0,8 → P = 96/0,8 = 120. Cuidado: somar 20% de volta (115,20) está errado."),
  q("Numa turma de 40 alunos, 35% são meninos. Quantas meninas há?", ["14", "24", "26", "35"], 2, "Meninas = 65% de 40 = 26."),
  f("Como calcular 15% de um valor de cabeça?", "10% (anda a vírgula uma casa) + metade disso (5%). Ex.: 15% de 80 = 8 + 4 = 12."),
  f("Diferença entre pontos percentuais e porcentagem", "Juros de 10% para 12% subiram 2 pontos percentuais, mas 20% em termos relativos (2/10)."),
  c(["Porcentagem é uma fração de denominador 100.", "x% de um valor = valor × x/100.", "Aumento de x%: multiplique por (1 + x/100).", "Desconto de x%: multiplique por (1 − x/100)."], "Pense em fator: +12% = ×1,12; −30% = ×0,7."),
]);

pack(M, "financeira", 3, 3, "Juros, inflação e parcelas", [
  q("R$ 1.000 a juros simples de 2% ao mês por 6 meses geram montante de:", ["R$ 1.012", "R$ 1.120", "R$ 1.200", "R$ 1.126,16"], 1, "J = 1.000 × 0,02 × 6 = 120. M = 1.120."),
  q("Qual é a principal diferença entre juros simples e compostos?", ["Compostos são sempre menores", "No composto o juro de cada período entra no cálculo do próximo", "Simples só existem em bancos", "Não há diferença após 1 ano"], 1, "No composto há juro sobre juro, por isso cresce como exponencial."),
  q("Inflação de 5% num ano significa que, em média:", ["Os salários subiram 5%", "Os preços subiram 5%", "O dinheiro rendeu 5%", "O PIB cresceu 5%"], 1, "Inflação mede a alta geral dos preços: o dinheiro compra menos."),
  q("Um investimento rendeu 10% num ano com inflação de 10%. O ganho real foi:", ["10%", "20%", "0%", "5%"], 2, "Rendimento igual à inflação → poder de compra igual. Ganho real ≈ 0."),
  q("À vista R$ 900 ou 2 × R$ 500 (a primeira no ato). Os juros cobrados sobre o valor financiado são:", ["11,1%", "25%", "10%", "50%"], 1, "Paga 500 na hora, financia 400 e devolve 500 depois: juros de 100 sobre 400 = 25%."),
  q("Um capital dobra em quanto tempo a juros compostos de 10% ao ano (aproximadamente)?", ["5 anos", "7 anos", "10 anos", "20 anos"], 1, "Regra do 72: 72/10 ≈ 7 anos. (1,1⁷ ≈ 1,95.)"),
  f("Fórmula do montante a juros compostos", "M = C·(1 + i)ᵗ", "C = capital, i = taxa na forma decimal, t = número de períodos."),
  f("Regra do 72", "Tempo para dobrar ≈ 72 ÷ taxa (%). A 6% ao ano, ≈ 12 anos."),
  c(["Parcelar \"sem juros\" muitas vezes embute juros no preço.", "Compare sempre com o preço à vista.", "Desconto à vista = juros do parcelado.", "Calcule a taxa sobre o valor que fica devendo."], "Desconto de 10% à vista em 2 vezes = juros bem maiores que 10% ao mês."),
]);

pack(M, "algebra", 1, 1, "Razão, proporção e regra de três", [
  q("Se 3 cadernos custam R$ 24, quanto custam 5?", ["R$ 30", "R$ 35", "R$ 40", "R$ 45"], 2, "Cada um custa 8. 5 × 8 = 40."),
  q("4 pedreiros fazem um muro em 6 dias. Quantos dias 8 pedreiros levam (mesmo ritmo)?", ["3", "4", "12", "2"], 0, "Inversamente proporcional: dobra a equipe, cai pela metade o tempo: 3 dias."),
  q("Num mapa de escala 1:100.000, 3 cm representam:", ["300 m", "3 km", "30 km", "300 km"], 1, "3 × 100.000 cm = 300.000 cm = 3 km."),
  q("A razão entre meninos e meninas é 2:3 numa turma de 30. Quantos meninos?", ["10", "12", "18", "20"], 1, "2 + 3 = 5 partes; 30/5 = 6 por parte; meninos = 2 × 6 = 12."),
  q("Um carro faz 12 km por litro. Quantos litros para 300 km?", ["20", "24", "25", "36"], 2, "300/12 = 25 litros."),
  q("Se x/4 = 15/20, então x vale:", ["3", "5", "12", "75"], 0, "Produto cruzado: 20x = 60 → x = 3."),
  f("Como saber se a regra de três é inversa?", "Quando uma grandeza aumenta e a outra diminui (mais operários → menos dias). Aí inverta uma das razões."),
  f("Propriedade fundamental da proporção", "a/b = c/d ⇔ a·d = b·c (produto dos meios = produto dos extremos)."),
  c(["Regra de três: monte a tabela com as grandezas.", "Setas no mesmo sentido: direta.", "Setas opostas: inversa, inverta uma fração.", "Multiplique cruzado e isole x."], "Pergunte: se uma dobra, a outra dobra ou cai pela metade?"),
]);

pack(M, "algebra", 1, 1, "Equações do 2º grau", [
  q("Quais as raízes de x² − 5x + 6 = 0?", ["1 e 6", "2 e 3", "−2 e −3", "−1 e 6"], 1, "Soma 5 e produto 6: 2 e 3."),
  q("Quanto vale o discriminante Δ de x² + 4x + 4 = 0?", ["0", "4", "8", "32"], 0, "Δ = b² − 4ac = 16 − 16 = 0 → uma raiz real dupla (x = −2)."),
  q("Se Δ < 0, a equação do 2º grau:", ["Tem duas raízes reais iguais", "Tem duas raízes reais diferentes", "Não tem raízes reais", "Tem infinitas raízes"], 2, "Raiz quadrada de número negativo não existe nos reais."),
  q("Resolva x² − 16 = 0.", ["x = 4", "x = ±4", "x = ±8", "x = 16"], 1, "x² = 16 → x = 4 ou x = −4. Não esqueça o negativo!"),
  q("Resolva x² − 7x = 0.", ["x = 7", "x = 0 ou x = 7", "x = ±7", "x = 0 ou x = −7"], 1, "Coloque x em evidência: x(x − 7) = 0 → x = 0 ou x = 7."),
  q("A soma das raízes de 2x² − 8x + 3 = 0 é:", ["−4", "4", "3/2", "8"], 1, "Soma = −b/a = 8/2 = 4."),
  f("Fórmula de Bhaskara", "x = (−b ± √Δ) / 2a, com Δ = b² − 4ac"),
  f("Soma e produto das raízes", "Soma = −b/a; Produto = c/a. Com a = 1, procure dois números que somem −b e multipliquem c."),
  c(["Equação incompleta sem c: coloque x em evidência.", "Sem b: isole x² e tire a raiz (±).", "Completa: tente soma e produto primeiro.", "Se não sair de cabeça, Bhaskara."], "Δ > 0: duas raízes; Δ = 0: uma; Δ < 0: nenhuma real."),
]);

pack(M, "funcoes", 1, 2, "Domínio, imagem e gráficos", [
  q("Qual é o domínio de f(x) = 1/(x − 3)?", ["ℝ", "ℝ − {3}", "ℝ − {0}", "x > 3"], 1, "O denominador não pode ser zero: x ≠ 3."),
  q("Qual é o domínio de f(x) = √(x − 2)?", ["x ≥ 2", "x > 2", "x ≤ 2", "ℝ"], 0, "Raiz quadrada exige radicando ≥ 0: x − 2 ≥ 0 → x ≥ 2."),
  q("Se f(x) = x² e o domínio é {−2, 0, 3}, a imagem é:", ["{−4, 0, 9}", "{0, 4, 9}", "{4, 9}", "{−2, 0, 3}"], 1, "f(−2) = 4, f(0) = 0, f(3) = 9."),
  q("Um gráfico representa uma função se:", ["Toda reta horizontal o corta uma vez", "Toda reta vertical o corta no máximo uma vez", "Passa pela origem", "É uma reta"], 1, "Teste da reta vertical: cada x tem no máximo um y."),
  q("Se f(x) = 2x + 1 e g(x) = x², quanto vale f(g(3))?", ["19", "49", "10", "7"], 0, "g(3) = 9; f(9) = 2·9 + 1 = 19."),
  q("A função inversa de f(x) = 2x + 6 é:", ["f⁻¹(x) = (x − 6)/2", "f⁻¹(x) = 2x − 6", "f⁻¹(x) = x/2 + 6", "f⁻¹(x) = 1/(2x + 6)"], 0, "Troque x e y e isole: x = 2y + 6 → y = (x − 6)/2."),
  f("Domínio x Imagem", "Domínio: valores de x que podem entrar. Imagem: valores de y que realmente saem."),
  f("O que é função crescente?", "Quando x aumenta, f(x) aumenta. Na afim, acontece quando a > 0."),
  c(["Função liga cada x a um único y.", "Domínio: onde a fórmula faz sentido.", "Fique de olho em divisão por zero e raiz de negativo.", "Composta: f(g(x)) — calcule de dentro para fora."], "Inversa: troca x com y e isola de novo."),
]);

pack(M, "funcoes", 1, 4, "Exponencial e log na prática", [
  q("Uma bactéria dobra a cada hora. Começando com 100, quantas haverá após 5 horas?", ["500", "1.000", "3.200", "10.000"], 2, "100 × 2⁵ = 100 × 32 = 3.200."),
  q("Um remédio perde metade da concentração a cada 6 h. Após 18 h, resta:", ["1/3", "1/6", "1/8", "1/2"], 2, "18 h = 3 meias-vidas: (1/2)³ = 1/8."),
  q("Quanto vale log 1.000 (base 10)?", ["2", "3", "4", "100"], 1, "10³ = 1.000."),
  q("log₂ 8 + log₂ 4 é igual a:", ["log₂ 12", "5", "6", "32"], 1, "3 + 2 = 5 (ou log₂ 32 = 5)."),
  q("Qual é o valor de log₅ 1?", ["0", "1", "5", "Não existe"], 0, "Qualquer base elevada a 0 dá 1: log de 1 é sempre 0."),
  q("O gráfico de f(x) = 2ˣ:", ["Corta o eixo x em 1", "Passa por (0, 1) e nunca toca o eixo x", "É uma reta", "Passa pela origem"], 1, "2⁰ = 1 e 2ˣ > 0 para todo x."),
  f("Propriedades do log", "log(a·b) = log a + log b; log(a/b) = log a − log b; log(aⁿ) = n·log a."),
  f("Meia-vida", "Tempo para uma quantidade cair pela metade. Após n meias-vidas, resta (1/2)ⁿ do inicial."),
  c(["Crescimento exponencial: multiplica por um fator fixo a cada período.", "Ex.: dobra a cada hora → ×2, ×2, ×2…", "Log responde: \"quantos períodos até chegar lá?\"", "Escala Richter e pH são logarítmicas."], "Exponencial cresce devagar no começo e explode depois."),
]);

pack(M, "geometria", 1, 4, "Semelhança e relações no triângulo", [
  q("Um poste projeta sombra de 6 m no mesmo instante em que uma pessoa de 1,8 m projeta 1,2 m. Altura do poste?", ["4 m", "7,2 m", "9 m", "10,8 m"], 2, "Semelhança: h/6 = 1,8/1,2 → h = 9 m."),
  q("Triângulos semelhantes com razão 2 têm áreas na razão:", ["2", "4", "8", "√2"], 1, "Áreas: razão ao quadrado (2² = 4). Volumes: ao cubo."),
  q("A soma dos ângulos internos de um triângulo é:", ["90°", "180°", "270°", "360°"], 1, "Sempre 180° em geometria plana."),
  q("Num triângulo equilátero de lado 6, a altura mede:", ["3", "3√3", "6√3", "√3"], 1, "h = l√3/2 = 6√3/2 = 3√3."),
  q("A diagonal de um quadrado de lado 5 mede:", ["5", "5√2", "10", "25"], 1, "d = l√2."),
  q("Em um triângulo retângulo, a hipotenusa é sempre:", ["O menor lado", "O lado oposto ao ângulo reto", "Igual à soma dos catetos", "Perpendicular a um cateto"], 1, "Ela fica oposta ao ângulo de 90° e é o maior lado."),
  f("Casos de semelhança de triângulos", "AA (dois ângulos iguais), LAL (dois lados proporcionais e ângulo entre eles igual), LLL (três lados proporcionais)."),
  f("Teorema de Tales", "Retas paralelas cortadas por transversais determinam segmentos proporcionais."),
  c(["Triângulos semelhantes têm mesmo formato, tamanhos diferentes.", "Lados correspondentes são proporcionais.", "Medir altura de prédio pela sombra é semelhança.", "Razão k nos lados → k² nas áreas."], "Ache os ângulos iguais e monte a proporção."),
]);

pack(M, "geometria", 2, 3, "Prismas, cilindros e esferas", [
  q("Volume de um cilindro de raio 3 cm e altura 10 cm:", ["30π cm³", "60π cm³", "90π cm³", "900π cm³"], 2, "V = πr²h = π·9·10 = 90π cm³."),
  q("Quantos litros cabem numa caixa de 1 m × 1 m × 1 m?", ["10", "100", "1.000", "10.000"], 2, "1 m³ = 1.000 litros."),
  q("Volume de um cubo de aresta 4:", ["16", "48", "64", "96"], 2, "V = a³ = 64."),
  q("Volume do cone comparado ao cilindro de mesma base e altura:", ["Igual", "Metade", "Um terço", "Dobro"], 2, "V_cone = (1/3)·πr²h."),
  q("Volume de uma esfera de raio 3:", ["12π", "27π", "36π", "108π"], 2, "V = (4/3)πr³ = (4/3)π·27 = 36π."),
  q("Área total de um cubo de aresta 3:", ["9", "27", "54", "36"], 2, "6 faces de 3² = 6·9 = 54."),
  f("Volume de prismas e cilindros", "V = área da base × altura"),
  f("Volume de pirâmides e cones", "V = (área da base × altura) / 3"),
  c(["1 cm³ = 1 mL.", "1 dm³ = 1 L.", "1 m³ = 1.000 L.", "Converter unidade de volume: cada degrau vale ×1.000."], "Caixa d'água de 2 m³ guarda 2.000 litros."),
]);

pack(M, "trigonometria", 2, 1, "Ciclo trigonométrico", [
  q("Em qual quadrante está o ângulo de 210°?", ["1º", "2º", "3º", "4º"], 2, "Entre 180° e 270°: 3º quadrante."),
  q("sen 150° vale:", ["−1/2", "1/2", "√3/2", "−√3/2"], 1, "150° é o simétrico de 30° no 2º quadrante, onde o seno é positivo."),
  q("cos 180° vale:", ["0", "1", "−1", "1/2"], 2, "No ponto (−1, 0) do ciclo, o cosseno é a abscissa: −1."),
  q("No 4º quadrante, o cosseno é:", ["Positivo", "Negativo", "Zero", "Indefinido"], 0, "No 4º quadrante x > 0 e y < 0: cosseno (x) positivo, seno (y) negativo."),
  q("Qual relação vale para qualquer ângulo x?", ["sen x + cos x = 1", "sen²x + cos²x = 1", "tg x = cos x / sen x", "sen x = cos x"], 1, "Relação fundamental da trigonometria."),
  q("Qual o período de f(x) = sen x?", ["π", "2π", "π/2", "4π"], 1, "Uma volta completa no ciclo: 2π rad."),
  f("Sinais por quadrante (seno, cosseno)", "1º: + +; 2º: + −; 3º: − −; 4º: − +"),
  f("Redução ao 1º quadrante", "sen(180° − x) = sen x; cos(180° − x) = −cos x."),
  c(["Ciclo: círculo de raio 1.", "Cosseno é a coordenada x do ponto.", "Seno é a coordenada y.", "Tangente = seno/cosseno."], "Todo ângulo \"volta\" para um do 1º quadrante com o sinal certo."),
]);

pack(M, "trigonometria", 2, 1, "Lei dos senos e dos cossenos", [
  q("A lei dos cossenos para o lado a é:", ["a² = b² + c² − 2bc·cos A", "a² = b² + c²", "a = b·cos C", "a/sen A = b"], 0, "Generaliza Pitágoras: se A = 90°, cos A = 0 e vira a² = b² + c²."),
  q("Num triângulo, b = 3, c = 5 e A = 60°. Quanto vale a²?", ["19", "34", "49", "4"], 0, "a² = 9 + 25 − 2·3·5·(1/2) = 34 − 15 = 19."),
  q("Lei dos senos:", ["a·sen A = b·sen B", "a/sen A = b/sen B = c/sen C", "sen A + sen B = 1", "a² = sen²A"], 1, "Lados são proporcionais aos senos dos ângulos opostos."),
  q("Em um triângulo, o maior lado fica oposto:", ["Ao menor ângulo", "Ao maior ângulo", "Ao ângulo de 60°", "Não há relação"], 1, "Pela lei dos senos, lado maior ↔ ângulo maior."),
  q("Quando usar a lei dos cossenos?", ["Dois ângulos e um lado", "Dois lados e o ângulo entre eles", "Só triângulos retângulos", "Nunca no ENEM"], 1, "LAL (ou os três lados para achar um ângulo)."),
  f("Lei dos senos com o raio da circunferência circunscrita", "a/sen A = b/sen B = c/sen C = 2R"),
  f("Área do triângulo com dois lados e o ângulo", "A = (1/2)·a·b·sen C"),
  c(["Triângulo qualquer: não dá para usar SOH-CAH-TOA.", "Tem lado e ângulo opostos conhecidos? Lei dos senos.", "Tem dois lados e o ângulo do meio? Lei dos cossenos.", "Ângulo de 90° → vira Pitágoras."], "Escolha a lei pelo que o problema já te deu."),
]);

pack(M, "estatistica", 2, 4, "Probabilidade no dia a dia", [
  q("Probabilidade de tirar cara duas vezes seguidas numa moeda:", ["1/2", "1/3", "1/4", "1/8"], 2, "Eventos independentes: 1/2 × 1/2 = 1/4."),
  q("Numa urna com 3 bolas vermelhas e 7 azuis, a chance de tirar vermelha é:", ["3/7", "3/10", "7/10", "1/3"], 1, "Favoráveis 3 sobre o total de 10."),
  q("Ao lançar dois dados, quantos resultados possíveis existem?", ["12", "18", "36", "6"], 2, "6 × 6 = 36."),
  q("A probabilidade de a soma de dois dados dar 7 é:", ["1/6", "1/12", "7/36", "1/36"], 0, "6 pares somam 7: (1,6),(2,5),(3,4),(4,3),(5,2),(6,1). 6/36 = 1/6."),
  q("Se a chance de chover é 30%, a de não chover é:", ["30%", "60%", "70%", "100%"], 2, "Evento complementar: 1 − 0,3 = 0,7."),
  q("Quantas senhas de 3 dígitos (0 a 9) podem ser formadas, podendo repetir?", ["30", "720", "1.000", "999"], 2, "10 × 10 × 10 = 1.000 (princípio multiplicativo)."),
  f("Probabilidade do complementar", "P(não A) = 1 − P(A). Útil quando \"pelo menos um\" aparece no enunciado."),
  f("Arranjo x Combinação", "Arranjo: a ordem importa (pódio). Combinação: a ordem não importa (comissão)."),
  c(["Probabilidade = favoráveis / possíveis.", "\"E\" (eventos independentes): multiplique.", "\"Ou\" (eventos que não acontecem juntos): some.", "\"Pelo menos um\": faça 1 − P(nenhum)."], "Contar casos com calma vale mais que decorar fórmulas."),
]);

pack(M, "estatistica", 3, 3, "Gráficos e medidas de dispersão", [
  q("Notas 2, 4, 4, 5, 10. Qual medida resume melhor sem ser puxada pelo 10?", ["Média", "Mediana", "Amplitude", "Soma"], 1, "Mediana (4) não é afetada por valores extremos; a média (5) é."),
  q("A moda de 3, 5, 5, 6, 7, 7, 7, 9 é:", ["5", "6", "7", "9"], 2, "Moda é o valor mais frequente: 7 aparece 3 vezes."),
  q("Amplitude de 12, 4, 9, 20, 7:", ["8", "12", "16", "20"], 2, "Maior − menor = 20 − 4 = 16."),
  q("Desvio padrão alto indica que os dados estão:", ["Muito concentrados na média", "Muito espalhados em torno da média", "Todos iguais", "Em ordem"], 1, "Desvio padrão mede o quanto os valores se afastam da média."),
  q("Para mostrar a divisão de um total em partes (100%), o gráfico mais indicado é:", ["Linha", "Setores (pizza)", "Dispersão", "Histograma"], 1, "Setores mostram partes de um todo."),
  q("Para mostrar evolução ao longo do tempo, use gráfico de:", ["Linha", "Setores", "Pictograma", "Tabela"], 0, "Linhas mostram tendência no tempo."),
  f("Média ponderada", "Soma (valor × peso) ÷ soma dos pesos. Ex.: notas 6 (peso 1) e 9 (peso 2): (6 + 18)/3 = 8."),
  f("Mediana com quantidade par de dados", "Média dos dois valores centrais depois de ordenar."),
  c(["Média: soma ÷ quantidade.", "Mediana: valor do meio, dados ordenados.", "Moda: o que mais aparece.", "Dispersão: o quanto os dados variam."], "Salários: a mediana costuma contar a história mais honesta."),
]);
