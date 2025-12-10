## Produto e Negócio

### Problema e Proposta de Valor:
Apesar de o Brasil possuir uma das maiores produções legislativas do mundo, a "democracia do acesso" falha na última milha: a compreensão.

Isso se manifesta em dois eixos principais:

  - **O Abismo da Linguagem**: Dados indicam que mais de 70% da população tem dificuldade em compreender textos jurídicos. Isso cria um Gap de Cidadania: pessoas deixam de buscar direitos (como benefícios trabalhistas ou defesa do consumidor) simplesmente porque não entendem a carta de citação ou o contrato que assinaram.
  - **Ineficiência Operacional**: Do outro lado, advogados e estagiários perdem horas preciosas em tarefas de "baixa complexidade intelectual", como resumir jurisprudências longas ou formatar citações, em vez de focar na estratégia processual.

Dentro da proposta de valor do Fala Direito, ele se comporta não é apenas um buscador, mas como um intérprete bidirecional.

  - **Para o Leigo (Valor: Empoderamento)**: Transformamos o "juridiquês" em linguagem natural e acionável, removendo o medo e a barreira de entrada ao sistema de justiça.
  - **Para o Profissional (Valor: Produtividade)**: Atuamos como um paralegal digital, automatizando a síntese e estruturação de dados, permitindo que o jurista atue com maior precisão e rapidez.

### Mapeamento de Personas
    
  - **Persona 1: Cidadão (Leigo)**:

      - **Perfil 1: Dona Maria, a Diarista Receosa**:
      Bio: 52 anos, ensino fundamental incompleto. Trabalha como diarista há 20 anos. Usa WhatsApp diariamente, mas tem medo de "sites de governo" e textos longos.
      
      Dores: Recebeu uma notificação do INSS e está em pânico achando que perdeu a aposentadoria. Tem vergonha de pedir ajuda e acha que advogado vai cobrar só para "ler o papel".
      
      Necessidades: Precisa tirar uma foto ou digitar o texto da carta e ouvir/ler: "Dona Maria, está tudo bem. Eles só querem que a senhora leve o documento X na agência".
      
      Frase: "Chegou essa carta difícil aqui, será que vou ser presa?"

      - **Perfil 2: Carlos, o Microempreendedor Digital**:
        
      Bio: 30 anos, dono de uma loja de dropshipping. Entende de tecnologia, mas é leigo em leis. Tenta resolver tudo sozinho para economizar (Do It Yourself).
      
      Dores: Precisa assinar contratos com fornecedores e teme cláusulas abusivas ocultas no texto. Não tem orçamento para assessoria jurídica mensal.
      
      Necessidades: Quer colar o contrato na plataforma e receber um "Raio-X" dos riscos: "Atenção: A cláusula 4 permite rescisão sem aviso prévio".
      
      Frase: "Não quero pagar 500 reais pra alguém ler um contrato de 2 páginas."

  - **Persona 2: Jurista (Profissional)**:

      - **Perfil 3: Dra. Beatriz, Advogada Júnior em Recife**:

      Bio: 25 anos, recém-aprovada na OAB. Trabalha em um escritório de massa (contencioso). Tem metas altas de produção de peças por dia.
      
      Dores: Passa 70% do tempo lendo e resumindo decisões repetitivas para alimentar o sistema do escritório. Sente que virou uma "digitadora de luxo".
      
      Necessidades: Ferramenta que leia o PDF da decisão e gere o relatório automático (Fatos/Direito/Dispositivo) para ela apenas revisar.
      
      Frase: "Se eu tiver que resumir mais uma sentença igual hoje, eu surto."

     - **Perfil 4: Lucas, Estudante Concursando**:

      Bio: 23 anos, focado em concursos para Defensoria. Estuda 8h por dia.
      
      Dores: Dificuldade em memorizar a letra fria da lei sem um contexto prático. Perde tempo procurando em qual livro está a explicação de um artigo específico.
      
      Necessidades: Storytelling. Ele quer digitar "Art. 171 do CP" e receber uma história fictícia que ajude a fixar o conceito de estelionato na memória.
      
      Frase: "Eu decoro, mas não entendo. Preciso de um exemplo real."

## Requisitos Detalhados

- **Requisitos Funcionais (RF)**:
    - RF01 - Processamento de Input Híbrido: O sistema deve aceitar entrada de texto via digitação direta ou colar (Copy & Paste), interpretando a intenção do usuário (dúvida, resumo ou tradução).
    - RF02 - Tradução Semântica Adaptativa: O algoritmo deve identificar o nível de complexidade do texto inserido. Se o output for para "Cidadão", deve utilizar analogias do cotidiano. Se "Jurista", deve manter terminologia técnica.
    - RF03 - Guardiões de Anonimização: Antes de enviar o prompt à LLM, um middleware deve varrer o texto em busca de padrões de CPF, RG, E-mail e Nomes Próprios, substituindo-os por tokens genéricos (ex: [PARTE_AUTORA]), garantindo conformidade com a LGPD.
    - RF04 - Gerador de Contexto Prático (Storytelling): Para inputs classificados como dúvidas teóricas, o sistema deve obrigatoriamente gerar um parágrafo final com o título "Exemplo Prático", contendo uma narrativa fictícia ilustrativa.
    - RF05 - Gestão de Histórico de Sessão: O sistema deve armazenar os logs de conversa vinculados ao ID do usuário (Google Auth), permitindo a retomada de contextos anteriores.

- **Requisitos Não Funcionais (RNF)**:
    - RNF01 - Latência Percebida: O tempo total de resposta não deve exceder 15 segundos. O sistema deve implementar streaming de texto (efeito de carregamento) para que o usuário veja a resposta sendo construída instantaneamente, reduzindo a ansiedade de espera.
    - RNF02 - Limitação de Payload (Rate Limiting): A caixa de entrada deve bloquear, via front-end e back-end, inputs superiores a 1500 caracteres ou 300 palavras.
    - RNF03 - Escalabilidade de Banco: O MongoDB deve ser indexado pelo userId e timestamp para garantir que a recuperação do histórico seja inferior a 200ms, mesmo com milhares de registros.
    - RNF04 - Responsividade e Acessibilidade: A interface deve seguir diretrizes WCAG 2.1, garantindo alto contraste e compatibilidade com leitores de tela, dado o público diverso.
