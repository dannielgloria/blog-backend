const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config/constants')

module.exports = async (req, res, next) => {
  const token = req.headers.authorization?.replace("Bearer ", "");
  if (!token) return res.status(401).json({ error: "Token requerido" });

  try {
    const payload = jwt.verify(token, JWT_KEY);
    req.user = payload;
    next();
  } catch (error) {
    return res.status(401).json({error: 'Token inválido'});
  }
};
