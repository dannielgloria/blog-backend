const posts = require('../data/postData');
let post = require('../data/postData');

// Crear un nuevo post
exports.createPost = (req, res) => {
    const newPost = {
        id: Date.now(), // ID generado basado en timestamp
        title: req.body.title,
        content: req.body.content
    };

    post.push(newPost);
    res.status(201).json({ message: 'Post creado exitosamente', data: newPost });
};

// Obtener todos los posts
exports.getAllPosts = (req, res) => {
    res.json(post);
};

// Obtener un post por ID
exports.getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const found = posts.find(p => p.id === id);
    if (!found) return res.status(404).json({ error: 'Post no encontrado' });
    res.json(found);
};

// Actualizar un post por ID
exports.updatePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = post.findIndex(p => p.id === id);
    
    if (index === -1) return res.status(404).json({ error: 'Post no encontrado' });

    const updated = {
        ...post[index],
        title: req.body.title || post[index].title,
        content: req.body.content || post[index].content
    };

    post[index] = updated;
    res.json({ message: 'Post actualizado correctamente', data: updated });
};

// Eliminar un post por ID
exports.deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    const index = post.findIndex(p => p.id === id);
    
    if (index === -1) return res.status(404).json({ error: 'Post no encontrado' });

    const deleted = post.splice(index, 1);
    res.json({ message: 'Post eliminado exitosamente', data: deleted[0] });
};
