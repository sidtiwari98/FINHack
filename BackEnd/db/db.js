let mongoose = require('mongoose');
let DB_URL = "mongodb+srv://k3km4n:jaybank@cluster0-wuak6.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(DB_URL);

mongoose.connection.on("connected", () => {
    console.log("Mongoose connection opened");
})

module.exports = mongoose;