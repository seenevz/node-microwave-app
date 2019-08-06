const bookshelf = require("../../db/dbConfig");
const User = require("./user");
const Timer = require("./timer");

module.exports = bookshelf.Model.extend({
  tableName: "microwaves",

  timers() {
    return this.hasMany(Timer);
  },

  users() {
    return this.hasMany(User).through(Timer);
  }
});
