/*
 * @Date: 2023-04-30 22:16:14
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-24 23:59:34
 * @FilePath: /Forge/server/index.js
 */
import express from 'express';
import bodyParser from 'body-parser'

import users from './routes/users'
import userData from './routes/usersData'
import userName from './routes/usersName'

let app = express();

app.use(bodyParser.json())
app.use('/api/users', users)

app.use('/api/usersData', userData)
app.use('/api/usersName', userName)

app.get('/', (req, res) => {
  res.send('hello world');
})

app.listen(6060, () => console.log('Running on localhost:6060'));