const ApiError = require('../errors/ApiError');
const {INTERNAL_ERROR} = require('../common/StatusCodes_Enum');
const {INTERNAL_ERROR_MESSAGE} = require('../common/ErrorMessages_Enum');

module.exports = (error, request, response, next) => {
    const status = error.status || INTERNAL_ERROR;
    if (error instanceof ApiError){
        return response.status(status).json({
            status,
            message: error.message,
            data: null
        });
    }
    response.status(status).json({
        status,
        message: error.message || INTERNAL_ERROR_MESSAGE,
        data: null
    });
}