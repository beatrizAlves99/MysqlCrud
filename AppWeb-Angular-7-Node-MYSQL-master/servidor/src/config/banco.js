const sequilize = require('sequelize');

const sequelizeconexion = new sequilize("dbpdv", "root","", {
    host : "localhost",
    dialect : "mysql",
    port : 3306,
});

module.exports = sequelizeconexion;