const Model = require('./model');
const User = {
    create: (req, res)=>{
        // const _userData = {
        //     name:'Lucas Rodrigues'
        // ,   password: '123321'
        // ,   email: 'lucas@teste.com'
        // };
        Model.create(req, res);
    }
,   read:   (req,res)=>{
        let query = {name: /Lucas Rodrigues/i};
        Model.read(req,res);
    }
,   update: (req, res)=>{
        // let query = {name: /Lucas Rodrigues/i};
        // const mod = {name: 'Rodrigues Souza'};
        Model.update(req, res);
    }
,   delete: (req, res)=>{
        //let query = {name: /Lucas Rodrigues/i};
        Model.delete(req, res);
    }
};

module.exports = User;