// Require dependencies
var express = require("express");
var mongoose = require("mongoose");
var expressHandlebars = require("express-handlebars");
var bodyParser = require("body-parser");

// set up our port to be either the host's designated port or 3000
var PORT = process.env.PORT || 8080;

// initiate an Express App
var app = express();

// set up an Express Router
var router = express.Router();

// Require our routes file pass our router object
require("./config/routes")(router);


// Designate public folder as a static directory
app.use(express.static(__dirname + "/public"));

// Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// app.get('/', function (req, res) {
//     res.render('home');
// });

// use bodyParser in our app
app.use(bodyParser.urlencoded({
    extended: false
}));

// Have every request go through router middleware
app.use(router);

// If deployed, use the deployed database. Otherwise use the local mongoHeadlines database
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);


// Connect mongoose to our database
mongoose.connect(MONGODB_URI, function(error) {
  // Log any errors connecting with mongoose
  if (error) {
    console.log(error);
  }
  // Or log a success message
  else {
    console.log("mongoose connection is successful");
  }
});

//Listen on the port
app.listen(PORT, function() {
    console.log("Listening on port: " +PORT);
});

