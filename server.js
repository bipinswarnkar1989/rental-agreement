"use strict";
// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./server/routes/api');

const app = express();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cross Origin middleware
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next()
})

// Set our api routes
app.use('/', api);
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + '/src'));

// For all GET requests, send back index.html
// so that PathLocationStrategy can be used
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/src/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
app.listen(process.env.PORT || 3000);
console.log("App running on 3000");
