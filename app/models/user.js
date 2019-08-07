const bookshelf = require("../../db/dbConfig");
const Timer = require("./timer");

module.exports = bookshelf.Model.extend(
  {
    tableName: "users",

    timers() {
      return this.hasMany(Timer);
    },

    microwaves() {
      return this.hasMany(Microwave).through(Timer);
    }
  },
  {
    async allUsers() {
      try {
        const resp = await this.fetchAll();
        return resp.map(child => child.attributes);
      } catch (error) {
        return error;
      }
    },

    async userById(id) {
      try {
        const resp = await this.forge({ id: id }).fetch();
        return resp.attributes;
      } catch (error) {
        return { message: "Can't find this user", error };
      }
    },

    async createUser(user) {
      try {
        const resp = await this.forge(user).save();
        return resp.attributes;
      } catch (error) {
        return { message: "Can't create user", error };
      }
    }
  }
);
