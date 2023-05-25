/*
 * @Date: 2023-05-22 00:59:21
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-24 23:39:19
 * @FilePath: /Forge/server/routes/usersData.js
 */
import express from 'express'

import UsersData from '../models/users_data'

let router = express.Router()

router.get('/',(req,res)=> {
  console.log( req )
  let err = ''
  UsersData.query({
    where:{user_id:req.query.userID}
  }).fetch()
    .then((user_data)=>{
      res.json(user_data)
    })
    .catch(()=>{
      err = ' not found user_id '
      res.status(400).json(err)
    })
})

router.post('/',(req,res)=>{
  console.log(req.query)
})

export default router