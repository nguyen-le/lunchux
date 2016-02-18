'use strict';

const cfenv = require('cfenv');
const Hapi = require('hapi');
const HapiAuthCookie = require('hapi-auth-cookie');
const Inert = require('inert');

//const Login = require('./lib/controllers/Login');
//const User = require('./lib/controllers/User');


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
server.route([
  {method: 'GET', path: '/', handler: {file: './public/index.html'}},
  {method: 'GET', path: '/public/bundle.js', handler: {file: './public/bundle.js'}}

  //{method: 'POST', path: '/login', config: Login.post},

  //{method: 'POST', path: '/user', config: User.post}
]);

server.start(function(err) {
  if (err) throw err;
  console.log('server starting on ' + appEnv.url);
});
