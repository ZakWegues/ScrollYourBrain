import { BIOLOGIA as B } from "./natureza-humanas";
import { c, f, pack, q } from "./pack";

pack(B, "citologia", 1, 2, "Organelas", [
  q("A organela responsável pela respiração celular é:", ["Ribossomo", "Mitocôndria", "Lisossomo", "Complexo golgiense"], 1, "Produz ATP a partir da glicose."),
  q("A síntese de proteínas ocorre nos:", ["Ribossomos", "Centríolos", "Vacúolos", "Lisossomos"], 0, "Ribossomos traduzem o RNA mensageiro."),
  q("Organela presente em células vegetais e ausente nas animais:", ["Mitocôndria", "Cloroplasto", "Ribossomo", "Núcleo"], 1, "Faz fotossíntese. A parede celular também é exclusiva."),
  q("O complexo golgiense atua principalmente em:", ["Digestão celular", "Armazenar e secretar substâncias", "Fotossíntese", "Divisão celular"], 1, "Empacota e \"exporta\" substâncias."),
  q("Lisossomos contêm:", ["DNA", "Enzimas digestivas", "Clorofila", "Glicogênio apenas"], 1, "Fazem a digestão intracelular."),
  q("Células procariontes não possuem:", ["Membrana plasmática", "Ribossomos", "Núcleo organizado (carioteca)", "Material genético"], 2, "O DNA fica disperso no citoplasma (nucleoide)."),
  f("Membrana plasmática", "Bicamada de fosfolipídios com proteínas; tem permeabilidade seletiva."),
  f("Retículo endoplasmático rugoso x liso", "Rugoso: com ribossomos, faz proteínas. Liso: faz lipídios e desintoxica."),
  c(["A célula é uma pequena fábrica.", "Núcleo: a diretoria (DNA).", "Ribossomo: a linha de montagem de proteínas.", "Mitocôndria: a usina de energia."], "Cloroplasto e mitocôndria têm DNA próprio (teoria endossimbiótica)."),
]);

pack(B, "citologia", 1, 3, "Mitose e meiose", [
  q("A mitose produz:", ["4 células com metade dos cromossomos", "2 células idênticas à original", "Gametas", "Esporos sempre"], 1, "Serve para crescimento e regeneração."),
  q("A meiose é importante porque:", ["Mantém o número de cromossomos da espécie na reprodução sexuada", "Cura feridas", "Faz a célula crescer", "Produz energia"], 0, "Gametas haploides (n) se unem e formam o zigoto diploide (2n)."),
  q("O crossing-over ocorre na:", ["Mitose", "Meiose I", "Interfase", "Citocinese"], 1, "Troca de pedaços entre cromossomos homólogos: aumenta a variabilidade."),
  q("Uma célula humana 2n = 46 forma gametas com:", ["46 cromossomos", "23 cromossomos", "92 cromossomos", "12 cromossomos"], 1, "Meiose reduz pela metade."),
  q("A duplicação do DNA acontece:", ["Na metáfase", "Na interfase (fase S)", "Na anáfase", "Na telófase"], 1, "Antes da divisão começar."),
  q("O câncer está relacionado a:", ["Divisões celulares descontroladas", "Excesso de meiose", "Falta de ribossomos", "Fotossíntese"], 0, "Mutações em genes que controlam o ciclo celular."),
  f("Fases da mitose", "Prófase, metáfase (cromossomos no meio), anáfase (separação), telófase."),
  f("Haploide x diploide", "Haploide (n): um conjunto de cromossomos (gametas). Diploide (2n): dois conjuntos (células do corpo)."),
  c(["Mitose: 1 → 2 células iguais.", "Meiose: 1 → 4 células com metade.", "Mitose: crescer e regenerar.", "Meiose: gametas e variabilidade."], "Mitose copia; meiose embaralha."),
]);

pack(B, "genetica", 3, 1, "Heredogramas e grupos sanguíneos", [
  q("Cruzamento Aa × Aa: proporção de filhos aa?", ["0%", "25%", "50%", "75%"], 1, "AA, Aa, Aa, aa → 1/4."),
  q("Pessoas do tipo sanguíneo O são chamadas doadoras universais porque:", ["Têm anticorpos A e B", "Suas hemácias não têm aglutinogênios A nem B", "Têm sangue raro", "Têm fator Rh negativo sempre"], 1, "Não há antígeno nas hemácias para o receptor reagir (considerando só ABO)."),
  q("Os genótipos possíveis para o tipo sanguíneo A são:", ["Só IᴬIᴬ", "IᴬIᴬ ou Iᴬi", "IᴬIᴮ", "ii"], 1, "Iᴬ domina i."),
  q("Um casal com olhos castanhos (Aa × Aa) tem filho de olhos azuis (aa). Isso mostra que:", ["Houve mutação", "Ambos carregavam o alelo recessivo", "O pai não é o pai", "Olhos azuis são dominantes"], 1, "Heterozigotos podem ter filhos recessivos."),
  q("Doenças ligadas ao X, como o daltonismo, são mais comuns em:", ["Mulheres", "Homens", "Igualmente", "Só em idosos"], 1, "O homem tem um só X: um alelo recessivo já se manifesta."),
  q("A eritroblastose fetal pode ocorrer quando:", ["Mãe Rh+ e filho Rh−", "Mãe Rh− sensibilizada e filho Rh+", "Mãe e filho Rh+", "Mãe e filho Rh−"], 1, "Anticorpos anti-Rh da mãe atacam as hemácias do feto."),
  f("Genótipo x fenótipo", "Genótipo: os alelos (Aa). Fenótipo: a característica visível (+ influência do ambiente)."),
  f("Codominância", "Os dois alelos se expressam juntos. Ex.: sangue AB (IᴬIᴮ)."),
  c(["Heredograma: quadrado = homem, círculo = mulher.", "Preenchido = afetado.", "Dois normais com filho afetado → recessivo.", "Comece pelos indivíduos recessivos (aa)."], "Monte o quadro de Punnett e conte as casas."),
]);

pack(B, "genetica", 3, 2, "DNA, RNA e proteínas", [
  q("No DNA, a adenina pareia com:", ["Citosina", "Guanina", "Timina", "Uracila"], 2, "A–T e C–G."),
  q("No RNA, a timina é substituída por:", ["Adenina", "Uracila", "Citosina", "Guanina"], 1, "RNA tem uracila (U)."),
  q("A transcrição é a produção de:", ["DNA a partir de DNA", "RNA a partir de DNA", "Proteína a partir de RNA", "Lipídios"], 1, "Ocorre no núcleo (eucariontes)."),
  q("A tradução acontece:", ["No núcleo", "Nos ribossomos", "Nas mitocôndrias apenas", "No lisossomo"], 1, "O RNAm é lido em códons e vira proteína."),
  q("Um códon é formado por:", ["1 nucleotídeo", "2 nucleotídeos", "3 nucleotídeos", "20 aminoácidos"], 2, "Cada trinca codifica um aminoácido (ou parada)."),
  q("Organismos transgênicos são aqueles que:", ["Não têm DNA", "Receberam gene de outra espécie", "São clones", "Não se reproduzem"], 1, "Ex.: bactérias que produzem insulina humana."),
  f("Dogma central da biologia molecular", "DNA → (transcrição) → RNA → (tradução) → proteína"),
  f("Teste de DNA (paternidade)", "Compara regiões variáveis do DNA: metade vem da mãe, metade do pai."),
  c(["DNA: dupla-hélice, guarda a informação.", "RNA: fita simples, leva a mensagem.", "Proteína: executa as funções.", "Mutação: mudança na sequência de bases."], "CRISPR permite editar genes como um corretor de texto."),
]);

pack(B, "evolucao", 3, 3, "Teorias evolutivas", [
  q("Para Darwin, o principal mecanismo da evolução é:", ["Uso e desuso", "Seleção natural", "Criação especial", "Herança dos caracteres adquiridos"], 1, "Indivíduos mais adaptados deixam mais descendentes."),
  q("Lamarck explicaria o pescoço longo da girafa pelo:", ["Acaso", "Uso e desuso + herança dos caracteres adquiridos", "Seleção sexual", "Mutação"], 1, "Ideia hoje refutada: o esforço não altera o DNA dos gametas."),
  q("Bactérias resistentes a antibióticos surgem porque:", ["O antibiótico cria a resistência", "Variantes já resistentes sobrevivem e se multiplicam", "As bactérias aprendem", "A resistência é contagiosa entre pessoas"], 1, "Seleção natural em ação. Por isso não se deve usar antibiótico à toa."),
  q("Órgãos homólogos (braço humano e asa de morcego) indicam:", ["Ancestral comum", "Mesma função obrigatória", "Convergência", "Nenhuma relação"], 0, "Mesma origem embrionária, funções que podem diferir."),
  q("A teoria sintética (neodarwinismo) acrescenta a Darwin:", ["A genética: mutação e recombinação", "O uso e desuso", "A criação", "A geração espontânea"], 0, "Explica a origem da variabilidade."),
  q("Especiação ocorre quando populações:", ["Ficam isoladas e acumulam diferenças até não cruzarem mais", "Migram juntas", "Comem o mesmo alimento", "Têm o mesmo tamanho"], 0, "Isolamento geográfico → isolamento reprodutivo."),
  f("Órgãos análogos", "Mesma função, origens diferentes (asa de inseto e asa de ave): convergência evolutiva."),
  f("Fóssil", "Vestígio ou resto de ser vivo antigo preservado; evidência da evolução."),
  c(["Há variação entre indivíduos.", "Parte dela é hereditária.", "O ambiente favorece algumas variantes.", "Ao longo de gerações, a população muda."], "Evolução não tem objetivo: é sobrevivência diferencial."),
]);

pack(B, "ecologia", 3, 4, "Ciclos biogeoquímicos", [
  q("A fixação biológica do nitrogênio é feita por:", ["Plantas sozinhas", "Bactérias (como as das raízes das leguminosas)", "Fungos", "Animais"], 1, "Rizóbios transformam N₂ em compostos que as plantas usam."),
  q("O desmatamento e as queimadas aumentam na atmosfera principalmente o:", ["O₂", "CO₂", "N₂", "Argônio"], 1, "A queima libera o carbono guardado na biomassa."),
  q("A transpiração das plantas faz parte do ciclo:", ["Do carbono", "Da água", "Do fósforo", "Do cálcio"], 1, "Devolve vapor d'água para a atmosfera."),
  q("O excesso de fertilizantes em rios pode causar:", ["Eutrofização", "Desertificação", "Chuva ácida", "Efeito estufa direto"], 0, "Nutrientes em excesso → explosão de algas → falta de oxigênio."),
  q("A fotossíntese retira da atmosfera:", ["O₂", "CO₂", "N₂", "Metano"], 1, "6 CO₂ + 6 H₂O → C₆H₁₂O₆ + 6 O₂."),
  q("Rotação de culturas com leguminosas ajuda a:", ["Repor nitrogênio no solo", "Aumentar a erosão", "Acidificar o solo", "Eliminar minhocas"], 0, "Bactérias das raízes fixam nitrogênio."),
  f("Etapas do ciclo do nitrogênio", "Fixação → amonificação → nitrificação → assimilação → desnitrificação."),
  f("Efeito estufa", "Fenômeno natural que mantém a Terra aquecida; o problema é a intensificação por gases como CO₂ e metano."),
  c(["Matéria circula; energia flui e se perde.", "Carbono: fotossíntese tira, respiração e queima devolvem.", "Nitrogênio: depende de bactérias.", "Água: evaporação, transpiração, chuva."], "Floresta em pé é estoque de carbono."),
]);

pack(B, "ecologia", 3, 4, "Relações ecológicas e cadeias", [
  q("Numa cadeia alimentar, os produtores são:", ["Os herbívoros", "Os seres fotossintetizantes", "Os decompositores", "Os carnívoros"], 1, "Plantas, algas e cianobactérias."),
  q("A relação entre abelha e flor é de:", ["Parasitismo", "Mutualismo", "Predação", "Competição"], 1, "Ambos ganham: alimento e polinização."),
  q("O carrapato no cachorro é exemplo de:", ["Comensalismo", "Parasitismo", "Mutualismo", "Inquilinismo"], 1, "Um ganha, o outro é prejudicado."),
  q("A energia disponível ao longo da cadeia alimentar:", ["Aumenta", "Diminui a cada nível trófico", "Fica constante", "Volta ao início"], 1, "Cerca de 10% passa ao nível seguinte; o resto se dissipa."),
  q("Inseticidas não biodegradáveis se acumulam mais nos:", ["Produtores", "Consumidores do topo da cadeia", "Decompositores", "Herbívoros"], 1, "Magnificação trófica."),
  q("Liquens são uma associação mutualística entre:", ["Fungos e algas", "Bactérias e vírus", "Plantas e insetos", "Peixes e corais"], 0, "A alga faz fotossíntese; o fungo dá proteção e umidade."),
  f("Relações harmônicas x desarmônicas", "Harmônicas: ninguém sai prejudicado (mutualismo, comensalismo). Desarmônicas: alguém perde (parasitismo, predação, competição)."),
  f("Nicho x habitat", "Habitat: o \"endereço\". Nicho: a \"profissão\" (o que come, como vive)."),
  c(["Produtor → consumidor primário → secundário…", "Decompositores reciclam tudo.", "Energia diminui a cada nível.", "Teia alimentar: várias cadeias ligadas."], "Tirar um predador do topo pode desequilibrar a teia inteira."),
]);

pack(B, "fisiologia", 2, 4, "Digestão e circulação", [
  q("A digestão do amido começa:", ["No estômago", "Na boca, pela amilase salivar", "No intestino grosso", "No fígado"], 1, "A saliva já quebra amido."),
  q("O principal local de absorção de nutrientes é:", ["Estômago", "Intestino delgado", "Esôfago", "Intestino grosso"], 1, "As vilosidades aumentam a superfície de absorção."),
  q("A bile, produzida pelo fígado, serve para:", ["Digerir proteínas", "Emulsificar gorduras", "Absorver água", "Produzir insulina"], 1, "Quebra a gordura em gotinhas para as enzimas agirem."),
  q("O sangue rico em oxigênio volta dos pulmões ao coração pelas:", ["Veias cavas", "Veias pulmonares", "Artérias pulmonares", "Aorta"], 1, "Exceção que cai em prova: veia com sangue arterial."),
  q("A circulação humana é:", ["Aberta", "Fechada, dupla e completa", "Simples", "Incompleta"], 1, "Sangue arterial e venoso não se misturam."),
  q("As hemácias têm a função de:", ["Defender o corpo", "Transportar oxigênio", "Coagular o sangue", "Produzir anticorpos"], 1, "Graças à hemoglobina."),
  f("Artéria x veia", "Artéria: sai do coração. Veia: chega ao coração. (Não é sobre ter ou não oxigênio!)"),
  f("Pequena e grande circulação", "Pequena: coração → pulmões → coração. Grande: coração → corpo → coração."),
  c(["Boca: amido começa a ser digerido.", "Estômago: proteínas (pepsina, meio ácido).", "Duodeno: suco pancreático e bile.", "Intestino delgado: absorção."], "Intestino grosso absorve água e forma as fezes."),
]);

pack(B, "fisiologia", 2, 4, "Sistema nervoso, hormônios e imunidade", [
  q("A insulina, produzida pelo pâncreas, faz:", ["Aumentar a glicose no sangue", "Diminuir a glicose no sangue", "Aumentar a pressão", "Digerir gorduras"], 1, "Permite que a glicose entre nas células."),
  q("O neurônio transmite o impulso nervoso:", ["Do axônio para os dendritos", "Dos dendritos para o corpo celular e axônio", "Aleatoriamente", "Só por hormônios"], 1, "Dendritos recebem; axônio conduz adiante."),
  q("A vacina age estimulando:", ["Imunidade passiva", "Imunidade ativa, com produção de memória", "Antibióticos", "Febre"], 1, "Expõe o corpo a antígenos inofensivos para criar memória."),
  q("O soro antiofídico fornece:", ["Antígenos", "Anticorpos prontos (imunidade passiva)", "Vírus atenuado", "Vitaminas"], 1, "Ação imediata, mas sem memória."),
  q("O hormônio adrenalina prepara o corpo para:", ["Dormir", "Situações de luta ou fuga", "Digestão", "Crescimento ósseo"], 1, "Acelera coração e respiração."),
  q("Ato reflexo, como tirar a mão do fogo, é coordenado pela:", ["Medula espinal", "Glândula tireoide", "Hipófise", "Pele"], 0, "A resposta é rápida, antes mesmo de o cérebro perceber a dor."),
  f("Vacina x soro", "Vacina: prevenção, ativa, demora, deixa memória. Soro: tratamento, passiva, imediato, sem memória."),
  f("Sinapse", "Comunicação entre neurônios por neurotransmissores (ex.: dopamina, serotonina)."),
  c(["Sistema nervoso: rápido, por impulsos elétricos.", "Sistema endócrino: lento, por hormônios no sangue.", "Imunidade inata: primeira barreira.", "Imunidade adaptativa: anticorpos e memória."], "Vacinação em massa protege até quem não pode se vacinar."),
]);

pack(B, "seres-vivos", 2, 1, "Vírus e bactérias", [
  q("Vírus são considerados parasitas intracelulares obrigatórios porque:", ["Comem células", "Só se reproduzem dentro de células", "São bactérias pequenas", "Fazem fotossíntese"], 1, "Fora da célula não têm metabolismo."),
  q("Antibióticos funcionam contra:", ["Vírus", "Bactérias", "Fungos sempre", "Vermes"], 1, "Não adianta tomar antibiótico para gripe."),
  q("Doença causada por vírus:", ["Tuberculose", "Dengue", "Cólera", "Tétano"], 1, "Dengue: vírus transmitido pelo Aedes aegypti."),
  q("Doença causada por bactéria:", ["Gripe", "Sarampo", "Tuberculose", "Covid-19"], 2, "Mycobacterium tuberculosis."),
  q("Bactérias são úteis na produção de:", ["Iogurte", "Vidro", "Plástico de petróleo", "Aço"], 0, "Fermentação lática."),
  q("A principal forma de prevenção da dengue é:", ["Antibiótico", "Eliminar água parada (criadouros do mosquito)", "Lavar frutas", "Ferver a água"], 1, "Sem criadouros, o Aedes não se reproduz."),
  f("Estrutura de um vírus", "Material genético (DNA ou RNA) envolto por cápsula de proteína (capsídeo); alguns têm envelope."),
  f("Reprodução das bactérias", "Divisão binária (assexuada); podem trocar genes por conjugação."),
  c(["Vírus: acelular, só replica em células.", "Bactéria: procarionte, célula completa.", "Vírus: vacinas e antivirais.", "Bactéria: antibióticos e saneamento."], "Usar antibiótico errado seleciona bactérias resistentes."),
]);

pack(B, "seres-vivos", 2, 2, "Plantas", [
  q("Qual grupo de plantas tem flores e frutos?", ["Briófitas", "Pteridófitas", "Gimnospermas", "Angiospermas"], 3, "Angiospermas: \"semente dentro de urna\" (fruto)."),
  q("Musgos (briófitas) vivem em locais úmidos porque:", ["Gostam de sombra", "Não têm vasos condutores e dependem da água para reprodução", "Têm raízes enormes", "São aquáticos"], 1, "O gameta masculino precisa de água para nadar."),
  q("O pinheiro é uma:", ["Angiosperma", "Gimnosperma", "Briófita", "Alga"], 1, "Tem sementes \"nuas\" (sem fruto)."),
  q("O xilema transporta:", ["Seiva elaborada", "Água e sais minerais (seiva bruta)", "Gás oxigênio", "Pólen"], 1, "Da raiz para as folhas."),
  q("Os estômatos, nas folhas, controlam:", ["A fotossíntese de raiz", "Trocas gasosas e transpiração", "A floração", "A absorção de sais"], 1, "Abrem e fecham conforme luz e água."),
  q("Samambaias (pteridófitas) foram as primeiras a ter:", ["Flores", "Sementes", "Vasos condutores", "Frutos"], 2, "Mas ainda não têm sementes."),
  f("Floema", "Leva a seiva elaborada (açúcares) das folhas para o resto da planta."),
  f("Fototropismo", "Crescimento orientado pela luz, controlado pelo hormônio auxina."),
  c(["Briófitas: sem vasos.", "Pteridófitas: vasos, sem sementes.", "Gimnospermas: sementes nuas.", "Angiospermas: flores e frutos."], "Ordem evolutiva: musgo → samambaia → pinheiro → mangueira."),
]);

pack(B, "seres-vivos", 2, 3, "Animais", [
  q("Os mamíferos se caracterizam por:", ["Penas", "Glândulas mamárias e pelos", "Escamas", "Respiração branquial"], 1, "Também são endotérmicos."),
  q("Anfíbios, como o sapo, têm respiração:", ["Só pulmonar", "Branquial na fase larval e pulmonar/cutânea no adulto", "Só cutânea", "Traqueal"], 1, "Girino respira por brânquias."),
  q("Insetos têm:", ["8 patas", "6 patas e corpo dividido em cabeça, tórax e abdome", "Coluna vertebral", "Pulmões"], 1, "Aranhas (8 patas) são aracnídeos."),
  q("Animais endotérmicos são os que:", ["Dependem do sol para se aquecer", "Mantêm a temperatura corporal constante", "Vivem só na água", "Não têm sangue"], 1, "Aves e mamíferos."),
  q("A esponja-do-mar pertence aos:", ["Poríferos", "Cnidários", "Moluscos", "Equinodermos"], 0, "Animais simples, sem tecidos verdadeiros."),
  q("A estrela-do-mar é um:", ["Peixe", "Equinodermo", "Molusco", "Crustáceo"], 1, "Pele com espinhos e sistema ambulacrário."),
  f("Ovo amniótico", "Ovo com casca e membranas que permitiu a reprodução fora da água (répteis, aves e mamíferos)."),
  f("Vertebrados", "Peixes, anfíbios, répteis, aves e mamíferos: têm coluna vertebral."),
  c(["Poríferos e cnidários: os mais simples.", "Artrópodes: o maior grupo (insetos!).", "Moluscos: corpo mole, muitos com concha.", "Cordados: incluem os vertebrados."], "Morcego é mamífero; baleia também; pinguim é ave."),
]);
