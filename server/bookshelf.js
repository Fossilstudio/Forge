/*
 * @Date: 2023-05-05 00:19:47
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-05 00:44:03
 * @FilePath: /Forge/server/bookshelf.js
 */
import knex from 'knex';
import bookshelf from 'bookshelf';
import knexConfig from '../knexfile';

export default bookshelf(knex(knexConfig.development));