const ApiError = require('./ApiError');
const {UNAUTHORIZED} = require('../common/StatusCodes_Enum');
const {UNAUTHORIZED_MESSAGE} = require('../common/ErrorMessages_Enum');

class UnauthorizedError extends ApiError{
    constructor(message = UNAUTHORIZED_MESSAGE) {
        super(message, UNAUTHORIZED);
    }
}

module.exports = UnauthorizedError;