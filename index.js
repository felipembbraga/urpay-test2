/* eslint-disable no-console */

// import das variáveis de ambiente
require("dotenv").config()

// import do app
const app = require("./src/app")
// import app from './src/app'

// Configuração server http
const http = require("http").Server(app)

// inicialização do servidor
http.listen(9000, () => {
    console.log("Servidor rodando na porta 9000")
})