const express = require("express")

const app = express()

app.use(express.json()) // body parser

app.use("/api/article", require("./routes/article.route"))

app.use("*", (req, res) => {
    res.status(404).json({ message: "resource not found" })
})
app.listen(5000, console.log("server running ..."))