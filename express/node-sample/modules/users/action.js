'use strict';

const model = require('./model');

const callback = (err,data,res)=>{
 if(err) return console.log('ERRO: ',err);
 return res.json(data);
};

const Actions ={};

Actions.listar = (req,res)=>{
    const query = {};
    model.find(query,(err, data)=>{
        callback(err,data,res);
    });
};

Actions.consultar = (req,res)=>{
    const query = {_id: req.params.id};
    model.findOne(query,(err, data)=>{
        callback(err,data,res);
    });
};


Actions.alterar = (req,res)=>{
    const query = {_id: req.params.id};
    const body = req.body;
    model.update(query,body,(err, data)=>{
        callback(err,data,res);
    });
};


Actions.remover = (req,res)=>{
    const query = {_id: req.params.id};
    model.remove(query,(err, data)=>{
        callback(err,data,res);
    });
};


Actions.cadastrar =(req,res)=>{
 const body = req.body;
 var pokemon = new model(body);
    pokemon.save((err,data)=>{
        callback(err,data,res);
    });
};

module.exports = Actions;