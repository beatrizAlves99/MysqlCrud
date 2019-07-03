const Sequelize = require('sequelize');
const sequelize = require('../config/banco');

const Vendedor = sequelize.define('vendedor',{
    cod_tarefa: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    descricao: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
},{tableName: 'Vendedor'});

Vendedor.hasMany(require("./venda")); 

module.exports = Vendedor;