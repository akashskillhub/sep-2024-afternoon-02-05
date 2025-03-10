const asyncHandler = require("express-async-handler")
const Order = require("../models/Order")
const User = require("../models/User")
const sendEmail = require("../utils/email")

exports.placeOrder = asyncHandler(async (req, res) => {
    await Order.create({ ...req.body, user: req.user })
    const result = await User.findById(req.user)
    await sendEmail({
        to: result.email,
        subject: "order placed",
        message: "thank you for your order with skillhub"
    })
    res.json({ message: "order placed success" })
})
exports.getOrders = asyncHandler(async (req, res) => {
    const { start, limit } = req.query
    const total = await Order.countDocuments()
    const result = await Order
        .find({ user: req.user })
        .populate("products.product")
        .skip(start)
        .limit(limit)
    res.json({ message: "order fetched success", result, total })
})