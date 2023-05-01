/*
 * @Date: 2023-04-30 22:16:14
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-04-30 22:21:13
 * @FilePath: /Forge/server/index.js
 */
import express from 'express';
import users from './routes/users'

let app = express();

app.use('/api/users', users)

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(6060, () => console.log('Running on localhost:6060'));