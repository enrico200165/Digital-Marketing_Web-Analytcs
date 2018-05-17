/** launch-server.js */

var open = require('open'),
  express = require('express'),
  app = express(),
  port = 80;

// configure serving static content
app.use(express.static(__dirname + '/'));
// enable URL rewrite to support HTML5Mode: send the index.html
app.all('/*', function (req, res, next) {
  res.sendFile('index.html', { root: __dirname });
});

// launch server
app.listen(process.env.PORT || port, function () {
  console.log('Express server on http:/localhost:' + port + '!');
});

// open with default browser
open('http://localhost:' + port);