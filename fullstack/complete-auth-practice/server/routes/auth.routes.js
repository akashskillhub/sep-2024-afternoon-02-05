const { register, login, logout } = require("../controllers/auth.controller")

const router = require("express").Router()

router
    .post("/register", register)
    .post("/login", login)
    .post("/logout", logout)

// export default = router
module.exports = router