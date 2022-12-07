const express = require('express');
const router = express.Router();

router.get('/successPage', (req, res) => {
  res.send();
});

module.exports = router;
