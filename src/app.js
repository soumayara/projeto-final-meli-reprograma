const express = require("express")
const mongoose = require("mongoose")
const app = express()

mongoose.connect("mongodb://localhost:27017/reprograma", { 
  useNewUrlParser: true,
  useUnifiedTopology: true 
}); // linha de comandp
let db = mongoose.connection; //representação
db.on("error", console.log.bind(console, "connection error"))//espera receber do console a conexão
db.once("open", function (){
  console.log("conexão feita com sucesso")
})


//rotas
const index = require("./routes/index")
const beneficiado = require("./routes/beneficiadoRoute")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

  app.use("/", index)
  app.use("/beneficiado", beneficiado)
  module.exports = app