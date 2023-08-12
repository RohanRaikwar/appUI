import styles from "./otp.module.css";
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { useForm } from "react-hook-form";
import Image from "next/image";
import cross from "../../public/iconoir_cancel.svg";
import axios from "axios";
import { useRouter } from "next/router";

const Otp = ({ otdown, phone, requesturl, setloadershow, loadershow }: any) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
  } = useForm();
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const onSubmit = (data: any) => {
    console.log(data);
  };
  const otpvarihandller = () => {
    setloadershow(false);
    console.log(requesturl);

    axios
      .post(requesturl, {
        mobile_no: phone,
        otp: otp,
      })
      .then((res) => {
        console.log(res.data);
        const token = res.data.token;
        const exittoken = localStorage.getItem("SavedToken");
        if (exittoken) {
          localStorage.removeItem("SavedToken");
        }

        localStorage.setItem("SavedToken", "Bearer " + token);
        axios.defaults.headers.common["Authorization"] = "Bearer " + token;
        setloadershow(true);
        router.push("http://localhost:3000/welcome");
      })
      .catch((err) => {
        setloadershow(true);
        setError("otp", {
          type: "server",
          message: "invalide otp",
        });
        console.log(err);
      });
  };
  return (
    <div className={styles.main}>
      <div className={styles.cont_name}>
        <h1>OTP Verification</h1>{" "}
        <Image
          onClick={() => {
            otdown();
            setOtp("");
          }}
          src={cross}
          alt="dd"
        />
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
        {errors.otp?.type === "server" && (
          <p style={{ color: "red", margin: "0px", position: "absolute" }}>
            invalide otp
          </p>
        )}
        <div className={styles.resend_rap}>
          <h1>Didn’t recieve this code?</h1> <h2>Resend</h2>
        </div>
        <button className={styles.otp_btn} onClick={otpvarihandller}>
          GET OTP
        </button>
      </div>
    </div>
  );
};

export default Otp;
