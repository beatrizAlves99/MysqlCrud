const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/tarefaControle");

routers.get("/",controllers.listarTarefa);
routers.post("/",controllers.criarTarefa);
routers.get("/:id",controllers.buscarUmTarefa);
routers.delete("/:id", controllers.excluirTarefa);
routers.put("/:id", controllers.atualizarTarefa);


module.exports = routers;