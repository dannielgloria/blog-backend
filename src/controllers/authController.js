const supabase = require('../config/supabase');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config/constants')


// Registro con imagen como URL
exports.register = async (req, res) => {
  const { name, last_name, birthdate, email, password, avatar_url } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10)

  const { data, error } = await supabase
    .from('users')
    .insert([{ name, last_name, birthdate, avatar_url, email, password: hashedPassword }])
    .select();

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json({ message: "Usuario registrado", user: data[0] });
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email',email)
    .single();

  if (error || !data) return res.status(401).json({ error: "Credenciales inválidas" });

  const isValid = await bcrypt.compare(password, data.password);
  if (!isValid) return res.status(401).json({ error: "Credenciales inválidas" });

  const token = jwt.sign({id: data.id, email: data.email}, JWT_KEY, { expiresIn: '7d'});

  res.json({ token: token });
};
