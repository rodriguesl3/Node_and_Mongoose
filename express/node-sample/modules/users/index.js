'use strict';
const router = require('./routerExpress');
const Routes = require('./routes');
const Router = require('./routesExpress')(Routes, router);

module.exports = Router;