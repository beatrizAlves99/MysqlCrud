const Sequelize = require('sequelize');
const sequelize = require('../config/banco');

const Cliente = sequelize.define('cliente',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
},{tableName: 'cliente'});

Cliente.hasMany(require("./venda")); 

module.exports = Cliente;