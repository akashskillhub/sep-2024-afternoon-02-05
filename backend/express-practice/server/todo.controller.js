// GET      find
// POST     create
// PATCH    findByIdAndUpdate
// DELETE   findByIdAndDelete

const Todo = require("./Todo")


exports.readTodo = async (req, res) => {
    const result = await Todo.find()
    res.json({ message: "todo fetch success", result })
}
exports.createTodo = async (req, res) => {
    // console.log(req.body)
    await Todo.create(req.body)
    res.status(201).json({ message: "todo create success" })
}
exports.updateTodo = async (req, res) => {
    await Todo.findByIdAndUpdate(req.params.todoid, req.body)
    res.json({ message: "todo update success" })
}
exports.deleteTodo = async (req, res) => {
    // console.log(req.params)
    await Todo.findByIdAndDelete(req.params.todoid)
    res.json({ message: "todo remove success" })
}