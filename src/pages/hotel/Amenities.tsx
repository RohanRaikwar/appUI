import React,{use, useEffect, useState} from "react";
import style from "./../../styles/adamenies.module.css";
import Image from "next/image";
import Logo from "./../../../public/Frame 2655 1.png";
import Statusbar from "@/materialUI/Statusbar";
import drowp from "./../../../public/Group (1).png";
import televistion from "./../../../public/adamines/televition.svg";
import frees from "./../../../public/adamines/frees.svg";
import internate from "./../../../public/adamines/wifi.svg";
import baathroom from "./../../../public/adamines/bathroom.svg";
import cctv from "./../../../public/adamines/cctvs.svg";
import clothrook from "./../../../public/adamines/rekk.svg";
import stydytable from "./../../../public/adamines/stusdytable.svg";
import houseclenign from "./../../../public/adamines/housecling.svg";
import loundry from "./../../../public/adamines/luandry.svg";
import firedafaty from "./../../../public/adamines/firesafety.svg";
import kingbad from "./../../../public/adamines/kingbed.svg";
import singlebad from "./../../../public/adamines/singlebad.svg";
import AC from "./../../../public/adamines/ac.svg";
import windhow from "./../../../public/adamines/window.svg";
import balcony from "./../../../public/adamines/balcony1.svg";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";



const Amenities = () => {
 
  

  const count = useSelector((state: any) => state.counter.value);
  var tempArray:any =[]
  const clone= count
  console.log(count.length);

  count.forEach((name:string)=>tempArray.push({nameof_amenities:name,types:["Window","Balcony"]})
  )
  tempArray.push({nameof_amenities:"general_amenities",types:["Refrigerator" ,"Bathtub"]})
  console.log(tempArray);
  
  
  const addRemove=(e:any ,type:string)=>{
    console.log(type);
    
    const value = e.target.name
    console.log(value);
    console.log(tempArray);
    
    const index = tempArray.findIndex((obj:any)=> obj.nameof_amenities==type)
    console.log(index);
    console.log(tempArray[index]);
    
    const  eleIndex = tempArray[index].types.findIndex((ele:string)=>ele==value)
    if(eleIndex>-1){
      
      
      const data =  tempArray[index].types.filter((arrayEle:string)=>arrayEle!=value)
      console.log(data);
      
      tempArray[index].types= data
    }
    else{
      tempArray[index].types.push(value)

    }
      console.log(tempArray);
  


  }
  const requestHandler =()=>{
    axios.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/room/amenities",{
      amenities:tempArray
      
    
    },{
      headers:{authorization:localStorage.getItem("SavedToken")}
    }
    ).then(res=>console.log(res)
    ).catch(err=>console.log(err)
    )

  }
        

  return (  
    <div className={style.main}>
    
      <div className={style.into_cont}>
        <h1>Add Amenities</h1> <Image src={Logo} alt="dd" />
      </div>
      <div>
        <Statusbar  prieveasevalue={62} updatevalue={74}/>
      </div>
      <div className={style.adamenies_rap}>
        <div className={style.general_cont}>
          <div className={style.ganral_text}>
            <h1>General amenities</h1>
            <Image src={drowp} alt="dd" />
          </div>

          <div className={style.service_cont}>
            <input id="kitchen" name="Television" onChange={(e:any)=>addRemove(e,"general_amenities")} type="checkbox" />
            <label htmlFor="kitchen">
              <Image src={televistion} alt="serverces" />
              <h1>Television</h1>
            </label>
            <input
              id="house"
              
              name="Refrigerator"
              defaultChecked
              type="checkbox" onChange={(e:any)=>addRemove(e,"general_amenities")} 
            />
            <label htmlFor="house">
              <Image src={frees} alt="serverces" />
              <h1>Refrigerator</h1>
            </label>
            <input id="lundary" name="Internet" onChange={(e:any)=>addRemove(e,"general_amenities")}  type="checkbox" />
            <label htmlFor="lundary">
              <Image src={internate} alt="serverces" />
              <h1>Internet</h1>
            </label>
            <input id="spa" name="Bathtub" onChange={(e:any)=>addRemove(e,"general_amenities")}  defaultChecked type="checkbox" />
            <label htmlFor="spa">
              <Image src={baathroom} alt="serverces" />
              <h1>Bathtub</h1>
            </label>
            <input id="gym" name="CCTV" onChange={(e:any)=>addRemove(e,"general_amenities")} type="checkbox" />
            <label htmlFor="gym">
              <Image src={cctv} alt="serverces" />
              <h1>CCTV</h1>
            </label>
            <input id="bankuit" name="Clothes rack" onChange={(e:any)=>addRemove(e,"general_amenities")}  type="checkbox" />
            <label htmlFor="bankuit">
              <Image src={clothrook} alt="serverces" />
              <h1>Clothes rack</h1>
            </label>
            <input id="salon" name="Study Table" onChange={(e:any)=>addRemove(e,"general_amenities")} type="checkbox" />
            <label htmlFor="salon">
              <Image src={stydytable} alt="serverces" />
              <h1>Study Table</h1>
            </label>
            <input id="pool" name="Housekeeping"  onChange={(e:any)=>addRemove(e,"general_amenities")}type="checkbox" />
            <label htmlFor="pool">
              <Image
                src={houseclenign}
                style={{ stroke: "green" }}
                alt="serverces"
              />
              <h1>Housekeeping</h1>
            </label>
            <input id="Laundry" name="Laundry" onChange={(e:any)=>addRemove(e,"general_amenities")} type="checkbox" />
            <label htmlFor="Laundry">
              <Image
                src={loundry}
                style={{ stroke: "green" }}
                alt="serverces"
              />
              <h1>Laundry</h1>
            </label>
            <input id="Fire Safety" name="Fire Safety" onChange={(e:any)=>addRemove(e,"general_amenities")} type="checkbox" />
            <label htmlFor="Fire Safety">
              <Image
                src={firedafaty}
                style={{ stroke: "green" }}
                alt="serverces"
              />
              <h1>Fire Safety</h1>
            </label>
          </div>
        </div>
        {count.map((room:string, index:number) => (
          sohan(room,index,addRemove )
        ))}
      </div>
      <div className={style.btn_cont}>
            <button className={style.back_btn}  >Back</button> <button  onClick={requestHandler}  className={style.cont}>Contineu</button>

        </div>
    
    </div>
  );
};
function sohan (room:string,index:number,addRemove:any){
    const [show_admin,set_show_adamini] = useState(false)

 

    return (
        <div key={index} className={style.room_adami_rap}>
            <div className={style.room_type}>
              <h1>
                {room} 
              </h1><Image src={drowp} onClick={()=>set_show_adamini(!show_admin)} alt="s" />
            </div>
            <div style={show_admin?{display:"none"}:{display:"grid"}} className={style.adamenies_types}>
              <input id={room+"King Sized Bed"} name="King Sized Bed"onChange={(e:any)=>addRemove(e,room)} type="checkbox" />
              <label htmlFor={room+"King Sized Bed"}>
                <Image src={kingbad} alt="serverces" />
                <h1>King Sized Bed</h1>
              </label>
              <input id={room+"Single bed"} name="Single bed" onChange={(e:any)=>addRemove(e,room)} type="checkbox" />
              <label htmlFor={room+"Single bed"}>
                <Image
                  src={singlebad}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Swimming pool</h1>
              </label>
              <input id={room+"Queen sized bed"} name="Queen sized bed"onChange={(e:any)=>addRemove(e,room)} type="checkbox" />
              <label htmlFor={room+"Queen sized bed"}>
                <Image
                  src={kingbad}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Queen sized bed</h1>
              </label>
              <input id={room+"AC"} name="AC" onChange={(e:any)=>addRemove(e,room)} type="checkbox" />
              <label htmlFor={room+"AC"}>
                <Image
                  src={AC}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>AC</h1>
              </label>
              <input id={room+"Window"} name="Window" onChange={(e:any)=>addRemove(e,room)} defaultChecked type="checkbox" />
              <label htmlFor={room+"Window"}>
                <Image
                  src={windhow}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Window</h1>
              </label>
              <input id={room+"Balcony"} defaultChecked onChange={(e:any)=>addRemove(e,room)} name="Balcony" type="checkbox" />
              <label htmlFor={room+"Balcony"}>
                <Image
                  src={balcony}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Balcony</h1>
              </label>
            </div>
           
          </div>
        
    )
}
export default Amenities;
