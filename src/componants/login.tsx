import React ,{use, useRef,useEffect, useState}from 'react'
import styles from './login.module.css'
import Image  from 'next/image'
import cross from "../../public/iconoir_cancel.svg"
import Otp from './otp'
import axios from 'axios'
import { log } from 'console'





const login = ({setauth}:any) => {
  const [otp,setotp] = useState(true)
  const [res,setres]=useState("")
  const [log_btn,setllog_btn] = useState(true)
  const [phone, setphone]= useState("")
  const phonehandller = (e:any)=>{
    setphone(e.target.value)
    console.log(phone);
    
  }
  const otprequest =()=>{
    axios.post("https://revivohotelmanagment-app.onrender.com/auth/api/signup/otp",{
      mobile_no:phone

    }).then((res)=>{
       
        
        setres(res.data)
        console.log(res.data);
        
      if(res.data.message===`your otp has been sent to ${phone}`){
      setotp(!otp)
    }
      
    })
    
   
    
    

    
  }
  const check_btn=()=> {
    setllog_btn(!log_btn)
  }
  const otdown=()=>{
    setotp(!otp)
    console.log(("otpdown"));
    
  }
    

  
  const click = ()=> {
    setauth();
    console.log("click");
    
  }
 

  return (
    
  <>
  
<section className={styles.main}>
  <div className={styles.login_sec}>
        <h1>LOGIN</h1>  <Image  onClick={click} src={cross} alt='dd' />
      </div><div className={styles.loginfild}>
          <h1>Enter your Mobile No.</h1>
          <h2>You will recieve a 4 digit code
            to verify next</h2>
          <input type="text" pattern='[0-9]*' required  inputMode='numeric' maxLength={10} onChange={phonehandller} placeholder='Mobile No.' />
          <div className={styles.chack_rap}><input className={styles.akar_icons_check_box_fil} onChange={check_btn} type='checkbox' name='checkbox' /><h3>I agree to all the <span>terms and conditions</span></h3></div>

          <button onClick={otprequest}  disabled={log_btn} className={!log_btn?styles.otpgetbtn:styles.deoptbtn} >Get OTP</button>

        </div>
        
<div className={otp?styles.otp:styles.otp_down} >
  <Otp otdown={otdown}  phone={phone}/>

</div>
</section>

</>
  )
}

export default  login