module.exports = (req, res) => {
    res.send(`
        <h1>Success Page</h1>
        <p>${JSON.stringify(req.query)}</p>
    `);
}