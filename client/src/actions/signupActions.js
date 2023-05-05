/*
 * @Date: 2023-05-04 22:55:19
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-04 22:56:35
 * @FilePath: /Forge/client/src/actions/signupActions.js
 */
import axios from 'axios'

export const userSignupRequest = (userData) => {
  return axios.post('api/users',userData)
}