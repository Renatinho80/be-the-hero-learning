
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
    table.increments(); // primary key

    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable(); // foreign key
    table.foreign('ong_id').references('id').inTable('ongs'); // Chave estrangeira que referencia a coluna('x') na tabela ('x')
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
