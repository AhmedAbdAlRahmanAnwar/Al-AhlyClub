const fs = require('fs');
const path = require('path');

module.exports = function writeTransactionLogs(transactionLog) {
    fs.readFile(path.join(__dirname, '../../logs.json'), function (err, data) {
        const json = data.length ? JSON.parse(data) : [];
        json.push(transactionLog);
        fs.writeFile('logs.json', JSON.stringify(json), () => {});
    })
}