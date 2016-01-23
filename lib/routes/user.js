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
          payload: Joi.object({
            email: Joi.string().required(),
            password: Joi.string().required(),
            first_name: Joi.string(),
            last_name: Joi.string(),
            language: Joi.string()
          })
        }
      },
      handler: function(request, reply) {
        asyncCreateUser();

        // below functions are called serially
        function asyncCreateUser() {
          Bcrypt.genSalt(callbackBcryptHash);
        }

        function callbackBcryptHash(err, salt) {
          if (err) throw err;

          Bcrypt.hash(request.payload.password, salt, callbackCreateUser);
        }

        function callbackCreateUser(err, hash) {
          if (err) throw err;

          let user = new User(Object.assign(request.payload, {password: hash}));
          db_access.initializeRecord(user.props, callbackServerReply);
        }

        function callbackServerReply(err) {
          if (!err) {
            reply({status: 200, message: 'Success'});
          } else {
            reply(Boom.badRequest('Missing data'));
          }
        }
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
