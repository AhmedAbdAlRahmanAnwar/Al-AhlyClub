const fs = require('fs');

module.exports = function writeTransactionLogs(transactionLog) {
    fs.readFile('logs.json', function (err, data) {
        const json = data.length ? JSON.parse(data) : [];
        json.push(transactionLog);
        fs.writeFile('logs.json', JSON.stringify(json), () => {});
    })
}