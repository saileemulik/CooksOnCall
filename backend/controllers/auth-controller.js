const User = require("../models/user-model");
const Cook = require("../models/cook-model");
const Team= require("../models/team-model");
// Welcome Route Handler
const home = (req, res) => {
    res.status(200).send('Welcome using router');
};

// User Signup Handler
const signup = async (req, res) => {
    try {
        const { username, email, password, userType } = req.body;
        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: 'E-mail already exists' });
        }

        const userCreated = await User.create({ username, email, password, userType });
        res.status(201).json({
            success: true,
            message: 'User registered successfully',
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

// User Login Handler
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        res.status(200).json({
            message: "Login successful",
            token: await user.generateToken(),
            userId: user._id.toString(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Get User Data Handler
const user = async (req, res) => {
    try {
        const userData = req.user; // Assuming req.user is populated by some middleware
        res.status(200).json({ userData });
    } catch (error) {
        console.error(`Error from user: ${error}`);
        res.status(500).json({ message: "Internal server error" });
    }
};
const reg = async (req, res) => {
    try {
        const regData = req.user; // Assuming req.user is populated by some middleware
        res.status(200).json({ regData });
    } catch (error) {
        console.error(`Error from user: ${error}`);
        res.status(500).json({ message: "Internal server error" });
    }
};

// Cook Registration Handler
const cook = async (req, res) => {
    try {
        const { fullName, email, speciality, dish } = req.body;
        const cookExist = await Cook.findOne({ email });

        if (cookExist) {
            return res.status(400).json({ message: 'E-mail already exists' });
        }

        const cookCreated = await Cook.create({ fullName, email, speciality, dish });
        res.status(201).json({
            success: true,
            message: 'Cook registered successfully',
            token: await cookCreated.generateToken(),  // Check if Cook model has this method
            cookId: cookCreated._id.toString(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }    
};

const team = async (req, res) => {
    try {
        const { fullName, email, teamName, speciality, dish } = req.body;
        const teamNameExist = await Team.findOne({ teamName });

        if (teamNameExist) {
            return res.status(400).json({ message: 'Team already exists' });
        }

        const teamCreated = await Team.create({ fullName, email, teamName, speciality, dish});
        res.status(201).json({
            success: true,
            message: 'Team registered successfully',
            token: await teamCreated.generateToken(),  // Check if Cook model has this method
            teamId: teamCreated._id.toString(),
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }    
};

module.exports = { home, signup, login, user, cook, reg , team};
