const isPaymentTampered = require('../helpers/paymentValidationChecker');
const {SUCCESS, BAD_REQUEST, INTERNAL_ERROR} = require("../common/StatusCodes_Enum");
const callAlAhlyApi = require('../helpers/callAlAhlyApi');
const writeTransactionLog = require("../helpers/writeLogFile");

module.exports = async function handlePaymentGatewayCallback(req, res) {
    // try {
        const {decision, reason_code, req_reference_number, req_amount} = req.body;
        const SUCCESS_CODE = '100';

        writeTransactionLog(req.body);

        if (decision === 'ACCEPT' && reason_code === SUCCESS_CODE && !isPaymentTampered(req.body)) {
            const {data} = await callAlAhlyApi(req_reference_number, req_amount);
            console.log("data xml alahly :" + data);
            data ? res.status(SUCCESS).send() : res.status(INTERNAL_ERROR).send();
            return;
        }

        res.status(BAD_REQUEST).send();
    // } catch (error) {
    //     res.status(BAD_REQUEST).send();
    // }
}