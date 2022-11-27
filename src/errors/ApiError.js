const {INTERNAL_ERROR} = require('../common/StatusCodes_Enum');

class ApiError extends Error{
    constructor(message, status = INTERNAL_ERROR) {
        super(message);
        if (this.constructor === ApiError) {
            throw new Error("Abstract classes can't be instantiated");
        }
        this.status = status;
    }
}

module.exports = ApiError;