const Joi = require('joi');

const checkoutSchema = {
    query: Joi.object().required().keys({
        amount: Joi.number().required().integer().positive(),
        membershipID: Joi.string().required().alphanum().trim().min(1),
        locale: Joi.string().required().trim().valid('ar', 'en')
    })
}

module.exports = checkoutSchema