const isPaymentTampered = require('../helpers/paymentValidationChecker');
const {SUCCESS, BAD_REQUEST, INTERNAL_ERROR} = require("../common/StatusCodes_Enum");
const callAlAhlyApi = require('../helpers/callAlAhlyApi');
const writeTransactionLog = require("../helpers/writeLogFile");

module.exports = async function handlePaymentGatewayCallback(req, res) {
    // try {
        const {decision, reason_code, req_reference_number, req_amount} = req.body;
        const SUCCESS_CODE = '100';

        writeTransactionLog(req.body);
        console.log(isPaymentTampered(req.body))
        console.log(decision, reason_code)
        if (decision === 'ACCEPT' && reason_code === SUCCESS_CODE && !isPaymentTampered(req.body)) {
            const {data} = await callAlAhlyApi(req_reference_number, req_amount);
            data ? res.status(SUCCESS).send() : res.status(INTERNAL_ERROR).send();
            console.log("in if");
            return;
        }
        console.log("after")
        res.status(BAD_REQUEST).send();
    // } catch (error) {
    //     res.status(BAD_REQUEST).send();
    // }
}