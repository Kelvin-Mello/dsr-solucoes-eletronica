<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Diretrizes Gerais do Agente & Watchdog Anti-Loop (Obrigatório)

Este projeto possui regras estritas de execução e controle operacional para prevenir loops infinitos, travamentos e perda de contexto:

## 1. Watchdog de Progresso e Prevenção de Loops Infinitos (Circuit Breaker)
- **Verificação de Progresso Real**: Antes de cada chamada de ferramenta, valide se a ação representa avanço tangível no objetivo solicitado pelo usuário.
- **Limite de Tentativas (Regra das 2 Falhas)**: Se uma ferramenta, comando ou tentativa de correção falhar 2 vezes seguidas pelo mesmo motivo, **PARE IMEDIATAMENTE**. Não repita a mesma abordagem em ciclo. Reporte o diagnóstico com transparência ao usuário e aguarde orientação.
- **Proibição de Polling Repetitivo**: Nunca faça chamadas repetitivas de `status` ou checagens em loop em processos de background. O Antigravity acorda reativamente quando o processo finaliza. Caso lance um comando em background, encerre o turno e aguarde a notificação do sistema.
- **Timeout Máximo para Comandos**: Nenhuma tarefa em background deve rodar indefinidamente sem monitoramento. Se uma tarefa parecer bloqueada por mais de 60 segundos ou solicitar input interativo, finalize-a imediatamente (`kill`).

## 2. Comandos de Terminal Seguros (Ambiente Windows)
- **Não-Interatividade Obrigatória**: Sempre execute comandos com flags automáticas (`--yes`, `-y`, `--no-interaction`), impedindo que processos fiquem aguardando resposta manual do usuário no terminal.
- **Execução no Windows**: No PowerShell local do Windows, scripts `.ps1` sofrem restrição de política de segurança (`PSSecurityException`). Sempre invoque comandos Node/NPM via `cmd.exe /c "npx.cmd ..."` ou `cmd.exe /c "npm.cmd ..."`.
- **Prevenção contra Bloqueio do Playwright**: Não utilize `browser_subagent` neste ambiente Windows (o CDN do Playwright falha ao baixar o driver 1.57.0 e causa travamento). Faça a validação técnica via compilação estática (`npm run build`) e leitura de código/rotas.

## 3. Simetria e Qualidade Visual
- Toda interface criada ou modificada deve zelar por **simetria visual**, alinhamento proporcional de colunas e botões, tipografia sóbria e estética industrial refinada (estilo Steam / Dark Tech), respeitando a identidade da DSR Soluções.
