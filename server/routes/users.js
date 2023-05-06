/*
 * @Date: 2023-04-30 22:20:40
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-05 23:20:09
 * @FilePath: /Forge/server/routes/users.js
 */
import express from 'express'
import bcrypt from 'bcrypt';

import UsersLogin from '../models/users_login'

let router = express.Router()

router.get('/',(req,res)=>{
  console.log('get success')
})

router.post('/',(req,res)=>{
  console.log(req.body.query)
  const {username, password} = req.body.query;
  const password_digest = bcrypt.hashSync(password, 10)
  console.log(username,password_digest)

  let newUser = UsersLogin.forge({
    username:username, password:password_digest
  })

  newUser.save()
    .then(function(user) {
      res.json({ success: true });
    }).catch(function(err) {
      res.status(500).json({ errors: err })
    });
})

export default router