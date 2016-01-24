'use strict';
const Bcrypt = require('bcryptjs');
const Boom = require('boom');
const Joi = require('joi');

const DbAccess = require('../database/DbAccess');
const User = require('../models/User');


/*
 * Available requests:
 * <obj>: <action> <path>
 *
 * post: POST /user
 */
const post = {
  validate: {
    payload: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required(),
      first_name: Joi.string(),
      last_name: Joi.string(),
      language: Joi.string()
    })
  },
  handler(request, reply) {
    let user,
      db_access = DbAccess.factory();

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

      user = new User(Object.assign(request.payload, {password: hash}));

      db_access.create(user, true, callbackServerReply);
    }

    function callbackServerReply(err) {
      if (!err) {
        request.cookieAuth.set({user: user.publicView()});
        reply({status: 200, message: 'Success', data: user.publicView()});
      } else {
        reply(Boom.badRequest('Missing data'));
      }
    }
  }
};

module.exports = {post};
