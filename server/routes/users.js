/*
 * @Date: 2023-04-30 22:20:40
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-07 03:30:53
 * @FilePath: /Forge/server/routes/users.js
 */
import express from 'express'
import bcrypt from 'bcrypt';

import UsersLogin from '../models/users_login'

let router = express.Router()

const vailidateInput = (data) => {
  let error = ''

  return UsersLogin.query({
    where:{username:data.username}
  }).fetch()
    .then(()=>{
      error = 'This username is exist.'
      return { error:error, isValid:false }
    })
    .catch(()=>{
      return { error:error, isValid:true } 
    })
}


router.get('/',(req,res)=>{
  console.log('get success')
})

router.post('/',(req,res)=>{
  vailidateInput(req.body.query).then(({error,isValid})=>{
    if (isValid) {
      console.log(req.body.query)
      const {username, password} = req.body.query;
      const password_digest = bcrypt.hashSync(password, 10)
      console.log(username,password_digest)

      let newUser = UsersLogin.forge({
        username:username, password:password_digest
      })

      newUser.save()
        .then(function(user) {
          res.json({ success: true , username:username});
        }).catch(function(err) {
          res.status(500).json({ errors: err })
        });
    } else{
      res.status(400).json(error)
    }
  })

  
})

export default router