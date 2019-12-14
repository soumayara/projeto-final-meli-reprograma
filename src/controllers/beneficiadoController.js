const Beneficiado = require ('../model/beneficiadosSchema')

exports.get = (req, res) => {
    Beneficiado.find(function (err, beneficiado) {
        if (err) res.status(500).send(err);
        res.status(200).send(beneficiado)
    })
    //console.log(req.url)
}

exports.getNome = async (req, res) => {
    try {
        const nome = req.params.nome
        const response = await Beneficiado.findOne({ nome })
        res.status(200).send(response)
    } catch {
        if (!response) {
            return res.status(401).send({ mensagem: `Beneficiado ${response} não encontrado` })
        }
    }
}


exports.postBeneficiado = (req, res) =>{
    //console.log("entrou post")
    //console.log(req)
    let beneficiados = new Beneficiado (req.body)//criar um novo pacote de cliente
    //console.log(beneficiados);
    beneficiados.save(function (err){
        if(err){
            return res.status(500).send(err)
        }
        else{
            res.status(201).json({
                status: "true",
                mensagem: "Beneficiado incluído com sucesso"

            })
        }
    })
}
