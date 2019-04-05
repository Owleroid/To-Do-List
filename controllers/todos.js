const Todo = require('../models/todo');

// GET

exports.getTodos = (req, res, next) => {
    Todo.find()
        .then((todos) => {
            res.json(todos);
        })
        .catch((err) => {
            console.log(err);
        })
};

exports.getTodo = (req, res, next) => {
    Todo.findById(req.params.todoId)
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            console.log(err);
        })
};

// POST

exports.postTodo = (req, res, next) => {
    const name = req.body.name;
    const todo = new Todo({
        name: name
    });

    todo.save()
        .then(() => {
            console.log("Todo with task:" + name + ". Has been created!");
        })
        .catch((err) => {
            console.log(err)
        });
};

// PUT

exports.putTodo = (req, res, next) => {
    Todo.findByIdAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then((todo) => {
            res.json(todo);
        })
        .catch((err) => {
            console.log(err);
        });
};

// DELETE

exports.deleteTodo = (req, res, next) => {
    Todo.findByIdAndDelete({_id: req.params.todoId})
        .then(() => {
            res.json({message: 'Deleted'});
        })
        .catch((err) => {
            console.log(err);
        });
};