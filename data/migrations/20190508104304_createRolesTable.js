
exports.up = function(knex, Promise) {
  return knex.schema.createTable('roles', function(tbl) {
    // primary key called id, integer, auto-increment
    tbl.increments();

    tbl
      .string('name', 128) //will gnerate a varchar(128) by default. SQLite ignores the sizing, but other db's dont
      .notNullable() // make it required
      .unique()// add a unique constraint and index automatically

    tbl.timestamps(true, true)
  }) 
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('roles');
};
