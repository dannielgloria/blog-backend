const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

/// http://localhost:5005/users/create
router.post('/create', userController.createUser)

module.exports = router