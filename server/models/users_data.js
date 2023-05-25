/*
 * @Date: 2022-09-17 11:48:55
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-22 00:58:42
 * @FilePath: /Forge/server/models/users_data.js
 */
import bookshelf from "../bookshelf";

const UsersData = bookshelf.Model.extend({
  tableName: 'users_data',
  hasTimestamps:true
})

module.exports = UsersData