const Model = require('./model');
const User = {
    create: Model.create
,   read:  Model.read
,   get: Model.get
,   update: Model.update
,   delete: Model.remove
};

module.exports = User;