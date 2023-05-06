/*
 * @Date: 2022-09-17 11:48:55
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-05 23:18:44
 * @FilePath: /Forge/server/models/users_login.js
 */
import bookshelf from "../bookshelf";

const UsersLogin = bookshelf.Model.extend({
  tableName: 'users_login',
  hasTimestamps:true
})

module.exports = UsersLogin