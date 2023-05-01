/*
 * @Date: 2023-04-27 01:26:39
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-04-29 14:27:39
 * @FilePath: \client\src\components\sign-in\News.js
 */
import React from 'react';

function News() {
  const blockTopBottomFrame = '../../resources/login/block_top_bottom_wood.jpg'
  const blockFlexFrame = '../../resources/login/block_flex_wood.jpg'

  const styles = {
    news:{
      display:'flex',
      justifyContent:'center',
      width:640,
      position:'relative',
      padding:5,
    }
  }

  return (
    <div id='news' style={styles.news}>
      <div id='news_container' style={{
        height:425,
        width:624,
      }}>
        <div className='top' style={{
          height:5,
          backgroundImage:"url("+blockTopBottomFrame+")",
        }}></div>
        <div className='flex' style={{
          height:415,
          backgroundImage:"url("+blockFlexFrame+")",
        }}>
        </div>
        <div className='bottom' style={{
          height:5,
          backgroundImage:"url("+blockTopBottomFrame+")",
          backgroundPosition:'0 5px'
        }} ></div>
      </div>
    </div>
  );
}

export default News;