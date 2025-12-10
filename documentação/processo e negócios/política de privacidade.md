## Política de Privacidade

*Última atualização: 09 de Dezembro de 2025*

O Fala Direito tem o compromisso de democratizar o acesso à informação jurídica com responsabilidade e segurança. Esta Política de Privacidade descreve como coletamos, usamos, armazenamos e protegemos os seus dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).

**1. Informações Coletadas**:
Para viabilizar o funcionamento da plataforma, coletamos os seguintes tipos de informações:

  - Dados de Identificação (via Google Auth):
  - Nome completo;
  - Endereço de e-mail;
  - Foto de perfil (opcional/padrão da conta Google).
  - Dados de Utilização (Inputs):
  - Textos, dúvidas ou trechos de documentos jurídicos digitados ou colados na caixa de chat pelo usuário.
  - Metadados Técnicos:
  - Logs de acesso, tipo de perfil selecionado (Cidadão ou Jurista) e data/hora das interações.

**2. Uso das Informações**:
As informações coletadas são utilizadas para as seguintes finalidades:

  - Autenticação e Acesso: O e-mail e os dados do Google são utilizados exclusivamente para criar sua conta, realizar o login seguro e manter seu histórico de conversas vinculado ao seu perfil.

  - Processamento de Inteligência Artificial: Os textos inseridos no chat são processados para gerar as explicações, traduções ou resumos jurídicos solicitados.

  - Atenção: Utilizamos um sistema de Sanitização de Dados. Antes de enviar seu texto para a IA (OpenAI), nosso sistema busca identificar e mascarar dados sensíveis (como CPFs e nomes) para proteger a privacidade de terceiros citados nos documentos.

  - Melhoria do Serviço: Dados estatísticos anônimos (ex: "quantas dúvidas sobre Direito Trabalhista foram feitas hoje") podem ser usados para aprimorar a plataforma, sem identificar os usuários individualmente.

**3. Armazenamento e Proteção de Dados**:
A segurança é prioridade na nossa arquitetura:

  - Banco de Dados: Os dados são armazenados no MongoDB Atlas (em nuvem), com criptografia em repouso e acesso restrito exclusivamente à equipe de desenvolvimento.

  - Autenticação: Utilizamos o NextAuth e JWT (JSON Web Tokens) para garantir que apenas você tenha acesso ao seu histórico de conversas.

  - Segurança da Aplicação: Implementamos limitação de caracteres (1500 por mensagem) e filtros de segurança para evitar injeção de código ou ataques maliciosos.

**4. Compartilhamento de Dados**:
O Fala Direito não vende suas informações. O compartilhamento ocorre apenas com os provedores de infraestrutura essenciais para o funcionamento do software:

  - OpenAI (Processador de IA): Recebe os textos dos inputs (devidamente sanitizados/anonimizados pelo nosso sistema) para gerar as respostas. A OpenAI não utiliza esses dados para treinar seus modelos públicos, conforme suas políticas de API Enterprise.

  - Vercel & MongoDB: Provedores de hospedagem e banco de dados, que processam os dados para manter o site no ar.

**5. Retenção de Dados**: 

  - Histórico de Chat: As conversas ficam armazenadas para que o usuário possa consultá-las posteriormente.
  - Inatividade: Contas inativas por um período superior a 12 (doze) meses poderão ter seus dados e históricos excluídos automaticamente para otimização de recursos.
  - Solicitação de Exclusão: Ao solicitar a exclusão da conta, todos os dados associados (perfil e histórico) são removidos permanentemente de nossos servidores.

**6. Direitos dos Usuários (LGPD)**
Conforme a LGPD, você tem direito a:

  - Acessar seus dados a qualquer momento (via histórico do chat).
  - Solicitar a correção de dados cadastrais (geridos via Google).
  - Solicitar a exclusão total de sua conta e dados pessoais.
  - Revogar o consentimento de uso da plataforma.
  - Para exercer esses direitos, o usuário deve utilizar a opção "Deletar Conta" nas configurações do perfil ou entrar em contato conosco.

**7. Alterações na Política de Privacidade**:
Podemos atualizar esta política para refletir melhorias no sistema ou mudanças legais. Notificaremos os usuários sobre alterações significativas através de avisos na plataforma ou por e-mail. O uso contínuo do serviço após as alterações implica na aceitação dos novos termos.

**8. Contato**:
Dúvidas sobre privacidade, segurança ou tratamento de dados podem ser encaminhadas através da abertura de uma Issue em nosso repositório oficial no GitHub ou pelo e-mail de suporte (ainda não criado).
