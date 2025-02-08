const { readTodo, createTodo, updateTodo, deleteTodo } = require("./todo.controller")

const router = require("express").Router()

router
    .get("/", readTodo)
    .post("/create", createTodo)
    .patch("/modify/:todoid", updateTodo)
    .delete("/remove/:todoid", deleteTodo)
module.exports = router