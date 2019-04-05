const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const MONGODB_URI = "mongodb+srv://Admin:Xloprtnm@cluster0-jtfmb.mongodb.net/list";

const app = express();

const todoRoutes = require('./routes/todos');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/views'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
  res.sendFile('index.html');
})

app.use('/api/todos', todoRoutes);

mongoose.connect(MONGODB_URI)
  .then(() => {
    app.listen(3000);
    console.log('Connected!');
  })
  .catch(err => {
    console.log(err);
  });