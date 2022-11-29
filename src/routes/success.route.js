const express = require('express');
const router = express.Router();

router.get('/success', (req, res) => {
    res.send();
});

module.exports = router;