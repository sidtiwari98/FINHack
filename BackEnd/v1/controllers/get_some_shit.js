let client = require('../../db/client');

module.exports = (req, res) => {

    client.find({}).exec((err, clients) => {
        if (err){
            res.status(400).send("DB fucked up.");
            return;
        } else {
            let data = {
                premiums: [0,0,0,0,0],
                expected: [0,0,0,0,0]
            };

            for (let x = 0; x < clients.length; x++){
                data.premiums[clients[x].risk - 1] += clients[x].premium;
                data.expected[clients[x].risk - 1] += clients[x].expected_cost;
            }

            res.json(data);
        }
    });
}