// Routes
var orm = require('../config/orm');

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    }
    add: function(value, cb) {
        orm.create("burgers", value, function(res) {
            cb(res);
        });
    }
    update: function(id, condition, cb) {
        orm.update("burgers", id, condition, function(res) {
            cb(res);
        })
    }
};

// Export the database functions for the controller
module.exports = burger;
