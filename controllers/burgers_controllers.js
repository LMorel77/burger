var burger = require('../models/burger.js');
var express = require('express');

// Creating server router
var router = express.Router();

// Get Route
router.get('/', function (request, response) {

    burger.all(function (data) {

        var hbsObject = { burgers: data };
        response.render("index", hbsObject);

    });

});

// Post Route
router.post('/api/burgers', function (request, response) {

    burger.create({ burger_name: request.body.name }, function (result) {

        // Send back ID of new burger
        response.json({ id: result.insertId });

    });

});

// Put Route
router.put('/api/burgers/:id', function (request, response) {

    burger.update({ id: request.params.id }, function (result) {

            if (result.changedRows === 0) return response.status(404).end();
            response.status(200).end();

        });

});

// Delete Route
router.delete('/api/burgers', function (request, response) {

    burger.delete({ devoured: true }, function (result) {

            response.end();

        });

});

// Exporting routes
module.exports = router;