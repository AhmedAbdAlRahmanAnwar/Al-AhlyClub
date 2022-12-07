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

  const SUCCESS_CODE = '100';

  if (
    decision === 'ACCEPT' &&
    reason_code === SUCCESS_CODE &&
    !isPaymentTampered(req.body)
  ) {
    res.redirect(`/successPage?${JSON.stringify(queryString)}`);
  } else {
    res.redirect(`/failurePage?${JSON.stringify(queryString)}`);
  }
}

module.exports = handleTransaction;
