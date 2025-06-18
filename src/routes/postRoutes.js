const express = require('express');
const postController = require('../controllers/postController');
const router = express.Router();

// C = create o post  http://localhost:5005/posts/cerate
router.post('/create', postController.createPost);

// R = Read o get  http://localhost:5005/posts/getAll
router.get('/getAll', postController.getAllPosts)

// R = Read o get (unitario)  http://localhost:5005/posts/getById/1
router.get('/getById/:id', postController.getPostById)

// U = Update o push/put (unitario)  http://localhost:5005/posts/update
//router.put('/update/:id', postController)

// D = Delete o borrar (unitario)  http://localhost:5005/posts/dlt
//router.delete('/dlt/:id', postController)

module.exports = router;