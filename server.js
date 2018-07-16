// Require dependencies
var express = require("express");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// set up our port to be either the host's designated port or 3000
var PORT = process.env.PORT || 8080;

// initiate an Express App
var app = express();

// set up an Express Router
var router = express.Router();

// Designate public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

app.get('/', function (req, res) {
    res.render('home');
});

// use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// Have every request go through router middleware
app.use(router);

//Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port: " +PORT);
});

