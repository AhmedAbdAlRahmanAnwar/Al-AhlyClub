const {baseUrl} = require('../config');
const errorHandler = require('../middlewares/error.middleware');
const notFoundHandler = require('../middlewares/notFound.middleware');

// Route Files
const healthRoute = require('./health.route');
const membershipPaymentRoute = require('./membershipPayment.route');
const checkoutRoute = require('./checkout.route');
const handleTransactionRoute = require('./transactionResponse.route');


// Register all app routes
module.exports = (app) => {
    app.use(healthRoute);      /* Remove this route in production */
    app.use(`${baseUrl}`, checkoutRoute);
    app.use(`${baseUrl}`, membershipPaymentRoute);
    app.use(`${baseUrl}`, handleTransactionRoute);

    app.get('/success/get', (req, res)=>{
        const query = req.query;
        res.send(`
        <h1>Success - Get</h1>
        <p>${JSON.stringify(query)}</p>
        <p>${JSON.stringify(req.body)}</p>
        `);
    })

    app.post('/success/post', (req, res)=>{
        const query = req.query;
        const origin = req.get('origin');
        res.send(`
        <h1>Success - Post</h1>
        <p>${JSON.stringify(query)}</p>
        <p>${JSON.stringify(origin)}</p>
        <p>${JSON.stringify(req.body)}</p>
        `);
    })

    app.get('/failure/get', (req, res)=>{
        const query = req.query;
        res.send(`
        <h1>failure - Get</h1>
        <p>${JSON.stringify(query)}</p>
        <p>${JSON.stringify(req.body)}</p>
        `);
    })

    app.post('/failure/post', (req, res)=>{
        const query = req.query;
        res.send(`
        <h1>failure - Post</h1>
        <p>${JSON.stringify(query)}</p>
        <p>${JSON.stringify(req.body)}</p>
        `);
    })

    // Not found MiddleWare
    app.use(notFoundHandler);

    // Error MiddleWare
    app.use(errorHandler);
}