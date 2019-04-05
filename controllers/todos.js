const Todo = require('../models/todo');

// GET

exports.getTodos = (req, res, next) => {
    Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            res.send(err);
        })
};

exports.getTodo = (req, res, next) => {
    Todo.findById(req.params.todoId)
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.send(err);
        })
};

// POST

exports.postTodo = (req, res, next) => {
    Todo.create(req.body)
        .then((newTodo) => {
            res.status(201).json(newTodo);
        })
        .catch((err) => {
            res.send(err);
        })
};

// PUT

exports.putTodo = (req, res, next) => {
    Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            res.send(err);
        });
};

// DELETE

exports.deleteTodo = (req, res, next) => {
    Todo.findByIdAndDelete({_id: req.params.todoId})
        .then(() => {
            res.json({message: 'Deleted'});
        })
        .catch((err) => {
            res.send(err);
        });
};