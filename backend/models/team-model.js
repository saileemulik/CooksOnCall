const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    teamName: {
        type: String,
        required: true,
    },
    dish: {
        type: Array,
        required: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
