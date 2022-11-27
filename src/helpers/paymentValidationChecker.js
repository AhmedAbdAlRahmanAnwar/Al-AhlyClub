const {cyberSource:{secret}} = require('../config');
const crypto = require('crypto');

module.exports = function isPaymentTampered(responseBody) {
    const {signed_field_names, signature} = responseBody;
    const signed_fields = signed_field_names.split(',');
    signed_fields.forEach((key, index) => {
        signed_fields[index] = key + "=" + responseBody[key];
    });

    const signedFieldsAsString = signed_fields.join(',');
    const hmacHash = crypto.createHmac('sha256', secret).update(signedFieldsAsString).digest('base64');
    return hmacHash !== signature;
}