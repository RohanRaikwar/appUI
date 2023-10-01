import React from 'react'
import style from './../../styles/services.module.css'
import Statusbar from '@/materialUI/Statusbar'
import Logo from './../../../public/Frame 2655 1.png'
import Image from 'next/image'
import kitchen from './../../../public/kitchen.svg'
import spa from './../../../public/Vector (3).svg'
import bankiut from './../../../public/bankuit.png'
import gym from './../../../public/gym.svg'
import housekiping from './../../../public/Vector (4).svg'
import salon from './../../../public/salon.svg'
import pool from './../../../public/pool.png'
import lundary from './../../../public/lundary.png'
import kit from './../../../public/spa.svg'
import axios from 'axios'
import { useRouter } from 'next/router'
import { basePath } from '@/conttand'

const Services = () => {
  const [service,setservice] = React.useState<any>(["Housekeeping","Spa"])
  const [errshow ,seterrshoww]=React.useState(false)
  const router =useRouter()
  const addservices=(e:any)=>{
    
    const find = service.find((str:string)=>e.target.name==str)
    if(find){
      const filterservi = service.filter((str:string)=>str!=e.target.name)
      setservice([...filterservi])
    }
    else{
      setservice([...service,e.target.name])

    }   

  }
  const requesthandler =()=>{
    if(service.length<=0){
      seterrshoww(true)

      return
    }
    else{
      axios.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/room/service",{
        chargeble_service:service
      },{
        headers:{authorization:localStorage.getItem("SavedToken")}
      }).then((res)=>{
        console.log(res);
        router.push(`${basePath}/hotel/amenities`)
        
      }).catch((err)=>console.log(err)
      )
    }
  }


  return (
    <div className={style.main}>
       <div className={style.into_cont}>
            <h1>Add on Services</h1> <Image src={Logo} alt='dd'/>
        </div>
        <div><Statusbar prieveasevalue={49} updatevalue={62}/></div>
        <div className={style.service_main}>
            <h1>Tap to select chargeable add-on services</h1>
            <div className={style.service_cont}>
                <input id='Kitchen' name='Kitchen' onChange={addservices} type='checkbox' />
                <label htmlFor='Kitchen' ><Image src={kitchen} alt='serverces'/><h1>Kitchen</h1></label>
                <input id='Housekeeping'onChange={addservices} name='Housekeeping'  defaultChecked type='checkbox' />
                <label htmlFor='Housekeeping' ><Image src={housekiping} alt='serverces'/><h1>Housekeeping</h1></label>
                <input id='lundary'onChange={addservices} name='Laundry' type='checkbox' />
                <label htmlFor='lundary' ><Image src={lundary} alt='serverces'/><h1>Laundry</h1></label>
                <input id='spa' onChange={addservices} name='Spa' defaultChecked type='checkbox' />
                <label htmlFor='spa' ><Image src={spa} alt='serverces'/><h1>Spa</h1></label>
                <input id='gym'onChange={addservices} name='Gym' type='checkbox' />
                <label htmlFor='gym' ><Image src={gym} alt='serverces'/><h1>Gym</h1></label>
                <input id='bankuit'onChange={addservices} name='Banquet' type='checkbox' />
                <label htmlFor='bankuit' ><Image src={bankiut} alt='serverces'/><h1>Banquet</h1></label>
                <input id='Salon'onChange={addservices} name='Salon' type='checkbox' />
                <label htmlFor='Salon' ><Image src={salon} alt='serverces'/><h1>Salon</h1></label>
                <input id='pool'onChange={addservices} name='Swimming pool' type='checkbox' />
                <label htmlFor='pool' ><Image src={pool} style={{stroke:"green"}}  alt='serverces'/><h1>Swimming pool</h1></label>

                

            </div>
            {((service.length<=0)&&(errshow))&&(<h1 style={{color:"red",fontSize:"13px",marginLeft:"7px"}}>*Please Choose lest One Chargeable Service</h1>)}
           
        </div>
        <div className={style.btn_cont}>
            <button className={style.back_btn}  >Back</button> <button onClick={requesthandler} className={style.cont}>Contineu</button>

        </div>
    </div>
  )
}

export default Services