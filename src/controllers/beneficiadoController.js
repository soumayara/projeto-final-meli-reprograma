const beneficiado = require ('../model/beneficiado');
const fs = require('fs')

exports.get = (req, res) => {
    console.log(req.url)
    res.status(200).send(beneficiado)
}