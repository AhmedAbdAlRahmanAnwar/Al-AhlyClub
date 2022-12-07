const isPaymentTampered = require('../helpers/paymentValidationChecker');

function handleTransaction(req, res) {
  const {
    decision,
    req_reference_number,
    signed_date_time,
    transaction_id,
    reason_code,
    req_amount,
  } = req.body;

  const [name, membershipID, type] = req_reference_number.split('_');

  const queryString = {
    name,
    membershipID,
    type,
    amount: req_amount,
    date: signed_date_time,
    transaction_id,
  };

  // `decision=${decision}&
  // req_reference_number=${req_reference_number}&
  // signed_date_time=${signed_date_time}&
  // transaction_id=${transaction_id}&
  // req_amount=${req_amount}`;
  const SUCCESS_CODE = '100';

  if (
    decision === 'ACCEPT' &&
    reason_code === SUCCESS_CODE &&
    !isPaymentTampered(req.body)
  ) {
    res.redirect(`/successPage?response=${JSON.stringify(queryString)}`);
  } else {
    res.redirect(`/failurePage?response=${JSON.stringify(queryString)}`);
  }
}

module.exports = handleTransaction;
