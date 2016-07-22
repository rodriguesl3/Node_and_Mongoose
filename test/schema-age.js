'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb:localhost/user-tdd');

const greaterThanEighteen = age => age>=18;

const userSchema = new Schema({
    age:{
        type:Number
    ,   validate:{
            validator: greaterThanEighteen
        ,   message:'{{VALUE}} anos não é permitida!'
        }
    }
});

module.exports = mongoose.model('user',userSchema);