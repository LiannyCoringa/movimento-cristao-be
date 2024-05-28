const messageService = require('../services/message.service');

const error500Message = 'Algo deu errado.';

const getAll = async (_req, res) => {
  try {
    const { status, data } = await messageService.getAll();
    return res.status(status).json(data);
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
    const { message, date, url, userId } = req.body;
    const newMessage = await messageService.createMessage(message, date, url, userId);

    if (newMessage.status === 409) return res.status(409).json(newMessage.data);

    return res.status(201).json(newMessage);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: error500Message });
  }
};

const updateMessage = async (req, res) => {
  try {
    const { message, date, url, userId } = req.body;
    const { id } = req.params;
    const updatedMessage = await messageService.updateMessage(id, message, date, url, userId);

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