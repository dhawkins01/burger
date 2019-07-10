// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
    // selectAll:
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    // insertOne:
    insertOne: function(cols, vals, cb) {
        orm.insertOne("burgers", cols, vals, function(res) {
            
          cb(res);
        });
      },
    // updateOne:
}

module.exports = burger;