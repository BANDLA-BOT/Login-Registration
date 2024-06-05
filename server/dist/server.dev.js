"use strict";

var http = require('http');

var app = require('./app');

var port = 8000;
var server = http.createServer(app);
server.listen(port, function () {
  console.log("Server running on " + port);
});
//# sourceMappingURL=server.dev.js.map
