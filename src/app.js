const express = require("express")
const mongoose = require("mongoose")
const app = express()
const path = require("path")
const admin = require("./routes/adminRoute")

mongoose.connect("mongodb+srv://banco-dvs:dvs123@cluster0-9ilbh.mongodb.net/banco-beneficiado" , { 
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
const bodyParser = require("body-parser")

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    )
    next()
  })

  app.use(bodyParser.json())
  app.use("/", index)
  app.use("/beneficiado", beneficiado)
  app.use("/admin", admin)

  //documentacao APIdoc

  app.use(express.static('doc'))
  app.get('/api-doc', (req,res) =>{
    res.sendFile(path.join(__dirname + '/../doc/index.html'))
  })

  module.exports = app
