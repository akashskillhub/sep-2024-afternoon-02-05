const Blog = require("../models/Blog")
const path = require("path")
const upload = require("../utils/upload")
const cloud = require("cloudinary").v2

cloud.config({
    api_key: process.env.CLOUDINARY_API_KEY,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

exports.createBlog = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.log(err)
                return res.status(400).json({ message: err.message || "multer error" })
            }
            const { secure_url } = await cloud.uploader.upload(req.file.path)
            await Blog.create({ ...req.body, hero: secure_url })
            res.json({ message: "blog create success" })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}
exports.getBlog = async (req, res) => {
    try {
        const result = await Blog.find()
        res.json({ message: "blog fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}
exports.deleteBlog = async (req, res) => {
    try {
        const result = await Blog.findById(req.params.bid)
        await cloud.uploader.destroy(path.basename(result.hero).split(".")[0])
        await Blog.findByIdAndDelete(req.params.bid)
        res.json({ message: "blog delete success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}

// email
// sms
// oauth
// pagination

// mini project
// mongo query
// 1 major project

// mobile app
// 2 project