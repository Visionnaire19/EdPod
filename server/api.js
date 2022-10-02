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
  
  User.find({username : req.body.username}).then((user) =>{
      const newUser = new User({
        name: user.name,
        institution: user.institution,
        globalInteraction: user.globalInteraction
  
      });
  
      return newUser.save();
    
    res.send(user)
  })
  
})
module.exports = router;