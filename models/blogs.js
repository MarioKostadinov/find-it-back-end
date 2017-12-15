let mongoose = require("mongoose"),
    Users    = require("./users");

let blogSchema = new mongoose.Schema({
  _id      : mongoose.Schema.Types.ObjectId,
  authorId : { type: mongoose.Schema.ObjectId, ref: 'User'},
  title    : String,
  authorName: String,
  thumbnail: String,
  topic    : String,
  date     : Date,
  body     : String,
  views    : Number,
  comments : Array
});

module.exports = mongoose.model("Blog", blogSchema);
