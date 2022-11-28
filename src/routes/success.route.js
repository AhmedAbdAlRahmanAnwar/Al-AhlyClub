const express = require('express');
const router = express.Router();
const successHandler = require('../controllers/success.controller');

router.get('/success', successHandler);

module.exports = router;