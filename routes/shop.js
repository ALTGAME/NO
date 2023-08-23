const path = require('path');const express =require('express');

const router = express.Router();

router.get('/',(req, res, next)=>{

    console.log('In the another middleware!');
    res.sendFile('./Views/shop.html');
});

module.exports =router;