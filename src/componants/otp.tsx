
import styles from './otp.module.css'
import React, { useState } from 'react';
import OtpInput from 'react-otp-input';
import Image from 'next/image';
import cross from '../../public/iconoir_cancel.svg'
import axios from 'axios';
import { useRouter } from 'next/router'

const otp = ({otdown,phone}:any) => {
  const router = useRouter();


  

    const [otp, setOtp] = useState('');
    const otpvarihandller=()=>{
      axios.post("https://revivohotelmanagment-app.onrender.com/auth/api/signup",{
        mobile_no:phone,
        otp:otp
      }).then((res)=>{
        console.log(res.data);
        const token = res.data.token;
        const exittoken = localStorage.getItem("SavedToken")
        if(exittoken){
          localStorage.removeItem("SavedToken")

        }
        localStorage.setItem("SavedToken", 'Bearer ' + token);
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        router.push("http://localhost:3000/welcome")
        
        
      })

    }
  return (
    <div  className={styles.main}>
        <div className={styles.cont_name}>
            <h1>OTP Verification</h1> <Image  onClick={otdown} src={cross} alt='dd'/>
        </div>
        <div className={styles.otp_rap}>
            <h1>{`Code sent to ${phone}`}</h1>
            <OtpInput
      value={otp}
      onChange={setOtp}
      numInputs={4}
      renderSeparator={<span></span>}
      renderInput={(props) => <input {...props} />}
    />
    <div className={styles.resend_rap}><h1>Didn’t recieve this code?</h1> <h2>Resend</h2></div>
    <button className={styles.otp_btn } onClick={otpvarihandller}>GET OTP</button>
        </div>
    </div>
  )
}

export default otp