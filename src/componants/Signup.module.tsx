import React, { use, useRef, useEffect, useState } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import cross from "../../public/iconoir_cancel.svg";
import Otp from "./Otp";
import axios from "axios";
import Circularloader from "@/materialUI/Circularloader";
import { useForm } from "react-hook-form";
import { Server } from "http";


const Login = ({ setauth }: any) => {
  const { register, setError,formState: { errors }, handleSubmit } = useForm();

  const [otp, setotp] = useState(true);
  const [loadershow,setloadershow] =useState(true)
 
  const [log_btn, setllog_btn] = useState(true);
  const [phone, setphone] = useState("");

  const onSubmit = (data:any) => 
 {
  setloadershow(false)
    axios
      .post(
        "https://revivohotelmanagment-app.onrender.com/auth/api/signup/otp",
        {
          mobile_no: data.firstName,
        }
      )
      .then((res) => {
        
        console.log(res.data);
         setloadershow(true)
        

        if (res.data.message === `your otp has been sent to ${data.firstName}`) {
         
          setotp(!otp);
          setphone(data.firstName)
          console.log(otp);
          
        }
      }).catch((err)=>{
         setloadershow(true)
         console.log(loadershow);
         
        console.log(err.response);
        
        setError("firstName",{
          type:"server",
          message:"user are already exist"
        });
        
      });
  };
  const check_btn = () => {
    setllog_btn(!log_btn);
  };
  const otdown = () => {
    setotp(!otp);
    console.log("otpdown");
  };

  const click = () => {
    setauth();
    console.log("click");
  };

  return (
    <>
      <div style={loadershow?{display:"none"}:{display:"block",position:"absolute",zIndex:"100000"}}><Circularloader  /></div>
      <section className={styles.main}>
        <div className={styles.login_sec}>
          <h1>SIGNUP</h1> <Image onClick={click} src={cross} alt="dd" />
        </div>
        <div className={styles.loginfild}>
          <h1>Enter your Mobile No.</h1>
          <h2>You will recieve a 4 digit code to verify next</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            pattern="[0-9]*"
            required
            inputMode="numeric"
            maxLength={10}
            {...register("firstName", { required: true })} aria-invalid={errors.firstName ? "true" : "false"} 
              
            placeholder="Mobile No."
          />
          {errors.firstName?.type === 'server' && <p style={{margin:"0px",color:"red",position:"absolute",bottom:"166px",fontSize:"13px"}}>*User are already exist </p>}

          <div className={styles.chack_rap}>
            <input
              className={styles.akar_icons_check_box_fil}
              onChange={check_btn}
              type="checkbox"
              name="checkbox"
            />
            <h3>
              I agree to all the <span>terms and conditions</span>
            </h3>
          </div>

          <button
            
            disabled={log_btn}
            className={!log_btn ? styles.otpgetbtn : styles.deoptbtn}
          >
            Get OTP
          </button>
          </form>
        </div>
         
        <div  style={otp?{top:"0px"}:{top:"-56rem"}} className={ styles.otp_down}>
          <Otp otdown={otdown} setloadershow={setloadershow} loadershow={loadershow} phone={phone}  requesturl={"https://revivohotelmanagment-app.onrender.com/auth/api/signup"}/>
        </div>
      </section>
    </>
  );
};

export default Login;
