const ApiError = require('./ApiError')
const {INTERNAL_ERROR_MESSAGE} = require("../common/ErrorMessages_Enum");
const {INTERNAL_ERROR} = require("../common/StatusCodes_Enum");

class InternalServerError extends ApiError {
    constructor(message = INTERNAL_ERROR_MESSAGE) {
        super(message, INTERNAL_ERROR);
    }
}

module.exports = InternalServerError;