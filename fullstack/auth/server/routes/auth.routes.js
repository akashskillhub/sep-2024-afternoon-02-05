const { register, login } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register", register)
    .post("/login", login)

module.exports = router