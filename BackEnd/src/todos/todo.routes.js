const express = require("express");
const bodyParser = require("body-parser");
const {
    getAllTodos,
    createTodo,
    updateTodo,
    deleteTodo,
    clearTodos,
} = require("./todos.services");

const todoRouter = express.Router();
todoRouter.use(bodyParser.json());

// Create a Todo
todoRouter.post("/", async (req, res) => {
    const { name, isChecked, userId } = req.body;
    const todo = await createTodo(name, isChecked, userId);
    console.log(todo);
    res.json(todo);
});

// Get all Todos
todoRouter.get("/:id", async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const todo = await getAllTodos(parseInt(id));
    console.log("Get All Todos");
    console.log(todo);
    res.json(todo);
});

// Update a Todos
todoRouter.put("/:id", async (req, res) => {
    const { id } = req.params;
    const { name, isChecked } = req.body;
    const todo = await updateTodo(id, name, isChecked);
    res.json(todo);
});

// Clear Todo
todoRouter.delete("/clear", async (req, res) => {
    const { userId } = req.body;
    const todo = await clearTodos(userId);
    res.json(todo);
});

// Delete a Todos
todoRouter.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const todo = await deleteTodo(id);
    res.json(todo);
});

module.exports = todoRouter;
