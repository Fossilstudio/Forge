/*
 * @Date: 2023-06-01 22:44:09
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-06-01 23:42:58
 * @FilePath: /Forge/client/src/game/ui-components/Forge.js
 */
import React from 'react';
import { useState, useEffect } from 'react';
import { Image, Text, Group } from 'react-konva';
import useImage from 'use-image';
import { hour , minute, second, day } from '../../fuctions/timeDifference';
import { updateDataForge } from '../../actions/getAndUpdate';

const hudurl = '/resources/game/hud/hud.png'

function Forge({user_id,user_forge_points, mss ,age}) {
  const [image] = useImage(hudurl)
  const [windowWidth, setWindowWidht] = useState(window.innerWidth)
  const [xPosition, setXposition] = useState(windowWidth/2 - 151)

  const getHours = ()=>{
    const hours = hour(mss) + day(mss)*24 + user_forge_points
    if (hours<=10) {
      return hours
    } else return 10
  }
  
  const getSeconds = ()=>{
   const  seconds = 59-second(mss)
   if (seconds<10) {
    return '0'+seconds
   }else return seconds
  }

  const getMinutes = ()=>{
    const minutes = 59-minute(mss)
    if(minutes<10) {
      return '0'+minutes
    }else if (minutes<=0) {
      return '0'+minutes
    }else return minutes
  }

  const pointsText = ()=>{
    if(getHours()<10) {
      return '0'+ getHours()
    }else return getHours()
  }

  const pointMarks = []
  for (let index = 0; index < getHours(); index++) {
    const x=index*8+xPosition+88
    pointMarks.push(
      <Image key={index} image={image} x={x} y={31} width={7} height={14} crop={{x:573,y:295,width:7,height:14}}/>
    )
  }

  if (minute(mss)===0 && second(mss)===0) {
    updateDataForge({user_id,user_forge_points,increatePoints:1})
  }

  useEffect(()=>{
    window.addEventListener('resize',()=>{setWindowWidht(window.innerWidth)})
    return()=>window.removeEventListener('resize',()=>{setWindowWidht(window.innerWidth)})
  })

  useEffect(()=>{
    if (windowWidth>=1200) {
      setXposition(windowWidth/2 - 150)
    }else(setXposition(380))
  },[windowWidth])

  return (
    <Group id='forge-points'>
      <Image image={image} x={xPosition} y={0} crop={{x:584,y:263,height:50,width:250}} width={252} height={50}/>
      <Text text={pointsText()} x={xPosition+70} y={33} fill='#EACE9A'/>
      {pointMarks}
      <Image image={image} x={xPosition+169} y={31} crop={{x:328,y:479,height:15,width:15}} width={15} height={15}/>
      <Text text={age} fontSize={15} x={xPosition+56} y={10} fill='#EACE9A' fontStyle='bold' align='center' width={140}/>
      <Image image={image} x={xPosition+86} y={48} crop={{x:64,y:478,height:25,width:79}} width={79} height={25}/>
      <Text text={getMinutes()+' :'} fontSize={11} x={xPosition+122} y={55} fill='#EACE9A' fontStyle='bold' align='left' width={140}/>
      <Text text={getSeconds()} fontSize={11} x={xPosition+143} y={55} fill='#EACE9A' fontStyle='bold' align='left' width={140}/>
      <Text text={'spend forge'} fontSize={11} x={xPosition+143} y={90} fill='#EACE9A' fontStyle='bold' align='center' width={140}/>
    </Group>
  )
}

export default Forge