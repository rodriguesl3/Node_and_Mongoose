const _validate = (v) => v.length > 3 && v.length < 10;

const _field = {
    type:String
,   validate: [_validate, 'Password deve ser entre 3 e 10 caractéres']
,   required: true
,   index: true
};
module.exports = _field;