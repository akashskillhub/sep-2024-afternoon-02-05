const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

app.use(express.json()) // body parser
app.use(cors())
app.use("/api/todos", require("./todo.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

mongoose.connect("mongodb://localhost:27017/todo")
mongoose.connection.once("open", () => {
    console.log("db connectd")
    app.listen(5000, console.log("server running"))
})
