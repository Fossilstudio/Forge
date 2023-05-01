/*
 * @Date: 2023-04-26 12:26:06
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-04-30 22:14:34
 * @FilePath: /Forge/client/src/components/sign-in/SignInPage.js
 */
import React from 'react';
import News from './News';
import SignIn from './SignIn';
import Footer from '../Footer';

function SignInPage() {
  const wallpaper = '/resources/login/foe_wallpaper-d8649e9a6.jpg'
  const logo = '../../resources/logo/foe_header_logo-ae2023c78.png'
  const mainTop = '../../resources/login/main_top_bg-0e27a72fd.png'
  const mainFlex = '../../resources/login/main_flex_bg.png'
  const mainBottom = '../../resources/login/main_bottom_bg-95951135c.png'
  const contentBack = '../../resources/login/content_bg.jpg'
  const navButtonBackground = '../../resources/login/menu_buttons_spr.jpg'

  const styles = {
    container: {
      backgroundImage:"url("+wallpaper+")",
      color:'#fff',
      height:"100vh",
      paddingTop:40,
    },
    header: {
      position:'relative',
      display:'flex',
      justifyContent:'center',
      zIndex:1,
    },
    main: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      marginTop:-38
    },
    mainTop: {
      display:'flex',
      justifyContent: 'center',
      backgroundImage:"url("+mainTop+")",
      height:198,
      width:1051,
    },
    mainFlex: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundImage:"url("+mainFlex+")",
      width:1004,
      paddingLeft:3
    },
    mainBottom: {
      backgroundImage:"url("+mainBottom+")",
      width:1004,
      height:30,
      paddingLeft:1,
      marginTop:-16,
    },
    contentWrap: {
      display:'flex',
      width:946,
      margin:"-80px 0 0 -5px",
      justifyContent:'center',
      position:'relative',
      backgroundImage:"url("+contentBack+")",
      backgroundRepeat:'repeat',
    },
    mainNav: {
     width:930 
    },
    navigation: {
      display:'flex',
      justifyContent:'space-between',
      paddingLeft:0,
      paddingTop:36,
      zIndex:2,
    },
    navButton:{
      width:155,
      height:39,
      backgroundImage:"url("+navButtonBackground+")",
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
    },

  }

  return (
    <div id="sign-in" className='container' style={styles.container}>
      <div id='header' style={styles.header}>
        <a href='/'>
          <img src={logo} alt='Forge of Empires'/>
        </a>
      </div>
      <div id='main' style={styles.main}>
        <div id='main_top' style={styles.mainTop}>
          <div id='main_nav' style={styles.mainNav}>
            <ul id='navigation' style={styles.navigation}>
              <li style={{...styles.navButton,backgroundPosition:'top left'}}>
                <a className='dropdown_top' style={{color:'#fff'}}
                   href='https://us0.forgeofempires.com/page/home/'
                   >HOME</a>
              </li>
              <li style={{...styles.navButton,backgroundPosition:'top'}}>
                <a className='dropdown_top' style={{color:'#fff'}}
                   href='https://us0.forgeofempires.com/page/home/'>GAME</a>
              </li>
              <li style={{...styles.navButton,backgroundPosition:'top'}}>
                <a className='dropdown_top' style={{color:'#fff'}}
                   href='https://us0.forgeofempires.com/page/home/'>GITHUB</a>
              </li>
              <li style={{...styles.navButton,backgroundPosition:'top'}}>
                <a className='dropdown_top' style={{color:'#fff'}}
                   href='https://us0.forgeofempires.com/page/home/'>HELP</a>
              </li>
              <li style={{...styles.navButton,backgroundPosition:'top'}}>
                <a className='dropdown_top' style={{color:'#fff'}}
                   href='https://us0.forgeofempires.com/page/home/'>CONTACT</a>
              </li>
              <li style={{...styles.navButton,backgroundPosition:'top right'}}>
                <a className='dropdown_top' style={{color:'#fff'}}
                   href='https://us0.forgeofempires.com/page/home/'>GALLERY</a>
              </li>
            </ul>
          </div>
        </div>
        <div id='main_flex' style={styles.mainFlex}>
          <div id='content_warp' style={styles.contentWrap}>
            <News />
            <SignIn />
          </div>
          <Footer />
        </div>
        <div id='main_bottom' style={styles.mainBottom}>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;