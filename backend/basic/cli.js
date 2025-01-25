const fs = require("fs")
if (process.argv[2] === "c") {
    fs.writeFileSync("test.txt", "")
    console.log("create success")
}
if (process.argv[2] === "r") {
    fs.unlinkSync("test.txt")
    console.log("remove success")
}