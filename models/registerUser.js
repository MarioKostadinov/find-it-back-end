var mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  firstName : String,
  surname   : String,
  email     : String,
  password  : String,
  month     : Number,
  day       : Number,
  year      : Number
});

module.exports = mongoose.model("User", userSchema);
