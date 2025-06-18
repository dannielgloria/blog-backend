const posts = require('../data/postData');
let post = require('../data/postData')

// CreatePost crea un post nuevo y lo persiste localmente
exports.createPost = (req, res) => {
    const newPost = {
        id: Date.now(),
        title: req.body.title,
        content: req.body.content
    };

    post.push(newPost);
    res.status(201).json({message: 'Post creadoo exitosamente'})
}

// GetAll listar todos los post
exports.getAllPosts = (req, res) => {
    res.json(post)
}

// GetByID obtener un post por Id
exports.getPostById = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(p => p.id === id);
    if (!post) return res.status(404).json({error:'Post no encontrado'});
    res.json(post)
}