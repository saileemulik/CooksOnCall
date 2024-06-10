const mongoose = require("mongoose");

const regSchema = new mongoose.Schema({
    user: {
        type: String,
        required: true,
    },
   
});

const Reg = mongoose.model("Reg", regSchema);
module.exports = Reg;
