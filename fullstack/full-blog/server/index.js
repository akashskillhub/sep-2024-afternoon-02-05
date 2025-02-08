const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()
app.use(express.json()) // 👈 stores body to req.body
app.use(cors()) // CORS 

//                      call this 👇 if url has http://localhost:5000/api/blog
app.use("/api/blog", require("./blog.route"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

mongoose.connect("mongodb://localhost:27017/fullblog")
// once mongoose connects to mongodb 👇call this function
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running"))
})