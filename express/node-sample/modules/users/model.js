'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _name = require('../../../../Mongoose/fields/name');
const _description = require('../../../../Mongoose/fields/description');
const _type = require('../../../../Mongoose/fields/type');
const _attack = require('../../../../Mongoose/fields/attack');
const _defense = require('../../../../Mongoose/fields/defense');
const _height = require('../../../../Mongoose/fields/height');
const _created_at = require('../../../../Mongoose/fields/created_at');

var _schema = {
    name:_name,
    description:_description,
    type:_type,
    attack:_attack,
    defense:_defense,
    height:_height,
    created_at:_created_at
};
const pokemonSchema = new Schema(_schema);
module.exports = mongoose.model('Pokemon',pokemonSchema);