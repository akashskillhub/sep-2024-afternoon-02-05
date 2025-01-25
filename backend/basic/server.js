// express
const http = require("http")
const app = http.createServer((req, res) => {
    if (req.method === "GET") {
        res.end("GET success")
    }
    if (req.method === "POST") {
        res.end("POST success")
    }
    if (req.method === "PATCH") {
        res.end("PATCH success")
    }
    if (req.method === "DELETE") {
        res.end("DELETE success")
    }
})
app.listen(process.argv[2], console.log("server running"))