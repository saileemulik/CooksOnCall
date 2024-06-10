const express = require('express');
const router = express.Router();
const Cook = require('../models/cook-model');
const cookForm = require('../controllers/cook-controller');
// const upload=require('../middlewares/upload');
router.route("/cook").post(cookForm);
router.post('/api/form/cook',async (req, res) => {
    const { fullName, email, speciality, dish, isAdmin } = req.body;
    
   
    try {
        const newCook = new Cook({ fullName, email, speciality, dish, isAdmin });
        const savedCook = await newCook.save();
        res.status(201).json(savedCook);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Ensure this route is correctly set up
router.get('/api/form/cook', async (req, res) => {
    const { dish, speciality } = req.query;
    try {
        const cooks = await Cook.find({ dish: dish, speciality: speciality });
        if (cooks.length > 0) {
            res.status(200).json(cooks);
        } else {
            res.status(404).json({ message: 'No cooks found with the specified criteria.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// router.post('/listing', listingsController.createListing);

module.exports = router;
