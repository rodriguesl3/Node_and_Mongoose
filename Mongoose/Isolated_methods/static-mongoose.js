const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/crud-mongoose');

const _schema ={
    name:String
,   description:String
,   type:String
,   attack:Number
,   defense:Number
,   height:Number
};

Schema.statics.search = function(name, cb){
    return this.where('name',new RegExp(name,'i')).exec(cb);
};

const PokemonSchema = new Schema(_schema);
const PokemonModel = mongoose.model('Pokemon', PokemonSchema);

PokemonModel.search(name, function(err,data){
            if(err) return console.log('Erro: ',err);
            return data.forEach((pokemon)=>console.log('Pokemon: ',pokemon));
        });
