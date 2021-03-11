const mongoose = require('mongoose')

/* Configurando o MongoDB */
    mongoose.Promise = global.Promise
    mongoose.connect('mongodb://localhost/aprendendo', {
        useMongoClient: true
    }).then(() => {
        console.log('MongoDB conectado')
    }).catch((err) => {
        console.log('Houve um erro ao se conectar ao MongoDB: ' + err)
    })

/* Models */
    // Definindo o model
    const UsuarioSchema = mongoose.Schema({
        nome: {
            type: String,
            require: true
        },
        sobrenome: {
            type: String,
            require:true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }
    })

    // Collection
    mongoose.model('usuarios', UsuarioSchema)

    const Eric = mongoose.model('usuarios')

    new Eric({
        nome: 'Eric',
        sobrenome: 'Satoshi',
        email: 'eric@gmail.com',
        idade: 20,
        pais: 'Brasil'
    }).save().then(() => {
        console.log('Criado com sucesso!')
    }).catch((err) => {
        console.log('Houve um erro ao registrar o usuário: ' + err)
    })