'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/mongoose-user');

const _schema = new Schema({
    name:require('../fields/name')
,   password:require('../fields/password')
,   email: require('../fields/email')
,   type: require('../fields/type')
,   created_at: require('../fields/created_at')
});



module.exports = mongoose.model('UserModel', _schema);