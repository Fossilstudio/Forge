/*
 * @Date: 2023-04-30 22:20:40
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-08 00:46:22
 * @FilePath: /Forge/server/routes/users.js
 */
import express from 'express'
import bcrypt from 'bcrypt';

import UsersLogin from '../models/users_login'

let router = express.Router()

const vailidateInput = (data) => {
  let error = ''

  return UsersLogin.query({
    where:{user_name:data.user_name}
  }).fetch()
    .then(()=>{
      error = 'This username is exist.'
      return { error:error, isValid:false }
    })
    .catch(()=>{
      return { error:error, isValid:true } 
    })
}

const vailidateLogin = (data) => {
  
  return UsersLogin.query({
    select:['id','user_name','user_password'] ,
    where:{user_name:data.user_name}
  }).fetch()
}


router.get('/',(req,res)=>{
  vailidateLogin(req.query)
  .then((userData)=>{
    const hash = userData.attributes.user_password
    bcrypt.compare(req.query.user_password, hash, function(err,result){
      if(result) {
        res.json(userData)
      }
      else {res.status(406).json(err)}
    })
  })
  .catch((err)=>{
    res.status(405).json(err)
  })
})

router.post('/',(req,res)=>{
  vailidateInput(req.body.query).then(({error,isValid})=>{
    if (isValid) {
      const {user_name, user_password} = req.body.query;
      const password_digest = bcrypt.hashSync(user_password, 10)

      let newUser = UsersLogin.forge({
        user_name:user_name, user_password:password_digest
      })

      newUser.save()
        .then(function(user) {
          res.json({ success: true , user_name:user_name});
        }).catch(function(err) {
          res.status(500).json({ errors: err })
        });
    } else{
      res.status(400).json(error)
    }
  })

  
})

export default router