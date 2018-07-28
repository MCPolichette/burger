
var express = require("express");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

var app = express();

// Static content for the app from the "public" directory
app.use(express.static("public"));

// parse application
app.use(bodyParser.urlencoded({ extended: true }));

// parse application json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server so that it can begin listening to the client

app.listen(PORT, function () {
    console.log(("Server listening on: http://localhost:" + PORT);
});