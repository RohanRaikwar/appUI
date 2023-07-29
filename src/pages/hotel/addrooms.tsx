import React from 'react'
import Image from 'next/image'
import Logo from './../../../public/Frame 2655 1.png'
import Statusbar from '@/materialUI/statusbar'
import style from './../../styles/addrooms.module.css'

const addrooms = () => {
  return (
    <div className={style.main}>
        <div className={style.into_cont}>
            <h1>Select Accomodation</h1><Image src={Logo} alt='d'/>
        </div>
        <div className={style.statusbar}><Statusbar/></div>
        <div className={style.room_cont}><div className={style.rap_cont}><input type="text" placeholder='Add new room type' /><button>ADD</button></div></div>
        <h2>Tap to select Room types</h2>
        <div className={style.roomtypes}>
        <input type='radio' id='excutive' name="hotelrooms" checked={true}   value="excutive"/>  <label htmlFor="excutive">Excutive</label>
        <input type='radio' id='delux' name="hotelroos"  value="excutive"/>   <label htmlFor="delux">Delux</label>
        <input type='radio' id='hannymon' name="hoterooms" value="excutive"/>   <label htmlFor="hannymon">Honeymoon Suite</label>
        </div>
        <div className={style.btn_rap}><button>BACK</button><button >CONTINEU</button></div>

    </div>
  )
}

export default addrooms