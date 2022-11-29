const express = require('express');
const router = express.Router();
const handlePaymentGatewayCallback = require('../controllers/PaymentGatewayCallback.controller');
const protect = require('../middlewares/verifyRequestOrigin.middleware');

router.post('/merchantNotification',
    protect,
    handlePaymentGatewayCallback);

module.exports = router;