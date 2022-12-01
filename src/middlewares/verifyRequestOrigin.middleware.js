const {cyberSource} = require('../config');
const UnauthorizedError = require('../errors/UnauthorizedError');

module.exports = (req, res, next)=>{
    console.log(req.get('origin'));
    console.log(req.get('Origin'));
    if (req.get('origin') !== cyberSource.url) {
        throw new UnauthorizedError();
    }
    next();
}