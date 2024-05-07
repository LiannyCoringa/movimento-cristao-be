const jwt = require('jsonwebtoken');
const loginService = require('../services/login.service');

const secret = process.env.JWT_SECRET || 'jwt_secret';

const isBodyValid = (email, password) => email && password;

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!isBodyValid(email, password)) {
    return res.status(401).json({ message: 'É necessário usuário e senha para fazer login' });
  }
  const user = await loginService.login(email, password);
  if (!user || user.password !== password) {
    return res.status(401).json({ message: 'Usuário não existe ou senha inválida' });
  }

  const jwtConfig = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);

  return res.status(200).json({ token });
};

module.exports = {
  login,
};