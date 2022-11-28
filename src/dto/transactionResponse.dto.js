const Joi = require('joi');

const transactionResponseSchema = {
    body: Joi.object().required().keys({
        decision: Joi.string().required().valid('ACCEPT', 'DECLINE', 'REVIEW', 'ERROR', 'CANCEL'),
        req_reference_number: Joi.string().required(),
        signed_date_time: Joi.date().required().iso(),
        transaction_id: Joi.string().required(),
        reason_code: Joi.string().required().pattern(/^[0-9]+$/).max(5)
    }).unknown(true)
}

module.exports = transactionResponseSchema;