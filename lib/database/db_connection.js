'use strict';
const cps = require('cps-api');

class DbConnection {
  static factory(connector) {
    return new DbConnection(connector);
  }
  constructor(connector) {
    this.connector = connector;
  }
  create(user_data, callback) {
    this.connector.sendRequest(
      new cps.InsertRequest(user_data),

      (err, resp) => {
        return callback(err, resp);
      }
    );
  }
  delete(user_data, callback) {
    this.connector.sendRequest(
      new cps.DeleteRequest(user_data.email),

      (err, resp) => {
        return callback(err, resp);
      }
    );
  }
  update(user_data, callback) {
    this.connector.sendRequest(
      new cps.UpdateRequest(user_data),

      (err, resp) => {
        return callback(err, resp);
      }
    );
  }
}

module.exports = DbConnection.factory;
