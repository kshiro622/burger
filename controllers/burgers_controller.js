var express = require('express');
var burger = require('../models/burger')(app);

var app = express();

module.export = function(app) {
    // Get route
    app.get("/index", function(req, res) {
        connection.query("SELECT * FROM burgers;", function(err, data) {
            if (err) throw err;
            res.render("index", { burgers: data });
        });
    });

    // Post route
    app.post("/add", function(req, res) {
        connection.query("INSERT INTO burgers (burger_name) VALUES (?)", [req.body.event], function(err, result) {
            if (err) throw err;
            res.redirect("/");
        });
    });
};
