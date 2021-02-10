
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments().unsigned();
        tbl.string('username').notNullable().unique();
        tbl.string('password').notNullable();
        tbl.string('role').notNullable().index();
        tbl.string('first_name').notNullable();
        tbl.string('last_name').notNullable();
        tbl.string('email').notNullable();
        tbl.string('image');
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
