/*
 * @Date: 2023-04-26 12:38:56
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-15 01:28:15
 * @FilePath: /Forge/client/src/game/Canvas.js
 */
import React, { useEffect, useRef } from 'react';

function Canvas(props) {
  const mainbackgroundSrc = '/resources/game/main-map-1920-1080.png'

  const canvasRef = useRef(null)

  // initial game scene
  function initialScene() {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    const mainbackground = new Image()
    mainbackground.src = mainbackgroundSrc
    mainbackground.onload = function () {
      ctx.drawImage(mainbackground,0,0)
    }
  }

  useEffect(()=>{
    initialScene()
  },[])

  return (
    <canvas width={window.innerWidth} height={window.innerHeight} className="canvas" ref={canvasRef}/>
  );
}

export default Canvas;