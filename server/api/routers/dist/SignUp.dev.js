"use strict";

var express = require('express');

var router = express.Router();

var mongoose = require('mongoose');

var User = require('../models/user');

router.post('/', function (req, res, next) {
  var user = User.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  });
  res.status(200).json({
    message: "Saved User in DB",
    user: user
  });
});
module.exports = router;
//# sourceMappingURL=SignUp.dev.js.map
