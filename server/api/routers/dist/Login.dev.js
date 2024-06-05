"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/user');

router.post('/', function _callee(req, res, next) {
  var _req$body, email, password, user;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _req$body = req.body, email = _req$body.email, password = _req$body.password;
          User.findOne({
            email: email
          }).then(function (user) {
            if (user) {
              if (user.password === password) {
                console.log("Password matched and logged in");
              } else {
                console.log("Passwords did not match");
              }
            } else {
              console.log("No user exist on this email ID");
            }
          });
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 5:
          user = _context.sent;

          if (user) {
            //   console.log('User found:', user);
            res.json({
              success: true,
              user: user
            });
          } else {
            console.log('User not found');
            res.json({
              success: false,
              message: 'Invalid email'
            });
          }

          _context.next = 13;
          break;

        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](2);
          console.error('Error during login:', _context.t0);
          res.status(500).json({
            success: false,
            message: 'Internal Server error'
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 9]]);
});
module.exports = router;
//# sourceMappingURL=Login.dev.js.map
