exports.up = function(knex, Promise) {
  return knex.schema.createTable("timers", function(table) {
    table.increments().primary();
    table.integer("duration");
    table.integer("user_id").references("users.id");
    table.integer("microwave_id").references("microwaves.id");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("timers");
};
