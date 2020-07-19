# Result Survey

> ## Success Cases

1. :heavy_check_mark: Recebe uma requisição do tipo **GET** na rota **/api/surveys/{survey_id}/results**
2. :heavy_check_mark: Valida se a requisição foi feita por um **usuário**
3. :heavy_check_mark: Retorna **200** com os dados do resultado da enquete

> ## Exceptions

1. :heavy_check_mark: Retorna erro **404** se a API não existir
2. :heavy_check_mark: Retorna erro **403** se não for um usuário
3. :heavy_check_mark: Retorna erro **500** se der erro ao tentar listar o resultado da enquete