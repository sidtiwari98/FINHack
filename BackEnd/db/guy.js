let mongoose = require('./db');
let Schema = mongoose.Schema;

let guy_schema = new Schema({
    dob: Date,
    bmi: Number,
    gender: Number,
    smoker: Number,
    children: Number
});

module.exports = mongoose.model('Guy', guy_schema);