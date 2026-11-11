# Changelog

Todas as mudanças relevantes do ScrollYourBrain. O formato segue o [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

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
