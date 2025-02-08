const User = require("../models/User")
const bcrypt = require("bcryptjs")

exports.register = async (req, res) => {
    const result = await User.findOne({ email: req.body.email })
    if (result) {
        return res.status(401).json({ message: "email already exist" })
    }

    const x = await bcrypt.hash(req.body.password, 10)
    await User.create({ ...req.body, password: x })
    res.json({ message: "register success" })
}

exports.login = async (req, res) => {
    // check for email if not match error
    const { email, password } = req.body
    const result = await User.findOne({ email })
    if (!result) {
        return res.status(401).json({ message: "email not registered with us" })
    }
    // compare password  if not match error
    const verify = await bcrypt.compare(password, result.password)
    if (!verify) {
        return res.status(401).json({ message: "invalid password" })
    }
    res.json({ message: "login success" })
}