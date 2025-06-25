const jwt = require('jsonwebtoken');
const { JWT_KEY } = require('../config/constants');

module.exports = (socket, next) => {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error('Token requerido'));

  try {
    const decoded = jwt.verify(token, JWT_KEY);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error('Token inválido'));
  }
};
