const fs = require('fs');
const path = require('path');

module.exports = function writeTransactionLogs(transactionLog) {
    const {decision} = transactionLog;
    const logFile = decision === 'ACCEPT' ? 'successLogs.json' : 'failureLogs.json';

    fs.readFile(path.join(__dirname, `../logs/${logFile}`), function (err, data) {
        console.log(err)
        if (err === null){
            const json = data.length ? JSON.parse(data) : [];
            json.push(transactionLog);
            fs.writeFile(path.join(__dirname, `../logs/${logFile}`), JSON.stringify(json), () => {});
        }
    });
}