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
