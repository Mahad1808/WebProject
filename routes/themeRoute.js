const express = require('express');
const router = express.Router();

const themeController = require('../controller/themeController');

// Create a new theme
router.post('/add-theme', themeController.createTheme);

// Change theme
router.put('/updateTheme', themeController.updateTheme);

module.exports = router;