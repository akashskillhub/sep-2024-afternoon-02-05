const { getTodos, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controller")

const router = require("express").Router()

router
    .get("/", getTodos)
    .post("/create", createTodo)
    .patch("/modify/:tid", updateTodo)
    .delete("/remove/:tid", deleteTodo)

module.exports = router