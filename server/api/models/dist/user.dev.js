"use strict";

var mongoose = require('mongoose');

var _require = require('mongoose'),
    Schema = _require.Schema;

var userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('user', userSchema);
//# sourceMappingURL=user.dev.js.map
