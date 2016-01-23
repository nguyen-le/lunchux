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

  fetch(data, callback) {
    this.connector.sendRequest(
      new cps.RetrieveRequest(data),

      (err, resp) => {

        callback(err, resp);
      }
    );
  }

  // Initializes record with only the data provided
  initializeRecord(data, callback) {
    this.connector.sendRequest(
      new cps.UpdateRequest(data),

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

  // Only update record fields contained in data
  update(data, callback) {
    this.connector.sendRequest(
      new cps.PartialReplaceRequest(data),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

  // Replace entire record
  replace(data, callback) {
    this.connector.sendRequest(
      new cps.ReplaceRequest(data),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

  // Transaction functions
  beginTransaction(callback) {
    this.connector.sendRequest(
      new cps.BeginTransactionRequest(),

      (err) => {

        if (err) throw err;

        callback();
      }
    );
  }

  commitTransaction() {
    this.connector.sendRequest(
      new cps.CommitTransactionRequest(),

      (err) => {

        if (err) throw err;

        return true;
      }
    );
  }

  rollbackTransaction() {
    this.connector.sendRequest(
      new cps.RollbackTransactionRequest(),

      (err) => {
        if (err) throw err;
      }
    );
  }
}

module.exports = DbAccess.factory;
