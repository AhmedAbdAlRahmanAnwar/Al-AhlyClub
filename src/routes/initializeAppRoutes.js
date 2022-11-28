const {baseUrl} = require('../config');
const errorHandler = require('../middlewares/error.middleware');
const notFoundHandler = require('../middlewares/notFound.middleware');

// Route Files
const healthRoute = require('./health.route');
const membershipPaymentRoute = require('./membershipPayment.route');
const checkoutRoute = require('./checkout.route');
const handleTransactionRoute = require('./transactionResponse.route');
const successRoute = require('../routes/success.route');
const failureRoute = require('../routes/failure.route');
const logFile = require('../../logs.json');

// Register all app routes
module.exports = (app) => {
    app.use(healthRoute);      /* Remove this route in production */
    app.use(`${baseUrl}`, checkoutRoute);
    app.use(`${baseUrl}`, membershipPaymentRoute);
    app.use(`${baseUrl}`, handleTransactionRoute);
    app.use(successRoute);
    app.use(failureRoute);

    // Send log file
    app.get('/logs',(req, res)=>{
        res.json(logFile);
    })

    // Not found MiddleWare
    app.use(notFoundHandler);

    // Error MiddleWare
    app.use(errorHandler);
}