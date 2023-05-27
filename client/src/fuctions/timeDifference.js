/*
 * @Date: 2023-05-26 22:29:06
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-26 23:26:58
 * @FilePath: /Forge/client/src/fuctions/timeDifference.js
 */
export const hour = (mss)=>{
  return parseInt((mss % (1000*60*60*24))/(1000*60*60))
}

export const minute = (mss) => {
  return parseInt((mss % (1000*60*60))/(1000*60))
}

export const second = (mss)=>{
  return parseInt((mss%(1000*60))/1000) 
 }

export const day = (mss) => {
  return parseInt(mss/(1000*60*60*24))
}

