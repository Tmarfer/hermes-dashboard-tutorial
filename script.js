const tabs={
  status:{title:'Status',body:'Mostra versão do Hermes, HERMES_HOME, config_path, env_path, estado do gateway, plataformas e sessões ativas. É a primeira tela para validar se tudo está saudável.'},
  config:{title:'Config',body:'Editor visual do config.yaml. Use para alterar provider/modelo, terminal, display, memória, approvals, delegation e outras opções. Algumas mudanças pedem restart ou nova sessão.'},
  env:{title:'API Keys / Env',body:'Gerencia variáveis do .env com valores redigidos na UI. Use com cuidado: aqui ficam tokens de OpenRouter, GitHub, Telegram, Tavily, Notion e outros serviços.'},
  sessions:{title:'Sessões',body:'Lista sessões recentes do Hermes, inclusive Telegram, CLI e cron. Permite consultar histórico, mensagens e tool calls para auditoria.'},
  logs:{title:'Logs',body:'Exibe logs de agent, gateway e errors. Use filtros por nível e componente para encontrar falhas de API, gateway ou cron.'},
  cron:{title:'Cron Jobs',body:'Crie, pause, retome ou dispare jobs agendados. Útil para auditoria noturna, relatórios recorrentes e automações do Squad Hermes.'},
  skills:{title:'Skills / Toolsets',body:'Mostra skills e toolsets disponíveis. Use para entender capacidades do agente e verificar dependências faltantes.'},
  ssh:{title:'SSH Tunnel / Hostinger Docker',body:'Roteiro completo para acessar o dashboard rodando em container Docker na Hostinger via túnel SSH seguro. Inclui YAML do Docker, comando com --host 0.0.0.0 --insecure, testes curl, lsof no Mac, manutenção e checklist final.',link:'#ssh-tunnel'}
};
const panel=document.getElementById('tabPanel');
function renderTab(key){
  const item=tabs[key];
  panel.innerHTML=`<h3>${item.title}</h3><p>${item.body}</p>${item.link?`<p><a class="primary-button mini" href="${item.link}">Abrir passo a passo completo</a></p>`:''}<p class="hint">Dica: depois de mudar configurações críticas, valide com <code>/status</code>, <code>hermes status --all</code> ou reinicie o processo afetado.</p>`;
  document.querySelectorAll('.tab').forEach(b=>b.classList.toggle('active',b.dataset.tab===key));
}
document.querySelectorAll('.tab').forEach(btn=>btn.addEventListener('click',()=>renderTab(btn.dataset.tab)));
renderTab('status');
document.querySelectorAll('.copy-button').forEach(btn=>btn.addEventListener('click',async()=>{
  const el=document.getElementById(btn.dataset.copy);
  try{await navigator.clipboard.writeText(el.innerText);}catch(e){const r=document.createRange();r.selectNodeContents(el);const s=window.getSelection();s.removeAllRanges();s.addRange(r);document.execCommand('copy');s.removeAllRanges();}
  const old=btn.innerText;btn.innerText='Copiado!';setTimeout(()=>btn.innerText=old,1300);
}));
document.getElementById('themeToggle').addEventListener('click',()=>document.body.classList.toggle('light'));
