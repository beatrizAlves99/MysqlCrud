const express = require("express");
const routers = express.Router();
const controllers = require("../controllers/fornecedorControle");

routers.get("/",controllers.listarFornecedor);
routers.get("/:id",controllers.buscarUmFornecedor);
routers.post("/",controllers.criarFornecedor);
routers.delete("/:id", controllers.excluirFornecedor);
routers.put("/:id", controllers.atualizarFornecedor);

module.exports = routers;