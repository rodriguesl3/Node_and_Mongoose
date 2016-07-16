'use strict';
const mongoose = require('mongoose');
const Schema = require('./schema');
const queryString = require('querystring');
const url = require('url');
const User = mongoose.model('User', Schema);
const callback = (err,data,res)=>{
        if(err){
            res.writeHead(500, {'Content-Type':'application/json'});
            return res.end(JSON.stringify(err));
        }
        res.writeHead(200, {'Content-Type':'application/json'});
        return res.end(JSON.stringify(data));
};
const getQuery = (path)=>{
    const url_parts = url.parse(path);
    return queryString.parse(url_parts.query);
};

const create = (req, res)=>{
    let queryData = '';
    req.on('data',(data)=>{
        queryData += data;
    });

    req.on('end',()=>{
        const obj = queryString.parse(queryData);
        User.create(obj,(err,data)=>callback(err,data,res));
    });

};

const read =(req,res)=>{
    const query = getQuery(req.url);
    User.find(query,(err,data)=>callback(err,data,res));
};

const get =(req,res)=>{
    const query = getQuery(req.url);
    User.findOne(query, (err,data)=>callback(err,data,res));
};

const update = (req, res)=>{
    let queryData = '';        
    req.on('data',(data)=>{
        queryData += data;
    });

    req.on('end', ()=>{
        const mod = queryString.parse(queryData);
        const query = getQuery(req.url);
        User.update(query, mod, (err, data)=>callback(err,data,res));
    }); 
};

const remove = (req, res) => {
        const query = getQuery(req.url);
        User.remove(query, (err,data)=>callback(err,data,res));
};


const CRUD = {
    create
,   read
,   get
,   update
,   remove
};

module.exports = CRUD;