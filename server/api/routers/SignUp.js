const express = require('express');
const router = express.Router()
const mongoose = require('mongoose')
const User = require('../models/user')



router.post('/', (req,res,next)=>{
    const user = User.create({
        username:req.body.username,
        email:req.body.email, 
        password:req.body.password,
    })
    res.status(200).json({
        message:"Saved User in DB",
        user: user
    })
})

module.exports = router