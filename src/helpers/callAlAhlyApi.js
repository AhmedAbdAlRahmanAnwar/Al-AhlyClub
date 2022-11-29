const axios = require('axios');
const XMLParser = require('react-xml-parser');
const {ahlyApiUrl} = require('../config');

function callAlAhlyApi(reference_number, amount) {
    const [, membershipID, type] = reference_number.split('_');
    const alahlyPaymentEndpoint = type === 'subscription' ? 'Pay_MemShp' : 'DwnPay';

    const xmlBody =
    `<?xml version="1.0" encoding="utf-8"?>
    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
      <soap:Body>
        <${alahlyPaymentEndpoint} xmlns="http://tempuri.org/">
          <MemNum>${membershipID}</MemNum>
          <Value>${amount}</Value>
        </${alahlyPaymentEndpoint}>
      </soap:Body>
    </soap:Envelope>`;

    const headerConfig = {
        headers: {
            'Content-Type': 'text/xml',
            Host: ahlyApiUrl
        }
    };

    axios.post(`${ahlyApiUrl}/ahly/CalcWebService.asmx?op=${alahlyPaymentEndpoint}`, xmlBody, headerConfig)
        .then(res => {
            const xml = new XMLParser().parseFromString(res.data);
            xml.getElementsByTagName('anytype');
        })
        .catch(error => console.log(error.message))
}

module.exports = callAlAhlyApi;