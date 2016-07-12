const http = require('http');
const Controller = require('./user-controller');

http.createServer((req, res)=>{
    let msg = '';

    switch (req.url) {
        case '/api/user/create':
        Controller.create(req, res);
            break;
    
        case '/api/user/read':
        Controller.read();
        msg='Usuário Encontrado!!!';
            break;
            case '/api/user/update':
            Controller.update();
            res.end('Usuário Removido!!!');
            break;
        case '/api/user/remove':
            Controller.delete();
            res.end('Usuário Removido!!!');
            break;
        default:
        res.end('Rota não encontrada');
            break;
    }
    
}).listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})


