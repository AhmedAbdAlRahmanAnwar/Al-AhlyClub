const express = require('express');
const router = express.Router();
const failureHandler = require('../controllers/failure.controller');

router.get('/failure', failureHandler);

module.exports = router;