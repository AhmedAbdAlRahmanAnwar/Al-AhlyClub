module.exports = (req, res) => {
    res.send(`
        <h1>Failure Page</h1>
        <p>${JSON.stringify(req.query)}</p>
    `);
}