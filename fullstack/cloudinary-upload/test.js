const path = require("path")
const result = "https://res.cloudinary.com/dttwgojsj/image/upload/v1739007376/jmkjqahuy0edduvlj31o.jpg"

// jmkjqahuy0edduvlj31o
console.log(path.extname(result))
console.log(path.basename(result))

console.log("jmkjqahuy0edduvlj31o.jpg".split(".")[0]);
console.log(path.basename(result).split(".")[0]);
