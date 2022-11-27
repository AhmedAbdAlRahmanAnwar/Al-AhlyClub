const express = require('express');
const router = express.Router();
const {SUCCESS} = require('../common/StatusCodes_Enum');

router.get('/', (req, res) => {
    res.status(SUCCESS).json({
        status: SUCCESS,
        message: "Hello World",
        data: null
    });
});

module.exports = router;