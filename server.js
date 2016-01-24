'use strict';

const cfenv = require('cfenv');
const Hapi = require('hapi');
const HapiAuthCookie = require('hapi-auth-cookie');
const Inert = require('inert');

const loginRoutes = require('./lib/routes/login');
const userRoutes = require('./lib/routes/user');
const publicController = require('./lib/routes/public');

var appEnv = cfenv.getAppEnv();
var server = new Hapi.Server();


server.connection({ port: (appEnv.port || 8080) });

server.register(Inert, (err) => { if (err) throw err; });
server.register(HapiAuthCookie, (err) => {
  if (err) throw err;
  server.auth.strategy('session', 'cookie', {
    password: 'c4n74ver',
    cookie: 'sid',
    isSecure: false
  });
});

// static files
server.route(
  { method: 'GET', path: '/', config: publicController.indexHtml },
  { method: 'GET', path: '/public/bundle.js', config: publicController.bundleJs }
);

server.route(loginRoutes);
server.route(userRoutes);

server.start(function(err) {
  if (err) throw err;
  console.log('server starting on ' + appEnv.url);
});
