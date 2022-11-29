const express = require('express');
const router = express.Router();

router.get('/failure', (req, res) => {
    res.send();
});

module.exports = router;