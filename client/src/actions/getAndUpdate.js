/*
 * @Date: 2023-05-24 23:15:12
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-06-01 01:03:04
 * @FilePath: /Forge/client/src/actions/getAndUpdate.js
 */
import axios from 'axios'

export const getUserData = (userID) => {
  return axios.get('/api/usersData',{params:{userID}})
}

export const getUserName = (userID) => {
  return axios.get('/api/usersName',{params:{userID}})
}

export const updateData = (userData) => {
  return axios.post('api/usersData',{query:userData})
}

export const updateDataForge = (userData) => {
  return axios.post('api/usersData/forge',{query:userData})
}

export const spendForge = (userData) => {
  return axios.post('api/usersData/spendForge',{query:userData})
}