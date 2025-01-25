const { readArticles, createArticle, updateArticle, deleteArticle } = require("../controllers/article.controller")

const router = require("express").Router()

// http://localhost:5000/api/article
// http://localhost:5000/api/article/create
// http://localhost:5000/api/article/modify
// http://localhost:5000/api/article/remove
router
    .get("/", readArticles)
    .post("/create", createArticle)
    .patch("/modify", updateArticle)
    .delete("/remove", deleteArticle)

module.exports = router