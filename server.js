const app = require ("./src/app")
//const port = 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, function() {
    console.log(`app está rodando na porta ${PORT}`)
  })