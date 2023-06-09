/*
 * @Date: 2023-04-26 12:38:56
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-06-01 23:47:26
 * @FilePath: /Forge/client/src/game/UI.js
 */
import React, { useEffect, useState } from 'react';
import { Stage, Layer, Image, Text, Rect, Line, Group } from 'react-konva';
import useImage from 'use-image';
import { getUserData, getUserName } from '../actions/getAndUpdate';

import Forge from './ui-components/Forge';

const hudurl = '/resources/game/hud/hud.png'
const iconsUrl = '/resources/game/icons/icons.png'
const tipUrl = '/resources/game/tooltip/tooltip.png'


function UI(props) {
  const user_id = props.user_id
  const [image] = useImage(hudurl)
  const [userName, setUserName] = useState('')
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [windowHeight, setWindowHeight] = useState(window.innerHeight)
  const [goods, setGoods] = useState({
    good1:{name:'wood',amount:1},
    good2:{name:'stone',amount:2},
    good3:{name:'wine',amount:3},
    good4:{name:'marble',amount:4},
    good5:{name:'dye',amount:5},
  })
  const [userData, setUserData] = useState({
    user_id:0,
    user_global_rank:0,
    user_population:0,
    user_happiness:0,
    user_forge_points:0,
    user_gold:0,
    user_supplies:0,
    user_medals:0,
    user_diamonds:0
  })
  const [forgeTimer, setForgeTimer] = useState(0)

  useEffect(()=>{
    const mountDate = new Date()
    getUserData(user_id)
      .then((user_data)=>{
        setUserData(user_data.data)
        const updateDate = new Date(user_data.data.user_forge_update_at)
        setForgeTimer(mountDate.getTime() - updateDate.getTime())
      })
      .catch((err)=>{
        console.log(err)
      })
      getUserName(user_id)
      .then((userData)=>{
        setUserName(userData.data.user_name)
      })
      .catch((err)=>{
        console.log(err)
      })

    // fetch user data per second
    // TODO UPDATE USERSDATA
    const interval = setInterval(()=>{
      const time = new Date()
      getUserData(user_id)
      .then((user_data)=>{
        setUserData(user_data.data)
        const updateDate = new Date(user_data.data.user_forge_update_at)
        setForgeTimer(time.getTime() - updateDate.getTime())
      })
      .catch((err)=>{
        console.log(err)
      })
      getUserName(user_id)
      .then((userData)=>{
        setUserName(userData.data.user_name)
      })
      .catch((err)=>{
        console.log(err)
      })
    }, 1000)
    return ()=> clearInterval(interval)
  },[])


  const castleIcon = {
    url:iconsUrl, 
    cropx:429, 
    cropy:1064, 
  }

  const rankIcon = {
    url:iconsUrl, 
    cropx:382, 
    cropy:816, 
  }
  
  const populationicon = {
    url: iconsUrl,
    cropx:142, 
    cropy:1170, 
  }

  const goodsIcon = {
    url: iconsUrl,
    cropx:441,
    cropy:318
  }

  const diamondIcon = {
    url: iconsUrl,
    cropx:287,
    cropy:566
  }

  const medalIcon = {
    url: iconsUrl,
    cropx:240,
    cropy:909
  }

  const supplyIcon = {
    url: iconsUrl,
    cropx:171,
    cropy:1012
  }

  const goldIcon = {
    url: iconsUrl,
    cropx:161,
    cropy:1194
  }

  useEffect(()=>{
    window.addEventListener('resize',()=>{
      if (window.innerWidth<1400) {
        setWindowWidth(1400)
      }else {setWindowWidth(window.innerWidth)}
      setWindowHeight(window.innerHeight)
    })
  })
  
  return (
    <div id="UI-Container">
      <Stage width={windowWidth} height={windowHeight}>
        <Layer>
          {/* HUD Background */}
          <Image image={image} x={0} y={0} width={window.innerWidth} height={40}
            crop={{x:0,y:394,width:349,height:40}}
          />
          <Group id='hud-left-group'>
            <Group id='hud-username'>
              <TextBox text={userName} width={100} x={10} y={8} icon={castleIcon}/>
              <Line x={112} y={6} points={[0,0,0,24]} stroke='#301B0B' strokeWidth={1}/>
            </Group>
            <Group id='hud-rank'>
              <TextBox text={userData.user_global_rank} width={100} x={114} y={8} icon={rankIcon}/>
              <Line x={216} y={6} points={[0,0,0,24]} stroke='#301B0B' strokeWidth={1}/>
            </Group>
            <TextBox text={userData.user_population} width={100} x={218} y={8} icon={populationicon}/>
            <Goods goods={goods} goodsIcon={goodsIcon}/>
            <Happiness happiness={userData.user_happiness}/>
          </Group>
          <Forge user_id = {userData.user_id} user_forge_points = {userData.user_forge_points} mss={forgeTimer} age={userData.user_age}/>
          {/* <ForgePoints userData={userData} forgePoints={userData.user_forge_points} age={userData.user_age} mss={forgeTimer} /> */}
          <Group id='hud-right-group'>
            <Image image={image} x={windowWidth-35} y={6} crop={{x:299,y:478,width:27,height:27}} width={27} height={27}/>
            <Image image={image} x={windowWidth-65} y={6} crop={{x:243,y:478,width:27,height:27}} width={27} height={27}/>
            <TextBox text={userData.user_diamonds} width={100} x={windowWidth-170} y={8} icon={diamondIcon}/>
            <TextBox text={userData.user_medals} width={100} x={windowWidth-275} y={8} icon={medalIcon}/>
            <TextBox text={userData.user_supplies} width={100} x={windowWidth-380} y={8} icon={supplyIcon}/>
            <TextBox text={userData.user_gold} width={100} x={windowWidth-485} y={8} icon={goldIcon}/>
          </Group>
        </Layer>
      </Stage>
    </div>
  );
}

function TextBox({text,width,x,y,icon}) {
  const [iconurl] = useImage(icon.url)

  return (
    <>
      <Rect x={x} y={5} width={width} height={26} fill='#311B0D' cornerRadius={3}/>
      <Image image={iconurl} x={x+10} y={y} width={22} height={22}
             crop={{x:icon.cropx,y:icon.cropy,width:27,height:27}}
      />
      <Text text={text} fontSize={15} x={x+35} y={12} fill='#EACE9A'/>
    </>
  )
}

function Happiness ({happiness}) {
  const [iconurl] = useImage(hudurl)
  let x
  if (happiness >= 100) {
    x=353
  }else if (happiness >= 0) {
    x=404
  }else x=455

  return(
    <>
      <Image image={iconurl} x={290} y={0} crop={{x:824,y:199,height:45,width:90}} width={90} height={45}/>
      <Image image={iconurl} x={312} y={0} crop={{x:x,y:469,height:41,width:45}} width={45} height={41}/>
    </>
  )
}

function Goods({goods,goodsIcon}) {
  const [goodsTip, setGoodsTip] = useState(false)

  const onGoodsMouseOver = ()=>{
    setGoodsTip(true)
  }

  const onGoodsMouseLeave = ()=>{
    setGoodsTip(false)
  }

  return(
    <Group>
      <TextBox text={''} width={42} x={360} y={8} icon={goodsIcon} />
      <Rect x={360} y={7} width={40} height={22} onMouseOver={onGoodsMouseOver} onMouseLeave={onGoodsMouseLeave}/>
      {goodsTip && <GoodsTip goods={goods}/>}
    </Group>
  )
}

function GoodsTip({goods}) {
  const [iconurl] = useImage(tipUrl)
  const tipX = 350
  const tipY = 36
  return(
    <Group id='goodstip'>
      <Group id='goodstip-top'>
        <Image image={iconurl} x={tipX} y={tipY+12} crop={{x:363,y:135,height:12,width:24}} width={24} height={12}/>
        <Image image={iconurl} x={tipX+15} y={tipY+12} crop={{x:370,y:135,height:12,width:25}} width={60} height={12}/>
        <Image image={iconurl} x={tipX+75} y={tipY+12} crop={{x:381,y:135,height:12,width:24}} width={24} height={12}/>
        <Image image={iconurl} x={tipX+5} y={tipY} crop={{x:392,y:229,height:18,width:30}} width={30} height={18}/>
      </Group>
      <Group id='goodstip-flex'>
        <Group id='goodstip-flex-background'>
          <Image image={iconurl} x={tipX} y={tipY+24} crop={{x:363,y:160,height:12,width:24}} width={24} height={145}/>
          <Image image={iconurl} x={tipX+15} y={tipY+24} crop={{x:370,y:160,height:12,width:25}} width={60} height={145}/>
          <Image image={iconurl} x={tipX+75} y={tipY+24} crop={{x:381,y:160,height:12,width:24}} width={24} height={145}/>
        </Group>
        <Group id='goodstip-header'>
          <Image image={iconurl} x={tipX+6} y={55} crop={{x:11,y:8,height:22,width:194}} width={88} height={20} />
          <Text text={'goods'} fill='#EACE9A' x={tipX+10} y={59}/>
        </Group>
        <Group id='good1'>
          <Image image={iconurl} x={tipX+6} y={80} crop={{x:11,y:8,height:22,width:194}} width={88} height={20} opacity={0.3}/>
          <Text text={goods.good1.name} fill='#EACE9A' x={tipX+10} y={84}/>
        </Group>
        <Group id='good2'>
          <Image image={iconurl} x={tipX+6} y={105} crop={{x:11,y:8,height:22,width:194}} width={88} height={20} opacity={0.3}/>
          <Text text={goods.good2.name} fill='#EACE9A' x={tipX+10} y={109}/>
        </Group>
        <Group id='good3'>
          <Image image={iconurl} x={tipX+6} y={130} crop={{x:11,y:8,height:22,width:194}} width={88} height={20} opacity={0.3}/>
          <Text text={goods.good3.name} fill='#EACE9A' x={tipX+10} y={134}/>
        </Group>
        <Group id='good4'>
          <Image image={iconurl} x={tipX+6} y={155} crop={{x:11,y:8,height:22,width:194}} width={88} height={20} opacity={0.3}/>
          <Text text={goods.good4.name} fill='#EACE9A' x={tipX+10} y={159}/>
        </Group>
        <Group id='good5'>
          <Image image={iconurl} x={tipX+6} y={180} crop={{x:11,y:8,height:22,width:194}} width={88} height={20} opacity={0.3}/>
          <Text text={goods.good5.name} fill='#EACE9A' x={tipX+10} y={184}/>
        </Group>
      </Group>
      <Group>
        <Image image={iconurl} x={tipX} y={tipY+168} crop={{x:363,y:172,height:5,width:24}} width={24} height={5}/>
        <Image image={iconurl} x={tipX+15} y={tipY+168} crop={{x:370,y:172,height:5,width:25}} width={60} height={5}/>
        <Image image={iconurl} x={tipX+75} y={tipY+168} crop={{x:381,y:172,height:5,width:24}} width={24} height={5}/>
      </Group>
    </Group>
  )
}

export default UI;