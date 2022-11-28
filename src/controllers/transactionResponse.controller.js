const {cyberSource} = require('../config');

function f(req, res, next) {
    /*if (req.get('origin') !== cyberSource.url) {
        console.log("error")
        res.send("unauthorized");
    }
    if (req.body){
        const decision = req.body["decision"];
        if (decision === 'ACCEPT'){
            const type = req.body["req_reference_number"].split()
            res.status().json({type:"subscription"})
        }else{

        }
    }*/
}

module.exports = f