// get          find         
// post         create         
// patch        findByIdAndUpdate         
// delete       findByIdAndDelete         

const Blog = require("./Blog")

exports.readBlogs = async (req, res) => {
    const result = await Blog.find() // DB OPRATION
    res.json({ message: "blog fetch succes", result })
}
exports.createBlogs = async (req, res) => {
    await Blog.create(req.body) // DB OPRATION
    res.status(201).json({ message: "blog create success" })
}
exports.updateBlogs = async (req, res) => {
    //                                      👇 dynamic id from route file
    await Blog.findByIdAndUpdate(req.params.bid, req.body) // DB OPRATION
    res.json({ message: "blog update success" })
}
exports.deleteBlogs = async (req, res) => {
    await Blog.findByIdAndDelete(req.params.bid) // DB OPRATION
    res.json({ message: "blog delete success" })
}