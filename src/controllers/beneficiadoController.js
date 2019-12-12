const Beneficiado = require ('../model/beneficiado')

exports.get = (req, res) => {
    Beneficiado.find(function (err, beneficiado) {
        if (err) res.status(500).send(err);
        res.status(200).send(beneficiado)
    })
    //console.log(req.url)
}

exports.postBeneficiado = (req, res) =>{
    console.log("entrou post")
    console.log(req)
    let beneficiado = new Beneficiado (req.body)//criar um novo pacote de cliente
    console.log(beneficiado);
    beneficiado.save(function (err){
        if(err){
            return res.status(500).send(err)
        }
        else{
            res.status(201).send({
                status: "true",
                mensagem: "Beneficiado incluído com sucesso"

            })
        }
    })
}
