const asyncHandler = require("express-async-handler")
const { OAuth2Client } = require("google-auth-library")
const User = require("../models/User")
const jwt = require("jsonwebtoken")

exports.continueWithGoogle = asyncHandler(async (req, res) => {
    const { credential } = req.body
    const client = new OAuth2Client({ clientId: process.env.GOOGLE_CLIENT_ID })
    const data = await client.verifyIdToken({ idToken: credential })
    if (!data) {
        return res.status(401).json({ message: "unable to process" })
    }
    const { payload } = data
    let result = await User.findOne({ email: payload.email })
    if (!result) {
        result = await User.create({
            name: payload.name,
            email: payload.email,
            hero: payload.picture
        })
    }


    const token = jwt.sign({ _id: result._id }, process.env.JWT_KEY)
    res.cookie("OAUTH", token, {
        maxAge: 1000 * 60 * 60 * 24,
        secure: false,
        httpOnly: true
    })
    res.json({
        message: "login success", result: {
            name: result.name,
            email: result.email,
            hero: result.hero
        }
    })
    // res.json({ message: "success" })
})
exports.logout = asyncHandler(async (req, res) => {
    res.json({ message: "logout success" })
})