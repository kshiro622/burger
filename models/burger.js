// Routes
var connection = require('../config/connection')(app);

// replace submit and entry
module.export = function(app) {
    $('#submit').on('click', function() {
        var burgerName = $('#burger-input').val().trim();
        var newBurger = {
            burger_name: burgerName
        };
        app.post("/add", function(req, res) {
            res.json(newBurger);
        });
    });
};
