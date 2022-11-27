const jwt = require('jsonwebtoken');
const {cyberSource: {access_key, profile_id}} = require('../config');
const {jwtSecret} = require('../config');
const {SUCCESS} = require('../common/StatusCodes_Enum');
const InternalServerError = require('../errors/InternalServerError');
const buildCheckoutFormData = require('../helpers/buildCheckoutFormData');

function checkout(req, res, next) {
    const {membershipID, amount, locale} = req.params;
    const {signature, transaction_uuid, signed_date_time} = buildCheckoutFormData(membershipID, amount, locale);

    const checkoutForm =
        `<html lang="en">
    <head><title>Secure Acceptance</title></head>
    <body onload="document.payment_confirmation.submit()">
    <form id="payment_confirmation" name="payment_confirmation" action="https://testsecureacceptance.cybersource.com/pay" method="post">
        <input type="hidden" id="access_key" name="access_key" value="${access_key}"/>
        <input type="hidden" id="profile_id" name="profile_id" value="${profile_id}"/>
        <input type="hidden" id="transaction_uuid" name="transaction_uuid" value="${transaction_uuid}"/>
        <input type="hidden" id="signed_field_names" name="signed_field_names"
               value="access_key,profile_id,transaction_uuid,signed_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency,bill_to_address_country"/>
        <input type="hidden" id="signed_date_time" name="signed_date_time" value="${signed_date_time}"/>
        <input type="hidden" id="locale" name="locale" value="${locale}"/>
        <input type="hidden" id="transaction_type" name="transaction_type" value="sale"/>
        <input type="hidden" id="reference_number" name="reference_number" value="${membershipID}"/>
        <input type="hidden" id="amount" name="amount" value="${amount}"/>
        <input type="hidden" id="currency" name="currency" value="EGP"/>
        <input type="hidden" id="bill_to_address_country" name="bill_to_address_country" value="EG"/>
        <input type="hidden" id="signature" name="signature" value="${signature}"/>
    </form></body></html>`;

    jwt.sign({checkoutForm}, jwtSecret, {expiresIn: '5m'}, (error, encryptedCheckoutForm) => {
        if (error){
            throw new InternalServerError();
        }
        res.status(SUCCESS).json({
            status: SUCCESS,
            message: 'Form Created Successfully',
            data: encryptedCheckoutForm
        });
    });
}

module.exports = checkout;