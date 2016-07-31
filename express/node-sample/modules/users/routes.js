const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.render('index',{title: 'Lucas Rodrigues'});
});
router.get('/json',(req,res)=>{
    res.json({title: 'Lucas Rodrigues'});
});


module.exports = router;