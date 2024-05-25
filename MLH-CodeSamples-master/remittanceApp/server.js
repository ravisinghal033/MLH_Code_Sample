'use strict';
var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017";

var cors = require("cors");
var http = require("http");

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors({
    origin: '*'
}));

var port = process.env.PORT || 1337;
http.createServer(app).listen(port);

app.get('/', function (req, res) {
    res.end('Everything in place\n');


});



app.post('/api/login', function (req, res) {

    var em = req.body.email;

    var passw = req.body.password;

    console.log(em);


    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        console.log("started")

        
        var dbo = db.db("forms");

        console.log("started");

        var query = {
            _id: em,
            password: passw,
        };

        console.log(query);

        dbo.collection("users").findOne(query, function (err, result) {
            if (err) throw err;

            if (result != null) {
                console.log('Welcome ' + result.user_name);
                return res.json({ status: "Success", data: result });
            } else
                console.log('User not found');


            db.close();


        });
        
    });



});

app.get('/api/transact', function (req, res) {
    console.log("in node transact");
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db("beneficiary");

        console.log("started")



        dbo.collection("user_list").find({}).toArray(function (err, result) {
            if (err) throw err;

            if (result != null) {
                console.log("Node from transact " + result);

                return res.json({ status: "Success", data: result });

            }


            db.close();


        });

    });

});

