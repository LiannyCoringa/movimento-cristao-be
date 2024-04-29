const { Message } = require('../models');

const getAll = async () => {
  const messages = await Message.findAll();

  return { status: 200, data: messages };
};

const getById = async (id) => {
  const message = await Message.findByPk(id);

  return message;
};

const createMessage = async (message, date, userId) => {
  const newMessage = await Message.create({ message, date, userId });

  return newMessage;
};

const updateMessage = async (id, message, date, userId) => {
  const [updatedMessage] = await Message.update(
    { message, date, userId },
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