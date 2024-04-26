const express = require('express');

const userController = require('./controllers/user.controller');

const app = express();

app.use(express.json());

app.get('/users', userController.getAll);
app.get('/users/:id', userController.getById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

module.exports = app;