const Cook = require("../models/cook-model");
const cookForm = async (req, res) =>{
    try {
        const response = req.body;
        await Cook.create(response);
        return res.status(200).json({message: "Cook Registered Successfully"});
    } catch (error) {
        return res.status(500).json({message: "Cook Registeration Unsuccessfully"});
    }
};
module.exports = cookForm;