'use strict';

const mongoose = require('mongoose');
const Schema = require('./schema');
const queryString = require('querystring');
const url = require('url');
const User = mongoose.model('User', Schema);
const CRUD = {
    create:(req, res)=>{
       let queryData = '';
       req.on('data',(data)=>{
           queryData += data;
       });

       req.on('end',()=>{
           const obj = queryString.parse(queryData);
           User.create(obj,(err,data)=>{
               if(err){
                    res.writeHead(500, {'Content-Type':'application/json'});
                    return res.end(JSON.stringify(err));
               } 
               
               res.writeHead(200, {'Content-Type':'application/json'});
               return res.end(JSON.stringify(data));
           });
       });

    }
,   read:(req,res)=>{
        const query ={};
        User.find(query,(err,data)=>{
           if(err) return console.log('Erro: ',err);
            res.writeHead(200,{'Content-Type':'application/json'});
            return res.end(JSON.stringify(data));
        });
    }
,   get:(query)=>{
        User.findOne(query, (err,data)=>{
            if(err) return console.log('Erro: ',err);
            return console.log('Encontrou: ', data);  
        });
    }
,   update:(req, res)=>{
        let queryData = '';
        
        req.on('data',(data)=>{
            queryData += data;
        });

        req.on('end', ()=>{
            const mod = queryString.parse(queryData);
            const url_parts = url.parse(req.url);
            const query = queryString.parse(url_parts.query);

            User.update(query, mod, (err, data)=>{
                if(err) return console.log('Erro: ',err);

                res.writeHead(200, {'Content-Type':'application/json'});
                return res.end(JSON.stringify(data));
            });
        }); 
    }
,   delete:(req, res)=>{
        const url_parts = url.parse(req.url);
        const query = queryString.parse(url_parts.query);

        User.remove(query, (err,data)=>{
            if(err) return console.log('Erro: ',err);

            res.writeHead(200, {'Content-Type':'application/json'});
            return res.end(JSON.stringify(data));  
        });
    }
};

module.exports = CRUD;



// const u = new User(_userData);
// console.log(u.validateSync());