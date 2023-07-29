import React from 'react'
import style from './../../styles/services.module.css'
import Statusbar from '@/materialUI/statusbar'
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

const services = () => {

  return (
    <div className={style.main}>
       <div className={style.into_cont}>
            <h1>Add on Services</h1> <Image src={Logo} alt='dd'/>
        </div>
        <div><Statusbar/></div>
        <div className={style.service_main}>
            <h1>Tap to select chargeable add-on services</h1>
            <div className={style.service_cont}>
                <input id='kitchen' name='kitchen' type='checkbox' />
                <label htmlFor='kitchen' ><Image src={kitchen} alt='serverces'/><h1>Kitchen</h1></label>
                <input id='house' name='housekiping'  checked ={true} type='checkbox' />
                <label htmlFor='house' ><Image src={housekiping} alt='serverces'/><h1>Housekeeping</h1></label>
                <input id='lundary' name='lundary' type='checkbox' />
                <label htmlFor='lundary' ><Image src={lundary} alt='serverces'/><h1>Laundry</h1></label>
                <input id='spa' name='spa' checked={true} type='checkbox' />
                <label htmlFor='spa' ><Image src={spa} alt='serverces'/><h1>Spa</h1></label>
                <input id='gym' name='gym' type='checkbox' />
                <label htmlFor='gym' ><Image src={gym} alt='serverces'/><h1>Gym</h1></label>
                <input id='bankuit' name='bankuit' type='checkbox' />
                <label htmlFor='bankuit' ><Image src={bankiut} alt='serverces'/><h1>Banquet</h1></label>
                <input id='salon' name='salon' type='checkbox' />
                <label htmlFor='salon' ><Image src={salon} alt='serverces'/><h1>Salon</h1></label>
                <input id='pool' name='pool' type='checkbox' />
                <label htmlFor='pool' ><Image src={pool} style={{stroke:"green"}}  alt='serverces'/><h1>Swimming pool</h1></label>

                

            </div>
           
        </div>
    </div>
  )
}

export default services