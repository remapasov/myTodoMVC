var http = require('http');
var express = require('express');
var routes = require('./routes');
var conf = require('./config');
var handlers = require('./handlers');
var app = express();

var server = app.listen(conf.config.port, function() {
	app.use(express.static(__dirname));
	app.use(express.bodyParser());
	routes.setRoutes(app, handlers);
	console.log('Listening on port %d', server.address().port);
});