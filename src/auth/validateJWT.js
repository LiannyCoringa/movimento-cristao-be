const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

module.exports = async (req, res, next) => {
  function extractToken(bearerToken) {
    return bearerToken.split(' ')[1];
  }
  const { authorization } = req.headers;
  if (!authorization || authorization === '') {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
  
  try {
    const token = extractToken(authorization);
    const decoded = jwt.verify(token, secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Token inválido' });
  }
};
