## Gestão de Processo

A organização do trabalho foi estruturada para garantir agilidade e alinhamento constante entre os membros (Front, Back/DevOps e Produto), utilizando metodologias ágeis adaptadas ao tamanho da equipe.

- **Ferramentas de Controle**:

    - Trello (Modelo Kanban): Utilizamos um board clássico (To Do, Doing, Code Review, Done) para rastrear as tarefas. Isso permitiu visualizar gargalos (ex: muitas tarefas paradas em Review) e priorizar as User Stories mais críticas para o MVP.

    - WhatsApp (Comunicação Assíncrona Rápida): Grupo focado em dúvidas pontuais de código ("Qual a variável de ambiente pro banco?"), avisos de deploy e compartilhamento de links de referência. Respostas imediatas para não bloquear o desenvolvimento.

    - Google Meet (Rituais Síncronos): Com uma frequência quinzenal (a cada 2 semanas) para reuniões de checkpoint. Nestes encontros, fazíamos a revisão do que foi entregue na quinzena (Sprint Review improvisada), discutíamos bloqueios técnicos complexos (ex: integração com o N8N) e planejávamos as prioridades das próximas duas semanas. O Meet também foi utilizado para Pair Programming (compartilhamento de tela para debug conjunto).

### Postmortem (Lições Aprendidas - Fase MVP):

- **Contexto do Incidente/Fase**: Lançamento da versão Alpha e primeiros testes de integração.

- **O Que Deu Certo (Keep doing)**:

  - Arquitetura Serverless (Vercel): A decisão de não gerenciar servidores Linux manualmente (EC2/VPS) salvou dezenas de horas do time. O deploy automático via Git permitiu que correções de bugs fossem para o ar em minutos.

  - N8N como Backend Lógico: A curva de aprendizado para manipular os prompts da IA via código (Python/Node) seria alta. O uso do N8N visual permitiu testar 20 versões de prompts diferentes em uma tarde até acertar o tom da "Persona Cidadão".

  - Separação de Personas: Os usuários validaram que a experiência de "escolher perfil" (Jurista ou Cidadão) logo no início muda completamente a percepção de valor.

- **O Que Não Deu Certo (Stop/Improve)**:

  - Custo Variável de Tokens:
      - O Problema: No início, não limitamos o tamanho do input. Um teste com uma petição de 50 páginas travou a API e consumiu 15% do orçamento do projeto em uma única requisição.
      - Causa Raiz: Falta de validação de payload no Front-end e falta de max_tokens na chamada da API.
      - Ação Corretiva: Implementamos limite rígido de 1500 caracteres e 300 palavras na interface.

  - Extração de PDFs (Feature Descartada):
      - O Problema: Tentamos implementar leitura de PDFs digitalizados (imagens).
      - Obstáculo: A tecnologia de OCR (Tesseract/Google Vision) adicionaria complexidade e custos que não cabiam no MVP.
      - Decisão: Recurso cortado. O usuário deve copiar e colar o texto. Entrou para o backlog da Versão 2.0.

  - Bug Crítico Resolvido (Loop Infinito):
      - Descrição: Em um cenário de teste, a IA começou a completar a própria frase repetidamente quando o usuário mandava apenas "..."
      - Solução: Ajuste nos parâmetros de stop_sequences e temperature (reduzida de 0.7 para 0.3) no modelo, tornando-o mais determinístico e menos criativo.

- **Conclusão e Próximos Passos**:

O MVP provou a tese de que a linguagem jurídica é uma barreira real. Conseguimos entregar uma aplicação funcional com recursos e tempo limitados graças à escolha de uma stack moderna e gestão enxuta. O próximo ciclo focará em Monetização (Planos Pro com limites maiores) e Refinamento da IA (Fine-tuning com leis brasileiras específicas para reduzir alucinações).
