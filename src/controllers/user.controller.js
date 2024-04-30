const userService = require('../services/user.service');

const getAll = async (_req, res) => {
  const { status, data } = await userService.getAll();
  return res.status(status).json(data);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await userService.getById(id);

  return res.status(status).json(data);
};

const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const { status, data } = await userService.createUser({ fullName, email, password });

  return res.status(status).json(data);
};

const updateUser = async (req, res) => {
  const { fullName, email, password } = req.body;
  const { id } = req.params;
  const { status, data } = await userService.updateUser(id, fullName, email, password);

  return res.status(status).json(data);
};

const deleteUser = async (req, res) => {
  const { id } = req.user;
  const { status, data } = await userService.deleteUser(id);

  return res.status(status).json(data);
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
};