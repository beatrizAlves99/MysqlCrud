const Sequelize = require('sequelize');
const sequelize = require('../config/banco');

const ItemVenda = sequelize.define('itemvenda',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},    
    quantidade : { type : Sequelize.INTEGER }
},{tableName: 'itemvenda'});


module.exports = ItemVenda;