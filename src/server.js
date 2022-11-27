require('dotenv').config();
const {app:{port}} = require('./config');
const App = require('./App');

const app = new App();
app.listen(port);