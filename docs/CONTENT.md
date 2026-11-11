# Como adicionar conteúdo

## Um assunto novo com cards (`pack`)
Em `src/data/curriculum/pack-<área>.ts`:

```ts
pack(BIOLOGIA, "genetica", 3, 1, "Heredogramas", [
  q("Pergunta?", ["A", "B", "C", "D"], 1, "Explicação curta de por que B está certa."),
  f("Frente do flashcard", "Verso", "dica opcional"),
  c(["Cena 1", "Cena 2", "Cena 3"], "A ideia que fica."),
]);
```
- `pack(matéria, conta, série, bimestre, nome, cards)`. A conta precisa existir em `src/data/pages.ts`.
- **Toda questão tem 4 opções**, uma certa, e uma explicação que ensina, não só "a resposta é B".
- Confira contas e números duas vezes. Prefira situações do cotidiano e do ENEM.
- O id do assunto vem do nome; renomear muda o id e desfaz as marcações salvas dos alunos.

## Uma conta nova
Adicione em `SUBS` de `src/data/pages.ts`, com nome, @, descrição, ícone (Material Design Icons) e duas cores. Depois, rode `npm test`: o teste de contas exige pelo menos um card e 5 vídeos por conta.

## Um gerador de questões
Em `src/feed/sources/generators-accounts.ts`, crie funções `(rng) => q(rng, base, correta, erradas)`:
- calcule a resposta a partir dos números sorteados, nunca à mão;
- o `id` deve depender dos números (`gen-<conta>-<tipo>-<valores>`), para não repetir;
- registre em `ACCOUNT_GENERATORS` e, se gerar quizzes, em `QUIZ_GENERATORS` (`src/feed/exam.ts`).

Os testes verificam que toda questão gerada tem 4 opções distintas e textos sem `NaN`/`undefined`.

## Macetes
Os cards da página "Macetes de prova" ficam em `src/data/macetes.ts` (`pageId: "macetes"`). Quando vierem de um vídeo, resuma com suas palavras e corrija o que estiver impreciso.

## Vídeos
```bash
YTDLP=/caminho/yt-dlp npm run curate-videos -- --only genetica,funcoes
YTDLP=/caminho/yt-dlp npm run curate-videos -- --more   # mantém a lista e só completa as contas abaixo da cota
npm run curate-videos -- --refilter      # reaplica os filtros sem buscar
```
O script:
- busca Shorts e aulas curtas por conta (até 8 Shorts e 3 aulas);
- confirma pelo oEmbed que o vídeo pode ser incorporado e se é vertical;
- filtra conteúdo infantil, outros idiomas e propaganda.

Revise os títulos em `src/feed/sources/videos.json` e coloque no `BLOCK` do script o que fugir do tema. Atrás de proxy, use `NODE_USE_ENV_PROXY=1`.
