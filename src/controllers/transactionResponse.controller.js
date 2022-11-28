const {cyberSource} = require('../config');
const BadRequestError = require('../errors/BadRequestError');
const {SUCCESS} = require("../common/StatusCodes_Enum");

function f(req, res, next) {
    // if (req.get('origin') !== cyberSource.url) {
    //     console.log("error")
    //     res.send("unauthorized");
    //     return;
    // }
    const {decision, req_reference_number} = req.body

    if (!(decision && req_reference_number)) {
        throw new BadRequestError();
    }
    res.status(SUCCESS).json({
        status: SUCCESS,
        message: 'Payment Transaction Response returned successfully',
        data: {
            paymentState: decision,
            type: req_reference_number.split('_')[1]
        }
    });
}

module.exports = f