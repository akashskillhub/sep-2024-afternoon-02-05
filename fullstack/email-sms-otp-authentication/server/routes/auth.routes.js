const { register, login, logout, sendOTP } = require("../controllers/auth.controllers")

const router = require("express").Router()

router
    .post("/register", register)
    .post("/send-otp", sendOTP)
    .post("/login", login)
    .post("/logout", logout)
module.exports = router