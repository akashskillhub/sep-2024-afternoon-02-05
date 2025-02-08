const Todo = require("../models/Todo")

exports.getTodos = async (req, res) => {
    try {
        const result = await Todo.find({ user: req.loggedIn })
        res.json({ message: "todo fetch success", result })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}
exports.createTodo = async (req, res) => {
    try {
        await Todo.create({ ...req.body, user: req.loggedIn })
        res.json({ message: "todo create success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}
exports.updateTodo = async (req, res) => {
    try {
        await Todo.findByIdAndUpdate(req.params.tid, req.body)
        res.json({ message: "todo update success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}
exports.deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.tid)
        res.json({ message: "todo delete success" })
    } catch (error) {
        console.log(error)
        res.status(400).json({ message: "something went wrong" })
    }
}