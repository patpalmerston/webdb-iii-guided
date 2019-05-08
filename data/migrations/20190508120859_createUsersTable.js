
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', function(tbl) {
    tbl.increments();

    tbl.string('name', 128).notNullable();

    tbl
      .integer('role_id') // the firle to be added to the user table
      .unsigned() // include this because some DBMs need it
      .references('id')//the primary key in the parent table
      .inTable('roles') // name of the parent table
      .onDelete('CASCADE') 
      .onUpdate('CASCADE')

    tbl.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('users');
};
