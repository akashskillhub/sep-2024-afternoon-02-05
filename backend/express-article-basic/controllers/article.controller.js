exports.readArticles = (req, res) => {
    res.json({ message: "article fetch success" })
}
exports.createArticle = (req, res) => {

    console.log(req.body)
    res.json({ message: "article create success" })
}
exports.updateArticle = (req, res) => {
    res.json({ message: "article update success" })
}
exports.deleteArticle = (req, res) => {
    res.json({ message: "article delete success" })
}