import { Knex } from "knex";

export default async function Playing(knex: Knex) {
  console.log("Creating playing table");
  await knex.schema.hasTable("songs").then(async (exists) => {
    if (!exists) {
      await knex.schema.createTable("songs", (table) => {
        table.string("url").primary();
        table.string("title");
        table.string("duration");
        table.string("channel");
        table.string("thumb");
        table.timestamps();
      });
    }
  });
  await knex.schema.hasTable("playing").then(async (exists) => {
    if (!exists) {
      await knex.schema.createTable("playing", (table) => {
        table.bigIncrements("id").primary();
        table.string("uid");
        table.string("url");
        table.string("title");
        table.string("time");
        table.string("username");
        table.string("avatar");
        table.string("thumb");
        table.string("dislikes");
        table.string("grabs");
        table.string("hypes");
        table.string("likes");
        table.timestamp("timestamp");
        table.foreign("url").references("songs.url");
        table.timestamps();
      });
    }
  });
}
