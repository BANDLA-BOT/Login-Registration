"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/user');

router('/', function (req, res, next) {
  var user = User.find();
});
module.exports = router;
//# sourceMappingURL=getUser.dev.js.map
