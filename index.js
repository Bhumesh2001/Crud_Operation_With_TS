"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var mongoose_1 = require("mongoose");
var userRoutes_1 = require("./src/routes/userRoutes");
var MONGODB_URI = 'mongodb://localhost:27017/Ts_crud';
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose_1.default.connect(MONGODB_URI).then(function () {
    console.log('connected To Mongodb');
}).catch(function (err) {
    console.log(err);
});
app.use('/users', userRoutes_1.default);
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log("Server is running on http://localhost:".concat(PORT));
});
