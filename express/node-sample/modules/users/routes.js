'use strict';
const Actions = require('./action'); 

var Routes = [
    {
        method:'post',
        path:'/pokemon',
        action: Actions.cadastrar
    },
    {
        method:'get',
        path:'/pokemon',
        action:Actions.listar
    },
    {
        method:'get',
        path:'/pokemon/:id',
        action:Actions.consultar
    },
    {
        method:'put',
        path:'/pokemon/:id',
        action:Actions.alterar
    },
    {
        method:'delete',
        path: '/pokemon/:id',
        action: Actions.remover
    }
]


module.exports = Routes;