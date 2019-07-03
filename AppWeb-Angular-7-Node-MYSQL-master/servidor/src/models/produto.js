const sequelize = require('sequelize');
const conSequelize = require('../config/banco');


const Produto = conSequelize.define('produto',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    cod_barras: {type: sequelize.INTEGER, allowNull: false},
    nome: {type: sequelize.STRING(255), allowNull: false,validate:{
        len: [2, 255]
    }},
    descricao: {type: sequelize.STRING(255), allowNull: false,validate:{
        len: [2, 255]
    }},
    unid: {type: sequelize.INTEGER, allowNull: false},  
    vr_compra: {type: sequelize.FLOAT, allowNull: false},
    vr_venda: {type: sequelize.FLOAT, allowNull: false},
    estoque: {type: sequelize.INTEGER, allowNull: false},
    lucro: {type: sequelize.FLOAT, allowNull: false},
    ncm: {type: sequelize.INTEGER, allowNull: false},
    peso_bruto: {type: sequelize.INTEGER, allowNull: false},
    peso_liq: {type: sequelize.INTEGER, allowNull: false},
    observacao: {type: sequelize.STRING(255), allowNull: false,validate:{
        len: [2, 255]
    }},
},{tableName: 'produto'});

Produto.hasMany(require("./ItemVenda"));

module.exports = Produto;
