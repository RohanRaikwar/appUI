import React, { useState,useRef } from "react";
import styles from "../../styles/hotel.module.css";
import Image from "next/image";
import logo from "../../../public/Frame 2655 1.png";
import home from "../../../public/hotelpub/homelogo.png";
import address from "../../../public/hotelpub/address.png";
import gst from "../../../public/hotelpub/address.png";
import upload from "../../../public/hotelpub/fileupload.png";
import axios from "axios";
import Router, { useRouter } from "next/router";

import mail from "../../../public/hotelpub/mail.png";
import phonebook from "../../../public/hotelpub/phonebook.png";
import phon from "../../../public/hotelpub/phonr.png";
import Statusbar from "@/materialUI/statusbar";
import { log } from "console";
import { headers } from "next/dist/client/components/headers";


const enterdetails =   () => {
  const [name, setname] = useState("File Not Select");
  const [Hotel,sethotelname] =useState("")
  const [email,setemail] =useState("")
  const [contact,setcontact] = useState("")
  const [city,setcity] =useState("")

  const [haddress,setadress]=useState("")
  const [GSTIN,setGSTIN]=useState("")
  const [hlogo,setlogo]=useState("")
  const hotenam= useRef<any>("0")
  const router = useRouter()
  
  const formhandller = ()=>{
   
    const token =  localStorage.getItem("SavedToken")
    
    console.log(token);
    
  
    
    
    axios.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/details",{
      hotelname:Hotel,
      email:email,
      contact:contact,
      city:city,
      address:haddress,
      GSTIN:GSTIN,
      logopath:"C:/Users/RohanRaikwar/Downloads/hotelserver2/src/public/1689280013309-Picture1.jpg"

      },{
      headers:{
        authorization:token
      }},
      
    
    ).then((res)=>{
        if(res.data.completedstage="contact details filled"){
          router.push("http://localhost:3000/hotel/varification")
        }
      
    })

  }

  const sohan = (e: any) => {
    const ss: any = e?.target.value;
    const pp: any = ss.match(/[\/\\]([\w\d\s\.\-\(\)]+)$/)[1];
    if (!pp) {
      return;
    }
    setname(pp);
  };
  return (
    <div className={styles.main}>
      <div className={styles.logo_cont}>
        <h1>Let’s get started</h1>
        <Image src={logo} alt="aa" />
      </div>
      <Statusbar/>
      <div className={styles.add_rap}>
        <h1>Enter Hotel details to start</h1>
        <div className={styles.input_rap}>
          <div>
            <Image src={home} alt="hu" />{" "}
            <input type="text" ref={hotenam} onChange={(e)=> sethotelname(e.target.value)}
             placeholder="Hotel Name"/>
          </div>
          <div>
            <Image src={mail} alt="hu" />{" "}
            <input type="text"  onChange={(e)=>setemail(e.target.value)} placeholder="Hotel Name" />
          </div>
          <div>
            <Image src={phon} alt="hu" />{" "}
            <input type="text" placeholder="Hotel Name"  onChange={(e)=>setcontact(e.target.value )}/>
          </div>
          <div>
            <Image src={address} alt="hu" />{" "}
            <input type="text" placeholder="Hotel Name" onChange={(e)=>(setcity(e.target.value))} />
          </div>
          <div>
            <Image src={phonebook} alt="hu" />{" "}
            <input type="text" placeholder="Hotel Name" onChange={(e)=>setadress(e.target.value)}/>
          </div>
          <div>
            <Image src={gst} alt="hu" />{" "}
            <input type="text" placeholder="Hotel Name"  onChange={(e)=>setGSTIN(e.target.value)}/>
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
        <h2 className={styles.info} >You can update this in settings</h2>
        <div className={styles.btn_cont}>
            <button className={styles.back_btn} >Back</button> <button className={styles.cont} onClick={formhandller}>Continue</button>

        </div>
      </div>
    </div>
  );
};

export default enterdetails;
