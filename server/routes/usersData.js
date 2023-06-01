/*
 * @Date: 2023-05-22 00:59:21
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-06-01 01:10:03
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
  res.json('post users_data/')
})

router.post('/forge',(req,res)=>{
  let userData = req.body.query
  const date = new Date()
  console.log(req.body.query)
  UsersData.query({
    where:{user_id: userData.user_id},
    update:{
      user_forge_points: userData.user_forge_points,
      // user_forge_update_at: date,
      // updated_at: date,
    }
  }).fetch()
    .then(()=>{
      res.json('update')
    })
    .catch((err)=>{
      res.status(401).json(err)
    })
})

router.post('/spendForge',(req,res)=>{
  let userData = req.body.query
  const date = new Date()
  console.log(req.body.query)
  UsersData.query({
    where:{user_id: userData.user_id},
    update:{
      user_forge_points: userData.user_forge_points,
      user_forge_update_at: date,
      updated_at: date,
    }
  }).fetch()
    .then(()=>{
      res.json('update')
    })
    .catch((err)=>{
      res.status(401).json(err)
    })
})


export default router