const Hapi = require('hapi');
const cfenv = require('cfenv'); // see: https://www.npmjs.com/package/cfenv
const Inert = require('inert');

var appEnv = cfenv.getAppEnv();
var server = new Hapi.Server();

server.connection({
  port: (appEnv.port || 8080)
});

server.register(Inert, function(err) { if (err) throw err;});

server.route({
  method: 'GET',
  path: '/',
  handler: {
    file: './public/index.html'
  }
});
server.route({
  method: 'GET',
  path: '/public/bundle.js',
  handler: {
    file: './public/bundle.js'
  }
});

server.route(require('./lib/routes/login'));

server.start(function(err) {
  if (err) throw err;
  console.log("server starting on " + appEnv.url);
});
