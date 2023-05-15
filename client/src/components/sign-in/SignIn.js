/*
 * @Date: 2023-04-27 01:04:03
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-13 10:32:25
 * @FilePath: /Forge/client/src/components/sign-in/SignIn.js
 */
import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {userLoginRequest} from '../../actions/signinActions'

function SignIn() {
  const frameTopBottom = '/resources/login/widget_block_top_bottom.png'
  const frameFlex = '/resources/login/widget_block_flex.png'
  const inputBackground = '/resources/login/form-foe-input-iframe.jpg'
  const buttonBackground = '/resources/login/form-foe-button-iframe.png'
  const ippLoginIcons = '/resources/login/sprite-ipp-buttons.png'
  const playnowBackground = '/resources/login/playnow_box_bg.jpg'
  const registerBackground = '/resources/login/contentbox-foe-iframe-background-s.jpg'

  const [login, setLogin] = useState(false)
  const [playerLogin, setPlayerLogin] = useState({
    user_name: "",
    user_password: "",
  })
  const [user_name, setUsername] = useState('')
  const [user_id, setUserID] = useState()
  const [err, setError] = useState('')
  const [isRemeberMe, setIsRemeberMe] = useState(false)

  const styles = {
    container:{
      height:400,
      padding:5,
    },
    topBottom:{
      height:8,
      backgroundImage:"url("+frameTopBottom+")",
      backgroundSize:'cover'
    },
    input:{
      width:190,
      height:28,
      backgroundImage:"url("+inputBackground+")",
      backgroundRepeat:'no-repeat',
      paddingLeft:5,
      paddingRight:5,
      marginBottom:8,
      color:'#000',
      border:'none',
    },
    signInBtn:{
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
    ippIcon:{
      width:20,
      height:20,
      marginLeft:4,
      backgroundImage:"url("+ippLoginIcons+")",
    },
    registerPanel: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundImage:"url("+registerBackground+")",
      backgroundRepeat:'no-repeat',
      margin:2,
      width:280,
      height:146,
      paddingTop:25,
      paddingBottom:10
    },
    loginPanel: {
      backgroundImage:"url("+playnowBackground+")",
      backgroundRepeat:'no-repeat',
      margin:2,
      width:280,
      height:274,
      paddingTop:10,
      paddingBottom:10
    },
    loginForm: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      padding:10,
    },
    loginFlex: {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      height:410,
      backgroundImage:"url("+frameFlex+")",
      backgroundRepeat: 'repeat-y',
      backgroundSize:'contain'
    }
  }

  const handleMouseOver = (e)=>{
    e.target.style.color = '#ffc34e'
  }

  const handleMouseLeave = (e)=>{
    e.target.style.color = '#ee8f0f'
  }

  const loginOnChangeName = (e) => {
    const username = e.target.value
    let player={...playerLogin}
    player.user_name = username
    setPlayerLogin(player)
  }

  const loginOnchangePassword = (e) => {
    const password = e.target.value
    let player={...playerLogin}
    player.user_password = password
    setPlayerLogin(player)    
  }

  const loginOnSubmit = (e)=>{
    e.preventDefault()
    userLoginRequest(playerLogin)
    .then((res)=>{
      setLogin(true)
      setUsername(res.data.user_name)
      setUserID(res.data.id)
      if (isRemeberMe) {
        const localItem = {
          username:res.data.user_name,
          isRemeberMe: isRemeberMe
        }
        localStorage.setItem('remeberMe',JSON.stringify(localItem))
      } else {
        localStorage.clear()
      }
    })
    .catch((err)=>{
      setError(err.response.data)
    })
  }

  const remeberMeOnChange  = (e) => {
    setIsRemeberMe(e.target.checked)
  }

  useEffect(()=>{
    const localItem = JSON.parse(localStorage.getItem('remeberMe'))
    if (localItem !== null) {
      setIsRemeberMe(true)
      setUsername(localItem.username)
      let player={...playerLogin}
      player.user_name = localItem.username
      setPlayerLogin(player)
    }else {
      setIsRemeberMe(false)
    }
  },[])

  return (
    <div className="sign-in-form" style={styles.container}>
      <div id='login_top' style={styles.topBottom}></div>
      <div id='login_flex' style={styles.loginFlex}>
        <div id='login-panel' style={styles.loginPanel}>
          {!login && <div id='sign-in-form-wrap' style={{display:"block"}}>
            <form id='sign-in-form' style={styles.loginForm} onSubmit={loginOnSubmit}>
              <input type='text' style={styles.input} placeholder='player name' onChange={loginOnChangeName} defaultValue={user_name}/>
              <input type='password' style={styles.input} placeholder='password' onChange={loginOnchangePassword}></input>
              <label>
                <input type='checkbox' onChange={remeberMeOnChange} checked={isRemeberMe}/>
                <span>Remember me</span>
              </label>
              <button type='submit' style={styles.signInBtn}><span>LOGIN</span></button>
            </form>
            <div id='login-meta'>
              <div className='forgot-password' style={{textAlign:'center'}}>
                <a target='_top' href='/' className='forgot-password-link' 
                  style={{
                  color:'#ee8f0f',
                }}
                  onMouseOver={handleMouseOver}
                  onMouseLeave={handleMouseLeave}
                >Forgot password?</a>
              </div>
              <div id='ipp-login-box' style={{
                display:'flex',
                justifyContent:'center',
                alignItems:'stretch',
                height:20,
                paddingTop:5,
                }}>
                <span>Connect with</span>
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
          </div>}
          {login && <div id='welcome_message' style={{textAlign:'center'}}>
            <p style={{
              lineHeight:'140%',
              fontSize:'130%',
              margin:0,
              paddingTop:5
            }}>Welcome,<br/>you are logged in as<br/><span style={{color:'#ffc34e'}}>{user_name}</span></p>
            <Link to='/game' state={{id:user_id}}>
              <button style={styles.signInBtn}><span>PLAY</span></button>
            </Link>
            <p>You aren't <span style={{color:'#ffc34e'}}>{user_name}</span>?</p>
            <button style={{
              background:'transparent',
              color:'#fff',
              border:'none',
              cursor:'pointer',
            }}><span style={{
              textDecoration:'underline'
            }}>Log out!</span></button>
          </div>}
          
        </div>
        <div id='register-panel' style={styles.registerPanel}>
          <span>Not registered?</span>
          <Link to={"/signup"}>
            <button style={styles.signInBtn}><span>REGISTER</span></button>
          </Link>
        </div>
      </div>
      <div id='login_bottom' style={{...styles.topBottom,backgroundPositionY:-64}}></div>

    </div>
  );
}

export default SignIn;