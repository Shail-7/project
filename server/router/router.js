const express = require("express");
const User = require("../models/user");
const Project = require("../models/project");
const authentication = require("../middleware/checksession");

const app = express();

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Home");
});


// User registration 
router.post('/user', async (req, res) => {
    // res.send(req.body);
    try {
        console.log(req.body);
        const user = new User(req.body);
        const result = await user.save();
        res.status(201).send(result);
    } catch (err) {
        res.status(400).json({ msg: err })
    }
})

// User Login
router.post('/blogin', async (req, res) => {
    try {

        const result = await User.findOne({ email: req.body.email })
        // res.send(result);
        if (result != "") {
            // res.send("User exists")
            if (result.email === req.body.email && result.password === req.body.password) {

                req.session.user = result;
                res.status(200).json({ msg: "Login Successful" })
            } else {
                res.status(401).json({ msg: "Unauthorized User" })
            }
        } else {
            res.status(404).json({ msg: "User not Found" });
        }

    } catch (err) {
        res.status(400).json({ msg: err });
    }
})

// Create Project
let colors = ["blue", "green", "yellow", "brown", "purple", "orange"];

router.post('/project', authentication, async (req, res) => {

    try {
        console.log(req.body);
        const project = new Project({
            name: req.body.name,
            description: req.body.description,
            url: req.body.url,
            user_id: req.session.user._id,
            color: colors[Math.floor((Math.random() * (colors.length - 1)) + 1)]

        });
        const result = await project.save();
        res.status(201).json(result);
        // res.send("Creating..")
    } catch (err) {
        res.status(400).json(err);
    }
});


// Displaying all projects of a user
router.get('/project', authentication, async (req, res) => {

    try {
        const result = await Project.find({ user_id: req.session.user._id });

        console.log(result);
        if (result != "") {
            res.status(200).json(result);
        } else {
            res.status(404).json({ msg: "No Projects found" })
        }
    } catch (err) {
        res.status(400).json(err);
    }
})

// Updating Project
router.patch('/project', authentication, async (req, res) => {
    try {
        console.log(`id ${req.body._id}`);
        const result = await Project.findByIdAndUpdate({ _id: req.body._id }, { $set: req.body });

        res.status(205).json(result);

    } catch (err) {
        res.status(400).json({ msg: "Error Occurred" });
    }
})

router.get('/blogout', authentication, async (req, res) => {
    try {
        req.session.destroy();
        res.status(200).json({ msg: "Session Destroyed" });

    } catch (err) {
        res.status(400).json(err);

    }

})

router.get('/checksess', (req, res) => {
    try {
        if (!req.session.user) {
            res.status(401).json({ msg: "Unauthorized User" });
        }
        else {
            res.status(200).json(req.session.user);
        }
    } catch (err) {
        res.status(400).json(err);

    }
})

// router.patch('/project', authentication, async (req, res) => {
//     try {

//         const result = await Project.findByIdAndUpdate({ _id: req.body.pid },{$set:req.body});

//     } catch (err) {
//         res.status(400).json(err);
//     }
// });



module.exports = router;