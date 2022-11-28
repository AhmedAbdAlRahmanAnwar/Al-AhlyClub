const {SUCCESS} = require("../common/StatusCodes_Enum");

module.exports = (req, res) => {
    res.status(SUCCESS).json({
        status: SUCCESS,
        message: "Server Running Successfully",
        data: null
    });
}