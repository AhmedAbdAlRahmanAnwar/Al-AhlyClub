const express = require('express');
const router = express.Router();

router.get('/failurePage', (req, res) => {
  res.send();
});

module.exports = router;
