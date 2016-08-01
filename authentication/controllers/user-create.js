'use strict';

const User = require('../models/index');

function userHandler(req,res){
    const user = req.body;
    if(user.password === user.password2){
        delete user.password2;
        User.create(user).then(user=>{
            if(user){
                res.render('user-details',{
                    title:'user details',
                    user:user
                });
            }
        },
        err =>{
            createError(res,err);
        })
        .catch(err =>{
            createError(res,err);
        });
    }
    else{
        createError(res);
    }
}
module.exports = userHandler;

function createError(res,err){
    if(typeof err.code !== undefined && err.code === 11000){
        err = 'email in use, please use other email.';
    }
    res.render('error',{
        message:'that is not good',
        status:'FUUUUU',
        stack: 'something is wrong please, verify your code and try again later.'
    });
}