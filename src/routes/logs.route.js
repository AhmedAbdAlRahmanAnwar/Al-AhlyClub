const express = require('express');
const path = require("path");
const router = express.Router();

router.get('/logs/success', (req, res)=>{
    res.sendFile(path.join(__dirname, '../logs/successLogs.json'));
});

router.get('/logs/failure', (req, res)=>{
    res.sendFile(path.join(__dirname, '../logs/failureLogs.json'));
});

module.exports = router;