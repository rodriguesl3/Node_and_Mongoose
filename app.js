'use strict';
require('./db/config');
const CRUD = require('./pokemon-controller');

const query = {
            name:'Mongomon', 
            attack:{$gt:12}
        };

const squirtle ={
    name:'Squirtle',
    description:"Pokemon do tipo água",
    type:"Água",
    attack:88,
    defense:12,
    height:120
}

const charmander ={
    name:'Charmander',
    description:"Pokemon do tipo fogo",
    type:"Fogo",
    attack:90,
    defense:45,
    height:120
}

const charmillion = {
    name:'Charmillion',
    description:"Pokemon do tipo fogo",
    type:"Fogo",
    attack:222,
    defense:120,
    height:430
}

const options ={multi:true};


CRUD.readByType(charmillion);
//CRUD.create(charmillion);
//CRUD.read(data);
//CRUD.update(data, mod, options);
//CRUD.remove();
