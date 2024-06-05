const express = require('express');
const router = express.Router();
const User = require('../models/user')

router('/', (req,res,next)=>{
    const user = User.find()
})






module.exports = router