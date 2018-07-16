// Require dependencies
var express = require("express");

// set up our port to be either the host's designated port or 3000
var PORT = process.env.PORT || 8080;

// initiate an Express App
var app = express();

// set up an Express Router
var router = express.Router();

// Designate public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Have every request go through router middleware
app.use(router);

//Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port: " +PORT);
});

