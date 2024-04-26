const express = require('express');

const userController = require('./controllers/user.controller');
const messageController = require('./controllers/message.controller');

const app = express();

app.use(express.json());

app.get('/users', userController.getAll);
app.get('/users/:id', userController.getById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.get('/messages', messageController.getAll);
app.get('/messages/:id', messageController.getById);
app.post('/messages', messageController.createMessage);
app.put('/messages/:id', messageController.updateMessage);
app.delete('/messages/:id', messageController.deleteMessage);

module.exports = app;