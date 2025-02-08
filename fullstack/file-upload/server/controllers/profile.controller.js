const Profile = require("../models/Profile")
const upload = require("../utils/upload")

exports.addProfile = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.log(err)
                return res.status(400).json({ message: "multer error" })
            }
            // 2
            await Profile.create({ ...req.body, hero: req.file.filename })
            res.json({ message: "profile create success" })
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}
exports.getProfiles = async (req, res) => {
    try {
        const result = await Profile.find()
        res.json({ message: "profile fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}