const {cyberSource: {access_key, profile_id, secret}} = require('../config');
const {v4: uuid} = require("uuid");
const crypto = require("crypto");

function convertObjToCommaSeparatedString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join(',');
}

module.exports = function buildCheckoutFormData(reference_number, amount, locale) {
    const formData = {
        access_key,
        profile_id,
        transaction_uuid: uuid(),
        signed_field_names: 'access_key,profile_id,transaction_uuid,signed_field_names,signed_date_time,locale,transaction_type,reference_number,amount,currency',
        signed_date_time: new Date().toISOString().substring(0, 19) + 'Z',
        locale,
        transaction_type: 'sale',
        reference_number,
        amount,
        currency: 'EGP',
    };

    const formDataString = convertObjToCommaSeparatedString(formData);
    formData.signature = crypto.createHmac('sha256', secret).update(formDataString).digest('base64');
    return formData;
}