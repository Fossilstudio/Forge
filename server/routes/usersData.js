/*
 * @Date: 2023-05-22 00:59:21
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-22 01:04:11
 * @FilePath: /Forge/server/routes/usersData.js
 */
import express from 'express'

import UsersData from '../models/users_data'

let router = express.Router()

router.post('/',(req,res)=>{
  console.log(req.query)
})

export default router