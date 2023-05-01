/*
 * @Date: 2023-04-30 22:20:40
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-04-30 22:20:52
 * @FilePath: /Forge/server/routes/users.js
 */
import express from 'express'

let router = express.Router()

router.get('/',(req,res)=>{
  console.log('get success')
})

router.post('/',(req,res)=>{
  console.log('post success')
})

export default router