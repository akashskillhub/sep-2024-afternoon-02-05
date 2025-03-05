const { continueWithGoogle, userLogout, sellerRegister, sellerLogin, sellerLogout, admintRegister, sendOtp, adminLogin, adminLogout } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/continue-with-google", continueWithGoogle)
    .post("/user-logout", userLogout)

    .post("/seller-register", sellerRegister)
    .post("/seller-login", sellerLogin)
    .post("/seller-logout", sellerLogout)

    .post("/admin-register", admintRegister)
    .post("/send-otp", sendOtp)
    .post("/admin-login", adminLogin)
    .post("/admin-logout", adminLogout)

module.exports = router