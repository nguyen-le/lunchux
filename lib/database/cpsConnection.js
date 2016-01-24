'use strict';
const cps = require('cps-api');

const cpsConnection = function() {
  return new cps.Connection(
    process.env.DB_HOST,
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PW,
    'document',
    'document/email',
    {account: process.env.DB_ACCOUNT}
  );
};

module.exports = cpsConnection;
