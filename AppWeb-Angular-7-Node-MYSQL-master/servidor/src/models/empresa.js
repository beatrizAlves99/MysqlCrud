const sequelize = require('sequelize');
const conSequelize = require('../config/banco');


const Empresa = conSequelize.define('empresa',{
    
    id: {type: sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    
    cnpj: {type: sequelize.INTEGER, allowNull: false },
    razao_social: {type: sequelize.STRING(255), allowNull: false, validate:{
        len: [2,255]
    }},
    nome_fantasia: {type: sequelize.STRING(255), allowNull: false, validate:{
        len: [2,255]
    }},
    cep: {type: sequelize.INTEGER, allowNull: false },
    logradouro: {type: sequelize.STRING(255), validate:{
        len: [2,255]
    }},
    numero: {type: sequelize.INTEGER, allowNull: false },
    complemento: {type: sequelize.STRING(255), validate:{
        len: [2,255]
    }},
    bairro: {type: sequelize.STRING(255), validate:{
        len: [2,255]
    }},
    municipio: {type: sequelize.STRING(255), validate:{
        len: [2,255]
    }},
    estado: {type: sequelize.STRING(255), validate:{
        len: [2,255]
    }},
    inscricao_estadual: {type: sequelize.INTEGER, allowNull: false },
    inscricao_municipal: {type: sequelize.INTEGER, allowNull: false },
    
    telefone: {type: sequelize.INTEGER, allowNull: false },
    celular: {type: sequelize.INTEGER, allowNull: false },
    site: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
    email: {type: sequelize.STRING(255), validate:{
        len:[2,255]
    }},
},{tableName: 'empresa'});

Empresa.hasMany(require("./produto")); 

const Fornecedor = require("./fornecedor");
Empresa.belongsToMany(Fornecedor, {through: 'EmpresaFornecedor'});
Fornecedor.belongsToMany(Empresa, {through: 'EmpresaFornecedor'});


module.exports = Empresa;