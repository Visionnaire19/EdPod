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
module.exports = router;