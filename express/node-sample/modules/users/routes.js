'use strict';

const express = require('express');
const router = express.Router();
const model = require('./model');


const callback = (err,data,res)=>{
 if(err) return console.log('ERRO: ',err);
 console.log(data);
 return res.json(data);
};

router.post('/pokemon',(req,res)=>{
 const body = req.body;
 console.log(body);
 var pokemon = new model(body);
    pokemon.save((err,data)=>{
        callback(err,data,res);
    });
});

router.get('/pokemon',(req,res)=>{
    const query = {};
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