const router = require("express").Router();
const Pin = require("../models/Pin");

//create a pin
router.post("/", async(req, res) => {
    const newPin = new Pin(req.body);
    try {
        const savedPin = await newPin.save();
        res.status(200).json(savedPin);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get all pins
router.get("/", async(req, res) => {
    try {

        const pins = await Pin.find();
        res.status(200).json(pins);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/:currentUsername", async(req, res) => {

    try {

        const uniqueusername = params.currentUsername;
        const pins = await Pin.find({ username: uniqueusername });
        console.log(pins);
        res.status(200).json(pins);
    } catch (error) {
        res.status(500).json("Error occured while fetching the user marked pins" + error);

    }

})

module.exports = router;