# Missão para Qwen 2.5 Coder 7B — Aba SSH Tunnel

Objetivo: aprimorar o tutorial HTML do Hermes Dashboard criando uma nova aba/seção dedicada a "SSH Tunnel / Hostinger Docker", contendo passo a passo numerado, comandos copiáveis, notas de segurança, tabela de manutenção e checklist final.

Conteúdo obrigatório fornecido pelo Thiago:
- docker-compose.yaml no hPanel com ports: "4860" e "9119:9119" sem 127.0.0.1 no host.
- Dashboard dentro do container com: hermes dashboard --host 0.0.0.0 --port 9119 --insecure --no-open
- Acesso via SSH na VPS, docker exec no container, pkill de dashboards antigos, nohup para iniciar, testes curl dentro do container e na VPS.
- Túnel SSH no Mac: ssh -f -N -o ServerAliveInterval=60 -L 9119:127.0.0.1:9119 root@76.13.224.9
- Validação com lsof -i :9119, curl /api/status e navegador.
- Comandos úteis de manutenção.
- Checklist final e notas de persistência/segurança.

Observação operacional: neste ambiente de execução atual o binário `ollama` não está disponível, então esta missão foi registrada para rastreabilidade e a implementação foi consolidada diretamente pelo Hermes Boy.
