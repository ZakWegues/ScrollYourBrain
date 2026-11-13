import { FISICA as F } from "./exatas";
import { c, f, pack, q } from "./pack";

pack(F, "cinematica", 1, 1, "Movimento uniforme", [
  q("No movimento uniforme (MU), a velocidade é:", ["Variável a cada instante", "Constante e não nula", "Sempre igual a zero", "Crescente com o tempo"], 1, "MU: percorre distâncias iguais em tempos iguais."),
  q("Um ônibus a 60 km/h leva quanto tempo para percorrer 150 km?", ["2 h", "2 h 30 min", "3 h", "1 h 30 min"], 1, "t = d/v = 150/60 = 2,5 h = 2 h 30 min."),
  q("Dois carros partem um em direção ao outro, a 40 km/h e 60 km/h, separados por 200 km. Em quanto tempo se encontram?", ["1 h", "2 h", "4 h", "5 h"], 1, "Velocidade relativa = 40 + 60 = 100 km/h. 200/100 = 2 h."),
  q("O gráfico s × t de um MU é:", ["Uma parábola", "Uma reta inclinada", "Uma reta horizontal", "Uma hipérbole"], 1, "s = s₀ + vt é uma função afim: reta."),
  q("Velocidade média de quem faz 100 km a 50 km/h e outros 100 km a 100 km/h:", ["75 km/h", "66,7 km/h", "80 km/h", "72,5 km/h"], 1, "Tempo total = 2 h + 1 h = 3 h para 200 km: 200/3 ≈ 66,7 km/h. Não é a média simples!"),
  q("Em um gráfico v × t, a área sob a curva representa:", ["A aceleração", "O deslocamento", "A força resultante", "O tempo"], 1, "Área do gráfico v × t = deslocamento."),
  f("Função horária do MU", "s = s₀ + v·t", "s₀ = posição inicial; v = velocidade (com sinal)."),
  f("Velocidade relativa", "Mesmo sentido: subtrai. Sentidos opostos: soma."),
  c(["Velocidade média = distância total ÷ tempo total.", "Nunca faça média das velocidades direto.", "Some os tempos de cada trecho.", "Depois divida a distância total por eles."], "Pegadinha clássica do ENEM: média de velocidades."),
]);

pack(F, "cinematica", 1, 1, "Queda livre e lançamentos", [
  q("Um objeto cai do repouso. Com g = 10 m/s², qual a velocidade após 3 s?", ["10 m/s", "20 m/s", "30 m/s", "45 m/s"], 2, "v = g·t = 10·3 = 30 m/s."),
  q("Quanto um corpo cai em 2 s a partir do repouso (g = 10 m/s²)?", ["10 m", "20 m", "40 m", "5 m"], 1, "h = g·t²/2 = 10·4/2 = 20 m."),
  q("Sem resistência do ar, uma pedra e uma pena soltas juntas:", ["A pedra chega antes", "A pena chega antes", "Chegam juntas", "Depende da altura"], 2, "No vácuo, todos caem com a mesma aceleração g."),
  q("No ponto mais alto de um lançamento vertical, a velocidade é:", ["Máxima", "Zero", "Igual a g", "Igual à inicial"], 1, "Ela para de subir e começa a descer: v = 0 (mas a aceleração continua g)."),
  q("Lançado para cima a 20 m/s (g = 10), quanto tempo leva para atingir a altura máxima?", ["1 s", "2 s", "4 s", "20 s"], 1, "t = v₀/g = 20/10 = 2 s."),
  q("No lançamento oblíquo (sem ar), a componente horizontal da velocidade:", ["Aumenta até o ponto mais alto", "Diminui até o ponto mais alto", "Fica constante", "Vale zero no ponto mais alto"], 2, "Na horizontal não há aceleração: MU."),
  f("Equação de Torricelli", "v² = v₀² + 2·a·Δs", "Útil quando o tempo não aparece no problema."),
  f("Alcance máximo no lançamento oblíquo", "Ocorre com ângulo de 45° (sem resistência do ar)."),
  c(["Queda livre é um MUV com a = g.", "g ≈ 10 m/s² perto da Terra.", "v = g·t e h = g·t²/2.", "Massa não importa no vácuo."], "Galileu: sem ar, o martelo e a pena caem juntos (testado na Lua!)."),
]);

pack(F, "dinamica", 1, 2, "Atrito e plano inclinado", [
  q("Qual a força resultante sobre um corpo de 4 kg com aceleração de 3 m/s²?", ["7 N", "12 N", "1,3 N", "0,75 N"], 1, "F = m·a = 4·3 = 12 N."),
  q("O peso de uma pessoa de 70 kg (g = 10 m/s²) é:", ["70 N", "7 N", "700 N", "7.000 N"], 2, "P = m·g = 700 N. Massa (kg) e peso (N) são coisas diferentes."),
  q("A força de atrito estático máxima depende de:", ["Só da área de contato entre as superfícies", "Do coeficiente de atrito e da normal", "Da velocidade com que o corpo se move", "Da cor e da temperatura da superfície"], 1, "Fat = μ·N (praticamente não depende da área)."),
  q("Um bloco de 10 kg sobre o chão horizontal com μ = 0,3. Atrito máximo (g = 10)?", ["3 N", "30 N", "300 N", "13 N"], 1, "N = 100 N. Fat = 0,3·100 = 30 N."),
  q("Por que é mais fácil manter um móvel arrastando do que começar a mover?", ["O atrito cinético é menor que o estático", "A massa do móvel diminui com o movimento", "O peso do móvel deixa de agir no chão", "A força normal aumenta quando ele desliza"], 0, "μ cinético < μ estático."),
  q("No plano inclinado sem atrito, a aceleração do bloco é:", ["g", "g·sen θ", "g·cos θ", "Zero"], 1, "Só a componente do peso paralela ao plano acelera: P·sen θ."),
  f("Terceira lei de Newton", "Ação e reação: forças de mesmo módulo e direção, sentidos opostos, em corpos diferentes."),
  f("Força normal", "Força que a superfície faz no corpo, perpendicular a ela. No plano horizontal sem outras forças verticais, N = P."),
  c(["1ª lei: sem força resultante, mantém o estado (inércia).", "2ª lei: F = m·a.", "3ª lei: ação e reação.", "Cinto de segurança é inércia na prática."], "Desenhe todas as forças antes de fazer qualquer conta."),
]);

pack(F, "dinamica", 1, 4, "Gravitação universal", [
  q("Se a distância entre dois corpos dobra, a força gravitacional:", ["Dobra", "Cai pela metade", "Fica 4 vezes menor", "Fica 4 vezes maior"], 2, "F ∝ 1/d²: dobrar d divide F por 4."),
  q("Os astronautas na Estação Espacial \"flutuam\" porque:", ["Lá não existe gravidade nenhuma", "Estão em queda livre em órbita", "A estação tem um campo magnético forte", "O ar dentro da estação os segura"], 1, "A gravidade lá ainda é ~90% da superfície; eles caem junto com a estação."),
  q("A 2ª lei de Kepler diz que o planeta:", ["Anda com velocidade sempre constante", "Varre áreas iguais em tempos iguais", "Tem órbita perfeitamente circular", "Fica parado no periélio por um instante"], 1, "Por isso é mais rápido perto do Sol (periélio)."),
  q("As órbitas dos planetas, segundo Kepler, são:", ["Círculos perfeitos com o Sol no centro", "Elipses com o Sol num dos focos", "Espirais que se afastam do Sol", "Retas que se curvam perto do Sol"], 1, "1ª lei de Kepler."),
  q("O peso de uma pessoa na Lua (g ≈ 1,6 m/s²) comparado à Terra:", ["Igual", "Cerca de 1/6", "6 vezes maior", "Zero"], 1, "A massa é a mesma; o peso cai para ~1/6."),
  q("As marés são causadas principalmente:", ["Pelos ventos fortes sobre o oceano", "Pela gravidade da Lua e do Sol", "Pela rotação do Sol em torno do eixo", "Por terremotos no fundo do mar"], 1, "A Lua puxa a água de forma diferente em cada lado da Terra."),
  f("Lei da Gravitação Universal", "F = G·M·m / d²"),
  f("3ª lei de Kepler", "T²/R³ é constante para os planetas do mesmo sistema: quanto mais longe, mais longo o ano."),
  c(["Toda massa atrai toda massa.", "A força cresce com as massas.", "E cai com o quadrado da distância.", "Órbita = queda livre que nunca chega ao chão."], "A mesma lei explica a maçã e a Lua."),
]);

pack(F, "energia", 1, 3, "Conservação da energia", [
  q("Um corpo cai de 5 m de altura (sem atrito, g = 10). Com que velocidade chega ao chão?", ["5 m/s", "10 m/s", "50 m/s", "100 m/s"], 1, "mgh = mv²/2 → v = √(2gh) = √100 = 10 m/s."),
  q("Numa montanha-russa sem atrito, no ponto mais baixo a energia cinética é:", ["Mínima", "Máxima", "Zero", "Igual à potencial do ponto"], 1, "A potencial virou cinética: velocidade máxima embaixo."),
  q("Numa usina hidrelétrica, a transformação principal é:", ["Química em elétrica", "Potencial em cinética e elétrica", "Nuclear em térmica e elétrica", "Luminosa em elétrica"], 1, "A água cai, gira a turbina, e o gerador produz eletricidade."),
  q("Quando há atrito, a energia mecânica:", ["Aumenta", "Se conserva", "Diminui", "Some do universo"], 2, "A energia total se conserva, mas parte vira térmica (dissipada)."),
  q("Energia cinética de um carro de 1.000 kg a 20 m/s:", ["20 kJ", "200 kJ", "400 kJ", "10 kJ"], 1, "Ec = 1.000·400/2 = 200.000 J = 200 kJ."),
  q("Se a velocidade de um carro dobra, sua energia cinética:", ["Dobra", "Triplica", "Quadruplica", "Não muda"], 2, "Ec ∝ v². Por isso a distância de frenagem cresce tanto."),
  f("Energia mecânica", "Em = Ec + Ep. Sem atrito, ela se conserva."),
  f("Trabalho de uma força constante", "τ = F·d·cos θ. Força perpendicular ao movimento não realiza trabalho."),
  c(["Energia não se cria nem se destrói.", "Ela muda de forma: potencial, cinética, térmica…", "Atrito transforma em calor.", "No ENEM: siga a cadeia de transformações."], "Barragem: altura vira velocidade, que vira eletricidade."),
]);

pack(F, "energia", 1, 3, "Potência e rendimento", [
  q("Um motor recebe 1.000 W e entrega 800 W de potência útil. Rendimento?", ["20%", "80%", "125%", "8%"], 1, "η = útil/total = 800/1.000 = 80%."),
  q("Uma lâmpada de LED de 10 W substitui uma incandescente de 60 W. A economia é de:", ["50%", "60%", "83%", "17%"], 2, "Economia de 50 W sobre 60 W ≈ 83%."),
  q("Unidade de potência no SI:", ["Joule", "Watt", "Newton", "Volt"], 1, "1 W = 1 J/s."),
  q("Subir uma escada de 3 m com 600 N de peso em 6 s exige potência de:", ["100 W", "300 W", "1.800 W", "200 W"], 1, "τ = 600·3 = 1.800 J. P = 1.800/6 = 300 W."),
  q("Por que nenhum motor tem rendimento de 100%?", ["Falta combustível no fim do ciclo", "Sempre há perdas, como calor", "A lei de trânsito limita a potência", "A potência útil não pode ser medida"], 1, "Parte da energia sempre se dissipa."),
  q("1 cavalo-vapor (cv) equivale aproximadamente a:", ["75 W", "735 W", "1.000 W", "10 W"], 1, "1 cv ≈ 735 W."),
  f("Potência média", "P = τ / Δt = energia ÷ tempo"),
  f("Rendimento", "η = potência útil / potência total (sempre < 1)"),
  c(["Potência é rapidez para transferir energia.", "Mesma escada, menos tempo → mais potência.", "Rendimento mede o desperdício.", "LED: mesma luz, menos calor."], "Etiqueta do Procel A = maior rendimento."),
]);

pack(F, "termologia", 2, 1, "Calorimetria", [
  q("Quanto calor é preciso para aquecer 200 g de água de 20 °C a 70 °C? (c = 1 cal/g°C)", ["1.000 cal", "4.000 cal", "10.000 cal", "14.000 cal"], 2, "Q = m·c·ΔT = 200·1·50 = 10.000 cal."),
  q("Calor sensível provoca:", ["Mudança de estado", "Variação de temperatura", "Variação de massa", "Variação de volume apenas"], 1, "Sensível muda a temperatura; latente muda o estado."),
  q("Durante a fusão do gelo a 0 °C (pressão normal), a temperatura:", ["Sobe aos poucos", "Desce até −4 °C", "Fica constante", "Oscila sem parar"], 2, "O calor é usado para romper ligações: calor latente."),
  q("A areia da praia esquenta mais rápido que o mar porque:", ["Tem calor específico menor", "Tem calor específico maior", "É mais densa", "Reflete mais luz"], 0, "Menor calor específico → precisa de menos energia para variar a temperatura."),
  q("Misturando 100 g de água a 80 °C com 100 g a 20 °C, a temperatura final é:", ["40 °C", "50 °C", "60 °C", "100 °C"], 1, "Massas iguais da mesma substância: média simples, 50 °C."),
  q("Calor é:", ["A temperatura de um corpo", "Energia térmica em trânsito", "O mesmo que frio", "Uma substância"], 1, "Calor flui do mais quente para o mais frio."),
  f("Equação fundamental da calorimetria", "Q = m·c·ΔT (o famoso \"que macete\")"),
  f("Calor latente", "Q = m·L. Usado nas mudanças de estado, com temperatura constante."),
  c(["Temperatura mede agitação das partículas.", "Calor é energia passando de um corpo a outro.", "Equilíbrio térmico: tudo na mesma temperatura.", "Em sistema isolado: soma dos calores = 0."], "A água tem calor específico alto: segura a temperatura do planeta."),
]);

pack(F, "termologia", 2, 1, "Dilatação e transmissão de calor", [
  q("Trilhos de trem têm pequenos espaços entre si para:", ["Economizar ferro na obra", "Permitir a dilatação", "Fazer o barulho do trem", "Escoar a água da chuva"], 1, "Sem as juntas, o aço dilatado entortaria."),
  q("Um cobertor nos mantém aquecidos porque:", ["Produz calor por conta própria", "É isolante e segura nosso calor", "Absorve o frio do ambiente", "Esquenta o ar do quarto"], 1, "O cobertor não produz calor; ele isola."),
  q("O calor do Sol chega à Terra por:", ["Condução", "Convecção", "Irradiação", "Dilatação"], 2, "No vácuo, só a radiação eletromagnética propaga calor."),
  q("O ar-condicionado deve ficar no alto da parede porque:", ["O ar frio é mais denso e desce", "O ar frio é mais leve e sobe", "O aparelho fica mais bonito no alto", "Evita a poeira que fica no chão"], 0, "Correntes de convecção: frio desce, quente sobe."),
  q("A água tem comportamento anômalo: entre 0 °C e 4 °C, ao ser aquecida ela:", ["Dilata", "Contrai", "Evapora", "Não muda"], 1, "Por isso lagos congelam só na superfície e a vida continua embaixo."),
  q("Uma panela com cabo de madeira: a madeira é usada porque é:", ["Boa condutora", "Má condutora", "Mais leve", "Mais barata"], 1, "Isolantes térmicos protegem a mão."),
  f("Dilatação linear", "ΔL = L₀·α·ΔT"),
  f("Três formas de propagação do calor", "Condução (contato, sólidos), convecção (fluidos, correntes) e irradiação (ondas, inclusive no vácuo)."),
  c(["Condução: partícula passa agitação para a vizinha.", "Convecção: o próprio fluido se move.", "Irradiação: ondas eletromagnéticas.", "Garrafa térmica bloqueia as três."], "Garrafa térmica: vácuo (condução/convecção) + espelho (irradiação)."),
]);

pack(F, "termologia", 2, 2, "Gases e máquinas térmicas", [
  q("Numa transformação isotérmica de um gás ideal, se a pressão dobra, o volume:", ["Dobra", "Cai pela metade", "Não muda", "Quadruplica"], 1, "P·V = constante (temperatura fixa)."),
  q("Pneus ficam mais \"cheios\" depois de rodar porque:", ["Entra ar pela válvula", "O ar aquece e a pressão sobe", "A borracha encolhe com o atrito", "A temperatura do ar dentro cai"], 1, "Volume quase constante: P/T = constante."),
  q("A 1ª lei da termodinâmica diz que:", ["Q = τ + ΔU", "Calor flui do frio para o quente", "Todo motor tem 100% de rendimento", "A entropia diminui"], 0, "O calor recebido vira trabalho e/ou aumento de energia interna."),
  q("A 2ª lei da termodinâmica implica que:", ["Todo calor pode virar trabalho", "Nenhuma máquina térmica tem 100%", "A energia pode ser criada do nada", "Geladeiras não podem funcionar"], 1, "Sempre parte do calor vai para a fonte fria."),
  q("A temperatura de 0 K (zero absoluto) equivale a:", ["0 °C", "−273 °C", "−100 °C", "273 °C"], 1, "T(K) = T(°C) + 273."),
  q("Uma geladeira funciona:", ["Criando frio dentro do aparelho", "Tirando calor de dentro, com gasto de energia", "Sem precisar de energia elétrica", "Aquecendo o interior para tirar a umidade"], 1, "Por isso a grade de trás esquenta."),
  f("Equação geral dos gases", "P₁V₁/T₁ = P₂V₂/T₂ (temperaturas em kelvin!)"),
  f("Rendimento máximo (Carnot)", "η = 1 − T_fria/T_quente (em kelvin)"),
  c(["Isotérmica: T constante, PV constante.", "Isobárica: P constante, V/T constante.", "Isovolumétrica: V constante, P/T constante.", "Sempre use kelvin nas contas."], "Gás aquecido em recipiente fechado: pressão sobe."),
]);

pack(F, "optica", 2, 3, "Espelhos", [
  q("A imagem num espelho plano é:", ["Real e invertida", "Virtual e do mesmo tamanho", "Real e maior", "Virtual e menor"], 1, "Espelho plano: virtual, direita, mesmo tamanho, simétrica."),
  q("Você está a 2 m de um espelho plano. A distância entre você e sua imagem é:", ["2 m", "1 m", "4 m", "0 m"], 2, "A imagem fica 2 m atrás do espelho: 2 + 2 = 4 m."),
  q("Espelhos de garagem e retrovisores laterais costumam ser:", ["Planos", "Côncavos", "Convexos", "Cilíndricos"], 2, "Convexos ampliam o campo de visão (imagem menor)."),
  q("Espelhos de maquiagem que aumentam a imagem são:", ["Convexos", "Côncavos", "Planos", "Prismas"], 1, "Côncavo com o objeto entre o foco e o espelho: imagem virtual e maior."),
  q("Lei da reflexão:", ["Incidência e reflexão têm ângulos iguais", "A luz sempre volta pelo mesmo caminho", "O ângulo refletido é o dobro do incidente", "A luz muda de velocidade ao refletir"], 0, "i = r, medidos em relação à normal."),
  q("A palavra AMBULÂNCIA aparece invertida na frente do veículo para:", ["Decorar a frente do veículo", "Ser lida certa no retrovisor", "Confundir outros motoristas", "Economizar tinta na pintura"], 1, "O espelho plano inverte esquerda e direita."),
  f("Equação de Gauss", "1/f = 1/p + 1/p'", "Foco f = R/2 nos espelhos esféricos."),
  f("Aumento linear", "A = i/o = −p'/p"),
  c(["Plano: imagem virtual, igual e simétrica.", "Côncavo: pode formar imagem real (projetável).", "Convexo: sempre virtual, direita e menor.", "Convexo = mais campo de visão."], "Retrovisor: \"objetos estão mais próximos do que parecem\"."),
]);

pack(F, "optica", 2, 3, "Lentes, refração e visão", [
  q("Um canudo parece \"quebrado\" no copo d'água por causa da:", ["Reflexão", "Refração", "Difração", "Interferência"], 1, "A luz muda de velocidade e direção ao passar da água para o ar."),
  q("A miopia é corrigida com lentes:", ["Convergentes", "Divergentes", "Planas", "Bifocais sempre"], 1, "O míope forma a imagem antes da retina; a lente divergente empurra para trás."),
  q("A hipermetropia é corrigida com lentes:", ["Divergentes", "Convergentes", "Cilíndricas", "Bifocais"], 1, "Imagem se forma atrás da retina; lente convergente traz para a frente."),
  q("A dispersão da luz branca num prisma (arco-íris) acontece porque:", ["Cada cor refrata de um jeito", "O prisma tinge a luz que passa", "A luz é refletida dentro dele", "Há poeira suspensa no vidro"], 0, "Cada cor desvia um pouco diferente: o violeta desvia mais."),
  q("A fibra óptica funciona graças à:", ["Reflexão total", "Absorção", "Difração", "Polarização"], 0, "A luz bate na parede interna com ângulo maior que o limite e fica presa."),
  q("Vergência de uma lente de distância focal 0,5 m:", ["0,5 di", "2 di", "5 di", "−2 di"], 1, "V = 1/f = 1/0,5 = 2 dioptrias (\"graus\")."),
  f("Índice de refração", "n = c/v. Quanto maior n, mais devagar a luz anda no meio."),
  f("Lei de Snell", "n₁·sen θ₁ = n₂·sen θ₂"),
  c(["Miopia: vê mal de longe → lente divergente.", "Hipermetropia: vê mal de perto → convergente.", "Astigmatismo: córnea irregular → cilíndrica.", "Presbiopia: cristalino endurece com a idade."], "Grau negativo na receita = lente divergente."),
]);

pack(F, "ondas", 2, 4, "Som e acústica", [
  q("O som não se propaga:", ["No ar", "Na água", "No vácuo", "Em sólidos"], 2, "Som é onda mecânica: precisa de um meio."),
  q("A característica que diferencia som grave de agudo é:", ["Amplitude", "Frequência", "Timbre", "Velocidade"], 1, "Agudo = alta frequência; grave = baixa."),
  q("O que diferencia um violão de um piano tocando a mesma nota?", ["Altura", "Intensidade", "Timbre", "Frequência"], 2, "Timbre é a \"assinatura\" do instrumento (harmônicos)."),
  q("O eco é causado pela:", ["Refração", "Reflexão", "Difração", "Absorção"], 1, "O som bate num obstáculo e volta."),
  q("A sirene parece mais aguda quando a ambulância se aproxima. Esse é o efeito:", ["Doppler", "Joule", "Estufa", "Fotoelétrico"], 0, "Aproximação comprime as ondas: frequência percebida maior."),
  q("Um som de 20 Hz e velocidade 340 m/s tem comprimento de onda de:", ["17 m", "6.800 m", "0,06 m", "360 m"], 0, "λ = v/f = 340/20 = 17 m."),
  f("Equação fundamental da ondulatória", "v = λ·f"),
  f("Faixa audível humana", "Cerca de 20 Hz a 20.000 Hz. Abaixo: infrassom; acima: ultrassom."),
  c(["Altura: grave ou agudo (frequência).", "Intensidade: forte ou fraco (amplitude, decibéis).", "Timbre: quem está tocando.", "\"Fala mais alto\" na física quer dizer mais agudo!"], "Volume é intensidade, não altura."),
]);

pack(F, "ondas", 2, 4, "Ondas eletromagnéticas", [
  q("Qual destas é uma onda eletromagnética?", ["Som", "Onda do mar", "Luz visível", "Onda numa corda"], 2, "Luz, rádio, micro-ondas, raios X… todas são eletromagnéticas."),
  q("No vácuo, todas as ondas eletromagnéticas têm a mesma:", ["Frequência", "Velocidade", "Energia", "Cor"], 1, "c ≈ 300.000 km/s."),
  q("O forno de micro-ondas aquece os alimentos principalmente agitando:", ["O ferro", "A água", "O ar", "O prato"], 1, "As micro-ondas fazem as moléculas de água girarem e esquentarem."),
  q("Qual radiação é mais energética?", ["Rádio", "Infravermelho", "Luz visível", "Raios gama"], 3, "Maior frequência → mais energia: gama está no topo do espectro."),
  q("Protetor solar serve principalmente para bloquear:", ["Infravermelho", "Ultravioleta", "Raios X", "Ondas de rádio"], 1, "UV causa queimaduras e câncer de pele."),
  q("O Wi-Fi e o celular usam ondas de:", ["Raios X", "Rádio", "Som", "Gama"], 1, "Baixa energia, não ionizante."),
  f("Ordem do espectro (menor → maior frequência)", "Rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X, gama."),
  f("Radiação ionizante", "Energia suficiente para arrancar elétrons (UV forte, raios X, gama). Pode danificar o DNA."),
  c(["Ondas eletromagnéticas não precisam de meio.", "Viajam à velocidade da luz.", "Mais frequência = mais energia.", "Celular não é radiação ionizante."], "Raio X atravessa tecido mole, mas é barrado pelo osso."),
]);

pack(F, "eletricidade", 3, 2, "Circuitos e consumo na conta de luz", [
  q("Na sua casa, as tomadas e lâmpadas são ligadas em:", ["Série", "Paralelo", "Misto sempre", "Curto-circuito"], 1, "Em paralelo, cada aparelho recebe a mesma tensão e funciona independente."),
  q("Um chuveiro de 5.500 W ligado 30 min por dia, em 30 dias, consome:", ["82,5 kWh", "165 kWh", "5.500 kWh", "27,5 kWh"], 0, "5,5 kW × 0,5 h × 30 = 82,5 kWh."),
  q("O disjuntor serve para:", ["Aumentar a tensão da rede elétrica da casa", "Cortar o circuito se a corrente passa do limite", "Economizar energia nos horários de pico", "Converter corrente alternada em contínua"], 1, "Proteção contra sobrecarga e curto-circuito."),
  q("Ligar muitos aparelhos no mesmo benjamim pode:", ["Reduzir o valor da conta de luz", "Aquecer fios por excesso de corrente", "Aumentar a tensão nas tomadas", "Não causar efeito nenhum"], 1, "A corrente total soma e aquece o fio (efeito Joule)."),
  q("Posição \"inverno\" do chuveiro tem resistência:", ["Maior", "Menor", "Igual", "Infinita"], 1, "P = U²/R: menor resistência → maior potência → água mais quente."),
  q("Choque elétrico perigoso está ligado principalmente à:", ["Tensão da tomada, apenas", "Corrente que atravessa o corpo", "Cor do fio desencapado", "Frequência da rede elétrica"], 1, "Correntes de poucas dezenas de mA já podem ser fatais."),
  f("Potência com tensão e resistência", "P = U·i = R·i² = U²/R"),
  f("Energia consumida", "E (kWh) = P (kW) × t (h)"),
  c(["Paralelo: mesma tensão, correntes somam.", "Série: mesma corrente, tensões somam.", "Chuveiro e ferro são os vilões da conta.", "kWh é unidade de energia, não de potência."], "Para economizar: menos tempo de banho vale mais que apagar uma lâmpada LED."),
]);

pack(F, "eletricidade", 3, 3, "Magnetismo e indução", [
  q("Se você quebrar um ímã ao meio, obtém:", ["Um polo norte e um sul separados", "Dois ímãs, cada um com norte e sul", "Dois pedaços sem nenhum magnetismo", "Dois pedaços só com polo norte"], 1, "Não existem monopolos magnéticos."),
  q("A bússola aponta para o norte geográfico porque:", ["É atraída pelo polo magnético que fica lá", "O norte geográfico é mais frio", "Há muito ferro no Polo Norte", "A rotação da Terra a orienta"], 0, "O norte da agulha é atraído pelo sul magnético terrestre."),
  q("Um fio com corrente elétrica:", ["Não interage com ímãs", "Cria um campo magnético", "Só cria campo elétrico", "Perde a corrente aos poucos"], 1, "Experimento de Oersted (1820)."),
  q("Geradores de usinas funcionam pelo princípio da:", ["Indução eletromagnética", "Lei de Ohm e da resistência", "Fusão nuclear do hidrogênio", "Fotossíntese"], 0, "Variar o fluxo magnético numa bobina gera corrente (Faraday)."),
  q("O transformador funciona com:", ["Corrente contínua", "Corrente alternada", "Pilhas em série", "Ímãs parados"], 1, "Só a corrente alternada varia o fluxo e induz tensão no secundário."),
  q("Carregadores sem fio de celular usam:", ["Raios X", "Indução eletromagnética", "Ondas sonoras", "Energia solar"], 1, "Bobinas na base e no celular trocam energia por campo magnético variável."),
  f("Lei de Faraday-Lenz", "Variação de fluxo magnético induz tensão; a corrente induzida se opõe à variação."),
  f("Relação do transformador", "U₁/U₂ = N₁/N₂ (tensões proporcionais ao número de espiras)."),
  c(["Corrente elétrica cria campo magnético.", "Campo magnético variável cria corrente.", "Disso nascem motores e geradores.", "Motor: eletricidade → movimento; gerador: o contrário."], "Toda usina (menos a solar) gira um ímã dentro de bobinas."),
]);

pack(F, "fisica-moderna", 3, 4, "Relatividade, fótons e átomo", [
  q("Segundo Einstein, a velocidade da luz no vácuo:", ["Depende de quem observa", "É a mesma para todos", "Pode ser ultrapassada", "É infinita"], 1, "Postulado da relatividade restrita."),
  q("O efeito fotoelétrico mostrou que a luz:", ["Se comporta apenas como onda", "Também age como partícula", "Não transporta energia", "É um tipo de onda sonora"], 1, "Einstein ganhou o Nobel por isso."),
  q("No efeito fotoelétrico, o que determina se elétrons são arrancados?", ["A intensidade da luz", "A frequência da luz", "O tempo de exposição", "A cor do metal"], 1, "Abaixo de uma frequência mínima, nenhuma intensidade arranca elétrons."),
  q("E = m·c² significa que:", ["Massa e energia são equivalentes", "A energia de um corpo é sempre zero", "A luz tem massa de repouso", "c é a carga elétrica do corpo"], 0, "Pequena massa → enorme energia (base da energia nuclear)."),
  q("Painéis solares fotovoltaicos se baseiam no:", ["Efeito Doppler", "Efeito fotoelétrico", "Efeito estufa", "Efeito Joule"], 1, "A luz libera elétrons no semicondutor, gerando corrente."),
  q("A dilatação do tempo prevê que relógios em alta velocidade:", ["Adiantam", "Atrasam", "Param", "Não mudam"], 1, "O GPS precisa corrigir esse efeito."),
  f("Energia de um fóton", "E = h·f (h = constante de Planck)"),
  f("Modelo de Bohr", "Elétrons em órbitas de energia definida; ao mudar de nível, absorvem ou emitem fótons."),
  c(["Física clássica falha no muito rápido e no muito pequeno.", "Relatividade: tempo e espaço dependem do movimento.", "Quântica: energia vem em pacotes.", "GPS e painéis solares usam as duas."], "Seu celular é física moderna no bolso."),
]);
