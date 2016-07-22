'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema({
    email:require('../fields/email')
});

module.exports = mongoose.model("Users", userSchema);