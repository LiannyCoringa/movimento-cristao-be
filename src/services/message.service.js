const { Message } = require('../models');

const getAll = async () => {
  const messages = await Message.findAll();

  return { status: 200, data: messages };
};

const getById = async (id) => {
  const message = await Message.findByPk(id);

  return message;
};

const createMessage = async (message, date, url, userId) => {
  const messageExists = await Message.findOne({ where: { message } });
  const dateExists = await Message.findOne({ where: { date } });
  if (messageExists) return ({ status: 409, data: { message: 'Message already exists' } });
  if (dateExists) return ({ status: 409, data: { message: 'Date already exists' } });
  
  const newMessage = await Message.create({ message, date, url, userId });

  return newMessage;
};

// eslint-disable-next-line max-params
const updateMessage = async (id, message, date, url, userId) => {
  const [updatedMessage] = await Message.update(
    { message, date, url, userId },
    { where: { id } },
  );
  return updatedMessage;
};

const deleteMessage = async (id) => {
  const message = await Message.destroy(
    { where: { id } },
  );
  return message;
};

module.exports = {
  getAll,
  getById,
  createMessage,
  updateMessage,
  deleteMessage,
};