const { User } = require('../models');
const generateToken = require('../utils/token');

const getAll = async () => {
  const users = await User.findAll({
    attributes: { exclude: ['password'] },
  });

  return { status: 200, data: users };
};

const getById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return { status: 404, data: { message: 'User does not exist' } };

  return { status: 200, data: user };
};

const getByEmail = async (email) => {
  const user = await User.findOne({
    where: { email },
    attributes: { exclude: ['password'] },
  });

  if (!user) return { status: 404, data: { message: 'User does not exist' } };

  return { status: 200, data: user };
};

const createUser = async (fullName, email, password) => {
  const getByEmails = await User.findOne({
    where: { email },
    attributes: { exclude: ['password', 'email'] },
  });

  if (getByEmails) {
    return { status: 409, data: { message: 'User already registered' } };
  }

  const regex = /^\S+@\S+\.\S+$/;
  if (regex.test(email) === false) {
    return { status: 400, data: { message: '"email" must be a valid email' } };
  }

  const user = await User.create({ fullName, email, password });
  const { id } = user.dataValues;
  const token = generateToken.generateToken({ id });
  return { status: 201, data: { token } };
};

const updateUser = async (id, fullName, email, password) => {
  const [updatedUser] = await User.update(
    { fullName, email, password },
    { where: { id } },
  );

  if (!updatedUser) return { status: 404, data: { message: 'User does not exist' } };
  return { status: 200, data: updatedUser };
};

const deleteUser = async (id) => {
  await User.destroy(
    { where: { id } },
  );
  return { status: 204, data: {} };
};

module.exports = {
  getAll,
  getById,
  getByEmail,
  createUser,
  updateUser,
  deleteUser,
};