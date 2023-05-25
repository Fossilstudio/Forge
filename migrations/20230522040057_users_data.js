/*
 * @Date: 2023-05-04 23:51:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-22 00:05:59
 * @FilePath: /Forge/migrations/20230522040057_users_data.js
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_data', function(table) {
    table.increments();
    table.integer('user_id').notNullable().unique()
    table.integer('user_global_rank')
    table.integer('user_population')
    table.integer('user_happiness')
    table.integer('user_goods')
    table.integer('user_gold')
    table.integer('user_supplies')
    table.integer('user_medals')
    table.integer('user_diamonds')
    table.string('user_age')
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_data');
};
