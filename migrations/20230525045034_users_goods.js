/*
 * @Date: 2023-05-04 23:51:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-25 22:46:00
 * @FilePath: /Forge/migrations/20230525045034_users_goods.js
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_goods', function(table) {
    table.increments();
    table.integer('user_id').notNullable().unique()
    table.string('age')
    table.integer('good_amount_1')
    table.integer('good_amount_2')
    table.integer('good_amount_3')
    table.integer('good_amount_4')
    table.integer('good_amount_5')
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_goods');
};
