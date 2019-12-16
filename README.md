# API A Bíblia para pessoas com Deficiência Visual

<h3>Objetivo</h2>
Essa aplicação permite gerenciar a distribuição dos livros recebidos pelos beneficiados do Projeto
‘A Bíblia para Deficientes Visuais”. Durante o anos são produzidas e distríbuidas Bíblias em Braile e em áudio
onde algumas vezes por ano o beneficiado recebe um caderno referente a um livro da Bíblia na versão Braile. O objetivo da API
é otimizar esse processo pra que as distribuições sejam feitas de forma contínua, e que organizada.

<h3>Rotas/EndPoints</h3>

Área restrita - SBB Ação Social

GET /beneficiado = listar todos os beneficiados cadastrados no Programa | HTTP 200 OK

GET /beneficiado/cpf/:cpf = lista de acordo com o CPF, os beneficiados cadastrados no Programa | HTTP 200 OK

GET /beneficiado/nome/:nome = lista de acordo com o nome, os beneficiados cadastrados no Programa | HTTP 200 OK

GET /beneficiado/:id = lista de acordo com o ID, os beneficiados cadastrados no Programa | HTTP 200 OK


POST /beneficiado = insere os dados de um novo beneficiado | HTTP 200 OK

POST/:cpf = insere um novo livro recebido ao beneficiado puxando pelo cpf cadastrado | HTTP 201 CREATED


PUT/:_id = atualiza os dados de um beneficiado puxando pelo id criado | HTTP 200

PUT/livros/:_id = atualiza a lista de livros recebido pelo beneficiado, a partir do id criado | HTTP 200


DELETE/beneficiado/:cpf = rota que deleta um beneficiado | HTTP 200 NO CONTENT

<h3>Tecnologias Utilizadas / Apoio</h3>
• API REST |
• NodeJS |
• MongoDB |
• Postman |
• Heroku |
• ApiDoc

<h3> Conheça o projeto na íntegra: </h3> http://bit.ly/ABibliaEmBraile
