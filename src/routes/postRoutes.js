const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');

// Crear un nuevo post: POST /posts/create
router.post('/create', authMiddleware ,postController.createPost);

// Obtener todos los posts: GET /posts/getAll
router.get('/getAll', postController.getAllPosts);

// Obtener un post por ID: GET /posts/getById/:id
router.get('/getById/:id', postController.getPostById);

// Actualizar un post por ID: PUT /posts/update/:id
router.put('/update/:id', postController.updatePost);

// Eliminar un post por ID: DELETE /posts/delete/:id
router.delete('/delete/:id', postController.deletePost);

module.exports = router;