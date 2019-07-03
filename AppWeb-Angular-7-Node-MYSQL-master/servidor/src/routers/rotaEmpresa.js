const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/empresaControle");

routers.get("/",controllers.listarEmpresa);
routers.post("/",controllers.criarEmpresa);
routers.get("/:id",controllers.buscarUmEmpresa);
routers.delete("/:id", controllers.excluirEmpresa);
routers.put("/:id", controllers.atualizarEmpresa);


module.exports = routers;