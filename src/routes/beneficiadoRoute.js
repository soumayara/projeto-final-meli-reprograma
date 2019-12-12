const express = require("express")
const router = express.Router()
const controller = require("../controllers/beneficiadoController")
//const controller = require("../")

router.get("/", controller.get)
router.post("/", controller.postBeneficiado)

module.exports = router