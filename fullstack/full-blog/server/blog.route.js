const { readBlogs, createBlogs, updateBlogs, deleteBlogs } = require("./blog.controller")

const router = require("express").Router()

// router.get("/", readBlogs)
// METHOD => GET
// URL    => http://localhost:5000/api/blog then call readBlog

// router.post("/create", createBlogs)
// METHOD => POST
// URL    => http://localhost:5000/api/blog/create then call createBlog

// router..patch("/update/:bid", updateBlogs)
// METHOD => PATCH
// URL    => http://localhost:5000/api/blog/update/123456 then call updateBlogs


// router.delete("/remove/:bid", deleteBlogs)
// METHOD => DELETE
// URL    => http://localhost:5000/api/blog/remove/123456 then call deleteBlogs



router
    .get("/", readBlogs)
    .post("/create", createBlogs)
    .patch("/update/:bid", updateBlogs)
    .delete("/remove/:bid", deleteBlogs)

module.exports = router