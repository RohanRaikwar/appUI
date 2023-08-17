import React, { useState } from "react";
import Image from "next/image";
import Logo from "./../../../public/Frame 2655 1.png";
import Statusbar from "@/materialUI/Statusbar";
import style from "./../../styles/addrooms.module.css";
import Circularloader from "@/materialUI/Circularloader";
import axios from "axios";

import { incrementByAmount } from "../../redux/cardSlice";
import { useDispatch, useSelector } from "react-redux";
import { Router, useRouter } from "next/router";

const Addrooms = () => {
  const [loadershow,setloadershow] =useState(true)
  const count = useSelector((state: any) => state.counter.value);
  const dispatch = useDispatch();
  const roomname: any = React.useRef();
  const [server, setserver] = React.useState(["Excutive"]);
  const [rooms, setrooms] = React.useState<String[]>([]);
  const router = useRouter()
  React.useEffect(() => {
    setrooms(["Deluxe", "Hannymoon"]);
  }, []);
  function addroom() {
    setrooms([...rooms, roomname.current.value]);
    roomname.current.value=""
  }
  function removeandadd(value: string) {
    
    const index = server.indexOf(value);
  
    if (index > -1) {
      const clone = server;
     

      const value = clone.splice(index, 1);
      setserver([...clone]);
      
    } else {
      const clone = server;
      clone.push(value);
      setserver([...clone]);
     
    }
  }
  function requesthandle() {
    if(server.length<1){
      console.log("cha")
      return

    }
    else{
      setloadershow(false)
  
    
    dispatch(incrementByAmount(server));

    axios
      .post(
        "https://revivohotelmanagment-app.onrender.com/api/hoteldata/roomtypes",
        { data: server },
        {
          headers: { authorization: localStorage.getItem("SavedToken") },
        }
      )
      .then((res) => {console.log(res); setloadershow(true);
           if(res.data.completedstage=="room types uploaded"){
            router.push("http://localhost:3000/hotel/capasity")
           }
     
      })}
  }
  return (
    <div className={style.main}>
       <div style={loadershow ? { display: "none" } : { display: "block" }}>
        <Circularloader />
      </div>
      <div className={style.into_cont}>
        <h1>Select Accomodation</h1>
        <Image src={Logo} alt="d" />
      </div>
      <div className={style.statusbar}>
        <Statusbar updatevalue={38} prieveasevalue={25} />
      </div>
      <div className={style.room_cont}>
        <div className={style.rap_cont}>
          <input type="text" ref={roomname} placeholder="Add new room type" />
          <button onClick={addroom}>ADD</button>
        </div>
      </div>
      <h2>Tap to select Room types</h2>
      <div className={style.roomtypes}>
        <div>
          <input
            type="checkbox"
            id="excutive"
            name="excutive"
            defaultChecked
            value="excutive"
            onChange={() => removeandadd("Excutive")}
          />
          <label htmlFor="excutive">Excutive</label>
        </div>
        {rooms.map((room:string, index:number) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => removeandadd(room)}

              name={room}
              value={room}
            />
            <label htmlFor={room}>{room}</label>
          </div>
        ))}{server.length<1&&<p style={{top:"-37px",color:"red",position:"absolute",fontSize:"13px"}}> *Choose least one type of room</p>}
      </div>
      <div className={style.btn_rap}>
        <button>BACK</button>
        <button onClick={requesthandle}>CONTINEU</button>
      </div>
    </div>
  );
};

export default Addrooms;
