import React from 'react'
import Image from 'next/dist/client/image'
import style from './../../styles/capasity.module.css'
import Logo from './../../../public/Frame 2655 1.png'
import Statusbar from '@/materialUI/statusbar'
import Room from './../../componants/roomcopasity'
import index from '../auth'


const capasity = () => {
let sohan = ["excutive","delux","hannymon","other_rooms"]
  return (
    <div className={style.main}>
        <div className={style.into_cont}>
            <h1>Add Capacity</h1> <Image src={Logo} alt='dd'/>
        </div>
        <div><Statusbar/></div>
        <div className={style.room_cont}>
            {
                sohan?.map((a,index)=>(<Room  key={index} room={a}/>))
            }


        </div>
        <div className={style.btn_cont}>
            <button className={style.back_btn} >Back</button> <button className={style.cont}>Continue</button>

        </div>
    </div>
  )
}

export default capasity