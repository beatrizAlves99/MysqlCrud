
const Tarefa = require("../models/tarefa");
const status = require("http-status");

exports.criarTarefa = (req,res,next)=>{
    let tarefa = req.body;
    Tarefa.create(tarefa).then((novoTarefa)=>{
        res.status(status.CREATED).send();
    }).catch((erro)=>{
        next(erro);
    });
};

exports.listarTarefa = (req,res,next)=>{
    Tarefa.findAll({attributes: ["id", "descricao"]}).then((tarefas)=>{
        res.status(status.OK).send(tarefas);
    }).catch((erro)=>{
        next(erro);
    });
};


exports.buscarUmTarefa = (req,res,next)=>{
    //let id = req.params.id;
    Tarefa.findByPk(req.params.id).then((tarefa)=>{
        if (tarefa){
            res.status(status.OK).send(tarefa);
        }else{
            res.status(status.NOT_FOUND).send();     
        }
    }).catch((erro)=>{
        next(erro);
        console.log("Ocorreu um erro");
    });
};



exports.excluirTarefa = (req,res,next) => {
    let id = (req.params.id);
    Tarefa.findByPk(id).then((tarefa)=>{        
        if (tarefa){
            Tarefa.destroy({ where: {id : id}}).then(()=>{
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

exports.atualizarTarefa = (req,res,next)=>{
    let id = (req.params.id);    
    let tarefaBody = req.body;    
    if (!tarefaBody || !id){
        res.status(Status.NO_CONTENT).send();
    }else{
        Tarefa.findByPk(id).then((tarefa)=>{
            if (tarefa){
                Tarefa.update({descricao: tarefaBody.descricao},{where : {id:id}}).then(()=>{
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