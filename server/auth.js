const User = require("./models/user");
const socketManager = require("./server-socket");

function getOrCreateUser(user) {
    // the "sub" field means "subject", which is a unique identifier for each user
    return User.findOne({ _id: user._id }).then((existingUser) => {
      if (existingUser) return existingUser;
  
      const newUser = new User({
        name: user.name,
        institution: user.institution,
        globalInteraction: user.globalInteraction
  
      });
  
      return newUser.save();
    });
  }

function populateCurrentUser(req, res, next) {
    // simply populate "req.user" for convenience
    req.user = req.session.user;
    next();
  }

module.exports ={
    populateCurrentUser,
};