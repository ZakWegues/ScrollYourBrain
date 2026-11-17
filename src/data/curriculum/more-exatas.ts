import { FISICA, MATEMATICA, QUIMICA } from "./exatas";
import { more } from "./more";

const M = MATEMATICA;
more(M, 1, 1, [
  ["Quantos elementos tem A ∪ B se A = {1, 2, 3} e B = {3, 4}?", ["3", "4", "5", "6"], 1, "União junta tudo, sem repetir: {1, 2, 3, 4}, 4 elementos. Contar o 3 duas vezes daria 5, o erro mais comum."],
  ["Qual número é irracional?", ["0,25", "√9", "√2", "−3/4"], 2, "√2 = 1,4142… não acaba nem repete, então não vira fração. √9 = 3 é inteiro; 0,25 = 1/4 e −3/4 são racionais."],
  ["O intervalo [−1, 3] contém quantos números inteiros?", ["3", "4", "5", "Infinitos"], 2, "Colchete fechado inclui as pontas: −1, 0, 1, 2 e 3 → 5 inteiros. \"Infinitos\" vale para os reais do intervalo, não para os inteiros."],
]);
more(M, 1, 2, [
  ["Um táxi cobra R$ 5 fixos + R$ 2 por km. Quanto custa uma corrida de 10 km?", ["R$ 20", "R$ 25", "R$ 30", "R$ 50"], 1, "Função afim f(x) = 2x + 5: f(10) = 20 + 5 = R$ 25. Esquecer a taxa fixa dá R$ 20."],
  ["A função f(x) = −2x + 4 é:", ["Crescente", "Decrescente", "Constante", "Quadrática"], 1, "Em f(x) = ax + b, o sinal de a manda: a = −2 < 0, então a reta desce (decrescente). O 4 só indica onde corta o eixo y."],
  ["Se f(x) = 3x + 1, quanto vale f(2)?", ["5", "6", "7", "9"], 2, "Troque x por 2: f(2) = 3·2 + 1 = 7. Somar antes de multiplicar (3·3) daria 9."],
]);
more(M, 1, 3, [
  ["Quais são as raízes de x² − 5x + 6 = 0?", ["1 e 6", "2 e 3", "−2 e −3", "5 e 6"], 1, "Soma e produto: as raízes somam 5 (−b/a) e multiplicam 6 (c/a) → 2 e 3. Confira: 2² − 5·2 + 6 = 0."],
  ["Se Δ < 0, a equação do 2º grau tem:", ["Duas raízes reais", "Uma raiz real", "Nenhuma raiz real", "Infinitas raízes"], 2, "Com Δ < 0 não existe √Δ nos reais: a parábola não toca o eixo x. Δ = 0 dá uma raiz (dupla) e Δ > 0, duas."],
  ["Em f(x) = −x² + 4, o vértice é ponto de:", ["Mínimo", "Máximo", "Inflexão", "Raiz"], 1, "a = −1 < 0: concavidade para baixo, então o vértice (0, 4) é o ponto mais alto, um máximo."],
]);
more(M, 1, 4, [
  ["Qual é a solução de 2ˣ = 16?", ["2", "4", "8", "16"], 1, "Escreva 16 como potência de 2: 16 = 2⁴. Bases iguais → expoentes iguais: x = 4. O 8 vem de dividir 16 por 2."],
  ["Quanto vale log 1000 (base 10)?", ["2", "3", "10", "100"], 1, "log 1000 pergunta \"10 elevado a quanto dá 1000?\". 10³ = 1000, então vale 3 (é o número de zeros)."],
  ["Uma população dobra a cada ano. Começando com 100, depois de 3 anos terá:", ["300", "600", "800", "900"], 2, "Dobrar 3 vezes: 100 → 200 → 400 → 800, ou 100·2³. Somar 100 por ano (300) seria crescimento linear, não exponencial."],
]);
more(M, 2, 1, [
  ["Quanto vale cos 60°?", ["1/2", "√2/2", "√3/2", "0"], 0, "cos 60° = 1/2. Ângulos complementares trocam seno e cosseno: cos 60° = sen 30°."],
  ["Quanto é 180° em radianos?", ["π/2", "π", "2π", "3π/2"], 1, "Meia volta = 180° = π rad (a volta inteira, 360°, é 2π). Para converter: multiplique por π/180."],
  ["Qual é a relação fundamental da trigonometria?", ["sen x + cos x = 1", "sen² x + cos² x = 1", "tg x = cos x/sen x", "sen x · cos x = 1"], 1, "sen²x + cos²x = 1 vale para qualquer ângulo: é Pitágoras no círculo de raio 1. Sem os quadrados, a soma não dá 1."],
]);
more(M, 2, 2, [
  ["Qual é a soma dos 10 primeiros termos da PA 1, 2, 3, …?", ["45", "50", "55", "100"], 2, "Sₙ = (a₁ + aₙ)·n/2 = (1 + 10)·10/2 = 55. Truque de Gauss: pares que somam 11 (1+10, 2+9…), 5 pares."],
  ["Na PG 2, 6, 18, …, a razão é:", ["2", "3", "4", "6"], 1, "Em PG cada termo é o anterior vezes a razão: q = 6/2 = 3 (confira: 6·3 = 18). Subtrair (6 − 2 = 4) seria pensar em PA."],
  ["Qual é o 5º termo da PG 1, 2, 4, …?", ["8", "10", "16", "32"], 2, "aₙ = a₁·q^(n−1) = 1·2⁴ = 16. Lista: 1, 2, 4, 8, 16. Usar 2⁵ (32) é errar o expoente."],
]);
more(M, 2, 3, [
  ["Uma matriz 2×3 tem quantos elementos?", ["5", "6", "8", "9"], 1, "2×3 significa 2 linhas e 3 colunas: 2·3 = 6 elementos. Somar (5) não conta os cruzamentos."],
  ["Resolva: x + y = 5 e x − y = 1.", ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"], 1, "Somando as equações, y some: 2x = 6 → x = 3; aí y = 5 − 3 = 2. Confira: 3 − 2 = 1."],
  ["Para multiplicar A (2×3) por B, B precisa ter:", ["2 linhas", "3 linhas", "3 colunas", "2 colunas"], 1, "Em A·B, o número de colunas de A (3) tem que ser igual ao número de linhas de B. O resultado terá 2 linhas e as colunas de B."],
]);
more(M, 2, 4, [
  ["Quantas senhas de 3 dígitos (0–9) podem ser formadas, com repetição?", ["30", "720", "999", "1000"], 3, "Princípio multiplicativo: 10 opções para cada um dos 3 dígitos → 10·10·10 = 1000 (de 000 a 999). 720 seria sem repetir."],
  ["De quantas formas escolher 2 pessoas de um grupo de 4 (ordem não importa)?", ["4", "6", "8", "12"], 1, "Combinação: C(4,2) = 4!/(2!·2!) = 6. Se a ordem importasse (arranjo), seriam 4·3 = 12."],
  ["Qual é a probabilidade de tirar cara em dois lançamentos seguidos de uma moeda?", ["1/2", "1/3", "1/4", "1"], 2, "Eventos independentes: multiplica. 1/2 · 1/2 = 1/4. Casos possíveis: KK, KC, CK, CC; só 1 de 4 serve."],
]);
more(M, 3, 1, [
  ["Qual é a área de um triângulo de base 10 e altura 6?", ["16", "30", "60", "36"], 1, "A = b·h/2 = 10·6/2 = 30. Sem dividir por 2 daria 60, que é a área do retângulo de mesma base e altura."],
  ["Quanto dá a soma dos ângulos internos de um triângulo?", ["90°", "180°", "270°", "360°"], 1, "Em qualquer triângulo, os ângulos internos somam 180°. Num quadrilátero são 360°; em geral, (n − 2)·180°."],
  ["Qual é o volume de um cilindro de raio 2 e altura 5?", ["10π", "20π", "25π", "40π"], 1, "V = π·r²·h = π·2²·5 = 20π. Esquecer de elevar o raio ao quadrado dá 10π."],
]);
more(M, 3, 2, [
  ["Qual é o ponto médio entre (2, 4) e (6, 8)?", ["(3, 5)", "(4, 6)", "(8, 12)", "(4, 4)"], 1, "Média de cada coordenada: x = (2 + 6)/2 = 4 e y = (4 + 8)/2 = 6 → (4, 6). Somar sem dividir dá (8, 12)."],
  ["A reta y = 2x + 3 corta o eixo y em:", ["(0, 2)", "(0, 3)", "(3, 0)", "(2, 0)"], 1, "No eixo y, x = 0: y = 2·0 + 3 = 3 → (0, 3). O coeficiente b é sempre o ponto de corte no eixo y."],
  ["Qual é a equação da circunferência de centro (0, 0) e raio 5?", ["x² + y² = 5", "x² + y² = 25", "x + y = 5", "x² − y² = 25"], 1, "(x − a)² + (y − b)² = r². Com centro na origem e r = 5: x² + y² = 25. O raio entra ao quadrado, por isso não é 5."],
]);
more(M, 3, 3, [
  ["Qual é a mediana de 3, 9, 1, 7 e 5?", ["3", "5", "7", "9"], 1, "Primeiro ordene: 1, 3, 5, 7, 9. A mediana é o termo do meio: 5. Pegar o do meio sem ordenar daria 1."],
  ["R$ 1000 a juros simples de 10% ao mês, por 3 meses, rendem:", ["R$ 100", "R$ 300", "R$ 331", "R$ 1300"], 1, "Juros simples: J = C·i·t = 1000·0,10·3 = R$ 300. R$ 331 seria juros compostos; R$ 1300 é o montante, não o juro."],
  ["Qual é a moda de 2, 3, 3, 5 e 7?", ["2", "3", "4", "5"], 1, "Moda é o valor que mais se repete: o 3 aparece duas vezes. A média seria 4 e a mediana, 3 também, por coincidência."],
]);
more(M, 3, 4, [
  ["Quanto é (2 + 3i) + (1 − i)?", ["3 + 2i", "3 + 4i", "1 + 2i", "2 − 3i"], 0, "Some real com real e imaginária com imaginária: (2 + 1) + (3 − 1)i = 3 + 2i."],
  ["Qual é o grau do polinômio 4x³ − x + 7?", ["1", "3", "4", "7"], 1, "O grau é o maior expoente de x com coeficiente diferente de zero: 3. O 4 é coeficiente e o 7 é termo independente."],
  ["Se P(x) = x² − 4, P(2) vale:", ["0", "2", "4", "−4"], 0, "P(2) = 2² − 4 = 0. Quando P(a) = 0, dizemos que a é raiz do polinômio: aqui 2 (e −2) são raízes."],
]);

const F = FISICA;
more(F, 1, 1, [
  ["Um corpo parte do repouso com aceleração de 2 m/s². Qual é a velocidade após 5 s?", ["2 m/s", "7 m/s", "10 m/s", "25 m/s"], 2, "MUV: v = v₀ + a·t = 0 + 2·5 = 10 m/s. Somar 2 + 5 (7) mistura grandezas diferentes."],
  ["No movimento uniforme, a velocidade é:", ["Variável", "Constante", "Sempre zero", "Crescente"], 1, "Movimento uniforme (MU): velocidade constante e aceleração zero, distâncias iguais em tempos iguais. Velocidade variável é MUV."],
  ["Um objeto em queda livre (g = 10 m/s²) após 3 s tem velocidade de:", ["10 m/s", "15 m/s", "30 m/s", "45 m/s"], 2, "Queda livre partindo do repouso: v = g·t = 10·3 = 30 m/s. 45 m é a distância caída (g·t²/2), não a velocidade."],
]);
more(F, 1, 2, [
  ["Qual é o peso de uma pessoa de 60 kg (g = 10 m/s²)?", ["6 N", "60 N", "600 N", "6000 N"], 2, "P = m·g = 60·10 = 600 N. \"60 kg\" é massa; peso é força, medido em newtons."],
  ["Ao frear o ônibus, o passageiro vai para frente por causa:", ["Da 3ª lei de Newton", "Da inércia", "Da força peso", "Do atrito no piso"], 1, "Inércia (1ª lei de Newton): o corpo tende a manter o movimento. O ônibus para, o passageiro \"continua\". Não é uma força empurrando."],
  ["A força de atrito sempre:", ["Ajuda o corpo a se mover", "Se opõe ao deslizamento", "É vertical, como o peso", "É igual ao peso do corpo"], 1, "O atrito se opõe ao deslizamento (ou à tendência de deslizar) entre as superfícies. Ele é paralelo à superfície, não vertical como o peso."],
]);
more(F, 1, 3, [
  ["Qual é o trabalho de uma força de 10 N que desloca um objeto 5 m na mesma direção?", ["2 J", "15 J", "50 J", "500 J"], 2, "τ = F·d·cos 0° = 10·5 = 50 J. Se a força fosse perpendicular ao deslocamento, o trabalho seria zero."],
  ["Potência é:", ["Força × distância", "Trabalho / tempo", "Massa × velocidade", "Energia × tempo"], 1, "Potência mede a rapidez com que se realiza trabalho: P = τ/Δt, em watts (J/s). Força × distância é o trabalho em si."],
  ["Um objeto de 1 kg a 20 m de altura (g = 10) tem energia potencial de:", ["20 J", "100 J", "200 J", "2000 J"], 2, "Ep = m·g·h = 1·10·20 = 200 J. Esquecer o g dá 20 J."],
]);
more(F, 1, 4, [
  ["Qual é o impulso de uma força de 20 N aplicada por 3 s?", ["6,7 N·s", "23 N·s", "60 N·s", "17 N·s"], 2, "I = F·Δt = 20·3 = 60 N·s. O impulso é igual à variação da quantidade de movimento do corpo."],
  ["Se a distância entre dois corpos dobra, a força gravitacional:", ["Dobra", "Cai pela metade", "Cai para 1/4", "Não muda"], 2, "Lei da gravitação: F = G·m₁·m₂/d². Distância 2 vezes maior → d² 4 vezes maior → força 4 vezes menor (1/4)."],
  ["Na Lua, sua massa:", ["Diminui para 1/6", "Continua a mesma", "Vira zero", "Aumenta um pouco"], 1, "Massa é a quantidade de matéria e não depende do lugar. O que muda na Lua é o peso (P = m·g), cerca de 1/6 do da Terra."],
]);
more(F, 2, 1, [
  ["Calor é:", ["Temperatura alta de um corpo", "Energia térmica em trânsito", "Sinônimo de temperatura", "Uma substância que flui"], 1, "Calor é energia térmica em trânsito, sempre do corpo mais quente para o mais frio. Temperatura mede a agitação das partículas; não são sinônimos."],
  ["Para aquecer 100 g de água (c = 1 cal/g°C) em 10 °C são necessárias:", ["10 cal", "100 cal", "1000 cal", "110 cal"], 2, "Q = m·c·ΔT = 100·1·10 = 1000 cal. Somar m + ΔT (110) não é a fórmula do calor sensível."],
  ["Durante a fusão do gelo a 0 °C, a temperatura:", ["Sobe aos poucos", "Cai abaixo de zero", "Fica constante", "Oscila sem parar"], 2, "Na mudança de estado, o calor (latente) é usado para quebrar a estrutura do sólido, não para esquentar: a temperatura fica em 0 °C até tudo derreter."],
]);
more(F, 2, 2, [
  ["Na transformação isovolumétrica de um gás, o trabalho é:", ["Máximo", "Zero", "Negativo sempre", "Igual ao calor"], 1, "Trabalho de gás = P·ΔV. Se o volume não muda (ΔV = 0), o trabalho é zero e todo o calor vira energia interna."],
  ["Uma máquina recebe 1000 J e realiza 300 J de trabalho. Qual é o rendimento?", ["3%", "30%", "70%", "300%"], 1, "η = útil/total = 300/1000 = 0,3 = 30%. Os 70% restantes saem como calor perdido."],
  ["Qual é a equação de estado dos gases ideais?", ["PV = nRT", "F = ma", "Q = mcΔT", "V = λf"], 0, "Equação de Clapeyron: PV = nRT (pressão, volume, mols, constante R e temperatura em kelvin)."],
]);
more(F, 2, 3, [
  ["O ângulo de incidência é igual ao de reflexão. Isso é:", ["Refração", "Lei da reflexão", "Difração", "Dispersão da luz"], 1, "É a 2ª lei da reflexão: i = r, medidos em relação à normal. Refração é a mudança de direção ao trocar de meio."],
  ["A luz muda de direção ao passar do ar para a água por causa da:", ["Reflexão", "Refração", "Difração", "Interferência"], 1, "Ao trocar de meio, a luz muda de velocidade e, se chega inclinada, desvia: refração. Por isso o canudo parece quebrado no copo."],
  ["Que tipo de lente corrige a miopia?", ["Convergente", "Divergente", "Cilíndrica", "Bifocal"], 1, "O olho míope forma a imagem antes da retina. A lente divergente \"abre\" os raios e empurra o foco para a retina. Hipermetropia usa convergente."],
]);
more(F, 2, 4, [
  ["Frequência é medida em:", ["Metros", "Hertz", "Segundos", "Decibéis"], 1, "Frequência é o número de oscilações por segundo, em hertz (Hz). Decibel mede intensidade sonora, não frequência."],
  ["Som mais agudo tem:", ["Menor frequência", "Maior frequência", "Maior amplitude", "Menor velocidade"], 1, "Altura do som depende da frequência: mais frequência, mais agudo. Amplitude muda o volume (intensidade), não a altura."],
  ["A luz é uma onda:", ["Mecânica e longitudinal", "Eletromagnética e transversal", "Mecânica e transversal", "Sonora e longitudinal"], 1, "A luz é eletromagnética (anda até no vácuo) e transversal (oscila perpendicular à propagação). O som é mecânico e longitudinal."],
]);
more(F, 3, 1, [
  ["Um corpo neutro que perde elétrons fica:", ["Negativo", "Positivo", "Neutro", "Magnético"], 1, "Neutro = prótons e elétrons iguais. Perdendo elétrons, sobram prótons: carga positiva. Prótons não saem do núcleo na eletrização."],
  ["Qual é a unidade de carga elétrica no SI?", ["Volt", "Ampère", "Coulomb", "Ohm"], 2, "Carga é medida em coulomb (C). Ampère é corrente (C/s), volt é tensão e ohm é resistência."],
  ["Eletrização por atrito deixa os corpos com cargas:", ["Iguais", "Opostas", "Nulas", "Sempre positivas"], 1, "No atrito, elétrons passam de um corpo para o outro: um fica negativo e o outro positivo, com cargas de mesmo valor e sinais opostos."],
]);
more(F, 3, 2, [
  ["Dois resistores de 4 Ω em série equivalem a:", ["2 Ω", "4 Ω", "8 Ω", "16 Ω"], 2, "Em série, as resistências somam: 4 + 4 = 8 Ω. A corrente é a mesma nos dois e a tensão se divide."],
  ["Dois resistores de 4 Ω em paralelo equivalem a:", ["2 Ω", "4 Ω", "8 Ω", "16 Ω"], 0, "Em paralelo, 1/Req = 1/4 + 1/4 = 1/2 → Req = 2 Ω. Atalho: n resistores iguais em paralelo dão R/n."],
  ["Uma lâmpada de 100 W ligada por 10 h consome:", ["10 kWh", "1 kWh", "100 kWh", "0,1 kWh"], 1, "E = P·t = 0,1 kW · 10 h = 1 kWh. O pulo do gato é converter 100 W em 0,1 kW antes de multiplicar."],
]);
more(F, 3, 3, [
  ["A agulha da bússola aponta para:", ["O sul geográfico", "O norte geográfico", "A linha do Equador", "Qualquer direção"], 1, "O polo norte da agulha aponta para perto do norte geográfico, porque ali fica um polo sul magnético da Terra (opostos se atraem)."],
  ["Uma corrente elétrica gera ao seu redor:", ["Campo gravitacional", "Campo magnético", "Luz", "Calor apenas"], 1, "Oersted viu a bússola desviar perto de um fio com corrente: toda corrente gera campo magnético. Isso é a base do eletroímã."],
  ["Transformadores funcionam com corrente:", ["Contínua", "Alternada", "Nula", "De pilha"], 1, "O transformador depende de fluxo magnético variável (indução de Faraday). Corrente contínua gera fluxo constante e não induz nada."],
]);
more(F, 3, 4, [
  ["Segundo a relatividade, nada com massa pode:", ["Ficar parado", "Atingir a velocidade da luz", "Ter energia cinética", "Sofrer aceleração"], 1, "Para um corpo com massa chegar à velocidade da luz (c), seria preciso energia infinita. Por isso c é o limite de velocidade."],
  ["Energia de um fóton é proporcional à:", ["Massa", "Frequência", "Amplitude", "Distância"], 1, "E = h·f: a energia do fóton cresce com a frequência. Por isso o ultravioleta queima e a luz vermelha não."],
  ["Qual radiação tem maior energia por fóton?", ["Ondas de rádio", "Luz visível", "Infravermelho", "Raios gama"], 3, "Energia cresce com a frequência (E = h·f). Em ordem: rádio < infravermelho < visível < ultravioleta < raios X < raios gama."],
]);

const Qm = QUIMICA;
more(Qm, 1, 1, [
  ["Como se chama a passagem direta do sólido para o gasoso?", ["Fusão", "Sublimação", "Condensação", "Solidificação"], 1, "Sublimação: sólido vira gás sem passar pelo líquido, como a naftalina e o gelo-seco. Fusão é sólido → líquido."],
  ["Qual destas é uma substância composta?", ["O₂", "H₂O", "Fe", "N₂"], 1, "Composta tem mais de um elemento: H₂O (hidrogênio e oxigênio). O₂, N₂ e Fe são substâncias simples (um elemento só)."],
  ["Qual método separa areia e água?", ["Destilação", "Filtração", "Evaporação", "Imantação"], 1, "Sólido insolúvel + líquido: filtração (o papel segura a areia). Evaporação perderia a água; destilação serve para líquidos misturados ou sal dissolvido."],
]);
more(Qm, 1, 2, [
  ["Átomo com 11 prótons e 12 nêutrons tem número de massa:", ["11", "12", "23", "1"], 2, "Número de massa A = prótons + nêutrons = 11 + 12 = 23. Elétrons quase não têm massa e não entram na conta."],
  ["Isótopos têm mesmo número de:", ["Nêutrons", "Prótons", "Massa", "Elétrons na valência sempre"], 1, "Isótopos são o mesmo elemento, então têm o mesmo número de prótons (Z), mas nêutrons diferentes. Ex.: carbono-12 e carbono-14."],
  ["Na tabela periódica, as colunas são chamadas de:", ["Períodos", "Famílias", "Camadas", "Séries"], 1, "Colunas (verticais) são famílias ou grupos, com propriedades parecidas. Linhas (horizontais) são períodos, que indicam o número de camadas."],
]);
more(Qm, 1, 3, [
  ["A água (H₂O) tem ligações:", ["Iônicas", "Covalentes", "Metálicas", "Nenhuma"], 1, "Hidrogênio e oxigênio são ametais: compartilham pares de elétrons, formando ligações covalentes. Iônica exige metal + ametal."],
  ["Metais conduzem eletricidade por causa:", ["Dos prótons livres", "Do mar de elétrons", "Dos nêutrons", "Das ligações iônicas"], 1, "Na ligação metálica, elétrons ficam livres num \"mar\" entre os cátions. Eles se movem fácil e carregam a corrente."],
  ["Qual destas moléculas é apolar?", ["H₂O", "NH₃", "CO₂", "HCl"], 2, "CO₂ é linear (O=C=O): as duas polaridades são iguais e opostas e se anulam. H₂O e NH₃ são angulares e polares."],
]);
more(Qm, 1, 4, [
  ["NaOH é:", ["Ácido", "Base", "Sal", "Óxido"], 1, "Hidróxido de sódio libera OH⁻ em água (NaOH → Na⁺ + OH⁻): é uma base forte, a soda cáustica."],
  ["CO₂ é classificado como:", ["Ácido", "Base", "Óxido", "Sal"], 2, "CO₂ é óxido (dois elementos, um deles o oxigênio). É um óxido ácido: com água forma ácido carbônico."],
  ["Chuva ácida é causada principalmente por:", ["O₂ e N₂", "SO₂ e NOₓ", "He e Ne", "H₂O e O₂"], 1, "SO₂ (da queima de carvão e diesel) e NOₓ (de motores) reagem com a água do ar e viram ácido sulfúrico e nítrico."],
]);
more(Qm, 2, 1, [
  ["Diluir 1 L de solução 2 mol/L até 4 L resulta em:", ["0,5 mol/L", "1 mol/L", "4 mol/L", "8 mol/L"], 0, "Na diluição o soluto não muda: C₁V₁ = C₂V₂ → 2·1 = C₂·4 → C₂ = 0,5 mol/L. Mais volume, menos concentrado."],
  ["Concentração em mol/L é:", ["Gramas de soluto por litro", "Mols de soluto por litro", "Mols de soluto por quilo", "Volume de soluto por volume"], 1, "Concentração molar = mols de soluto / volume da solução em litros. Gramas por litro é a concentração comum."],
  ["Solução saturada:", ["Não dissolve nenhum soluto", "Tem o máximo de soluto dissolvido", "É sempre uma mistura gasosa", "Tem pouco soluto dissolvido"], 1, "Saturada tem a quantidade máxima de soluto que dissolve naquela temperatura (coeficiente de solubilidade). Passou disso, o excesso fica no fundo."],
]);
more(Qm, 2, 2, [
  ["A combustão é uma reação:", ["Endotérmica", "Exotérmica", "Sem troca de calor", "Nuclear"], 1, "Toda combustão libera calor e luz: é exotérmica (ΔH < 0). É por isso que usamos combustíveis para obter energia."],
  ["Derreter gelo é um processo:", ["Exotérmico", "Endotérmico", "Nuclear", "Isotérmico sem calor"], 1, "Para derreter, o gelo precisa receber calor do ambiente: fusão é endotérmica. Por isso o gelo esfria a bebida."],
  ["Qual é a entalpia de formação de uma substância simples no estado padrão (ex.: O₂)?", ["Positiva", "Zero", "Negativa", "Infinita"], 1, "Por convenção, substâncias simples na forma mais estável e no estado padrão (25 °C, 1 atm) têm entalpia zero. É o ponto de referência."],
]);
more(Qm, 2, 3, [
  ["Carne na geladeira estraga mais devagar porque:", ["A pressão dentro dela aumenta", "O frio deixa as reações mais lentas", "Há mais oxigênio no ar frio", "O catalisador natural some"], 1, "Temperatura menor = partículas mais lentas = menos choques efetivos. As reações (e os micróbios) ficam mais lentos."],
  ["Comprimido triturado dissolve mais rápido por causa:", ["Da temperatura mais alta", "Da maior superfície de contato", "Da ação de um catalisador", "Do aumento da pressão"], 1, "Triturado, o comprimido expõe muito mais superfície ao líquido, então há mais choques ao mesmo tempo e a reação acelera."],
  ["Energia de ativação é:", ["A energia liberada no fim", "A energia mínima para começar", "A entalpia final dos produtos", "A energia gasta pelo catalisador"], 1, "É a energia mínima que os reagentes precisam para a reação começar (a \"barreira\"). O catalisador acelera porque diminui essa barreira."],
]);
more(Qm, 2, 4, [
  ["Uma solução com pH 10 é:", ["Ácida", "Neutra", "Básica", "Salina"], 2, "pH acima de 7 é básico (alcalino), com mais OH⁻ que H⁺. Sabão e água sanitária ficam nessa faixa."],
  ["Aumentar a pressão desloca o equilíbrio para o lado de:", ["Mais mols de gás", "Menos mols de gás", "Mais sólido", "Nenhum lado"], 1, "Princípio de Le Chatelier: o sistema reage contra a perturbação. Mais pressão favorece o lado com menos mols de gás, que ocupa menos volume."],
  ["A diferença de 1 no pH significa concentração de H⁺:", ["2 vezes", "10 vezes", "100 vezes", "Igual"], 1, "O pH é logarítmico: cada unidade a menos significa 10 vezes mais H⁺. pH 3 é 10 vezes mais ácido que pH 4 e 100 vezes mais que pH 5."],
]);
more(Qm, 3, 1, [
  ["Qual é a fórmula do metano?", ["CH₄", "C₂H₆", "CO₂", "C₆H₆"], 0, "Metano tem 1 carbono (\"met-\") e só ligações simples: CH₄. É o principal componente do gás natural e do biogás."],
  ["Como se chama o hidrocarboneto de cadeia aberta com uma ligação dupla?", ["Alcano", "Alceno", "Alcino", "Aromático sempre"], 1, "Alcano: só simples (-ano). Alceno: uma dupla (-eno), como o eteno. Alcino: uma tripla (-ino)."],
  ["Uma cadeia com anel benzênico é classificada como:", ["Alifática", "Aromática", "Aberta", "Saturada"], 1, "O anel benzênico (6 carbonos com duplas alternadas) define os compostos aromáticos. Cadeias sem ele são alifáticas."],
]);
more(Qm, 3, 2, [
  ["O etanol pertence à função:", ["Cetona", "Álcool", "Aldeído", "Éster"], 1, "Etanol (CH₃CH₂OH) tem –OH em carbono saturado: álcool. Aldeído e cetona têm a carbonila (C=O)."],
  ["A acetona é uma:", ["Cetona", "Amina", "Ácido", "Éter"], 0, "Acetona (propanona) tem a carbonila C=O entre dois carbonos, no meio da cadeia: é cetona. No fim da cadeia seria aldeído."],
  ["O grupo –NH₂ ligado a carbono caracteriza:", ["Amida", "Amina", "Álcool", "Nitrila"], 1, "Aminas derivam da amônia (NH₃) trocando H por carbono: –NH₂. A amida tem o N ligado a uma carbonila (–CONH₂)."],
]);
more(Qm, 3, 3, [
  ["Etanol e éter dimetílico (C₂H₆O) são isômeros de:", ["Cadeia", "Função", "Posição", "Óptica"], 1, "Mesma fórmula C₂H₆O, mas um é álcool e o outro é éter: funções diferentes → isomeria de função."],
  ["Isomeria cis-trans exige:", ["Carbono quiral com quatro ligantes", "Dupla com ligantes diferentes", "Anel benzênico na cadeia", "Oxigênio ligado ao carbono"], 1, "Isomeria geométrica: dupla ligação (que não gira) com dois ligantes diferentes em cada carbono da dupla. Carbono quiral leva à isomeria óptica."],
  ["Enantiômeros desviam a luz polarizada em sentidos:", ["Iguais", "Opostos", "Nenhum", "Aleatórios"], 1, "Enantiômeros são imagens no espelho: um desvia a luz polarizada para a direita (dextrogiro) e o outro, igual ângulo para a esquerda (levogiro)."],
]);
more(Qm, 3, 4, [
  ["Combustão completa de hidrocarboneto produz:", ["CO e H₂", "CO₂ e H₂O", "C e H₂O", "O₂ e CO₂"], 1, "Com oxigênio suficiente, todo carbono vira CO₂ e todo hidrogênio vira H₂O. Com pouco oxigênio (incompleta) aparecem CO e fuligem (C)."],
  ["Saponificação é a reação de:", ["Éster com base, formando sabão", "Ácido com álcool, formando éster", "Polimerização de monômeros", "Combustão de um hidrocarboneto"], 0, "Gordura (éster) + base forte (NaOH) → sabão (sal de ácido graxo) + glicerol. Ácido + álcool → éster é a esterificação."],
  ["Plástico PET é um:", ["Polímero", "Metal", "Sal", "Gás nobre"], 0, "PET (polietileno tereftalato) é um polímero do tipo poliéster, usado em garrafas. É reciclável e pode virar fibra de tecido."],
]);
