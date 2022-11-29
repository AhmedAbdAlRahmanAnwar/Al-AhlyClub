const isPaymentTampered = require('../helpers/paymentValidationChecker');
const axios = require('axios');

module.exports = function handlePaymentGatewayCallback(req, res){
    const {decision, reason_code} = req.body;
    const SUCCESS_CODE = '100';

    if (decision !== 'ACCEPT' || reason_code !== SUCCESS_CODE || isPaymentTampered(req.body)) {
        console.log("Payment Failed");
        res.status(400).send();
        return;
    }

    //Decision ACCEPT, Call Al-AhlyClub EndPoint
    // axios.get('',{}).then(res =>{});
    console.log("Payment Successful")
    res.status(200).send();
}