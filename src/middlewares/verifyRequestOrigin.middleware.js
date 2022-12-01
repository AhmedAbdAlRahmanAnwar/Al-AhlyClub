const {cyberSource} = require('../config');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next) => {
    console.log(req.headers)
    console.log(req.header('origin'))
    console.log(req.origin);
    console.log(req.get('origin'));
    if (req.get('origin') !== cyberSource.url) {
        throw new UnauthorizedError();
    }
    next();
}