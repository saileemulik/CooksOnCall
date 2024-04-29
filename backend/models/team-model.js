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
    // experience: {
    //     type: Number,
    //     required: true,
    // },
    team: {
        type: String,
        required: true,
    },
    // dish: {
    //     type: String,
    //     required: true,
    // },
    isAdmin: {
        type: Boolean,
        default: false,
    },
});

const Team = mongoose.model("Team", teamSchema);
module.exports = Team;
