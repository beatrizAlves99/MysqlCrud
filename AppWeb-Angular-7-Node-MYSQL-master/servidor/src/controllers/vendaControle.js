const Venda = require("../models/venda");
const status = require("http-status");



exports.criarVenda = (req,res,next)=>{
    let venda = req.body;
    Venda.create(venda).then((novaVenda)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};


exports.listarVenda = (req,res,next)=>{
    Venda.findAll({attributes: ["id","data","cliente","vendedor",
    "cod_interno","item","cod_barras","unid","quantidade","vr_unitario","sub_total","desconto_porcento","desconto_reais","total",
    "observacao"]}).then((vendas)=>{
        res.status(status.OK).send(vendas);
    }).catch((error)=>{
        next(erro);
    });

};


exports.buscarUmVenda = (req,res,next)=>{
    let id = req.params.id;
    Venda.findByPk(id).then((venda)=>{
        if (venda){
            res.status(status.OK).send(venda);
        }else{
            res.status(status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirVenda = (req,res,next) => {
    let id = req.params.id;
    console.log(id);
    //let vendab = req.body;
    Venda.findByPk(id).then((venda)=>{        
        if (venda){
            Venda.destroy({ where: {id : id}}).then(()=>{
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

exports.atualizarVenda = (req,res,next)=>{
    let id = req.params.id;    
    let vendaBody = req.body;    
    if (!vendaBody || !id){
        res.status(status.NO_CONTENT).send();
    }else{
        Venda.findByPk(id).then((venda)=>{
            if (venda){               
                    Venda.update({data : vendaBody.data, cliente: vendaBody.cliente, vendedor: vendaBody.vendedor,
                     cod_interno: vendaBody.cod_interno, item: vendaBody.item, cod_barras: vendaBody.cod_barras, estoque: vendaBody.estoque,
                     unid: vendaBody.unid, quantidade: vendaBody.quantidade, vr_unitario: vendaBody.vr_unitario, sub_total: vendaBody.sub_total,
                     desconto_porcento: vendaBody.desconto_porcento, desconto_reais: vendaBody.desconto_reais,
                    total: vendaBody.total, observacao: vendaBody.observacao},{where : {id : id}}).then(()=>{
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