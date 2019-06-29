let mongoose = require('./db');
let Schema = mongoose.Schema;

let client_schema = new Schema({
    pool: Number, //1,2,3
    risk: Number,
    expected_cost: Number,
    premium: Number
});

module.exports = mongoose.model('Client', client_schema);