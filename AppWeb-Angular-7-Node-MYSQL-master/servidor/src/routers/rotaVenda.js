const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/vendaControle");

routers.get("/",controllers.listarVenda);
routers.post("/",controllers.criarVenda);
routers.get("/:id", controllers.buscarUmVenda);
routers.delete("/:id", controllers.excluirVenda);
routers.put("/:id", controllers.atualizarVenda);

module.exports = routers;