const express = require("express")
const router = express.Router()

router.get("/", function(req, res) {
  res.status(200).send({
    Projeto: "A Bíblia para pessoas com Deficiência Visual ",
    versão: "0.0.1"
  })
})

module.exports = router
