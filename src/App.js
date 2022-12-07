const express = require('express');
const {app} = require('./config');
const initializeAppRoutes = require('./routes/initializeAppRoutes');
const cors = require('cors');
const helmet = require('helmet');
const hpp = require('hpp');
const limiter = require('./middlewares/ratelimiter.middleware');


class App {
    #app = null;

    constructor() {
        this.#app = this.#app ? this.#app : express();
        this.#setup();
        initializeAppRoutes(this.#app);
    }

    #setup() {
        const bodySize = '5mb';

        this.#app.use(cors());
        this.#app.use(express.json({limit: bodySize}));
        this.#app.use(express.urlencoded({limit: bodySize, extended:false}));

        // Middleware to protect against HTTP Parameter Pollution attacks
        this.#app.use(hpp());
        // Set Security Headers
        this.#app.use(helmet());
        // Sets "Strict-Transport-Security"
        this.#app.use(
            helmet.hsts({
                maxAge: 6 * 30 * 24 * 60 * 60,
                includeSubDomains: true
            })
        );
        // RateLimiter to all requests
        this.#app.use(limiter);
    }

    listen(port = app.port) {
        this.#app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    }
}

module.exports = App;