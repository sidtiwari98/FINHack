let client = require('../../db/client');

module.exports = (req, res) => {
    let parms = req.query;
    console.log(parms);
    if (parms.pool){
        //We can try and do some shit;

        try {
            let pool = parseInt(parms.pool);
            
            client.find(
                {
                    'pool': pool
                }
            ).exec((err, clients) => {
                // res.json(clients);
                let vals = [0, 0, 0, 0, 0];

                for (let x = 0; x < clients.length; x++){
                    vals[clients[x].risk - 1]++;
                }

                for (let x = 0; x < 5; x++){
                    vals[x] = vals[x] / clients.length;
                }

                res.json(vals);

            })
        } catch (error){
            res.status(400).send("Bad value for pool parameter.");
        }
    } else {
        res.status(400).send("Pool not specified.");
    }
}