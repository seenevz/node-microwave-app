const bookshelf = require("../../db/dbConfig");
const User = require("./user");
const Microwave = require("./microwave");

module.exports = bookshelf.Model.extend({
  tableName: "timers",

  user() {
    return this.belongsTo(User);
  },

  microwave() {
    return this.belongsTo(Microwave);
  }
});
