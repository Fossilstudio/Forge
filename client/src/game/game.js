/*
 * @Date: 2023-04-26 12:38:56
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-12 23:56:00
 * @FilePath: /Forge/client/src/game/game.js
 */
import React from 'react';
import { useLocation } from 'react-router-dom';

import Canvas from './Canvas';
import UI from './UI';

function Game() {
  const location = useLocation()
  const user_id = location.state.id
  console.log(location)
  return (
    <div id="gameContainer">
      <Canvas user_id = {user_id}/>
      <UI user_id={user_id}/>
    </div>
  );
}

export default Game;