import { FISICA, MATEMATICA, QUIMICA } from "./exatas";
import { more } from "./more";

const M = MATEMATICA;
more(M, 1, 1, [
  ["Quantos elementos tem A ∪ B se A = {1, 2, 3} e B = {3, 4}?", ["3", "4", "5", "6"], 1, "União: {1, 2, 3, 4}. O 3 conta uma vez só."],
  ["Qual número é irracional?", ["0,25", "√9", "√2", "−3/4"], 2, "√2 não pode ser escrito como fração (dízima não periódica)."],
  ["O intervalo [−1, 3] contém quantos números inteiros?", ["3", "4", "5", "Infinitos"], 2, "−1, 0, 1, 2 e 3: cinco inteiros."],
]);
more(M, 1, 2, [
  ["Um táxi cobra R$ 5 fixos + R$ 2 por km. Quanto custa uma corrida de 10 km?", ["R$ 20", "R$ 25", "R$ 30", "R$ 50"], 1, "f(x) = 2x + 5 → f(10) = 25."],
  ["A função f(x) = −2x + 4 é:", ["Crescente", "Decrescente", "Constante", "Quadrática"], 1, "Coeficiente angular negativo (−2): decrescente."],
  ["Se f(x) = 3x + 1, quanto vale f(2)?", ["5", "6", "7", "9"], 2, "3·2 + 1 = 7."],
]);
more(M, 1, 3, [
  ["Raízes de x² − 5x + 6 = 0:", ["1 e 6", "2 e 3", "−2 e −3", "5 e 6"], 1, "Soma 5 e produto 6: raízes 2 e 3."],
  ["Se Δ < 0, a equação do 2º grau tem:", ["Duas raízes reais", "Uma raiz real", "Nenhuma raiz real", "Infinitas raízes"], 2, "Delta negativo: a parábola não corta o eixo x."],
  ["Em f(x) = −x² + 4, o vértice é ponto de:", ["Mínimo", "Máximo", "Inflexão", "Raiz"], 1, "a < 0: concavidade para baixo, vértice é máximo."],
]);
more(M, 1, 4, [
  ["Solução de 2ˣ = 16:", ["2", "4", "8", "16"], 1, "2⁴ = 16."],
  ["log 1000 (base 10) vale:", ["2", "3", "10", "100"], 1, "10³ = 1000."],
  ["Uma população dobra a cada ano. Começando com 100, depois de 3 anos terá:", ["300", "600", "800", "900"], 2, "100 · 2³ = 800 (crescimento exponencial)."],
]);
more(M, 2, 1, [
  ["cos 60° vale:", ["1/2", "√2/2", "√3/2", "0"], 0, "cos 60° = 1/2 (igual a sen 30°)."],
  ["Quanto é 180° em radianos?", ["π/2", "π", "2π", "3π/2"], 1, "180° = π rad."],
  ["Relação fundamental da trigonometria:", ["sen x + cos x = 1", "sen² x + cos² x = 1", "tg x = cos x/sen x", "sen x · cos x = 1"], 1, "sen² x + cos² x = 1 para qualquer ângulo."],
]);
more(M, 2, 2, [
  ["Soma dos 10 primeiros termos da PA 1, 2, 3, …:", ["45", "50", "55", "100"], 2, "Sₙ = (a₁ + aₙ)·n/2 = (1 + 10)·10/2 = 55."],
  ["Na PG 2, 6, 18, …, a razão é:", ["2", "3", "4", "6"], 1, "6/2 = 3."],
  ["O 5º termo da PG 1, 2, 4, …:", ["8", "10", "16", "32"], 2, "a₅ = 1 · 2⁴ = 16."],
]);
more(M, 2, 3, [
  ["Uma matriz 2×3 tem quantos elementos?", ["5", "6", "8", "9"], 1, "2 linhas × 3 colunas = 6."],
  ["Resolva: x + y = 5 e x − y = 1.", ["x = 2, y = 3", "x = 3, y = 2", "x = 4, y = 1", "x = 1, y = 4"], 1, "Somando: 2x = 6 → x = 3; logo y = 2."],
  ["Para multiplicar A (2×3) por B, B precisa ter:", ["2 linhas", "3 linhas", "3 colunas", "2 colunas"], 1, "O número de colunas de A deve ser igual ao de linhas de B."],
]);
more(M, 2, 4, [
  ["Quantas senhas de 3 dígitos (0–9) podem ser formadas, com repetição?", ["30", "720", "999", "1000"], 3, "10 · 10 · 10 = 1000."],
  ["De quantas formas escolher 2 pessoas de um grupo de 4 (ordem não importa)?", ["4", "6", "8", "12"], 1, "C(4,2) = 4!/(2!·2!) = 6."],
  ["Probabilidade de tirar cara em duas moedas seguidas:", ["1/2", "1/3", "1/4", "1"], 2, "1/2 · 1/2 = 1/4."],
]);
more(M, 3, 1, [
  ["Área de um triângulo de base 10 e altura 6:", ["16", "30", "60", "36"], 1, "A = b·h/2 = 10·6/2 = 30."],
  ["Soma dos ângulos internos de um triângulo:", ["90°", "180°", "270°", "360°"], 1, "Sempre 180°."],
  ["Volume de um cilindro de raio 2 e altura 5 (use π):", ["10π", "20π", "25π", "40π"], 1, "V = π·r²·h = π·4·5 = 20π."],
]);
more(M, 3, 2, [
  ["Ponto médio entre (2, 4) e (6, 8):", ["(3, 5)", "(4, 6)", "(8, 12)", "(4, 4)"], 1, "Média das coordenadas: ((2+6)/2, (4+8)/2)."],
  ["A reta y = 2x + 3 corta o eixo y em:", ["(0, 2)", "(0, 3)", "(3, 0)", "(2, 0)"], 1, "Quando x = 0, y = 3."],
  ["Equação da circunferência de centro (0, 0) e raio 5:", ["x² + y² = 5", "x² + y² = 25", "x + y = 5", "x² − y² = 25"], 1, "(x − a)² + (y − b)² = r² → x² + y² = 25."],
]);
more(M, 3, 3, [
  ["Mediana de 3, 9, 1, 7, 5:", ["3", "5", "7", "9"], 1, "Ordenando: 1, 3, 5, 7, 9 → o do meio é 5."],
  ["R$ 1000 a juros simples de 10% ao mês, por 3 meses, rendem:", ["R$ 100", "R$ 300", "R$ 331", "R$ 1300"], 1, "J = C·i·t = 1000·0,1·3 = 300."],
  ["Moda de 2, 3, 3, 5, 7:", ["2", "3", "4", "5"], 1, "O valor que mais aparece é 3."],
]);
more(M, 3, 4, [
  ["(2 + 3i) + (1 − i) =", ["3 + 2i", "3 + 4i", "1 + 2i", "2 − 3i"], 0, "Soma parte real com real e imaginária com imaginária."],
  ["Grau do polinômio 4x³ − x + 7:", ["1", "3", "4", "7"], 1, "Maior expoente de x: 3."],
  ["Se P(x) = x² − 4, P(2) vale:", ["0", "2", "4", "−4"], 0, "4 − 4 = 0, então 2 é raiz."],
]);

const F = FISICA;
more(F, 1, 1, [
  ["Um corpo parte do repouso com aceleração de 2 m/s². Velocidade após 5 s:", ["2 m/s", "7 m/s", "10 m/s", "25 m/s"], 2, "v = v₀ + a·t = 0 + 2·5 = 10 m/s."],
  ["No movimento uniforme, a velocidade é:", ["Variável", "Constante", "Sempre zero", "Crescente"], 1, "MU: velocidade constante, aceleração zero."],
  ["Um objeto em queda livre (g = 10 m/s²) após 3 s tem velocidade de:", ["10 m/s", "15 m/s", "30 m/s", "45 m/s"], 2, "v = g·t = 10·3 = 30 m/s."],
]);
more(F, 1, 2, [
  ["Peso de uma pessoa de 60 kg (g = 10 m/s²):", ["6 N", "60 N", "600 N", "6000 N"], 2, "P = m·g = 600 N."],
  ["Ao frear o ônibus, o passageiro vai para frente por causa:", ["Da 3ª lei de Newton", "Da inércia", "Da força peso", "Do atrito no piso"], 1, "O corpo tende a manter o movimento: inércia."],
  ["A força de atrito sempre:", ["Ajuda o corpo a se mover", "Se opõe ao deslizamento", "É vertical, como o peso", "É igual ao peso do corpo"], 1, "Atrito se opõe ao movimento (ou à tendência de movimento) relativo."],
]);
more(F, 1, 3, [
  ["Trabalho de uma força de 10 N ao deslocar um objeto 5 m na mesma direção:", ["2 J", "15 J", "50 J", "500 J"], 2, "τ = F·d = 10·5 = 50 J."],
  ["Potência é:", ["Força × distância", "Trabalho / tempo", "Massa × velocidade", "Energia × tempo"], 1, "P = τ/Δt, medida em watts."],
  ["Um objeto de 1 kg a 20 m de altura (g = 10) tem energia potencial de:", ["20 J", "100 J", "200 J", "2000 J"], 2, "Ep = m·g·h = 1·10·20 = 200 J."],
]);
more(F, 1, 4, [
  ["Impulso de uma força de 20 N aplicada por 3 s:", ["6,7 N·s", "23 N·s", "60 N·s", "17 N·s"], 2, "I = F·Δt = 60 N·s."],
  ["Se a distância entre dois corpos dobra, a força gravitacional:", ["Dobra", "Cai pela metade", "Cai para 1/4", "Não muda"], 2, "F é proporcional a 1/d²."],
  ["Na Lua, sua massa:", ["Diminui para 1/6", "Continua a mesma", "Vira zero", "Aumenta um pouco"], 1, "Massa não muda; o que muda é o peso."],
]);
more(F, 2, 1, [
  ["Calor é:", ["Temperatura alta de um corpo", "Energia térmica em trânsito", "Sinônimo de temperatura", "Uma substância que flui"], 1, "Calor flui do mais quente para o mais frio."],
  ["Para aquecer 100 g de água (c = 1 cal/g°C) em 10 °C são necessárias:", ["10 cal", "100 cal", "1000 cal", "110 cal"], 2, "Q = m·c·ΔT = 100·1·10 = 1000 cal."],
  ["Durante a fusão do gelo a 0 °C, a temperatura:", ["Sobe aos poucos", "Cai abaixo de zero", "Fica constante", "Oscila sem parar"], 2, "Na mudança de estado, o calor latente muda o estado, não a temperatura."],
]);
more(F, 2, 2, [
  ["Na transformação isovolumétrica de um gás, o trabalho é:", ["Máximo", "Zero", "Negativo sempre", "Igual ao calor"], 1, "Sem variação de volume, não há trabalho."],
  ["Uma máquina recebe 1000 J e realiza 300 J de trabalho. Rendimento:", ["3%", "30%", "70%", "300%"], 1, "η = 300/1000 = 30%."],
  ["Lei geral dos gases ideais:", ["PV = nRT", "F = ma", "Q = mcΔT", "V = λf"], 0, "Equação de Clapeyron."],
]);
more(F, 2, 3, [
  ["O ângulo de incidência é igual ao de reflexão. Isso é:", ["Refração", "Lei da reflexão", "Difração", "Dispersão da luz"], 1, "Na reflexão, i = r."],
  ["A luz muda de direção ao passar do ar para a água por causa da:", ["Reflexão", "Refração", "Difração", "Interferência"], 1, "Muda de velocidade ao trocar de meio: refração."],
  ["Lente que corrige miopia:", ["Convergente", "Divergente", "Cilíndrica", "Bifocal"], 1, "Míope foca antes da retina; lente divergente corrige."],
]);
more(F, 2, 4, [
  ["Frequência é medida em:", ["Metros", "Hertz", "Segundos", "Decibéis"], 1, "Hz = oscilações por segundo."],
  ["Som mais agudo tem:", ["Menor frequência", "Maior frequência", "Maior amplitude", "Menor velocidade"], 1, "Altura do som depende da frequência."],
  ["A luz é uma onda:", ["Mecânica e longitudinal", "Eletromagnética e transversal", "Mecânica e transversal", "Sonora e longitudinal"], 1, "Eletromagnética e transversal."],
]);
more(F, 3, 1, [
  ["Um corpo neutro que perde elétrons fica:", ["Negativo", "Positivo", "Neutro", "Magnético"], 1, "Menos elétrons → excesso de prótons → positivo."],
  ["Unidade de carga elétrica no SI:", ["Volt", "Ampère", "Coulomb", "Ohm"], 2, "Coulomb (C)."],
  ["Eletrização por atrito deixa os corpos com cargas:", ["Iguais", "Opostas", "Nulas", "Sempre positivas"], 1, "Um ganha e outro perde elétrons."],
]);
more(F, 3, 2, [
  ["Dois resistores de 4 Ω em série equivalem a:", ["2 Ω", "4 Ω", "8 Ω", "16 Ω"], 2, "Em série, soma: 8 Ω."],
  ["Dois resistores de 4 Ω em paralelo equivalem a:", ["2 Ω", "4 Ω", "8 Ω", "16 Ω"], 0, "Dois iguais em paralelo: R/2 = 2 Ω."],
  ["Lâmpada de 100 W ligada por 10 h consome:", ["10 kWh", "1 kWh", "100 kWh", "0,1 kWh"], 1, "E = 0,1 kW · 10 h = 1 kWh."],
]);
more(F, 3, 3, [
  ["A agulha da bússola aponta para:", ["O sul geográfico", "O norte geográfico", "A linha do Equador", "Qualquer direção"], 1, "O norte da agulha aponta o norte geográfico, onde fica um polo sul magnético."],
  ["Uma corrente elétrica gera ao seu redor:", ["Campo gravitacional", "Campo magnético", "Luz", "Calor apenas"], 1, "Experimento de Oersted."],
  ["Transformadores funcionam com corrente:", ["Contínua", "Alternada", "Nula", "De pilha"], 1, "Precisam de variação de fluxo magnético: corrente alternada."],
]);
more(F, 3, 4, [
  ["Segundo a relatividade, nada com massa pode:", ["Ficar parado", "Atingir a velocidade da luz", "Ter energia cinética", "Sofrer aceleração"], 1, "c é o limite de velocidade."],
  ["Energia de um fóton é proporcional à:", ["Massa", "Frequência", "Amplitude", "Distância"], 1, "E = h·f."],
  ["Radiação com maior energia por fóton:", ["Ondas de rádio", "Luz visível", "Infravermelho", "Raios gama"], 3, "Maior frequência → maior energia."],
]);

const Qm = QUIMICA;
more(Qm, 1, 1, [
  ["Mudança de sólido direto para gasoso:", ["Fusão", "Sublimação", "Condensação", "Solidificação"], 1, "Ex.: naftalina, gelo-seco."],
  ["Substância composta:", ["O₂", "H₂O", "Fe", "N₂"], 1, "Formada por mais de um elemento."],
  ["Método para separar areia e água:", ["Destilação", "Filtração", "Evaporação", "Imantação"], 1, "Sólido insolúvel + líquido: filtração."],
]);
more(Qm, 1, 2, [
  ["Átomo com 11 prótons e 12 nêutrons tem número de massa:", ["11", "12", "23", "1"], 2, "A = Z + N = 23."],
  ["Isótopos têm mesmo número de:", ["Nêutrons", "Prótons", "Massa", "Elétrons na valência sempre"], 1, "Mesmo elemento: mesmo Z."],
  ["Na tabela periódica, as colunas são chamadas de:", ["Períodos", "Famílias", "Camadas", "Séries"], 1, "Linhas = períodos; colunas = famílias."],
]);
more(Qm, 1, 3, [
  ["A água (H₂O) tem ligações:", ["Iônicas", "Covalentes", "Metálicas", "Nenhuma"], 1, "Ametal com ametal compartilham elétrons."],
  ["Metais conduzem eletricidade por causa:", ["Dos prótons livres", "Do mar de elétrons", "Dos nêutrons", "Das ligações iônicas"], 1, "Elétrons livres na ligação metálica."],
  ["Molécula apolar:", ["H₂O", "NH₃", "CO₂", "HCl"], 2, "CO₂ é linear e simétrica: os vetores se anulam."],
]);
more(Qm, 1, 4, [
  ["NaOH é:", ["Ácido", "Base", "Sal", "Óxido"], 1, "Libera OH⁻ em água."],
  ["CO₂ é classificado como:", ["Ácido", "Base", "Óxido", "Sal"], 2, "Composto binário com oxigênio: óxido (ácido)."],
  ["Chuva ácida é causada principalmente por:", ["O₂ e N₂", "SO₂ e NOₓ", "He e Ne", "H₂O e O₂"], 1, "Óxidos de enxofre e nitrogênio formam ácidos na atmosfera."],
]);
more(Qm, 2, 1, [
  ["Diluir 1 L de solução 2 mol/L até 4 L resulta em:", ["0,5 mol/L", "1 mol/L", "4 mol/L", "8 mol/L"], 0, "C₁V₁ = C₂V₂ → 2·1 = C₂·4 → 0,5 mol/L."],
  ["Concentração em mol/L é:", ["Gramas de soluto por litro", "Mols de soluto por litro", "Mols de soluto por quilo", "Volume de soluto por volume"], 1, "Molaridade = n/V(L)."],
  ["Solução saturada:", ["Não dissolve nenhum soluto", "Tem o máximo de soluto dissolvido", "É sempre uma mistura gasosa", "Tem pouco soluto dissolvido"], 1, "Atingiu o coeficiente de solubilidade."],
]);
more(Qm, 2, 2, [
  ["A combustão é uma reação:", ["Endotérmica", "Exotérmica", "Sem troca de calor", "Nuclear"], 1, "Libera calor (ΔH < 0)."],
  ["Derreter gelo é um processo:", ["Exotérmico", "Endotérmico", "Nuclear", "Isotérmico sem calor"], 1, "Absorve calor do ambiente."],
  ["Entalpia de formação de substâncias simples no estado padrão (ex.: O₂):", ["Positiva", "Zero", "Negativa", "Infinita"], 1, "Por convenção, vale zero."],
]);
more(Qm, 2, 3, [
  ["Carne na geladeira estraga mais devagar porque:", ["A pressão dentro dela aumenta", "O frio deixa as reações mais lentas", "Há mais oxigênio no ar frio", "O catalisador natural some"], 1, "Menor temperatura, reações mais lentas."],
  ["Comprimido triturado dissolve mais rápido por causa:", ["Da temperatura mais alta", "Da maior superfície de contato", "Da ação de um catalisador", "Do aumento da pressão"], 1, "Mais superfície exposta, mais choques."],
  ["Energia de ativação é:", ["A energia liberada no fim", "A energia mínima para começar", "A entalpia final dos produtos", "A energia gasta pelo catalisador"], 1, "É a barreira a ser vencida."],
]);
more(Qm, 2, 4, [
  ["Solução com pH 10 é:", ["Ácida", "Neutra", "Básica", "Salina"], 2, "pH > 7: básica."],
  ["Aumentar a pressão desloca o equilíbrio para o lado de:", ["Mais mols de gás", "Menos mols de gás", "Mais sólido", "Nenhum lado"], 1, "Le Chatelier: diminui a perturbação."],
  ["A diferença de 1 no pH significa concentração de H⁺:", ["2 vezes", "10 vezes", "100 vezes", "Igual"], 1, "Escala logarítmica: cada ponto é 10 vezes."],
]);
more(Qm, 3, 1, [
  ["Fórmula do metano:", ["CH₄", "C₂H₆", "CO₂", "C₆H₆"], 0, "Um carbono e quatro hidrogênios."],
  ["Hidrocarboneto com ligação dupla:", ["Alcano", "Alceno", "Alcino", "Aromático sempre"], 1, "Alceno: uma dupla (ex.: eteno)."],
  ["Cadeia com anel benzênico é:", ["Alifática", "Aromática", "Aberta", "Saturada"], 1, "Benzeno caracteriza compostos aromáticos."],
]);
more(Qm, 3, 2, [
  ["O etanol pertence à função:", ["Cetona", "Álcool", "Aldeído", "Éster"], 1, "Tem –OH em carbono saturado."],
  ["A acetona é uma:", ["Cetona", "Amina", "Ácido", "Éter"], 0, "Carbonila no meio da cadeia."],
  ["Grupo –NH₂ caracteriza:", ["Amida", "Amina", "Álcool", "Nitrila"], 1, "Aminas derivam da amônia."],
]);
more(Qm, 3, 3, [
  ["Etanol e éter dimetílico (C₂H₆O) são isômeros de:", ["Cadeia", "Função", "Posição", "Óptica"], 1, "Mesma fórmula molecular, funções diferentes."],
  ["Isomeria cis-trans exige:", ["Carbono quiral com quatro ligantes", "Dupla com ligantes diferentes", "Anel benzênico na cadeia", "Oxigênio ligado ao carbono"], 1, "Isomeria geométrica."],
  ["Enantiômeros desviam a luz polarizada em sentidos:", ["Iguais", "Opostos", "Nenhum", "Aleatórios"], 1, "Dextrogiro e levogiro."],
]);
more(Qm, 3, 4, [
  ["Combustão completa de hidrocarboneto produz:", ["CO e H₂", "CO₂ e H₂O", "C e H₂O", "O₂ e CO₂"], 1, "Com oxigênio suficiente: gás carbônico e água."],
  ["Saponificação é a reação de:", ["Éster com base, formando sabão", "Ácido com álcool, formando éster", "Polimerização de monômeros", "Combustão de um hidrocarboneto"], 0, "Gordura + base forte → sabão + glicerol."],
  ["Plástico PET é um:", ["Polímero", "Metal", "Sal", "Gás nobre"], 0, "Poliéster usado em garrafas."],
]);
