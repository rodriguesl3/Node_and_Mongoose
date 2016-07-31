const _get = (v) => v.toUpperCase();
const _set = (v) => v.toLowerCase();
const _validate = (v) => v.length > 3;

const _field = {
    type:String
,   get: _get
,   set: _set
,   validate: [_validate, 'Nome deve ser maior que 3']
,   required: true
,   index: true
};
module.exports = _field;