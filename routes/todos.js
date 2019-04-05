const express = require('express');

const todosController = require('../controllers/todos');

const router = express.Router();

// GET

router.get('/', todosController.getTodos);

router.get('/:todoId', todosController.getTodo);

// POST

router.post('/', todosController.postTodo);

// PUT

router.put('/:todoId', todosController.putTodo);

// DELETE

router.delete('/:todoId', todosController.deleteTodo);

module.exports = router;