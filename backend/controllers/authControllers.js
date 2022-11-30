const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/users");

const register = async (req, res) => {
    try {
        if (req.body.password) {
            const salt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.body.password, salt);
            const newUser = new User({
                fullName: req.body.fullName,
                username: req.body.username,
                password: hashedPassword,
                email: req.body.email
            });
            await newUser.save();
            return res.status(201).json({message: "user has been registered"});
        } else {
            return res.status(401).json({message: "Please type a password"});
        }
    } catch(e) {
        return res.status(500).json(e.message);
    }
};

const login = async (req, res) => {
    try {
        const user = await User.findOne({username: req.body.username});
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        const isPasswordCorrect = await bcrypt.compare(req.body.username, user.password);
        if (!isPasswordCorrect) {
            return res.status(400).json({message: "Wrong password"});
        }
        const payload = {id: user._id};
        const token = jwt.sign(payload, process.env.JWT_KEY, {
            algorithm: "HS512",
            expiresIn: "1d"
        });
        return res
            .cookie("access token", token, {httpOnly: true})
            .status(200)
            .json({message: "Token y cookie generada"});
    } catch(e) {
        return res.status(500).json({message: e.message});
    }
};

module.exports = {register, login};