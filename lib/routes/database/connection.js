const cps = require('cps-api');
const cpsConn = new cps.Connection(
  'tcps://cloud-us-0.clusterpoint.com:9008',
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PW,
  'document',
  'document/email',
  {account: process.env.DB_ACCOUNT}
);

module.exports = cpsConn;
