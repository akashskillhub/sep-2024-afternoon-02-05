const { continueWithGoogle, logout } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/continue-with-google", continueWithGoogle)
    .post("/logout", logout)
module.exports = router