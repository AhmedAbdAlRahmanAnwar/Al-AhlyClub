const {baseUrl} = require('../config');
const errorHandler = require('../middlewares/error.middleware');
const notFoundHandler = require('../middlewares/notFound.middleware');

// Route Files
const welcomeRoute = require('./welcome.route');
const membershipPaymentRoutes = require('./membershipPayment.route');
const checkoutRoute = require('./checkout.route');

// Register all app routes
module.exports = (app) => {
    app.use(welcomeRoute);      /* Remove this route in production */
    app.use(`${baseUrl}`, membershipPaymentRoutes);
    app.use(`${baseUrl}`, checkoutRoute);

    // Not found MiddleWare
    app.use(notFoundHandler);

    // Error MiddleWare
    app.use(errorHandler);
}