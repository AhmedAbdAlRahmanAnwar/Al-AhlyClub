const {cyberSource: {access_key, profile_id, signed_field_names, url}} = require('../config');
const {SUCCESS} = require('../common/StatusCodes_Enum');
const buildCheckoutFormData = require('../helpers/buildCheckoutFormData');

function checkout(req, res) {
    const {membershipID, amount, locale, type, name} = req.query;
    const reference_number = name + '_' + membershipID + '_' + type;
    const cyberSourceEndpoint = '/pay';
    const {
        signature,
        transaction_uuid,
        signed_date_time,
        bill_to_forename,
        bill_to_surname
    } = buildCheckoutFormData(reference_number, amount, locale, name);

    const checkoutForm =
        `<html lang="en">
    <head><title>Secure Acceptance</title></head>
    <body onload="document.payment_confirmation.submit()">
    <form id="payment_confirmation" name="payment_confirmation" action="${url}${cyberSourceEndpoint}" method="post">
        <input type="hidden" id="access_key" name="access_key" value="${access_key}"/>
        <input type="hidden" id="profile_id" name="profile_id" value="${profile_id}"/>
        <input type="hidden" id="transaction_uuid" name="transaction_uuid" value="${transaction_uuid}"/>
        <input type="hidden" id="signed_field_names" name="signed_field_names" value="${signed_field_names}"/>
        <input type="hidden" id="signed_date_time" name="signed_date_time" value="${signed_date_time}"/>
        <input type="hidden" id="locale" name="locale" value="${locale}"/>
        <input type="hidden" id="transaction_type" name="transaction_type" value="sale"/>
        <input type="hidden" id="reference_number" name="reference_number" value="${reference_number}"/>
        <input type="hidden" id="amount" name="amount" value="${amount}"/>
        <input type="hidden" id="currency" name="currency" value="EGP"/>
        <input type="hidden" id="bill_to_forename" name="bill_to_forename" value="${bill_to_forename}"/>
        <input type="hidden" id="bill_to_surname" name="bill_to_surname" value="${bill_to_surname}"/>
        <input type="hidden" id="bill_to_address_city" name="bill_to_address_city" value="cairo"/>
        <input type="hidden" id="bill_to_address_country" name="bill_to_address_country" value="EG"/>
        <input type="hidden" id="signature" name="signature" value="${signature}"/>
    </form></body></html>`;

    res.status(SUCCESS).json({
        status: SUCCESS,
        message: 'Form Created Successfully',
        data: checkoutForm
    });
}

module.exports = checkout;