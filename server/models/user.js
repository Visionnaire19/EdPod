const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: String,
  institution: String,
  globalInteraction: Boolean,
  
});

// compile model from schema
module.exports = mongoose.model("users", UserSchema);
