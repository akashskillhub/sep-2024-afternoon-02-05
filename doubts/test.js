const path = require("path")
const result = { hero: "https://res.cloudinary.com/dttwgojsj/image/upload/v1742375344/pa630de0rkkez0y3upzf.jpg" }

console.log(path.basename(result.hero));
console.log(path.basename(result.hero).split(".")[0]);
