const Joi = require('joi');

const transactionResponseSchema = {
    body: Joi.object().required().keys({
        decision: Joi.string().required().valid('ACCEPT', 'DECLINE', 'REVIEW', 'ERROR', 'CANCEL'),
        req_reference_number: Joi.string().required(),
        message: Joi.string().required()
    })
}

module.exports = transactionResponseSchema