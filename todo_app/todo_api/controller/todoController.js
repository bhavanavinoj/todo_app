const Todo = require("../model/todoSchema")

exports.addTodo = async (req, res) => {
    const todos = await Todo.create(req.body) 
    res.json(todos)
}

exports.getTodos = async (req, res) => {
    const todos = await Todo.find()
    res.json(todos)
};


exports.deleteTodo = async (req, res) => {
    const todos = await Todo.findByIdAndDelete(req.body.id);
    res.json("Todo Deleted");
};

