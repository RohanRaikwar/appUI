

import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./../styles/uploadimage.module.css";
import Logo from "./../../../public/Frame 2655 1.png";
import Statusbar from "../materialUI/Statusbar";
import upload_image from "./../../../public/hotelpub/fileupload1.png";
import Delete from "./../../public/deleteroom.svg";

import Box from "@mui/material/Box";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";





const Photoo = ({removeItemOnce,index,photo,photoTypeHandller}:any) => {
  const rooms: string[] = ["deluxe", "hannymoon", "excutive"];
  const [age, setAge] = React.useState('');
  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  return (
  
     <> {photo&& <div key={index} className={style.single_image_cont}>
              <Image style={age==""?{opacity:"0.4"}:{opacity:"1"}} src={photo} width={327} height={150} alt={"dd"} />
              <div className={style.drop_sec}>
              <Box sx={{ minWidth: 100 }}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                      <Select
                        value={age}
                        onChange={(e)=>{photoTypeHandller(photo,e.target.value);setAge(e.target.value)}}
                        displayEmpty
                        inputProps={{ "aria-label": "Without label" }}
                      >
                        <MenuItem value="">Choose Image Type</MenuItem>
                        {rooms.map((room: string , index: number ) => (
                          <MenuItem key={index} value={room}>{room}</MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Box>
                <button style={{border:"none", background:"none"}} onClick={() => removeItemOnce(index)} value={index}>
                  <Image src={Delete} alt="d" />
                </button>
              </div>
            </div>
            }
        </>
        
    
  )
}

export default Photoo