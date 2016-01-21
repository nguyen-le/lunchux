'use strict';
const cps = require('cps-api');

class DbAccess {
  static factory(connector) {
    return new DbAccess(connector);
  }

  constructor(connector) {
    this.connector = connector;
  }

  create(data, callback) {
    this.connector.sendRequest(
      new cps.InsertRequest(data),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

  delete(data, callback) {
    this.connector.sendRequest(
      new cps.DeleteRequest(data.email),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

  update(data, callback) {
    this.connector.sendRequest(
      new cps.PartialReplaceRequest(data),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }
}

module.exports = DbAccess.factory;
