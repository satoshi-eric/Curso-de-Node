const express = require("express")
const app = express()

app.get("/ola/:cargo/:nome/:cor", function(req, res) {
    res.send(
        "<h1>Olá: " + req.params.nome + "</h1>" + 
        "<h2>Seu cargo é: " + req.params.cargo + "</h1>" + 
        "<h3>Sua cor favorita é: " + req.params.cor + "</h3>"
    )
})

app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
})