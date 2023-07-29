import React ,{useRef, useState}from 'react'
import styles from './login.module.css'
import Image  from 'next/image'
import cross from "../../public/iconoir_cancel.svg"
import { Head } from 'next/document'
import ss from '../../public/applogo.svg'




const login = ({setauth}:any) => {
 
    
  
  const click = ()=> {
    setauth();
    console.log("click");
    
  }
 

  return (
    
  <>
  
<section className={styles.main}>
  <div className={styles.login_sec}>
        <h1>SIGNUP</h1>  <Image  onClick={click} src={cross} alt='dd' />
      </div><div className={styles.loginfild}>
          <h1>Enter your Mobile No.</h1>
          <h2>You will recieve a 4 digit code
            to verify next</h2>
          <input type="number"  maxLength={10} placeholder='Mobile No.' />
          <div className={styles.chack_rap}><input className={styles.akar_icons_check_box_fil} type='checkbox' name='checkbox' /><h3>I agree to all the <span>terms and conditions</span></h3></div>

          <button  className={styles.otpgetbtn}>Get OTP</button>

        </div>
        

</section></>
  )
}


export default  login

