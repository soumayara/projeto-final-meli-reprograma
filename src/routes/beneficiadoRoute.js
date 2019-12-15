const express = require("express")
const router = express.Router()
const controller = require("../controllers/beneficiadoController")
const authMiddleware = require("../middleware/auth")


router.get("/", controller.get)

/**
 * @api {get} /beneficiado/ Listar todos beneficiados cadastrados
 * @apiName Get
 * @apiGroup Beneficiados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
        "_id": "5df448668815c5b9c1bddc99",
        "nome": "Guilherme Fernando",
        "cpf": 47415881737,
        "dataNascimento": "14/02/1980",
        "sexo": "Masculino",
        "endereco": "Rua da Saudade",
        "estado": "BH",
        "telefone": 11994944343,
        "estadoCivil": "Casada",
        "grauDeficiencia": "Parcial",
        "escreveLeBraile": "Sim",
        "dataCadastramento": "10/01/2000",
        "recebidos": [
            {
                "_id": "5df448668815c5b9c1bddc9a",
                "titulo": "Mateus",
                "data": "10/03/2001"
            }
 *
 */

router.get("/:id", controller.getById)


/**
 * @api {get} /beneficiado/:id Listar os beneficiados cadastrados por ID
 * @apiName Get
 * @apiGroup Beneficiados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
        "_id": "5df448668815c5b9c1bddc99",
        "nome": "Guilherme Fernando",
        "cpf": 47415881737,
        "dataNascimento": "14/02/1980",
        "sexo": "Masculino",
        "endereco": "Rua da Saudade",
        "estado": "BH",
        "telefone": 11994944343,
        "estadoCivil": "Casado",
        "grauDeficiencia": "Parcial",
        "escreveLeBraile": "Sim",
        "dataCadastramento": "10/01/2000",
        "recebidos": [
            {
                "_id": "5df448668815c5b9c1bddc9a",
                "titulo": "Mateus",
                "data": "10/03/2001"
            }
 *
 */


router.get("/cpf/:cpf", controller.getByCpf)

/**
 * @api {get} /beneficiado/cpf/:cpf Listar todos beneficiados cadastrados puxando por CPF
 * @apiName Get
 * @apiGroup Beneficiados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
        "_id": "5df448668815c5b9c1bddc99",
        "nome": "Guilherme Fernando",
        "cpf": 47415881737,
        "dataNascimento": "14/02/1980",
        "sexo": "Masculino",
        "endereco": "Rua da Saudade",
        "estado": "BH",
        "telefone": 11994944343,
        "estadoCivil": "Casada",
        "grauDeficiencia": "Parcial",
        "escreveLeBraile": "Sim",
        "dataCadastramento": "10/01/2000",
        "recebidos": [
            {
                "_id": "5df448668815c5b9c1bddc9a",
                "titulo": "Mateus",
                "data": "10/03/2001"
            }
 *
 */


router.get("/nome/:nome", controller.getByNome)

/**
 * @api {get} /beneficiado/nome/:nome Listar todos beneficiados cadastrados puxando por nome
 * @apiName Get
 * @apiGroup Beneficiados
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
{
        "_id": "5df448668815c5b9c1bddc99",
        "nome": "Guilherme Fernando",
        "cpf": 47415881737,
        "dataNascimento": "14/02/1980",
        "sexo": "Masculino",
        "endereco": "Rua da Saudade",
        "estado": "BH",
        "telefone": 11994944343,
        "estadoCivil": "Casada",
        "grauDeficiencia": "Parcial",
        "escreveLeBraile": "Sim",
        "dataCadastramento": "10/01/2000",
        "recebidos": [
            {
                "_id": "5df448668815c5b9c1bddc9a",
                "titulo": "Mateus",
                "data": "10/03/2001"
            }
 *
 */

router.use(authMiddleware)
router.post("/", controller.postBeneficiado)

/**
 * @api {post} /beneficiado/ Cadastro de beneficiados
 * @apiName Post
 * @apiGroup Criar Beneficiado
 * 
 * @apiParam (Request Body) {String} nome Nome do Beneficiado
 * @apiParam (Request Body) {String} email Email do Beneficiado
 * @apiParam (Request Body) {Number} cpf Número do CPF do Beneficiado
 * @apiParam (Request Body) {String} dataNascimento Data de Nascimento do Beneficiado
 * @apiParam (Request Body) {String} sexo Sexo do Beneficiado
 * @apiParam (Request Body) {String} endereço Endereço do Beneficiado
 * @apiParam (Request Body) {String} estado Estado do Beneficiado
 * @apiParam (Request Body) {Number} telefone Número de telefone do Beneficiado
 * @apiParam (Request Body) {String} estadoCivil Estado Civil do Beneficiado
 * @apiParam (Request Body) {String} grauDeficiencia Grau de dificiência do Beneficiado
 * @apiParam (Request Body) {String} origemCausaDeficiencia Origem da deficiencia do Beneficiado
 * @apiParam (Request Body) {String} escreveLeBraile Beneficiado escreve em braile ou não
 * @apiParam (Request Body) {String} dataCadastramento Data de cadastro do Beneficiado
 * @apiParam (Request Body) {String} livrosRecebidos livros recebidos pelo beneficiado
 * @apiParam (Request Body) {String} titulo Título dos livros recebidos pelo beneficiado
 * @apiParam (Request Body) {String} data Data de recebimento do livro recebido
    }]
})
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
    {
        "mensagem": "Beneficiado cadastrado com sucesso"
    }
 */

router.post("/:cpf", controller.postBooks)

/**
 * @api {post} /beneficiado/ Cadastro de livros recebidos
 * @apiName Post
 * @apiGroup Atualizar Livros
 * 
 * @apiParam (Request Body) {String} livrosRecebidos livros recebidos pelo beneficiado
 * @apiParam (Request Body) {String} titulo Título dos livros recebidos pelo beneficiado
 * @apiParam (Request Body) {String} data Data de recebimento do livro recebido
    }]
})
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
    {
        "mensagem": "Livro atualizado com sucesso"
    }
 */

router.put("/:_id", controller.putById)

/**
 * @api {put} /beneficiado/:_id Atualizar o Beneficiado
 * @apiName Put
 * @apiGroup Beneficiado
 * 
 * @apiParam {String} beneficiadoId Id do Beneficiado que será atualizado.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *       "mensagem": "Participante atualizado"
 *   }
 *
 * @apiError Error Beneficiado não localizado.
 * 
 * @apiErrorExample Error-Response:
 * 
 * HTTP/1.1 404 OK
 *  {
 *      "mensagem": "Error"
 *  }
 */

router.put("/livros/:_id", controller.putLivro)
router.delete("/:id", controller.deleteBeneficiado)

/**
 * @api {delete} /beneficiado/:_id Remover Beneficiado
 * @apiName Delete
 * @apiGroup Beneficiado
 * 
 * @apiParam {String} beneficiadoId Id do Beneficiado que será deletado.
 * 
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *  {
 *       "mensagem": "Participante removido com sucesso"
 *   }
 *
 * @apiError Error Beneficiado não localizado.
 * 
 * @apiErrorExample Error-Response:
 * 
 * HTTP/1.1 4o4 OK
 *  {
 *      "mensagem": "Error"
 *  }
 */

//router.delete("/livros/:id", controller.deleteLivro)

module.exports = router