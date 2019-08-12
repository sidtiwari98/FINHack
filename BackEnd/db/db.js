let mongoose = require('mongoose');
let DB_URL = process.env.DB_URL;

mongoose.connect(DB_URL);

mongoose.connection.on("connected", () => {
    console.log("Mongoose connection opened");
})


// sSsqsqdwdw

module.exports = mongoose;