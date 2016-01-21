'use strict';
const Bcrypt = require('bcryptjs');
const Boom = require('boom');
const Joi = require('joi');

const User = require('../models/user');


const routes = (db_access) => {
  return [
    {
      method: 'POST',
      path: '/user',
      config: {
        validate: {
          params: Joi.object({
            email_address: Joi.string(),
            password: Joi.string(),
            first_name: Joi.string(),
            last_name: Joi.string(),
            language: Joi.string()
          })
        }
      },
      handler: function(request, reply) {

        Bcrypt.genSalt((err, salt) => {

          if (err) throw err;

          Bcrypt.hash(request.payload.password, salt, (err, hash) => {

            if (err) throw err;
            let user =
              new User(Object.assign(request.payload, {password: hash}));

            db_access.create(user.props, (err, resp) => {

              if (!err) {
                reply({status: 200, response: resp.document});
              } else {
                reply(Boom.badRequest('Missing data'));
              }
            });
          });
        });
      }
    },
    {
      method: 'PUT' ,
      path: '/user',
      config: {
        // TODO auth
      },
      handler: function(request, reply) {
        reply(Boom.notImplemented());
      }
    }

  ];
};

module.exports = routes;
