const mongoose = require('mongoose');

const beneficiadosSchema = new mongoose.Schema({
    nome: {type: String},
    CPF: {type: Number},
    DataNascimento: {type: String},
    Sexo: {type: String},
    Endereco: {type: String},
    Estado: {type: String},
    Telefone: {type: Number},
    EstadoCivil: {type: String},
    GrauDeficiencia: {type: String},
    OrigemCausaDeficiencia: {type: String},
    EscreveLeBraile: {type: String},
    DataCadastramento: {type: String},
    Recebidos: [{
        titulo: String,
        data: String,
    }]
})

const beneficiado = mongoose.model('Beneficiado',beneficiadosSchema);
module.exports = beneficiado