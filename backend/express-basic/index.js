const express = require("express")
const { getData, addData } = require("./controllers/test.controllers")
const app = express() // 👈 http.createServer((req,res)=>{})

app.get("/", getData)
app.post("/", addData)

app.use("*", (req, res) => {
    res.status(404).json({ message: "not found" })
})

app.listen(5000, console.log("server running on 5000"))