/*
 * @Date: 2023-04-26 12:25:14
 * @LastEditors: Ke Ren
 * @LastEditTime: 2023-04-30 00:25:24
 * @FilePath: /Client/src/components/Footer.js
 */
import React from 'react';

function Footer() {
  const contentBack = '../resources/login/content_bg.jpg'

  const styles = {
    container:{
      width:946,
      backgroundImage:"url("+contentBack+")",
      marginRight:5,
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
        <li style={{...styles.li,borderRight:'1px solid'}}><a style={styles.footerLink} href='/'>Github</a></li>
        <li style={{...styles.li,borderRight:'1px solid'}}><a style={styles.footerLink} href='/'>LinkdIn</a></li>
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