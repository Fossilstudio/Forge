/*
 * @Date: 2023-05-04 23:51:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-04 23:53:03
 * @FilePath: /Forge/migrations/20230505035124_users_login.js
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users_login', function(table) {
    table.increments();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users_login');
};
