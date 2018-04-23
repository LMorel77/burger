// Importing 'body-parser' and 'express' node packages
var bodyParser = require('body-parser');
var express = require('express');

var app = express();

// Serving 'public' directory
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded; application/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Setting up Handlebars
var expHbs = require('express-handlebars');
app.engine("handlebars", expHbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing express server routes
var routes = require("./controllers/burgers_controllers.js");
app.use('/', routes);

// Starting up express server
var PORT = process.env.PORT || 8080;
app.listen(PORT, function(error) {

    if (error) throw error;
    console.log("App listening at localhost:" + PORT);

});