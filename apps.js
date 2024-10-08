
const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON request body
app.use(express.json());

let todos = []; // Simple in-memory storage for todos

// Route for getting all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Route for adding a new todo
app.post('/todos', (req, res) => {
    const todo = req.body.todo;
    if (todo) {
        todos.push(todo);
        res.status(201).json({ message: 'Todo added successfully', todos });
    } else {
        res.status(400).json({ message: 'Todo content is required' });
    }
});

// Route for deleting a todo
app.delete('/todos/:index', (req, res) => {
    const index = req.params.index;
    if (todos[index]) {
        todos.splice(index, 1);
        res.status(200).json({ message: 'Todo deleted successfully', todos });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});
