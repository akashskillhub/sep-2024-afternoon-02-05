const {
    register,
    login,
    logout,
    getUsers
} = require("../controllers/auth.controllers")
const { privateRoute } = require("../middlewares/protected")

const router = require("express").Router()

router
    .post("/register", register)
    .post("/login", login)
    .post("/logout", logout)
    .get("/users", privateRoute, getUsers)

module.exports = router