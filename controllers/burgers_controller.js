var express = require('express');
var router = express.Router();
var burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
    burger.all(function(data) {
        res.render("index", { burgers: data });
    });
});

router.post("/", function(req, res) {
    burger.add(req.body.burger_name, function() {
        res.redirect("/");

    });
});

router.put("/:id", function(req, res) {
    burger.update(req.body.id, function() {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
