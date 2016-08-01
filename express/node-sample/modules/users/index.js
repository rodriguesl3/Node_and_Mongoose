'use strict';
const router = require('./routerExpress');
const actions = require('./action')
const Routes = require('./routes')(actions);
const Router = require('./routesExpress')(Routes, router);

module.exports = Router;