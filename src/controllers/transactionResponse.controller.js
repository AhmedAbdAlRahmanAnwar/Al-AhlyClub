const BadRequestError = require('../errors/BadRequestError');
const {SUCCESS} = require("../common/StatusCodes_Enum");

function handleTransaction(req, res) {
    const {decision, req_reference_number, signed_date_time, transaction_id} = req.body;

    // res.status(SUCCESS).json({
    //     status: SUCCESS,
    //     message,
    //     data: {
    //         decision,
    //         type: req_reference_number.split('_')[1]
    //     }
    // });

    if (decision === 'ACCEPT'){
        res.redirect(`/success/get?decision=${decision}&req_reference_number=${req_reference_number}&signed_date_time=${signed_date_time}&transaction_id=${transaction_id}`);
    }else{
        res.redirect(`/failure/get?decision=${decision}&req_reference_number=${req_reference_number}&signed_date_time=${signed_date_time}&transaction_id=${transaction_id}`);
    }

    // const query = req.query;
    // res.send(`
    //     <h1>Success - Post</h1>
    //     <p>${JSON.stringify(query)}</p>
    //     <p>${JSON.stringify(req.body)}</p>
    //     `);
}

module.exports = handleTransaction;