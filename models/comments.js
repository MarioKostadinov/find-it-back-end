var mongoose = require("mongoose");

var commentSchema = new mongoose.Schema({

    body: String,
    name: String
});

module.exports = mongoose.model("Comment", commentSchema);
