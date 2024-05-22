const loginService = require('../services/login.service');

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!isBodyValid(email, password)) {
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });
  }
  const user = await loginService.login(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
  }

  return res.status(200).json({ user });
};

module.exports = {
  login,
};