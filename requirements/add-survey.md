# Create Survey

> ## Success Cases

1. :heavy_check_mark: Recebe uma requisição do tipo **POST** na rota **/api/surveys**
2. :heavy_check_mark: Valida se a requisição foi feita por um **admin**
3. :heavy_check_mark: Valida dados obrigatórios **question** e **answers**
4. :heavy_check_mark: **Cria** uma enquete com os dados fornecidos
5. :heavy_check_mark: Retorna **204**, sem dados

> ## Exceptions

1. :heavy_check_mark: Retorna erro **404** se a API não existir
2. :heavy_check_mark: Retorna erro **403** se o usuário não for admin
3. :heavy_check_mark: Retorna erro **400** se question ou answers não forem fornecidos pelo client
4. :heavy_check_mark: Retorna erro **500** se der erro ao tentar criar a enquete