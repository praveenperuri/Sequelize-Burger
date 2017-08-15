var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();

var PORT = process.env.PORT || 8080;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var routes = require("./controllers/burgers_controller.js");

// Requiring our models for syncing
var db = require("./models");

app.use("/", routes);

db.sequelize.sync({force: false}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});


// app.listen(PORT, function () {
//   console.log("App listening on PORT: " + PORT);
// });


// //App depencencies -----------------------------------------/
// var express = require('express');
// var bodyParser = require('body-parser');
// var exphbs = require('express-handlebars');
// var methodOverride = require('method-override');
// var app = express();


// //App middleware -------------------------------------------/
// app.use(methodOverride('_method'));
// app.use(bodyParser.urlencoded({
//   extended: false
// }));
// app.use(bodyParser.json());
// app.use(express.static(process.cwd() + "/public"));

// //Handlebars config ---------------------------------------/
// app.engine('handlebars', exphbs({
//   defaultLayout: 'main'
// }));
// app.set('view engine', 'handlebars');

// //Route config -------------------------------------------/
// require('./routes/htmlRoutes')(app);
// require('./routes/apiRoutes')(app);

// //Database config ---------------------------------------/
// global.db = require('./models');

// //Port config ---------------------------------------------------/
// var PORT = process.env.PORT || 3000;

// //Starting the server, syncing our models ------------------------------------/
// db.sequelize.sync().then(function() {
//   app.listen(PORT, function(err) {
//     if (err) {
//       console.error(err);
//     } else {
//       console.info("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
//     }
//   });
// });





