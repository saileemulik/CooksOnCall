const express = require('express');
const router = express.Router();
const Team = require('../models/team-model');
const teamForm = require('../controllers/team-controller');
// const upload=require('../middlewares/upload');
router.route("/team").post(teamForm);
router.post('/api/teams/team',async (req, res) => {
    const { fullName, email, teamName, speciality, dish , isAdmin } = req.body;

    try {
        const newTeam = new Team({ fullName, email, teamName, speciality, dish, isAdmin });
        const savedTeam = await newTeam.save();
        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
// Ensure this route is correctly set up
router.get('/api/teams/team', async (req, res) => {
    const { dish, speciality } = req.query;
    try {
        const teams = await Team.find({ dish: dish, speciality: speciality });
        if (teams.length > 0) {
            res.status(200).json(teams);
        } else {
            res.status(404).json({ message: 'No teams found with the specified criteria.' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


// router.post('/listing', listingsController.createListing);

module.exports = router;
