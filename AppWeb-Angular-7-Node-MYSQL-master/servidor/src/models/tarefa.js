const Sequelize = require('sequelize');
const sequelize = require('../config/banco');

const Tarefa = sequelize.define('tarefa',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    descricao: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
},{tableName: 'tarefa'});

Tarefa.hasMany(require("./venda")); 

module.exports = Tarefa;