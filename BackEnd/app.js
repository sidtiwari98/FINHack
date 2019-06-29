require('dotenv').config()
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');
var cors = require('cors');

const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.on('ready', () => {
    console.log("Discord bot is legit");
})

client.login(process.env.BOT_TOKEN);

var api_v1 = require('./v1/api_route');
var app = express();
app.use(cors());
var http = require('http').Server(app);
var io = require('socket.io')(http);

io.on('connection', (socket) => {
    console.log("A socket connected");
})

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', (req, res, next) => {
    req.client = client;
    req.io = io;
    next();
})

app.use('/v1', api_v1);

http.listen(6969, () => {
    console.log("Backend started on 6969");
})