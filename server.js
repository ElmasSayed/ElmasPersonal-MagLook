var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var db = require('./models');
var helpers = require('handlebars-helpers')();
var exphbs = require("express-handlebars");

var port = process.env.PORT || 3000;
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(process.cwd() + "/public"));
app.use(methodOverride("_method"));

////require("apis.js")(app);

require("./routes/apis.js")(app);
require("./routes/profile.js")(app);
require("./routes/login.js")(app);

var router = require('./controllers/MagLook_controller.js');

app.use('/', router);


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log('Listening on port ' + port);
    })
})