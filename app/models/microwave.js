const bookshelf = require("../../db/dbConfig");
const User = require("./user");
const Timer = require("./timer");

module.exports = bookshelf.Model.extend(
  {
    tableName: "microwaves",

    timers() {
      return this.hasMany(Timer);
    },

    users() {
      return this.hasMany(User).through(Timer);
    }
  },
  {
    async allMicrowaves() {
      try {
        const resp = await this.fetchAll();
        return resp.map(child => child.attributes);
      } catch (error) {
        return error;
      }
    },

    async microwaveById(id) {
      try {
        const resp = await this.forge({ id: id }).fetch();
        return resp.attributes;
      } catch (error) {
        return { message: "Can't find this microwave", error };
      }
    },

    async createMicrowave(microwave) {
      try {
        const resp = await this.forge(microwave).save();
        return resp.attributes;
      } catch (error) {
        return { message: "Can't create microwave", error };
      }
    }
  }
);
