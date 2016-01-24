'use strict';
const cps = require('cps-api');

const cpsConnection = require('../database/cpsConnection');


class DbAccess {
  static factory() {
    return new DbAccess(cpsConnection());
  }

  constructor(connector) {
    this.connector = connector;
  }

  create(data, forceCreate, callback) {
    data = data.props;
    if (forceCreate) {
      this._initializeRecord(data, callback);
    } else {
      this._insert(data, callback);
    }
  }

  fetch(id, callback) {
    this.connector.sendRequest(
      new cps.RetrieveRequest(id),

      (err, resp) => {

        callback(err, resp);
      }
    );
  }

  delete(data, callback) {
    data = data.props;
    this.connector.sendRequest(
      new cps.DeleteRequest(data.email),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

  update(data, callback) {
    // Only update record fields contained in data
    data = data.props;
    this.connector.sendRequest(
      new cps.PartialReplaceRequest(data),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

  replace(data, callback) {
    // Replace entire record
    data = data.props;
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

        return callback();
      }
    );
  }

  commitTransaction(callback) {
    this.connector.sendRequest(
      new cps.CommitTransactionRequest(),

      (err) => {

        if (err) throw err;

        return callback();
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


  // Helper functions

  _initializeRecord(data, callback) {
    // Initializes record with only the data provided
    this.connector.sendRequest(
      new cps.UpdateRequest(data),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

  _insert(data, callback) {
    this.connector.sendRequest(
      new cps.InsertRequest(data),

      (err, resp) => {

        return callback(err, resp);
      }
    );
  }

}

module.exports = DbAccess;
