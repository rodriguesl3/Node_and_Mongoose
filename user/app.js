const http = require('http');
const Model = require('./model');

/* Creating a new User */
// const _userData = {
//     name:'Lucas Rodrigues'
// ,   password: '123321'
// ,   email: 'lucas@teste.com'
// };
// Model.create(_userData);

//getting user by name
let query = {name: /Lucas Rodrigues/i};
// Model.read(query);
//  Model.get(query);

 
//  Model.update(query, mod);
//   Model.delete(mod);

const User = {
    create: ()=>{
        const _userData = {
            name:'Lucas Rodrigues'
        ,   password: '123321'
        ,   email: 'lucas@teste.com'
        };
        Model.create(_userData);
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

http.createServer((req, res)=>{
    let msg = '';

    switch (req.url) {
        case '/api/user/create':
        User.create();
        msg='Usuário Cadastrado com sucesso.';
            break;
    
        case '/api/user/read':
        User.read();
        msg='Usuário Encontrado!!!';
            break;

        default:
        msg ='Rota não encontrada';
            break;
    }
    res.end(msg);
}).listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})


