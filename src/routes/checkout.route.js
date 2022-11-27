const express = require('express');
const router = express.Router();
const checkoutController = require('../controllers/checkout.controller');

router.get('/checkout', checkoutController);

module.exports = router;