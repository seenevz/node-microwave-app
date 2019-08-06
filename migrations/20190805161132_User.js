exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", function(table) {
    table.increments().primary();
    table.string("name");
    table.string("username");
    table.string("password_digest");
    table.string("email");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
