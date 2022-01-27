var express = require("express");
var router = express.Router();

// Load User model
const Buyer = require("../models/Buyer")
const Vendor = require("../models/Vendor");

// GET request 
// Getting all the users
router.get("/", function (req, res) {
    Vendor.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    })
});


router.post("/login", (req, res) => {
    const email = req.body.email;
    console.log(req.body)//just verfying the things
    // Find user by email
    let response = {
        val: "",
        name: ""
    };

    response.name = req.body.name;
    const pw = req.body.pw;
    Buyer.findOne({ email: email, password: pw })
        .then(user => {
            // Check if user email exists
            if (!user) {
                Vendor.findOne({ email: email, password: pw })
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
                batch: req.body.batch,
                password: req.body.password
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
                canteenclose: req.body.canteenclose,
                password: req.body.password
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


router.post("/binfo", (req, res) => {
    // console.log(req.body);
    const email = req.body.email;
    Buyer.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user);
            }
        })
});

router.post("/vinfo", (req, res) => {
    // console.log(req.body);
    const email = req.body.email;
    Vendor.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json(user);
            }
        })
});

router.post("/bedit", (req, res) => {
    const email = req.body.email;
    let response = {
        val: ""
    };
    Buyer.findOne({ email: email }).then(user => {
        if (user) {
            user.name = req.body.name;
            user.age = req.body.age;
            user.batch = req.body.batch;
            user.contact = req.body.contact;
            user.password = req.body.password;
            user.save()
            response.val=1;
        }
        else {
            //failure
            response.val=0;
        }
    });
});

router.post("/vedit", (req, res) => {
    const email = req.body.email;
    let response = {
        val: ""
    };
    Vendor.findOne({ email: email }).then(user => {
        if (user) {
            user.name = req.body.name;
            user.contactno = req.body.contact;
            user.shop = req.body.shop;
            user.canteenclose = req.body.close;
            user.canteenopen = req.body.open;
            user.password=req.body.password
            user.save()
            response.val=1;
        }
        else {
            //failure
            response.val=0;
        }
    });
});


module.exports = router;

