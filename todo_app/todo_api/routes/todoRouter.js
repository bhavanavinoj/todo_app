const express = require("express")
const router = express.Router()
const todoController = require("../controller/todoController")

router.get("/getTodos",todoController.getTodos)
router.post("/addTodo",todoController.addTodo)
router.delete("/deleteTodo",todoController.deleteTodo)

module.exports = router