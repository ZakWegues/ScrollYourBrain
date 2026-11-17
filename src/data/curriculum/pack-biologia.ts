import { BIOLOGIA as B } from "./natureza-humanas";
import { c, f, pack, q } from "./pack";

pack(B, "citologia", 1, 2, "Organelas", [
  q("A mitocôndria tem DNA e ribossomos próprios. Isso apoia a ideia de que ela:", ["Surgiu do núcleo da célula", "Já foi uma bactéria de vida livre", "É exclusiva das células vegetais", "Produz o DNA do núcleo"], 1, "Teoria endossimbiótica: mitocôndrias (e cloroplastos) descendem de bactérias englobadas por outra célula. Por isso têm DNA circular e se dividem sozinhas."),
  q("O retículo endoplasmático rugoso tem esse nome porque:", ["Tem ribossomos aderidos", "Produz só lipídios", "Fica fora da célula", "Não tem membrana"], 0, "Os ribossomos grudados na superfície dão o aspecto \"rugoso\". Eles produzem proteínas que o retículo leva ao complexo golgiense. O liso, sem ribossomos, faz lipídios."),
  q("Qual organela está presente em células vegetais e ausente nas animais?", ["Mitocôndria", "Cloroplasto", "Ribossomo", "Núcleo"], 1, "O cloroplasto, que faz fotossíntese. A parede celular de celulose e o grande vacúolo também são marcas da célula vegetal. Mitocôndria existe nas duas."),
  q("O complexo golgiense atua principalmente em:", ["Digestão de partículas englobadas", "Armazenar e secretar substâncias", "Fotossíntese e produção de glicose", "Divisão celular"], 1, "O complexo golgiense modifica, empacota e \"exporta\" substâncias (secreção), como enzimas e muco. Também forma os lisossomos e o acrossomo do espermatozoide."),
  q("Lisossomos contêm:", ["DNA", "Enzimas digestivas", "Clorofila", "Glicogênio e amido"], 1, "Lisossomos são bolsas de enzimas digestivas: digerem o que a célula englobou e organelas velhas (autofagia)."),
  q("Células procariontes não possuem:", ["Membrana plasmática", "Ribossomos", "Carioteca", "Material genético"], 2, "Procariontes (bactérias) não têm carioteca, a membrana do núcleo: o DNA fica solto no citoplasma (nucleoide). Têm membrana, ribossomos e material genético."),
  f("Membrana plasmática", "Bicamada de fosfolipídios com proteínas; tem permeabilidade seletiva."),
  f("Retículo endoplasmático rugoso x liso", "Rugoso: com ribossomos, faz proteínas. Liso: faz lipídios e desintoxica."),
  c(["A célula é uma pequena fábrica.", "Núcleo: a diretoria (DNA).", "Ribossomo: a linha de montagem de proteínas.", "Mitocôndria: a usina de energia."], "Cloroplasto e mitocôndria têm DNA próprio (teoria endossimbiótica)."),
]);

pack(B, "citologia", 1, 3, "Mitose e meiose", [
  q("A mitose produz:", ["4 células com metade dos cromossomos", "2 células idênticas à original", "Gametas", "Esporos sempre"], 1, "A mitose gera 2 células idênticas à original, com o mesmo número de cromossomos. Serve para crescimento, regeneração e reprodução assexuada."),
  q("A meiose é importante porque:", ["Mantém o número de cromossomos da espécie", "Regenera tecidos após um ferimento", "Faz o corpo crescer durante a infância", "Produz a energia usada pela célula"], 0, "A meiose reduz os cromossomos à metade (gametas n). Na fecundação, n + n volta a 2n: o número da espécie se mantém. Além disso, gera variabilidade."),
  q("Em que fase da mitose os cromossomos se alinham no centro da célula?", ["Prófase", "Metáfase", "Anáfase", "Telófase"], 1, "Na metáfase, os cromossomos mais condensados se alinham na placa equatorial, presos às fibras do fuso. Na anáfase as cromátides se separam."),
  q("Uma célula 2n = 8 passa por meiose. Quantos cromossomos terá cada gameta?", ["2", "4", "8", "16"], 1, "A meiose reduz o número à metade: de 2n = 8 para n = 4. O 8 seria resultado de mitose; o 16, de duplicação sem divisão."),
  q("A duplicação do DNA acontece:", ["Na metáfase", "Na interfase", "Na anáfase", "Na telófase"], 1, "Na interfase (fase S), antes da divisão começar, o DNA se duplica. Assim cada célula-filha recebe uma cópia completa."),
  q("O câncer está relacionado a:", ["Divisões celulares descontroladas", "Excesso de meiose nas células do corpo", "Falta de ribossomos no citoplasma", "Fotossíntese"], 0, "Mutações em genes que controlam o ciclo celular fazem células se dividirem sem controle e formarem tumores, que podem invadir outros tecidos."),
  f("Fases da mitose", "Prófase, metáfase (cromossomos no meio), anáfase (separação), telófase."),
  f("Haploide x diploide", "Haploide (n): um conjunto de cromossomos (gametas). Diploide (2n): dois conjuntos (células do corpo)."),
  c(["Mitose: 1 → 2 células iguais.", "Meiose: 1 → 4 células com metade.", "Mitose: crescer e regenerar.", "Meiose: gametas e variabilidade."], "Mitose copia; meiose embaralha."),
]);

pack(B, "genetica", 3, 1, "Heredogramas e grupos sanguíneos", [
  q("No cruzamento Aa × Aa, qual a chance de um filho aa?", ["0%", "25%", "50%", "75%"], 1, "Cada pai manda A ou a (1/2). aa precisa de a dos dois: 1/2 · 1/2 = 1/4 = 25%. Quadro: AA, Aa, Aa, aa."),
  q("Pessoas do tipo sanguíneo O são chamadas doadoras universais porque:", ["Têm anticorpos anti-A e anti-B no plasma", "As hemácias não têm antígenos A nem B", "Têm um tipo de sangue raro", "Têm sempre fator Rh negativo"], 1, "As hemácias O não têm antígenos A nem B, então os anticorpos do receptor não as atacam (no sistema ABO). O plasma O tem anti-A e anti-B, mas em pequena quantidade na transfusão."),
  q("Os genótipos possíveis para o tipo sanguíneo A são:", ["Só IᴬIᴬ", "IᴬIᴬ ou Iᴬi", "IᴬIᴮ ou Iᴬi", "ii ou Iᴬi"], 1, "Iᴬ domina i, então tanto IᴬIᴬ quanto Iᴬi produzem sangue A. IᴬIᴮ é tipo AB (codominância) e ii é tipo O."),
  q("Um casal com olhos castanhos (Aa × Aa) tem filho de olhos azuis (aa). Isso mostra que:", ["Houve uma mutação no filho", "Ambos carregavam o alelo recessivo", "A cor dos olhos não é hereditária", "Olhos azuis são o caráter dominante"], 1, "Os pais são heterozigotos: têm o alelo recessivo \"escondido\". Cada um passou um \"a\" e o filho aa manifestou o caráter recessivo."),
  q("Doenças ligadas ao X, como o daltonismo, são mais comuns em:", ["Mulheres", "Homens", "Igualmente", "Só em idosos"], 1, "O homem tem um só X (XY): um alelo recessivo já se manifesta. A mulher (XX) precisa de dois para ser afetada; com um, é portadora."),
  q("A eritroblastose fetal pode ocorrer quando:", ["Mãe Rh+ e filho Rh−", "Mãe Rh− sensibilizada e filho Rh+", "Mãe e filho são ambos Rh+", "Mãe e filho são ambos Rh−"], 1, "Mãe Rh− sensibilizada (já teve contato com sangue Rh+, em geral num parto anterior) produz anti-Rh, que atravessa a placenta e destrói as hemácias do feto Rh+."),
  f("Genótipo x fenótipo", "Genótipo: os alelos (Aa). Fenótipo: a característica visível (+ influência do ambiente)."),
  f("Codominância", "Os dois alelos se expressam juntos. Ex.: sangue AB (IᴬIᴮ)."),
  c(["Heredograma: quadrado = homem, círculo = mulher.", "Preenchido = afetado.", "Dois normais com filho afetado → recessivo.", "Comece pelos indivíduos recessivos (aa)."], "Monte o quadro de Punnett e conte as casas."),
]);

pack(B, "genetica", 3, 2, "DNA, RNA e proteínas", [
  q("No DNA, a adenina pareia com:", ["Citosina", "Guanina", "Timina", "Uracila"], 2, "Pareamento no DNA: adenina com timina (A–T) e citosina com guanina (C–G). No RNA, a adenina pareia com uracila."),
  q("Qual é uma diferença entre RNA e DNA?", ["O RNA tem uracila e ribose", "O RNA tem timina e desoxirribose", "O RNA tem sempre dupla hélice", "O RNA não tem bases nitrogenadas"], 1, "O RNA tem uracila no lugar da timina, açúcar ribose (não desoxirribose) e em geral é fita simples. O DNA é a dupla hélice."),
  q("A transcrição é a produção de:", ["DNA a partir de DNA", "RNA a partir de DNA", "Proteína a partir de RNA", "Lipídios"], 1, "Transcrição = RNA feito a partir do molde de DNA, no núcleo (eucariontes). DNA a partir de DNA é replicação; proteína a partir de RNA é tradução."),
  q("A tradução acontece:", ["No núcleo", "Nos ribossomos", "Nas mitocôndrias apenas", "No lisossomo"], 1, "Nos ribossomos, o RNA mensageiro é lido em códons e os aminoácidos trazidos pelo RNA transportador são unidos em proteína."),
  q("Um códon é formado por:", ["1 nucleotídeo", "2 nucleotídeos", "3 nucleotídeos", "20 aminoácidos"], 2, "Códon é uma trinca de nucleotídeos do RNAm, que corresponde a um aminoácido ou a um sinal de parada. Ex.: AUG = metionina (início)."),
  q("Organismos transgênicos são aqueles que:", ["Não têm DNA no núcleo", "Receberam gene de outra espécie", "São cópias idênticas de outro ser", "Não conseguem se reproduzir"], 1, "Transgênico recebeu gene de outra espécie por engenharia genética. Ex.: bactérias com gene humano que produzem insulina; milho Bt resistente a pragas."),
  f("Dogma central da biologia molecular", "DNA → (transcrição) → RNA → (tradução) → proteína"),
  f("Teste de DNA (paternidade)", "Compara regiões variáveis do DNA: metade vem da mãe, metade do pai."),
  c(["DNA: dupla-hélice, guarda a informação.", "RNA: fita simples, leva a mensagem.", "Proteína: executa as funções.", "Mutação: mudança na sequência de bases."], "CRISPR permite editar genes como um corretor de texto."),
]);

pack(B, "evolucao", 3, 3, "Teorias evolutivas", [
  q("Pela seleção natural, quem tende a deixar mais descendentes?", ["Os maiores e mais fortes, sempre", "Os mais adaptados ao ambiente", "Os que mais se esforçam em vida", "Os que vivem mais tempo sozinhos"], 1, "Sobrevive e se reproduz mais quem tem características vantajosas NAQUELE ambiente, não necessariamente o mais forte. Esforço em vida não passa aos filhos (isso seria Lamarck)."),
  q("Lamarck explicaria o pescoço longo da girafa pelo:", ["Acaso das mutações", "Uso e herança do que foi adquirido", "Seleção sexual entre machos", "Isolamento geográfico das populações"], 1, "Lamarck: usar muito um órgão o desenvolve (uso e desuso) e isso passaria aos filhos. Hoje sabemos que o esforço não altera o DNA dos gametas."),
  q("Por que não se deve parar o antibiótico antes do fim do tratamento?", ["Sobram as bactérias mais resistentes", "O remédio vira veneno no sangue", "O vírus volta mais forte depois", "A febre sobe por causa do remédio"], 1, "Parar cedo mata as bactérias mais sensíveis e deixa as mais resistentes, que se multiplicam. É seleção natural, e cria superbactérias."),
  q("Órgãos homólogos (braço humano e asa de morcego) indicam:", ["Ancestral comum", "Mesma função obrigatória", "Convergência", "Nenhuma relação"], 0, "Homólogos têm a mesma origem embrionária e estrutura (mesmos ossos), mesmo com funções diferentes: sinal de ancestral comum. Asa de inseto e de ave são análogos (convergência)."),
  q("A teoria sintética (neodarwinismo) acrescenta a Darwin:", ["A genética: mutação e recombinação", "A lei do uso e desuso de Lamarck", "A ideia de criação separada das espécies", "A geração espontânea de seres simples"], 0, "Darwin não sabia de onde vinha a variação. O neodarwinismo juntou a genética: mutações e recombinação geram variabilidade; a seleção natural escolhe."),
  q("Especiação ocorre quando populações:", ["Ficam isoladas até não cruzarem mais", "Migram juntas para um novo ambiente", "Passam a comer o mesmo alimento", "Atingem o mesmo tamanho corporal"], 0, "Separadas (por um rio, montanha), as populações acumulam diferenças até não conseguirem mais cruzar e gerar filhos férteis: isolamento reprodutivo."),
  f("Órgãos análogos", "Mesma função, origens diferentes (asa de inseto e asa de ave): convergência evolutiva."),
  f("Fóssil", "Vestígio ou resto de ser vivo antigo preservado; evidência da evolução."),
  c(["Há variação entre indivíduos.", "Parte dela é hereditária.", "O ambiente favorece algumas variantes.", "Ao longo de gerações, a população muda."], "Evolução não tem objetivo: é sobrevivência diferencial."),
]);

pack(B, "ecologia", 3, 4, "Ciclos biogeoquímicos", [
  q("A fixação biológica do nitrogênio é feita por:", ["Plantas sozinhas, pelas folhas", "Bactérias, como as de leguminosas", "Fungos que decompõem a matéria", "Animais herbívoros, pelas fezes"], 1, "Bactérias como os rizóbios, nas raízes de leguminosas (feijão, soja), transformam o N₂ do ar em compostos que as plantas conseguem usar."),
  q("O desmatamento e as queimadas aumentam na atmosfera principalmente o:", ["O₂", "CO₂", "N₂", "Argônio"], 1, "Queimar floresta libera como CO₂ o carbono guardado na biomassa, intensificando o efeito estufa. E a floresta derrubada deixa de absorver CO₂."),
  q("A transpiração das plantas faz parte do ciclo:", ["Do carbono", "Da água", "Do fósforo", "Do cálcio"], 1, "As plantas absorvem água pelas raízes e liberam vapor pelas folhas: a evapotranspiração é peça importante do ciclo da água (os \"rios voadores\" da Amazônia)."),
  q("O excesso de fertilizantes em rios pode causar:", ["Eutrofização", "Desertificação", "Chuva ácida", "Efeito estufa direto"], 0, "Eutrofização: excesso de nutrientes → explosão de algas → elas morrem e bactérias decompositoras consomem o oxigênio → peixes morrem."),
  q("A fotossíntese retira da atmosfera:", ["O₂", "CO₂", "N₂", "Metano"], 1, "6 CO₂ + 6 H₂O + luz → C₆H₁₂O₆ + 6 O₂. A fotossíntese retira CO₂ e libera O₂; a respiração faz o contrário."),
  q("Rotação de culturas com leguminosas ajuda a:", ["Repor nitrogênio no solo", "Aumentar a erosão do terreno", "Acidificar o solo para a soja", "Eliminar minhocas e fungos"], 0, "As bactérias nas raízes das leguminosas fixam nitrogênio, que fica no solo e adubra a próxima cultura naturalmente, reduzindo fertilizantes."),
  f("Etapas do ciclo do nitrogênio", "Fixação → amonificação → nitrificação → assimilação → desnitrificação."),
  f("Efeito estufa", "Fenômeno natural que mantém a Terra aquecida; o problema é a intensificação por gases como CO₂ e metano."),
  c(["Matéria circula; energia flui e se perde.", "Carbono: fotossíntese tira, respiração e queima devolvem.", "Nitrogênio: depende de bactérias.", "Água: evaporação, transpiração, chuva."], "Floresta em pé é estoque de carbono."),
]);

pack(B, "ecologia", 3, 4, "Relações ecológicas e cadeias", [
  q("Numa cadeia alimentar, os produtores são:", ["Os herbívoros", "Os fotossintetizantes", "Os decompositores", "Os carnívoros"], 1, "Produtores são os fotossintetizantes (plantas, algas, cianobactérias): fabricam matéria orgânica e sustentam toda a cadeia."),
  q("A relação entre abelha e flor é de:", ["Parasitismo", "Mutualismo", "Predação", "Competição"], 1, "Mutualismo: a abelha ganha néctar e pólen (alimento) e a planta ganha polinização. Os dois se beneficiam."),
  q("A rêmora gruda no tubarão e come os restos da caça dele, sem prejudicá-lo. Essa relação é:", ["Parasitismo", "Comensalismo", "Mutualismo", "Predatismo"], 1, "Comensalismo: um ganha (a rêmora, com restos de comida) e o outro não ganha nem perde. No parasitismo, o hospedeiro seria prejudicado."),
  q("Por que as cadeias alimentares raramente passam de 4 ou 5 níveis?", ["Sobra pouca energia no topo", "Faltam espécies de carnívoros", "Os produtores não aguentam", "Os decompositores impedem"], 1, "A cada nível só ~10% da energia passa adiante; o resto vira calor e gasto vital. Depois de poucos níveis, não sobra energia para sustentar mais um."),
  q("Inseticidas não biodegradáveis se acumulam mais nos:", ["Produtores", "Consumidores do topo", "Decompositores", "Herbívoros"], 1, "Magnificação trófica: substâncias que não se degradam (DDT, mercúrio) se acumulam a cada nível. O consumidor do topo concentra mais."),
  q("Liquens são uma associação mutualística entre:", ["Fungos e algas", "Bactérias e vírus", "Plantas e insetos", "Peixes e corais"], 0, "Fungo + alga (ou cianobactéria): a alga faz fotossíntese e alimenta o fungo; o fungo dá proteção e umidade. Liquens indicam ar limpo."),
  f("Relações harmônicas x desarmônicas", "Harmônicas: ninguém sai prejudicado (mutualismo, comensalismo). Desarmônicas: alguém perde (parasitismo, predação, competição)."),
  f("Nicho x habitat", "Habitat: o \"endereço\". Nicho: a \"profissão\" (o que come, como vive)."),
  c(["Produtor → consumidor primário → secundário…", "Decompositores reciclam tudo.", "Energia diminui a cada nível.", "Teia alimentar: várias cadeias ligadas."], "Tirar um predador do topo pode desequilibrar a teia inteira."),
]);

pack(B, "fisiologia", 2, 4, "Digestão e circulação", [
  q("A digestão do amido começa:", ["No estômago", "Na boca", "No intestino grosso", "No fígado"], 1, "Na boca: a amilase salivar (ptialina) começa a quebrar o amido. Por isso o pão fica levemente doce se você mastiga muito."),
  q("Qual é a principal função do intestino grosso?", ["Absorver água e formar as fezes", "Produzir a bile para as gorduras", "Digerir a maior parte das proteínas", "Absorver quase todos os nutrientes"], 1, "O intestino grosso absorve água e sais e forma as fezes; abriga bactérias úteis. A maioria dos nutrientes é absorvida antes, no intestino delgado."),
  q("A bile, produzida pelo fígado, serve para:", ["Digerir proteínas", "Emulsificar gorduras", "Absorver a água", "Produzir insulina"], 1, "A bile emulsifica gorduras: quebra-as em gotinhas, aumentando a superfície para as lipases agirem. Ela não tem enzimas digestivas."),
  q("O sangue rico em oxigênio volta dos pulmões ao coração pelas:", ["Veias cavas", "Veias pulmonares", "Artérias pulmonares", "Aorta"], 1, "Pelas veias pulmonares, que chegam ao átrio esquerdo. Exceção que cai em prova: veia com sangue arterial (rico em O₂)."),
  q("A circulação humana é:", ["Aberta e simples", "Fechada, dupla e completa", "Fechada e simples", "Dupla e incompleta"], 1, "Fechada (sangue sempre em vasos), dupla (passa duas vezes pelo coração: pequena e grande circulação) e completa (sangue arterial e venoso não se misturam)."),
  q("Qual é a função das plaquetas?", ["Transportar o oxigênio", "Ajudar na coagulação", "Produzir os anticorpos", "Englobar as bactérias"], 1, "Plaquetas são fragmentos de células que ajudam a formar o coágulo e estancar sangramentos. Hemácias levam O₂; leucócitos defendem."),
  f("Artéria x veia", "Artéria: sai do coração. Veia: chega ao coração. (Não é sobre ter ou não oxigênio!)"),
  f("Pequena e grande circulação", "Pequena: coração → pulmões → coração. Grande: coração → corpo → coração."),
  c(["Boca: amido começa a ser digerido.", "Estômago: proteínas (pepsina, meio ácido).", "Duodeno: suco pancreático e bile.", "Intestino delgado: absorção."], "Intestino grosso absorve água e forma as fezes."),
]);

pack(B, "fisiologia", 2, 4, "Sistema nervoso, hormônios e imunidade", [
  q("A insulina, produzida pelo pâncreas, faz:", ["Aumentar a glicose no sangue", "Diminuir a glicose no sangue", "Aumentar a pressão", "Digerir gorduras"], 1, "A insulina permite que a glicose entre nas células, baixando a glicose no sangue. Sem ela (ou com resistência a ela), surge o diabetes."),
  q("O neurônio transmite o impulso nervoso:", ["Do axônio para os dendritos", "Dos dendritos para o axônio", "Em qualquer direção, ao acaso", "Somente por meio de hormônios"], 1, "Dendritos recebem o estímulo, o corpo celular processa e o axônio conduz o impulso adiante até a sinapse."),
  q("A vacina age estimulando:", ["Imunidade passiva", "Imunidade ativa", "Produção de antibióticos", "Febre alta"], 1, "A vacina expõe o corpo a antígenos inofensivos; ele mesmo produz anticorpos e memória (imunidade ativa). Demora, mas dura."),
  q("O soro antiofídico fornece:", ["Antígenos do veneno", "Anticorpos prontos", "Vírus atenuado", "Vitaminas e sais"], 1, "O soro traz anticorpos prontos contra o veneno (imunidade passiva): age na hora, mas não cria memória. Por isso é usado após a picada."),
  q("O hormônio adrenalina prepara o corpo para:", ["Dormir", "Luta ou fuga", "Fazer a digestão", "Crescimento ósseo"], 1, "Produzida pelas suprarrenais em situação de perigo, a adrenalina acelera coração e respiração e libera glicose: preparo para lutar ou fugir."),
  q("Ato reflexo, como tirar a mão do fogo, é coordenado pela:", ["Medula espinal", "Glândula tireoide", "Hipófise", "Pele"], 0, "No arco reflexo, a medula espinal recebe o sinal e manda a resposta direto ao músculo, antes mesmo de o cérebro perceber a dor."),
  f("Vacina x soro", "Vacina: prevenção, ativa, demora, deixa memória. Soro: tratamento, passiva, imediato, sem memória."),
  f("Sinapse", "Comunicação entre neurônios por neurotransmissores (ex.: dopamina, serotonina)."),
  c(["Sistema nervoso: rápido, por impulsos elétricos.", "Sistema endócrino: lento, por hormônios no sangue.", "Imunidade inata: primeira barreira.", "Imunidade adaptativa: anticorpos e memória."], "Vacinação em massa protege até quem não pode se vacinar."),
]);

pack(B, "seres-vivos", 2, 1, "Vírus e bactérias", [
  q("Vírus são considerados parasitas intracelulares obrigatórios porque:", ["Destroem as células ao se alimentar delas", "Só se reproduzem dentro de células", "São bactérias muito pequenas", "Fazem fotossíntese dentro das células"], 1, "Vírus não têm metabolismo próprio: só se reproduzem usando a \"maquinaria\" de uma célula hospedeira. Fora dela, ficam inertes."),
  q("Por que antibiótico não cura gripe?", ["A gripe é causada por vírus", "O vírus da gripe é resistente", "A gripe é causada por fungo", "O remédio só age no intestino"], 1, "Antibióticos atacam estruturas de bactérias. A gripe é causada pelo vírus influenza, que não tem essas estruturas. Usar à toa só seleciona bactérias resistentes."),
  q("Qual destas doenças é causada por vírus?", ["Tuberculose", "Dengue", "Cólera", "Tétano"], 1, "Dengue é causada por vírus e transmitida pelo mosquito Aedes aegypti. Tuberculose, cólera e tétano são causadas por bactérias."),
  q("Qual destas doenças é causada por um protozoário?", ["Tuberculose", "Sarampo", "Doença de Chagas", "Covid-19"], 2, "Chagas é causada pelo protozoário Trypanosoma cruzi, transmitido pelas fezes do barbeiro. Tuberculose é bactéria; sarampo e covid, vírus."),
  q("Bactérias são úteis na produção de:", ["Iogurte", "Vidro", "Plástico de petróleo", "Aço"], 0, "Bactérias láticas fermentam o açúcar do leite (lactose) em ácido lático, que coagula o leite e forma o iogurte e alguns queijos."),
  q("A principal forma de prevenção da dengue é:", ["Tomar antibiótico", "Eliminar água parada", "Lavar bem as frutas", "Ferver a água de beber"], 1, "O Aedes aegypti põe ovos em água parada. Eliminar criadouros (pneus, vasos, caixas-d'água abertas) corta o ciclo. Antibiótico não age em vírus."),
  f("Estrutura de um vírus", "Material genético (DNA ou RNA) envolto por cápsula de proteína (capsídeo); alguns têm envelope."),
  f("Reprodução das bactérias", "Divisão binária (assexuada); podem trocar genes por conjugação."),
  c(["Vírus: acelular, só replica em células.", "Bactéria: procarionte, célula completa.", "Vírus: vacinas e antivirais.", "Bactéria: antibióticos e saneamento."], "Usar antibiótico errado seleciona bactérias resistentes."),
]);

pack(B, "seres-vivos", 2, 2, "Plantas", [
  q("Nas angiospermas, a semente fica protegida dentro do:", ["Fruto", "Estróbilo", "Esporângio", "Caule"], 3, "Angiosperma vem de \"semente em urna\": o fruto, formado pelo ovário, protege a semente e ajuda a espalhá-la. Gimnospermas têm sementes nuas, em estróbilos (pinhas)."),
  q("Musgos (briófitas) vivem em locais úmidos porque:", ["Precisam de sombra para fazer fotossíntese", "Não têm vasos e dependem da água", "Têm raízes enormes que buscam água", "São plantas exclusivamente aquáticas"], 1, "Sem vasos, a água passa de célula em célula; e o gameta masculino precisa nadar até o feminino. Por isso são pequenos e de lugares úmidos."),
  q("O pinheiro é uma:", ["Angiosperma", "Gimnosperma", "Briófita", "Alga"], 1, "Gimnosperma: tem sementes \"nuas\", sem fruto, presas em estróbilos (pinhas). O pinhão é a semente da araucária."),
  q("O xilema transporta:", ["Seiva elaborada", "Água e sais minerais", "Gás oxigênio", "Grãos de pólen"], 1, "O xilema leva água e sais minerais (seiva bruta) da raiz às folhas. O floema leva a seiva elaborada (açúcares) das folhas ao resto da planta."),
  q("Os estômatos, nas folhas, controlam:", ["A fotossíntese das raízes", "As trocas gasosas e a transpiração", "A floração e a formação de frutos", "A absorção de sais do solo"], 1, "Os estômatos abrem e fecham conforme a luz e a água disponível: com seca, fecham para não perder água, mas aí também entra menos CO₂."),
  q("Samambaias (pteridófitas) foram as primeiras a ter:", ["Flores", "Sementes", "Vasos condutores", "Frutos"], 2, "Pteridófitas foram as primeiras com vasos condutores (xilema e floema), por isso crescem mais que os musgos. Ainda não têm sementes, flores nem frutos."),
  f("Floema", "Leva a seiva elaborada (açúcares) das folhas para o resto da planta."),
  f("Fototropismo", "Crescimento orientado pela luz, controlado pelo hormônio auxina."),
  c(["Briófitas: sem vasos.", "Pteridófitas: vasos, sem sementes.", "Gimnospermas: sementes nuas.", "Angiospermas: flores e frutos."], "Ordem evolutiva: musgo → samambaia → pinheiro → mangueira."),
]);

pack(B, "seres-vivos", 2, 3, "Animais", [
  q("Os mamíferos se caracterizam por:", ["Penas e bico", "Pelos e mamas", "Escamas e ovos", "Brânquias"], 1, "Pelos e glândulas mamárias (que produzem leite) são exclusivos dos mamíferos. Também são endotérmicos e quase todos são vivíparos."),
  q("Anfíbios, como o sapo, têm respiração:", ["Só pulmonar, a vida toda", "Branquial na larva e pulmonar e cutânea no adulto", "Só cutânea, pela pele úmida", "Traqueal, como a dos insetos"], 1, "O girino vive na água e respira por brânquias. Após a metamorfose, o adulto respira por pulmões simples e pela pele úmida (cutânea)."),
  q("Insetos têm:", ["8 patas e corpo em duas partes", "6 patas e corpo em três partes", "Coluna vertebral e esqueleto interno", "Pulmões e respiração cutânea"], 1, "Insetos: 6 patas, corpo em cabeça, tórax e abdome e um par de antenas. Aranhas (8 patas, corpo em duas partes) são aracnídeos."),
  q("Animais endotérmicos são os que:", ["Dependem do sol para se aquecer", "Mantêm a temperatura constante", "Vivem apenas em ambiente aquático", "Não têm sangue circulante"], 1, "Endotérmicos (aves e mamíferos) produzem calor e mantêm a temperatura constante. Ectotérmicos (répteis, peixes) dependem do ambiente."),
  q("A esponja-do-mar pertence aos:", ["Poríferos", "Cnidários", "Moluscos", "Equinodermos"], 0, "Poríferos são os animais mais simples: corpo cheio de poros, sem tecidos verdadeiros nem órgãos. Filtram a água para se alimentar."),
  q("A estrela-do-mar é um:", ["Peixe", "Equinodermo", "Molusco", "Crustáceo"], 1, "Equinodermo: pele com espinhos, simetria radial no adulto e sistema ambulacrário (pés com ventosas movidos por água). Ouriço também é."),
  f("Ovo amniótico", "Ovo com casca e membranas que permitiu a reprodução fora da água (répteis, aves e mamíferos)."),
  f("Vertebrados", "Peixes, anfíbios, répteis, aves e mamíferos: têm coluna vertebral."),
  c(["Poríferos e cnidários: os mais simples.", "Artrópodes: o maior grupo (insetos!).", "Moluscos: corpo mole, muitos com concha.", "Cordados: incluem os vertebrados."], "Morcego é mamífero; baleia também; pinguim é ave."),
]);
