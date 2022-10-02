const mongoose = require ("mongoose");
// const url = require("socket.io-client/lib/url");

const userSchema = new mongoose.Schema({
    name: String,
    link: String,
    topic:String,
    institution: String,
   
});

module.exports = mongoose.model("user", userSchema);