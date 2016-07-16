const http = require('http');
const url = require('url');
const Controller = require('./user-controller');


http.createServer((req, res)=>{
    let msg = '';
    const url_parts = url.parse(req.url);


    switch (url_parts.pathname) {
        case '/api/user/create':
        Controller.create(req, res);
            break;
    
        case '/api/user/read':
        Controller.read(req,res);
       
            break;
        case '/api/user/update':
        Controller.update(req, res);       
            break;
        case '/api/user/remove':
            Controller.delete(req, res);
            break;
        default:
        res.end('Rota não encontrada');
            break;
    }
    
}).listen(3000, ()=>{
    console.log('Servidor rodando na porta 3000');
})


