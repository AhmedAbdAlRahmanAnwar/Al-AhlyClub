const isPaymentTampered = require('../helpers/paymentValidationChecker');
const {SUCCESS, BAD_REQUEST} = require("../common/StatusCodes_Enum");
const callAlAhlyApi = require('../helpers/callAlAhlyApi');


module.exports = function handlePaymentGatewayCallback(req, res) {
    try {
        const {decision, reason_code, req_reference_number, req_amount} = req.body;
        const SUCCESS_CODE = '100';

        if (decision === 'ACCEPT' && reason_code === SUCCESS_CODE && !isPaymentTampered(req.body)) {
            console.log("Payment Successful");
            callAlAhlyApi(req_reference_number, req_amount);
            res.status(SUCCESS).send();
            return;
        }

        console.log("Payment Failed");
        res.status(BAD_REQUEST).send();
    } catch (error) {
        res.status(BAD_REQUEST).send();
    }
}