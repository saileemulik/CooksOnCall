const Reg = require("../models/reg-model");
const regForm = async (req, res) =>{
    try {
        const response = req.body;
        await Reg.create(response);
        return res.status(200).json({message: "Mode Selected Successfully"});
    } catch (error) {
        return res.status(500).json({message: "Mode Selected Unsuccessfully"});
    }
};
module.exports = regForm;