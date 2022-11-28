const ApiError = require('./ApiError')
const {BAD_REQUEST} = require('../common/StatusCodes_Enum');
const {BAD_REQUEST_MESSAGE} = require('../common/ErrorMessages_Enum');

class BadRequestError extends ApiError{
    constructor(message = BAD_REQUEST_MESSAGE) {
        super(message, BAD_REQUEST);
    }
}

module.exports = BadRequestError;