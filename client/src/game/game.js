/*
 * @Date: 2023-04-26 12:38:56
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-08 00:45:54
 * @FilePath: /Forge/client/src/game/game.js
 */
import React from 'react';
import { useLocation } from 'react-router-dom';

function Game() {
  const location = useLocation()
  const user_id = location.state.id
  console.log(location)
  return (
    <div className="contact">
      Gmae Page
      <div>
        user id: {user_id}
      </div>
    </div>
  );
}

export default Game;