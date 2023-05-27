/*
 * @Date: 2023-05-22 00:59:21
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-26 23:01:09
 * @FilePath: /Forge/server/routes/usersData.js
 */
import express from 'express'

import UsersData from '../models/users_data'

let router = express.Router()

router.get('/',(req,res)=> {
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
  console.log(req.body.query)
  let err = ''
  // UsersData.where({user_id:req.query.user_id}).update({user_forge_points:1})
})

// router.post('/',(req,res)=>{
//   console.log(req.query)
//   let err = ''
//   UsersData.query({
//     where:{user_id:req.query.user_id}
//   }).update(req.query.userData)
//     .then(()=>{
//       console.log('update')
//     })
//     .catch(()=>{
//       console.log('updtae failed')
//     })
// })

export default router