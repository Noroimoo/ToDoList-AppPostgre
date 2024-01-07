exports.up = function(knex) {
    return knex.schema.createTable('tasks', function(table) {
      table.increments('id');
      table.string('title', 255).notNullable();
      table.text('description').notNullable();
      table.string('status', 255).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('tasks');
  };
  