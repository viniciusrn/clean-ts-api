# Login

> ## Seccess Cases

1. :heavy_check_mark: Recebe uma requisição do tipo **POST** na rota **/api/login**
2. :heavy_check_mark: Valida dados obrigatórios **email** e **password**
3. :heavy_check_mark: Valida que o campo **email** é um e-mail válido
4. :heavy_check_mark: **Busca** o usuário com o email e senha fornecidos
5. :heavy_check_mark: Gera um **token** de acesso a partir do ID do usuário
6. :heavy_check_mark: **Atualiza** os dados do usuário com o token de acesso gerado
7. :heavy_check_mark: Retorna **200** com o token de acesso e o nome do usuário

> ## Exceptions

1. :heavy_check_mark: Retorna erro **404** se a API não existir
2. :heavy_check_mark: Retorna erro **400** se email ou password não forem fornecidos pelo client
3. :heavy_check_mark: Retorna erro **400** se o campo email for um e-mail inválido
4. :heavy_check_mark: Retorna erro **401** se não encontrar um usuário com os dados fornecidos
5. :heavy_check_mark: Retorna erro **500** se der erro ao tentar gerar o token de acesso
6. :heavy_check_mark: Retorna erro **500** se der erro ao tentar atualizar o usuário com o token de acesso gerado