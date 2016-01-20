'use strict';
const Joi = require('joi');
const Boom = require('boom');


const routes = (db_connection) => {
  return [
    {
      method: 'POST',
      path: '/login',
      handler: function(request, reply) {
        // send through database
        // request.payload - { email: '', password: '' }
        // TODO
        db_connection;
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
};

module.exports = routes;
