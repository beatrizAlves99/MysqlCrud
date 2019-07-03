const Fornecedor = require("../models/fornecedor");
const status = require("http-status");

exports.criarFornecedor = (req,res,next)=>{
    let fornecedor = req.body;
    Fornecedor.create(fornecedor).then((novoForn)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.listarFornecedor = (req,res,next)=>{
    Fornecedor.findAll({attributes: ["id", "nome"]}).then((fornecedores)=>{
        res.status(status.OK).send(fornecedores);
    }).catch((erro)=>{
        next(erro);
    });
};

exports.buscarUmFornecedor = (req, res, next)=>{
    let id = req.params.id;
    Fornecedor.findByPk(id).then((Fornecedor)=>{
        if(fornecedor){
            res.status(status.OK).send(fornecedor);
        }else {
            res.status(status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirFornecedor = (req, res, nex) =>{
    let id = req.params.id;
    Fornecedor.findByPk(id).then((fornecedor)=>{
        if(fornecedor){
            Fornecedor.destroy({where : {id:id}}).then(()=>{
                res.status(status.OK).send();
            }).catch((erro)=>{
                next(erro);
            });
        }else{
            res.status(status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.atualizarFornecedor = (req,res,next)=>{
    let id = req.params.id;
    let FornecedorBody = req.body;
    if(!FornecedorBody || id){
        res.status(status.NO_CONTENT).send();
    }else{
        Fornecedor.findByPk(id).then((fornecedor)=>{
            if(fornecedor){
                Fornecedor.update({nome: FornecedorBody.nome}, {where: {id:id}}).then(()=>{
                    res.status(status.OK).send();
                }).catch((erro)=>{
                    next(erro);
                });
            }else{
                res.status(status.NOT_FOUND).send();
            }
        }).catch((erro)=>{
            next(erro);
        });
    }
};