const BadRequestError = require('../errors/BadRequestError');
const RequestAttributes = ['body', 'params', 'query', 'headers'];

module.exports = (schema) => {
    return (req, res, next) => {
        const validationErrors = [];
        RequestAttributes.forEach(key => {
            if (schema[key]) {
                const {error} = schema[key].validate(req[key], {abortEarly:false});
                if (error) {
                    const validationErrorMessage = error.details.reduce((message, error) => message + error.message + ", ",'');
                    validationErrors.push(validationErrorMessage);
                }
            }
        });

        if (validationErrors.length){
            // Uncomment in Development
            // throw new BadRequestError(validationErrors.join());

            // Uncomment in Production
            throw new BadRequestError();
        }
        next();
    };
}