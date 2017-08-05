// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("./connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

    selectAll: function (callback) {
        var s = "SELECT * FROM " + tableName;

        connection.query(s, function (err, result) {
            callback(result);
        });
    },

    insertOne: function (name, flag, callback) {

        var s = "INSERT INTO " + tableName + " (burger_name, devoured) VALUES (?,?)";

        connection.query(s, [name, flag], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });

    },

    updateOne: function (columnInput, updateVal, whereColumn, whereVal, callback) {
        var queryString = "UPDATE " + tableName + " SET ?? = ? WHERE ?? = ?";

        connection.query(queryString, [columnInput, updateVal, whereColumn, whereVal], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });
    },

    deleteOne: function (whereColumn, whereVal, callback) {
        var queryString = "DELETE FROM " + tableName + " WHERE ?? = ?";
        connection.query(queryString, [whereColumn, whereVal], function (err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            callback(result);
        });
    }

};

module.exports = orm;
