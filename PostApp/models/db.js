const Sequelize = require('sequelize')

/* Conexão com o banco de dados com o MySql */
const sequelize = new Sequelize(
    'postapp', 
    'root', 
    'toor', 
    {
        host: 'localhost', 
        dialect: 'mysql'
    }
)

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}