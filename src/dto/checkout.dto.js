const Joi = require('joi');

const supportedLanguages = ['ar-xn', 'en-us'];

const checkoutSchema = {
    query: Joi.object().required().keys({
        amount: Joi.number().required().integer().positive(),
        membershipID: Joi.number().required().positive().min(1),
        name: Joi.string().required(),
        locale: Joi.string().required().trim().valid(...supportedLanguages),
        type: Joi.string().required().trim().valid('installment', 'subscription')
    })
}

module.exports = checkoutSchema;