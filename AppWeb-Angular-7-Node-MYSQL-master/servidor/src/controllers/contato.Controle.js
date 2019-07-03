// não finalizado

const Contato = require("../models/contato");
const status = require("http-status");

exports.criarContato = (req,res,next)=>{
    let contato = req.body;
    Contato.create(contato).then((novoContato)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.listarContato = (req,res,next)=>{
    Contato.findAll({attributes: ["id","nome_fantasia", "razao_social", "cep", "logradouro", "numero", "complemento", 
    "bairro",  "municipio",  "estado", "telefone", "celular", "email"]}).then((contatos)=>{
        res.status(status.OK).send(contatos);
    }).catch((erro)=>{
        next(erro);
    });
};


exports.buscarUmContato = (req,res,next)=>{
    let id = req.params.id;
    Contato.findByPk(id).then((contato)=>{
        if (contato){
            res.status(Status.OK).send(contato);
        }else{
            res.status(Status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirContato = (req,res,next) => {
    let id = req.params.id;
    Contato.findByPk(id).then((contato)=>{        
        if (contato){
            Contato.destroy({ where: {id : id}}).then(()=>{
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

exports.atualizarContato = (req,res,next)=>{
    let id = req.params.id;    
    let contatoBody = req.body;    
    if (!contatoBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Contato.findByPk(id).then((contato)=>{
            if (contato){
                Contato.update({nome_fantasia: contatoBody.nome_fantasia, razao_social: contatoBody.razao_social, cep: contatoBody.cep, logradouro: contatoBody.logradouro, numero: contatoBody.numero, complemento: contatoBody.complemento, bairro: contatoBody.bairro, municipio: contatoBody.municipio, estado: contatoBody.estado, telefone: contatoBody.telefone, celular: contatoBody.celular,email: contatoBody.email
            },{where : {id : id}}).then(()=>{
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