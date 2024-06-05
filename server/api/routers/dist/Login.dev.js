"use strict";

var express = require('express');

var router = express.Router();

var User = require('../models/user');

router.post('/', function _callee(req, res, next) {
  var email, user;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          email = req.body.email;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(User.findOne({
            email: email
          }));

        case 4:
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

          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          console.error('Error during login:', _context.t0);
          res.status(500).json({
            success: false,
            message: 'Server error'
          });

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
});
module.exports = router;
//# sourceMappingURL=Login.dev.js.map
