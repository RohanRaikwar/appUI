import React, { useState } from "react";
import style from "./../../styles/policy.module.css";
import Logo from "./../../../public/Frame 2655 1.png";
import Statusbar from "@/materialUI/Statusbar";
import Image from "next/image";
import checkblack from './../../../public/Untitled design.png'
import checkfill from './../../../public/check fill.svg'
import downarrow from './../../../public/downarrow.svg'

const Policy = () => {
  const [checkbox ,setcheck_box] =useState<boolean[]>([false,false,false,false,false])
  const [selectAll,setSelectAll] = useState<boolean>(false)
  const [showCondition,setShowCondition] = useState<boolean[]>([false,false,false,false,false])
  function setcheck(){
    if(selectAll==true){
      setcheck_box([...[false,false,false,false,false]])
      setSelectAll(!selectAll)
      console.log("false all");
      
    }
    else{
      setcheck_box([...[true,true,true,true,true]])
      setSelectAll(!selectAll)
           console.log("true all");

    }

  }
  function singleckeck(index:any){
    console.log("challa");
    
    const clone =checkbox
    clone[index] = !checkbox[index]
    setcheck_box([...clone])
    const check_All= clone.every((value)=>value==true)
    if(check_All){
      console.log("yaha tahk chloa");
      
      setSelectAll(true)
    }
    else{
      console.log("yaha tahk chloa1");
      setSelectAll(false)
    }

  }
  const showConditionHandller =(index:number)=>{
    const clone = showCondition
    clone[index] = !showCondition[index]
    setShowCondition([...clone])
  }
  return (
    <div className={style.main}>
      <div className={style.into_cont}>
        <h1>Guest Policy</h1> <Image src={Logo} alt="dd" />
      </div>
      <div>
        <Statusbar  prieveasevalue={87} updatevalue={100}/>
      </div>
      <div className={style.checkbox_rap}>
        <div className={style.select_all}>
          <input type="checkbox" id="select_all" checked={selectAll} onClick={setcheck}/>
          <label htmlFor="select_all">
            <Image src={checkblack} alt="knjjd"/> <Image src={checkfill} alt="knjjd"/>
          </label>
          <h1>Select All</h1>
        </div>
        <div className={style.ganral_rap}>
          <div className={style.select_all}>
            <input type="checkbox" id="general" onChange={()=>singleckeck(0)} checked={checkbox[0]}/>
          <label htmlFor="general">
            <Image src={checkblack} alt="knjjd"/><Image src={checkfill} alt="knjjd"/>
          </label>
          <h1>General Policies</h1><Image src={downarrow} onClick={()=>showConditionHandller(0)} style={showCondition[0]?{transform:"rotate(0deg)"}:{transform:"rotate(180deg)"}} alt="ff" />
          </div>
          <div style={showCondition[0]?{display:"block"}:{display:"none"}} className={style.genral_policy}>
            <ol>
              <li>
                Couples are welcome. Guests can check in using any local or
                outstation ID proof
              </li>
              <li>
                General Booking Policy: Certain destinations may have different
                travel guidelines for specific times during the year. Please
                abide by all laws and guidelines as applicable
              </li>
              <li>
                Policies are booking specific and would be informed to the guest
                at the time of booking or upon Check-In.
              </li>
              <li>
                The primary guest must be at least 18 years of age to be able to
                check into the hotel.
              </li>
              <li>
                It is mandatory for guests to present valid photo identification
                at the time of check-in. According to government regulations, a
                valid Photo ID has to be carried by every person above the age
                of 18 staying at the hotel. The identification proofs accepted
                are Aadhar Card, Driving License, Voter ID Card, and Passport.
                Without Original copy of valid ID the guest will not be allowed
                to check-in.
              </li>
              <li>PAN card is not accepted as a valid ID card.</li>
              <li>Pets are not allowed in the hotel premises.</li>
              <li>
                Should any action by a guest be deemed inappropriate by the
                hotel, or if any inappropriate behaviour is brought to the
                attention of the hotel, the hotel reserves the right, after the
                allegations have been investigated, to take action against the
                guest.
              </li>
              <li>
                Guests shall be liable for any damage, except normal wear and
                tear to Hotel asset. Guest shall keep the Hotel room in a good
                condition and maintain hygiene and cleanliness.
              </li>
              <li>
                {" "}
                Extension of stay would be provided on current room rates,
                subject to availability. Current room rates can be different
                from the rates at which the rooms were booked.
              </li>
              <li>
                You agree that hotels may deny entry of visitors to rooms. You
                will be solely responsible for entry of any visitor to your
                room, You will be liable for any damage to hotel assets and use
                of the hotel must comply with all applicable local, state,
                national, and international laws, and that you will not use the
                hotel for any illegal purpose.
              </li>
              <li>
                We do not charge cancellation fees for bookings cancelled within
                10 minutes of creating the same booking. Any amount paid will be
                refunded. You can cancel your booking using our website or email
                .
              </li>
            </ol>
          </div>
          <div className={style.long_rap}>
            <div className={style.select_all}>
              <input type="checkbox" id="long_stay" onChange={()=>singleckeck(1)} checked={checkbox[1]}/>
              <label htmlFor="long_stay">
            <Image src={checkblack} alt="knjjd"/><Image src={checkfill} alt="knjjd"/>
          </label>
              <h1>Long Stay Bookings</h1><Image  onClick={()=>showConditionHandller(1)} style={showCondition[1]?{transform:"rotate(0deg)"}:{transform:"rotate(180deg)"}}src={downarrow} alt="ff" />
            </div>
            <div style={showCondition[1]?{display:"block"}:{display:"none"}} className={style.long_text}>
            
                For bookings of more than 7 nights, you have to settle all
                outstanding payments on a weekly basis. Further accommodation is
                subject to settlement of the outstanding amount.
            
            </div>
          </div>
          <div className={style.triple_rap}>
            <div className={style.select_all}>
              <input type="checkbox" id="triple"  onChange={()=>singleckeck(2)} checked={checkbox[2]} />
              <label htmlFor="triple">
            <Image src={checkblack} alt="knjjd"/><Image src={checkfill} alt="knjjd"/>
          </label>
              <h1>Triple Occupancy Policy</h1><Image onClick={()=>showConditionHandller(2)} style={showCondition[2]?{transform:"rotate(0deg)"}:{transform:"rotate(180deg)"}} src={downarrow} alt="ff" />
            </div>
            <div  style={showCondition[2]?{display:"block"}:{display:"none"}} className={style.triple_text}>
              Some Hotels allow triple occupancy by providing an extra mattress
              for the third person for extra fee. However no extra bed is
              usually provided.
            </div>
          </div>
          <div className={style.ganral_rap} >
            <div className={style.select_all}>
              <input type="checkbox" id="visitor" onChange={()=>singleckeck(3)} checked={checkbox[3]} />
              <label htmlFor="visitor">
            <Image src={checkblack} alt="knjjd"/><Image src={checkfill} alt="knjjd"/>
          </label>
              <h1>Visitors Policy</h1><Image onClick={()=>showConditionHandller(3)} style={showCondition[3]?{transform:"rotate(0deg)"}:{transform:"rotate(180deg)"}} src={downarrow} alt="ff" />
            </div>
            <div style={showCondition[3]?{display:"block"}:{display:"none"}} className={style.genral_policy}>
              <ol>
                <li>
                  Visitors are generally allowed to meet guests in the guest
                  rooms during the day, except if there is an
                </li>
                <li> Visitors are not to be allowed to stay overnight</li>
                <li>
                  The Hotel front desk requires all visitors to present a
                  government approved photo identity prior to accessing guest
                  floors/rooms.
                </li>
              </ol>
            </div>
          </div>
          <div className={style.triple_rap}>
            <div className={style.select_all}>
              <input type="checkbox" id="child" onChange={()=>singleckeck(4)} checked={checkbox[4]} />
              <label htmlFor="child">
            <Image src={checkblack} alt="knjjd"/><Image src={checkfill} alt="knjjd"/>
          </label>
              <h1>Child Policy</h1><Image onClick={()=>showConditionHandller(4)}  style={showCondition[4]?{transform:"rotate(0deg)"}:{transform:"rotate(180deg)"}} src={downarrow} alt="ff" />
            </div>
            <div style={showCondition[4]?{display:"block"}:{display:"none"}} className={style.triple_text}>
              Stay of 1 child up to 5 years of age is complementary without the
              use of an extra mattress. Breakfast charges may be applicable for
              the child.
            </div>
          </div>
        </div>
      
      </div>
      <div  className={style.btn_rap}><button>BACK</button><button >CONTINEU</button></div>
    
    </div>
  );
};

export default Policy;
