import React,{useState,useRef} from 'react'
import style from './rooms.module.css'
import Image from 'next/image'
import plus from './../../public/+.svg'
import minus from './../../public/-.svg'
import homehotel from './../../public/hotelhome.svg'
import dropdown from  './../../public/dropdoun.svg'
import deletelogo  from  "./../../public/deleteroom.png"

interface  sohan{
    room:string
}
const roomcopasity = ({room}:sohan) => {
    const [geust,setgeust] = useState<number>(1)
    const [roomenter,setRoom_enter] = useState<string[]|any>([])
    const [room_show,setroomshow] =useState(true)
    const [show_veiw,setshow_veiw]=useState(false)
    const rooms =[112,113,123]
    const roomdata = useRef<HTMLInputElement>(null)
    const roomavili = roomenter?.length
    const addroom =()=>{
        const roompresent = roomenter

        const roomssep = roomdata.current?.value.split(",")
        setRoom_enter(roompresent?.concat(roomssep))
        roomdata.current?.value

        
    }
    const setgeustfunc=(num:number)=>{
        if(geust<=1&&num==-1||geust>=8&&num==+1){
            return
          
        }
        const restult = geust + num;
        setgeust(restult)

    }
    
  return (
    <div  className={style.main}>
        <div style={room_show?{borderRadius:"10px"}:{borderRadius:"10px 10px 0px 0px"}} className={style.intro}>
           <h1>{room} </h1>  <Image  onClick={()=>setroomshow(!room_show)} style={room_show?{transform:"rotate(180deg)"}:{transform:"rotate(0deg)"}} src={dropdown} alt='dd'/>
        </div>
        <div className={style.roomadd} style={room_show?{display:"none"}:{display:"block"}}>
            <div className={style.room_cont}>
                <div className={style.capasityadd}>
                    <p>No. of Guests</p>
                    <div><button onClick={()=>setgeustfunc(-1)}><Image src={minus} alt="dd"/></button><h1>0{geust}</h1> <button onClick={()=>setgeustfunc(+1)}><Image src={plus} alt='dd'/></button></div>
                    
                </div>
                <div className={style.priceaad}>
                    <p>Base Price</p>
                    <input type='number' placeholder='INR'/>

                </div>
                
            </div>
            <div style={roomavili>0?{display:"flex"}:{display:"none"}} className={style.room_no}>
                    <div className={style.roomtext}>
                        <h1>Rooms available</h1><Image onClick={()=>setRoom_enter([])} src={deletelogo} alt='dd'/>
                    </div>
                    <div style={show_veiw?{height:""}: roomavili>8?{height:"93px"}:{height:"36px"}} className={style.room_no_show_cont}>
                        {roomenter?.map((no: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined,index: React.Key | null | undefined)=>(<h2 key={index} className={style.room_number}>{no}</h2>))}

                    </div>
                    
                       
                    
                    <button style={roomavili>8?{display:"block"}:{display:"none"}} onClick={()=>(setshow_veiw(!show_veiw))}>{show_veiw?<>View Less</>:<>View All</>}</button>
                    
                    
            </div>
            <div className={style.availivalroomcont}>
                <h1>Enter room no. separated by comma</h1>
                <div className={style.inputroom_cont}>
                    <Image src={homehotel} alt='hhkd' />
                    <input  ref={roomdata} type='text' placeholder='104, 105, 106, 107' />

                </div>
                <button onClick={addroom}>SAVE</button>
                
                

            </div>
            

        </div>
    
    </div>
  )
}

export default roomcopasity