# Missão para qwen2.5-coder:7b — Redesign interativo Hermes Dashboard Tutorial

Você é qwen2.5-coder:7b rodando localmente no Ollama. Atue como frontend engineer e designer de interação. Você vai propor e implementar conceitualmente uma refatoração da aplicação estática do repositório `hermes-dashboard-tutorial`.

## Contexto
A aplicação atual é um site estático HTML/CSS/JS puro, em português, publicado no GitHub Pages, que ensina a usar o Hermes Dashboard:
- localhost `http://127.0.0.1:9119`
- Hostinger VPS + Docker
- SSH Tunnel
- comandos de manutenção
- checklist de QA

A paleta e fontes devem ser mantidas:
- Parchment `#f5f4ed`
- Ivory `#faf9f5`
- Near Black `#141413`
- Terracotta `#c96442`
- Coral `#d97757`
- Olive Gray `#5e5d59`
- títulos com Georgia/serif editorial
- corpo com Inter/system-ui
- código com JetBrains Mono/ui-monospace

## Objetivo do redesign
Transformar o site de uma página longa/corrida em uma aplicação de navegação agradável, estilo manual interativo:
1. Layout com menu lateral/side navigation fixo em desktop.
2. Ao clicar no menu, abrir o conteúdo daquele tópico, evitando texto todo corrido na mesma página.
3. Em mobile, menu lateral vira drawer ou navegação recolhível.
4. Inserir pop-ups/modais/caixas de detalhes onde informações avançadas só aparecem se o usuário clicar em “ver detalhes”.
5. Criar SVGs inline para demonstrar fluxos, sem imagens externas:
   - fluxo local: Browser → 127.0.0.1:9119 → Hermes Dashboard
   - fluxo remoto: Mac → SSH Tunnel :22 → VPS Hostinger → Docker proxy :9119 → Container Hermes
   - fluxo operacional: Planner → Generator → Evaluator/QA
6. Melhorar UX dos comandos:
   - blocos de comando com header, botão copiar, label de contexto
   - comandos longos com scroll horizontal sem quebrar layout
7. Manter site estático, sem build step e sem bibliotecas obrigatórias.

## Estrutura sugerida
- Header compacto no topo com branding e botão tema.
- `.app-shell` com:
  - `<aside class="sidebar">` para navegação:
    - Visão Geral
    - Acesso Local
    - SSH Tunnel
    - Áreas do Dashboard
    - Manutenção
    - Checklist QA
  - `<section class="content-panel">` onde apenas uma seção aparece por vez.
- Cada seção como `<article class="panel" data-panel="...">`.
- JS controla:
  - clique nos links da sidebar
  - classe `.active` no painel atual
  - abrir/fechar modais de detalhes
  - copiar comandos
  - toggle de tema
- SVGs inline dentro das seções relevantes.

## Popups/detalhes sugeridos
- “Por que usar --insecure?” — explicar que é aceitável só porque o acesso externo é via túnel SSH.
- “Por que remover 127.0.0.1 do ports no Docker?” — explicar Docker proxy e host:container.
- “O que fazer se der address already in use?” — pkill/restart.
- “Como validar se está pronto?” — checklist JSON/curl/lsof/browser.

## Requisitos de entrega
Responda com:
1. Plano de implementação em etapas.
2. Estrutura HTML proposta.
3. CSS-chave para sidebar, panels, modals e SVG flow cards.
4. JS-chave para navegação por painéis, modais e copiar comandos.
5. Critérios de aceite.

Seja concreto e prático. Não use frameworks. Não remova o conteúdo técnico existente; reorganize-o em painéis interativos.