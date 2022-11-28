const express = require('express');
const router = express.Router();
const transactionResponseHandler = require('../controllers/transactionResponse.controller');

router.post('/transactionResponse', transactionResponseHandler);

module.exports = router;