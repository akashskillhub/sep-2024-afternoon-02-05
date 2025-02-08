const multer = require("multer")
const path = require("path")

const profileStorage = multer.diskStorage({
    filename: (req, file, next) => {
        next(null, Date.now() + path.extname(file.originalname))
    },
    destination: (req, file, next) => {
        //          👇 folder name
        next(null, "pics")
    }
})

module.exports = multer({ storage: profileStorage }).single("kahipn")