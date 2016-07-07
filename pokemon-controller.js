'use strict';

require('./db/config');
const mongoose = require('mongoose');
const Schema = require('./schema');
Schema.methods.findByType = function(pk) {
    return this.model('Pokemon').find({type:this.type}, pk);
};

const PokemonModel = require('./model')(Schema, 'Pokemon');



var CRUD = {
    create:function(data){
       const Mongomon = new PokemonModel(data);
        Mongomon.save(function(err,data){
            if (err)return console.log('Erro: ',err);
            return console.log('Inseriu: ',data);
        });
    },
    readByType:function(data){
        const pokemon = new PokemonModel(data);
   
        return pokemon
            .findByType()
            .where('defense').gt(50)
            .limit(3)
            .exec((err,data)=>{
                if(err)return console.log('Erro: ',err);
                return data.forEach((pokemon)=>console.log('pokemon', pokemon));
            })
    },
    read:function(query){
        
        PokemonModel.find(query,function(err,data){
            if(err)return console.log('Erro: ',err);
            return console.log('Buscou: ',data);
        })
    },
    update:function(query, mod, options){
        var options = options || {multi:true};
        PokemonModel.update(query, mod, options, function(err,data){
            if(err) return console.log('Erro: ',err);
            return console.log('Alterou: ', data);
        })
    },
    remove:function(query){
        
        PokemonModel.remove(query, function(err,data){
            if (err) return console.log('Erro: ',err);
            return console.log('Deletou: ',data);
        })
    },
};

module.exports = CRUD;