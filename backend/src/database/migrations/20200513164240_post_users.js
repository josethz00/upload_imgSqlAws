
exports.up = function(knex) {
    return knex.schema.createTable('pics', function(table){
        table.increments('id');
        table.text('name').notNullable();
        table.decimal('size').notNullable();
        table.text('key').unique().notNullable();
        table.text('url').unique().notNullable();
        table.timestamp('created_at').default(knex.fn.now());

    })
};

exports.down = function(knex) {
};
