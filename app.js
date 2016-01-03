/*eslint-env node*/

var hapi = require('hapi');
var cfenv = require('cfenv'); // see: https://www.npmjs.com/package/cfenv


var appEnv = cfenv.getAppEnv();
var server = new Hapi.Server();

server.connection({
  port: (appEnv.port || 8080)
});

server.start(function(err) {
  if (err) throw err;
  console.log("server starting on " + appEnv.url);
});

