const express = require("express");
const router = express.Router();
const Pod = require("./models/pod");

router.get("/damn", (req, res) => {
    res.status(200).send("I hope this worked");
})
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

router.get("/pods",  (req, res) => {
    let topic = req.topic;
    const want = Pod.find({topic: topic}).exec();

    res.send(want)
  });

module.exports = router;