const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

// step 1 middlewares
// step 2 routes
// step 3 404 route
// step 4 db connection
// step 5 start server

const app = express()
app.use(express.json())
app.use(cors())
app.use(express.static("pics"))

app.use("/api/account", require("./routes/profile.route"))
app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})

mongoose.connect(process.env.MONGO_URL)

mongoose.connection.once("open", () => {
    console.log("mongo connected")
    app.listen(process.env.PORT, console.log("server running..."))
})