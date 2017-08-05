var orm = require('../config/orm.js');

var burger = {
  all: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(name, flag, cb) {
    orm.insertOne(name, flag, function(res) {
      cb(res);
    });
  },
  update: function(col, Val, whereCol, whereVal, cb) {
    orm.updateOne(col, Val, whereCol, whereVal, function(res) {
      cb(res);
    });
  },
  delete: function(col, val, cb){
    orm.deleteOne(col, val, function(result){
      cb(result);
    })
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

