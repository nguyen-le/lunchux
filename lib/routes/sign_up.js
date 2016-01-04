const Joi = require('joi');
const Boom = require('boom');

const routes = [
  {
    method: 'POST',
    path: '/sign_up',
    handler: function (request, reply) {
      reply(request.payload);
    },
    config: {
      validate: {
        params: Joi.object({
          first_name: Joi.string(),
          last_name: Joi.string(),
          email_address: Joi.string(),
          password: Joi.string()
        })
      }
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
