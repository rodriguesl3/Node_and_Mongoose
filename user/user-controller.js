const Model = require('./model');
const User = {
    create: (req, res)=>{
        Model.create(req, res);
    }
,   read:   (req,res)=>{
        Model.read(req,res);
    }
,   get: (req,res)=>{
        Model.get(req, res);    
    }
,   update: (req, res)=>{
        Model.update(req, res);
    }
,   delete: (req, res)=>{
        Model.delete(req, res);
    }
};

module.exports = User;