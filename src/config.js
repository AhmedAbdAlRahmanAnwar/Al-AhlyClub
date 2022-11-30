exports.app = {
    port: process.env.PORT || 3000,
}

exports.cyberSource = {
    url:process.env.CYBERSOURCE_URL,
    access_key: process.env.ACCESS_KEY,
    profile_id: process.env.PROFILE_ID,
    secret: process.env.CYBERSOURCE_SECRET,
    signed_field_names: process.env.SIGNED_FIELD_NAMES
}

exports.ahlyApi = {
    url: process.env.ALAHLY_API_URL,
    host: process.env.ALAHLY_HOST_HEADER
}

exports.baseUrl = process.env.BASE_URL;