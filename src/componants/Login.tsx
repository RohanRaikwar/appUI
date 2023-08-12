import React, { use, useRef, useEffect, useState, FC } from "react";
import styles from "./login.module.css";
import Image from "next/image";
import cross from "../../public/iconoir_cancel.svg";
import { useForm } from "react-hook-form";
import Circularloader from "@/materialUI/Circularloader";
import Otp from "./Otp";
import axios from "axios";
import { error, log } from "console";
import { type } from "os";



const Login = ({ setauth,otpup,setotpup }:any )=> {
  const [loadershow,setloadershow] =useState(true)
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [otp, setotp] = useState(true);
  const [res, setres] = useState("");
  const [log_btn, setllog_btn] = useState(true);
  const [phone, setphone] = useState("");
  const phonehandller = (e: any) => {
    setphone(e.target.value);
    console.log(phone);
  };
  const onSubmit = (data: any) => {
    setloadershow(false)
    console.log(data);

    axios
      .post(
        "https://revivohotelmanagment-app.onrender.com/auth/api/login/otp",
        data
      )
      .then((res) => {
       setloadershow(true)
       setphone(data.mobile_no)

        
       
        console.log(res.data);
        setotp(!otp)
        
        
      })
     
      .catch((res) => {
        console.log(res);
        setloadershow(true)
        setError("mobile_no", {
          type: "server",
          message: "User are not found",
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
    <><div style={loadershow?{display:"none"}:{display:"block",position:"absolute",zIndex:"100000"}}><Circularloader  /></div>
      <section className={styles.main}>
        <div className={styles.login_sec}>
          <h1>LOGIN</h1> <Image onClick={click} src={cross} alt="dd" />
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
              placeholder="Mobile No."
              {...register("mobile_no", { required: true })}
            />
            {errors.mobile_no?.type == "server" && (
              <p
                style={{
                  margin: "0px",
                  color: "red",
                  position: "absolute",
                  bottom: "166px",
                  fontSize:"13px"
                }}
              >
                *User are Not found
              </p>
            )}
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

        <div style={otp?{top:"0px"}:{top:"-56rem"}} className={otp ? styles.otp : styles.otp_down}>
          <Otp
            otdown={otdown}
            phone={phone} setloadershow={setloadershow} loadershow={loadershow}
            requesturl={
              "https://revivohotelmanagment-app.onrender.com/auth/api/login"
            }
          />
        </div>
      </section>
    </>
  );
};

export default Login;
