// não finalizado

const Empresa = require("../models/empresa");
const status = require("http-status");
const mysql = require('../config/banco');


exports.criarEmpresa = (req,res,next)=>{
    let empresa = req.body;
    Empresa.create(empresa).then((novoEmpresa)=>{
       res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};




exports.listarEmpresa = (req,res,next)=>{
    Empresa.findAll({attributes: ["id","cnpj","razao_social","nome_fantasia","cep","logradouro","numero","complemento","bairro","municipio","estado","inscricao_estadual","inscricao_municipal", "telefone","celular","site","email"]})
    .then((empresas)=>{
        res.status(status.OK).send(empresas);
    }).catch((erro)=>{
        next(erro);
    });
};


exports.buscarUmEmpresa = (req,res,next)=>{
    let id = req.params.id;
    Empresa.findByPk(id).then((empresa)=>{
        if (empresa){
            res.status(status.OK).send(empresa);
        }else{
            res.status(status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
    });
};

exports.excluirEmpresa = (req,res,next) => {
    let id = req.params.id;
    console.log(id);
    //let empresab = req.body;
    Empresa.findByPk(id).then((empresa)=>{        
        if (empresa){
            Empresa.destroy({ where: {id : id}}).then(()=>{
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

exports.atualizarEmpresa = (req,res,next)=>{
    let id = req.params.id;    
    let empresaBody = req.body;    
    if (!empresaBody || !id){
        res.status(status.NO_CONTENT).send();
    }else{
        Empresa.findByPk(id).then((empresa)=>{
            if (empresa){

                Empresa.update({cnpj: empresaBody.cnpj, razao_social: empresaBody.razao_social, nome_fantasia: empresaBody.nome_fantasia, cep: empresaBody.cep,logradouro:empresaBody.logradouro,numero:empresaBody.numero, complemento:empresaBody.complemento, bairro: empresaBody.bairro, municipio:empresaBody.municipio, estado:empresaBody.estado, inscricao_estadual:empresaBody,inscricao_municipal:empresaBody.inscricao_municipal, telefone:empresaBody.telefone, celular:empresaBody.celular, site:empresaBody.site, email:empresaBody.email
                },{where : {id : id}}).then(()=>{
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