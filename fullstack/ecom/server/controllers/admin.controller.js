const asyncHanlder = require("express-async-handler")
const Seller = require("../models/Seller")
const Product = require("../models/Product")
const Order = require("../models/Order")
const User = require("../models/User")
const sendEmail = require("../utils/email")

exports.getAllSellers = asyncHanlder(async (req, res) => {
    const { limit, start } = req.query
    const total = await Seller.countDocuments()
    const result = await Seller.find().skip(start).limit(limit)
    res.json({ message: "fetch all sellers", result, total })
})
exports.getAllProducts = asyncHanlder(async (req, res) => {
    const result = await Product.find()
    res.json({ message: "fetch all products", result })
})

exports.blockUnblockSeller = asyncHanlder(async (req, res) => {
    await Seller.findByIdAndUpdate(req.params.sid, { isActive: req.body.isActive })
    res.json({ message: "seller account update", })
})

exports.publishUnpublishProduct = asyncHanlder(async (req, res) => {
    await Product.findByIdAndUpdate(req.params.pid, { isPublish: req.body.isPublish })
    res.json({ message: "product update success", })
})

exports.getAllOrders = asyncHanlder(async (req, res) => {
    const { limit, start } = req.query
    const total = await Order.countDocuments()
    const result = await Order
        .find()
        .populate("user")
        .populate("products.product")
        .skip(start)
        .limit(limit)
    res.json({ message: "fetch all orders", result, total })
})

exports.updateOrderStatus = asyncHanlder(async (req, res) => {

    const orderData = await Order.findByIdAndUpdate(req.params.pid, { status: req.body.status })
    const result = await User.findById(orderData.user)

    if (req.body.status === "delivered") {
        await sendEmail({
            to: result.email,
            subject: "order status update",
            message: `your order ${result._id} is delivered successfully`
        })
    }
    res.json({ message: "order status update" })
})
exports.getAllUsers = asyncHanlder(async (req, res) => {
    const { start, limit } = req.query
    const total = await User.countDocuments()
    const result = await User.find().skip(start).limit(limit)
    res.json({ message: "fetch all users", result, total })
})
exports.blockUnblockUser = asyncHanlder(async (req, res) => {
    await User.findByIdAndUpdate(req.params.uid, { isActive: req.body.isActive })
    res.json({ message: "users account update" })
})