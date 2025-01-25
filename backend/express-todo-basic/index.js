const express = require("express")
const { readTodo, createTodo, updateTodo, deleteTodo } = require("./controllers/todo.controllers")
const app = express()

app.use("/", require("./routes/todo.routes"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})
app.listen(5000, console.log("server runningon 5000"))


// get          todo/read
// post         todo/create
// patch        todo/update
// delete       todo/delete