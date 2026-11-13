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
- **As alternativas têm o mesmo tamanho e estilo.** A certa não pode se destacar por ser a mais longa (nem a mais curta), e as erradas são plausíveis: erros típicos de aluno, com termos do assunto. O teste `quizBias.test.ts` falha se a certa for a mais longa em mais de 35% das questões.
- A ordem das alternativas é embaralhada pelo app, então escreva sem se preocupar com a posição da certa.
- Confira contas e números duas vezes. Prefira situações do cotidiano e do ENEM.
- O id do assunto vem do nome; renomear muda o id e desfaz as marcações salvas dos alunos.

## Marque todas e dissertativas (`extend`)
Em `src/data/curriculum/pack-multi.ts` e `pack-open.ts`, anexadas a um assunto que já existe (pelo nome):

```ts
extend(BIOLOGIA, "Mitose e meiose", [
  m("Sobre a meiose, marque as corretas:", ["Produz 4 células", "Células-filhas haploides", "…", "…"], [0, 1], "Explicação."),
  o("Por que a meiose é importante?", "Resposta-modelo completa.", [
    ["Forma gametas haploides", "haploide", "metade", "gameta"],   // [rótulo, ...palavras que mostram o ponto]
    ["Aumenta a variabilidade", "variabilidade", "crossing"],
  ]),
]);
```
- **`m`:** de 4 a 5 opções e de 2 a 4 certas. Varie quantas são certas e mantenha os tamanhos parecidos.
- **`o`:** de 2 a 4 pontos-chave.
  - Os termos são comparados sem acento e sem maiúscula, e o começo da palavra basta ("evapor" acha "evaporação").
  - Evite termos curtos e genéricos, como "ar" ou "para".
  - O teste exige que a resposta-modelo marque todos os próprios pontos.

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
