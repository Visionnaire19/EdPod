const express = require("express");
const router = express.Router();


router.get("/damn", (req, res) => {
    res.status(200).send("I hope this worked");
})

module.exports = router;