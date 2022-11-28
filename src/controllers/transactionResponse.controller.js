const BadRequestError = require('../errors/BadRequestError');
const {SUCCESS} = require("../common/StatusCodes_Enum");

function handleTransaction(req, res) {
    // const {decision, req_reference_number, message} = req.body;
    //
    // res.status(SUCCESS).json({
    //     status: SUCCESS,
    //     message,
    //     data: {
    //         decision,
    //         type: req_reference_number.split('_')[1]
    //     }
    // });

        const query = req.query;
        const origin = req.get('origin');
        res.send(`
        <h1>Success - Post</h1>
        <p>${JSON.stringify(query)}</p>
        <p>${JSON.stringify(origin)}</p>
        <p>${JSON.stringify(req.body)}</p>
        `);
}

module.exports = handleTransaction;