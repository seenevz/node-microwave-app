exports.up = function(knex, Promise) {
  knex.schema.createTable("users", function(table) {
    table.increments();
    table.string("name");
    table.string("username");
    table.string("password_digest");
    table.string("email");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("users");
};
