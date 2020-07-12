# Answer Survey

> ## Success Cases

1. :x: Recebe uma requisição do tipo **PUT** na rota **/api/surveys/{survey_id}/results**
2. :x: Valida se a requisição foi feita por um **usuário**
3. :heavy_check_mark: Valida o parâmetro **survey_id**
4. :heavy_check_mark: Valida se o campo **answer** é uma resposta válida
5. :heavy_check_mark: **Cria** um resultado de enquete com os dados fornecidos caso não tenha um registro
6. :heavy_check_mark: **Atualiza** um resultado de enquete com os dados fornecidos caso já tenha um registro
7. :heavy_check_mark: Retorna **200** com os dados do resultado da enquete

> ## Exceptions

1. :x: Retorna erro **404** se a API não existir
2. :x: Retorna erro **403** se não for um usuário
3. :heavy_check_mark: Retorna erro **403** se o survey_id passado na URL for inválido
4. :heavy_check_mark: Retorna erro **403** se a resposta enviada pelo client for uma resposta inválida
5. :heavy_check_mark: Retorna erro **500** se der erro ao tentar criar o resultado da enquete
6. :heavy_check_mark: Retorna erro **500** se der erro ao tentar atualizar o resultado da enquete
7. :heavy_check_mark: Retorna erro **500** se der erro ao tentar carregar a enquete