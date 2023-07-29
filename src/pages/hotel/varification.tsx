import React,{useState} from 'react'
import styles from '../../styles/varification.module.css'
import Image from 'next/image'
import logo from '../../../public/Frame 2655 1.png'
import Processbar from '../../materialUI/statusbar'
import upload1 from '../../../public/hotelpub/fileupload1.png'
import Circularloader from '@/materialUI/circularloader'
import { File } from 'buffer'
import axios  from 'axios'
import type { RootState } from '../../redux/store'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './../../redux/cardSlice'
import camera from '../../../public/cemara 2.svg'
import cross from './../../../public/Group.png'
import gallery from  './../../../public/gallery.svg'
const varification = () => {

  
  const [pancard64,setpancard64]= useState<string>("")
  const [bank64,setbank64] = useState<any>("")
  const [gst64,setgst64] =useState<any>("")
  const [loadershow,setloadershow] =useState(true)
  const [uptypedoc_const,setuptypedoc_const] = useState(false)
  const [doctype,setdoctype] =useState("")
  const [docbase64,setdoc64] = useState("")

  function convertImagepan(e:any) {
    
    const file = e.target.files[0];

    if (!file) {
      alert('Please select an image file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = function(e:any) {
      const base64String = e.target.result;
       
      setpancard64(base64String);
      
      
      // Do something with the Base64 string, like sending it to the server, etc.
    };

    reader.onerror = function(error) {
      console.error('Error converting image:', error);
    };

    reader.readAsDataURL(file);
  }
  function convertImagebank(e:any) {
    
    const file = e.target.files[0];

    if (!file) {
      alert('Please select an image file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = function(e:any) {
      const base64String = e.target.result;
       
      setbank64(base64String);
      
      
      // Do something with the Base64 string, like sending it to the server, etc.
    };

    reader.onerror = function(error) {
      console.error('Error converting image:', error);
    };

    reader.readAsDataURL(file);
  }
  function convertImagegst(e:any) {
    
    const file = e.target.files[0];

    if (!file) {
      alert('Please select an image file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = function(e:any) {
      const base64String = e.target.result;
       
      setgst64(base64String);
      
      
      // Do something with the Base64 string, like sending it to the server, etc.
    };

    reader.onerror = function(error) {
      console.error('Error converting image:', error);
    };

    reader.readAsDataURL(file);
  }
  function convertImagevary(e:any) {
    
    const file = e.target.files[0];

    if (!file) {
      alert('Please select an image file.');
      return;
    }

    const reader = new FileReader();

    reader.onload = function(e:any) {
      const base64String = e.target.result;
       
      setdoc64(base64String);
      
      
      // Do something with the Base64 string, like sending it to the server, etc.
    };

    reader.onerror = function(error) {
      console.error('Error converting image:', error);
    };

    reader.readAsDataURL(file);
  }

  const requesthandller =()=>{
    setloadershow(false)
    axios.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/varification/docs/upload",{
      pancard:pancard64,
      GSTcertificate:gst64,
      bankaccount:bank64
    },{
      headers:{
        authorization:localStorage.getItem("SavedToken")
      }
    }).then((res)=>{
      setloadershow(false);
      
    }).catch((err)=>{
      setloadershow(true);
      setuptypedoc_const(true)

      console.log(err);
      
    })
   
    

  }
  const doctypefunc =(e:any)=>{
    setdoctype(e.target.value)
    console.log(doctype);
    
  }
 
  return (
    <><div style={loadershow?{display:"none"}:{display:"block"}}><Circularloader  /></div>
    <div className={styles.main}>
       
        <div className={styles.logo}>
            <h1>Documents Verification</h1><Image src={logo} alt='dd'/>
        </div>
        <Processbar/>
        <div className={styles.docs}>
          <h1>Submit documents for verification</h1>
          <div className={styles.doc_rap}>
            <div className={styles.pan_rap}><h2>Pan Card</h2>  <label htmlFor="pan"><Image src={upload1} alt='ss'/><h3>UPLOAD</h3><input style={{visibility:"hidden"}} type='file' id='pan' onChange={convertImagepan} accept='.png,.jpg,.pfg' /></label>
            </div>
          </div>
          <div className={styles.doc_rap}>
            <div className={styles.pan_rap}><h2>Bank Passbook</h2>  <label htmlFor="bank"><Image src={upload1} alt='ss'/><h3>UPLOAD</h3></label><input style={{display:"none"}} type='file'  onChange={convertImagebank} id='bank' accept='.png,.jpg,.pfg' />
            </div>
          </div>
          <div className={styles.doc_rap}>
            <div className={styles.pan_rap}><h2>GST certificate</h2>  <label htmlFor="gst"><Image src={upload1} alt='ss'/><h3>UPLOAD</h3></label><input  type='file' id="gst" style={{display:"none"}} onChange={convertImagegst
            } accept='.png,.jpg,.pfg' />
            </div>
          </div>
         

        </div>

        <h4>Only pdf, jpeg, png documents allowed. (Max 1 MB)</h4>
        <div className={styles.btn_rap}><button>BACK</button><button onClick={requesthandller}>CONTINEU</button></div>
        <div  style={uptypedoc_const?{top:"325px"}:{top:'812px'}} className={styles.typecont}>
          <div className={styles.name_cont}>
            <h1>Select & Upload</h1><Image src={cross} alt='dd' onClick={()=>setuptypedoc_const(false)} style={{width:"21px",height:"21px"}} />
          </div>
          <div className={styles.formcont}>
            <p>Choose your document</p>
            <div className={styles.checkboxcont}>
              <div><input type="radio" id="html" name="fav_language"  onClick={doctypefunc} value="Cancelled Cheque"/><div className={styles.costumcheckbox}></div>
            <label htmlFor="html">Cancelled Cheque</label><br/></div>
            <div><input type="radio" id="css" name="fav_language" onClick={doctypefunc} value="Passbook"/><div className={styles.costumcheckbox}></div>
            <label htmlFor="css">Passbook</label></div>
            
            <div> <input type="radio" id="javascript" name="fav_language"  onClick={doctypefunc} value="Bank Account Statement"/><div className={styles.costumcheckbox}></div>
            <label htmlFor="javascript">Bank Account Statement</label></div>
           
            </div>
            <div className={styles.btn_cont}>
            
           
            <button className={styles.back_btn} ><Image src={camera} alt='dd'/> Cemara</button> <label htmlFor="pan"><Image src={gallery} alt='ss'/>GALLERY<input style={{visibility:"hidden"}} type='file' id='pan' onChange={convertImagevary} accept='.png,.jpg,.pfg' /></label>

        </div>
          </div>

        </div>


    </div>
   
    </>
    

  )
}

export default varification

function setpan(result: string | ArrayBuffer | null) {
  throw new Error('Function not implemented.')
}
