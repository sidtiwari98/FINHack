var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var logger = require('morgan');
var path = require('path');

var api_v1 = require('./v1/api_route');

var app = express();
var http = require('http').Server(app);

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/v1', api_v1);

http.listen(6969, () => {
    console.log("Backend started on 6969");
})