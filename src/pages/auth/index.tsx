import React ,{useState} from 'react'

import Image from 'next/image'
import Imageslider from '../../materialUI/Image.slicder'
import styles from "../../styles/auth.module.css"
import logo from '../../../public/smalllogo.svg'
import { ClassNames } from '@emotion/react'
import Login from '../../componants/login'
import Sigup from '../../componants/signup.module'
import Otp from '../../componants/Otp'

const index = () => {
  const [css,setcss] = useState(false)
  const [auth,seauth] = useState<any>()
  const [otpup,setotpup]=useState<any>(false);
  const setauth =():any => {setcss(!css)
    console.log("click");
    
  }
 
  return (
    <section className={styles.main}>
        <div className={styles.logosec}>
            <Image  className={styles.logo} src={logo} alt='logo' />
           

        </div>
        <main  className={styles.sliderbox}>
             <div  ><Imageslider /></div>
             <div className={styles.btn_cont}>
              <button onClick={()=> {seauth(true); setcss(true)}} className={styles.btn1}>SIGN UP</button>
              <button onClick={()=>{seauth(false);setcss(true)}} className={styles.btn2}>LOG IN</button>
             </div>
            
        </main>
        <div style={css?{top:"0px"}:{top:"56rem"}} className={styles.auth_cont_doun}>
          {
            auth? <Sigup  setotpup={setotpup} setauth={setauth} />:<Login setotpup={setotpup} otpup={otpup}  setauth ={setauth}/>
               
          }

        </div>
       

    </section>
  )
}

export default index