const _set = (v) => v.toLowerCase();
const _validate = (v) => /^\w+([\.-]?w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);

const _field ={

    type: String
// ,   get: _get
,   set: _set
,   validate: [_validate, '{{VALUE}} não é valido. Informe um email válido']
,   required: true

};

module.exports = _field;
