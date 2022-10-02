const mongoose = require ("mongoose");
// const url = require("socket.io-client/lib/url");

const podSchema = new mongoose.Schema({
    name: String,
    link: String,
    topic:String,
    institution: String,
   
});

module.exports = mongoose.model("pods", podSchema);