"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

var mongoose = require('mongoose'); // const morgan = require('morgan')


var SignupRoute = require('./api/routers/SignUp');

var LoginRoute = require('./api/routers/Login'); //DB Connection


mongoose.connect('mongodb://localhost:27017/restAPI').then(function () {
  console.log("Connection successfull");
})["catch"](function (err) {
  console.log(err);
}); // app.use(morgan('dev'));

app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());
app.use(cors()); //Routes

app.use('/signup', SignupRoute);
app.use('/login', LoginRoute); //Error handling

app.use(function (req, res, next) {
  var error = new Error('Not found');
  error.status = 404;
  next(error);
});
app.use(function (error, req, res, next) {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});
module.exports = app;
//# sourceMappingURL=app.dev.js.map
