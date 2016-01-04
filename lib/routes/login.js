const Joi = require('joi');
const Boom = require('boom');

const routes = [
  {
    method: 'GET',
    path: '/loginget',
    handler: function (request, reply) {
      reply('login_successful');
    }
  },
  {
    method: 'POST',
    path: '/login',
    handler: function(request, reply) {
      // send through database
      // request.payload - { email: '', password: '' }
      reply(Boom.badRequest('Bad data'));
    },
    config: {
      validate: {
        params: Joi.object({
          username: Joi.string(),
          password: Joi.string()
        })
      }
    }
  }
];

module.exports = routes;
