const sequelize = require('sequelize');
const conSequelize = require('../config/banco');
const Venda = conSequelize.define('venda',{
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    data: { type: sequelize.INTEGER, allowNull: false},
    cliente: { type: sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    vendedor: { type: sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    cod_interno: { type: sequelize.INTEGER, allowNull: false},
    item: { type: sequelize.INTEGER, allowNull: false},
    cod_barras: { type: sequelize.INTEGER, allowNull: false},
    unid: { type: sequelize.FLOAT, allowNull: false},
    quantidade: { type: sequelize.INTEGER, allowNull: false},
    vr_unitario: { type: sequelize.INTEGER, allowNull: false},
    sub_total: { type: sequelize.FLOAT, allowNull: false},
    desconto_porcento: { type: sequelize.FLOAT, allowNull: false},
    desconto_reais: { type: sequelize.FLOAT, allowNull: false},
    total: { type: sequelize.FLOAT, allowNull: false},
    observacao: { type: sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 

},{tableName: 'venda'});

Venda.hasMany(require("./ItemVenda"));

module.exports = Venda;
