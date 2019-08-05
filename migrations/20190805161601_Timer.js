exports.up = function(knex, Promise) {
  knex.schema.createTable("timers", function(table) {
    table.increments();
    table.integer("duration");
    table.integer("user_id");
    table.integer("microwave_id");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("timers");
};
