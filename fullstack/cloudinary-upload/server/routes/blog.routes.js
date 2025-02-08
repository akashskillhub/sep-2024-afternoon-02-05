const { getBlog, createBlog, deleteBlog } = require("../controllers/blog.controller")

const router = require("express").Router()

router
    .get("/", getBlog)
    .post("/create", createBlog)
    .delete("/remove/:bid", deleteBlog)
module.exports = router