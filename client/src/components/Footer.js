/*
 * @Date: 2023-04-26 12:25:14
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-05-12 23:12:07
 * @FilePath: /Forge/client/src/components/Footer.js
 */
import React from 'react';

const linkedinLink = 'https://www.linkedin.com/in/ke-ren/'
const githubLink = 'https://github.com/Fossilstudio'

function Footer() {
  const contentBack = '../resources/login/content_bg.jpg'

  const styles = {
    container:{
      position:'relative',
      width:946,
      backgroundImage:"url("+contentBack+")",
      marginRight:5,
      zIndex:2,
    },
    li:{
      padding:"0 25px",
    },
    footerLink:{
      fontSize:12,
    },

  }

  return (
    <div className="footer" style={styles.container}>
      <ul style={{
        display:'flex',
        justifyContent:'center',
      }}>
        <li style={{...styles.li,borderRight:'1px solid'}}><a style={styles.footerLink} href='/'>Home</a></li>
        <li style={{...styles.li,borderRight:'1px solid'}}><a style={styles.footerLink} href='/'>gallery</a></li>
        <li style={{...styles.li,borderRight:'1px solid'}}><a style={styles.footerLink} href={githubLink}   target='_blank' rel='noreferrer'>Github</a></li>
        <li style={{...styles.li,borderRight:'1px solid'}}><a style={styles.footerLink} href={linkedinLink} target='_blank' rel='noreferrer'>LinkdIn</a></li>
        <li style={{...styles.li,borderRight:'1px solid'}}><a style={styles.footerLink} href='/'>Help</a></li>
        <li style={styles.li}><a style={styles.footerLink} href='/'>Contact</a></li>
      </ul>
      <p style={{
        fontSize:12,
        textAlign:'center'
        }}>&copy; 2023 Kyleren.com</p>
    </div>
  );
}

export default Footer;