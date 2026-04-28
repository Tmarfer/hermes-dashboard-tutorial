# Hermes Dashboard Tutorial

Tutorial visual em HTML/CSS/JS para explicar, de forma clara e simples, como acessar e usar o Hermes Dashboard local em `http://127.0.0.1:9119`.

## Conteúdo

- Como iniciar o dashboard
- Como acessar localmente
- Como acessar via túnel SSH em VPS
- O que existe em cada aba do dashboard
- Checklist operacional
- Cuidados de segurança com `.env` e API keys
- FAQ

## Comando principal

```bash
hermes dashboard --host 127.0.0.1 --port 9119 --no-open
```

Depois abra:

```text
http://127.0.0.1:9119
```

## Acesso em VPS via túnel SSH

```bash
ssh -L 9119:127.0.0.1:9119 usuario@IP_DA_VPS
```

Depois abra no navegador local:

```text
http://127.0.0.1:9119
```

## Segurança

Não exponha o dashboard diretamente em `0.0.0.0` sem proteção. Ele gerencia configuração e variáveis de ambiente, incluindo API keys e tokens.

## Como abrir este tutorial

Basta abrir `index.html` no navegador, ou servir localmente:

```bash
python3 -m http.server 8080
```

## Origem

Conteúdo inicial solicitado ao `qwen2.5-coder:7b` via Ollama e consolidado pelo Hermes Boy para publicação no GitHub.


## SSH Tunnel / Hostinger Docker

O tutorial agora inclui uma aba/seção completa para acessar o Hermes Dashboard rodando em container Docker na Hostinger via túnel SSH, incluindo:

- Ajuste do `docker-compose.yaml` com `9119:9119`
- Inicialização do dashboard com `--host 0.0.0.0 --insecure --no-open` dentro do container
- Testes `curl` dentro do container e na VPS
- Túnel SSH no Mac com `ssh -f -N -L 9119:127.0.0.1:9119`
- Comandos de manutenção
- Checklist final de validação


## Redesign Anthropic-inspired

A página foi redesenhada como um “manual operacional premium”, inspirado em princípios do artigo da Anthropic sobre harness design para long-running application development:

- Planner / Generator / Evaluator como estrutura de operação
- Critérios de Design Quality, Originality, Craft e Functionality
- Visual editorial com fundo parchment, terracotta, cards ivory, seções dark e tipografia serif para títulos
- Melhor usabilidade em comandos copiáveis, navegação por âncoras, SSH Tunnel e QA checklist

Observação: a tentativa com `qwen2.5-coder:7b` foi registrada, mas o ambiente não tinha memória suficiente para executar o modelo 7B; foi usado fallback local `qwen2.5-coder:1.5b` para gerar a proposta, com consolidação final pelo Hermes Boy.


## Redesign interativo com sidebar

A aplicação foi refatorada para navegação por painéis: sidebar desktop, drawer mobile, modais de detalhes, SVGs inline de fluxo e blocos de comando com copiar. A proposta foi gerada com `qwen7b-ctx2k` (derivado de qwen2.5-coder:7b com `num_ctx 2048`) e consolidada pelo Hermes Boy.
