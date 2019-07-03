const Sequelize = require('sequelize');
const sequelize = require('../config/banco');

const Contato = sequelize.define('contato',{
    id: { type : Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  
    nome_fantasia: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    razao_social: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    cep: { type: Sequelize.INTEGER, allowNull: false},
    logradouro: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    logradouro: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    numero: { type: Sequelize.INTEGER, allowNull: false},
    complemento: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    bairro: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    municipio: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    estado: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    telefone: { type: Sequelize.INTEGER, allowNull: false},
    celular: { type: Sequelize.INTEGER, allowNull: false},
    email: { type: Sequelize.STRING(255), allowNull: false, validate: {
        len: [2, 255]
    }},
    
},{tableName: 'contato'});

Contato.hasMany(require("./cliente")); 

module.exports = Contato;
