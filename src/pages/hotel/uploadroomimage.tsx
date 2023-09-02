import React, { useState, useEffect } from "react";
import Image from "next/image";
import style from "./../../styles/uploadimage.module.css";
import Logo from "./../../../public/Frame 2655 1.png";
import Statusbar from "../../materialUI/Statusbar";
import upload_image from "./../../../public/hotelpub/fileupload1.png";
import Circularloader from "@/materialUI/Circularloader";

import Photoos from '../../componants/photoo'
import axios from "axios";
import { useRouter } from "next/router";


const Uploadroomimage = () => {
  const router = useRouter()
  const [loadershow, setloadershow] = useState(true);
  const rooms: string[] = ["deluxe", "hannymoon", "excutive"];
  const [photos, setPhotos] = useState<{name:string,path:string}[]>([]);
  const [age, setAge] = React.useState('');

  console.log("photo", photos.length);
 

  function removeItemOnce(index: number) {
    console.log(index);
    let clone_photos = photos;
    console.log("55555=>", clone_photos);
    const del_photo: any = clone_photos.splice(index, 1);
    console.log(clone_photos, del_photo); 
    setPhotos([...clone_photos]);
  }

  // React.useEffect(() => {
  //   setPhotos([
  //     "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
  //     "https://thenewsgod.com/wp-content/uploads/2021/04/13131611.jpg",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBPk6osE5xYjJHAvFShXmUCZ4vvyS9m_sZ_8ujaML3wcde9ERSh8z6UYmwf0nM_nxBn4&usqp=CAU",
  //     "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
  //     "https://thenewsgod.com/wp-content/uploads/2021/04/13131611.jpg",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBPk6osE5xYjJHAvFShXmUCZ4vvyS9m_sZ_8ujaML3wcde9ERSh8z6UYmwf0nM_nxBn4&usqp=CAU",
  //     "https://www.usatoday.com/gcdn/-mm-/05b227ad5b8ad4e9dcb53af4f31d7fbdb7fa901b/c=0-64-2119-1259/local/-/media/USATODAY/USATODAY/2014/08/13/1407953244000-177513283.jpg?width=660&height=373&fit=crop&format=pjpg&auto=webp",
  //     "https://thenewsgod.com/wp-content/uploads/2021/04/13131611.jpg",
  //     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWBPk6osE5xYjJHAvFShXmUCZ4vvyS9m_sZ_8ujaML3wcde9ERSh8z6UYmwf0nM_nxBn4&usqp=CAU",
  //   ]);
  // }, []);

  const photosHandeller =(e:any)=>{
     const file = e.target.files[0]
     console.log(file);
     const formdata = new FormData
     formdata.append("file",file)
     axios.post("https://revivohotelmanagment-app.onrender.com/logoupload",
     formdata).then((res)=>{console.log(res) ; setPhotos([...photos,{name:"",path:res.data}])}
     ).catch(err=>console.log(err)
     )

  
  }
  const photoTypeHandller =(path:string,name:string)=>{
    const clonePhotos = photos
    const indexOfPhoto = clonePhotos.findIndex((obj)=>obj.path==path)
    clonePhotos[indexOfPhoto].name=name;
    setPhotos([...clonePhotos])
    console.log(photos);
    
    


  }
  const requistHandller =()=>{
    setloadershow(false)
    axios.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/room/upload",{
      photos:photos

    },
    {
      headers:{
        authorization:localStorage.getItem("SavedToken")
      }
    }).then(res=>{router.push("http://localhost:3000/hotel/policy")
              setloadershow(true)}
    ).catch(err=>setloadershow(true)
    )

  }


  return (
    <div className={style.main}>
        <div style={loadershow ? { display: "none" } : { display: "block" }}>
        <Circularloader />
      </div>
      <div className={style.into_cont}>
        <h1>Add Images</h1> <Image src={Logo} alt="dd" />
      </div>
      <div>
        <Statusbar  updatevalue={87} prieveasevalue={74}/>
      </div>
      <div className={style.img_cont}>
        <div className={style.roomtext}>
          <h1>Upload images and choose image type</h1>
          <div className={style.upload_btn}>
            <label htmlFor="image_btn">
              <Image src={upload_image} alt="d" />
              <h2>UPLOAD</h2>
            </label>
            <input id="image_btn" type="file" onChange={photosHandeller} accept=".png,.jpg" />
          </div>
        </div>
        {photos.length > 0 &&
          photos.map((photo, index) => (
            <Photoos removeItemOnce={removeItemOnce } key={index} photo={photo.path} photoTypeHandller={photoTypeHandller}/>
           
          ))}

       
      </div>
      <div  className={photos.length<=2?style.btn_rap:style.btn_rap_scroll}><button>BACK</button><button  onClick={requistHandller}>CONTINEU</button></div>
    </div>
  );
};

export default Uploadroomimage;
