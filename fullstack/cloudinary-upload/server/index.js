const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
app.use(express.json())
app.use(cors({ origin: "http://localhost:5173" }))

app.use("/api/articles", require("./routes/blog.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

mongoose.connect(process.env.MONGO_URL)
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(process.env.PORT, console.log("server running"))
})