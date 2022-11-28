function handleTransaction(req, res) {
    const {
        decision,
        req_reference_number,
        signed_date_time,
        transaction_id
    } = req.body;
    const queryString = `decision=${decision}&req_reference_number=${req_reference_number}&signed_date_time=${signed_date_time}&transaction_id=${transaction_id}`

    if (decision === 'ACCEPT') {
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