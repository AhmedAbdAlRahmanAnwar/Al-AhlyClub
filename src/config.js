exports.app = {
    port: process.env.PORT || 3000,
}

exports.cyberSource = {
    access_key: process.env.ACCESS_KEY,
    profile_id: process.env.PROFILE_ID,
    secret: process.env.CYBERSOURCE_SECRET,
}

exports.baseUrl = process.env.BASE_URL;
exports.jwtSecret = process.env.JWT_SECRET;