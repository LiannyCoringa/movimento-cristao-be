const { User } = require('../models');
const { generateToken } = require('../utils/token');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });

  if (!user) return { error: 'Invalid fields' };

  const token = generateToken(user);

  return { token };
};

module.exports = {
  login,
};