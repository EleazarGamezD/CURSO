const mongoose = require ('mongoose');

const User = mongoose.model ('User', {
  email: {type: String, require: true},
  password: {type: String, require: true},
  salt: {type: String, require: true},
});

module.exports = User;
