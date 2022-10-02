const { request } = require("express");
const express = require("express");
const router = express.Router();
const Pod = require("./models/pod");
const User = require("./models/user");


const api = require("./api");
const auth = require("./auth");

// socket stuff
const socketManager = require("./server-socket");

// router.get("/pods", (req, res) => {
//     res.status(200).send(req.body);
// })
//Add auth.ensureLoggedIn later
//Add institution of the person when login is confirmed. 
router.post("/newPod", (req,res) => { 
    const newPod = new Pod({
    name: req.body.name,
    link: req.body.link,
    topic:req.body.topic,

    }
    )
    newPod.save().then((pod) => res.send(pod))
    
  
    
  });

router.get("/pods",(req, res) => {
    let topic = req.query.topic;

    
    Pod.find({topic:topic}).then((pods) => res.send(pods))
   
  })

router.post("/signup", (req,res) =>{
  let user = req.body;

  console.log("2CEFWRVFE", user.globalInteraction)
  const newUser = new User({
    username: user.username,
    password: user.password,
    email:user.email,
    institution: user.institution,
    globalInteraction: false,

  });

  newUser.save().then((user) => res.send(user));

  
})

router.get("/login", (req,res) => {
  let password = req.query.password;
  let username = req.query.username;

  User.findOne({ username: username }, function(err, user) {
    if (err) throw err;

    user.comparePassword(password, function(err, isMatch) {
        if (err) throw err;
        console.log(password, isMatch);
        res.send(user) 
    });
  
    
  });
});

router.get("/whoami", (req, res) => {
  if (!req.user) {
    // not logged in
    return res.send({});
  }
  });

router.post("/initsocket", (req, res) => {
    // do nothing if user not logged in
    if (req.user)
      socketManager.addUser(req.user, socketManager.getSocketFromSocketID(req.body.socketid));
    res.send({});
  });


module.exports = router;