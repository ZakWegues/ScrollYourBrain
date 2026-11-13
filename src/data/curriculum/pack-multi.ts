import { FISICA, MATEMATICA, QUIMICA } from "./exatas";
import { FILOSOFIA, INGLES, PORTUGUES, SOCIOLOGIA } from "./linguagens";
import { BIOLOGIA, GEOGRAFIA, HISTORIA } from "./natureza-humanas";
import { extend, m } from "./pack";

/*
 * "Marque todas as certas": two per account. Options have similar sizes and the number of right ones
 * varies (2 or 3), so neither length nor count gives the answer away.
 */

// Matemática
extend(MATEMATICA, "Função afim (1º grau)", [
  m("Sobre f(x) = 3x − 6, marque todas as corretas:", ["É crescente", "Corta o eixo y em −6", "Tem raiz x = 2", "É decrescente", "Corta o eixo y em 3"], [0, 1, 2], "a = 3 > 0 (crescente); b = −6 é onde corta y; 3x − 6 = 0 → x = 2."),
]);
extend(MATEMATICA, "Função quadrática", [
  m("Sobre f(x) = x² − 4x + 3, marque todas as corretas:", ["Tem raízes 1 e 3", "Concavidade para cima", "Vértice em x = −2", "Valor máximo é 3", "Não tem raízes reais"], [0, 1], "Δ = 4, raízes 1 e 3; a > 0 (para cima, tem mínimo, não máximo); xv = −b/2a = 2, não −2."),
]);
extend(MATEMATICA, "Progressões (PA e PG)", [
  m("Marque todas as sequências que são PA:", ["2, 5, 8, 11", "3, 6, 12, 24", "10, 7, 4, 1", "1, 4, 9, 16", "5, 5, 5, 5"], [0, 2, 4], "PA tem diferença constante: +3, −3 e 0. As outras: ×2 (PG) e quadrados."),
]);
extend(MATEMATICA, "Equações do 2º grau", [
  m("Para x² − 5x + 6 = 0, marque as corretas:", ["x = 2 é raiz", "x = 3 é raiz", "Δ é negativo", "A soma das raízes é 5", "O produto é −6"], [0, 1, 3], "Raízes 2 e 3; soma −b/a = 5; produto c/a = 6; Δ = 1 > 0."),
]);
extend(MATEMATICA, "Trigonometria", [
  m("Marque os valores corretos:", ["sen 30° = 1/2", "cos 60° = 1/2", "tg 45° = 0", "sen 90° = 0", "cos 0° = 0"], [0, 1], "tg 45° = 1, sen 90° = 1 e cos 0° = 1."),
]);
extend(MATEMATICA, "Ciclo trigonométrico", [
  m("No 2º quadrante, marque o que é verdade:", ["O seno é positivo", "O cosseno é negativo", "A tangente é negativa", "O seno é negativo", "O cosseno é positivo"], [0, 1, 2], "2º quadrante: x < 0 e y > 0. Seno (+), cosseno (−), tangente = sen/cos (−)."),
]);
extend(MATEMATICA, "Combinatória e probabilidade", [
  m("Ao lançar um dado comum, marque as probabilidades corretas:", ["Sair 6: 1/6", "Sair par: 1/2", "Sair 7: 1/6", "Sair menor que 3: 1/2", "Sair ímpar: 1/3"], [0, 1], "Menor que 3 = {1, 2}: 2/6 = 1/3. Ímpar = {1, 3, 5}: 1/2. Sair 7 é impossível: 0."),
]);
extend(MATEMATICA, "Gráficos e medidas de dispersão", [
  m("Para os dados 2, 4, 4, 6, 9, marque as corretas:", ["A média é 5", "A mediana é 4", "A moda é 6", "A amplitude é 9", "A mediana é 6"], [0, 1], "Soma 25 / 5 = 5; o valor do meio é 4; a moda é 4 (aparece duas vezes); amplitude 9 − 2 = 7."),
]);
extend(MATEMATICA, "Geometria plana e espacial", [
  m("Marque as fórmulas corretas:", ["Área do círculo: πr²", "Área do triângulo: b·h/2", "Volume do cubo: a³", "Perímetro do quadrado: a²", "Área do retângulo: 2(b+h)"], [0, 1, 2], "Perímetro do quadrado é 4a; 2(b + h) é o perímetro do retângulo, não a área."),
]);
extend(MATEMATICA, "Semelhança e relações no triângulo", [
  m("Num triângulo retângulo de catetos 3 e 4, marque as corretas:", ["A hipotenusa mede 5", "A área é 6", "O perímetro é 14", "A hipotenusa mede 7", "A área é 12"], [0, 1], "3² + 4² = 25 → 5; área 3·4/2 = 6; perímetro 3 + 4 + 5 = 12. O perímetro é 12."),
]);
extend(MATEMATICA, "Porcentagem", [
  m("Marque as contas corretas:", ["20% de 150 = 30", "Aumento de 10% em 200 dá 220", "50% de 80 = 16", "Desconto de 30% em 100 dá 130", "25% de 60 = 25"], [0, 1], "50% de 80 = 40; desconto de 30% em 100 dá 70; 25% de 60 = 15."),
]);
extend(MATEMATICA, "Juros, inflação e parcelas", [
  m("Sobre juros, marque as corretas:", ["Juros compostos rendem juros sobre juros", "Em juros simples o juro é igual a cada mês", "Inflação alta reduz o poder de compra", "Juros compostos crescem em linha reta", "Inflação aumenta o valor do salário"], [0, 1, 2], "Compostos crescem de forma exponencial; a inflação corrói o salário."),
]);

// Física
extend(FISICA, "Movimento uniforme", [
  m("No movimento uniforme (MU), marque o que vale:", ["A velocidade é constante", "A aceleração é zero", "S = S₀ + v·t", "A velocidade cresce sempre", "A aceleração é constante e positiva"], [0, 1, 2], "MU: velocidade constante e aceleração nula; a função horária é S = S₀ + v·t."),
]);
extend(FISICA, "Queda livre e lançamentos", [
  m("Na queda livre (sem ar), marque as corretas:", ["A aceleração vale g", "Corpos de massas diferentes caem juntos", "A velocidade aumenta 20 m/s a cada segundo", "Corpos mais pesados caem antes", "A velocidade é constante"], [0, 1], "Sem ar, todos caem com a mesma aceleração g ≈ 10 m/s². Com g ≈ 10 m/s², ganha 10 m/s por segundo."),
]);
extend(FISICA, "Leis de Newton", [
  m("Marque os exemplos corretos de cada lei:", ["Inércia: o passageiro vai para frente ao frear", "2ª lei: F = m·a", "Ação e reação: o remo empurra a água", "Inércia: o foguete sobe pelos gases", "2ª lei: forças vêm em pares"], [0, 1, 2], "O foguete e os pares de forças são exemplos da 3ª lei (ação e reação)."),
]);
extend(FISICA, "Gravitação universal", [
  m("Sobre a gravitação, marque as corretas:", ["A força cai com o quadrado da distância", "Toda massa atrai outra massa", "A Lua não tem gravidade", "Não há gravidade em órbita", "A força não depende das massas"], [0, 1], "Em órbita há gravidade: o astronauta está em queda livre contínua. A Lua tem gravidade (cerca de 1/6 da Terra)."),
]);
extend(FISICA, "Conservação da energia", [
  m("Num pêndulo sem atrito, marque as corretas:", ["A energia mecânica se conserva", "No ponto mais baixo a velocidade é máxima", "No ponto mais alto a energia cinética é zero", "A energia mecânica diminui sempre", "No ponto mais baixo a velocidade é zero"], [0, 1, 2], "Sem atrito, potencial vira cinética e vice-versa, sem perdas."),
]);
extend(FISICA, "Potência e rendimento", [
  m("Marque as afirmações corretas:", ["Potência é energia por tempo", "1 kWh é uma unidade de energia", "Nenhum motor real tem rendimento de 100%", "O watt é unidade de energia", "Rendimento pode passar de 100%"], [0, 1, 2], "Watt é potência (J/s); kWh é energia. Rendimento é sempre menor que 100%."),
]);
extend(FISICA, "Calorimetria", [
  m("Sobre calor, marque as corretas:", ["Calor flui do mais quente ao mais frio", "Q = m·c·ΔT vale sem mudança de estado", "Na fusão a temperatura fica constante", "Calor é o mesmo que temperatura", "Na fusão a temperatura sobe"], [0, 1, 2], "Temperatura mede agitação; calor é energia em trânsito."),
]);
extend(FISICA, "Dilatação e transmissão de calor", [
  m("Marque os pares processo → exemplo corretos:", ["Condução: cabo da panela esquentando", "Convecção: ar quente subindo", "Irradiação: calor do Sol na pele", "Condução: luz chegando da Lua", "Convecção: calor no vácuo"], [0, 1, 2], "No vácuo o calor só passa por irradiação."),
]);
extend(FISICA, "Espelhos", [
  m("Sobre o espelho plano, marque as corretas:", ["A imagem é virtual", "A imagem tem o mesmo tamanho", "A imagem fica de cabeça para baixo", "A imagem é real", "A imagem é maior que o objeto"], [0, 1], "Espelho plano: imagem virtual, direita, do mesmo tamanho e simétrica. A imagem fica direita, não invertida."),
]);
extend(FISICA, "Lentes, refração e visão", [
  m("Marque as correções de visão corretas:", ["Miopia: lente divergente", "Hipermetropia: lente convergente", "Presbiopia: lente convergente", "Miopia: lente convergente", "Hipermetropia: lente divergente"], [0, 1, 2], "Míope vê mal de longe (divergente); hipermetrope e presbita, de perto (convergente)."),
]);
extend(FISICA, "Som e acústica", [
  m("Sobre o som, marque as corretas:", ["É uma onda mecânica", "Não se propaga no vácuo", "A altura depende da amplitude", "É uma onda eletromagnética", "Viaja mais rápido no vácuo"], [0, 1], "O som precisa de meio material; agudo ou grave (altura) depende da frequência, não da amplitude."),
]);
extend(FISICA, "Ondas eletromagnéticas", [
  m("Marque as que são ondas eletromagnéticas:", ["Luz visível", "Raios X", "Ultrassom", "Som de um violão", "Ondas do mar"], [0, 1], "Som e ondas do mar são ondas mecânicas. Ultrassom é som (onda mecânica)."),
]);
extend(FISICA, "Eletrostática", [
  m("Marque as corretas:", ["Cargas iguais se repelem", "Cargas opostas se atraem", "A carga do nêutron é negativa", "O próton não tem carga", "Atritar cria carga do nada"], [0, 1], "O nêutron é neutro e o próton é positivo; no atrito, elétrons passam de um corpo para o outro."),
]);
extend(FISICA, "Circuitos e consumo na conta de luz", [
  m("Sobre energia em casa, marque as corretas:", ["A conta é cobrada em kWh", "Chuveiro elétrico gasta muito", "Disjuntor protege contra sobrecarga", "A conta é cobrada em volts", "Lâmpada LED gasta mais que a comum"], [0, 1, 2], "Volt é tensão; LED gasta bem menos para a mesma luz."),
]);
extend(FISICA, "Magnetismo e indução", [
  m("Marque as afirmações corretas:", ["Corrente elétrica cria campo magnético", "Ímã em movimento numa bobina gera corrente", "Todo ímã tem polo norte e sul", "Cortar um ímã separa norte e sul", "Ímã parado gera corrente sozinho"], [0, 1, 2], "Indução exige variação do campo; cada pedaço de ímã tem os dois polos."),
]);
extend(FISICA, "Relatividade, fótons e átomo", [
  m("Marque as corretas:", ["A luz tem a mesma velocidade para todos", "A luz também se comporta como partícula", "E = m·c² liga massa e energia", "Nada pode ser mais lento que a luz", "O fóton tem carga negativa"], [0, 1, 2], "Nada com massa alcança a luz; o fóton não tem carga."),
]);

// Química
extend(QUIMICA, "Separação de misturas", [
  m("Marque os pares mistura → método corretos:", ["Água e areia: filtração", "Água e sal: destilação", "Água e óleo: decantação", "Água e álcool: filtração", "Ferro e areia: destilação"], [0, 1, 2], "Água e álcool: destilação fracionada; ferro e areia: imantação."),
]);
extend(QUIMICA, "Distribuição eletrônica e tabela", [
  m("Sobre a tabela periódica, marque as corretas:", ["Colunas são famílias", "Linhas são períodos", "Gases nobres ficam no grupo 1", "Metais alcalinos ficam no grupo 17", "Halogênios ficam no grupo 1"], [0, 1], "Alcalinos: grupo 1; halogênios: grupo 17. Gases nobres ficam no grupo 18."),
]);
extend(QUIMICA, "Geometria e polaridade", [
  m("Marque as moléculas polares:", ["H₂O", "NH₃", "O₂", "CO₂", "CH₄"], [0, 1], "O₂ tem átomos iguais; CO₂ (linear) e CH₄ (tetraédrico) são simétricos: os vetores se anulam."),
]);
extend(QUIMICA, "Ácidos, bases, sais e óxidos", [
  m("Classifique e marque as corretas:", ["HCl é ácido", "NaOH é base", "NaCl é sal", "CO₂ é base", "H₂SO₄ é sal"], [0, 1, 2], "CO₂ é óxido (ácido); H₂SO₄ é ácido."),
]);
extend(QUIMICA, "Soluções e concentração", [
  m("Numa solução de água com açúcar, marque as corretas:", ["A água é o solvente", "O açúcar é o soluto", "É uma mistura heterogênea bifásica", "O açúcar é o solvente", "Tem duas fases visíveis"], [0, 1], "Solução é mistura homogênea: soluto disperso no solvente."),
]);
extend(QUIMICA, "Propriedades coligativas", [
  m("Adicionar sal à água faz:", ["Subir o ponto de ebulição", "Baixar o ponto de congelamento", "Baixar a pressão de vapor", "Baixar o ponto de ebulição", "Subir o ponto de congelamento"], [0, 1, 2], "Soluto não volátil: ebulioscopia, crioscopia e tonoscopia."),
]);
extend(QUIMICA, "Cinética química", [
  m("Marque o que acelera uma reação:", ["Aumentar a temperatura", "Usar um catalisador", "Triturar o reagente sólido", "Diluir os reagentes", "Resfriar o sistema"], [0, 1, 2], "Diluir e resfriar diminuem as colisões efetivas."),
]);
extend(QUIMICA, "pH e equilíbrio no dia a dia", [
  m("Marque as substâncias ácidas (pH < 7):", ["Suco de limão", "Vinagre", "Água sanitária", "Sabão", "Leite de magnésia"], [0, 1], "Água sanitária, sabão e leite de magnésia são básicos."),
]);
extend(QUIMICA, "Eletroquímica", [
  m("Sobre a pilha, marque as corretas:", ["No ânodo ocorre oxidação", "No cátodo ocorre redução", "Os elétrons vão do cátodo ao ânodo", "No ânodo ocorre redução", "A pilha precisa de corrente externa"], [0, 1], "A pilha é espontânea; quem precisa de corrente externa é a eletrólise. Os elétrons vão do ânodo ao cátodo."),
]);
extend(QUIMICA, "Funções orgânicas no cotidiano", [
  m("Marque os pares substância → função corretos:", ["Etanol: álcool", "Ácido acético: ácido carboxílico", "Acetona: aldeído", "Metano: álcool", "Vinagre: éster"], [0, 1], "Acetona é cetona; metano é hidrocarboneto; o vinagre tem ácido acético."),
]);
extend(QUIMICA, "Polímeros e combustíveis", [
  m("Marque os combustíveis renováveis:", ["Etanol de cana", "Biodiesel", "Biogás", "Gasolina", "Carvão mineral"], [0, 1, 2], "Gasolina e carvão mineral são fósseis."),
]);
extend(QUIMICA, "Mol e massa molar", [
  m("Sobre o mol, marque as corretas:", ["1 mol tem cerca de 6·10²³ partículas", "A massa de 1 mol de H₂O é 18 g", "1 mol de gás nas CNTP ocupa 22,4 L", "1 mol de H₂O tem 18 partículas", "1 mol de qualquer gás pesa 22,4 g"], [0, 1, 2], "18 g é a massa molar da água; 22,4 L é volume, não massa."),
]);
extend(QUIMICA, "Cálculo estequiométrico", [
  m("Em 2 H₂ + O₂ → 2 H₂O, marque as corretas:", ["2 mol de H₂ reagem com 1 mol de O₂", "Forma-se 2 mol de água", "A massa final é menor que a inicial", "1 mol de H₂ forma 2 mol de água", "A massa final é maior"], [0, 1], "A proporção é 2 : 1 : 2, e a massa se conserva (Lavoisier). A massa se conserva (Lavoisier)."),
]);

// Biologia
extend(BIOLOGIA, "Organelas", [
  m("Marque as organelas presentes em células vegetais:", ["Cloroplasto", "Mitocôndria", "Parede celular", "Centríolo", "Nenhuma organela"], [0, 1, 2], "Vegetais têm cloroplasto, mitocôndria e parede; centríolos são raros neles."),
]);
extend(BIOLOGIA, "Mitose e meiose", [
  m("Sobre a meiose, marque as corretas:", ["Produz 4 células", "As células-filhas são haploides", "As células-filhas são diploides", "Produz 2 células idênticas", "Serve para regenerar tecidos"], [0, 1], "Regenerar tecidos e formar células idênticas é papel da mitose."),
]);
extend(BIOLOGIA, "Vírus e bactérias", [
  m("Marque as doenças causadas por vírus:", ["Gripe", "Dengue", "Leptospirose", "Tuberculose", "Cólera"], [0, 1], "Leptospirose, tuberculose e cólera são causadas por bactérias."),
]);
extend(BIOLOGIA, "Animais", [
  m("Marque as características dos mamíferos:", ["Glândulas mamárias", "Pelos", "Temperatura variável", "Respiração por brânquias", "Corpo coberto de penas"], [0, 1], "Brânquias: peixes e larvas de anfíbios; penas: aves. Mamíferos mantêm temperatura constante."),
]);
extend(BIOLOGIA, "Digestão e circulação", [
  m("Marque os pares órgão → função corretos:", ["Boca: início da digestão do amido", "Estômago: digestão de proteínas", "Intestino delgado: absorção", "Fígado: produz insulina", "Intestino grosso: digere gordura"], [0, 1, 2], "Insulina vem do pâncreas; o intestino grosso absorve água."),
]);
extend(BIOLOGIA, "Sistema nervoso, hormônios e imunidade", [
  m("Marque os pares hormônio → efeito corretos:", ["Insulina: baixa a glicose", "Adrenalina: prepara para luta ou fuga", "Testosterona: caracteres masculinos", "Insulina: sobe a glicose", "Adrenalina: induz o sono"], [0, 1, 2], "Quem sobe a glicose é o glucagon; o sono tem a ver com a melatonina."),
]);
extend(BIOLOGIA, "Heredogramas e grupos sanguíneos", [
  m("Marque os genótipos possíveis do tipo sanguíneo B:", ["IᴮIᴮ", "Iᴮi", "IᴬIᴮ", "ii", "Iᴬi"], [0, 1], "IᴬIᴮ é AB; ii é O; Iᴬi é A."),
]);
extend(BIOLOGIA, "DNA, RNA e proteínas", [
  m("Marque as diferenças corretas entre DNA e RNA:", ["O DNA tem timina", "O RNA tem uracila", "O RNA tem fita dupla", "O RNA tem desoxirribose", "O DNA tem uracila"], [0, 1], "RNA tem ribose e uracila; DNA tem desoxirribose e timina. O DNA é que tem fita dupla."),
]);
extend(BIOLOGIA, "Teorias evolutivas", [
  m("Marque as ideias de Darwin:", ["Seleção natural", "Variação entre indivíduos", "Os mais adaptados deixam mais descendentes", "Herança dos caracteres adquiridos", "Uso e desuso como causa"], [0, 1, 2], "Uso e desuso e herança do adquirido são ideias de Lamarck."),
]);
extend(BIOLOGIA, "Relações ecológicas e cadeias", [
  m("Marque as relações harmônicas:", ["Mutualismo", "Comensalismo", "Protocooperação", "Predação", "Parasitismo"], [0, 1, 2], "Predação e parasitismo prejudicam uma das partes."),
]);
extend(BIOLOGIA, "Ciclos biogeoquímicos", [
  m("No ciclo do carbono, marque o que retira CO₂ do ar:", ["Fotossíntese", "Decomposição da matéria", "Crescimento de florestas", "Queima de combustíveis", "Respiração dos animais"], [0, 2], "Decomposição, queima e respiração liberam CO₂."),
]);
extend(BIOLOGIA, "Plantas", [
  m("Marque as plantas com sementes:", ["Gimnospermas", "Angiospermas", "Algas verdes", "Musgos", "Samambaias"], [0, 1], "Musgos e samambaias se reproduzem por esporos. Algas não formam sementes."),
]);

// História
extend(HISTORIA, "Egito e Mesopotâmia", [
  m("Marque as heranças da Mesopotâmia:", ["Escrita cuneiforme", "Código de Hamurábi", "Grande Muralha", "Pirâmides de Gizé", "Hieróglifos"], [0, 1], "Pirâmides e hieróglifos são do Egito; a Grande Muralha, da China."),
]);
extend(HISTORIA, "Democracia grega e Império Romano", [
  m("Marque quem NÃO votava na democracia ateniense:", ["Mulheres", "Estrangeiros (metecos)", "Escravizados", "Homens livres atenienses", "Cidadãos acima de 18 anos"], [0, 1, 2], "Só homens livres, filhos de atenienses, eram cidadãos."),
]);
extend(HISTORIA, "Feudalismo e Igreja medieval", [
  m("Marque as características do feudalismo:", ["Economia agrária", "Servidão", "Poder local dos senhores", "Indústria nas cidades", "Moeda forte e comércio intenso"], [0, 1, 2], "O feudalismo era rural, com pouco comércio e pouca moeda."),
]);
extend(HISTORIA, "Revolução Francesa e Industrial", [
  m("Marque as consequências da Revolução Industrial:", ["Êxodo rural", "Crescimento das cidades", "Surgimento do operariado", "Fim do trabalho infantil na hora", "Volta do feudalismo"], [0, 1, 2], "O trabalho infantil seguiu por décadas; leis vieram depois."),
]);
extend(HISTORIA, "Ciclo do açúcar e do ouro", [
  m("Marque o que marcou o ciclo do ouro:", ["Cobrança do quinto", "Crescimento de Minas Gerais", "Capital mudou para Salvador", "Engenhos no litoral nordestino", "Fim da escravidão"], [0, 1], "Engenhos são do ciclo do açúcar; a escravidão continuou. A capital foi de Salvador para o Rio (1763)."),
]);
extend(HISTORIA, "Independência e Segundo Reinado", [
  m("Marque fatos do Segundo Reinado:", ["Expansão do café", "Guerra do Paraguai", "Lei Áurea", "Inconfidência Mineira", "Era Vargas"], [0, 1, 2], "Inconfidência (1789) é colonial; Era Vargas é republicana."),
]);
extend(HISTORIA, "Primeira Guerra Mundial", [
  m("Marque causas da Primeira Guerra:", ["Imperialismo", "Nacionalismos", "Corrida armamentista", "Política de alianças", "Crise de 1929"], [0, 1, 2, 3], "Imperialismo, nacionalismos, armamentismo e alianças; a crise de 1929 veio depois."),
]);
extend(HISTORIA, "Segunda Guerra Mundial", [
  m("Marque os países do Eixo:", ["Alemanha", "Itália", "França", "Reino Unido", "União Soviética"], [0, 1], "Reino Unido e URSS estavam entre os Aliados. A França foi ocupada pela Alemanha."),
]);
extend(HISTORIA, "Era Vargas", [
  m("Marque marcas da Era Vargas:", ["CLT", "Estado Novo", "Criação da Petrobras", "AI-5", "Plano Real"], [0, 1, 2], "AI-5 é da ditadura (1968); Plano Real, de 1994."),
]);
extend(HISTORIA, "Ditadura militar", [
  m("Marque características da ditadura militar:", ["Censura à imprensa", "Atos Institucionais", "Bipartidarismo", "Eleição direta para presidente", "Liberdade partidária"], [0, 1, 2], "Presidentes eram escolhidos de forma indireta; só ARENA e MDB."),
]);
extend(HISTORIA, "Guerra Fria", [
  m("Marque episódios da Guerra Fria:", ["Muro de Berlim", "Crise dos mísseis em Cuba", "Revolução Francesa", "Tratado de Versalhes", "Queda da Bastilha"], [0, 1], "Versalhes é de 1919; a Bastilha, de 1789."),
]);
extend(HISTORIA, "Mundo pós-1991", [
  m("Marque fatos do mundo pós-Guerra Fria:", ["Globalização acelerada", "Atentados de 11 de setembro", "Crise de 2008", "Divisão da Alemanha", "Plano Marshall"], [0, 1, 2], "A Alemanha se reunificou em 1990; o Plano Marshall é de 1948."),
]);

// Geografia
extend(GEOGRAFIA, "Escalas, coordenadas e fusos", [
  m("Marque as corretas:", ["Latitude é medida a partir do Equador", "Longitude é medida a partir de Greenwich", "Cada fuso tem cerca de 15°", "Latitude vai até 180°", "O Brasil tem um só fuso horário"], [0, 1, 2], "Latitude vai até 90°; o Brasil tem quatro fusos."),
]);
extend(GEOGRAFIA, "Biomas brasileiros", [
  m("Marque os pares bioma → característica corretos:", ["Caatinga: clima semiárido", "Pantanal: planície alagável", "Cerrado: berço das águas", "Pampa: floresta densa", "Amazônia: vegetação de seca"], [0, 1, 2], "O Pampa é de campos; a Amazônia é floresta úmida."),
]);
extend(GEOGRAFIA, "Clima e hidrografia", [
  m("Marque as bacias brasileiras:", ["Amazônica", "São Francisco", "Danúbio", "Nilo", "Mississippi"], [0, 1], "Nilo é africano; Mississippi, norte-americano. Danúbio é europeu."),
]);
extend(GEOGRAFIA, "Meio ambiente e sustentabilidade", [
  m("Marque fontes de energia renováveis:", ["Solar", "Eólica", "Petróleo", "Carvão mineral", "Gás natural"], [0, 1], "Carvão e gás natural são fósseis. Petróleo também é fóssil."),
]);
extend(GEOGRAFIA, "Transição demográfica", [
  m("Num país que envelhece, marque o que tende a ocorrer:", ["Queda da natalidade", "Aumento da expectativa de vida", "Pirâmide com topo mais estreito", "Base da pirâmide mais larga", "Aumento da mortalidade infantil"], [0, 1], "Base larga indica muitos nascimentos, o oposto do envelhecimento. O topo fica mais largo, com mais idosos."),
]);
extend(GEOGRAFIA, "Urbanização", [
  m("Marque problemas urbanos comuns no Brasil:", ["Ilhas de calor", "Enchentes", "Moradias em áreas de risco", "Excesso de áreas verdes", "Falta de trânsito"], [0, 1, 2], "Asfalto e pouca vegetação agravam calor e enchentes."),
]);
extend(GEOGRAFIA, "Matriz energética", [
  m("Sobre a matriz elétrica do Brasil, marque as corretas:", ["A fonte hídrica é a maior", "Eólica e solar crescem rápido", "É mais renovável que a média mundial", "O carvão é a maior fonte", "A energia nuclear é a maior"], [0, 1, 2], "Carvão e nuclear têm participação pequena no Brasil."),
]);
extend(GEOGRAFIA, "Agronegócio e questão agrária", [
  m("Marque as corretas sobre o campo brasileiro:", ["A terra é muito concentrada", "A soja é forte na exportação", "A agricultura familiar produz muita comida", "Quase não há exportação agrícola", "A terra é bem distribuída"], [0, 1, 2], "O Brasil é grande exportador e tem alta concentração fundiária."),
]);
extend(GEOGRAFIA, "Blocos econômicos", [
  m("Marque os membros fundadores do Mercosul:", ["Brasil", "Argentina", "Uruguai", "Paraguai", "México"], [0, 1, 2, 3], "Fundadores: Brasil, Argentina, Uruguai e Paraguai (1991)."),
]);
extend(GEOGRAFIA, "Conflitos e refugiados", [
  m("Marque causas comuns de refúgio:", ["Guerras", "Perseguição política", "Perseguição religiosa", "Turismo", "Intercâmbio de estudos"], [0, 1, 2], "Refugiado é quem foge por perseguição ou guerra."),
]);

// Português
extend(PORTUGUES, "Figuras de linguagem na prática", [
  m("Marque os pares frase → figura corretos:", ["\"Morri de rir\": hipérbole", "\"Li Machado\": metonímia", "\"O vento uivava\": prosopopeia", "\"Partiu desta\": antítese", "\"Subir pra cima\": metáfora"], [0, 1, 2], "\"Partiu desta\" é eufemismo; \"subir pra cima\" é pleonasmo."),
]);
extend(PORTUGUES, "Gêneros textuais", [
  m("Marque os gêneros argumentativos:", ["Artigo de opinião", "Editorial", "Notícia de jornal", "Receita culinária", "Bula de remédio"], [0, 1], "Receita e bula são injuntivos (instruem). Notícia é informativa."),
]);
extend(PORTUGUES, "Crase", [
  m("Marque as frases com crase correta:", ["Vou à escola", "Refiro-me à professora", "Chegamos às 10h", "Vou à pé", "Comecei à estudar"], [0, 1, 2], "Não há crase antes de palavra masculina nem de verbo."),
]);
extend(PORTUGUES, "Concordância e regência", [
  m("Marque as frases corretas pela norma-padrão:", ["Faz dois anos que estudo", "Havia muitos alunos", "Assisti ao filme", "Fazem dois anos que estudo", "Haviam muitos alunos"], [0, 1, 2], "Fazer (tempo) e haver (existir) são impessoais: ficam no singular."),
]);
extend(PORTUGUES, "Orações subordinadas", [
  m("Marque as conjunções que indicam causa:", ["Porque", "Já que", "Portanto", "Embora", "Para que"], [0, 1], "Embora indica concessão; para que, finalidade. Portanto indica conclusão."),
]);
extend(PORTUGUES, "Romantismo", [
  m("Marque autores do Romantismo brasileiro:", ["José de Alencar", "Castro Alves", "Álvares de Azevedo", "Machado de Assis (fase madura)", "Carlos Drummond"], [0, 1, 2], "Machado maduro é realista; Drummond, modernista."),
]);
extend(PORTUGUES, "Modernismo", [
  m("Marque características da 1ª fase modernista:", ["Verso livre", "Linguagem coloquial", "Ruptura com o passado", "Soneto rígido", "Linguagem rebuscada"], [0, 1, 2], "Soneto rígido e linguagem rebuscada eram do Parnasianismo."),
]);
extend(PORTUGUES, "Competências do ENEM", [
  m("Marque o que pode zerar a redação do ENEM:", ["Fugir totalmente ao tema", "Não ser dissertativo-argumentativo", "Ter 25 linhas", "Usar 1ª pessoa", "Citar a Constituição"], [0, 1], "Usar 1ª pessoa ou citar leis não zera a redação. Até 7 linhas zera; 25 linhas é texto completo."),
]);
extend(PORTUGUES, "Repertório e proposta de intervenção", [
  m("Marque elementos da proposta de intervenção:", ["Agente", "Ação", "Finalidade", "Título", "Rima"], [0, 1, 2], "Os cinco elementos: agente, ação, meio, finalidade e detalhamento."),
]);

// Inglês
extend(INGLES, "Simple past", [
  m("Marque os pares verbo → passado corretos:", ["go: went", "see: saw", "buy: bought", "eat: ate", "run: runned"], [0, 1, 2, 3], "run → ran (não \"runned\")."),
]);
extend(INGLES, "Modal verbs", [
  m("Marque os usos corretos:", ["can: habilidade", "must: obrigação", "should: conselho", "might: certeza total", "can't: permissão"], [0, 1, 2], "might indica possibilidade; can't, proibição ou impossibilidade."),
]);
extend(INGLES, "Comparativos e superlativos", [
  m("Marque as formas corretas:", ["bigger", "the best", "more big", "gooder", "beautifuller"], [0, 1], "good → better; adjetivos longos usam more. big → bigger."),
]);
extend(INGLES, "False friends", [
  m("Marque os pares com o sentido certo:", ["pretend: fingir", "push: empurrar", "college: colégio", "library: livraria", "exquisite: esquisito"], [0, 1], "college = faculdade; library = biblioteca; exquisite = requintado."),
]);
extend(INGLES, "Reading for ENEM", [
  m("Marque estratégias úteis de leitura:", ["Ler a pergunta antes", "Usar cognatos", "Observar título e fonte", "Traduzir palavra por palavra", "Ignorar imagens do texto"], [0, 1, 2], "Tradução literal e ignorar imagens atrapalham."),
]);

// Filosofia
extend(FILOSOFIA, "Sócrates e Platão", [
  m("Marque ideias de Sócrates ou Platão:", ["\"Só sei que nada sei\"", "Mito da caverna", "Mundo das ideias", "\"Penso, logo existo\"", "Vontade de potência"], [0, 1, 2], "\"Penso, logo existo\" é de Descartes; vontade de potência, de Nietzsche."),
]);
extend(FILOSOFIA, "Contratualistas", [
  m("Marque os filósofos contratualistas:", ["Hobbes", "Locke", "Platão", "Sócrates", "Tomás de Aquino"], [0, 1], "Os três explicaram o Estado por um contrato social. Platão é da Antiguidade grega."),
]);
extend(FILOSOFIA, "Racionalismo e empirismo", [
  m("Marque os empiristas:", ["John Locke", "David Hume", "Francis Bacon", "René Descartes", "Platão"], [0, 1, 2], "Descartes é racionalista; Platão valoriza as ideias, não os sentidos."),
]);

// Sociologia
extend(SOCIOLOGIA, "Durkheim", [
  m("Marque características do fato social:", ["Exterioridade", "Coercitividade", "Espontaneidade", "Individualidade", "Opcionalidade"], [0, 1], "O fato social existe fora do indivíduo e se impõe a todos. O fato social é geral, não espontâneo."),
]);
extend(SOCIOLOGIA, "Cidadania e direitos humanos", [
  m("Marque direitos sociais da Constituição de 1988:", ["Educação", "Saúde", "Moradia", "Lazer", "Pena de morte"], [0, 1, 2, 3], "Educação, saúde, moradia e lazer estão no art. 6º; pena de morte só em guerra declarada."),
]);
extend(SOCIOLOGIA, "Indústria cultural e mídia", [
  m("Marque ideias de Adorno e Horkheimer:", ["Padronização da cultura", "Cultura como mercadoria", "Consumo passivo", "Mídia sempre emancipa", "Fim do capitalismo"], [0, 1, 2], "Para eles, a indústria cultural domestica em vez de emancipar."),
]);
