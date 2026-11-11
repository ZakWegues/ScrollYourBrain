# Arquitetura

## Visão geral
App Expo (SDK 57) com React Native 0.86, nova arquitetura e TypeScript estrito. O roteamento é por arquivos (`expo-router`). Todo o estado é local, com zustand + AsyncStorage; não há backend.

```
app/                      telas
  (tabs)/                 Feed, Explorar, Biblioteca, Ajustes (+ barra jelly-tabs)
  page/[id].tsx           página de matéria/conta
  mode.tsx, modes.tsx     modos de prova (inclui personalizados)
  exam.tsx, blitz.tsx     simulado com tempo, quiz relâmpago
  lesson.tsx              aula guiada
  review.tsx, mistakes.tsx  revisão espaçada, caderno de erros
  final.tsx, planner.tsx  reta final, calendário de provas
  my-topics.tsx           assuntos da minha escola
  profile.tsx, stats.tsx, achievements.tsx
src/
  components/             Feed, FeedItem, cards/*, Sheet(s), AmbientBackdrop, UI
  feed/                   motor, useFeed, fontes, simulados, atalhos de prática
  data/                   páginas/contas, currículo, macetes
  lib/                    lógica pura (testada)
  store/                  stores persistidos
  theme/                  temas e tokens
  widget/                 widget Android
```

## Feed
- **`src/feed/useFeed.ts`** monta o *pool* de cada fonte (Para você, Seguindo, Mix, página, lista):
  - conteúdo do aluno, filtrado pelos assuntos marcados ou pela série;
  - vídeos e itens importados;
  - Wikipédia, quando online.
  - Também injeta um card de revisão por lote e restaura a posição salva ("continuar de onde parou").
- **`src/feed/engine.ts`** escolhe os próximos cards:
  1. sorteia a **matéria** e depois a **conta**, ponderando por seguir, interesses, curtidas e pulos;
  2. evita repetir cards recentes e o mesmo formato três vezes;
  3. garante um vídeo a cada N cards;
  4. usa um **gerador** quando a conta fica sem cards novos.
- **`src/components/Feed.tsx`** cuida da lista e do cartão ativo:
  - FlashList paginado; cada card tem `key` própria, para estado de quiz/flashcard nunca vazar entre cards reciclados;
  - mede a altura com tolerância e reconstrói a lista quando ela muda de verdade (ex.: voltar do segundo plano);
  - esconde a barra de abas durante o gesto;
  - conta "estudado" após 3 s no card.
- **`src/components/AmbientBackdrop.tsx`** é um fundo único atrás do feed (orbes, aurora, estrelas ou ondas). A cor acompanha a conta do card.

## Conteúdo
- **`src/data/pages.ts`:** 14 matérias/páginas e 42 contas com `parent`. Use `rootOf`, `familyOf` e `withFamilies`.
- **`src/data/curriculum/`:**
  - `build.ts` e `pack.ts` são DSLs para escrever assuntos e cards;
  - cada assunto tem `subject`, `serie`, `bimestre` e `page` (conta);
  - os ids dos assuntos novos vêm do nome, então são estáveis.
- **`src/feed/sources/generators*.ts`:** questões procedurais por conta. `gen-utils.ts` garante 4 opções distintas.
- **`src/feed/sources/videos.json`:** vídeos curados (ver `scripts/curate-videos.mjs`).

## Player de vídeo
- **`src/lib/ytEmbed.ts`** monta a página do player (IFrame API do YouTube) e define a origem do app, `https://com.zakwegues.scrollyourbrain`.
- **`src/components/video/YouTubeEmbed.tsx`** carrega essa página num WebView com `baseUrl` igual à origem. O YouTube exige que o embed identifique o app pelo Referer; sem isso o vídeo falha com erro de configuração (152/153).
  - Comandos (tocar, pausar, som, 2×) entram por `injectJavaScript`; estado e erros voltam por `postMessage`.
  - Na web, o mesmo HTML roda num `iframe` com `srcdoc` (`YouTubeEmbed.web.tsx`).
- Se o embed for recusado, o card oferece **"Assistir aqui"**, que abre `app/watch.tsx`: a página móvel do próprio YouTube num WebView. Só o erro 100 (vídeo removido ou privado) pula o card.

## Estado (`src/store/`)
| Store | Chave | Conteúdo |
|---|---|---|
| settings | `syb-settings` | tema/tema automático, série e assuntos, meta, vídeos, acessibilidade |
| library | `syb-library` | curtidos, salvos, seguidos, sinais do feed, itens importados |
| progress | `syb-progress` | dias, sequência, log de atividade por conta, conquistas |
| review | `syb-review` | cartões de revisão espaçada (SM-2) |
| mistakes | `syb-mistakes` | caderno de erros |
| xp | `syb-xp` | XP, contadores, recorde do quiz relâmpago |
| modes | `syb-modes` | modos recentes, salvos, assuntos dominados |
| planner | `syb-planner` | provas e tarefas da reta final |
| notebooks, daily, search, resume | … | cadernos/notas, pergunta do dia, buscas, posição do feed |

O backup (`src/store/backup.ts`) exporta e importa todas essas chaves. Ao mudar um formato, suba a `version` do `persist` e escreva o `migrate`.

## Temas
`src/theme/index.ts` define `THEMES` (cores + estilo de fundo).
- `useThemeMode` resolve o tema efetivo, levando em conta o tema automático e o relógio.
- Dentro do feed, o contexto `ForceDark` mantém tudo escuro mesmo no tema Claro.

## Android
- Barra de abas: `react-native-jelly-tabs` dentro de um contêiner absoluto **com altura real**. No Android, toques fora dos limites do pai são descartados.
- Teclado: `react-native-keyboard-controller` (`KeyboardProvider`, folhas e telas que sobem com o teclado).
- Atalhos no ícone e ícones alternativos: `expo-quick-actions`.
- Widget: `react-native-android-widget`.
- Permissões bloqueadas: sobreposição de tela e armazenamento.

## Testes
- `__tests__/` cobre:
  - motor do feed, currículo, contas e vídeos;
  - geradores (opções distintas e respostas conhecidas);
  - modos, XP, SRS, estatísticas, backup;
  - pontos fracos, pergunta do dia, reta final e tema automático.
- O CI roda typecheck, lint e testes antes de gerar o APK.
