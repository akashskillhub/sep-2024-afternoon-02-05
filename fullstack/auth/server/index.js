const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(express.json())
app.use(cors())

app.use("/api/auth", require("./routes/auth.routes"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

mongoose.connect("mongodb://localhost:27017/auth")
mongoose.connection.once("open", () => {
    console.log("db connected")
    app.listen(5000, console.log("server running"))
})