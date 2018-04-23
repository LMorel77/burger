var burger = require('../models/burger.js');
var express = require('express');

// Creating server router
var router = express.Router();

// Get Route
router.get('/', function (request, response) {

    burger.all(function (data) {

        var hbsObject = {
            burgers: data
        };
        console.log("\n >> router.get(...) 'data':\n\n", data);
        response.render("index", hbsObject);

    });

});

// Post Route
router.post('/api/burgers', function (request, response) {

    burger.create({ burger_name: request.body.name }, function (result) {

        // Send back ID of new burger
        console.log("\n >> router.post(...) succeeded!");
        response.json({ id: result.insertId });

    });

});

// Put Route
router.put('/', function (request, response) {

    burger.update(
        { devoured: request.body.devoured },
        { id: request.body.burgerId }, function (result) {

            if (result.changedRows === 0) return response.status(404).end();
            console.log("\n >> router.put(...) succeeded!");
            response.status(200).end();

        });

});

// Exporting routes
module.exports = router;