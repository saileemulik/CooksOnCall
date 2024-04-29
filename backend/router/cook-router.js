const express = require('express');
const router = express.Router();
const Cook = require('../models/cook-model');
const cookForm = require('../controllers/cook-controller');
// const upload=require('../middlewares/upload');
router.route("/cook").post(cookForm);
router.post('/api/form/cook',async (req, res) => {
    const { fullName, email, speciality, dish, isAdmin } = req.body;
    // const numericExperience = parseFloat(experience);
    // if (isNaN(numericExperience)) {
    //     return res.status(400).json({ error: 'Experience must be a number' });
    // }

    // const photoPath = files; // Get the path of the uploaded photo
    try {
        const newCook = new Cook({ fullName, email, speciality, dish, isAdmin });
        const savedCook = await newCook.save();
        res.status(201).json(savedCook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// router.post('/listing', listingsController.createListing);

module.exports = router;
