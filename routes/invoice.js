const express = require('express');
let router = express.Router();
let Complaint = require('../models/Invoice');



router.post('/invoice',(req,res)=>{
    
    res.json({
        message:'OK'
    })
})


module.exports = router