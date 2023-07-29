import React from "react";
import styles from "../styles/welcome.module.css";
import Image from "next/image";
import logo from "../../public/Frame 2655 1.png";
import { style } from "@mui/system";
import { useRouter } from "next/router";

const welcome = () => {
  const router = useRouter()

  return (
    <div className={styles.main}>
      <div className={styles.wel_box}>
        <h1> Welcome to Revivo</h1>
        <Image src={logo} alt="skddg" />
      </div>
      <div className={styles.wel_rap}>
        <h1>
          To continue further, please fill in the following information about
          your hotel
        </h1>
        <div className={styles.list}>
          <ul>
            <li>Primary Information</li>
            <li>Verification Documents</li>
            <li>Types of accomodation</li>
            <li>Capacity of Accomodation </li>
            <li>Add on Services</li>
            <li>Amenities</li>
            <li>Images</li>
            <li>Guest Policies</li>
          </ul>
          <div className={styles.btns}>
            <button className={styles.back}>Back</button> <button className={styles.cont} onClick={()=> router.push("http://localhost:3000/hotel/enterdetails")}>continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default welcome;
