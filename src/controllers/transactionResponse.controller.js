function handleTransaction(req, res) {
    const {decision, req_reference_number, signed_date_time, transaction_id, reason_code} = req.body;
    const queryString = `decision=${decision}&req_reference_number=${req_reference_number}&signed_date_time=${signed_date_time}&transaction_id=${transaction_id}`;
    const SUCCESS_CODE = '100';

    if (decision === 'ACCEPT' && reason_code === SUCCESS_CODE) {
        res.redirect(`/success?${queryString}`);
    } else {
        res.redirect(`/failure?${queryString}`);
    }
}

module.exports = handleTransaction;


// const query = req.query;
// res.send(`
//     <h1>Success - Post</h1>
//     <p>${JSON.stringify(query)}</p>
//     <p>${JSON.stringify(req.body)}</p>
//     `);