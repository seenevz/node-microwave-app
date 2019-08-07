const bookshelf = require("../../db/dbConfig");
const User = require("./user");
const Microwave = require("./microwave");

module.exports = bookshelf.Model.extend(
  {
    tableName: "timers",

    user() {
      return this.belongsTo(User);
    },

    microwave() {
      return this.belongsTo(Microwave);
    }
  },
  {
    async allTimers() {
      try {
        const resp = await this.fetchAll();
        return resp.map(child => child.attributes);
      } catch (error) {
        return error;
      }
    },

    async timerById(id) {
      try {
        const resp = await this.forge({ id: id }).fetch();
        return resp.attributes;
      } catch (error) {
        return { message: "Can't find this timer", error };
      }
    },

    async createTimer(timer) {
      try {
        const resp = await this.forge(timer).save();
        return resp.attributes;
      } catch (error) {
        return { message: "Can't create timer", error };
      }
    }
  }
);
