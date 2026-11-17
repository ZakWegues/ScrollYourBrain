import { FISICA as F } from "./exatas";
import { c, f, pack, q } from "./pack";

pack(F, "cinematica", 1, 1, "Movimento uniforme", [
  q("Um carro em movimento uniforme percorre 30 m a cada 2 s. Qual é a sua velocidade?", ["60 m/s", "15 m/s", "30 m/s", "2 m/s"], 1, "Em MU a velocidade é constante: v = Δs/Δt = 30/2 = 15 m/s. Multiplicar (60) inverte a relação entre distância e tempo."),
  q("Um ônibus a 60 km/h leva quanto tempo para percorrer 150 km?", ["2 h", "2 h 30 min", "3 h", "1 h 30 min"], 1, "t = d/v = 150/60 = 2,5 h. Atenção: 0,5 h são 30 minutos, não 50. Logo, 2 h 30 min."),
  q("Dois carros partem um em direção ao outro, a 40 km/h e 60 km/h, separados por 200 km. Em quanto tempo se encontram?", ["1 h", "2 h", "4 h", "5 h"], 1, "Indo um contra o outro, as velocidades se somam: 100 km/h de aproximação. t = 200/100 = 2 h. Se fossem no mesmo sentido, subtrairia."),
  q("O gráfico s × t de um MU é:", ["Uma parábola", "Uma reta inclinada", "Uma reta horizontal", "Uma hipérbole"], 1, "s = s₀ + v·t é função afim: reta inclinada (subindo se v > 0). Reta horizontal seria corpo parado; parábola aparece no MUV."),
  q("Qual a velocidade média de quem faz 100 km a 50 km/h e outros 100 km a 100 km/h?", ["75 km/h", "66,7 km/h", "80 km/h", "72,5 km/h"], 1, "Tempo total = 2 h + 1 h = 3 h para 200 km: 200/3 ≈ 66,7 km/h. A média simples (75) erra porque o trecho lento dura mais tempo."),
  q("Em um gráfico v × t, a área sob a curva representa:", ["A aceleração", "O deslocamento", "A força resultante", "O tempo"], 1, "Área de v × t = velocidade × tempo = deslocamento. Já a inclinação (tangente) desse gráfico dá a aceleração."),
  f("Função horária do MU", "s = s₀ + v·t", "s₀ = posição inicial; v = velocidade (com sinal)."),
  f("Velocidade relativa", "Mesmo sentido: subtrai. Sentidos opostos: soma."),
  c(["Velocidade média = distância total ÷ tempo total.", "Nunca faça média das velocidades direto.", "Some os tempos de cada trecho.", "Depois divida a distância total por eles."], "Pegadinha clássica do ENEM: média de velocidades."),
]);

pack(F, "cinematica", 1, 1, "Queda livre e lançamentos", [
  q("Uma bola solta do alto bate no chão após 4 s de queda (g = 10 m/s²). Com que velocidade chega?", ["20 m/s", "40 m/s", "80 m/s", "160 m/s"], 2, "Queda livre do repouso: v = g·t = 10·4 = 40 m/s. Usar t² (160) mistura com a fórmula da altura, h = g·t²/2 = 80 m."),
  q("Quanto um corpo cai em 2 s a partir do repouso (g = 10 m/s²)?", ["10 m", "20 m", "40 m", "5 m"], 1, "h = g·t²/2 = 10·2²/2 = 20 m. Esquecer o quadrado dá 10 m; esquecer o /2 dá 40 m."),
  q("Qual é o valor aproximado da aceleração da gravidade na superfície da Terra?", ["1 m/s²", "9,8 m/s²", "98 m/s²", "0,98 m/s²"], 2, "g ≈ 9,8 m/s² (nas contas, arredonda-se para 10): a cada segundo de queda livre, a velocidade aumenta cerca de 9,8 m/s."),
  q("No ponto mais alto de um lançamento vertical, a velocidade é:", ["Máxima", "Zero", "Igual a g", "Igual à inicial"], 1, "No topo, o corpo para de subir para começar a descer: v = 0 por um instante. A aceleração, porém, continua sendo g, para baixo."),
  q("Lançado para cima a 20 m/s (g = 10), quanto tempo leva para atingir a altura máxima?", ["1 s", "2 s", "4 s", "20 s"], 1, "A velocidade cai 10 m/s a cada segundo: de 20 a 0 leva t = v₀/g = 2 s. Subida + descida duram 4 s."),
  q("No lançamento oblíquo (sem ar), a componente horizontal da velocidade:", ["Aumenta até o ponto mais alto", "Diminui até o ponto mais alto", "Fica constante", "Vale zero no ponto mais alto"], 2, "Na horizontal não há força (sem ar): MU, componente constante. Só a vertical muda por causa da gravidade, e ela é que zera no topo."),
  f("Equação de Torricelli", "v² = v₀² + 2·a·Δs", "Útil quando o tempo não aparece no problema."),
  f("Alcance máximo no lançamento oblíquo", "Ocorre com ângulo de 45° (sem resistência do ar)."),
  c(["Queda livre é um MUV com a = g.", "g ≈ 10 m/s² perto da Terra.", "v = g·t e h = g·t²/2.", "Massa não importa no vácuo."], "Galileu: sem ar, o martelo e a pena caem juntos (testado na Lua!)."),
]);

pack(F, "dinamica", 1, 2, "Atrito e plano inclinado", [
  q("Qual a força resultante sobre um corpo de 4 kg com aceleração de 3 m/s²?", ["7 N", "12 N", "1,3 N", "0,75 N"], 1, "2ª lei de Newton: F = m·a = 4·3 = 12 N. Somar (7 N) ou dividir não seguem a lei."),
  q("O peso de uma pessoa de 70 kg (g = 10 m/s²) é:", ["70 N", "7 N", "700 N", "7.000 N"], 2, "P = m·g = 70·10 = 700 N. Na balança aparece \"70 kg\", que é a massa; o peso é uma força, medida em newtons."),
  q("A força de atrito estático máxima depende de:", ["Só da área de contato entre as superfícies", "Do coeficiente de atrito e da normal", "Da velocidade com que o corpo se move", "Da cor e da temperatura da superfície"], 1, "Fat máx = μ·N: depende do coeficiente de atrito (materiais) e da força normal. Na prática, quase não depende da área de contato."),
  q("Um bloco de 10 kg está no chão horizontal, com μ = 0,3 (g = 10). Qual o atrito máximo?", ["3 N", "30 N", "300 N", "13 N"], 1, "No plano horizontal, N = P = 10·10 = 100 N. Fat = μ·N = 0,3·100 = 30 N. Usar a massa no lugar da normal dá 3 N."),
  q("Por que é mais fácil manter um móvel arrastando do que começar a mover?", ["O atrito cinético é menor que o estático", "A massa do móvel diminui com o movimento", "O peso do móvel deixa de agir no chão", "A força normal aumenta quando ele desliza"], 0, "O coeficiente de atrito cinético (em movimento) é menor que o estático (parado). Por isso o \"tranco\" inicial exige mais força."),
  q("No plano inclinado sem atrito, a aceleração do bloco é:", ["g", "g·sen θ", "g·cos θ", "Zero"], 1, "Só a componente do peso paralela ao plano (P·sen θ) acelera o bloco: a = g·sen θ. A componente P·cos θ é equilibrada pela normal."),
  f("Terceira lei de Newton", "Ação e reação: forças de mesmo módulo e direção, sentidos opostos, em corpos diferentes."),
  f("Força normal", "Força que a superfície faz no corpo, perpendicular a ela. No plano horizontal sem outras forças verticais, N = P."),
  c(["1ª lei: sem força resultante, mantém o estado (inércia).", "2ª lei: F = m·a.", "3ª lei: ação e reação.", "Cinto de segurança é inércia na prática."], "Desenhe todas as forças antes de fazer qualquer conta."),
]);

pack(F, "dinamica", 1, 4, "Gravitação universal", [
  q("Se a massa de um dos corpos dobra, a força gravitacional entre eles:", ["Dobra", "Cai pela metade", "Fica 4 vezes maior", "Não muda"], 2, "F = G·m₁·m₂/d²: a força é diretamente proporcional às massas. Dobrar uma massa dobra a força. O \"4 vezes\" vale para a distância (ao quadrado)."),
  q("Os astronautas na Estação Espacial \"flutuam\" porque:", ["Lá não existe gravidade nenhuma", "Estão em queda livre em órbita", "A estação tem um campo magnético forte", "O ar dentro da estação os segura"], 1, "A gravidade lá ainda é cerca de 90% da superfície. Eles e a estação estão em queda livre contínua ao redor da Terra, por isso parecem sem peso."),
  q("A 2ª lei de Kepler diz que o planeta:", ["Anda com velocidade sempre constante", "Varre áreas iguais em tempos iguais", "Tem órbita perfeitamente circular", "Fica parado no periélio por um instante"], 1, "A linha Sol-planeta varre áreas iguais em tempos iguais. Por isso o planeta é mais rápido perto do Sol (periélio) e mais lento longe (afélio)."),
  q("As órbitas dos planetas, segundo Kepler, são:", ["Círculos perfeitos com o Sol no centro", "Elipses com o Sol num dos focos", "Espirais que se afastam do Sol", "Retas que se curvam perto do Sol"], 1, "1ª lei de Kepler: órbitas elípticas, com o Sol num dos focos. As elipses dos planetas são quase circulares, mas não perfeitas."),
  q("O peso de uma pessoa na Lua (g ≈ 1,6 m/s²) comparado à Terra:", ["Igual", "Cerca de 1/6", "6 vezes maior", "Zero"], 1, "A massa é a mesma; o peso depende de g. 1,6/10 ≈ 1/6: na Lua, a pessoa pesa cerca de um sexto do que pesa na Terra."),
  q("As marés são causadas principalmente:", ["Pelos ventos fortes sobre o oceano", "Pela gravidade da Lua e do Sol", "Pela rotação do Sol em torno do eixo", "Por terremotos no fundo do mar"], 1, "A gravidade da Lua (e, menos, a do Sol) puxa a água de forma diferente em cada lado da Terra, formando duas \"marés altas\". Na Lua cheia e nova, as marés são maiores."),
  f("Lei da Gravitação Universal", "F = G·M·m / d²"),
  f("3ª lei de Kepler", "T²/R³ é constante para os planetas do mesmo sistema: quanto mais longe, mais longo o ano."),
  c(["Toda massa atrai toda massa.", "A força cresce com as massas.", "E cai com o quadrado da distância.", "Órbita = queda livre que nunca chega ao chão."], "A mesma lei explica a maçã e a Lua."),
]);

pack(F, "energia", 1, 3, "Conservação da energia", [
  q("Um corpo cai de 5 m de altura (sem atrito, g = 10). Com que velocidade chega ao chão?", ["5 m/s", "10 m/s", "50 m/s", "100 m/s"], 1, "Conservação de energia: m·g·h = m·v²/2 → v = √(2gh) = √(2·10·5) = √100 = 10 m/s. A massa nem entra na conta."),
  q("Numa montanha-russa sem atrito, no ponto mais baixo a energia cinética é:", ["Mínima", "Máxima", "Zero", "Igual à potencial do ponto"], 1, "Sem atrito, a energia mecânica se conserva. No ponto mais baixo, a potencial é mínima, então a cinética (e a velocidade) é máxima."),
  q("Numa usina hidrelétrica, a transformação principal é:", ["Química em elétrica", "Potencial em cinética e elétrica", "Nuclear em térmica e elétrica", "Luminosa em elétrica"], 1, "A água represada tem energia potencial; ao cair, vira cinética, gira a turbina, e o gerador converte em energia elétrica."),
  q("Quando há atrito, a energia mecânica:", ["Aumenta", "Se conserva", "Diminui", "Some do universo"], 2, "Com atrito, parte da energia mecânica vira térmica (aquecimento). A energia total do universo se conserva, mas a mecânica diminui."),
  q("Qual a energia cinética de um carro de 1.000 kg a 20 m/s?", ["20 kJ", "200 kJ", "400 kJ", "10 kJ"], 1, "Ec = m·v²/2 = 1.000·20²/2 = 1.000·400/2 = 200.000 J = 200 kJ. Sem o /2 daria 400 kJ."),
  q("Se a velocidade de um carro dobra, sua energia cinética:", ["Dobra", "Triplica", "Quadruplica", "Não muda"], 2, "Ec ∝ v²: velocidade 2 vezes maior → energia 4 vezes maior. Por isso a distância de frenagem cresce muito com a velocidade."),
  f("Energia mecânica", "Em = Ec + Ep. Sem atrito, ela se conserva."),
  f("Trabalho de uma força constante", "τ = F·d·cos θ. Força perpendicular ao movimento não realiza trabalho."),
  c(["Energia não se cria nem se destrói.", "Ela muda de forma: potencial, cinética, térmica…", "Atrito transforma em calor.", "No ENEM: siga a cadeia de transformações."], "Barragem: altura vira velocidade, que vira eletricidade."),
]);

pack(F, "energia", 1, 3, "Potência e rendimento", [
  q("Um motor recebe 1.000 W e entrega 800 W de potência útil. Qual é o rendimento?", ["20%", "80%", "125%", "8%"], 1, "η = útil/total = 800/1.000 = 0,8 = 80%. Os 200 W restantes são perdidos, principalmente como calor. Rendimento nunca passa de 100%."),
  q("Uma lâmpada de LED de 10 W substitui uma incandescente de 60 W. A economia é de:", ["50%", "60%", "83%", "17%"], 2, "Economiza 60 − 10 = 50 W. Em porcentagem: 50/60 ≈ 0,83 = 83%. A pegadinha (17%) é o que a LED gasta, não o que economiza."),
  q("Qual é a unidade de potência no SI?", ["Joule", "Watt", "Newton", "Volt"], 1, "Watt: 1 W = 1 J/s (energia por segundo). Joule é energia; newton é força; volt é tensão elétrica."),
  q("Subir uma escada de 3 m com 600 N de peso em 6 s exige potência de:", ["100 W", "300 W", "1.800 W", "200 W"], 1, "Trabalho contra o peso: τ = 600·3 = 1.800 J. Potência: P = 1.800/6 = 300 W. 1.800 W seria esquecer de dividir pelo tempo."),
  q("Por que nenhum motor tem rendimento de 100%?", ["Falta combustível no fim do ciclo", "Sempre há perdas, como calor", "A lei de trânsito limita a potência", "A potência útil não pode ser medida"], 1, "Sempre há perdas: atrito, calor, som. Num motor térmico, a 2ª lei da termodinâmica obriga a mandar parte do calor para a fonte fria."),
  q("1 cavalo-vapor (cv) equivale aproximadamente a:", ["75 W", "735 W", "1.000 W", "10 W"], 1, "1 cv ≈ 735 W (1 hp ≈ 746 W). Um carro de 100 cv tem cerca de 73,5 kW de potência máxima."),
  f("Potência média", "P = τ / Δt = energia ÷ tempo"),
  f("Rendimento", "η = potência útil / potência total (sempre < 1)"),
  c(["Potência é rapidez para transferir energia.", "Mesma escada, menos tempo → mais potência.", "Rendimento mede o desperdício.", "LED: mesma luz, menos calor."], "Etiqueta do Procel A = maior rendimento."),
]);

pack(F, "termologia", 2, 1, "Calorimetria", [
  q("Quanto calor é preciso para aquecer 200 g de água de 20 °C a 70 °C? (c = 1 cal/g°C)", ["1.000 cal", "4.000 cal", "10.000 cal", "14.000 cal"], 2, "Q = m·c·ΔT = 200·1·(70 − 20) = 200·50 = 10.000 cal. Usar 70 em vez de ΔT = 50 dá 14.000."),
  q("Calor sensível provoca:", ["Mudança de estado", "Variação de temperatura", "Variação de massa", "Variação de volume apenas"], 1, "Calor sensível muda a temperatura (Q = m·c·ΔT). Calor latente muda o estado físico sem mudar a temperatura (Q = m·L)."),
  q("Quanto calor é preciso para derreter 50 g de gelo a 0 °C? (L = 80 cal/g)", ["130 cal", "400 cal", "4.000 cal", "40 cal"], 2, "Calor latente: Q = m·L = 50·80 = 4.000 cal. A temperatura fica em 0 °C durante toda a fusão; o calor só muda o estado."),
  q("A areia da praia esquenta mais rápido que o mar porque:", ["Tem calor específico menor", "Tem calor específico maior", "É mais densa", "Reflete mais luz"], 0, "A areia tem calor específico bem menor que a água: precisa de menos energia para mudar de temperatura. Por isso esquenta e esfria mais rápido."),
  q("Misturando 100 g de água a 80 °C com 100 g a 20 °C, a temperatura final é:", ["40 °C", "50 °C", "60 °C", "100 °C"], 1, "Calor cedido = calor recebido. Com massas iguais da mesma substância, a temperatura final é a média: (80 + 20)/2 = 50 °C."),
  q("Dois corpos em equilíbrio térmico têm a mesma:", ["Massa", "Quantidade de calor", "Temperatura", "Energia interna"], 1, "Em equilíbrio térmico a temperatura se iguala e o calor para de fluir. Massas e energias internas podem continuar bem diferentes."),
  f("Equação fundamental da calorimetria", "Q = m·c·ΔT (o famoso \"que macete\")"),
  f("Calor latente", "Q = m·L. Usado nas mudanças de estado, com temperatura constante."),
  c(["Temperatura mede agitação das partículas.", "Calor é energia passando de um corpo a outro.", "Equilíbrio térmico: tudo na mesma temperatura.", "Em sistema isolado: soma dos calores = 0."], "A água tem calor específico alto: segura a temperatura do planeta."),
]);

pack(F, "termologia", 2, 1, "Dilatação e transmissão de calor", [
  q("Trilhos de trem têm pequenos espaços entre si para:", ["Economizar ferro na obra", "Permitir a dilatação", "Fazer o barulho do trem", "Escoar a água da chuva"], 1, "No calor, o aço dilata. Sem as juntas de dilatação, os trilhos se empurrariam e entortariam. Pontes e calçadas usam o mesmo truque."),
  q("Um cobertor nos mantém aquecidos porque:", ["Produz calor por conta própria", "É isolante e segura nosso calor", "Absorve o frio do ambiente", "Esquenta o ar do quarto"], 1, "O cobertor não produz calor: é isolante e dificulta que o calor do nosso corpo escape para o ambiente."),
  q("O calor do Sol chega à Terra por:", ["Condução", "Convecção", "Irradiação", "Dilatação"], 2, "Entre o Sol e a Terra há vácuo: não há matéria para condução nem convecção. Só a radiação (ondas eletromagnéticas) atravessa o vácuo."),
  q("O ar-condicionado deve ficar no alto da parede porque:", ["O ar frio é mais denso e desce", "O ar frio é mais leve e sobe", "O aparelho fica mais bonito no alto", "Evita a poeira que fica no chão"], 0, "O ar frio é mais denso e desce; o quente, menos denso, sobe. Assim se formam correntes de convecção que resfriam o ambiente todo."),
  q("A água tem comportamento anômalo: entre 0 °C e 4 °C, ao ser aquecida ela:", ["Dilata", "Contrai", "Evapora", "Não muda"], 1, "Entre 0 e 4 °C a água contrai ao esquentar; a 4 °C tem densidade máxima e vai para o fundo. Por isso lagos congelam só na superfície."),
  q("Uma panela com cabo de madeira: a madeira é usada porque é:", ["Boa condutora", "Má condutora", "Mais leve", "Mais barata"], 1, "A madeira é má condutora de calor (isolante térmico): o calor da panela demora a chegar à mão. Metais conduzem bem."),
  f("Dilatação linear", "ΔL = L₀·α·ΔT"),
  f("Três formas de propagação do calor", "Condução (contato, sólidos), convecção (fluidos, correntes) e irradiação (ondas, inclusive no vácuo)."),
  c(["Condução: partícula passa agitação para a vizinha.", "Convecção: o próprio fluido se move.", "Irradiação: ondas eletromagnéticas.", "Garrafa térmica bloqueia as três."], "Garrafa térmica: vácuo (condução/convecção) + espelho (irradiação)."),
]);

pack(F, "termologia", 2, 2, "Gases e máquinas térmicas", [
  q("Numa transformação isotérmica de um gás ideal, se a pressão dobra, o volume:", ["Dobra", "Cai pela metade", "Não muda", "Quadruplica"], 1, "Lei de Boyle: com temperatura constante, P·V = constante. Pressão 2 vezes maior → volume 2 vezes menor (metade)."),
  q("Pneus ficam mais \"cheios\" depois de rodar porque:", ["Entra ar pela válvula", "O ar aquece e a pressão sobe", "A borracha encolhe com o atrito", "A temperatura do ar dentro cai"], 1, "O atrito com o asfalto aquece o ar do pneu. Com volume quase constante, P/T é constante: temperatura maior → pressão maior."),
  q("Um gás recebe 500 J de calor e realiza 200 J de trabalho. Qual a variação da sua energia interna?", ["700 J", "300 J", "200 J", "−300 J"], 0, "1ª lei: Q = τ + ΔU → 500 = 200 + ΔU → ΔU = 300 J. O calor que não virou trabalho ficou como energia interna (o gás esquentou)."),
  q("A 2ª lei da termodinâmica implica que:", ["Todo calor pode virar trabalho", "Nenhuma máquina térmica tem 100%", "A energia pode ser criada do nada", "Geladeiras não podem funcionar"], 1, "O calor flui naturalmente do quente para o frio, e nenhuma máquina térmica transforma todo o calor em trabalho: parte sempre vai para a fonte fria."),
  q("A temperatura de 0 K (zero absoluto) equivale a:", ["0 °C", "−273 °C", "−100 °C", "273 °C"], 1, "T(°C) = T(K) − 273 = 0 − 273 = −273 °C (mais exato: −273,15 °C). É a menor temperatura possível: agitação térmica mínima."),
  q("Uma geladeira funciona:", ["Criando frio dentro do aparelho", "Tirando calor de dentro, com gasto de energia", "Sem precisar de energia elétrica", "Aquecendo o interior para tirar a umidade"], 1, "A geladeira tira calor de dentro e joga para fora, usando energia elétrica no compressor. Por isso a grade de trás esquenta. Não existe \"fabricar frio\"."),
  f("Equação geral dos gases", "P₁V₁/T₁ = P₂V₂/T₂ (temperaturas em kelvin!)"),
  f("Rendimento máximo (Carnot)", "η = 1 − T_fria/T_quente (em kelvin)"),
  c(["Isotérmica: T constante, PV constante.", "Isobárica: P constante, V/T constante.", "Isovolumétrica: V constante, P/T constante.", "Sempre use kelvin nas contas."], "Gás aquecido em recipiente fechado: pressão sobe."),
]);

pack(F, "optica", 2, 3, "Espelhos", [
  q("Quantas imagens se formam entre dois espelhos planos que fazem 90° entre si?", ["2", "3", "4", "6"], 1, "Use n = 360°/α − 1 = 360/90 − 1 = 3 imagens. Com 60°, seriam 5; espelhos paralelos formariam infinitas."),
  q("Você está a 2 m de um espelho plano. A distância entre você e sua imagem é:", ["2 m", "1 m", "4 m", "0 m"], 2, "No espelho plano, a imagem fica à mesma distância atrás do espelho: 2 m. Entre você e ela: 2 + 2 = 4 m."),
  q("Espelhos de garagem e retrovisores laterais costumam ser:", ["Planos", "Côncavos", "Convexos", "Cilíndricos"], 2, "Espelhos convexos dão imagens menores, mas com campo de visão maior. Por isso o retrovisor avisa: \"os objetos estão mais perto do que parecem\"."),
  q("Espelhos de maquiagem que aumentam a imagem são:", ["Convexos", "Côncavos", "Planos", "Prismas"], 1, "No espelho côncavo, com o rosto entre o foco e o espelho, a imagem é virtual, direita e maior. Convexo só diminui."),
  q("O que diz a lei da reflexão?", ["Incidência e reflexão têm ângulos iguais", "A luz sempre volta pelo mesmo caminho", "O ângulo refletido é o dobro do incidente", "A luz muda de velocidade ao refletir"], 0, "O ângulo de incidência é igual ao de reflexão (i = r), ambos medidos em relação à normal, e os raios ficam no mesmo plano."),
  q("A palavra AMBULÂNCIA aparece invertida na frente do veículo para:", ["Decorar a frente do veículo", "Ser lida certa no retrovisor", "Confundir outros motoristas", "Economizar tinta na pintura"], 1, "O espelho plano troca esquerda e direita (reversão). Escrita invertida, a palavra aparece certa no retrovisor do carro da frente."),
  f("Equação de Gauss", "1/f = 1/p + 1/p'", "Foco f = R/2 nos espelhos esféricos."),
  f("Aumento linear", "A = i/o = −p'/p"),
  c(["Plano: imagem virtual, igual e simétrica.", "Côncavo: pode formar imagem real (projetável).", "Convexo: sempre virtual, direita e menor.", "Convexo = mais campo de visão."], "Retrovisor: \"objetos estão mais próximos do que parecem\"."),
]);

pack(F, "optica", 2, 3, "Lentes, refração e visão", [
  q("Um canudo parece \"quebrado\" no copo d'água por causa da:", ["Reflexão", "Refração", "Difração", "Interferência"], 1, "A luz que vem do canudo muda de velocidade ao passar da água para o ar e desvia: refração. Vemos a parte de baixo num lugar diferente do real."),
  q("No olho míope, a imagem de um objeto distante se forma:", ["Atrás da retina", "Antes da retina", "Sobre o cristalino", "Na córnea"], 1, "O olho míope é \"longo\" (ou converge demais): a imagem se forma antes da retina e fica borrada. A lente divergente corrige isso."),
  q("A hipermetropia é corrigida com lentes:", ["Divergentes", "Convergentes", "Cilíndricas", "Bifocais"], 1, "No hipermetrope, a imagem se formaria atrás da retina. A lente convergente adianta o foco para a retina."),
  q("A dispersão da luz branca num prisma (arco-íris) acontece porque:", ["Cada cor refrata de um jeito", "O prisma tinge a luz que passa", "A luz é refletida dentro dele", "Há poeira suspensa no vidro"], 0, "Cada cor tem um índice de refração diferente no vidro e desvia um pouco diferente: o violeta mais, o vermelho menos. A luz branca se abre em cores."),
  q("A fibra óptica funciona graças à:", ["Reflexão total", "Absorção", "Difração", "Polarização"], 0, "A luz bate na parede interna da fibra com ângulo maior que o ângulo limite e é totalmente refletida, \"presa\" lá dentro até o outro lado."),
  q("Qual é a vergência de uma lente de distância focal 0,5 m?", ["0,5 di", "2 di", "5 di", "−2 di"], 1, "V = 1/f, com f em metros: 1/0,5 = 2 dioptrias (os \"graus\" do óculos). Lente convergente tem V positiva; divergente, negativa."),
  f("Índice de refração", "n = c/v. Quanto maior n, mais devagar a luz anda no meio."),
  f("Lei de Snell", "n₁·sen θ₁ = n₂·sen θ₂"),
  c(["Miopia: vê mal de longe → lente divergente.", "Hipermetropia: vê mal de perto → convergente.", "Astigmatismo: córnea irregular → cilíndrica.", "Presbiopia: cristalino endurece com a idade."], "Grau negativo na receita = lente divergente."),
]);

pack(F, "ondas", 2, 4, "Som e acústica", [
  q("O som não se propaga:", ["No ar", "Na água", "No vácuo", "Em sólidos"], 2, "O som é onda mecânica: precisa de matéria para vibrar. No vácuo não há o que vibrar. Por isso não se ouve explosões no espaço."),
  q("A característica que diferencia som grave de agudo é:", ["Amplitude", "Frequência", "Timbre", "Velocidade"], 1, "A altura do som depende da frequência: agudo = frequência alta; grave = frequência baixa. Amplitude muda o volume."),
  q("O que diferencia um violão de um piano tocando a mesma nota?", ["Altura", "Intensidade", "Timbre", "Frequência"], 2, "Timbre: a mesma nota (frequência) vem acompanhada de harmônicos diferentes em cada instrumento, dando uma \"assinatura\" de som."),
  q("O eco é causado pela:", ["Refração", "Reflexão", "Difração", "Absorção"], 1, "O som bate num obstáculo e volta (reflexão). Para ouvirmos eco separado, o obstáculo deve estar a pelo menos ~17 m."),
  q("A sirene parece mais aguda quando a ambulância se aproxima. Esse é o efeito:", ["Doppler", "Joule", "Estufa", "Fotoelétrico"], 0, "Efeito Doppler: ao se aproximar, a fonte \"comprime\" as ondas e a frequência percebida aumenta (mais agudo); ao se afastar, fica mais grave."),
  q("Um som de 20 Hz e velocidade 340 m/s tem comprimento de onda de:", ["17 m", "6.800 m", "0,06 m", "360 m"], 0, "λ = v/f = 340/20 = 17 m. Multiplicar (6.800) inverte a fórmula v = λ·f."),
  f("Equação fundamental da ondulatória", "v = λ·f"),
  f("Faixa audível humana", "Cerca de 20 Hz a 20.000 Hz. Abaixo: infrassom; acima: ultrassom."),
  c(["Altura: grave ou agudo (frequência).", "Intensidade: forte ou fraco (amplitude, decibéis).", "Timbre: quem está tocando.", "\"Fala mais alto\" na física quer dizer mais agudo!"], "Volume é intensidade, não altura."),
]);

pack(F, "ondas", 2, 4, "Ondas eletromagnéticas", [
  q("Qual destas é uma onda eletromagnética?", ["Som", "Onda do mar", "Luz visível", "Onda numa corda"], 2, "A luz visível é eletromagnética, como rádio, micro-ondas e raios X: anda no vácuo. Som, ondas do mar e ondas em corda são mecânicas."),
  q("No vácuo, todas as ondas eletromagnéticas têm a mesma:", ["Frequência", "Velocidade", "Energia", "Cor"], 1, "No vácuo, todas viajam a c ≈ 300.000 km/s. O que muda entre elas é a frequência (e o comprimento de onda)."),
  q("O forno de micro-ondas aquece os alimentos principalmente agitando:", ["O ferro", "A água", "O ar", "O prato"], 1, "As micro-ondas fazem as moléculas de água (polares) girarem rapidamente; esse movimento vira calor. Por isso alimentos secos esquentam menos."),
  q("Por que os raios X são usados em radiografias?", ["Atravessam tecidos moles, mas não tanto os ossos", "São ondas sonoras de altíssima frequência", "Não transportam energia nenhuma", "Só conseguem atravessar metais"], 3, "Raios X atravessam pele e músculos, mas são barrados pelos ossos (mais densos, com cálcio), que aparecem claros no filme. São radiação ionizante: exige proteção."),
  q("Protetor solar serve principalmente para bloquear:", ["Infravermelho", "Ultravioleta", "Raios X", "Ondas de rádio"], 1, "A radiação ultravioleta (UVA e UVB) causa queimaduras, envelhecimento e câncer de pele. O FPS indica a proteção contra UVB."),
  q("O Wi-Fi e o celular usam ondas de:", ["Raios X", "Rádio", "Som", "Gama"], 1, "Usam ondas de rádio (micro-ondas), de baixa energia e não ionizantes. Raios X e gama, sim, são ionizantes."),
  f("Ordem do espectro (menor → maior frequência)", "Rádio, micro-ondas, infravermelho, visível, ultravioleta, raios X, gama."),
  f("Radiação ionizante", "Energia suficiente para arrancar elétrons (UV forte, raios X, gama). Pode danificar o DNA."),
  c(["Ondas eletromagnéticas não precisam de meio.", "Viajam à velocidade da luz.", "Mais frequência = mais energia.", "Celular não é radiação ionizante."], "Raio X atravessa tecido mole, mas é barrado pelo osso."),
]);

pack(F, "eletricidade", 3, 2, "Circuitos e consumo na conta de luz", [
  q("Na sua casa, as tomadas e lâmpadas são ligadas em:", ["Série", "Paralelo", "Misto sempre", "Curto-circuito"], 1, "Em paralelo: cada aparelho recebe a mesma tensão (127 V ou 220 V) e funciona sozinho. Em série, uma lâmpada queimada apagaria todas."),
  q("Um chuveiro de 5.500 W ligado 30 min por dia, em 30 dias, consome:", ["82,5 kWh", "165 kWh", "5.500 kWh", "27,5 kWh"], 0, "E = P·t = 5,5 kW · 0,5 h · 30 dias = 82,5 kWh. Esquecer que 30 min = 0,5 h dobra o resultado (165 kWh)."),
  q("O disjuntor serve para:", ["Aumentar a tensão da rede elétrica da casa", "Cortar o circuito se a corrente passa do limite", "Economizar energia nos horários de pico", "Converter corrente alternada em contínua"], 1, "O disjuntor desliga o circuito quando a corrente passa do limite (sobrecarga ou curto), evitando que os fios esquentem e causem incêndio."),
  q("Ligar muitos aparelhos no mesmo benjamim pode:", ["Reduzir o valor da conta de luz", "Aquecer fios por excesso de corrente", "Aumentar a tensão nas tomadas", "Não causar efeito nenhum"], 1, "Em paralelo, as correntes dos aparelhos somam no fio do benjamim. Corrente alta aquece o fio (efeito Joule) e pode derreter o isolamento."),
  q("Um chuveiro de 220 V e 4.400 W é percorrido por qual corrente?", ["10 A", "20 A", "44 A", "2 A"], 1, "P = U·i → i = P/U = 4.400/220 = 20 A. Por isso chuveiros exigem fio grosso e disjuntor próprio."),
  q("Choque elétrico perigoso está ligado principalmente à:", ["Tensão da tomada, apenas", "Corrente que atravessa o corpo", "Cor do fio desencapado", "Frequência da rede elétrica"], 1, "O que machuca é a corrente que atravessa o corpo: poucas dezenas de miliampères pelo coração já podem ser fatais. Pele molhada baixa a resistência e aumenta a corrente."),
  f("Potência com tensão e resistência", "P = U·i = R·i² = U²/R"),
  f("Energia consumida", "E (kWh) = P (kW) × t (h)"),
  c(["Paralelo: mesma tensão, correntes somam.", "Série: mesma corrente, tensões somam.", "Chuveiro e ferro são os vilões da conta.", "kWh é unidade de energia, não de potência."], "Para economizar: menos tempo de banho vale mais que apagar uma lâmpada LED."),
]);

pack(F, "eletricidade", 3, 3, "Magnetismo e indução", [
  q("Por que um prego de ferro é atraído por um ímã?", ["Ele fica imantado temporariamente", "Ele tem carga elétrica positiva", "Ele é feito de cobre puro", "Ele já tem um polo norte fixo"], 1, "Perto do ímã, os domínios magnéticos do ferro se alinham e o prego vira um ímã temporário, com polo oposto voltado para o ímã. Cobre não é atraído."),
  q("A bússola aponta para o norte geográfico porque:", ["É atraída pelo polo magnético que fica lá", "O norte geográfico é mais frio", "Há muito ferro no Polo Norte", "A rotação da Terra a orienta"], 0, "A Terra funciona como um grande ímã: perto do norte geográfico há um polo sul magnético, que atrai o polo norte da agulha."),
  q("Um fio com corrente elétrica:", ["Não interage com ímãs", "Cria um campo magnético", "Só cria campo elétrico", "Perde a corrente aos poucos"], 1, "Oersted (1820) viu a bússola desviar perto de um fio com corrente: toda corrente elétrica cria campo magnético ao seu redor."),
  q("Geradores de usinas funcionam pelo princípio da:", ["Indução eletromagnética", "Lei de Ohm e da resistência", "Fusão nuclear do hidrogênio", "Fotossíntese"], 0, "Indução eletromagnética (Faraday): girar uma bobina num campo magnético varia o fluxo e gera corrente. Toda usina, menos a solar, usa isso."),
  q("Um transformador baixa a tensão de 220 V para 11 V. Se o primário tem 1.000 espiras, quantas tem o secundário?", ["20", "50", "200", "20.000"], 1, "A tensão é proporcional às espiras: Us/Up = Ns/Np → 11/220 = Ns/1.000 → Ns = 50. Tensão 20 vezes menor, espiras 20 vezes menos."),
  q("Carregadores sem fio de celular usam:", ["Raios X", "Indução eletromagnética", "Ondas sonoras", "Energia solar"], 1, "Uma bobina na base cria campo magnético variável, que induz corrente numa bobina dentro do celular: indução eletromagnética."),
  f("Lei de Faraday-Lenz", "Variação de fluxo magnético induz tensão; a corrente induzida se opõe à variação."),
  f("Relação do transformador", "U₁/U₂ = N₁/N₂ (tensões proporcionais ao número de espiras)."),
  c(["Corrente elétrica cria campo magnético.", "Campo magnético variável cria corrente.", "Disso nascem motores e geradores.", "Motor: eletricidade → movimento; gerador: o contrário."], "Toda usina (menos a solar) gira um ímã dentro de bobinas."),
]);

pack(F, "fisica-moderna", 3, 4, "Relatividade, fótons e átomo", [
  q("Segundo Einstein, a velocidade da luz no vácuo:", ["Depende de quem observa", "É a mesma para todos", "Pode ser ultrapassada", "É infinita"], 1, "Postulado da relatividade restrita: a velocidade da luz no vácuo é a mesma para qualquer observador, esteja ele parado ou em movimento."),
  q("Quem explicou o efeito fotoelétrico e ganhou o Nobel de Física de 1921 por isso?", ["Isaac Newton", "Niels Bohr", "Albert Einstein", "Max Planck"], 1, "Einstein (1905) propôs que a luz chega em \"pacotes\" (fótons) de energia E = h·f. Planck tinha criado a ideia de quantum; Einstein a aplicou à luz."),
  q("No efeito fotoelétrico, o que determina se elétrons são arrancados?", ["A intensidade da luz", "A frequência da luz", "O tempo de exposição", "A temperatura do ar"], 1, "Cada fóton tem energia h·f. Abaixo de uma frequência mínima (que depende do metal), nenhuma intensidade arranca elétrons; acima dela, mais intensidade arranca mais."),
  q("E = m·c² significa que:", ["Massa e energia são equivalentes", "A energia de um corpo é sempre zero", "A luz tem massa de repouso", "c é a carga elétrica do corpo"], 0, "Massa e energia são equivalentes: como c² é enorme, uma massa minúscula equivale a muita energia. É a base das usinas nucleares e da energia do Sol."),
  q("Painéis solares fotovoltaicos se baseiam no:", ["Efeito Doppler", "Efeito fotoelétrico", "Efeito estufa", "Efeito Joule"], 1, "Os fótons da luz liberam elétrons no silício (semicondutor), gerando corrente: efeito fotoelétrico. Efeito Joule é o aquecimento por corrente."),
  q("A dilatação do tempo prevê que relógios em alta velocidade:", ["Adiantam", "Atrasam", "Param", "Não mudam"], 1, "Para quem está parado, o relógio em movimento muito rápido anda mais devagar (atrasa). Os satélites de GPS precisam corrigir efeitos relativísticos."),
  f("Energia de um fóton", "E = h·f (h = constante de Planck)"),
  f("Modelo de Bohr", "Elétrons em órbitas de energia definida; ao mudar de nível, absorvem ou emitem fótons."),
  c(["Física clássica falha no muito rápido e no muito pequeno.", "Relatividade: tempo e espaço dependem do movimento.", "Quântica: energia vem em pacotes.", "GPS e painéis solares usam as duas."], "Seu celular é física moderna no bolso."),
]);
