## Documentação Técnica

- **Documentação da API (Integração LLM)**:
O sistema utiliza uma abordagem híbrida de modelos para otimizar custos e inteligência.

    - **GPT-4.1 Mini**: Utilizado para tarefas do perfil "Cidadão" (Tradução simples, chat cotidiano). Baixo custo, altíssima velocidade.

    - **GPT-5 (Preview/Beta)**: Utilizado exclusivamente para o perfil "Jurista" em tarefas complexas (Estruturação de teses, raciocínio lógico profundo).

- **Endpoint Principal**:

  `POST /api/v1/intelligence/process`

- **Headers**:

  `Authorization: Bearer <JWT_TOKEN>`
  
  `Content-Type: application/json`

- **Body da Requisição**:

```
{
  "user_input": "Texto da dúvida ou documento...",
  "profile_mode": "jurista", // ou "cidadao"
  "complexity_level": "high", // Define se usa GPT-4.1 Mini ou GPT-5
  "history_context": [
    {"role": "user", "content": "..."},
    {"role": "assistant", "content": "..."}
  ]
}
```

- **Resposta de Sucesso (200 OK)**:

```
{
  "processed_response": "Texto explicativo gerado...",
  "storytelling_block": "Exemplo: Imagine que João...", // Apenas se aplicável
  "model_used": "gpt-5-turbo",
  "tokens_consumed": 450
}
```

- **Tratamento de Erros**:

`400 Bad Request`: "Input excede limite de 1500 caracteres".

`429 Too Many Requests`: Proteção contra abuso do usuário free.

- **Estratégia CI/CD**:
*Nota: A documentação detalhada da pipeline de deploy contínuo encontra-se disponível no link do repositório, referenciando a documentação oficial da Vercel para Next.js.*

- **Ferramenta**: Vercel GitHub Integration.

- **Pipeline**:

    - Push na branch main: Aciona o build automático.
    - Linting: Roda eslint (conforme arquivo eslint.config.mjs) para garantir qualidade de código.
    - Build: Executa next build. Se falhar, o deploy é cancelado.
    - Deploy: Se sucesso, sobe para produção e atualiza a URL.
    - Justificativa: Time pequeno (3 pessoas). Configurar Jenkins ou GitHub Actions manual seria over-engineering agora. A Vercel automatiza tudo.

