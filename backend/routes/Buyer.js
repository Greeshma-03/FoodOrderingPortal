var express = require("express");
var router = express.Router();

// Load User model
const Buyer = require("../models/Buyer")


router.get("/info",(req,res)=>{
    console.log(req.body);
    const email=req.body.email;
    Buyer.findOne({email:email})
    .then(user=>{
        if(user){
            res.json(user);
        }
    })
});

module.exports = router;
