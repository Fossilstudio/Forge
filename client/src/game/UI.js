/*
 * @Date: 2023-04-26 12:38:56
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-15 01:33:26
 * @FilePath: /Forge/client/src/game/UI.js
 */
import React, { useEffect } from 'react';

function UI(props) {
  const user_id = props.user_id
  const hudSprite = '/resources/game/hud/hud.png'

  return (
    <div id="UI-Container">
      <div id='hud'>
        <img src={ hudSprite } alt='hud'></img>
      </div>
      <p>{user_id}</p>
    </div>
  );
}

export default UI;