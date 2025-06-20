const supabase = require('../config/supabase');

// Crear un nuevo usuario
exports.createUser = async (req, res) => {
    const { name, last_name, birthdate } = req.body;

    const { data, error } = await supabase
        .from('users')
        .insert([{ name, last_name, birthdate }])
        .select();

    if (error) return res.status(500).json({ error: error.message });

    res.status(201).json(data[0]);
};

// Obtener todos los usuarios
exports.getAllUsers = async (req, res) => {
    const { data, error } = await supabase
        .from('users')
        .select('*');

    if (error) return res.status(500).json({ error: error.message });

    res.json(data);
};

// Obtener un usuario por ID
exports.getUserById = async (req, res) => {
    const id = req.params.id;

    const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('id', id)
        .single();

    if (error) return res.status(404).json({ error: 'Usuario no encontrado' });

    res.json(data);
};

// Actualizar un usuario por ID
exports.updateUser = async (req, res) => {
    const id = req.params.id;
    const { name, last_name, birthdate } = req.body;

    const { data, error } = await supabase
        .from('users')
        .update({ name, last_name, birthdate })
        .eq('id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });

    res.json({ message: 'Usuario actualizado', data: data[0] });
};

// Eliminar un usuario por ID
exports.deleteUser = async (req, res) => {
    const id = req.params.id;

    const { data, error } = await supabase
        .from('users')
        .delete()
        .eq('id', id)
        .select();

    if (error) return res.status(500).json({ error: error.message });

    res.json({ message: 'Usuario eliminado', data: data[0] });
};
