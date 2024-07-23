const express = require('express');
const router = express.Router();
const adminController = require('../Controller/AdminController'); // Adjust the path as necessary

// Login route
router.post('/login', adminController.login);

module.exports = router;
