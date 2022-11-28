module.exports = (req, res) => {
    const query = req.query;
    res.send(`
        <h1>Success</h1>
        <p>${JSON.stringify(query)}</p>
    `);
}