const ApiError = require('./ApiError')
const {NOT_FOUND} = require('../common/StatusCodes_Enum');
const {NOT_FOUND_MESSAGE} = require('../common/ErrorMessages_Enum');

class NotFoundError extends ApiError {
    constructor(message = NOT_FOUND_MESSAGE) {
        super(message, NOT_FOUND);
    }
}

module.exports = NotFoundError;