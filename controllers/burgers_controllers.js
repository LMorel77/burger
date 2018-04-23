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
        console.log("router.get 'data':\n", data);
        response.render("index", hbsObject);

    });

});

// Post Route
router.post('/', function (request, response) {

    burger.create({ burger_name: request.body.name }, function (result) {

        // Send back ID of new burger
        response.json({ id: result.insertId });

    });

});

// Put Route
router.put('/', function (request, response) {

    burger.update(
        { devoured: request.body.devoured },
        { id: request.body.burgerId }, function (result) {

            if (result.changedRows === 0) return response.status(404).end();
            response.status(200).end();

        });

});

// Exporting routes
module.exports = router;