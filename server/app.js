const express = require('express');
const app = express();
const cors = require('cors')
const mongoose = require('mongoose')
// const morgan = require('morgan')
const SignupRoute = require('./api/routers/SignUp');
const LoginRoute = require('./api/routers/Login')


//DB Connection
mongoose.connect('mongodb://localhost:27017/restAPI')
.then(()=>{
    console.log("Connection successfull");
})
.catch((err)=>{
    console.log(err)
})

// app.use(morgan('dev'));
app.use(express.urlencoded({ extended : false}))
app.use(express.json())
app.use(cors())

//Routes

app.use('/signup',SignupRoute)
app.use('/login',LoginRoute)


//Error handling

app.use((req,res,next)=>{
    const error = new Error('Not found');
    error.status = 404
    next(error)
})
app.use((error,req,res,next)=>{
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }
    })
})


module.exports = app;