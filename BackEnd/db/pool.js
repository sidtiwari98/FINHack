let mongoose = require('./db');
let Schema = mongoose.Schema;

let pool_schema = new Schema({
    premium: Number,
    ppl: Number,
    cover: Number,
    risk: Number
});

module.exports = mongoose.model('Pool', pool_schema);