const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/prondutoControle");

routers.get("/",controllers.listarProduto);
routers.post("/",controllers.criarProduto);
routers.get("/:id",controllers.buscarProduto);
routers.delete("/:id", controllers.excluirProduto);
routers.put("/:id", controllers.atualizarProduto);

module.exports = routers;