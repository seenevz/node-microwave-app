exports.up = function(knex, Promise) {
  knex.schema.createTable("microwaves", function(table) {
    table.increments();
    table.string("human_identifier");
    table.string("status");
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable("microwaves");
};
