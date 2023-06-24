import { Knex } from "knex";

export async function up(knex: Knex) {
  return knex.schema.createTable("posts", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.string("desc").notNullable();
    table.string("img").notNullable();
    table.dateTime("created_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex) {
  return knex.schema.dropTable("posts");
}
