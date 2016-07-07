'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _name = require('./fields/name');
const _description = require('./fields/description');
const _type = require('./fields/type');
const _attack = require('./fields/attack');
const _defense = require('./fields/defense');
const _height = require('./fields/height');
const _created_at = require('./fields/created_at');

var _schema = {
    name:_name,
    description:_description,
    type:_type,
    attack:_attack,
    defense:_defense,
    height:_height,
    created_at:_created_at
};
module.exports = new Schema(_schema);