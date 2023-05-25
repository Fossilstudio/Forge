/*
 * @Date: 2023-05-22 00:59:21
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-25 00:02:07
 * @FilePath: /Forge/server/routes/usersName.js
 */
import express from 'express'
import UsersLogin from '../models/users_login'

let router = express.Router()

router.get('/',(req,res)=> {
  console.log( req )
  let err = ''
  UsersLogin.query({
    select:['id','user_name'],
    where:{id:req.query.userID}
  }).fetch()
    .then((user_data)=>{
      res.json(user_data)
    })
    .catch(()=>{
      err = 'not found user_name '
      res.status(404).json(err)
    })
})

router.post('/',(req,res)=>{
  console.log(req.query)
})

export default router