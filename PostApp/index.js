const handlebars = require("express-handlebars")
const bodyParser = require('body-parser')
const express = require("express") // Importando o express
const app = express() // Instância do express
const Post = require('./models/Post')

/* Config */
    /* Template Engine */
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    /* Body Parser */
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

/* Rotas */
    app.get('/', function(req, res) {
        Post.findAll({order: [['id', 'DESC']]}).then(function(posts) {
            console.log(posts)
            res.render('home', {posts: posts})
        })
    })

    app.get('/cad', function(req, res) {
        res.render('formulario')
    })

    app.post('/add', function(req, res) {
        Post.create({
            titulo: req.body.titulo,
            conteudo:req.body.conteudo
        }).then(function() {
            res.redirect('/')
        }).catch(function(erro) {
            res.send('Houve um erro: ' + erro)
        })
    })

    app.get('/deletar/:id', function(req, res) {
        Post.destroy({where: {'id': req.params.id}}).then(function() {
            res.send('Postagem deletada com saucesso!')
        }).catch(function(erro) {
            res.send('Esta postagem não existe!')
        })
    })


app.listen(8081, function() {
    console.log("Servidor rodando na url http://localhost:8081")
})