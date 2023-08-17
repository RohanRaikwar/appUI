import React from 'react'
import Image from 'next/image'
import style from './../../styles/capasity.module.css'
import Logo from './../../../public/Frame 2655 1.png'
import Statusbar from '@/materialUI/Statusbar'
import Room from '../../componants/Roomcopasity'
import { useDispatch, useSelector } from "react-redux";
import joi, { object, valid } from 'joi'
import { useRouter } from 'next/router'
import { UseSelector} from 'react-redux/es/hooks/useSelector'

import axios from 'axios'







const Capasity = () => { 
    const [roomsdata,setroomsdata] = React.useState<any>([])
    const count = useSelector((state: any) => state.counter.value);
    const [l,setl] =React.useState<boolean>(false)
    const n :number= count.length
    const Schema =joi.string()
    const router = useRouter()
    console.log(count);
    
    // if(count<=0){
    //   router.push("http://localhost:3000/hotel/addrooms")
    //   console.log("go bakh");
      

    // }
  
    
    React.useEffect(()=>{
        var clone =count
       
        let pushedData:any=[]
        clone.forEach((room: any) => {

              pushedData=([ ...pushedData,{ room_type: room ,rooms:[],base_price:"",nu_guests:""}])

        });
        setroomsdata(pushedData)
        console.log(roomsdata);
        

    },[])
 
  const statushandler =()=>{
    setl(true)
    const sta = roomsdata.every((obj:any)=>obj.rooms.length>0)
    if(sta){
      axios.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/room/availibility",{
        data:roomsdata
      },{
        headers:{ 
           authorization:localStorage.getItem("SavedToken")
          
          
        }
      }).then((res)=>{
        router.push('http://localhost:3000/hotel/services')
      }
      )
      .catch((err)=>console.log(err)
      )
      
    }
    else{
      console.log("mat karo");
      
    }
    
  

  }
    
    console.log(roomsdata);
  
    
 


  return (
    <div className={style.main}>
        <div className={style.into_cont}>
            <h1>Add Capacity</h1> <Image src={Logo} alt='dd'/>
        </div>
        <div><Statusbar updatevalue={50} prieveasevalue={38}/></div>
        <div className={style.room_cont}>
            {
                count?.map((a: string,index:any)=>(<Room  key={index}  roomsdata={roomsdata} setroomsdata={setroomsdata} pp={l} room={a}/>))
            }
            


        </div>
        <div className={style.btn_cont}>
            <button className={style.back_btn}  >Back</button> <button onClick={statushandler} className={style.cont}>Continue</button>

        </div>
    </div>
  )
}

export default Capasity

 
