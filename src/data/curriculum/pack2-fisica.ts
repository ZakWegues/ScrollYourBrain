import { FISICA } from "./exatas";
import { extend, m, o, q, qe } from "./pack";

/* Física, 2ª leva: questões diretas e no estilo ENEM (situação do cotidiano + pergunta). Chave "n". */

extend(FISICA, "Cinemática", [
  q("Quanto é 72 km/h em m/s?", ["20 m/s", "72 m/s", "7,2 m/s", "259 m/s"], 0, "Divide-se por 3,6: 72/3,6 = 20 m/s."),
  q("Aceleração é a variação de:", ["Velocidade por tempo", "Posição por tempo", "Massa por volume", "Força por área"], 0, "a = Δv/Δt, em m/s². Posição por tempo é velocidade."),
  q("Um carro vai de 10 m/s a 30 m/s em 5 s. Sua aceleração média é:", ["4 m/s²", "6 m/s²", "8 m/s²", "2 m/s²"], 0, "a = (30 − 10)/5 = 4 m/s²."),
  q("Deslocamento e distância percorrida são iguais quando o movimento é:", ["Reto, num só sentido", "Circular, dando várias voltas", "De ida e volta ao mesmo ponto", "Qualquer um, sempre são iguais"], 0, "Se o corpo volta ou faz curva, o deslocamento (vetor) é menor que a distância."),
  qe("Um ônibus sai às 8h do km 20 de uma rodovia e chega às 10h ao km 200.", "Qual foi sua velocidade média?", ["90 km/h", "100 km/h", "110 km/h", "180 km/h"], 0, "Δs = 180 km em Δt = 2 h: 90 km/h."),
  qe("Num GPS, um ciclista aparece a 18 km/h constantes por 20 minutos.", "Quantos km ele percorre?", ["6 km", "9 km", "3,6 km", "36 km"], 0, "20 min = 1/3 h. 18 · 1/3 = 6 km."),
  qe("Um motorista a 108 km/h olha o celular por 2 segundos.", "Quantos metros o carro anda 'às cegas'?", ["60 m", "216 m", "30 m", "108 m"], 0, "108 km/h = 30 m/s; em 2 s: 60 m, mais que meio campo de futebol."),
  qe("Um trem freia de 20 m/s até parar, com desaceleração constante de 2 m/s².", "Quanto tempo leva para parar?", ["10 s", "40 s", "5 s", "20 s"], 0, "t = Δv/a = 20/2 = 10 s."),
  q("Um corpo que dá uma volta completa e retorna ao ponto de partida tem deslocamento:", ["Nulo", "Máximo", "Igual à distância", "Negativo"], 0, "Posição final = inicial: deslocamento zero, embora a distância não seja."),
  m("Marque as conversões de velocidade e tempo corretas:", ["36 km/h = 10 m/s", "90 km/h = 25 m/s", "1 h = 3.600 s", "10 m/s = 10 km/h", "1 km = 100 m"], [0, 1, 2], "10 m/s = 36 km/h; 1 km = 1.000 m."),
  m("Marque as grandezas vetoriais:", ["Velocidade", "Aceleração", "Deslocamento", "Tempo", "Massa"], [0, 1, 2], "Tempo e massa são escalares: não têm direção nem sentido."),
], "n");

extend(FISICA, "Leis de Newton", [
  q("Segundo a 3ª lei de Newton, a força de reação:", ["Age em outro corpo", "Age no mesmo corpo", "É menor que a ação", "Surge depois da ação"], 0, "Ação e reação têm mesma intensidade e direção, sentidos opostos e atuam em corpos diferentes."),
  q("Um corpo em repouso tende a permanecer em repouso. Isso é a:", ["1ª lei (inércia)", "2ª lei", "3ª lei", "Lei da gravitação"], 0, "Princípio da inércia: sem força resultante, o estado de movimento não muda."),
  q("Uma força de 20 N age sobre 4 kg. A aceleração é:", ["5 m/s²", "80 m/s²", "0,2 m/s²", "24 m/s²"], 0, "a = F/m = 20/4 = 5 m/s²."),
  q("A força normal sobre um livro parado numa mesa:", ["Equilibra o peso", "É a reação do peso", "É maior que o peso", "Não existe"], 0, "Normal e peso se equilibram, mas não são par ação-reação (agem no mesmo corpo)."),
  qe("Um astronauta no espaço empurra uma caixa e é empurrado para trás.", "O fenômeno é explicado pela:", ["3ª lei de Newton", "1ª lei de Newton", "Lei de Ohm", "Lei de Hooke"], 0, "Ele faz força na caixa; a caixa faz força igual e oposta nele."),
  qe("O cinto de segurança segura o passageiro numa freada brusca.", "Sem o cinto, o passageiro seria lançado para frente por:", ["Inércia", "Aceleração da gravidade", "Ação e reação", "Força centrífuga real"], 0, "O carro para; o corpo tende a continuar em movimento: inércia."),
  qe("Um carrinho de supermercado vazio acelera fácil; cheio, exige mais força para a mesma aceleração.", "Isso ilustra que:", ["Mais massa exige mais força", "A massa não importa", "A força independe da aceleração", "Carrinhos cheios caem mais rápido"], 0, "2ª lei: F = m·a. Para a mesma aceleração, massa maior pede força maior."),
  qe("Um foguete sobe expelindo gases para baixo.", "O que impulsiona o foguete?", ["A reação dos gases sobre ele", "O ar que o empurra por baixo", "A ausência de gravidade", "O calor do motor"], 0, "O foguete empurra os gases para baixo; os gases empurram o foguete para cima (3ª lei). Funciona até no vácuo."),
  q("Num elevador que sobe acelerando, a balança marca um peso:", ["Maior que o real", "Menor que o real", "Igual ao real", "Zero"], 0, "A normal precisa ser maior que o peso para acelerar para cima: a balança mostra mais."),
  m("Marque exemplos da 3ª lei de Newton:", ["Remar e o barco avançar", "Arma recuar ao disparar", "Andar empurrando o chão para trás", "Passageiro ir para frente na freada", "Pedra cair no chão"], [0, 1, 2], "Passageiro na freada é inércia; a queda é efeito do peso."),
  m("Num corpo com força resultante nula, marque as corretas:", ["Pode estar em repouso", "Pode estar em MRU", "A aceleração é zero", "Está sempre acelerando", "Está obrigatoriamente parado"], [0, 1, 2], "Resultante zero = aceleração zero: repouso OU velocidade constante."),
  o("Explique por que, ao bater um carro num poste, o carro e o poste recebem forças de mesma intensidade, mas o carro se deforma mais.", "Pela 3ª lei de Newton, a força do carro no poste e a do poste no carro têm a mesma intensidade e sentidos opostos. O efeito, porém, depende de cada corpo: o carro é feito para deformar (zona de impacto) e o poste é rígido e preso ao chão, então o carro amassa mais.", [
    ["3ª lei: forças iguais e opostas", "3ª lei", "acao e reacao", "iguais", "mesma intensidade"],
    ["Agem em corpos diferentes", "corpos diferentes", "cada corpo", "no poste"],
    ["Efeito diferente por material/estrutura", "deforma", "rigido", "material", "estrutura"],
  ]),
], "n");

extend(FISICA, "Trabalho, energia e potência", [
  q("O trabalho de uma força perpendicular ao deslocamento é:", ["Zero", "Máximo", "Negativo", "Igual ao peso"], 0, "τ = F·d·cos 90° = 0. Ex.: o peso numa mala carregada na horizontal."),
  q("A unidade de trabalho no SI é o:", ["Joule", "Watt", "Newton", "Pascal"], 0, "Trabalho e energia: joule (J)."),
  q("Levantar 10 kg a 2 m de altura (g = 10) exige trabalho de:", ["200 J", "20 J", "100 J", "2.000 J"], 0, "τ = m·g·h = 10·10·2 = 200 J."),
  q("1 kWh equivale a quantos joules?", ["3,6 milhões", "Mil joules exatos", "3.600 joules", "Apenas 60 joules"], 0, "1.000 W · 3.600 s = 3.600.000 J."),
  qe("Um motor eleva uma carga de 500 N a 10 m em 20 s.", "Qual é a potência útil do motor?", ["250 W", "5.000 W", "100 W", "25 W"], 0, "τ = 500 · 10 = 5.000 J; P = 5.000/20 = 250 W."),
  qe("Uma pessoa de 60 kg sobe 3 andares (9 m) de escada em 30 s. Use g = 10.", "Qual a potência média desenvolvida?", ["180 W", "5.400 W", "60 W", "540 W"], 0, "τ = 60·10·9 = 5.400 J; P = 5.400/30 = 180 W."),
  qe("Num rótulo de liquidificador está escrito '600 W'.", "Esse valor indica:", ["A energia que ele usa por segundo", "A energia total que ele gasta", "A tensão da tomada", "A corrente elétrica"], 0, "600 W = 600 J por segundo: é a potência."),
  qe("Duas pessoas sobem a mesma escada; uma corre e chega em 10 s, outra caminha e leva 30 s.", "Comparando as duas (mesmo peso):", ["Mesmo trabalho, potências diferentes", "Trabalhos diferentes", "A que caminha faz mais trabalho", "As potências são iguais"], 0, "O trabalho (m·g·h) é o mesmo; quem faz em menos tempo desenvolve mais potência."),
  q("Energia cinética é a energia associada ao(à):", ["Movimento", "Altura", "Deformação", "Temperatura"], 0, "Ec = m·v²/2: todo corpo em movimento a possui."),
  m("Marque as unidades de energia:", ["Joule", "Caloria", "kWh", "Watt", "Newton"], [0, 1, 2], "Watt é potência; newton é força."),
  m("Marque as situações em que a força realiza trabalho:", ["Empurrar uma caixa que desliza", "Levantar uma mochila do chão", "O peso de um corpo que cai", "Segurar um livro parado", "Carregar uma mala na horizontal (peso)"], [0, 1, 2], "Sem deslocamento, ou com força perpendicular, o trabalho é zero."),
], "n");

extend(FISICA, "Impulso, quantidade de movimento e gravitação", [
  q("O impulso de uma força é igual à variação da:", ["Quantidade de movimento", "Energia potencial gravitacional", "Temperatura média do corpo", "Massa total do sistema"], 0, "Teorema do impulso: I = ΔQ."),
  q("Numa colisão em sistema isolado, conserva-se sempre:", ["A quantidade de movimento", "A energia cinética", "A velocidade de cada corpo", "A forma dos corpos"], 0, "A quantidade de movimento total se conserva; a energia cinética só nas colisões elásticas."),
  q("Um corpo de 2 kg a 6 m/s colide e para em 0,2 s. A força média foi de:", ["60 N", "12 N", "2,4 N", "6 N"], 0, "ΔQ = 2·6 = 12 kg·m/s; F = 12/0,2 = 60 N."),
  q("A força gravitacional entre dois corpos depende:", ["Das massas e da distância", "Só da massa maior", "Da cor dos corpos", "Só da distância"], 0, "F = G·m₁·m₂/d²."),
  qe("O airbag infla e o motorista bate nele em vez de no volante.", "O airbag reduz a força no motorista porque:", ["Aumenta o tempo da colisão", "Diminui a massa do motorista", "Aumenta a velocidade do carro", "Elimina o impulso"], 0, "O impulso (ΔQ) é o mesmo; com mais tempo de contato, a força média (F = ΔQ/Δt) cai."),
  qe("Um patinador de 60 kg, parado, empurra outro de 40 kg, também parado. O primeiro sai a 2 m/s.", "Com que velocidade sai o segundo?", ["3 m/s", "2 m/s", "1,33 m/s", "5 m/s"], 0, "Q total inicial = 0: 60·2 = 40·v → v = 3 m/s, em sentido oposto."),
  qe("Um goleiro 'amortece' a bola recuando as mãos ao agarrá-la.", "Esse movimento serve para:", ["Diminuir a força nas mãos", "Aumentar a força da bola", "Mudar a massa da bola", "Aumentar a velocidade final"], 0, "Recuar aumenta o tempo de parada da bola, reduzindo a força média."),
  qe("Um satélite em órbita circular está a uma distância d do centro da Terra. Ele é levado para 2d.", "A força gravitacional sobre ele fica:", ["4 vezes menor", "2 vezes menor", "2 vezes maior", "Igual"], 0, "F ∝ 1/d²: dobrar a distância divide a força por 4."),
  q("Quantidade de movimento é o produto de:", ["Massa e velocidade", "Força e tempo", "Massa e aceleração", "Peso e altura"], 0, "Q = m·v, grandeza vetorial."),
  m("Marque as afirmações corretas sobre colisões:", ["Em sistema isolado, Q total se conserva", "Na colisão elástica, a energia cinética se conserva", "Na inelástica, os corpos podem ficar juntos", "A energia cinética sempre se conserva", "Q nunca se conserva"], [0, 1, 2], "Energia cinética só se conserva nas elásticas."),
  m("Marque dispositivos que aumentam o tempo de impacto para reduzir a força:", ["Airbag", "Capacete com espuma", "Colchão de salto", "Martelo de aço", "Para-choque rígido"], [0, 1, 2], "Martelo e para-choque rígido reduzem o tempo e aumentam a força."),
], "n");

extend(FISICA, "Termologia", [
  q("Quanto é 77 °F em Celsius?", ["25 °C", "45 °C", "77 °C", "35 °C"], 0, "C/5 = (F − 32)/9 → C = 5·45/9 = 25 °C."),
  q("A temperatura de um corpo mede:", ["A agitação das partículas", "A quantidade de calor guardada nele", "O tamanho e o volume do corpo", "A massa total de suas partículas"], 0, "Temperatura está ligada à energia cinética média das partículas."),
  q("Equilíbrio térmico ocorre quando dois corpos:", ["Ficam à mesma temperatura", "Passam a ter exatamente a mesma massa", "Deixam de existir como corpos separados", "Ocupam o mesmo volume no espaço"], 0, "Com temperaturas iguais, o calor deixa de fluir entre eles."),
  q("A água pura ferve, ao nível do mar, a:", ["100 °C ou 212 °F", "100 °C ou 100 °F", "0 °C ou 32 °F", "373 °C"], 0, "100 °C = 212 °F = 373 K."),
  qe("Um turista nos EUA vê a previsão de 104 °F.", "Essa temperatura equivale a:", ["40 °C", "72 °C", "104 °C", "20 °C"], 0, "C = 5·(104 − 32)/9 = 5·72/9 = 40 °C: dia muito quente."),
  qe("Um termômetro clínico é colocado na axila e retirado só depois de alguns minutos.", "Esse tempo é necessário para:", ["Haver equilíbrio térmico", "Esfriar o líquido dentro do tubo", "Gastar a bateria do aparelho todo", "Dilatar a pele da axila do paciente"], 0, "O termômetro só indica a temperatura do corpo quando os dois ficam à mesma temperatura."),
  qe("Ao tocar uma maçaneta de metal e uma porta de madeira, no mesmo ambiente, o metal parece mais frio.", "Por que o metal parece mais frio?", ["O metal conduz calor mais rápido", "O metal está mesmo mais frio que a madeira", "A madeira produz o seu próprio calor", "O metal tem muito mais massa que a porta"], 0, "Os dois estão à mesma temperatura; o metal tira calor da mão mais rápido e dá sensação de frio."),
  q("Uma variação de 10 °C corresponde a uma variação de:", ["10 K", "283 K", "50 °F", "1 K"], 0, "Na escala kelvin, os intervalos são iguais aos da Celsius."),
  m("Marque as correspondências corretas:", ["0 °C = 273 K", "0 °C = 32 °F", "100 °C = 212 °F", "0 K = 0 °C", "100 °C = 100 °F"], [0, 1, 2], "0 K = −273 °C; 100 °C = 212 °F."),
  m("Marque as afirmações corretas sobre calor e temperatura:", ["Calor flui do quente para o frio", "Temperatura não é o mesmo que calor", "O zero absoluto é o mínimo possível", "Corpos guardam calor dentro deles", "O frio passa para os corpos"], [0, 1, 2], "Calor é energia em trânsito, não algo 'guardado'; não existe fluxo de 'frio'."),
], "n");

extend(FISICA, "Termodinâmica", [
  q("Numa expansão isobárica, o gás realiza trabalho igual a:", ["P·ΔV", "P/ΔV", "V·ΔT", "Zero"], 0, "Com pressão constante, τ = P·ΔV."),
  q("Numa transformação adiabática:", ["Não há troca de calor", "A temperatura é constante", "O volume é constante", "A pressão é constante"], 0, "Q = 0: o trabalho vem da energia interna. Ex.: ar que sai rápido do spray esfria."),
  q("O rendimento máximo de uma máquina entre 600 K e 300 K (ciclo de Carnot) é:", ["50%", "100%", "30%", "200%"], 0, "η = 1 − Tf/Tq = 1 − 300/600 = 0,5."),
  q("Um gás recebe 300 J de calor e não realiza trabalho. Sua energia interna:", ["Aumenta 300 J", "Diminui 300 J", "Não muda", "Aumenta 600 J"], 0, "ΔU = Q − τ = 300 − 0 = 300 J."),
  qe("Ao encher o pneu da bicicleta com uma bomba manual, o cano da bomba esquenta.", "O aquecimento ocorre porque:", ["O trabalho vira energia interna", "O ar já entra quente vindo de fora", "A borracha da bomba produz calor sozinha", "O ar perde energia ao ser comprimido"], 0, "Comprimir o ar rapidamente é quase adiabático: o trabalho feito vira energia interna e a temperatura sobe."),
  qe("Num motor a combustão, só cerca de 30% da energia do combustível vira movimento.", "O restante é:", ["Dissipado, sobretudo como calor", "Destruído dentro do próprio motor", "Transformado de volta em combustível", "Guardado na bateria do carro"], 0, "Energia não se destrói: a maior parte sai como calor no escapamento e no radiador (2ª lei)."),
  qe("Uma geladeira 'retira calor' do interior e o joga no ambiente.", "Para isso, ela precisa:", ["De trabalho do compressor", "De nada, pois o processo é espontâneo", "Produzir frio a partir do nada", "Desligar o motor de vez em quando"], 0, "O calor não vai sozinho do frio para o quente: é preciso trabalho externo (2ª lei)."),
  qe("Uma panela de pressão chia e libera vapor pela válvula.", "Dentro dela, comparado a uma panela comum, há:", ["Pressão e temperatura maiores", "Uma pressão bem menor que a do ambiente", "Uma temperatura menor que 100 °C", "Vácuo quase total durante o cozimento"], 0, "A pressão maior eleva o ponto de ebulição para cerca de 120 °C."),
  q("Entropia está associada à:", ["Desordem do sistema", "Massa do sistema", "Velocidade da luz", "Cor do sistema"], 0, "Em processos naturais, a entropia do universo tende a aumentar."),
  m("Marque as afirmações compatíveis com a 2ª lei da termodinâmica:", ["Nenhuma máquina térmica tem rendimento de 100%", "Calor flui espontaneamente do quente ao frio", "Geladeiras precisam de energia externa", "Toda energia vira trabalho útil", "O calor flui sozinho do frio ao quente"], [0, 1, 2], "As duas últimas violam a 2ª lei."),
  o("Explique, pela 1ª lei da termodinâmica, por que o ar sai frio de um spray quando apertamos a válvula.", "O gás sai e se expande muito rápido, quase sem trocar calor com o ambiente (processo adiabático, Q ≈ 0). Pela 1ª lei, Q = τ + ΔU; como o gás realiza trabalho ao se expandir, sua energia interna diminui, e a temperatura cai.", [
    ["Expansão rápida/adiabática", "adiabat", "rapid", "expan"],
    ["Gás realiza trabalho", "trabalho"],
    ["Energia interna e temperatura diminuem", "energia interna", "esfria", "temperatura cai", "diminui"],
  ]),
], "n");

extend(FISICA, "Óptica geométrica", [
  q("A formação de sombras é explicada pela:", ["Propagação retilínea da luz", "Refração da luz entre dois meios", "Difração da luz ao passar por fendas", "Interferência entre duas ondas de luz"], 0, "A luz anda em linha reta; um objeto opaco bloqueia os raios e forma sombra."),
  q("Um objeto parece vermelho sob luz branca porque:", ["Reflete o vermelho", "Absorve apenas a luz vermelha", "Emite luz vermelha própria", "Refrata o azul e o verde"], 0, "A cor que vemos é a luz que o objeto reflete."),
  q("Um objeto azul iluminado só com luz vermelha parece:", ["Preto", "Azul", "Vermelho", "Branco"], 0, "Ele absorve o vermelho e não há azul para refletir: parece escuro."),
  q("Corpos transparentes:", ["Deixam passar a luz com nitidez", "Bloqueiam toda a luz", "Deixam passar luz sem nitidez", "Emitem luz própria"], 0, "Vidro limpo é transparente; vidro fosco é translúcido; madeira é opaca."),
  qe("Durante um eclipse solar, a Lua fica entre o Sol e a Terra.", "O fenômeno comprova:", ["A propagação retilínea da luz", "A refração da luz na atmosfera da Terra", "A dispersão da luz branca em cores", "A difração da luz em volta da Lua"], 0, "A sombra da Lua projetada na Terra mostra que a luz viaja em linha reta."),
  qe("Numa câmara escura (caixa com um furinho), a imagem de uma árvore aparece invertida no fundo.", "A inversão ocorre porque:", ["Os raios de luz se cruzam no furo", "A caixa espelha a imagem", "A luz faz curva", "O fundo da caixa é côncavo"], 0, "Raios do topo vão para baixo e os da base para cima, cruzando-se no orifício."),
  qe("De longe, as luzes de uma cidade à noite parecem tremer.", "Isso se deve principalmente:", ["À refração no ar agitado", "À reflexão da luz nas nuvens baixas", "Ao movimento real das lâmpadas da cidade", "À sombra dos prédios mais altos"], 0, "Camadas de ar com densidades variáveis desviam a luz de forma irregular."),
  q("Velocidade da luz no vácuo é de aproximadamente:", ["300.000 km/s", "340 m/s", "300 km/h", "3.000 km/s"], 0, "c ≈ 3 · 10⁸ m/s. 340 m/s é o som no ar."),
  m("Marque os fenômenos ópticos corretamente associados:", ["Arco-íris: dispersão", "Eco luminoso no espelho: reflexão", "Canudo 'quebrado': refração", "Sombra: refração", "Eclipse: dispersão"], [0, 1, 2], "Sombra e eclipse: propagação retilínea."),
  m("Marque materiais translúcidos:", ["Vidro jateado", "Papel vegetal", "Box de banheiro fosco", "Madeira", "Vidro de janela limpo"], [0, 1, 2], "Madeira é opaca; vidro limpo é transparente."),
], "n");

extend(FISICA, "Ondulatória", [
  q("O período de uma onda de frequência 5 Hz é:", ["0,2 s", "5 s", "0,5 s", "2 s"], 0, "T = 1/f = 1/5 = 0,2 s."),
  q("A amplitude de uma onda está ligada à sua:", ["Energia (intensidade)", "Velocidade de propagação no meio", "Frequência de oscilação", "Cor, no caso da luz visível"], 0, "Maior amplitude, maior energia: som mais alto, onda do mar mais forte."),
  q("Ondas sonoras no ar são:", ["Longitudinais", "Transversais", "Eletromagnéticas", "Estacionárias sempre"], 0, "As partículas do ar vibram na mesma direção em que a onda se propaga."),
  q("Ressonância acontece quando:", ["Há vibração na frequência natural", "A onda muda de um meio para outro", "A onda bate num obstáculo e volta", "Duas ondas se cancelam totalmente"], 0, "Recebendo energia na frequência natural, a amplitude cresce muito (ex.: taça que quebra com a voz)."),
  qe("Numa piscina, uma boia sobe e desce 2 vezes por segundo, e as cristas das ondas estão a 1,5 m uma da outra.", "Qual é a velocidade das ondas?", ["3 m/s", "0,75 m/s", "1,5 m/s", "2 m/s"], 0, "f = 2 Hz e λ = 1,5 m: v = λ·f = 3 m/s."),
  qe("Ao passar por uma fresta de porta, ouvimos o som de outra sala mesmo sem ver quem fala.", "O som contorna o obstáculo por:", ["Difração", "Reflexão total", "Polarização", "Dispersão"], 0, "Ondas sonoras têm comprimento grande e contornam obstáculos e frestas: difração."),
  qe("Fones com cancelamento de ruído emitem uma onda sonora oposta à do barulho externo.", "O fenômeno usado é a:", ["Interferência destrutiva", "Refração do som no ouvido", "Ressonância do tímpano", "Difração nas almofadas do fone"], 0, "Duas ondas em oposição de fase se somam e se anulam."),
  qe("Num estádio, a 'ola' passa pela torcida, mas cada pessoa só se levanta e senta no lugar.", "A ola mostra que uma onda transporta:", ["Energia, sem transportar matéria", "Matéria de um lugar a outro", "Pessoas pela arquibancada", "Som apenas"], 0, "A perturbação se propaga; as pessoas (o meio) não viajam junto."),
  q("A unidade de frequência, hertz, equivale a:", ["Oscilações por segundo", "Metros por segundo", "Segundos por oscilação", "Joules por segundo"], 0, "1 Hz = 1 ciclo por segundo."),
  m("Marque as ondas mecânicas:", ["Som", "Onda numa corda", "Onda sísmica", "Luz", "Raio X"], [0, 1, 2], "Luz e raio X são eletromagnéticos."),
  m("Marque fenômenos ondulatórios corretamente nomeados:", ["Eco: reflexão", "Som contornando um muro: difração", "Fone anti-ruído: interferência", "Arco-íris: ressonância", "Taça quebrando com a voz: refração"], [0, 1, 2], "Arco-íris: dispersão; taça: ressonância."),
], "n");

extend(FISICA, "Eletrostática", [
  q("Na eletrização por indução, o corpo induzido:", ["Não toca o indutor", "Encosta no indutor", "É atritado com ele", "Perde todos os prótons"], 0, "As cargas se separam pela aproximação; com aterramento, o corpo fica com carga oposta."),
  q("Pela lei de Coulomb, se a distância entre duas cargas cai pela metade, a força:", ["Quadruplica", "Dobra", "Cai pela metade", "Não muda"], 0, "F ∝ 1/d²: (1/2)² no denominador → força 4 vezes maior."),
  q("O para-raios funciona porque:", ["Oferece caminho fácil para a descarga até o chão", "Repele os raios para longe", "Cria um campo magnético protetor", "Absorve toda a eletricidade do ar"], 0, "Pontas concentram cargas; o raio é conduzido pelo cabo até a terra."),
  q("Condutores elétricos são materiais em que:", ["Elétrons se movem fácil", "Não existe nenhum elétron", "As cargas ficam presas no lugar", "Só há prótons livres no material"], 0, "Metais têm elétrons livres; borracha e plástico são isolantes."),
  qe("Ao tirar uma blusa de lã no escuro, aparecem pequenas faíscas e estalos.", "O fenômeno é causado por:", ["Eletrização por atrito", "Indução magnética", "Efeito fotoelétrico", "Reação química na lã"], 0, "O atrito transfere elétrons; a diferença de carga gera pequenas descargas."),
  qe("Em caminhões que transportam combustível, uma corrente arrasta no chão.", "Ela serve para:", ["Descarregar a eletricidade estática", "Medir a velocidade do caminhão", "Fazer barulho para alertar pedestres", "Ajudar a frear o caminhão na descida"], 0, "O atrito com o ar acumula carga; a corrente a escoa para o chão, evitando faíscas."),
  qe("Durante uma tempestade, é mais seguro ficar dentro de um carro fechado.", "O motivo principal é que a carroceria metálica:", ["Funciona como gaiola de Faraday", "Atrai os raios para longe", "É isolante", "Tem pneus que bloqueiam raios"], 0, "Num condutor fechado, as cargas ficam na superfície externa e o campo interno é nulo."),
  qe("Um balão atritado no cabelo gruda na parede.", "Isso ocorre porque o balão eletrizado:", ["Induz cargas opostas", "Fica magnetizado como um ímã", "Perde massa ao ser atritado", "Esquenta a parede e gruda nela"], 0, "O balão carregado polariza a parede, aproximando cargas opostas: há atração."),
  q("A carga elementar (de um elétron) vale aproximadamente:", ["1,6 · 10⁻¹⁹ C", "Exatamente 1 coulomb", "9 · 10⁹ coulombs", "6 · 10²³ coulombs"], 0, "e ≈ 1,6 · 10⁻¹⁹ C; o próton tem a mesma carga, positiva."),
  m("Marque os materiais condutores:", ["Cobre", "Alumínio", "Corpo humano molhado", "Borracha seca", "Vidro"], [0, 1, 2], "Borracha seca e vidro são isolantes."),
  m("Marque as afirmações corretas sobre cargas:", ["Cargas iguais se repelem", "No atrito, os corpos ficam com cargas opostas", "A carga total se conserva", "Prótons passam de um corpo a outro no atrito", "Corpos neutros não têm cargas"], [0, 1, 2], "No atrito passam elétrons; corpos neutros têm cargas positivas e negativas em igual número."),
], "n");

extend(FISICA, "Eletrodinâmica", [
  q("Corrente elétrica é medida em:", ["Ampère", "Volt, como a tensão", "Ohm, como a resistência", "Watt, como a potência"], 0, "Ampère (A) = coulomb por segundo."),
  q("Um aparelho de 1.100 W ligado em 220 V consome qual corrente?", ["5 A", "0,2 A", "242 A", "1.320 A"], 0, "P = U·i → i = 1.100/220 = 5 A."),
  q("Três resistores de 6 Ω em paralelo equivalem a:", ["2 Ω", "18 Ω", "6 Ω", "3 Ω"], 0, "n resistores iguais em paralelo: R/n = 6/3 = 2 Ω."),
  q("Segundo a 1ª lei de Ohm, mantendo a resistência, se a tensão dobra, a corrente:", ["Dobra", "Cai pela metade", "Não muda", "Quadruplica"], 0, "U = R·i: com R fixo, i é proporcional a U."),
  qe("Uma lâmpada de 60 W fica acesa 5 horas por dia durante 30 dias. O kWh custa R$ 0,80.", "Quanto custa esse consumo no mês?", ["R$ 7,20", "R$ 9,00", "R$ 72,00", "R$ 1,44"], 0, "E = 0,06 kW · 5 h · 30 = 9 kWh; 9 · 0,80 = R$ 7,20."),
  qe("Um chuveiro tem duas posições: 'verão' (2.000 W) e 'inverno' (5.000 W).", "Um banho de 15 min no 'inverno' gasta quanta energia a mais que no 'verão'?", ["0,75 kWh", "3 kWh", "1,25 kWh", "0,5 kWh"], 0, "Diferença de 3 kW durante 0,25 h: 0,75 kWh."),
  qe("Num pisca-pisca antigo de Natal, quando uma lâmpada queimava, todas apagavam.", "As lâmpadas estavam ligadas em:", ["Série", "Paralelo", "Curto-circuito", "Terra"], 0, "Em série há um só caminho: uma lâmpada queimada interrompe o circuito todo."),
  qe("O fio de um aquecedor esquenta quando passa corrente por ele.", "Esse aquecimento se chama:", ["Efeito Joule", "Efeito Doppler", "Efeito fotoelétrico", "Efeito estufa"], 0, "A corrente transforma energia elétrica em calor na resistência."),
  q("Um curto-circuito acontece quando:", ["A resistência do caminho é quase nula", "A tensão da rede cai a zero de repente", "Não há nenhuma corrente no circuito", "O fio usado é muito comprido e fino"], 0, "Com resistência mínima, a corrente fica enorme e aquece os fios: risco de incêndio."),
  m("Marque as relações corretas:", ["U = R·i", "P = U·i", "E = P·t", "P = U/i", "R = U·i"], [0, 1, 2], "R = U/i; P = U·i."),
  m("Marque atitudes que economizam energia elétrica:", ["Trocar lâmpadas por LED", "Banhos mais curtos no chuveiro elétrico", "Tirar aparelhos da tomada em standby", "Deixar a geladeira aberta", "Usar ferro de passar várias vezes por dia"], [0, 1, 2], "Geladeira aberta e ferro ligado várias vezes desperdiçam energia."),
  o("Por que as tomadas de uma casa são ligadas em paralelo, e não em série?", "Em paralelo, cada aparelho recebe a mesma tensão da rede (127 V ou 220 V) e funciona de forma independente: desligar ou queimar um não afeta os outros. Em série, a tensão se dividiria entre os aparelhos e, se um parasse, todos parariam.", [
    ["Mesma tensão para todos", "mesma tensao", "127", "220", "tensao da rede"],
    ["Funcionam de forma independente", "independ", "nao afeta", "sozinho"],
    ["Em série um afeta todos", "serie", "todos param", "divide"],
  ]),
], "n");

extend(FISICA, "Magnetismo e eletromagnetismo", [
  q("Polos magnéticos de mesmo nome:", ["Se repelem", "Se atraem", "Não interagem", "Se anulam"], 0, "Norte com norte e sul com sul se repelem; norte e sul se atraem."),
  q("Linhas de campo magnético de um ímã saem do polo:", ["Norte e entram no sul", "Sul e entram no norte", "Norte e entram no norte", "Centro do ímã"], 0, "Por convenção, fora do ímã as linhas vão do norte ao sul."),
  q("Um eletroímã é formado por:", ["Bobina com corrente e núcleo de ferro", "Dois ímãs naturais colados com cola forte", "Uma pilha comum, sem nenhum fio ligado", "Um fio de borracha enrolado num prego"], 0, "A corrente na bobina cria campo magnético, reforçado pelo núcleo de ferro; desligando, ele perde o efeito."),
  q("O campo magnético da Terra protege a vida porque:", ["Desvia partículas do vento solar", "Aquece o planeta durante o inverno", "Produz o oxigênio que respiramos", "Gera as marés nos oceanos"], 0, "A magnetosfera desvia partículas carregadas; as auroras surgem quando algumas entram perto dos polos."),
  qe("Num ferro-velho, um guindaste com um grande disco levanta carros e depois os solta.", "O disco funciona como:", ["Um eletroímã", "Um ímã permanente", "Um capacitor", "Um para-raios"], 0, "Ligado, o eletroímã atrai o ferro; desligando a corrente, ele solta a carga."),
  qe("Num motor elétrico, uma bobina com corrente gira entre ímãs.", "O motor transforma energia:", ["Elétrica em mecânica", "Mecânica em elétrica", "Térmica em elétrica", "Química em luminosa"], 0, "A força magnética sobre a corrente faz a bobina girar: elétrica → movimento. O gerador faz o inverso."),
  qe("Cartões com tarja magnética podem ser estragados se ficarem perto de ímãs fortes.", "Isso acontece porque:", ["O ímã altera a magnetização da tarja", "O ímã esquenta o cartão", "O ímã tira a tinta", "O ímã produz eletricidade estática"], 0, "Os dados estão gravados na orientação magnética das partículas da tarja."),
  qe("As auroras boreais aparecem principalmente perto dos polos.", "Elas se formam quando:", ["Partículas solares atingem o ar", "A Lua reflete luz sobre os polos", "O gelo polar emite luz no inverno", "Raios caem sem parar sobre o gelo"], 0, "O campo magnético conduz partículas do vento solar para os polos, onde excitam gases da atmosfera."),
  q("Um fio com corrente perto de uma bússola faz a agulha:", ["Desviar", "Girar sem parar", "Ficar imantada para sempre", "Esquentar"], 0, "Experimento de Oersted: a corrente cria campo magnético que desvia a agulha."),
  m("Marque aparelhos que usam eletromagnetismo:", ["Motor elétrico", "Alto-falante", "Campainha elétrica", "Termômetro de álcool", "Régua de plástico"], [0, 1, 2], "Termômetro e régua não envolvem eletromagnetismo."),
  m("Marque as afirmações corretas sobre ímãs e correntes:", ["Polos opostos se atraem", "Corrente elétrica gera campo magnético", "Não existe monopolo magnético", "O cobre é atraído por ímãs", "Ímãs funcionam só no vácuo"], [0, 1, 2], "Cobre não é atraído por ímãs comuns."),
], "n");

extend(FISICA, "Física moderna", [
  q("A energia de um fóton de frequência f é:", ["E = h·f", "E = m·g·h", "E = m·v²/2", "E = U·i"], 0, "h é a constante de Planck."),
  q("No modelo de Bohr, o elétron emite luz quando:", ["Cai para um nível menor", "Fica parado dentro do núcleo", "Ganha um próton do núcleo vizinho", "Sai do átomo em qualquer situação"], 0, "A diferença de energia entre os níveis sai como um fóton de cor específica."),
  q("A radioatividade foi estudada pioneiramente por:", ["Marie Curie", "Isaac Newton", "Galileu", "Arquimedes"], 0, "Marie Curie descobriu o polônio e o rádio e ganhou dois prêmios Nobel."),
  q("A fissão nuclear é a:", ["Divisão de um núcleo pesado", "União de núcleos leves", "Queima de carvão", "Reação química comum"], 0, "Usada nas usinas nucleares (ex.: urânio-235). A fusão (união) ocorre no Sol."),
  qe("Os letreiros de neon brilham com cores típicas de cada gás.", "Isso ocorre porque cada gás:", ["Emite fótons de energias próprias", "Reflete a luz do ambiente", "Esquenta até ficar branco", "Tem a mesma cor dos átomos"], 0, "Os elétrons excitados voltam a níveis menores emitindo cores específicas de cada elemento."),
  qe("Usinas nucleares geram eletricidade a partir do calor da fissão do urânio.", "Uma vantagem desse tipo de usina é:", ["Não emitir CO₂ na geração", "Não produzir resíduos", "Não ter riscos", "Usar fonte renovável"], 0, "A geração não emite gases de efeito estufa, mas há lixo radioativo e risco de acidentes."),
  qe("O GPS precisa considerar que relógios nos satélites marcam o tempo de forma diferente dos relógios na Terra.", "Esse ajuste vem da:", ["Teoria da relatividade", "Lei de Ohm", "Lei de Hooke", "Termodinâmica clássica"], 0, "Velocidade e gravidade diferentes alteram a passagem do tempo; sem correção, o GPS erraria quilômetros por dia."),
  qe("Exames de PET usam substâncias radioativas que emitem partículas detectadas por aparelhos.", "A meia-vida dessas substâncias deve ser:", ["Curta", "Muito longa, de séculos", "Infinita, para durar sempre", "Igual à do urânio-238"], 0, "Meia-vida curta permite o exame e reduz a exposição do paciente."),
  q("A dualidade onda-partícula diz que a luz:", ["Age como onda e partícula", "É só partícula, nunca onda", "É só onda, nunca partícula", "Não transporta energia alguma"], 0, "Interferência mostra o lado onda; efeito fotoelétrico, o lado partícula."),
  m("Marque fenômenos explicados pela física moderna:", ["Efeito fotoelétrico", "Funcionamento do laser", "Correção relativística do GPS", "Queda de uma maçã", "Flutuação de um barco"], [0, 1, 2], "Queda e flutuação são física clássica."),
  m("Marque usos da radiação nuclear:", ["Radioterapia contra câncer", "Datação por carbono-14", "Geração de energia em usinas", "Funcionamento de bússolas", "Cozinhar no micro-ondas"], [0, 1, 2], "Bússola é magnetismo; micro-ondas são ondas eletromagnéticas não nucleares."),
], "n");

extend(FISICA, "Movimento uniforme", [
  q("No gráfico v × t de um movimento uniforme, a linha é:", ["Horizontal", "Inclinada para cima", "Uma parábola", "Vertical"], 0, "A velocidade não muda: reta paralela ao eixo do tempo."),
  q("A função horária s = 10 + 5t indica velocidade de:", ["5 m/s", "10 m/s", "15 m/s", "50 m/s"], 0, "Na forma s = s₀ + v·t, v = 5 m/s e s₀ = 10 m."),
  q("Na função s = 40 − 8t (SI), o móvel passa pela origem em:", ["5 s", "8 s", "40 s", "32 s"], 0, "0 = 40 − 8t → t = 5 s. O movimento é retrógrado (v < 0)."),
  q("Movimento retrógrado é aquele em que:", ["A velocidade é negativa", "A velocidade aumenta a cada segundo", "O corpo fica parado no mesmo ponto", "Há aceleração constante e positiva"], 0, "Velocidade negativa: os espaços diminuem com o tempo."),
  qe("Um trem de 200 m a 20 m/s atravessa uma ponte de 400 m.", "Quanto tempo leva a travessia completa?", ["30 s", "20 s", "10 s", "40 s"], 0, "Precisa percorrer ponte + comprimento do trem: 600 m / 20 m/s = 30 s."),
  qe("Dois carros saem juntos do mesmo ponto, no mesmo sentido, a 60 km/h e 80 km/h.", "Após 3 h, qual é a distância entre eles?", ["60 km", "20 km", "420 km", "140 km"], 0, "Velocidade relativa: 80 − 60 = 20 km/h; em 3 h, 60 km."),
  qe("O som viaja a cerca de 340 m/s. Você vê um raio e ouve o trovão 3 s depois.", "A que distância caiu o raio?", ["Cerca de 1 km", "Exatos 340 metros", "Uns 3 quilômetros", "Cerca de 113 metros"], 0, "d = 340 · 3 = 1.020 m ≈ 1 km. A luz chega quase instantaneamente."),
  qe("Uma tartaruga anda a 0,1 m/s em linha reta.", "Quanto tempo ela leva para percorrer 18 m?", ["3 min", "18 s", "1,8 min", "30 min"], 0, "t = 18/0,1 = 180 s = 3 min."),
  q("Velocidade relativa entre dois carros que se aproximam, a 50 km/h e 70 km/h, é:", ["120 km/h", "20 km/h", "60 km/h", "3.500 km/h"], 0, "Sentidos opostos (aproximando-se): somam-se as velocidades."),
  m("Num MU com s = 5 + 3t (SI), marque as corretas:", ["Posição inicial: 5 m", "Velocidade: 3 m/s", "Em t = 2 s, s = 11 m", "A aceleração é 3 m/s²", "Em t = 2 s, s = 16 m"], [0, 1, 2], "No MU a aceleração é zero; s(2) = 5 + 6 = 11 m."),
  o("Explique como calcular o tempo de ultrapassagem de um trem por uma ponte, considerando o tamanho do trem.", "O trem só termina de atravessar quando sua traseira sai da ponte. Por isso a distância a percorrer é o comprimento da ponte mais o comprimento do trem. Depois, divide-se essa distância pela velocidade do trem: t = (L_ponte + L_trem)/v.", [
    ["Soma o comprimento do trem e da ponte", "soma", "mais o comprimento", "ponte + trem", "ponte mais"],
    ["Traseira sai da ponte", "traseira", "ultimo vagao", "termina"],
    ["Divide pela velocidade", "divid", "velocidade"],
  ]),
], "n");

extend(FISICA, "Queda livre e lançamentos", [
  q("Um corpo cai do repouso por 5 s (g = 10 m/s²). Que distância percorre?", ["125 m", "50 m", "250 m", "25 m"], 0, "h = g·t²/2 = 10·25/2 = 125 m."),
  q("Lançado para cima a 30 m/s (g = 10), a altura máxima é:", ["45 m", "30 m", "90 m", "15 m"], 0, "h = v₀²/(2g) = 900/20 = 45 m."),
  q("No lançamento horizontal, o tempo de queda depende:", ["Só da altura", "Da velocidade horizontal", "Da massa do corpo", "Da cor do corpo"], 0, "Na vertical, o movimento é queda livre; a velocidade horizontal não altera o tempo."),
  q("No lançamento oblíquo sem atrito, o maior alcance ocorre com ângulo de:", ["45°", "30°", "60°", "90°"], 0, "Alcance ∝ sen 2θ, máximo quando 2θ = 90°."),
  qe("Uma bola é jogada horizontalmente de uma mesa de 1,25 m de altura (g = 10).", "Quanto tempo ela leva até o chão?", ["0,5 s", "1,25 s", "0,25 s", "1 s"], 0, "1,25 = 5t² → t² = 0,25 → t = 0,5 s."),
  qe("Duas bolas saem juntas da beira de uma mesa: uma cai na vertical e a outra é lançada na horizontal.", "Qual chega primeiro ao chão?", ["Chegam juntas", "A que cai na vertical", "A lançada na horizontal", "Depende da massa"], 0, "As duas têm o mesmo movimento vertical (queda livre): o tempo é igual."),
  qe("Um jogador chuta a bola com velocidade vertical de 20 m/s (g = 10).", "Quanto tempo a bola fica no ar?", ["4 s", "2 s", "20 s", "1 s"], 0, "Sobe por v/g = 2 s e desce em mais 2 s: 4 s no total."),
  qe("Num pacote de paraquedas, um paraquedista atinge velocidade constante antes de abri-lo.", "Isso ocorre porque:", ["A resistência do ar iguala o peso", "A gravidade deixa de agir", "A massa dele diminui", "O ar o empurra para cima mais que o peso"], 0, "Com força resultante nula, a velocidade fica constante: velocidade terminal."),
  q("No ponto mais alto de um lançamento oblíquo, a velocidade:", ["É só horizontal", "É zero nas duas direções", "É só vertical, para baixo", "É a máxima de toda a trajetória"], 0, "A componente vertical zera; a horizontal continua."),
  m("Sobre a queda livre (sem ar), marque as corretas:", ["A aceleração é g para todos os corpos", "A velocidade cresce ~10 m/s a cada segundo", "A distância cresce com o quadrado do tempo", "Corpos pesados caem mais rápido", "A velocidade é constante"], [0, 1, 2], "Sem ar, a massa não importa e a velocidade aumenta."),
  m("No lançamento horizontal, marque as corretas:", ["A velocidade horizontal é constante", "Na vertical há queda livre", "A trajetória é uma parábola", "O tempo de queda depende da velocidade horizontal", "A trajetória é uma reta"], [0, 1, 2], "O tempo depende só da altura; a trajetória é parabólica."),
], "n");

extend(FISICA, "Atrito e plano inclinado", [
  q("Num plano inclinado sem atrito de 30°, um bloco desce com aceleração (g = 10):", ["5 m/s²", "10 m/s²", "8,7 m/s²", "3 m/s²"], 0, "a = g·sen 30° = 10·0,5 = 5 m/s²."),
  q("O coeficiente de atrito depende principalmente:", ["Dos materiais em contato", "Da área de contato", "Da velocidade", "Da cor da superfície"], 0, "μ depende do par de superfícies (borracha-asfalto, gelo-aço…)."),
  q("Num plano inclinado, a força normal vale:", ["P·cos θ", "P·sen θ", "P", "Zero"], 0, "A normal equilibra a componente do peso perpendicular ao plano: P·cos θ."),
  q("Um bloco parado num plano inclinado não desliza porque:", ["O atrito estático o segura", "Não há peso agindo sobre o bloco", "A normal é maior que o peso do bloco", "O plano puxa o bloco para dentro"], 0, "Enquanto P·sen θ for menor que o atrito máximo, o bloco fica parado."),
  qe("Num dia de chuva, carros derrapam mais nas curvas.", "Isso acontece porque a água:", ["Reduz o atrito entre pneu e pista", "Aumenta o peso do carro", "Aumenta o atrito", "Diminui a massa do carro"], 0, "A água forma uma película que diminui o coeficiente de atrito."),
  qe("Pneus 'carecas' são proibidos por lei.", "O principal motivo é que eles:", ["Perdem aderência na água", "Gastam bem mais combustível na estrada", "Fazem muito mais barulho ao rodar", "São mais pesados que os pneus novos"], 0, "Os sulcos tiram a água do contato; sem eles, o pneu aquaplana."),
  qe("Para subir uma caixa até um caminhão, usa-se uma rampa em vez de levantá-la direto.", "A rampa ajuda porque:", ["Exige menos força", "Diminui o trabalho total", "Elimina o peso", "Reduz a massa da caixa"], 0, "Força menor ao longo de um caminho maior; o trabalho (sem atrito) é o mesmo."),
  qe("Um bloco de 5 kg é empurrado num piso com μ = 0,4 (g = 10).", "Qual força mínima é necessária para manter o bloco em velocidade constante?", ["20 N", "50 N", "4 N", "2 N"], 0, "Velocidade constante: F = atrito = μ·N = 0,4·50 = 20 N."),
  q("Sem atrito, andar seria:", ["Impossível", "Mais fácil", "Igual", "Mais rápido"], 0, "Empurramos o chão para trás e o atrito nos empurra para frente."),
  m("Marque situações em que o atrito é útil:", ["Freios de carro", "Andar sem escorregar", "Segurar um copo", "Peças de motor se desgastando", "Esquentar o eixo de uma roda"], [0, 1, 2], "Desgaste e aquecimento de peças são efeitos indesejados."),
  m("Num plano inclinado sem atrito, marque as corretas:", ["A aceleração é g·sen θ", "A normal é P·cos θ", "Quanto maior o ângulo, maior a aceleração", "A aceleração independe do ângulo", "A normal é igual ao peso"], [0, 1, 2], "A aceleração depende de θ; a normal é menor que o peso."),
], "n");

extend(FISICA, "Gravitação universal", [
  q("A 3ª lei de Kepler relaciona o período orbital com:", ["O raio médio da órbita", "A massa do planeta", "A cor do planeta", "A temperatura"], 0, "T² ∝ R³: planetas mais distantes demoram mais para dar a volta."),
  q("A aceleração da gravidade na superfície de um planeta depende:", ["Da massa e do raio dele", "Apenas da massa do objeto que cai", "Da rotação da Lua em torno da Terra", "Da cor e do tipo do solo do planeta"], 0, "g = G·M/R²."),
  q("A Lua não cai na Terra porque:", ["Está em órbita, caindo e avançando", "Não existe gravidade na altura dela", "É leve demais para ser atraída", "O Sol a segura com sua gravidade"], 0, "Ela está sempre 'caindo', mas sua velocidade lateral a mantém em órbita."),
  q("Satélites geoestacionários ficam:", ["Parados em relação à superfície", "Parados em relação ao Sol", "Fora da gravidade", "Girando no sentido oposto"], 0, "Giram com o mesmo período da Terra (24 h), sobre o Equador."),
  qe("Num planeta com o dobro da massa da Terra e o mesmo raio, um astronauta subiria numa balança.", "Seu peso seria:", ["O dobro", "O mesmo", "A metade", "O quádruplo"], 0, "g = GM/R²: dobrando M com R igual, g dobra e o peso também."),
  qe("Mercúrio dá uma volta no Sol em 88 dias; a Terra, em 365.", "Pela 3ª lei de Kepler, isso acontece porque Mercúrio:", ["Está mais perto do Sol", "É maior que a Terra", "Gira mais devagar sobre si", "Tem mais luas"], 0, "Raio orbital menor → período menor (T² ∝ R³)."),
  qe("A Estação Espacial está a ~400 km de altura e dá uma volta na Terra a cada 90 minutos.", "Os astronautas 'flutuam' porque:", ["Estão em queda livre junto com a estação", "A gravidade lá é zero", "Usam botas magnéticas", "Estão no vácuo absoluto sem forças"], 0, "A gravidade lá é ~90% da superfície; tudo cai junto, sem apoio: imponderabilidade."),
  qe("Na Lua, a gravidade é cerca de 1/6 da terrestre.", "Um astronauta que salta 0,5 m na Terra saltaria, na Lua, cerca de:", ["3 m", "0,5 m", "6 m", "1 m"], 0, "Com g seis vezes menor e o mesmo impulso, a altura do salto fica cerca de 6 vezes maior."),
  q("O peso de um corpo no alto de uma montanha muito alta é:", ["Um pouco menor", "Muito maior", "Zero", "Igual ao da Lua"], 0, "Mais longe do centro da Terra, g diminui um pouco."),
  m("Marque as afirmações corretas sobre gravitação:", ["Toda massa atrai outra massa", "A força cai com o quadrado da distância", "A Terra também é atraída pela maçã", "Só a Terra tem gravidade", "A gravidade some no espaço"], [0, 1, 2], "Todo corpo com massa tem gravidade; ela diminui, mas não some, no espaço."),
  m("Marque as leis de Kepler corretamente descritas:", ["Órbitas elípticas com o Sol num foco", "Áreas iguais em tempos iguais", "T² proporcional a R³", "Órbitas circulares com a Terra no centro", "Velocidade orbital constante"], [0, 1, 2], "O planeta é mais rápido perto do Sol; o modelo é heliocêntrico."),
], "n");

extend(FISICA, "Conservação da energia", [
  q("Num pêndulo sem atrito, no ponto mais alto a energia é:", ["Toda potencial", "Toda cinética", "Zero", "Metade de cada"], 0, "Lá a velocidade é zero; a energia mecânica está como potencial."),
  q("Uma mola comprimida armazena energia:", ["Potencial elástica", "Cinética, de movimento", "Térmica, apenas como calor", "Nuclear, nos átomos do aço"], 0, "Ep = k·x²/2."),
  q("Um corpo de 2 kg desce de 10 m sem atrito (g = 10). Sua energia cinética no chão é:", ["200 J", "20 J", "100 J", "400 J"], 0, "Ec = Ep = m·g·h = 2·10·10 = 200 J."),
  q("O princípio da conservação da energia diz que a energia:", ["Se transforma, sem sumir", "Pode ser criada a partir do nada", "Sempre diminui no universo todo", "Só existe em corpos em movimento"], 0, "A energia total de um sistema isolado é constante."),
  qe("Uma montanha-russa começa num ponto de 20 m, parte do repouso e não tem atrito (g = 10).", "Qual a velocidade no ponto mais baixo (0 m)?", ["20 m/s", "200 m/s", "10 m/s", "40 m/s"], 0, "m·g·h = m·v²/2 → v = √(2·10·20) = √400 = 20 m/s."),
  qe("Numa usina eólica, o vento gira as pás e o gerador produz eletricidade.", "A sequência de transformação é:", ["Cinética → elétrica", "Elétrica → cinética", "Química → térmica", "Nuclear → elétrica"], 0, "O movimento do ar (cinética) gira o gerador, que produz energia elétrica."),
  qe("Um skatista desce uma rampa, sobe do outro lado e atinge uma altura um pouco menor que a inicial.", "A diferença de altura se deve a:", ["Perdas por atrito e ar", "Criação de energia", "Aumento da massa", "Gravidade menor do outro lado"], 0, "Parte da energia mecânica vira calor e som; a energia total se conserva."),
  qe("Ao comer, obtemos energia química dos alimentos; ao correr, ela vira movimento e calor.", "O exemplo ilustra que a energia:", ["Se transforma de uma forma em outra", "Some depois de usada", "É criada pelos músculos", "Não tem relação com alimentos"], 0, "É a conservação: química → cinética + térmica."),
  q("Um carro freando transforma energia cinética principalmente em:", ["Calor nos freios", "Energia nuclear", "Energia potencial", "Massa"], 0, "O atrito nos freios aquece discos e pastilhas."),
  m("Marque transformações de energia corretas:", ["Pilha: química → elétrica", "Lâmpada: elétrica → luz e calor", "Hidrelétrica: potencial → elétrica", "Fotossíntese: elétrica → química", "Ventilador: térmica → elétrica"], [0, 1, 2], "Fotossíntese: luminosa → química; ventilador: elétrica → cinética."),
  o("Um carrinho é solto do alto de uma rampa sem atrito. Explique as transformações de energia até ele chegar embaixo.", "No alto, o carrinho parado tem só energia potencial gravitacional. Enquanto desce, a altura diminui e a velocidade aumenta: a potencial vira cinética. Sem atrito, a energia mecânica se conserva, e embaixo toda a potencial virou cinética.", [
    ["No alto: energia potencial", "potencial"],
    ["Descendo: vira cinética", "cinetica"],
    ["Energia mecânica se conserva", "conserva", "mesma", "constante"],
  ]),
], "n");

extend(FISICA, "Potência e rendimento", [
  q("Uma lâmpada de 100 W ligada por 1 minuto consome:", ["6.000 J", "100 J", "1.000 J", "60 J"], 0, "E = P·t = 100 · 60 = 6.000 J."),
  q("Um aparelho de rendimento 25% recebe 400 W. A potência útil é:", ["100 W", "300 W", "25 W", "1.600 W"], 0, "Pu = 0,25 · 400 = 100 W."),
  q("A potência dissipada (perdida) num motor de 1.000 W com 70% de rendimento é:", ["300 W", "700 W", "70 W", "1.700 W"], 0, "Útil = 700 W; perdida = 1.000 − 700 = 300 W."),
  q("O cavalo-vapor (cv) é unidade de:", ["Potência", "Energia", "Força", "Pressão"], 0, "1 cv ≈ 735 W."),
  qe("O selo Procel A indica os eletrodomésticos mais eficientes.", "Um aparelho mais eficiente:", ["Converte mais energia em trabalho útil", "Gasta mais energia elétrica", "Tem maior potência sempre", "É sempre mais barato"], 0, "Maior eficiência = maior rendimento: menos energia desperdiçada."),
  qe("Uma lâmpada incandescente de 60 W transforma só 5% da energia em luz.", "Quantos watts viram calor?", ["57 W", "3 W", "60 W", "55 W"], 0, "Luz = 0,05 · 60 = 3 W; calor = 60 − 3 = 57 W."),
  qe("Um elevador de 1.000 kg sobe 20 m em 10 s (g = 10).", "Qual a potência útil do motor?", ["20 kW", "2 kW", "200 kW", "10 kW"], 0, "τ = 1.000·10·20 = 200.000 J; P = 200.000/10 = 20.000 W."),
  qe("Dois carros sobem a mesma serra; o de motor mais potente chega antes.", "A potência maior permite:", ["Fazer o trabalho mais rápido", "Gastar menos energia em qualquer caso", "Subir a serra sem realizar trabalho", "Diminuir o peso total do carro na subida"], 0, "Potência = trabalho/tempo."),
  q("Rendimento acima de 100% é:", ["Impossível", "Comum em motores", "Típico de lâmpadas LED", "Obrigatório por lei"], 0, "Violaria a conservação de energia: sairia mais do que entra."),
  m("Marque as afirmações corretas sobre potência e rendimento:", ["Rendimento = útil / total", "LED tem rendimento maior que incandescente", "Toda máquina real tem perdas", "Rendimento pode passar de 100%", "Potência é medida em joules"], [0, 1, 2], "Rendimento é no máximo 100%; potência é em watts."),
  m("Marque aparelhos que costumam ter alta potência em casa:", ["Chuveiro elétrico", "Ferro de passar", "Forno elétrico", "Carregador de celular", "Lâmpada LED"], [0, 1, 2], "Carregador e LED têm potências baixas."),
], "n");

extend(FISICA, "Calorimetria", [
  q("Calor específico é a quantidade de calor para:", ["Elevar 1 °C de 1 g", "Derreter 1 kg de gelo a 0 °C", "Ferver 1 litro de água na panela", "Esfriar o corpo depois do exercício"], 0, "Ex.: água tem c = 1 cal/g·°C."),
  q("Para aquecer 500 g de água de 20 °C a 30 °C são necessárias:", ["5.000 cal", "500 cal", "15.000 cal", "10.000 cal"], 0, "Q = 500 · 1 · 10 = 5.000 cal."),
  q("Capacidade térmica de um corpo é:", ["Massa × calor específico", "Massa / volume", "Força × área", "Temperatura × tempo"], 0, "C = m·c: calor por grau de variação do corpo inteiro."),
  q("Para vaporizar 10 g de água a 100 °C (L = 540 cal/g):", ["5.400 cal", "540 cal", "1.000 cal", "54 cal"], 0, "Q = m·L = 10 · 540 = 5.400 cal."),
  qe("Cidades litorâneas têm menor variação de temperatura entre dia e noite que cidades do interior.", "Isso se deve:", ["Ao calor específico da água", "Ao vento do mar, que é sempre frio", "À falta de sol nas cidades da costa", "Ao sal dissolvido na água do mar"], 0, "O mar demora a esquentar e a esfriar, suavizando a temperatura da região."),
  qe("Numa garrafa térmica, mistura-se 200 g de água a 80 °C com 200 g a 40 °C.", "Qual a temperatura final (sem perdas)?", ["60 °C", "120 °C", "40 °C", "50 °C"], 0, "Massas iguais da mesma substância: média = 60 °C."),
  qe("Ao sair de uma piscina, sentimos frio mesmo num dia quente.", "Isso acontece porque a água na pele:", ["Evapora e tira calor", "É mais fria que o ar em volta", "Reflete a luz do sol para longe", "Impede o suor de sair da pele"], 0, "A evaporação absorve calor latente da pele."),
  qe("Um bloco de gelo a 0 °C é colocado num copo de água.", "Enquanto houver gelo, a temperatura do sistema tende a ficar em:", ["0 °C", "−10 °C", "25 °C", "100 °C"], 0, "O calor da água é usado para derreter o gelo, que fica em 0 °C até acabar."),
  q("1 caloria equivale a aproximadamente:", ["4,2 J", "1.000 J", "0,24 J", "100 J"], 0, "1 cal ≈ 4,18 J."),
  m("Marque as afirmações corretas sobre calor latente:", ["Muda o estado físico", "Não muda a temperatura durante a mudança", "Q = m·L", "Muda a temperatura sem mudar o estado", "Só existe na fusão"], [0, 1, 2], "Calor latente existe em toda mudança de estado."),
  m("Marque situações explicadas pelo alto calor específico da água:", ["Clima ameno no litoral", "Uso da água para esfriar motores", "Bolsa de água quente que dura muito", "Gelo flutuar na água", "Sal derreter a neve"], [0, 1, 2], "Gelo flutua por densidade; sal na neve é crioscopia."),
], "n");

extend(FISICA, "Dilatação e transmissão de calor", [
  q("Ao aquecer uma placa metálica com um furo, o furo:", ["Aumenta", "Diminui", "Some", "Não muda"], 0, "O furo dilata como se fosse feito do mesmo material."),
  q("A transmissão de calor pela convecção ocorre em:", ["Líquidos e gases", "Sólidos, apenas", "No vácuo, sem matéria", "Só em metais aquecidos"], 0, "Na convecção, a própria matéria se move (correntes de fluido)."),
  q("A garrafa térmica tem paredes espelhadas para reduzir a perda por:", ["Irradiação", "Condução", "Convecção", "Evaporação"], 0, "As paredes espelhadas refletem a radiação térmica; o vácuo entre elas corta condução e convecção."),
  q("Lâminas bimetálicas (dois metais colados) curvam ao aquecer porque:", ["Os metais dilatam diferente", "Um dos metais derrete com o calor", "A cola entre eles se expande muito", "As lâminas perdem massa ao esquentar"], 0, "Coeficientes de dilatação diferentes: a lâmina curva. Usado em termostatos e disjuntores."),
  qe("Num pote de vidro com tampa metálica emperrada, coloca-se a tampa sob água quente.", "A tampa solta porque:", ["O metal dilata mais que o vidro", "O vidro encolhe com o calor", "A água lubrifica a rosca", "O ar sai do pote"], 0, "O coeficiente de dilatação do metal é maior: a tampa se expande mais que o gargalo."),
  qe("Em casas de clima quente, as paredes costumam ser pintadas de branco.", "A cor clara ajuda porque:", ["Reflete mais radiação solar", "Conduz mais calor", "Aumenta a convecção", "Absorve mais luz"], 0, "Cores claras refletem a radiação; cores escuras absorvem e esquentam mais."),
  qe("Num inverno muito frio, lagos congelam apenas na superfície.", "Isso permite a vida no fundo porque:", ["A água a 4 °C fica no fundo", "O gelo é mais denso e vai para o fundo", "O fundo do lago recebe muito sol", "A água salgada nunca congela"], 0, "A água tem densidade máxima a 4 °C; o gelo, menos denso, flutua e isola o lago."),
  qe("Na cozinha, panelas de cobre ou alumínio aquecem rápido e por igual.", "Isso se deve à:", ["Boa condução de calor do metal", "Baixa massa do metal da panela", "Cor escura do metal da panela", "Convecção que ocorre dentro do metal"], 0, "Metais conduzem bem o calor; por isso também usam cabos isolantes."),
  q("O efeito estufa natural está ligado principalmente à:", ["Retenção de infravermelho", "Condução de calor pelo solo", "Convecção nos oceanos tropicais", "Dilatação do ar nos dias quentes"], 0, "Gases como CO₂ e vapor d'água retêm parte do infravermelho emitido pela Terra."),
  m("Marque cada forma de propagação do calor com seu exemplo certo:", ["Condução: colher quente na sopa", "Convecção: brisa marítima", "Irradiação: calor de uma fogueira no rosto", "Condução: calor do Sol na Terra", "Irradiação: água fervendo na panela"], [0, 1, 2], "Calor do Sol é irradiação; água fervendo envolve convecção."),
  m("Marque situações em que a dilatação precisa ser considerada:", ["Juntas em pontes", "Espaços entre trilhos", "Fios de alta tensão mais frouxos no verão", "Peso de um livro", "Cor de uma parede"], [0, 1, 2], "Peso e cor não envolvem dilatação."),
], "n");

extend(FISICA, "Gases e máquinas térmicas", [
  q("Na lei de Charles (pressão constante), aumentar a temperatura absoluta faz o volume:", ["Aumentar", "Diminuir", "Não mudar", "Zerar"], 0, "V/T = constante: o gás se expande ao esquentar."),
  q("Na lei geral dos gases, as temperaturas devem estar em:", ["Kelvin", "Celsius", "Fahrenheit", "Qualquer escala"], 0, "As relações P·V/T só valem com temperatura absoluta."),
  q("Um gás a 300 K é aquecido a 600 K em volume constante. A pressão:", ["Dobra", "Cai pela metade", "Não muda", "Quadruplica"], 0, "P/T = constante: dobrando T, P dobra."),
  q("Máquinas térmicas funcionam entre uma fonte quente e:", ["Uma fonte fria", "Outra fonte quente", "O vácuo", "Uma bateria"], 0, "Parte do calor da fonte quente vira trabalho; o resto vai para a fonte fria."),
  qe("Uma lata de spray tem o aviso: “Não exponha a temperaturas acima de 50 °C”.", "O risco de expor a lata ao calor é:", ["A pressão subir e ela explodir", "O gás de dentro congelar", "A lata encolher e amassar", "O spray perder a cor e o cheiro"], 0, "Com volume fixo, mais temperatura significa mais pressão (P/T constante)."),
  qe("Um balão de festa cheio é colocado no congelador e murcha.", "O balão murcha porque:", ["O gás frio ocupa menos volume", "O ar escapa pela borracha fria", "O gás congela e vira sólido", "A pressão externa cai"], 0, "Com pressão quase constante, menor temperatura → menor volume."),
  qe("A locomotiva a vapor transformava o calor da queima de carvão em movimento.", "Ela é um exemplo de:", ["Máquina térmica", "Motor elétrico", "Gerador eólico", "Painel solar"], 0, "Calor → trabalho mecânico, com parte do calor rejeitada."),
  qe("Um mergulhador solta bolhas de ar no fundo do mar; elas crescem enquanto sobem.", "As bolhas aumentam porque:", ["A pressão da água diminui na subida", "A água esquenta muito", "O ar da bolha aumenta de massa", "A gravidade diminui"], 0, "Lei de Boyle: menos pressão, mais volume (temperatura quase constante)."),
  q("Um gás ideal ocupa 10 L a 2 atm. Na mesma temperatura, a 1 atm ocupará:", ["20 L", "5 L", "10 L", "40 L"], 0, "P₁V₁ = P₂V₂ → 2·10 = 1·V₂ → 20 L."),
  m("Marque as transformações e o que fica constante:", ["Isotérmica: temperatura", "Isobárica: pressão", "Isovolumétrica: volume", "Adiabática: temperatura", "Isobárica: volume"], [0, 1, 2], "Adiabática: não há troca de calor (a temperatura muda)."),
  o("Explique por que os pneus devem ser calibrados com eles frios, e não logo após uma viagem.", "Depois de rodar, o atrito aquece o ar dentro do pneu. Com o volume quase constante, a pressão aumenta com a temperatura (P/T constante). Calibrando quente, a pressão parece maior do que a real e o pneu ficaria vazio quando esfriasse.", [
    ["O ar esquenta ao rodar", "esquent", "aquec", "quente"],
    ["Pressão aumenta com a temperatura", "pressao aument", "p/t", "pressao sobe", "temperatura"],
    ["Leitura enganosa / pneu fica vazio", "engan", "vazio", "murch", "real"],
  ]),
], "n");

extend(FISICA, "Espelhos", [
  q("Num espelho côncavo, um objeto colocado no foco forma imagem:", ["Imprópria (no infinito)", "Real, invertida e menor", "Virtual, direita e menor", "Do mesmo tamanho do objeto"], 0, "Raios que saem do foco refletem paralelos: não se cruzam, a imagem fica 'no infinito'."),
  q("Espelhos convexos sempre formam imagens:", ["Virtuais e menores", "Reais e maiores que o objeto", "Reais e invertidas no espelho", "Do mesmo tamanho que o objeto"], 0, "Por isso ampliam o campo visual em retrovisores e lojas."),
  q("A distância focal de um espelho esférico é:", ["Metade do raio", "O dobro do raio de curvatura", "Igual ao raio de curvatura", "Zero em qualquer espelho curvo"], 0, "f = R/2."),
  q("Um espelho plano que gira de um ângulo α faz o raio refletido girar:", ["2α", "α", "α/2", "4α"], 0, "Propriedade dos espelhos planos: o refletido gira o dobro."),
  qe("Faróis de carro usam um espelho côncavo com a lâmpada no foco.", "Essa montagem serve para:", ["Produzir um feixe de raios paralelos", "Espalhar a luz em todas as direções", "Diminuir a luz", "Formar uma imagem invertida"], 0, "Raios que saem do foco refletem paralelos ao eixo, formando um feixe que vai longe."),
  qe("Em lojas e cruzamentos, há espelhos curvos que mostram uma área grande.", "Esses espelhos são:", ["Convexos", "Côncavos", "Planos", "Parabólicos de foco"], 0, "Convexos dão imagem menor, mas com campo visual amplo."),
  qe("Antenas parabólicas concentram os sinais de satélite num receptor.", "O receptor fica posicionado:", ["No foco da antena", "Atrás da antena", "Na borda da antena", "Em qualquer ponto"], 0, "Ondas que chegam paralelas convergem no foco, onde fica o receptor."),
  qe("Uma pessoa de 1,70 m quer se ver inteira num espelho plano vertical.", "O espelho precisa ter, no mínimo:", ["85 cm de altura", "1,70 m de altura", "3,40 m de altura", "50 cm de altura"], 0, "Por semelhança de triângulos, basta metade da altura da pessoa."),
  q("Dentistas usam espelhos côncavos pequenos para:", ["Ver o dente ampliado", "Ver o dente menor", "Iluminar com raios divergentes", "Inverter a imagem"], 0, "Com o dente entre o foco e o espelho, a imagem é virtual, direita e maior."),
  m("Marque usos corretos de espelhos:", ["Côncavo: maquiagem", "Convexo: retrovisor", "Côncavo: farol", "Convexo: concentrar luz solar", "Plano: aumentar a imagem"], [0, 1, 2], "Concentrar luz é do côncavo; o plano não aumenta."),
  m("Marque o que vale para a imagem num espelho plano:", ["Imagem do mesmo tamanho", "Imagem simétrica em relação ao espelho", "Imagem virtual", "Imagem real", "Imagem invertida de cabeça para baixo"], [0, 1, 2], "A imagem é virtual e direita; só troca esquerda e direita."),
], "n");

extend(FISICA, "Lentes, refração e visão", [
  q("Índice de refração é a razão entre:", ["Velocidade da luz no vácuo e no meio", "A massa do material e o seu volume", "A frequência e o período da luz", "O raio da lente e a sua distância focal"], 0, "n = c/v: quanto maior n, mais lenta a luz no meio."),
  q("Ao passar do ar para a água, a luz:", ["Diminui a velocidade", "Aumenta a velocidade", "Para", "Muda de frequência"], 0, "A água é mais refringente: a luz fica mais lenta e se aproxima da normal."),
  q("Uma lupa é uma lente:", ["Convergente", "Divergente", "Plana", "Cilíndrica negativa"], 0, "Com o objeto entre a lente e o foco, a imagem é virtual e ampliada."),
  q("A presbiopia ('vista cansada') é corrigida com lentes:", ["Convergentes", "Divergentes", "Cilíndricas", "Bifocais divergentes só"], 0, "Com a idade, o cristalino perde elasticidade e o perto fica borrado: lente convergente para leitura."),
  qe("Numa piscina, uma moeda no fundo parece mais perto da superfície do que está.", "Isso ocorre por causa da:", ["Refração da luz", "Reflexão total", "Difração", "Dispersão"], 0, "A luz muda de direção ao sair da água para o ar; o olho prolonga os raios e vê a moeda mais acima."),
  qe("Uma pessoa vê bem de longe, mas precisa afastar o livro para ler.", "Ela provavelmente tem:", ["Hipermetropia", "Miopia, dificuldade para longe", "Daltonismo, confusão de cores", "Apenas astigmatismo leve"], 0, "Dificuldade para perto: a imagem se formaria atrás da retina. Corrige-se com lente convergente."),
  qe("O astigmatismo deixa a visão distorcida porque a córnea tem curvatura irregular.", "Ele é corrigido com lentes:", ["Cilíndricas", "Esféricas divergentes", "Planas", "Coloridas"], 0, "Lentes cilíndricas compensam a diferença de curvatura em uma direção."),
  qe("Miragens no asfalto quente parecem poças d'água.", "O fenômeno é causado:", ["Pelo desvio da luz no ar quente", "Por água evaporada no chão", "Pela reflexão em óleo", "Por ilusão da memória"], 0, "O ar quente perto do chão desvia a luz do céu (refração, até reflexão total), parecendo água."),
  q("O olho humano forma, na retina, uma imagem:", ["Real e invertida", "Virtual e direita", "Virtual e invertida", "Real e maior"], 0, "O cristalino é uma lente convergente; o cérebro 'desinverte' a imagem."),
  m("Marque cada defeito de visão com a lente que o corrige:", ["Miopia: divergente", "Hipermetropia: convergente", "Astigmatismo: cilíndrica", "Miopia: convergente", "Presbiopia: divergente"], [0, 1, 2], "Miopia usa divergente; presbiopia, convergente."),
  m("Marque fenômenos de refração:", ["Canudo parecendo quebrado no copo", "Arco-íris", "Piscina parecendo rasa", "Eco numa montanha", "Imagem no espelho do banheiro"], [0, 1, 2], "Eco e espelho são reflexão."),
], "n");

extend(FISICA, "Som e acústica", [
  q("A velocidade do som é maior:", ["Nos sólidos", "No ar", "No vácuo", "Nos gases rarefeitos"], 0, "Sólidos transmitem melhor a vibração: no aço o som passa de 5.000 m/s."),
  q("O ouvido humano percebe, em geral, sons entre:", ["20 Hz e 20.000 Hz", "0 e 20 Hz", "20.000 e 100.000 Hz", "1 e 100 Hz"], 0, "Abaixo de 20 Hz é infrassom; acima de 20 kHz, ultrassom."),
  q("A intensidade sonora é medida em:", ["Decibéis", "Hertz", "Metros", "Watts por grama"], 0, "Decibel (dB), escala logarítmica. Acima de 85 dB por longos períodos pode lesar a audição."),
  q("Ultrassom é usado em:", ["Exames de imagem", "Ligações da telefonia fixa", "Lâmpadas de baixo consumo", "Painéis solares de casas"], 0, "O eco do ultrassom nos tecidos forma imagens (ex.: ultrassonografia na gravidez)."),
  qe("Morcegos emitem sons agudos e percebem o eco para voar no escuro.", "Esse sistema de localização se chama:", ["Ecolocalização", "Fotossíntese", "Indução", "Dispersão"], 0, "Pelo tempo do eco, o morcego calcula a distância dos obstáculos e presas."),
  qe("Um navio emite um som para o fundo do mar e o eco volta em 2 s. O som na água anda a 1.500 m/s.", "Qual é a profundidade?", ["1.500 m", "3.000 m", "750 m", "6.000 m"], 0, "O som vai e volta: 1.500 · 2 = 3.000 m de ida e volta; a profundidade é a metade."),
  qe("Fones de ouvido no volume máximo podem passar de 100 dB.", "O uso prolongado nesse volume pode causar:", ["Perda auditiva", "Melhora da audição", "Aumento da visão", "Nenhum efeito"], 0, "Exposição contínua acima de 85 dB lesa as células do ouvido interno."),
  qe("Um violonista aperta a corda contra uma casa mais perto do corpo do violão, encurtando a parte que vibra.", "O som fica:", ["Mais agudo", "Mais grave", "Mais alto apenas", "Igual"], 0, "Corda vibrando mais curta = frequência maior = som mais agudo."),
  q("No espaço, astronautas não ouvem uma explosão próxima porque:", ["Não há meio para o som", "O som é rápido demais para ouvir", "O capacete bloqueia a luz e o som", "O som se transforma em luz lá"], 0, "Som é onda mecânica e precisa de matéria."),
  m("Marque as características do som corretamente associadas:", ["Altura: frequência", "Intensidade: amplitude", "Timbre: forma da onda", "Altura: volume", "Timbre: velocidade"], [0, 1, 2], "Altura é agudo/grave (frequência); volume é intensidade."),
  m("Marque aplicações do eco:", ["Sonar de navios", "Ultrassonografia", "Ecolocalização de golfinhos", "Painel solar", "Lâmpada LED"], [0, 1, 2], "Painel e LED não usam som."),
  o("Explique como um sonar mede a profundidade do mar.", "O sonar emite um pulso de som para o fundo e mede o tempo até o eco voltar. Como a velocidade do som na água é conhecida (cerca de 1.500 m/s), multiplica-se a velocidade pelo tempo e divide-se por 2, porque o som vai e volta.", [
    ["Emite som e capta o eco", "eco", "emite", "pulso"],
    ["Usa velocidade × tempo", "velocidade", "tempo", "1.500", "1500"],
    ["Divide por 2 (ida e volta)", "metade", "por 2", "ida e volta", "vai e volta"],
  ]),
], "n");

extend(FISICA, "Ondas eletromagnéticas", [
  q("Ondas eletromagnéticas são formadas por:", ["Campos elétrico e magnético", "Moléculas de ar vibrando juntas", "Partículas de água em movimento", "Som de altíssima frequência"], 0, "Campos que se geram mutuamente e se propagam até no vácuo."),
  q("Qual tem maior comprimento de onda?", ["Ondas de rádio", "Luz visível", "Raios X", "Raios gama"], 0, "Rádio tem frequência baixa e comprimento grande (de metros a quilômetros)."),
  q("A cor da luz visível com maior frequência é:", ["Violeta", "Vermelha", "Verde", "Amarela"], 0, "Do vermelho (menor frequência) ao violeta (maior)."),
  q("A radiação infravermelha está ligada principalmente a:", ["Calor", "Bronzeamento", "Raio X", "Som"], 0, "Corpos quentes emitem infravermelho; câmeras térmicas o detectam."),
  qe("Controles remotos de TV emitem um sinal que não vemos, mas que aparece na câmera do celular como uma luz piscando.", "Esse sinal é:", ["Infravermelho", "Ultravioleta forte", "Raio X de baixa dose", "Som muito agudo"], 0, "A câmera do celular capta o infravermelho, invisível ao olho humano."),
  qe("Técnicos de radiologia ficam atrás de uma parede com chumbo durante os exames.", "A proteção é necessária porque os raios X:", ["São ionizantes", "São quentes demais para a pele", "Fazem um barulho muito alto", "Atraem objetos de metal da sala"], 0, "Radiação ionizante pode alterar o DNA; a exposição repetida acumula risco."),
  qe("No 5G e no Wi-Fi, a informação viaja por ondas de alta frequência.", "Essas ondas são classificadas como:", ["Ondas de rádio", "Raios gama de alta energia", "Ondas sonoras muito agudas", "Ondas sísmicas pelo solo"], 0, "Ficam na faixa de rádio/micro-ondas, não ionizante."),
  qe("Bronzeamento e queimaduras de sol são causados principalmente pela radiação:", "Qual é essa radiação?", ["Ultravioleta", "Infravermelha", "Rádio", "Micro-ondas"], 0, "O UV tem energia suficiente para afetar a pele e o DNA."),
  q("Todas as ondas eletromagnéticas, no vácuo, viajam a:", ["Cerca de 300.000 km/s", "340 m/s", "1.500 m/s", "Velocidades diferentes"], 0, "Todas têm a mesma velocidade c no vácuo; mudam frequência e comprimento."),
  m("Marque as ondas eletromagnéticas:", ["Micro-ondas", "Luz visível", "Ultravioleta", "Ultrassom", "Onda do mar"], [0, 1, 2], "Ultrassom e onda do mar são mecânicas."),
  m("Marque as radiações ionizantes:", ["Raios X", "Raios gama", "Ultravioleta de alta energia", "Ondas de rádio", "Infravermelho"], [0, 1, 2], "Rádio e infravermelho não são ionizantes."),
], "n");

extend(FISICA, "Circuitos e consumo na conta de luz", [
  q("O consumo de energia de um aparelho depende da:", ["Potência e do tempo de uso", "Cor e do tamanho do aparelho", "Marca da tomada onde é ligado", "Tensão da rede, apenas dela"], 0, "E = P·t."),
  q("Uma TV de 100 W ligada 6 h por dia, em 30 dias, consome:", ["18 kWh", "180 kWh", "1,8 kWh", "600 kWh"], 0, "0,1 kW · 6 · 30 = 18 kWh."),
  q("O 'modo stand-by' de um aparelho:", ["Ainda consome energia", "Não consome nada", "Gera energia", "Desliga a tomada"], 0, "Mesmo desligado pelo controle, o aparelho gasta um pouco para ficar pronto."),
  q("A conta de luz é cobrada em kWh porque mede:", ["Energia consumida", "Potência instalada", "Corrente máxima", "Tensão da rede"], 0, "kWh é unidade de energia (potência × tempo)."),
  qe("Uma família troca 10 lâmpadas incandescentes de 60 W por LEDs de 9 W, que ficam acesas 5 h por dia.", "Quanto economiza por mês (30 dias)?", ["76,5 kWh", "90 kWh", "13,5 kWh", "51 kWh"], 0, "Economia por lâmpada: 51 W. Total: 10 · 51 W · 5 h · 30 = 76.500 Wh = 76,5 kWh."),
  qe("Um chuveiro de 5.000 W é usado 1 hora por dia. O kWh custa R$ 0,90.", "Quanto o chuveiro custa por mês (30 dias)?", ["R$ 135", "R$ 4,50", "R$ 150", "R$ 45"], 0, "5 kWh/dia · 30 = 150 kWh; 150 · 0,90 = R$ 135."),
  qe("As bandeiras tarifárias (verde, amarela, vermelha) aparecem na conta de luz.", "A bandeira vermelha indica:", ["Geração mais cara", "Desconto especial na conta do mês", "Falta total de energia na cidade", "Energia solar mais barata no período"], 0, "Com reservatórios baixos, liga-se termelétricas, mais caras: a tarifa sobe."),
  qe("Num quadro de luz, cada circuito tem seu disjuntor.", "Se um aparelho der curto, o disjuntor:", ["Desarma só aquele circuito", "Aumenta a corrente para compensar", "Desliga a energia da cidade toda", "Nunca age, pois serve só de enfeite"], 0, "Ele protege a fiação daquele circuito contra correntes excessivas."),
  q("Aparelhos com maior potência:", ["Gastam mais no mesmo tempo", "Gastam sempre menos energia", "Não consomem energia nenhuma", "Têm corrente menor em qualquer caso"], 0, "Energia = potência × tempo."),
  m("Marque as atitudes que reduzem a conta de luz:", ["Usar lâmpadas LED", "Reduzir o tempo de banho", "Tirar carregadores da tomada", "Abrir a geladeira várias vezes", "Deixar o ferro ligado sem uso"], [0, 1, 2], "As duas últimas aumentam o consumo."),
  o("Explique como calcular quanto um aparelho gasta por mês na conta de luz, com um exemplo.", "Multiplica-se a potência em kW pelo número de horas de uso por dia e pelos dias do mês, obtendo kWh; depois multiplica-se pelo preço do kWh. Ex.: um aparelho de 2 kW usado 1 h por dia: 2 · 1 · 30 = 60 kWh; a R$ 0,80 o kWh, R$ 48 no mês.", [
    ["Potência × tempo (kWh)", "potencia", "kwh", "horas"],
    ["Multiplica pelos dias do mês", "dias", "30", "mes"],
    ["Multiplica pelo preço do kWh", "preco", "tarifa", "0,80"],
  ]),
], "n");

extend(FISICA, "Magnetismo e indução", [
  q("A lei de Faraday diz que surge corrente induzida quando:", ["O fluxo magnético varia", "O ímã está parado", "Não há bobina", "A temperatura cai"], 0, "Só a variação de fluxo induz tensão."),
  q("A lei de Lenz diz que a corrente induzida:", ["Se opõe à variação", "Reforça a variação que a criou", "Não tem nenhum sentido definido", "É sempre contínua, nunca alternada"], 0, "É uma consequência da conservação de energia."),
  q("Num transformador que eleva a tensão, o secundário tem:", ["Mais espiras", "Menos espiras que o primário", "O mesmo número de espiras", "Nenhuma espira enrolada"], 0, "Us/Up = Ns/Np: mais espiras, mais tensão."),
  q("Fogões de indução aquecem a panela porque:", ["Correntes induzidas a esquentam", "A chama do fogão é invisível", "O vidro esquenta primeiro e passa o calor", "Usam micro-ondas, como o forno"], 0, "Um campo magnético variável induz correntes na panela, que esquenta por efeito Joule."),
  qe("Na hidrelétrica, a água gira turbinas ligadas a geradores com ímãs e bobinas.", "A eletricidade surge pela:", ["Indução eletromagnética", "Combustão de carvão nas turbinas", "Fissão nuclear dentro da água", "Fotossíntese das algas da represa"], 0, "O giro varia o fluxo magnético nas bobinas e induz corrente."),
  qe("A energia elétrica viaja longas distâncias em alta tensão e é rebaixada perto das casas.", "Isso é feito com:", ["Transformadores", "Pilhas", "Resistores", "Capacitores comuns"], 0, "Alta tensão reduz a corrente e as perdas nos fios; transformadores elevam e rebaixam."),
  qe("Ao aproximar um ímã de uma bobina ligada a uma lâmpada pequena, ela pisca; com o ímã parado, apaga.", "Isso mostra que:", ["Só a variação do campo induz corrente", "O ímã tem pilha", "A lâmpada guarda energia", "O campo parado gera mais corrente"], 0, "Lei de Faraday: sem variação de fluxo, não há corrente induzida."),
  qe("Cartões de transporte sem contato funcionam ao aproximá-los do leitor.", "O leitor fornece energia ao chip por:", ["Indução eletromagnética", "Energia solar captada pelo cartão", "Uma pilha interna no cartão", "Atrito do cartão com o leitor"], 0, "O campo variável do leitor induz corrente na antena do cartão."),
  q("Transformadores não funcionam com corrente contínua porque:", ["Ela não varia o fluxo", "Ela é forte demais para as bobinas", "Ela tem tensão sempre igual a zero", "Ela esquenta demais o núcleo de ferro"], 0, "Sem variação de fluxo, não há indução no secundário."),
  m("Marque aparelhos que usam indução eletromagnética:", ["Gerador de usina", "Transformador", "Carregador sem fio", "Lâmpada incandescente", "Termômetro de mercúrio"], [0, 1, 2], "Lâmpada e termômetro não dependem de indução."),
  m("Sobre transformadores, marque as corretas:", ["Funcionam com corrente alternada", "Elevam ou abaixam a tensão", "A tensão é proporcional ao número de espiras", "Funcionam com corrente contínua", "Criam energia do nada"], [0, 1, 2], "Não funcionam com contínua e não criam energia."),
], "n");

extend(FISICA, "Relatividade, fótons e átomo", [
  q("Para Einstein, massa e energia:", ["São equivalentes", "Não têm relação", "Se anulam", "São a mesma unidade"], 0, "E = m·c²."),
  q("A contração do comprimento ocorre para objetos:", ["Perto da velocidade da luz", "Parados em relação ao observador", "Muito pesados, como planetas", "Muito frios, perto do zero absoluto"], 0, "Para um observador parado, o objeto rápido parece mais curto na direção do movimento."),
  q("Um laser produz luz:", ["De uma cor, concentrada", "De todas as cores ao mesmo tempo", "Só na faixa do infravermelho", "Que se espalha muito pelo ambiente"], 0, "Luz monocromática, coerente e direcional."),
  q("No espectro de emissão, cada elemento químico apresenta:", ["Linhas de cores próprias", "Todas as cores", "Nenhuma cor", "A mesma cor que o hidrogênio"], 0, "É como uma 'impressão digital': permite saber de que são feitas as estrelas."),
  qe("Astrônomos sabem que o Sol tem hélio analisando a luz que chega dele.", "Isso é possível porque:", ["Cada elemento tem cores próprias", "O hélio é um gás de cor amarela", "A luz traz amostras do Sol até nós", "O Sol é feito somente de hélio"], 0, "As linhas do espectro solar revelam os elementos presentes (o hélio foi descoberto assim)."),
  qe("No paradoxo dos gêmeos, um viaja em nave muito rápida e, ao voltar, está mais jovem que o irmão.", "O fenômeno descrito é a:", ["Dilatação do tempo", "Contração da massa", "Ressonância", "Refração"], 0, "Para quem viaja muito rápido, o tempo passa mais devagar em relação a quem ficou."),
  qe("O Sol transforma, a cada segundo, cerca de 4 milhões de toneladas de massa em energia.", "Esse processo é a:", ["Fusão do hidrogênio", "Fissão do urânio-235", "Combustão de carvão mineral", "Fotossíntese das plantas solares"], 0, "Núcleos de hidrogênio se fundem em hélio; a massa que 'some' vira energia (E = m·c²)."),
  qe("Leitores de código de barras usam um feixe de laser.", "O laser é útil porque sua luz:", ["É concentrada e de uma cor", "É fraca e muito espalhada", "É uma onda sonora", "Muda de cor sozinha o tempo todo"], 0, "O feixe fino e monocromático reflete nas barras e é lido com precisão."),
  q("O fóton é:", ["A partícula da luz", "Um tipo de elétron", "Um núcleo atômico", "Uma onda sonora"], 0, "Pacote de energia eletromagnética, sem massa de repouso."),
  m("Marque previsões da relatividade:", ["Dilatação do tempo", "Contração do comprimento", "Equivalência massa-energia", "Velocidade da luz ilimitada", "Tempo igual para todos"], [0, 1, 2], "A luz é o limite de velocidade e o tempo é relativo."),
  m("Marque aplicações da física moderna:", ["Laser", "Ressonância magnética", "Energia nuclear", "Alavanca", "Polia"], [0, 1, 2], "Alavanca e polia são mecânica clássica."),
  o("Explique a equação E = m·c² e dê um exemplo de onde ela se aplica.", "A equação diz que massa e energia são equivalentes: uma pequena quantidade de massa corresponde a uma enorme quantidade de energia, porque c² é muito grande. Ela explica a energia do Sol (fusão) e das usinas nucleares (fissão), em que uma parte da massa vira energia.", [
    ["Massa e energia equivalentes", "equivalen", "massa"],
    ["c² é muito grande", "velocidade da luz", "enorme", "grande"],
    ["Exemplo: Sol ou usina nuclear", "sol", "nuclear", "fusao", "fissao", "bomba"],
  ]),
], "n");
