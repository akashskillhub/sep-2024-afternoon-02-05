const { readTodo, createTodo, updateTodo, deleteTodo } = require("../controllers/todo.controllers")

const router = require("express").Router()

router
    .get("/todo/read", readTodo)
    .post("/todo/create", createTodo)
    .patch("/todo/update", updateTodo)
    .delete("/todo/delete", deleteTodo)

//👇 export default router  // module
module.exports = router  // common js 
