const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: String,
});

module.exports = {
  UserModel: mongoose.model('users', UserSchema),
};
