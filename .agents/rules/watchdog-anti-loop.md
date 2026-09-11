# Watchdog Operacional & Prevenção de Loops Infinitos

Esta regra define o protocolo de segurança operacional para evitar loops infinitos, repetição desnecessária de ações e bloqueios de processos.

## Protocolo de Watchdog
1. **Verificação de Progresso Obrigatória**:
   - Antes de invocar qualquer ferramenta, analise criticamente se a etapa atual está trazendo progresso real em direção à resolução do pedido do usuário.
   - Não repita ferramentas com os mesmos parâmetros caso já tenham retornado erro ou resultado ineficaz.

2. **Circuit Breaker (Trava de Emergência - Máximo 2 Falhas)**:
   - Se um comando, compilação ou edição de arquivo falhar 2 vezes pelo mesmo motivo, **ABORTAR O CICLO AUTOMÁTICO**.
   - Parar, diagnosticar a causa raiz e perguntar ao usuário ou apresentar o diagnóstico antes de continuar.

3. **Proibição de Polling Repetitivo**:
   - Nunca execute loops consultando `manage_task(Action='status')` para esperar processos em background.
   - O Antigravity é reativo e acorda automaticamente quando tarefas finalizam. Lance a tarefa e aguarde a notificação do sistema.

4. **Comandos de Terminal Não-Bloqueantes no Windows**:
   - Sempre executar comandos via `cmd.exe /c` para contornar restrições de script do PowerShell.
   - Garantir flags não-interativas (`--yes`, `-y`).
   - Evitar `browser_subagent` no Windows para evitar o erro de download do CDN do driver Playwright.
   - Monitorar tarefas e finalizar (`kill`) imediatamente se solicitarem senha ou input manual.

5. **Simetria e Coerência de Layout**:
   - Manter consistência simétrica em grids, blocos e botões.
   - Proteger a experiência do usuário com validação de build (`npm run build`) antes de concluir a entrega.
