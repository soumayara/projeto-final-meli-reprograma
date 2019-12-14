const express = require("express")
const router = express.Router()
const controller = require("../controllers/beneficiadoController")
//const controller = require("../")

router.get("/", controller.get)
router.get("/nome/:nome", controller.getNome)
//router.get("/:cpf", controller.getByCpf)
router.post("/", controller.postBeneficiado)

module.exports = router