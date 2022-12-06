const {cyberSource: {access_key, profile_id, secret}} = require('../config');
const {v4: uuid} = require('uuid');
const crypto = require('crypto');
const {cyberSource:{signed_field_names}} = require('../config');
const {faker} = require('@faker-js/faker');

function convertObjToCommaSeparatedString(obj) {
    return Object.keys(obj).map(key => key + '=' + obj[key]).join(',');
}

module.exports = function buildCheckoutFormData(reference_number, amount, locale, name) {
    const fullName = name.split(' ');

    const formData = {
        access_key,
        profile_id,
        transaction_uuid: uuid(),
        signed_field_names,
        signed_date_time: new Date().toISOString().substring(0, 19) + 'Z',
        locale,
        transaction_type: 'sale',
        reference_number,
        amount,
        currency: 'EGP',
        bill_to_forename: fullName[0],
        bill_to_surname: fullName.slice(-1),
        bill_to_email: faker.internet.email(),
        bill_to_address_line1: faker.address.streetAddress(),
        bill_to_address_city: '',
        bill_to_address_country: 'EG'
    };

    const formDataString = convertObjToCommaSeparatedString(formData);
    formData.signature = crypto.createHmac('sha256', secret).update(formDataString).digest('base64');
    return formData;
}