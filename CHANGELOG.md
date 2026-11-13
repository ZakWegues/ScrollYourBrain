# Changelog

Todas as mudanças relevantes do ScrollYourBrain. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [0.8.0] — 2026-11-13
### Corrigido
- **A resposta certa não é mais a alternativa mais longa.** Nas questões escritas à mão, a certa era sozinha a mais longa em 49% dos casos e tinha 1,7× o tamanho das erradas.
  - As alternativas foram reescritas com o mesmo tamanho e estilo, e as erradas absurdas foram trocadas por erradas plausíveis.
  - Agora a certa é sozinha a mais longa em 19% e a mais curta em 11% (no acaso seriam ~25%), com razão de tamanho 1,08.
  - Um teste impede que o viés volte, também nas questões geradas.
### Adicionado
- **Marque todas as certas:** 95 questões com 2, 3 ou 4 certas. Só conta acerto com o conjunto exato, e o app mostra quantas certas você marcou.
- **Dissertativas:** 37 perguntas de "explique por quê".
  - Você escreve a resposta e vê a resposta-modelo e os pontos-chave; os que aparecem no seu texto já vêm marcados.
  - Depois você diz se acertou, acertou parte ou errou.
- As duas aparecem no feed, na aula guiada, na revisão e no caderno de erros. "Marque todas" entra nos simulados; as dissertativas entram na prova do modo de estudo se você ligar "Incluir dissertativas".
- **Assistir depois:** guarde vídeos pelo menu "Mais" ou pela tela do vídeo; a lista fica na Biblioteca.
- **Legendas em português** nos vídeos, ligadas por padrão (Ajustes → Vídeos).
- **Shorts das contas que você segue** aparecem com o triplo de chance.
- Mais Shorts para as contas que tinham poucos (330 no total).

## [0.7.2] — 2026-11-11
### Melhorado
- **Shorts carregam bem mais rápido:**
  - **O próximo vídeo carrega antes:** quando faltam até 2 cards, ele fica pronto e pausado, e começa na hora em que aparece. Ficam no máximo 2 players ao mesmo tempo, e isso não acontece com a economia de dados ligada.
  - **Player mais direto:** o vídeo começa a carregar de primeira, sem baixar antes os scripts da API do YouTube. Isso o deixa pronto 25 a 35% mais rápido. Se o YouTube não responder em 6 s, o app volta sozinho para o jeito antigo.
  - **Conexão aquecida ao abrir o app:** um player invisível deixa o YouTube pronto antes do primeiro vídeo.
  - **Capas dos próximos vídeos baixadas antes.**

## [0.7.1] — 2026-11-11
### Corrigido
- **A resposta certa caía na B em 72% das questões escritas à mão.**
  - Agora as alternativas aparecem numa ordem aleatória a cada vez que a questão aparece (feed, simulados, revisão, aula e pergunta do dia).
  - A ordem de base também foi equilibrada: A 27%, B 23%, C 25% e D 25%.
  - Um teste impede que o viés volte.

## [0.7.0] — 2026-11-11
### Corrigido
- **Vídeos tocam dentro do app.** O player agora é próprio: a página do player tem a origem do app, como o YouTube exige desde 2025 (antes os vídeos davam erro de configuração e eram pulados).
  - Se o YouTube ainda recusar um vídeo, aparece **"Assistir aqui"**, que abre o vídeo numa tela do próprio app.
  - Só vídeos removidos ou privados são pulados.
- As abas do feed não ficam mais por cima da meta diária: a meta virou um anel compacto e as abas se ajustam em telas estreitas e com texto grande.
- Versão web: corrigido um loop de renderização ao voltar de outra tela para o feed.
### Adicionado
- **Mais que o dobro de Shorts:** de 141 para mais de 300, de todas as matérias.
- Tela de vídeo dentro do app, também usada no "Aula completa".
### Alterado
- **Telas mais simples à primeira vista, sem perder nenhuma função:**
  - **Biblioteca:** sequência, desafio e resumo da semana ficam em "Sua semana"; "Adicionar vídeo" abre com um toque.
  - **Ajustes:** tema, meta, lembrete e série no topo; o resto em seções que abrem com um toque.
  - **Explorar:** modos, quiz relâmpago e foco numa linha de atalhos; cada matéria abre com um toque.
  - **Card do feed:** um chip só (formato e canal); revisão e nota viram ícones.

## [0.6.0] — 2026-11-11
### Corrigido
- A barra de abas parava de responder no Android (contêiner sem altura) e podia ficar escondida depois de um gesto interrompido.
- Os botões do card (curtir, salvar, Mais) sumiam ao voltar do segundo plano: o feed agora ignora alturas inválidas e se realinha.
- O teclado cobria campos de texto: folhas e telas sobem com o teclado; a nota só foca depois que a folha abre.
- Avisos cobriam o botão "Mais": agora aparecem no topo.
- O botão de salvar prova ficava cortado; o selo de seguir não era clicável por inteiro.
- O quiz relâmpago podia não terminar na segunda rodada; dava para ganhar XP curtindo e descurtindo.
- Questões geradas às vezes tinham menos de 4 opções.
- "Apagar todos os dados" não apagava XP, erros e modos salvos.
### Adicionado
- **Caderno de erros**, **simulado dos pontos fracos**, **aula guiada**, **pergunta do dia** e **reta final** (plano de 7 dias).
- **Tema automático:** claro de dia, escuro à noite.
- **Ícones do app** desbloqueáveis por nível (Néon, Aurora, Espaço, Ouro).
- Novos geradores de questões em 10 contas (genética, orgânica, pH, calorimetria, dinâmica, ondas, óptica, soluções, PA/PG, inglês).
- Macetes do 2º dia do ENEM.
- Documentação: README, guia de contribuição, arquitetura, conteúdo, publicação, privacidade e segurança.
### Alterado
- Biblioteca mais enxuta; o resumo da semana fica em Estatísticas.
- Permissões de sobreposição de tela e armazenamento removidas.

## [0.5.0] — 2026-11-11
### Adicionado
- **42 contas de submatéria**; conteúdo de 502 para **1.302 cards**; geradores por conta.
- "Assuntos da minha escola" para escolher o que o feed mostra.
- **275 vídeos reais em português** (Shorts em tela cheia e aulas), um a cada ~3 cards; segurar acelera para 2×.
- Temas **Aurora, Espaço, Oceano e Claro** com fundo animado calmo; desbloqueio por nível.
- **XP, níveis, títulos**, perfil com domínio por conta, Mix dos curtidos.
- Quiz relâmpago, provas personalizadas com várias matérias, compartilhar card como imagem.
- Explorar com buscas recentes e filtros; continuar de onde parou; resumo da semana; atalhos no ícone.
### Corrigido
- Questões apareciam respondidas sozinhas ao rolar (estado vazando entre cards reciclados).

## [0.4.0] — 2026-11-10
### Adicionado
- Currículo do ensino médio (10 matérias × 3 séries × 4 bimestres).
- Modos ENEM, vestibular, anual, bimestral, mensal e atividade.
- Página Macetes de prova e escolha de série.

## [0.3.0] — 2026-11-10
### Adicionado
- Revisão espaçada, anotações, cadernos e importar matéria.
- Estatísticas, conquistas e desafio semanal.
- Modo foco, calendário de provas, lembrete diário, leitura em voz alta e texto confortável.
- Modo offline, backup e widget de sequência.

## [0.2.0] — 2026-11-10
### Adicionado
- Onboarding, meta diária com sequência, modo prova e avisos.
- APK publicado automaticamente pelo GitHub Actions.

## [0.1.0] — 2026-11-09
### Adicionado
- Primeiro protótipo: feed vertical de estudos, curtir/salvar/seguir, busca, biblioteca, ajustes e temas AMOLED e Padrão.
