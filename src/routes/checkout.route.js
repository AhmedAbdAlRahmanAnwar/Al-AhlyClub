const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout.controller');
const requestValidator = require('../middlewares/requestValidator.middleware');
const checkoutSchema = require('../dto/checkout.dto');

router.get('/checkout',
    requestValidator(checkoutSchema),
    checkoutController);

module.exports = router;