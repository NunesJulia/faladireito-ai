## User Stories
No Fala Direito, os user stories funcionaram como a "bússola" para o desenvolvimento, seja na concepção do front-end pela desenvolvedora que pôde saber com mais precisão o que criar para um componente visual e também para o dev/ops que soube do que precisa ajustar o prompt da IA e gerar exemplos mais robustos e treinados, com todo suporte das histórias mapeados e tragos pelo analista de produto.

Com isso separamos as histórias do usuário em 6 grupos, com a soma deles formando 25 US no total:

### 1. Acesso, Onboarding e Perfil:
Foco: Garantir que o usuário entre no sistema sem fricção e seja direcionado para a experiência correta, garantindo a captura correta dos metadados.

- US01 - Login Social (Google)
    Como: Visitante
    Quero: Fazer login com minha conta Google.
    Para que: Eu não precise decorar mais uma senha e entre rápido na plataforma.

  - Critérios de Aceite:
      O botão "Entrar com Google" deve estar visível e centralizado na Home.
      O sistema deve redirecionar corretamente para a autenticação do Google (Google Auth).
      Deve haver a criação automática de registro na coleção users do MongoDB se for o 1º acesso.
  
  - Relacionado a: RF05, RNF02


- US02 - Seleção de Perfil Inicial
    Como: Novo Usuário
    Quero: Escolher meu perfil (Cidadão ou Jurista) logo após o login.
    Para que: O sistema ajuste o "tom de voz" da IA para minha necessidade específica desde a primeira mensagem.

  - Critérios de Aceite:
      Exibir um modal ou tela de seleção obrigatória no primeiro acesso (Bloqueante).
      A preferência deve ser salva no campo role do banco de dados.
      Se selecionado "Cidadão", o System Prompt deve ser configurado automaticamente para linguagem simples.
  
  - Relacionado a: RF04


- US03 - Alternância de Perfil
    Como: Usuário Cadastrado
    Quero: Poder alterar meu perfil de uso a qualquer momento.
    Para que: Eu possa usar a ferramenta para fins pessoais (leigo) ou profissionais (jurista) dependendo da situação.

  - Critérios de Aceite:
      Deve existir um Toggle ou Botão visível no header (ex: "Modo Atual: Jurista").
      A troca deve limpar o contexto visual da conversa atual para evitar confusão da IA.
  
  - Relacionado a: RF04


- US04 - Aceite de Termos Legais
    Como: Usuário
    Quero: Ver os Termos de Uso e Política de Privacidade no cadastro.
    Para que: Eu saiba como meus dados serão tratados e me sinta seguro antes de usar.

  - Critérios de Aceite:
      Checkbox "Li e concordo" deve ser obrigatório no primeiro login.
      Deve haver um link clicável que abre um modal com os textos legais completos.
  
  - Relacionado a: Legal/LGPD

### 2. Núcleo de Inteligência - Perfil Cidadão:
Foco: Tradução, simplificação e acolhimento do usuário leigo. A prioridade aqui é empatia e clareza.

- US05 - Dúvida Cotidiana
    Como: Cidadão
    Quero: Digitar uma dúvida cotidiana (ex: barulho de vizinho, troca de produto).
    Para que: Eu saiba meus direitos sem precisar conhecer o nome da lei ou termos técnicos.

  - Critérios de Aceite:
      A IA deve responder citando a base legal (ex: "Código de Defesa do Consumidor"), mas explicando o conceito.
      A resposta deve evitar termos em latim e "juridiquês".
      O tom de voz deve ser acolhedor e calmo.
  
  - Relacionado a: RF01, RF02


- US06 - Tradução de Documentos
    Como: Cidadão
    Quero: Colar um texto jurídico complexo (Citação/Contrato).
    Para que: O sistema "traduza" parágrafo por parágrafo para português claro.
  
  - Critérios de Aceite:
      O campo de input deve aceitar colar texto longo (Copy/Paste).
      O output deve substituir termos como "Outrossim" e "Data Venia" por linguagem comum.
      A simplificação deve manter o sentido original sem distorcer os fatos jurídicos.
  
  - Relacionado a: RF01


- US07 - Exemplo Prático (Storytelling)
    Como: Cidadão
    Quero: Receber uma história de exemplo (Storytelling) ao final da explicação.
    Para que: Eu consiga visualizar a aplicação da lei na prática através de uma analogia.

  - Critérios de Aceite:
      Todo output do perfil Cidadão deve terminar obrigatoriamente com o bloco: "Exemplo Prático".
      A história deve usar nomes fictícios e situações do dia a dia.
      O exemplo deve ter conexão direta com a dúvida tirada.
  
  - Relacionado a: RF02


- US08 - Orientação Prática (Próximos Passos)
    Como: Cidadão
    Quero: Saber qual o próximo passo prático a tomar.
    Para que: Eu não fique apenas na teoria e saiba como resolver meu problema.

  - Critérios de Aceite:
      A IA deve sugerir ações concretas (ex: "Vá ao PROCON", "Junte provas de áudio").
      Deve haver um aviso de "Consulte um advogado" para casos identificados como complexos (Guardrail ético).
  
  - Relacionado a: RNF05 (Ética)


- US09 - Acesso Mobile
    Como: Cidadão
    Quero: Usar o sistema no meu celular.
    Para que: Eu possa consultar uma dúvida na hora que o problema acontece (ex: dentro de uma loja).

  - Critérios de Aceite:
      O layout deve ser totalmente responsivo.
      O teclado virtual do celular não deve cobrir a caixa de resposta ou o botão de enviar.
  
  - Relacionado a: RNF04


### 3. Núcleo de Inteligência - Perfil Jurista:
Foco: Produtividade, síntese e estruturação técnica. A prioridade aqui é precisão e formatação.

- US10 - Síntese de Jurisprudência
    Como: Jurista
    Quero: Colar uma decisão judicial longa.
    Para que: O sistema gere um resumo estruturado (Fatos, Fundamentos, Decisão) automaticamente.

  - Critérios de Aceite:
      A resposta deve vir formatada em tópicos (Bullet points).
      Deve haver uso correto de terminologia técnica.
      Identificação clara do "Dispositivo" da sentença (o que foi decidido).
  
  - Relacionado a: RF01


- US11 - Estruturação de Peças (Co-Pilot)
    Como: Jurista
    Quero: Descrever os fatos de um caso de um cliente.
    Para que: O sistema sugira o esqueleto (estrutura lógica) da peça jurídica ideal.

  - Critérios de Aceite:
      A IA deve identificar a ação cabível (ex: "Ação de Danos Morais").
      A IA deve sugerir a ordem lógica dos tópicos para a petição.
      A IA deve sugerir artigos de lei relacionados aos fatos narrados.
  
  - Relacionado a: RF01


- US12 - Revisão Textual
    Como: Jurista
    Quero: Solicitar revisão de um texto que eu escrevi.
    Para que: A IA aponte melhorias de coesão ou sugira sinônimos mais formais.

  - Critérios de Aceite:
      O sistema deve aceitar o texto original como input.
      O output deve apresentar o texto revisado e uma lista das alterações sugeridas ("De: X -> Para: Y").
  
  - Relacionado a: RF01


- US13 - Pesquisa de Referência
    Como: Jurista
    Quero: Pesquisar referências de leis sobre um tema específico.
    Para que: Eu economize tempo procurando o número exato do artigo no Vade Mecum.

  - Critérios de Aceite:
      A resposta deve trazer a citação exata: "Artigo X da Lei Y".
      A IA não deve inventar leis inexistentes (Alucinação controlada via prompt).
  
  - Relacionado a: RNF05


### 4. Segurança e Privacidade (Core):
Foco: Proteção de dados (LGPD) e controle de custos.

- US14 - Anonimização Automática
    Como: Sistema (Automático)
    Quero: Detectar e mascarar automaticamente dados pessoais (CPF, Email) no input.
    Para que: Eu não envie dados sensíveis de terceiros para a API da OpenAI.

  - Critérios de Aceite:
      O middleware deve rodar REGEX antes do envio para a API externa.
      Deve substituir padrões de CPF por [CPF] e nomes próprios sensíveis.
      A troca deve ser transparente para o usuário final.
  
  - Relacionado a: RF03, LGPD


- US15 - Contador de Caracteres
    Como: Usuário
    Quero: Ver um contador de caracteres enquanto digito.
    Para que: Eu saiba que existe um limite e não escreva um texto que será cortado.

  - Critérios de Aceite:
      Contador visível próximo à caixa de texto (ex: 120/1500).
      Bloqueio de digitação ao atingir 1500 caracteres.
      Feedback visual (cor vermelha) ao se aproximar do limite.
  
  - Relacionado a: RNF02


- US16 - Segurança de Tráfego
    Como: Usuário
    Quero: Que meus dados sejam trafegados com segurança.
    Para que: Ninguém intercepte minha consulta jurídica.

  - Critérios de Aceite:
      Conexão forçada em HTTPS (TLS 1.2+).
      Token JWT deve ser criptografado.
  
  - Relacionado a: RNF02


- US17 - Direito ao Esquecimento
    Como: Usuário
    Quero: Excluir minha conta e histórico definitivamente.
    Para que: Eu exerça meu direito previsto na LGPD.

  - Critérios de Aceite:
      Botão "Deletar Conta" disponível na área de configurações.
      A ação deve realizar a remoção física (Hard Delete) dos dados no MongoDB.
  
  - Relacionado a: Legal/LGPD


### 5. Experiência e Interface (UX):
Foco: Fluidez, feedback e acessibilidade.

- US18 - Streaming de Resposta
    Como: Usuário
    Quero: Ver a resposta sendo escrita em tempo real.
    Para que: Eu não ache que o sistema travou enquanto a IA "pensa".

  - Critérios de Aceite:
      Implementar efeito de digitação (token a token).
      A latência inicial para o primeiro caractere deve ser menor que 3 segundos.
  
  - Relacionado a: RNF01


- US19 - Histórico de Conversas
    Como: Usuário
    Quero: Ter acesso ao meu histórico de conversas antigas.
    Para que: Eu possa consultar uma orientação que recebi anteriormente.

  - Critérios de Aceite:
      Sidebar com lista de chats ordenada por data.
      Ao clicar, o chat antigo deve carregar na tela principal.
  
  - Relacionado a: RF05


- US20 - Copiar Resposta
    Como: Usuário
    Quero: Copiar a resposta da IA com um clique.
    Para que: Eu possa colar no meu documento Word ou mandar no WhatsApp.

  - Critérios de Aceite:
      Ícone de "Copy" ao lado de cada balão de resposta.
      Feedback visual rápido ("Copiado!") ao clicar.
  
  - Relacionado a: RNF04


- US21 - Feedback de Erro
    Como: Usuário
    Quero: Receber um aviso claro se o sistema estiver fora do ar.
    Para que: Eu não fique tentando enviar mensagens em vão.

  - Critérios de Aceite:
      Tratamento adequado de erros 500/503.
      Exibição de notificação amigável (Toast): "Estamos com instabilidade, tente novamente em breve".
  
  - Relacionado a: RNF03


- US22 - Interface Familiar
    Como: Leigo
    Quero: Uma interface limpa, parecida com WhatsApp.
    Para que: Eu me sinta familiarizado e não tenha medo de usar a tecnologia.

  - Critérios de Aceite:
      Caixa de input fixada na parte inferior.
      Uso de balões de fala (Usuário à direita, IA à esquerda).
  
  - Relacionado a: RNF04


### 6. Administração e Privacidade:
Foco: Gestão do produto pelos desenvolvedores.

- US23 - Monitoramento de Custos
    Como: Admin
    Quero: Monitorar o consumo de tokens da API.
    Para que: O projeto não estoure o orçamento mensal previsto.

  - Critérios de Aceite:
      Acesso ao Dashboard no Vercel ou Logs centralizados.
      Configuração de alerta se consumo subir 50% em 1 hora (sinal de ataque).
  
  - Relacionado a: RNF02


- US24 - Qualidade das Respostas
    Como: Admin
    Quero: Identificar erros recorrentes ou insatisfação nas respostas.
    Para que: Eu possa ajustar o Prompt (Fine-tuning) para melhorar a IA.

  - Critérios de Aceite:
      Log de feedbacks negativos (baseado em botão de like/dislike, se implementado futuramente).
  
  - Relacionado a: Qualidade


- US25 - Proteção Anti-Bot
    Como: Admin
    Quero: Impedir uso abusivo por robôs.
    Para que: O sistema não caia por excesso de requisições.

  - Critérios de Aceite:
      Implementação de Rate Limiting (ex: máx 10 mensagens/minuto por IP).
  
  - Relacionado a: Segurança
