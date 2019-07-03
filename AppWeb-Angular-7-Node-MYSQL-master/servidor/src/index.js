const express = require('express');
const status = require('http-status');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();
//Controlle e rotas
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/", require("./routers/route"));
app.use("/contatos", require("./routers/rotaContato"));
app.use("/empresas", require("./routers/rotaEmpresa"));
app.use("/produtos",require("./routers/rotaProduto"));
app.use("/tarefas", require("./routers/rotaTarefa"));
app.use("/vendas", require("./routers/rotaVenda"));
//app.use("/fornecedor", require("./routers/rotaFornecedor"));

const cliente = require("./models/cliente");
const vendedor = require("./models/vendedor");
app.use((req,res,next)=>{
    res.status(status.NOT_FOUND).send();
});
app.use((error,req,res,next)=>{
    console.log(error);
    res.status(status.INTERNAL_SERVER_ERROR).json({error});
});


//conexão com o banco e subindo o servidor
const sequilize = require('./config/banco');
sequilize.sync({force:false}).then(()=>{
    app.listen(3000, ()=>{
        console.log("Está Funcionando");
        
    });
}).catch((error)=>{
    console.log(erro);
});