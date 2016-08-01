'use strict';

const express = require('express');
const router = express.Router();
const Actions = require('./action');
router.post('/pokemon', Actions.cadastrar);
router.get('/pokemon', Actions.listar);
router.get('/pokemon/:id', Actions.consultar);
router.put('/pokemon/:id', Actions.alterar);
router.delete('/pokemon/:id', Actions.remover);

module.exports = router;