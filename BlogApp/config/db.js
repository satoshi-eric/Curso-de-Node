if (process.env.NODE_ENV == 'production') {
    module.exports = {mongoURI: 'mongodb+srv://ericsatoshi:satoshi123@cluster0.90zbv.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-q3nlyl-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true'}
} else {
    module.exports = {mongoURI: 'mongodb://localhost/blogapp'}
}