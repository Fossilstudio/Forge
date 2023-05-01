/*
 * @Date: 2023-04-26 12:30:37
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-01 01:58:45
 * @FilePath: /Forge/client/src/components/sign-up/SignUpPage.js
 */
import React from 'react';

function SignUpPage() {
  const backgroundVideo = '/resources/signup/video-background.mp4'
  const loginBackground = '/resources/signup/contentbox-foe-login-small.png'
  const loginBtnBG = '/resources/signup/form-foe-button-small.png'
  const ippLoginIcons = '/resources/login/sprite-ipp-buttons.png'
  const logo = '/resources/logo/foe_header_logo-ae2023c78.png'

  const styles={
    backgroundVideo:{
      objectFit:'cover',
      position:'absolute',
    },
    loginFormWrapper:{
      position:'absolute',
      height:68,
      minWidth:500,
      backgroundImage:"url("+loginBackground+")",
      backgroundRepeat:'no-repeat',
      right:0,
      color:'#ffc34e',
      fontSize:11,
    },
    loginUserID:{
      width:94,
      height:26,
      borderRadius:4,
      padding:4,
      marginRight:5,
      fontWeight:700,
      color:'#ffc34e',
      fontSize:13,
      fontFamily: 'Arial,Verdana,sans-serif',
      border: '1px solid #78922',
      backgroundColor:'transparent',
      boxShadow:'inset 0 0 30px #000, inset 0 0 1px #000',
    },
    ippIcon:{
      width:20,
      height:20,
      marginLeft:4,
      backgroundImage:"url("+ippLoginIcons+")",
    },
  }

  return (
    <div className="sign-up">
      <div id='wrapper' style={{
        minWidth:830,
        minHeight:'auto',
      }}>
        <div id='wrapper-wallpaper'>
          <video id='bgvid' 
            width={'100%'} height={'100%'} 
            loop autoPlay muted controls={false} 
            src={backgroundVideo} 
            style={styles.backgroundVideo}/>
        </div>
        <div id='login' className='login'>
          <div className='login-form-wrapper' style={styles.loginFormWrapper}>
            <div id='app' style={{
              padding:'0 8px 10px 54px',
              display:'flex',
            }}>
              <form className='login-form' name='login' method='post' style={{
                padding: '10px 8px',
                width:322,
              }}>
                <div>
                  <input type='text' id='login-userid' name='login[userid]' required 
                    placeholder='player name'
                    style={styles.loginUserID}/>
                  <input type='password' id='login-userid' name='login[userid]' required 
                    placeholder='Password'
                    style={styles.loginUserID}/>
                  <button type='submit' id='login_Login' style={{
                    backgroundImage:"url("+loginBtnBG+")",
                    backgroundRepeat:'no-repeat',
                    backgroundColor:'transparent',
                    width:105,
                    height:28,
                    cursor:'pointer',
                    color:'#b4bbca',
                    fontSize:13,
                    textAlign:'center',
                    border:'none',
                  }}>
                    <span>Login</span>
                  </button>
                </div>
                <div className='login-meta'>
                  <label htmlFor='login_remember_me' className='checkbox-label'>
                    <input type={'checkbox'} id='login_remember_me' name='login[remember_me]'></input>
                  </label>
                  <label style={{color:'#fff'}} htmlFor='login_remember_me'>Remember me</label>
                  <span style={{color:'#ffc34e'}}> | </span>
                  <span >
                    <a style={{color:'#ffc34e'}} href='/'>Forget password? </a>
                  </span>
                </div>
              </form>
              <div className='ipp-login-box' style={{
                padding:'10px 8px',
                zIndex:10
              }}>
                <span>Connect With</span>
                <div style={{display:'flex'}}>
                  <a href='/'>
                    <div style={{
                      ...styles.ippIcon,
                      backgroundPosition: "-22px 0",
                    }}></div>
                  </a>
                  <a href='/'>
                    <div style={{
                      ...styles.ippIcon,
                      backgroundPosition: "-43px 0",
                    }}></div>
                  </a>
                  <a href='/'>
                    <div style={{
                      ...styles.ippIcon,
                      backgroundPosition: "20px 0",
                    }}></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id='register-form'>
          <h1 className='main-logo' style={{
            position:'relative',
            width:385,
            margin:'0 auto',
          }}>
            <img src={logo} alt='Forge of Empires'/>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;