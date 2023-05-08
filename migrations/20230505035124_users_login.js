/*
 * @Date: 2023-05-04 23:51:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-07 22:30:18
 * @FilePath: /Forge/migrations/20230505035124_users_login.js
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_login', function(table) {
    table.increments();
    table.string('user_name').notNullable().unique();
    table.string('user_password').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_login');
};
