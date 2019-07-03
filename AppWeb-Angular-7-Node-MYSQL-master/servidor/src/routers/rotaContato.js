const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/contato.Controle");

routers.get("/",controllers.listarContato);
routers.post("/",controllers.criarContato);
routers.get("/:id",controllers.buscarUmContato);
routers.delete("/:id", controllers.excluirContato);
routers.put("/:id", controllers.atualizarContato);

module.exports = routers;