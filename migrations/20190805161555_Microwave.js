exports.up = function(knex, Promise) {
  return knex.schema.createTable("microwaves", function(table) {
    table.increments().primary();
    table.string("human_identifier");
    table.string("status");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("microwaves");
};
