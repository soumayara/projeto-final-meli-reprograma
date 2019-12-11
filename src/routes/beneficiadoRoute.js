const express = require("express")
const router = express.Router()
const controller = require("../controllers/beneficiadoController")
//const controller = require("../")

router.get("/", controller.get)

module.exports = router