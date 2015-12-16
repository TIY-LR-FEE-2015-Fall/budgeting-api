var express = require('express');
var cors = require('cors');

var app = express();
app.use(cors());

// Parse input and request data
require('./bootstrap/middleware')(app);

// Mail isn't needed. If you want it THERE BE DRAGONS
// require('./bootstrap/mail')(app);

// Starts connection to DB
require('./bootstrap/mongo');

// Register Database Models
require('./app/models');

// Mold data into and out of our app
require('./app/transformers');

// Adds helper methods to make APIs Easy
app.use(require('./app/middleware/xmen'));

// Make JS Apps work with OAuth
app.use(require('./app/middleware/origin-signing'));

// Security Layer and Who Are We Logged in As
app.oauth = require('./app/oauth');
app.all('/oauth/token', app.oauth.grant());

// What routes do we respond to
var routes = require('./app/http/routes');
app.use('/', routes);

require('./bootstrap/errors')(app);

app.use(app.oauth.errorHandler());

module.exports = app;
