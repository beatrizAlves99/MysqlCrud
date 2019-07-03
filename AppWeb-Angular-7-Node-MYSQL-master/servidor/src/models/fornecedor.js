const sequelize = require('sequelize');
const conSequelize = require('../config/banco');


const Fornecedor = conSequelize.define('fornecedor',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    nome: {type: sequelize.STRING(255), allowNull: false, validate:{
        len: [2,255]
    }},
},{tableName: 'fornecedor'});

module.exports = Fornecedor;