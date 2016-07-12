'use strict';

const mongoose = require('mongoose');
const Schema = require('./schema');
const User = mongoose.model('User', Schema);
const CRUD = {
    create:(obj)=>{
        User.create(obj, (err,data)=>{
            if(err) return console.log('Erro: ',err);
            return console.log('Inserido: ', data);
        });
    }
,   read:(query)=>{
        User.find(query,(err,data)=>{
           if(err) return console.log('Erro: ',err);
            return console.log('Encontrou: ', data);  
        });
}
,   get:(query)=>{
     User.findOne(query, (err,data)=>{
        if(err) return console.log('Erro: ',err);
        return console.log('Encontrou: ', data);  
     });
}
,   update:(query, mod)=>{
     User.update(query, mod, (err,data)=>{
        if(err) return console.log('Erro: ',err);
        return console.log('Alterados: ', data);  
     });
}
,   delete:(query)=>{
    User.remove(query, (err,data)=>{
        if(err) return console.log('Erro: ',err);
        return console.log('Removidos: ', data);  
     });

}
};

module.exports = CRUD;



// const u = new User(_userData);
// console.log(u.validateSync());