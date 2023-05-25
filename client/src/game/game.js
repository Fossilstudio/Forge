/*
 * @Date: 2023-04-26 12:38:56
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-25 00:10:18
 * @FilePath: /Forge/client/src/game/game.js
 */
import React from 'react';
import { useLocation } from 'react-router-dom';

import UI from './UI';

function Game() {
  const location = useLocation()
  const user_id = location.state.id

  return (
    <div id="gameContainer">
      <UI user_id={user_id}/>
    </div>
  );
}

export default Game;