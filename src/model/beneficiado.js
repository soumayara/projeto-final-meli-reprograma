const mongoose = require('mongoose');

const beneficiadoSchema = new mongoose.Schema({
    nome:{type: String, required:true},
})

const beneficiado = mongoose.model('beneficiados',beneficiadoSchema);
module.exports = beneficiado