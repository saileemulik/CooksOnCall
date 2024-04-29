const Team = require("../models/team-model");
const teamForm = async (req, res) =>{
    try {
        const response = req.body;
        await Team.create(response);
        return res.status(200).json({message: "Team Registered Successfully"});
    } catch (error) {
        return res.status(500).json({message: "Team Registeration Unsuccessfully"});
    }
};
module.exports = teamForm;