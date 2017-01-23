// Dependencies
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var burgerController = require('./controllers/burgers_controller')(app);

// Set up express
var app = express();
var PORT = process.env.PORT || 3000;

// Set up express for data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Listen
app.listen(PORT, function() {
    console.log('Listening on port: ' + PORT);
});
