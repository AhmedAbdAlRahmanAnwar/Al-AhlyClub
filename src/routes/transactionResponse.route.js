const express = require('express');
const router = express.Router();
const transactionResponseHandler = require('../controllers/transactionResponse.controller');
const protect = require('../middlewares/verifyRequestOrigin.middleware');
const requestValidator = require('../middlewares/requestValidator.middleware');
const transactionResponseSchema = require('../dto/transactionResponse.dto')

router.post('/handleTransaction',
    protect,
    requestValidator(transactionResponseSchema),
    transactionResponseHandler);

module.exports = router;