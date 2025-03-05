const mongoose = require("mongoose")

module.exports = mongoose.model("seller", new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    gender: { type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    photo: { type: String, required: true },
    password: { type: String, required: true },

    isActive: { type: Boolean, default: false },
}, {}))