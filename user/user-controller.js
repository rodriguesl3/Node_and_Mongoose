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
,   read:   ()=>{
        let query = {name: /Lucas Rodrigues/i};
        Model.read(query);
    }
,   update: ()=>{
        let query = {name: /Lucas Rodrigues/i};
        const mod = {name: 'Rodrigues Souza'};
        Model.update(query,mod);
    }
,   delete: ()=>{
        let query = {name: /Lucas Rodrigues/i};
        Model.delete(query);
    }
};

module.exports = User;