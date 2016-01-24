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
 * post: POST /login
 */
const post =  {
  validate: {
    payload: Joi.object({
      email: Joi.string().required(),
      password: Joi.string().required()
    })
  },
  handler(request, reply) {
    let user;
    let db_access = DbAccess.factory();

    asyncLoginUser();

    // below functions are called serially
    function asyncLoginUser() {
      db_access.fetch(request.payload.email, callbackBcryptCompare);
    }

    function callbackBcryptCompare(err, resp) {
      if (err) throw err;

      user = new User(resp.results.document[0]);

      Bcrypt.compare(request.payload.password, user.props.password, callbackServerReply);
    }

    function callbackServerReply(err, resp) {
      if (resp) {
        request.cookieAuth.set({user: user.publicView()});
        reply({status: 200, message: 'Success', data: user.publicView()});
      } else {
        reply(Boom.badRequest('Invalid email/password.'));
      }
    }
  }
};

module.exports = {post};