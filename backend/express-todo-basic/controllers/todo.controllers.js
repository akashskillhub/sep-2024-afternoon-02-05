exports.readTodo = (req, res) => {
    res.json({ message: "todo read success" })
}
exports.createTodo = (req, res) => {
    res.status(201).json({ message: "todo create success" })
}
exports.updateTodo = (req, res) => {
    res.json({ message: "todo update success" })
}
exports.deleteTodo = (req, res) => {
    res.json({ message: "todo delete success" })
}