'use strict';
const Joi = require('joi');
const Boom = require('boom');


const routes = (db_connection) => {
  return [
    {
      method: 'POST',
      path: '/sign_up',
      handler: function (request, reply) {
        console.log('POST sign_up');
        let user_data = {
          email: request.payload.email
        };
        db_connection.create(user_data, (err, resp) => {
          resp;
          if (!err) {
            reply('Success!');
          } else {
            reply(Boom.badRequest('Missing data'));
          }
        });
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
    }
  ];
};

module.exports = routes;
