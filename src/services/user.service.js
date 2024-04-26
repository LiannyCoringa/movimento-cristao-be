const { User } = require('../models');

const getAll = async () => {
  const users = await User.findAll();

  return users;
};

const getById = async (id) => {
  const user = await User.findByPk(id);

  return user;
};

const createUser = async (fullName, email) => {
  const newUser = await User.create({ fullName, email });

  return newUser;
};

const updateUser = async (id, fullName, email) => {
  const [updatedUser] = await User.update(
    { fullName, email },
    { where: { id } },
  );
  return updatedUser;
};

const deleteUser = async (id) => {
  const user = await User.destroy(
    { where: { id } },
  );
  return user;
};

module.exports = {
  getAll,
  getById,
  createUser,
  updateUser,
  deleteUser,
};