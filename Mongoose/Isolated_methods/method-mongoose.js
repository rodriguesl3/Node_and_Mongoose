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
const PokemonSchema = new Schema(_schema);

PokemonSchema.methods.findByType = function(pk) {
    return this.model('Pokemon').find({type:this.type}, pk);
};

const Pokemon = mongoose.model('Pokemon', PokemonSchema);
const poke = new Pokemon({name:'Squirtle', type:'Água'});


poke.findByType((err, data)=>{
    if(err) return console.log('Erro:',err);
    return data.forEach((pokemon)=>console.log('pokemon: ',pokemon))
});

// poke
// .findByType()
// .where('defense').gt('80')
// .limit(4)
// .exec(function(err,data){
//     if(err)return console.log('Erro: ', err);
//     return data.forEach((pokemon)=>console.log('Pokemon: ',pokemon));
// })


