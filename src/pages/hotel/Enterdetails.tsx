import React, { useState, useRef } from "react";
import styles from "../../styles/hotel.module.css";
import Image from "next/image";
import logo from "../../../public/Frame 2655 1.png";
import home from "../../../public/hotelpub/homelogo.png";
import address from "../../../public/hotelpub/address.png";
import gst from "../../../public/gstlogo.svg";
import upload from "../../../public/hotelpub/fileupload.png";
import axios from "axios";
import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import joi, { number } from "joi";
import { ErrorMessage } from "@hookform/error-message"

import mail from "../../../public/hotelpub/mail.png";
import phonebook from "../../../public/hotelpub/phonebook.png";
import phon from "../../../public/hotelpub/phonr.png";
import Statusbar from "../../materialUI/Statusbar";
import Circularloader from "../../materialUI/Circularloader";
import { joiResolver } from "@hookform/resolvers/joi";
const Schema = joi.object({
  hotelname: joi
    .string()
    .min(3)
    .max(20)
    .required()
    .pattern(/^[a-zA-Z ]+$/),
  email: joi.string().required().regex(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/).messages({
    "string.email": "Invalid email format",
    "any.required": "Email is required",
  }),
  contact: joi
    .string()
    .pattern(/^\d{10}$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid mobile number format",
      "any.required": "Mobile number is required",
    }),
  city: joi
    .string()
    .pattern(/^[a-zA-Z]+$/)
    .min(3)
    .max(30)
    .required(),
  address: joi
    .string()
    
    .min(3)
    .max(50)
    .required(),
  GSTIN: joi
    .string()
    .regex(/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Za-z]{1}Z[0-9A-Za-z]{1}$/)
    .required()
    .messages({
      "string.pattern.base": "Invalid GSTIN format",
      "any.required": "GSTIN is required",
    }),
});

const Enterdetails = () => {
  const {
    register,
    setError,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: joiResolver(Schema),
  });

  React.useEffect(() => {
    const toke = localStorage.getItem("SavedToken");
    if (!toke) {
      router.push("http://localhost:3000/auth");
    }
  }, []);
  const [name, setname] = useState("File Not Select");
  const [loadershow, setloadershow] = useState(true);
  const router = useRouter();
  const [logopath, setlogopath] = React.useState("");
  const onSubmit = (data: any) => {
    console.log(errors);

    const token = localStorage.getItem("SavedToken");

    console.log(token);
    data.logopath = logopath;

    setloadershow(false);

    axios
      .post(
        "https://revivohotelmanagment-app.onrender.com/api/hoteldata/details",
        data,
        {
          headers: {
            authorization: token,
          },
        }
      )
      .then((res) => {
        if ((res.data.completedstage = "contact details filled")) {
          router.push("http://localhost:3000/hotel/varification");
          setloadershow(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setloadershow(true);
      });
  };

  const sohan = (e: any) => {
    console.log(e.target.files[0]);

    const ss: any = e?.target.value;
    console.log(ss);

    const pp: any = ss.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    if (!pp) {
      return;
    }
    setname(pp);
    const formdata = new FormData();
    formdata.append("file", e.target.files[0]);
    axios
      .post(
        "https://revivohotelmanagment-app.onrender.com/logoupload",
        formdata
      )
      .then((res) => setlogopath(res.data));
  };
  return (
    <div className={styles.main}>
      <div style={loadershow ? { display: "none" } : { display: "block" }}>
        <Circularloader />
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={styles.logo_cont}>
          <h1>Let’s get started</h1>
          <Image src={logo} alt="aa" />
        </div>
        <Statusbar updatevalue={12} prieveasevalue={0} />
        <div className={styles.add_rap}>
          <h1>Enter Hotel details to start</h1>
          <div className={styles.input_rap}>
            <div>
              <Image src={home} alt="hu" />{" "}
              <input
                type="text"
                placeholder="Hotel Name"
                {...register("hotelname", { required: true })}
              /><span>{errors?.hotelname?.message?.toString()}</span>
            </div>
            <div>
              <Image src={mail} alt="hu" />{" "}
              <input
                type="text" inputMode="email"
                {...register("email", { required: true })}
                placeholder="Email Address"
              />
              <span>{errors?.email?.message?.toString()}</span>
            </div>
            <div>
              <Image src={phon} alt="hu" />{" "}
              <input
                type="text" maxLength={10} inputMode="numeric"
                placeholder="Contact Number"
                {...register("contact", { required: "contact is required"})}
              />
              <span>{errors?.contact?.message?.toString()}</span>
            </div>
            <div>
              <Image src={address} alt="hu" />{" "}
              <input
                type="text"
                placeholder="City"
                {...register("city", { required: true })}
              /><span>{errors?.city?.message?.toString()}</span>
            </div>
            <div>
              <Image src={phonebook} alt="hu" />{" "}
              <input
                type="text"
                placeholder="Address "
                {...register("address", { required: true })}
              /><span>{errors?.address?.message?.toString()}</span>
            </div>
            <div>
              <Image src={gst} alt="hu" />{" "}
              <input
                type="text"
                placeholder="GSTIN"
                {...register("GSTIN", { required: true })}
              /><span>{errors?.GSTIN?.message?.toString()}</span>
            </div>
          </div>

          <div className={styles.upload_cont}>
            <Image src={upload} alt="upoad" />
            <div className={styles.uprap}>
              <label htmlFor="file_name">
                <h3>upload logo</h3>{" "}
              </label>
              <div className={styles.setpp}>
                <h3 className={styles.file_n}>{name}</h3>
              </div>
            </div>

            <input
              onChange={sohan}
              accept=".png,.jpg"
              id="file_name"
              name="file_name"
              type="file"
              alt="y7"
              style={{ visibility: "hidden" }}
            />
          </div>
          <h2 className={styles.info}>You can update this in settings</h2>
          <div className={styles.btn_cont}>
            <button className={styles.back_btn}>Back</button>{" "}
            <button type="submit" className={styles.cont}>
              Continue
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Enterdetails;
