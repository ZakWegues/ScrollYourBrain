# Segurança

## Versões com suporte
Só a versão mais recente (o APK em [releases/latest](https://github.com/ZakWegues/ScrollYourBrain/releases/latest)) recebe correções.

## Como relatar uma vulnerabilidade
**Não abra uma issue pública.** Use o recurso **"Report a vulnerability"** na aba *Security* do repositório (GitHub Private Vulnerability Reporting). Inclua:
- o que é possível fazer e o impacto;
- o passo a passo para reproduzir;
- a versão do app e o aparelho.

Você recebe uma resposta assim que possível. Pedimos que não divulgue a falha antes de ela ser corrigida.

## Escopo
O app não tem servidor nem contas: os dados ficam no aparelho. Os pontos mais sensíveis são:
- a importação de backups e arquivos (`src/lib/backup.ts`, `src/lib/importer.ts`);
- os links externos abertos pelo app;
- o player do YouTube incorporado.
