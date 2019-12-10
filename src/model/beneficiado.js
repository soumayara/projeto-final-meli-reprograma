const mongoose = require('mongoose');

const beneficiadoSchema = new mongoose.Schema({
    nome:{type: String, required:true},
})

const beneficiado = mongoose.model('eneficiados',beneficiadoSchema);
module.exports = beneficiado