const mongoose = require("mongoose");

const cookSchema = new mongoose.Schema({
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
    speciality: {
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

const Cook = mongoose.model("Cook", cookSchema);
module.exports = Cook;
