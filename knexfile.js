/*
 * @Date: 2023-05-04 23:45:53
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-05 00:00:37
 * @FilePath: /Forge/knexfile.js
 */
/**
@type { Object.<string, import("knex").Knex.Config> } 
*/ 

module.exports = {
  development: { 
      client: 'mysql', 
      connection: { 
          host: '127.0.0.1',
          database: 'forge', 
          user: 'root', 
          password: 'root' 
      }, 
      pool: { 
          min: 2, 
          max: 10 
      }, 
      migrations: { tableName: 'knex_migrations' } },
  staging: { 
      client: 'mysql', 
      connection: { 
          database: 'forge', 
          user: 'root', 
          password: 'root' 
      }, 
      pool: { 
          min: 2, 
          max: 10 
      }, 
      migrations: { tableName: 'knex_migrations' } },
  production: { 
      client: 'mysql', 
      connection: { 
          database: 'forge', 
          user: 'root', 
          password: 'root' 
      }, 
      pool: { 
          min: 2, 
          max: 10 
      }, 
      migrations: { tableName: 'knex_migrations' } },
};