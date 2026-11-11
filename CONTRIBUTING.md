# Como contribuir

Obrigado por querer ajudar o ScrollYourBrain! Correções de conteúdo, novas questões, ideias e código são todos bem-vindos.

## Antes de começar
- Para **erros de conteúdo** (resposta errada, explicação confusa), abra uma issue usando o modelo "Erro de conteúdo" ou mande um PR direto no arquivo do card.
- Para **bugs**, use o modelo "Bug" e diga o aparelho, a versão do Android e o passo a passo.
- Para **ideias grandes**, abra uma issue antes, para conversarmos sobre o caminho.

## Ambiente
```bash
npm ci
npm start          # use um development build (npm run android)
```
Requisitos: Node 22, JDK 17 e Android SDK.

## Antes de abrir o PR
```bash
npm run typecheck
npm run lint
npm test
```
Os três precisam passar; o CI roda os mesmos comandos e só gera o APK se tudo estiver verde.

## Padrões do projeto
- **TypeScript estrito** e componentes funcionais.
- **Lógica pura em `src/lib/`**, com testes em `__tests__/`; telas só montam a interface.
- **Estado** em `src/store/` (zustand + persistência). Ao mudar o formato salvo, suba a `version` e escreva o `migrate`.
- **Animações** com Reanimated 4: springs sempre com `mass: 1` explícito.
- **Interface em português do Brasil**, frases curtas e diretas. Comentários de código em inglês.
- **Conteúdo:** cada questão precisa de explicação. Confira os números duas vezes. Veja [docs/CONTENT.md](docs/CONTENT.md).
- **Acessibilidade:** alvos de toque de pelo menos 44 px, `accessibilityLabel` em botões só com ícone e textos que não dependem só de cor.

## Commits e PRs
- Um assunto por PR, com descrição do que mudou e por quê.
- Mensagens de commit curtas no imperativo ("Corrige…", "Adiciona…").
- Para mudanças visuais, anexe prints ou um vídeo curto.

Ao contribuir, você concorda em licenciar sua contribuição sob a [licença MIT](LICENSE) do projeto e em seguir o [código de conduta](CODE_OF_CONDUCT.md).
