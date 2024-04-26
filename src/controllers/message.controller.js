const messageService = require('../services/message.service');

const error500Message = 'Algo deu errado.';

const getAll = async (_req, res) => {
  try {
    const messages = await messageService.getAll();
    return res.status(200).json(messages);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await messageService.getById(id);

    if (!message) return res.status(404).json({ message: 'Mensagem não encontrada' });

    return res.status(200).json(message);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const createMessage = async (req, res) => {
  try {
    const { message, date, userId } = req.body;
    const newMessage = await messageService.createMessage(message, date, userId);

    return res.status(201).json(newMessage);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const { message, date, userId } = req.body;
    const { id } = req.params;
    const updatedMessage = await messageService.updateMessage(id, message, date, userId);

    if (!updatedMessage) return res.status(404).json({ message: 'Mensagem não encontrada' });

    return res.status(200).json({ message: 'Mensagem atualizada com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await messageService.deleteMessage(id);

    return res.status(204).end();
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

module.exports = {
  getAll,
  getById,
  createMessage,
  updateMessage,
  deleteMessage,
};