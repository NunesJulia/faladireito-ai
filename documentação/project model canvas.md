## Project Model Canvas:

**1. Objetivos e Justificativas**:

  - Objetivo: Desenvolver uma plataforma web apoiada por Inteligência Artificial (LLMs) que atue como um "intérprete jurídico", traduzindo documentos complexos para cidadãos leigos e automatizando a síntese e estruturação de peças para profissionais do Direito.

  - Justificativa: O Brasil possui uma barreira linguística no acesso à justiça ("juridiquês"), onde 70% da população não compreende seus direitos básicos, gerando exclusão social. Simultaneamente, profissionais jurídicos sofrem com baixa produtividade ao realizar tarefas repetitivas de leitura e formatação manual, restando pouco tempo para a estratégia processual.

**2. Requisitos Principais**:

  - Interface Conversacional (Chat): Design minimalista e acessível (semelhante a apps de mensagem) para reduzir a fricção de uso.

  - Processamento de Linguagem Natural (PLN): Capacidade de interpretar textos jurídicos (input) e gerar explicações simples ou resumos técnicos (output) usando APIs da OpenAI (GPT-4o-mini e GPT-5).

  - Segurança e LGPD: Sistema de sanitização automática para remover dados sensíveis (PII) antes do envio para a IA.

  - Perfis Distintos: Funcionalidades adaptativas para os modos "Cidadão" (foco em didática/storytelling) e "Jurista" (foco em técnica/síntese).

**3. Stakeholders**:

  - Cidadãos Leigos: Pessoas com dúvidas sobre direitos, contratos ou notificações judiciais (Ex: Personas Dona Maria e Carlos).

  - Profissionais do Direito: Advogados, estagiários e defensores públicos que buscam eficiência (Ex: Personas Dra. Beatriz e Lucas).

  - Equipe de Projeto: Desenvolvedores (Front/Back) e Analista de Produto responsáveis pela criação e manutenção.

  - Instituições de Ensino/ONGs: Parceiros potenciais para validação social da ferramenta.

**4. Entregas**:

  - MVP Funcional (Web): Aplicação hospedada na Vercel permitindo login social, envio de textos e recebimento de respostas processadas por IA.

  - Módulo de Inteligência: Orquestrador (N8N) configurado com prompts otimizados para tradução jurídica e storyytelling.

  - Documentação Técnica: Diagramas C4, especificações de API, plano de testes e manuais de uso.

  - Relatório de Validação: Resultados dos testes com usuários reais e métricas de desempenho da IA (precisão vs. alucinação).

**5. Marcos e Cronograma**:
    
  - Semana 1-2: Descoberta, estudo de negócios e escolha da stack tecnológica.
  - Semana 3-5: Entrevistas com stakeholders, construção do protótipo de baixa fidelidade e definição de arquitetura (C4).
  - Semana 6-8: Escolha do core (Integração N8N + OpenAI), primeiras configurações do banco de dados e desenvolvimento do front-end (React/Next.js).
  - Semana 9: Integração com Backend, desenvolvimento do core escolhido e testes E2E.
  - Semana 10: Refinamento de prompts e correções de bugs (Postmortem),entrega da versão final e documentação.

**6. Riscos e Suposições**:

- Riscos:
  - Alucinação da IA: O modelo pode inventar leis inexistentes (mitigado por System Prompts restritivos).
  - Custos de API: O uso excessivo de tokens pode inviabilizar o projeto financeiramente (mitigado por limite de 1500 caracteres).
  - Vazamento de Dados: Risco de envio de dados pessoais para a nuvem (mitigado por sanitização prévia).

- Suposições:
  - Os usuários confiam em uma IA para tirar dúvidas jurídicas iniciais.
  - A API da OpenAI manterá estabilidade e tempo de resposta aceitável (< 15s).

**7. Orçamento**:
  - Desenvolvimento: Custo zero em licenciamento de software (uso de Free Tiers da Vercel, MongoDB Atlas e GitHub).
  - Operacional (OPEX): Custo variável com créditos da OpenAI API (estimado em baixo volume para o MVP acadêmico).
  - Recursos Humanos: Horas dedicadas pelos estudantes/desenvolvedores do time.

**8. Premissas**:
  - Acesso contínuo à internet é obrigatório para o funcionamento (não há modo offline).
  - Disponibilidade das APIs de terceiros (Google Auth e OpenAI).
  - O usuário deve saber ler e escrever minimamente para interagir com o chat.

**9. Restrições**:
  - Prazo: O projeto deve ser concluído rigorosamente dentro do semestre letivo.
  - Tecnológica: Uso obrigatório de tecnologias Web Modernas (React/Next.js).
  - Financeira: O sistema deve operar com custos mínimos, impedindo a contratação de servidores dedicados ou modelos de IA mais caros para todas as requisições.
  - Legal: Conformidade estrita com a LGPD, dada a natureza sensível dos dados jurídicos.
