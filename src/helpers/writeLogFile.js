const fs = require('fs');
const path = require('path');
const InternalServerError = require('../errors/InternalServerError');

module.exports = function writeTransactionLogs(transactionLog) {
    const {decision} = transactionLog;
    const logFile = decision === 'ACCEPT' ? 'successLogs.json' : 'failureLogs.json';

    fs.readFile(path.join(__dirname, `../logs/${logFile}`), function (err, data) {
        if (err === null) {
            const json = data.length ? JSON.parse(data) : [];
            json.push(transactionLog);
            fs.writeFile(path.join(__dirname, `../logs/${logFile}`), JSON.stringify(json), () => {});
        } else {
            throw new InternalServerError();
        }
    });
}