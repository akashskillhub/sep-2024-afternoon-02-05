const asyncHandler = require("express-async-handler")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
const { sendEmail } = require("../utils/email")
const { genrateOTP } = require("../utils/genrateOTP")
const { sendSMS } = require("../utils/sms")
const { differenceInSeconds } = require("date-fns")

exports.register = asyncHandler(async (req, res) => {
    const { email, mobile } = req.body
    const result = await User.findOne({ $or: [{ email }, { mobile }] })
    if (result) {
        return res.status(401).json({ message: "email or mobile already exist" })
    }
    await User.create(req.body)
    await sendEmail({ to: email, subject: "welcome to skillhub", message: "lorem ipsum" })
    res.json({ message: "register success" })
})
exports.sendOTP = asyncHandler(async (req, res) => {
    const { username } = req.body
    const result = await User.findOne({ $or: [{ email: username }, { mobile: username }] })
    if (!result) {
        return res.status(401).json({ message: "email or mobile not registered with us" })
    }
    const otp = genrateOTP()
    await User.findByIdAndUpdate(result._id, { otp, otpSendOn: new Date() })
    await sendEmail({
        to: result.email,
        subject: "login otp",
        message: `your otp is ${otp}`
    })
    // await sendSMS({ numbers: result.mobile, message: `your otp is ${otp}` })
    res.json({ message: "otp send success" })
})
exports.login = asyncHandler(async (req, res) => {
    const { username, otp } = req.body

    const result = await User.findOne({ $or: [{ email: username }, { mobile: username }] })
    if (!result) {
        return res.status(401).json({ message: "email or mobile not registered with us" })
    }

    if (otp != result.otp) {
        return res.status(401).json({ message: "invalid otp" })
    }

    if (differenceInSeconds(new Date(), result.otpSendOn) > 60) {
        await User.findByIdAndUpdate(result._id, { otp: null })
        return res.status(401).json({ message: "otp expired" })
    }

    await User.findByIdAndUpdate(result._id, { otp: null })

    const token = jwt.sign({ _id: result._id, name: result.name }, process.env.JWT_KEY)
    res.cookie("AUTH", token, { maxAge: 1000 * 60 * 60 * 24 })
    res.json({
        message: "login success", result: {
            _id: result._id,
            name: result.name,
            email: result.email,
            mobile: result.mobile,
        }
    })
})
exports.logout = asyncHandler(async (req, res) => {
    res.clearCookie("AUTH")
    res.json({ message: "logout success" })
})