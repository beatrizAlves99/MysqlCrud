const Produto = require("../models/produto");
const status = require("http-status");

exports.criarProduto = (req,res,next)=>{
    let produto = req.body;
    Produto.create(produto).then((novoProduto)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.listarProduto = (req,res,next)=>{
    Produto.findAll({attributes: ["id", "cod_barras","nome","descricao","unid","vr_compra","vr_venda","estoque","lucro","ncm","peso_bruto","peso_liq","observacao"]}).then((produtos)=>{
        res.status(status.OK).send(produtos);
    }).catch((erro)=>{
        next(erro);
    });
};



exports.buscarProduto = (req,res,next)=>{
    let id = (req.params.id);
    Produto.findByPk(id).then((produto)=>{
        if (produto){
            res.status(Status.OK).send(produto);
        }else{
            res.status(Status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirProduto = (req,res,next) => {
    let id = (req.params.id);
    Produto.findByPk(id).then((produto)=>{        
        if (produto){
            Produto.destroy({ where: {id : id}}).then(()=>{
                res.status(Status.OK).send();
            }).catch((erro)=>{
                next(erro);
            });
        }else{
            res.status(Status.NOT_FOUND).send();
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.atualizarProduto = (req,res,next)=>{
    let id = (req.params.id);    
    let produtoBody = req.body;    
    if (!produtoBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Produto.findByPk(id).then((produto)=>{
            if (produto){

                Produto.update({cod_barras: produtoBody.cod_barras, nome: produtoBody.nome, descricao: produtoBody.descricao, unid: produtoBody.unid, vr_compra: produtoBody.vr_compra, vr_venda: produtoBody.vr_venda, estoque: produtoBody.estoque,lucro: produtoBody.lucro,ncm: produtoBody.ncm,peso_bruto: produtoBody.peso_bruto, peso_liq: produtoBody.peso_liq,observacao: produtoBody.observacao},
                    {where : {id : id}}).then(()=>{
                    res.status(Status.OK).send();
                }).catch((erro)=>{
                    next(erro);
                });
            }else{
                res.status(Status.NOT_FOUND).send();
            }
        }).catch((erro)=>{
            next(erro);
        });
    }
};