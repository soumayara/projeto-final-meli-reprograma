const mongoose = require('mongoose');

const beneficiadosSchema = new mongoose.Schema({
    nome: {type: String},
    email:{type: String},
    cpf: {type: Number},
    dataNascimento: {type: String},
    sexo: {type: String},
    endereco: {type: String},
    estado: {type: String},
    telefone: {type: Number},
    estadoCivil: {type: String},
    grauDeficiencia: {type: String},
    origemCausaDeficiencia: {type: String},
    escreveLeBraile: {type: String},
    dataCadastramento: {type: String},
    recebidos: [{
        titulo: String,
        data: String,
    }]
})



const beneficiado = mongoose.model('Beneficiado',beneficiadosSchema);
module.exports = beneficiado