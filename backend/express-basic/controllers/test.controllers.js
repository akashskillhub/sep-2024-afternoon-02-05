exports.getData = (req, res) => {
    res.json({ message: "get success" })
}
exports.addData = (req, res) => {
    res.status(201).json({ message: "post success" })
}