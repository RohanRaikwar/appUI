import React,{useState} from "react";
import style from "./../../styles/adamenies.module.css";
import Image from "next/image";
import Logo from "./../../../public/Frame 2655 1.png";
import Statusbar from "@/materialUI/statusbar";
import drowp from "./../../../public/Group (1).png";
import televistion from "./../../../public/adamines/televition.svg";
import frees from "./../../../public/adamines/frees.svg";
import internate from "./../../../public/adamines/wifi.svg";
import baathroom from "./../../../public/adamines/bathroom.svg";
import cctv from "./../../../public/adamines/ac.svg";
import clothrook from "./../../../public/adamines/rekk.svg";
import stydytable from "./../../../public/adamines/stusdytable.svg";
import houseclenign from "./../../../public/adamines/housecling.svg";
import loundry from "./../../../public/adamines/luandry.svg";
import firedafaty from "./../../../public/adamines/firesafety.svg";
import kingbad from "./../../../public/adamines/kingbed.svg";
import singlebad from "./../../../public/adamines/singlebad.svg";
import AC from "./../../../public/adamines/ac.svg";
import windhow from "./../../../public/adamines/window.svg";
import balcony from "./../../../public/adamines/balcony.svg";

const amenities = () => {
    
        
  const roomstype = ["excutive", "deluxe", "hannymoon"];
  return (
    <div className={style.main}>
      <div className={style.into_cont}>
        <h1>Add Amenities</h1> <Image src={Logo} alt="dd" />
      </div>
      <div>
        <Statusbar />
      </div>
      <div className={style.adamenies_rap}>
        <div className={style.general_cont}>
          <div className={style.ganral_text}>
            <h1>General amenities</h1>
            <Image src={drowp} alt="dd" />
          </div>

          <div className={style.service_cont}>
            <input id="kitchen" name="kitchen" type="checkbox" />
            <label htmlFor="kitchen">
              <Image src={televistion} alt="serverces" />
              <h1>Kitchen</h1>
            </label>
            <input
              id="house"
              name="housekiping"
              defaultChecked
              type="checkbox"
            />
            <label htmlFor="house">
              <Image src={frees} alt="serverces" />
              <h1>Housekeeping</h1>
            </label>
            <input id="lundary" name="lundary" type="checkbox" />
            <label htmlFor="lundary">
              <Image src={internate} alt="serverces" />
              <h1>Laundry</h1>
            </label>
            <input id="spa" name="spa" defaultChecked type="checkbox" />
            <label htmlFor="spa">
              <Image src={baathroom} alt="serverces" />
              <h1>Spa</h1>
            </label>
            <input id="gym" name="gym" type="checkbox" />
            <label htmlFor="gym">
              <Image src={cctv} alt="serverces" />
              <h1>Gym</h1>
            </label>
            <input id="bankuit" name="bankuit" type="checkbox" />
            <label htmlFor="bankuit">
              <Image src={clothrook} alt="serverces" />
              <h1>Banquet</h1>
            </label>
            <input id="salon" name="salon" type="checkbox" />
            <label htmlFor="salon">
              <Image src={stydytable} alt="serverces" />
              <h1>Salon</h1>
            </label>
            <input id="pool" name="pool" type="checkbox" />
            <label htmlFor="pool">
              <Image
                src={houseclenign}
                style={{ stroke: "green" }}
                alt="serverces"
              />
              <h1>Swimming pool</h1>
            </label>
            <input id="pool" name="pool" type="checkbox" />
            <label htmlFor="pool">
              <Image
                src={loundry}
                style={{ stroke: "green" }}
                alt="serverces"
              />
              <h1>Swimming pool</h1>
            </label>
            <input id="pool" name="pool" type="checkbox" />
            <label htmlFor="pool">
              <Image
                src={firedafaty}
                style={{ stroke: "green" }}
                alt="serverces"
              />
              <h1>Swimming pool</h1>
            </label>
          </div>
        </div>
        {roomstype.map((room, index) => (
          sohan(room,index)
        ))}
      </div>
    
    </div>
  );
};
function sohan (room:string,index:number){
    const [show_admin,set_show_adamini] = useState(false)

    return (
        <div key={index} className={style.room_adami_rap}>
            <div className={style.room_type}>
              <h1>
                {room} 
              </h1><Image src={drowp} onClick={()=>set_show_adamini(!show_admin)} alt="s" />
            </div>
            <div style={show_admin?{display:"none"}:{display:"grid"}} className={style.adamenies_types}>
              <label htmlFor="salon">
                <Image src={stydytable} alt="serverces" />
                <h1>Salon</h1>
              </label>
              <input id="pool" name="pool" type="checkbox" />
              <label htmlFor="pool">
                <Image
                  src={houseclenign}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Swimming pool</h1>
              </label>
              <input id="pool" name="pool" type="checkbox" />
              <label htmlFor="pool">
                <Image
                  src={loundry}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Swimming pool</h1>
              </label>
              <input id="pool" name="pool" type="checkbox" />
              <label htmlFor="pool">
                <Image
                  src={firedafaty}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Swimming pool</h1>
              </label>
              <input id="pool" name="pool" type="checkbox" />
              <label htmlFor="pool">
                <Image
                  src={firedafaty}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Swimming pool</h1>
              </label>
              <input id="pool" name="pool" type="checkbox" />
              <label htmlFor="pool">
                <Image
                  src={firedafaty}
                  style={{ stroke: "green" }}
                  alt="serverces"
                />
                <h1>Swimming pool</h1>
              </label>
            </div>
          </div>
        
    )
}
export default amenities;
