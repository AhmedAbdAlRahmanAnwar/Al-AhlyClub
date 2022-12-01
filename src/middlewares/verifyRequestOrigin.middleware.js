const {cyberSource} = require('../config');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
    if (req.get('origin') !== cyberSource.url) {
        throw new UnauthorizedError();
    }
    next();
}