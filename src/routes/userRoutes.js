const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

// Crear usuario: POST /users/create
router.post('/create', userController.createUser);

// Obtener todos los usuarios: GET /users/getAll
router.get('/getAll', userController.getAllUsers);

// Obtener un usuario por ID: GET /users/getById/:id
router.get('/getById/:id', userController.getUserById);

// Actualizar usuario por ID: PUT /users/update/:id
router.put('/update/:id', userController.updateUser);

// Eliminar usuario por ID: DELETE /users/delete/:id
router.delete('/delete/:id', userController.deleteUser);

module.exports = router;