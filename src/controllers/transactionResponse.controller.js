const BadRequestError = require('../errors/BadRequestError');
const {SUCCESS} = require("../common/StatusCodes_Enum");

function sendPaymentStatus(req, res) {
    const {decision, req_reference_number, message} = req.body;

    res.status(SUCCESS).json({
        status: SUCCESS,
        message,
        data: {
            decision,
            type: req_reference_number.split('_')[1]
        }
    });
}

module.exports = sendPaymentStatus;