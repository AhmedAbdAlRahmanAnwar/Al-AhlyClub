const express = require('express');
const router = express.Router();
const healthChecker = require('../controllers/health.controller');

router.get('/', healthChecker);

module.exports = router;