const knexfile = require(./knexfile)

const knex = require("knex")(knexfile);

module.exports = require("bookshelf")(knex);
