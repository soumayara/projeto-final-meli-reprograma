# API A Bíblia para pessoas com Deficiência Visual

<h3>Objetivo</h2>
Essa aplicação permite gerenciar a distribuição dos livros recebidos pelos beneficiados do Projeto
‘A Bíblia para Deficientes Visuais”. Durante o anos são produzidas e distríbuidas Bíblias em Braile e em áudio
onde algumas vezes por ano o beneficiado recebe um caderno referente a um livro da Bíblia na versão Braile. O objetivo da API
é otimizar esse processo pra que as distribuições sejam feitas de forma contínua e organizada.

<h3>Rotas/EndPoints</h3>


GET/beneficiado = listar todos os beneficiados cadastrados no Programa

GET/beneficiado/cpf/:cpf = lista de acordo com o CPF, os beneficiados cadastrados no Programa

GET/beneficiado/nome/:nome = lista de acordo com o nome, os beneficiados cadastrados no Programa

GET/beneficiado/:id = lista de acordo com o ID, os beneficiados cadastrados no Programa


//<em><b>Área restrita - SBB Ação Social</em></b>


POST/beneficiado = insere os dados de um novo beneficiado

POST//beneficiado/:cpf = insere um novo livro recebido ao beneficiado puxando pelo cpf cadastrado


PUT/beneficiado/:_id = atualiza os dados de um beneficiado puxando pelo id criado

PUT/beneficiado/livros/:_id = atualiza a lista de livros recebido pelo beneficiado, a partir do id criado


DELETE/beneficiado/:cpf = rota que deleta um beneficiado

<h3>Linguagens Utilizadas</h3>
• JavaScript |
• NodeJS 

<h3>Banco de Dados</h3>

• MongoDB 

<h3>Dependências</h3>
• Express |
• Nodemon |
• Mongoose |
• Body-parser 

<h3> Conheça o projeto na íntegra: </h3> http://bit.ly/ABibliaEmBraile
