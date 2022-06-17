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


router.post('/invoice',async(req,res)=>{
    try {
        let data = await Invoice.create(req.body)
        if(data){
            res.json({
                status:200,
                message:'Created Invoice'
            })
        } 
    } catch (error) {
        res.json({
            status: 404,
            message: 'error',
            error:error
        })
    }
   
})


module.exports = router
