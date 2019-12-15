const Beneficiado = require('../model/beneficiadosSchema')

exports.get = (req, res) => {
    Beneficiado.find(function (err, beneficiado) {
        if (err) res.status(500).send(err);
        res.status(200).send(beneficiado)
    })
    //console.log(req.url)
}


exports.getById = async (req, res) => {
    const beneficiadoId = req.params.id
    await Beneficiado.findById(beneficiadoId, function (err, beneficiado) {
        if (err) return res.status(500).send(err)
        if (!beneficiado) {
            return res.status(200).send({ message: `Beneficiado não localizado` })
        }
        res.status(200).send(beneficiado)
    })
}


exports.getByNome = async (req, res, next) => {
    try {
        const nome = req.params.nome
        const response = await Beneficiado.findOne({ nome })
        res.status(200).send(response)
    } catch (e) {
        return res.status(400).send({
            mensagem: "Beneficiado não encontrada",
            data: e
        })

    }
}


exports.getByCpf = async (req, res, next) => {
    try {
        const cpf = req.params.cpf
        const beneficiadoCpf = await Beneficiado.find({ cpf })
        res.status(200).send(beneficiadoCpf)
    } catch (e) {
        return res.status(400).send({
            message: `Beneficiado não localizado`,
            data: e
        })

    }
}


exports.postBeneficiado = (req, res) => {
    //console.log("entrou post")
    //console.log(req)
    let beneficiados = new Beneficiado(req.body)//criar um novo pacote de cliente
    //console.log(beneficiados);
    beneficiados.save(function (err) {
        if (err) {
            return res.status(500).send(err)
        }
        else {
            res.status(201).json({
                status: "true",
                mensagem: "Beneficiado incluído com sucesso"

            })
        }
    })
}


exports.postBooks = (req, res) => {
    const beneficiadoId = req.params.id
    Beneficiado.findById(beneficiadoId, function (err, beneficiado) {
        if (err)
            return res.status(500).send(err)

        if (!beneficiado) {
            return res.status(200).send({ message: `infelizmente a aluna não foi encontrada` })
        }
        const livro = req.body
            (recebido.titulo).push(livro)
        Beneficiado.save(function (err) {
            if (err)
                return res.status(500).send(err)

        })
    })
}


exports.putById = (req,res) => { 
    Beneficiado.updateOne(
      {_id:req.params._id},
      {$set:req.body},
      {upsert:false},
    function (err) {
       if (err) return res.status(500).send({message: 'err'})
       res.status(200).send({message: "Atualizado com sucesso"})
    })
  }


exports.putLivro = (req,res) => { 
    Beneficiado.updateOne(
      {_id:req.params._id},
      {$push:{ recebidos:req.body }},
      {upsert:false},
    function (err) {
       if (err) return res.status(500).send({message: 'err'})
       res.status(200).send({message: "Atualizado com sucesso"})
    })
  }


exports.deleteBeneficiado = (req, res, next) => {
    try {
        const beneficiadoId = req.params.id
        const response = Beneficiado.findById(beneficiadoId)
        response.remove(function(error){
            if(!error){
                res.status(200).send({ mensagem: `Beneficiado foi removido com sucesso`})
            }
        })
    } catch (error){
        return res.status(500).send({ mensagem: error })
    }
}