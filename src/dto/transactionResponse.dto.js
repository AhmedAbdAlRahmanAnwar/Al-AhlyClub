const Joi = require('joi');
const cyberSourceDecisions = ['ACCEPT', 'DECLINE', 'REVIEW', 'ERROR', 'CANCEL'];

const transactionResponseSchema = {
    body: Joi.object().required().keys({
        decision: Joi.string().required().valid(...cyberSourceDecisions),
        req_reference_number: Joi.string().required(),
        signed_date_time: Joi.date().required().iso(),
        transaction_id: Joi.string().required(),
        reason_code: Joi.string().required().pattern(/^[0-9]+$/).max(5),
        req_amount: Joi.string().required().pattern(/^[0-9]+(.[0-9]+)?$/)
    }).unknown(true)
}

module.exports = transactionResponseSchema;