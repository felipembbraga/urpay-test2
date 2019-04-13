// Node Module Imports
const express = require("express")
const bodyParser = require("body-parser")
const mongoose = require("mongoose")

// configuração do banco de dados

const connectConfig = {
    poolSize: 10,
    keepAlive: true,
    socketTimeoutMS: 0,
    reconnectTries: 30,
    useNewUrlParser: true
}

mongoose.connect(`${process.env.DB_URL}/${process.env.DB_NAME}`, connectConfig)

// configuração do express
const app = express()

// habilitando json nas requisições e respostas
app.use(bodyParser.json())

//rota build info
app.get("/", (_req, res) => {
    res.send("Olá mundo!")
})


module.exports = app