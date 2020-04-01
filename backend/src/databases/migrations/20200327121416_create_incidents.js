
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table){
        //primary key
        table.increments();

        table.string('titulo').notNullable();
        table.string('descricao').notNullable();
        table.decimal('value').notNullable();

        // Chave estrangeira
        table.string('ong_id').notNullable();

        //Criando a referencia da FK com sua respectiva tabela
        table.foreign('ong_id').references('id').inTable('ongs');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  