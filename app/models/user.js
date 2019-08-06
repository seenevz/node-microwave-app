const bookshelf = require("../../db/dbConfig");
const Timer = require("./timer");

module.exports = bookshelf.Model.extend({
  tableName: "users"

  timers() {
    return this.hasMany(Timer);
  },

  microwaves() {
    return this.hasMany(Microwave).through(Timer);
  }
});
