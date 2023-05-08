/*
 * @Date: 2023-04-26 12:30:37
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-07 22:34:21
 * @FilePath: /Forge/client/src/components/sign-up/SignUpPage.js
 */
import React from 'react';
import { useState } from 'react';
import { userSignupRequest } from '../../actions/signupActions';

import {Link} from 'react-router-dom'

function SignUpPage() {
  const backgroundVideo = '/resources/signup/video-background.mp4'
  const loginBackground = '/resources/signup/contentbox-foe-login-small.png'
  const loginBtnBG = '/resources/signup/form-foe-button-small.png'
  const ippLoginIcons = '/resources/login/sprite-ipp-buttons.png'
  const logo = '/resources/logo/logo-foe.png'
  const formContainerEagles = '/resources/signup/decoration-foe-eagles.png'
  const registerFormContainerBg = '/resources/signup/contentbox-foe-register.png'
  const inputBackground = '/resources/signup/form-foe-input.png'
  const buttonBackground = '/resources/login/form-foe-button-iframe.png'

  const [registeration, setRegisteration] = useState({
    user_name: "",
    user_password: "",
  })

  const [valid, setValid] = useState(true)
  const [login, setLogin] = useState(false)
  const [error, setError] = useState('')
  const [username, setUsername] = useState('')

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
    registerEagles:{
      position:'relative',
      width:62,
      height:205,
      backgroundImage:"url("+formContainerEagles+")",
      backgroundRepeat:'no-repeat',
      zIndex:2,
      top:-40,
    },
    formLabel: {
      margin:'5px 3px 0',
      fontSize:18,
      fontWeight:700,
      lineHeight:1.5,
      color:'#d1d9df'
    },
    formInput: {
      width:272,
      height:32,
      padding:'4px 6px',
      fontSize:14,
      fontWeight:700,
      color:'#000',
      backgroundImage:"url("+inputBackground+")",
    },
    formTerms: {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      margin:'10px auto',
      color:'#818c95',
      fontSize:10,
    },
    loginBtn: {
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
    },
    registerForm: {
      margin:'0 auto',
      paddingTop:92,
      width:480,
      minHeight:868
    },
    mainLogo: {
      position:'relative',
      width:385,
      margin:'0 auto',
      paddingTop:25,
      zIndex:3,
    },
    registerBtn: {
      margin:'0 auto',
      padding:12,
      width:200,
      height:78,
      border:'none',
      background:'transparent',
      backgroundImage:"url("+buttonBackground+")",
      backgroundSize:'cover',
      fontSize:30,
      fontWeight:700,
      color:'#fffde6',
      cursor:'pointer',
    },
    ipp: {
      position:'relative',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      top:80
    },
    registerFormContainer: {
      display:'flex',
      width:529,
      zIndex:1,
      marginTop:-71
    },
    registInner: {
      width:499,
      height:425,
      backgroundImage:"url("+registerFormContainerBg+")",
      backgroundSize:'cover',
      zIndex:1,
    },
    app2: {
      position:'relative',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      top:80
    }
  }

  const registOnchangeName = (e) => {
    const username = e.target.value
    let player={...registeration}
    player.user_name = username
    setRegisteration(player)    
  }

  const registOnchangePassword = (e) => {
    const password = e.target.value
    let player={...registeration}
    player.user_password = password
    setRegisteration(player)
  }
  
  const registOnSubmit = (e) => {
    e.preventDefault()
    userSignupRequest(registeration)
      .then((res)=>{
        console.log('regist success')
        console.log(res)
        setLogin(true)
        setUsername(res.data.user_name)
      })
      .catch((err)=>{
        setValid(false)
        setError(err.response.data)
      })
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
        {/* Login Form Start */}
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
                  <input type='password' id='login-password' name='login[userid]' required 
                    placeholder='Password'
                    style={styles.loginUserID}/>
                  <button type='submit' id='login_Login' style={styles.loginBtn}>
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
        {/* Login Form End */}

        {/* Register Form Start*/}
        <div id='register-form' style={styles.registerForm}>
          <h1 className='main-logo' style={styles.mainLogo}>
            <img src={logo} alt='Forge of Empires'/>
          </h1>
          <div id="register-form-container" style={styles.registerFormContainer}>
            <div style={{...styles.registerEagles, left:30, }}></div>
            <div className='register-inner' style={styles.registInner}>
              <div className='app2' style={styles.app2}>
                {!login && <form name='registration' method='post' id='registration' onSubmit={registOnSubmit} >
                  {/* input username start */}
                  <div id='inputNickname'>
                    <label style={styles.formLabel} htmlFor='registration_nickname'>Choose your username</label><br />
                    <input type='text' id='registration_nickname'   name='registration[nickname]' required 
                      style={styles.formInput}
                      value={registeration.username}
                      onChange={registOnchangeName}
                     />
                  </div>
                  {/* input username end */}

                  {!valid && <span style={{color:'#FFEA5E'}}>{error}</span>}

                  {/* input password start */}
                  <div id='inputPassword'>
                    <label style={styles.formLabel} htmlFor='registration_password'>Choose your password</label><br />
                    <input type='password' id='registration_password' name='registration[password]' required
                     style={styles.formInput}
                     value={registeration.password}
                     onChange={registOnchangePassword}
                     />
                  </div>
                  {/* input password end */}

                  <div id='terms' style={styles.formTerms}>
                    <label htmlFor='registration_acceptTerms' style={{marginRight:10}}>
                      <input type='checkbox' id='registration_acceptTerms' name='registration[acceptTerms]'required/>
                    </label>
                    <label htmlFor='registration_acceptTerms'>
                      <span>I accept the <a href='/' target='_blank'>Terms and Conditions</a></span><br />
                      <span>You can find our Privacy Policy <a href='/' target='_blank'>here</a></span>
                    </label>
                  </div>
                  <div style={{
                    display:'flex',
                    flexDirection:'column',
                    alignItems:'center',
                  }}><button style={styles.registerBtn}>
                    <span>RIGISTER</span>
                    </button></div>
                </form>}
                {login && 
                <div style={{paddingTop:50}}>
                  <p style={{color:'#FFEA5E',marginBottom:30}}>Welcome {username}!</p>
                  <Link to={'/game'}><button style={styles.registerBtn} username={username}>
                    <span>PLAY NOW</span>
                    </button></Link>
                </div>}
              </div>
              {!login && <div id='ipp' style={styles.ipp}>
                <span style={{
                  color:'#fff', fontSize:14, lineHeight:1.8
                  }}>Or register with</span>
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
              </div>}
            </div>
            <div style={{
              ...styles.registerEagles,
              backgroundPosition:'-95px 0',
              left:-37}}></div>
          </div>
        </div>
        {/* Register Form End */}
      </div>
    </div>
  );
}

export default SignUpPage;