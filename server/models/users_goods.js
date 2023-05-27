/*
 * @Date: 2022-09-17 11:48:55
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-25 22:35:01
 * @FilePath: /Forge/server/models/users_goods.js
 */
import bookshelf from "../bookshelf";

const UsersGoods = bookshelf.Model.extend({
  tableName: 'users_goods',
  hasTimestamps:true
})

module.exports = UsersGoods