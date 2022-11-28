const express = require('express');
const router = express.Router();
const handlePaymentGatewayCallback = require('../controllers/PaymentGatewayCallback.controller');

router.post('/merchantNotification',
    handlePaymentGatewayCallback);

module.exports = router;