const express = require('express');
let router = express.Router();
let Invoice = require('../models/Invoice');


router.get('/invoice',async(req,res)=>{
    
    let data = await Invoice.create(req.body)
    if(data){
        res.json({
            message:'Created Invoice'
        })
    }
   
})


router.post('/invoice',(req,res)=>{
    
    let data = await Invoice.create(req.body)
    if(data){
        res.json({
            message:'Created Invoice'
        })
    }
})


module.exports = router
