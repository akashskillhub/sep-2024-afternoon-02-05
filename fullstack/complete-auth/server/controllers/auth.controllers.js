const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
exports.register = async (req, res) => {
    try {
        const { password, email } = req.body
        const result = await User.findOne({ email })
        if (result) {
            return res.status(401).json({ message: "email already exist" })
        }
        const hash = await bcrypt.hash(password, 10)
        await User.create({ ...req.body, password: hash })
        res.json({ message: "register success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        // step 1 check for email if not throw error
        const result = await User.findOne({ email })
        if (!result) {
            return res.status(401).json({ message: "invalid email" })
        }

        // step 2 compare password if not match throw error
        const verfiy = await bcrypt.compare(password, result.password)

        if (!verfiy) {
            return res.status(401).json({ message: "invalid password" })
        }

        // middleware

        // who is logged in
        const token = jwt.sign({ _id: result._id, name: result.name }, "secretpassword")
        // cookie
        // session

        // 
        res.cookie("kahipn", token, { maxAge: 1000 * 60 * 15 })

        res.json({ message: "login success", result: { name: result.name } })

    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}

exports.logout = (req, res) => {
    try {

        res.clearCookie("kahipn")

        res.json({ message: "logout success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}

exports.getUsers = async (req, res) => {
    try {
        const result = await User.find()
        res.json({ message: "user fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}