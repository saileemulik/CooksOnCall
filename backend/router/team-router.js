const express = require('express');
const router = express.Router();
const Team = require('../models/team-model');
const teamForm = require('../controllers/team-controller');
// const upload=require('../middlewares/upload');
router.route("/team").post(teamForm);
router.post('/api/form/team',async (req, res) => {
    const { fullName, email, team, isAdmin } = req.body;
    // const numericExperience = parseFloat(experience);
    // if (isNaN(numericExperience)) {
    //     return res.status(400).json({ error: 'Experience must be a number' });
    // }

    // const photoPath = files; // Get the path of the uploaded photo
    try {
        const newTeam = new Team({ fullName, email, team, isAdmin });
        const savedTeam = await newTeam.save();
        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// router.post('/listing', listingsController.createListing);

module.exports = router;
