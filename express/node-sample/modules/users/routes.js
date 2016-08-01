'use strict';

const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _schema = {
    name: String
};
const pokemonSchema = new Schema(_schema);
const model = mongoose.model('Pokemon',pokemonSchema);

const query = {};
const callback = (err,data,res)=>{
 if(err) return console.log('ERRO: ',err);
 console.log(data);
 return res.json(data);
};


router.get('/pokemon',(req,res)=>{
    model.find(query,(err, data)=>{
        callback(err,data,res);
    });
});
router.get('/',(req,res)=>{
    res.render('index',{title: 'Lucas Rodrigues'});
});
router.get('/json',(req,res)=>{
    res.json({title: 'Lucas Rodrigues'});
});








module.exports = router;