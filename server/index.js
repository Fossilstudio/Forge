/*
 * @Date: 2023-04-30 22:16:14
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-05 01:28:18
 * @FilePath: /Forge/server/index.js
 */
import express from 'express';
import bodyParser from 'body-parser'

import users from './routes/users'

let app = express();

app.use(bodyParser.json())
app.use('/api/users', users)

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(6060, () => console.log('Running on localhost:6060'));