# Builds e publicação

## Como o APK é gerado hoje
O workflow `.github/workflows/android-apk.yml` roda a cada push e em PRs:
1. **checks:** `npm ci`, typecheck, lint e testes;
2. **apk:** `expo prebuild` e `./gradlew assembleRelease` (arm64);
3. em pushes no `main` (ou no branch padrão do repositório), publica um release `build-N` marcado como *latest*, com as notas do `CHANGELOG.md`. O link fixo sempre baixa o mais novo:
   `https://github.com/ZakWegues/ScrollYourBrain/releases/latest/download/ScrollYourBrain.apk`

O `versionCode` é o número do run (`app.config.ts`), então cada APK instala por cima do anterior.

## Assinatura
Sem configuração extra, o build usa a chave de **depuração** padrão do Android. Isso serve para instalar e testar, mas a Play Store não aceita.

### Usar uma chave de lançamento
1. Gere a chave **uma vez** e guarde-a em lugar seguro. Se ela for perdida, não dá mais para atualizar o app na loja.
   ```bash
   keytool -genkeypair -v -storetype PKCS12 -keystore scrollyourbrain.keystore \
     -alias scrollyourbrain -keyalg RSA -keysize 2048 -validity 10000
   ```
2. No GitHub, em *Settings → Secrets and variables → Actions*, crie:

   | Secret | Valor |
   |---|---|
   | `ANDROID_KEYSTORE_BASE64` | `base64 -w0 scrollyourbrain.keystore` |
   | `ANDROID_KEYSTORE_PASSWORD` | senha do keystore |
   | `ANDROID_KEY_ALIAS` | `scrollyourbrain` |
   | `ANDROID_KEY_PASSWORD` | senha da chave |
3. No próximo push, o workflow assina o APK com essa chave e também gera o **AAB** (formato da Play Store) como artefato do run.

> Importante: um APK assinado com a chave nova **não instala por cima** de um assinado com a chave de depuração. Desinstale a versão antiga uma vez, depois de fazer backup em *Ajustes → Backup*.

## Checklist para a Play Store (quando quiser publicar)
- [ ] Chave de lançamento configurada (acima) e **Play App Signing** ativado no Play Console.
- [ ] Subir a `version` em `app.json` e registrar as mudanças no `CHANGELOG.md`.
- [ ] Enviar o `.aab` do run de build para um teste interno.
- [ ] Ficha da loja: textos e categoria em [STORE_LISTING.md](STORE_LISTING.md), ícone 512×512 (`assets/icon.png`), imagem de destaque 1024×500 e prints (`docs/screenshots/`).
- [ ] **Segurança dos dados:** o app não coleta nem compartilha dados. Link da política: `PRIVACY.md` publicado (por exemplo via GitHub Pages).
- [ ] **Classificação de conteúdo:** questionário IARC (educacional, sem conteúdo sensível).
- [ ] Público-alvo: 13+ (ensino médio).
- [ ] Testar num celular real: navegação, teclado, vídeos, voltar do segundo plano, offline, tema claro e escuro.
