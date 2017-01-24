// Import MySQL connection.
var connection = require("../config/connection.js");


// Object for all our SQL statement functions.
var orm = {
    all: function(table, cb) {
        connection.query("SELECT * FROM " + table + ";", function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    add: function(table, value, cb) {
        connection.query("INSERT INTO " + table + " SET ??", {
            burger_name: value
        }, function(err, res) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },
    update: function(table, id, condition, cb) {
        connection.query("UPDATE " + table + " SET ?? WHERE id = ??", [{
            devoured: condition
        }, {
            id: id
        }], function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
