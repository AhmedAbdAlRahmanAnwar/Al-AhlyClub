const Joi = require('joi');

const checkoutSchema = {
    query: Joi.object().required().keys({
        amount: Joi.number().required().integer().positive(),
        membershipID: Joi.number().required().positive().min(1),
        locale: Joi.string().required().trim().valid('ar', 'en'),

    })
}

module.exports = checkoutSchema