let pool = require('../../db/pool');

module.exports = (req, res) => {
    // pool.insertOne(
    //     {
    //         "premium": 29089,
    //         "ppl": 7,
    //         "cover": 25000,
    //         "risk": 0.57
    //     }
    // ).exec()
    pool.find({}, (err, pools) => {
        res.json(pools);
    })
}