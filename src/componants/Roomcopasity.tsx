import React, { useState, useRef } from "react";
import style from "./rooms.module.css";
import Image from "next/image";
import plus from "./../../public/+.svg";
import minus from "./../../public/-.svg";
import homehotel from "./../../public/hotelhome.svg";
import dropdown from "./../../public/dropdoun.svg";
import deletelogo from "./../../public/deleteroom.png";
import { useForm } from "react-hook-form";
import joi, { any } from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import enterdetails from "@/pages/hotel/Enterdetails";
import { keys } from "@material-ui/core/styles/createBreakpoints";


const Roomcopasity = ({ room, roomsdata, setroomsdata ,pp}:any) => {
  var index = roomsdata.findIndex((obj:any)=>obj.room_type==room)
  console.log(pp);
  

  const Schema = joi.object({
    rooms: joi
      .string()
      .required()
      .pattern(/^(?:\d+(?:,\d{3})*(?:,?)?)?$/)
      .message("invalid input"),
    base_price: joi.number().max(1000000).message("null"),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: joiResolver(Schema) });
  const [geust, setgeust] = useState<number>(1);
  const [roomenter, setRoom_enter] = useState<any>([]);
  const [room_show, setroomshow] = useState(true);
  const [show_veiw, setshow_veiw] = useState(false);

  const roomavili = roomsdata[index]?.rooms.length;
  const onSubmit = (roomenterdata: any) => {
    var inde:any = roomsdata.findIndex((obj:any)=>obj.room_type==room)
    const roomavili = roomsdata[inde]?.rooms.length;

    const roompresent = roomsdata;
    console.log(roompresent);
    
    const index = roomsdata.findIndex( (obj: { room_type: string; }):any=> obj.room_type==room)
    console.log(index);

    const roomssep = roomenterdata.rooms.split(",");
    const updatedat = roompresent?.[index].rooms?.concat(roomssep)

    roompresent[index] = {room_type:room,rooms:updatedat,base_price:roomenterdata.base_price,no_guests:geust}
    setroomsdata([...roompresent])
    setRoom_enter([...updatedat])
    setValue("rooms", "");

  };
  const setgeustfunc = (num: number) => {
    if ((geust <= 1 && num == -1) || (geust >= 8 && num == +1)) {
      return;
    }
    const restult = geust + num;
    setgeust(restult);
  };
  const deleteroomdata=()=>{
    const index = roomsdata.findIndex((obj:any)=>obj.room_type==room)
    const  data = roomsdata
    data[index].rooms=[]
    setroomsdata([...data])
    console.log(roomsdata);
    

  }
  return (
    <div className={style.main}><p className={style.worm}>{(pp&&(roomavili>0?"":`*Please fill ${room} room numbers`))}</p>
      <form>
        <div
          style={
            room_show
              ? { borderRadius: "10px" }
              : { borderRadius: "10px 10px 0px 0px" }
          }
          className={style.intro}
        >
          <h1>{room} {roomavili>0?<> {("(0"+roomavili)+")"}</>:""} </h1>{" "}
          <Image
            onClick={() => setroomshow(!room_show)}
            style={
              room_show
                ? { transform: "rotate(180deg)" }
                : { transform: "rotate(0deg)" }
            }
            src={dropdown}
            alt="dd"
          />
        </div>
        <div
          className={style.roomadd}
          style={room_show ? { display: "none" } : { display: "block" }}
        >
          <div className={style.room_cont}>
            <div className={style.capasityadd}>
              <p>No. of Guests</p>
              <div>
                <button type="button" onClick={() => setgeustfunc(-1)}>
                  <Image src={minus} alt="dd" />
                </button>
                <h1>0{geust}</h1>{" "}
                <button type="button" onClick={() => setgeustfunc(+1)}>
                  <Image src={plus} alt="dd" />
                </button>
              </div>
            </div>
            <div className={style.priceaad}>
              <p>Base Price</p>
              <input
                type="number"
                placeholder="INR"
                {...register("base_price")}
              />
              {errors.base_price?.message && (
                <span
                  style={{
                    position: "absolute",
                    top: "68px",
                    fontSize: "13px",
                    color: "red",
                  }}
                >
                  *required
                </span>
              )}
            </div>
          </div>
          <div
            style={roomavili > 0 ? { display: "flex" } : { display: "none" }}
            className={style.room_no}
          >
            <div className={style.roomtext}>
              <h1>Rooms available</h1>
              <Image
                onClick={()=>deleteroomdata()}
                src={deletelogo}
                alt="dd"
              />
            </div>
            <div
              style={
                show_veiw
                  ? { height: "" }
                  : roomavili > 8
                  ? { height: "93px" }
                  : roomavili > 4
                  ? { height: "89px" }
                  : { height: "36px" }
              }
              className={style.room_no_show_cont}
            >
              {roomsdata[index]?.rooms?.length > 0 &&
                roomsdata[index]?.rooms?.map(
                  (
                    no: string | Iterable<React.ReactNode>,
                    index: React.Key
                  ) => (
                    <h2 key={index} className={style.room_number}>
                      {no}
                    </h2>
                  )
                )}
            </div>

            <button
              type="button"
              style={roomavili > 8 ? { display: "block" } : { display: "none" }}
              onClick={() => setshow_veiw(!show_veiw)}
            >
              {show_veiw ? <>View Less</> : <>View All</>}
            </button>
          </div>
          <div className={style.availivalroomcont}>
            <h1>Enter room no. separated by comma</h1>
            <div className={style.inputroom_cont}>
              <Image src={homehotel} alt="hhkd" />
              <input
                type="text"
                placeholder="104, 105, 106, 107"
                {...register("rooms")}
              />
            </div>
            {errors?.rooms && (
              <span
                style={{
                  position: "absolute",
                  fontSize: "13px",
                  color: "red",
                  top: "106px",
                  left: "29px",
                }}
              >
                {errors.rooms?.message.toString()}
              </span>
            )}
            <button onClick={handleSubmit(onSubmit)}>SAVE</button>
          </div>
        </div>
      </form>
      
    </div>
  );
};

export default Roomcopasity;
