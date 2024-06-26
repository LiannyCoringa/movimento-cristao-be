const express = require('express');

const cors = require('cors');
const userController = require('./controllers/user.controller');
const messageController = require('./controllers/message.controller');
const loginController = require('./controllers/login.controller');
const validateJWT = require('./auth/validateJWT');

const app = express();

app.use(cors());

app.use(express.json());

app.post('/login', loginController.login);

app.get('/users', validateJWT, userController.getAll);
app.get('/users/:id', validateJWT, userController.getById);
app.post('/users', userController.createUser);
app.put('/users/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.get('/messages', messageController.getAll);
app.get('/messages/:id', messageController.getById);
app.post('/messages', validateJWT, messageController.createMessage);
app.put('/messages/:id', validateJWT, messageController.updateMessage);
app.delete('/messages/:id', validateJWT, messageController.deleteMessage);

module.exports = app;