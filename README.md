# Fala Direito
O Fala Direito é uma plataforma digital web, apoiada por Inteligência Artificial (IA) cujo objetivo é democratizar o acesso à informação jurídica. O sistema foi pensado para atuar em duas frentes principais:
1. **Inclusão social** – tornando a linguagem jurídica mais clara e acessível para pessoas leigas, que muitas vezes não compreendem seus direitos ou não conseguem interpretar documentos legais básicos.
2. **Eficiência profissional** – apoiando juristas, advogados e estudantes de direito com ferramentas inteligentes de interpretação, síntese e organização de informações jurídicas, otimizando tarefas repetitivas e melhorando a produtividade.

O Fala Direito reconhece que o Direito, enquanto instrumento essencial de cidadania, deve ser compreensível e acessível. Ao integrar Large Language Models (LLMs) e técnicas de Processamento de Linguagem Natural (PLN), a solução propõe uma comunicação mais simples, direta e eficaz entre as normas jurídicas e seus destinatários.

## O Problema
Apesar de o Brasil ser um dos países com maior produção legislativa do mundo — com milhares de leis em vigor e novas normas sendo criadas diariamente — o acesso real ao Direito ainda é restrito. A população enfrenta barreiras que dificultam a compreensão e a aplicação de seus direitos:

  - **Complexidade da linguagem jurídica**: Pesquisas mostram que mais de 70% da população brasileira tem dificuldade em compreender textos jurídicos. Termos técnicos, frases extensas e linguagem rebuscada tornam contratos, decisões judiciais e leis quase inacessíveis para cidadãos comuns.
  
  - **Dependência de profissionais**: Questões simples, como interpretar um contrato de aluguel ou entender um processo administrativo, acabam exigindo a contratação de advogados. Isso aumenta custos, limita a autonomia das pessoas e pode excluir aqueles com menos recursos financeiros.
  
  - **Excesso de informação para profissionais**: Advogados, promotores e juízes lidam com grandes volumes de dados jurídicos diariamente. Pesquisas, síntese de jurisprudência e organização de relatórios consomem horas de trabalho, reduzindo o tempo disponível para análises estratégicas e atendimento aos clientes.
  
  - **Falta de centralização**: Documentos e informações jurídicas estão dispersos em diferentes fontes (sites de tribunais, diários oficiais, doutrinas, regulamentos administrativos), dificultando uma visão integrada e clara.

Esse cenário gera desigualdade de acesso à justiça, sobrecarga para profissionais e ineficiência sistêmica.

## A Solução
O Fala Direito foi concebido para responder a uma questão central:
_Como tornar o conhecimento jurídico mais acessível, eficiente e democrático para leigos e juristas, sem comprometer a precisão técnica?_

Para isso, a solução propõe:

  - **Simplificação de linguagem jurídica**: tradução automática de termos complexos em linguagem acessível, permitindo que qualquer pessoa compreenda contratos, leis e documentos oficiais.

  - **Síntese inteligente de documentos**: criação de resumos claros de contratos extensos, decisões judiciais e regulamentos, poupando tempo de leitura e aumentando a eficiência.

  - **Assistente jurídico inteligente**: suporte para elaboração de relatórios, petições e pareceres, sugerindo estruturas textuais e referências normativas.

  - **Organização e centralização**: integração de diferentes fontes jurídicas em um repositório unificado, com filtros inteligentes para pesquisa.

  - **Inclusão social e cidadania**: empoderar cidadãos comuns para que compreendam melhor seus direitos e obrigações, reduzindo a exclusão causada pela linguagem técnica do Direito.

Sendo assim, o Fala Direito atua como uma ponte entre o juridiquês e o cidadão comum, sem deixar de lado as necessidades avançadas dos profissionais da área.

## Desafios Enfrentados
Apesar do grande potencial da solução, o projeto precisa lidar com desafios importantes, como:

1. **Precisão e responsabilidade jurídica**
    - O Direito é uma área sensível: interpretações equivocadas podem ter consequências sérias.
    - O desafio é equilibrar clareza e simplicidade sem distorcer conceitos técnicos.

2. **Ética e dependência de IA**
    - A IA não deve substituir a atuação humana, mas apoiá-la.
    - É necessário garantir que usuários entendam que o Fala Direito não substitui advogados em situações complexas.

3. **Segurança e privacidade**
    - Documentos jurídicos frequentemente contêm dados sensíveis.
    - O sistema precisa respeitar LGPD e boas práticas de segurança digital para garantir confidencialidade.

4. **Adoção por diferentes perfis**
    - Leigos precisam de clareza e simplicidade.
    - Juristas exigem profundidade e precisão técnica.
    - Conciliar esses dois públicos é um desafio de design e usabilidade.

5. **Atualização constante**
    - O Direito é dinâmico: novas leis e jurisprudências surgem diariamente.
    - A solução precisa de mecanismos automáticos de atualização para manter a base de conhecimento confiável.

## Decisões Técnicas e Trade-offs

  - Uso de LLMs como núcleo de interpretação e síntese.
  - Arquitetura projetada para balancear segurança e usabilidade.
  - Abordagem de IA como ferramenta de apoio, não como agente autônomo de decisão legal, garantindo que a responsabilidade final permaneça com o usuário.

## Como Buildar
Para configurar e rodar o projeto localmente, siga os pré-requisitos e os passos de instalação detalhados no arquivo de build. O processo envolve a clonagem do repositório, a instalação das dependências do backend e do frontend, e a inicialização dos dois servidores em terminais separados.

## Como Contribuir
O Fala Direito é um projeto de código aberto e colaborativo. Contribuições serão sempre bem-vindas, seja através de sugestões de melhoria, relato de bugs ou novas funcionalidades. Para mais detalhes, consulte o nosso guia de contribuição ou abra uma issue no repositório.

## Nosso Time
**José Leandro** (jlsf): Atua como Gerente de Projeto (GP). Foi responsável pelo desenvolvimento da lógica de negócio, comunicação com banco de dados, integração com o LLM e APIs externas. Também desempenhou o papel de DevOps / SysAdmin, sendo responsável pelo deploy, testes do sistema, configuração de servidores, monitoramento, métricas de desempenho e manutenção da infraestrutura.

**Júlia Nunes** (jnas2): Atua como Desenvolvedora Front-end. Foi responsável pela implementação da interface do usuário, integração com APIs e desenvolvimento das funcionalidades visuais do sistema. Além disso, atuou como Designer de UX/UI, sendo responsável pelo design de interface, protótipos, fluxos de navegação e experiência do usuário.

**Talisson Mendes** (tsms): Atua como Analista de Produto. Foi responsável pelo planejamento, organização e acompanhamento do cronograma, definição de prioridades, coordenação das atividades da equipe, documentação técnica, análise de negócios e também garantindo o atendimento aos requisitos funcionais e não funcionais.

## Primeiros Passos

Este é um projeto [Next.js](https://nextjs.org) inicializado com o [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando o arquivo `app/page.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

Este projeto utiliza o [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) para otimizar e carregar automaticamente a [Geist](https://vercel.com/font), uma nova família de fontes para o Vercel.

## Saiba Mais

Para saber mais sobre o Next.js, consulte os seguintes recursos:

- [Next.js Documentation](https://nextjs.org/docs) - saiba mais sobre os recursos e a API do Next.js.
- [Learn Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

Você pode conferir o [the Next.js GitHub repository](https://github.com/vercel/next.js) - seus comentários e contribuições são bem-vindos!

## Deploy no Vercel

A maneira mais fácil de implantar sua aplicação Next.js é usar a [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) dos criadores do Next.js.

Confira nossa documentação de deploy [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) para mais detalhes.
