/*
 * @Date: 2023-05-04 23:51:24
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-25 22:25:42
 * @FilePath: /Forge/migrations/20230525045752_goods.js
 */
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex, Promise) {
  return knex.schema.createTable('goods', function(table) {
    table.string('age')
    table.string('good_name_1')
    table.string('good_name_2')
    table.string('good_name_3')
    table.string('good_name_4')
    table.string('good_name_5')
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('goods');
};
