const express = require('express');
const router = express.Router();
const userController = require('../Controller/UserController'); 

// Signup route
router.post('/signup', userController.signup);

// Login route
router.post('/login', userController.login);

module.exports = router;
