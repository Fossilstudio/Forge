/*
 * @Date: 2023-05-07 22:46:28
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-07 23:47:33
 * @FilePath: /Forge/client/src/actions/signinActions.js
 */
import axios from 'axios'

export const userLoginRequest = (userData) => {
  return axios.get('/api/users',{params:userData}) 
}