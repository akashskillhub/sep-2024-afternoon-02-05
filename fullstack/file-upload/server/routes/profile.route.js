const { addProfile, getProfiles } = require("../controllers/profile.controller")

const router = require("express").Router()

router
    .post("/create", addProfile)
    .get("/", getProfiles)

module.exports = router