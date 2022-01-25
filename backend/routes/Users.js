var express = require("express");
var router = express.Router();

// Load User model
const User = require("../models/Users");
const Buyer = require("../models/Buyer")
const Vendor = require("../models/Vendor");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    Buyer.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});


// NOTE: Below functions are just sample to show you API endpoints working, for the assignment you may need to edit them

// POST request 
// Add a user to db
router.post("/register", (req, res) => {
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        date: req.body.date
    });

    newUser.save()
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(400).send(err);
        });
});
    
// POST request 
// Login

router.post("/login", (req, res) => {
    const email = req.body.email;
    console.log(req.body)//just verfying the things
    // Find user by email
    let response = {
        val: "",
        name: ""
    };

    response.name = req.body.name;

    Buyer.findOne({ email: email })
        .then(user => {
            // Check if user email exists
            if (!user) {
                Vendor.findOne({ email: email })
                    .then(user => {
                        // Check if user email exists
                        if (!user) {

                            response.val = 0;
                        }
                        else {
                            response.val = 2;
                        }
                        res.status(200).json(response);
                    })
                    .catch(err => {
                        res.status(400).send(err);
                    });
            }
            else {
                response.val = 1;
                // console.log(response);
                res.status(200).json(response);

            }
        })
        .catch(err => {
            res.status(400).send(err);
        });
});


router.post("/bregister", (req, res) => {
    const email = req.body.email;
    console.log(req.body)//just verfying the things
    // Find user by email
    let response = {
        val: "",
        name: ""
    };
    Buyer.findOne({ email: email }).then(user => {
        // Check if user email exists and this is failure
        if (user) {
            response.val = 0;
            response.name = req.body.name;
            res.status(200).json(response);
        }
        else {
            response.val = 1;
            const newUser = new Buyer({
                name: req.body.name,
                email: req.body.email,
                contact: req.body.contact,
                age: req.body.age,
                batch: req.body.batch
            });

            newUser.save()
                .then(user => {
                    response.name = req.body.name;
                    res.status(200).json(response);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
    });
});


//still pending
router.post("/vregister", (req, res) => {

    const email = req.body.email;
    console.log(req.body)//just verfying the things
    // Find user by email
    let response = {
        val: "",
        name: ""
    };

    Vendor.findOne({ email: email }).then(user => {
        // Check if user email exists and this is failure
        if (user) {
            response.val = 0;
            response.name = req.body.name;
            res.status(200).json(response);
        }
        else {
            response.val = 1;
            const newUser = new Vendor({
                name: req.body.name,
                shop: req.body.shop,
                email: req.body.email,
                contactno: req.body.contactno,
                canteenopen: req.body.canteenopen,
                canteenclose: req.body.canteenclose
            });

            newUser.save()
                .then(user => {
                    response.name = req.body.name;
                    res.status(200).json(response);
                })
                .catch(err => {
                    res.status(400).send(err);
                });
        }
    });
});


module.exports = router;

