<div align="center">
  <img src="assets/icon.png" width="112" alt="ScrollYourBrain" />
  <h1>ScrollYourBrain</h1>
  <p><b>Estude no ritmo do scroll.</b> Um feed vertical, no estilo Reels/TikTok/Shorts, feito só de conteúdo educacional.</p>
  <p>Android · iOS · Web · Código aberto (MIT)</p>
</div>

## O que tem

- **Feed infinito** com scroll vertical em tela cheia e snap card a card.
- **Cinco formatos de card**
  - **Conceito:** um "vídeo" gerado por código, com cenas animadas, barra de progresso estilo Stories e resumo no final.
  - **Quiz:** quatro alternativas, feedback na hora e explicação.
  - **Flashcard:** toque para virar.
  - **Vídeo:** player do YouTube embutido, com autoplay só no card visível.
  - **Wikipédia:** um verbete aleatório em português a cada passada.
- **O feed nunca fica vazio:** conteúdo embutido, geradores procedurais (matemática, capitais, química, inglês, binário) e fontes online. Funciona offline.
- **O feed aprende com você:** "Curtir / Quero mais" e seguir uma página aumentam a frequência daquele tema. Pular rápido diminui.
- **Interações:** dois toques para curtir (com animação), salvar, seguir páginas e compartilhar.
- **Onboarding:** na primeira abertura você escolhe os temas (mínimo 3) e uma meta diária. O feed já começa personalizado.
- **Sequência e meta diária:** cada card estudado conta para a meta (ficar 3 s, responder, virar ou ver o resumo). A pílula 🔥 no topo do feed mostra a sequência e o anel de progresso; quando a meta é batida, aparece uma comemoração.
- **Modo prova:** quizzes cronometrados (20 s por questão, ou sem tempo) por tema ou misturados, com nota, tempo, recorde e revisão dos erros.
- **Explorar:** busca sem diferenciar acentos, assuntos em alta, páginas por tema e atalho para o Modo prova.
- **Biblioteca:** sequência com gráfico dos últimos 7 dias, salvos, curtidos, estatísticas de quiz e opção de **colar qualquer link do YouTube** para incluir no feed.
- **Ajustes:** tema **Preto AMOLED** ou **Padrão**, meta diária, autoplay, começar sem som, economia de dados, vibração, reduzir movimento e interesses.
- **Barra de navegação jelly:** usa [react-native-jelly-tabs](https://github.com/felipe-software/react-native-jelly-tabs) (MIT), a mesma barra flutuante usada pelo [Nuvio](https://nuvio.tv). No Android é renderizada nativamente.

## Instalar no celular (Android)

1. No celular, abra este link: **https://github.com/ZakWegues/ScrollYourBrain/releases/latest/download/ScrollYourBrain.apk**
2. O download do `ScrollYourBrain.apk` começa sozinho. Toque em **Abrir** quando terminar.
3. Se o Android pedir, permita **instalar apps desta fonte** (o navegador) e toque em **Instalar**.
4. Para atualizar depois, é só abrir o mesmo link: a versão nova instala por cima e mantém seus dados.

O APK é para aparelhos arm64, o padrão dos celulares atuais. Cada build também fica em **Releases** no GitHub.

## Rodar localmente

Requisitos: Node 22. Para Android, também Android Studio e JDK 17.

```bash
npm install
npm run web        # navegador
npm run android    # build de desenvolvimento no Android (emulador ou aparelho)
npm run ios        # macOS + Xcode
```

> A barra jelly tem código nativo no Android, por isso o app usa um *development build* (`expo run:android`) e não o Expo Go.

## Scripts

| Comando | O que faz |
| --- | --- |
| `npm run typecheck` | Checagem de tipos (TypeScript) |
| `npm run lint` | ESLint |
| `npm test` | Testes do motor do feed, geradores, sequência e provas |
| `npm run assets` | Regera ícone, splash e favicon a partir do SVG em `scripts/gen-assets.mjs` |

## Estrutura

```
app/                 rotas (expo-router): abas, página de tema e visualizador
src/feed/            motor de recomendação, fontes de conteúdo e hook do feed
src/components/      cards, item do feed, barra de ações e UI base
src/store/           estado persistido (zustand + AsyncStorage)
src/theme/           tokens de cor e tipografia (AMOLED e Padrão)
```

## Contribuindo

Para adicionar conteúdo, edite `src/feed/sources/seed.ts` (cards escritos à mão), `src/feed/sources/youtube.ts` (vídeos curados) ou crie um gerador em `src/feed/sources/generators.ts`. Rode `npm test` antes do PR.

## Licença

MIT. Veja [LICENSE](LICENSE).
