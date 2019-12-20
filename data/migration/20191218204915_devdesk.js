exports.up = function(knex) {
  return knex.schema
    .createTable("helpers", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .unique()
        .notNullable();
      tbl.string("password").notNullable();
    })
    .createTable("categories", tbl => {
      tbl.increments();
      tbl
        .string("category")
        .notNullable()
        .unique();
    })
    .createTable("students", tbl => {
      tbl.increments();
      tbl
        .string("username")
        .unique()
        .notNullable();
      tbl.string("password").notNullable();
    })
    .createTable("tickets", tbl => {
      tbl.increments();
      tbl.string("title").notNullable();
      tbl.string("description").notNullable();
      tbl.string("attempted").notNullable();
      tbl
        .integer("categoryId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("categories")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .boolean("openStatus")
        .defaultTo(true)
        .notNullable();
      tbl
        .boolean("resolved")
        .defaultTo(false)
        .notNullable();
      tbl
        .integer("studentId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("students")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })

    .createTable("helpers_tickets", tbl => {
      tbl
        .integer("helperId")
        .unsigned()
        .references("id")
        .inTable("helpers")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");
      tbl
        .integer("ticketId")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("tickets")
        .onUpdate("CASCADE")
        .onDelete("CASCADE")
        .primary();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("helpers_tickets")
    .dropTableIfExists("tickets")
    .dropTableIfExists("students")
    .dropTableIfExists("categories")
    .dropTableIfExists("helpers");
};
