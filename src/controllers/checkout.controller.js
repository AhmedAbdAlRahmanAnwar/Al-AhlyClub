const {cyberSource: {url, signed_field_names}} = require('../config');
const {SUCCESS} = require('../common/StatusCodes_Enum');
const buildCheckoutFormData = require('../helpers/buildCheckoutFormData');

function checkout(req, res) {
    const {membershipID, amount, locale, type, name} = req.query;
    const reference_number = name + '_' + membershipID + '_' + type;
    const cyberSourceEndpoint = '/pay';
    const formInputValues = buildCheckoutFormData(reference_number, amount, locale, name);
    const formInputTags = signed_field_names.split(',')
        .map(field => `<input type="hidden" id="${field}" name="${field}" value="${formInputValues[field]}"/>`).join('');

    const checkoutForm =
    `<html lang="en"><body onload="document.payment_confirmation.submit()">
    <form id="payment_confirmation" name="payment_confirmation" action="${url}${cyberSourceEndpoint}" method="post">
        ${formInputTags}<input type="hidden" id="signature" name="signature" value="${formInputValues["signature"]}"/>
    </form></body></html>`;

    res.status(SUCCESS).json({
        status: SUCCESS,
        message: 'Form Created Successfully',
        data: checkoutForm
    });
}

module.exports = checkout;