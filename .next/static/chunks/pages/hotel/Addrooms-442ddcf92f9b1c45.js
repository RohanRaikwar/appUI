(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[605],{8691:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hotel/Addrooms",function(){return o(5625)}])},1317:function(e,t){"use strict";t.Z={src:"/_next/static/media/Frame 2655 1.4fbe3294.png",height:36,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvUlEQVR42j2POwrCUBBFxw+KYGPhB8FSKyvBXehWRISIicSXoEk2IdgG3YKpRBdgY1ZgYWFh/XLHeQRy4DJw58NcMpRdVGoKUcdDSi7Sno+IFqhQwQ4XEdMGXPWl2uCmEs9QUph3PTEt6FOC7PpENgygGwrc8jCn0R622Yjv0J8fmBn8SKFpCZ4G0hsfMDMDxwT69kL2/iJzY2iywJNQeoa6wpm2+Q+0FjnmvHgFDsptD2FXUgxEfZNilaf4A4gEd9KUbF29AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},6900:function(e,t,o){"use strict";o.d(t,{Z:function(){return r}});var n=o(5893);o(7294);var a=o(6789),s=o.n(a);function r(){return(0,n.jsx)("div",{className:s().maincont,children:(0,n.jsx)("div",{className:s().loaderbox,children:(0,n.jsx)("span",{className:s().loader})})})}},8797:function(e,t,o){"use strict";var n=o(5893),a=o(7294),s=o(8441),r=o(5333),c=o(902),d=o.n(c);t.Z=e=>{let{updatevalue:t,prieveasevalue:o}=e,[c,i]=a.useState(o);return a.useEffect(()=>{let e=setInterval(()=>{console.log("jjj"),i(o=>(o===Math.max(c,t)&&clearInterval(e),Math.min(o+10*Math.random(),t)))},500)},[t]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:d().bar,children:[(0,n.jsx)(r.Z,{sx:{width:"100%"},children:(0,n.jsx)(s.Z,{variant:"determinate",value:c})}),(0,n.jsxs)("div",{className:d().dot_rap,children:[(0,n.jsx)("div",{style:c>=12?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:c>=25?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:c>=38?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:c>=49?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:c>=62?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:c>=74?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:c>=87?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:c>=100?{background:" #1FB906"}:{background:"#7B8794"}})]})]})})}},5625:function(e,t,o){"use strict";o.r(t);var n=o(5893),a=o(7294),s=o(5675),r=o.n(s),c=o(1317),d=o(8797),i=o(4265),l=o.n(i),u=o(6900),_=o(6154),h=o(3512),p=o(1649),x=o(1163);t.default=()=>{let[e,t]=(0,a.useState)(!0);(0,p.v9)(e=>e.counter.value);let o=(0,p.I0)(),s=a.useRef(),[i,m]=a.useState(["Excutive"]),[v,g]=a.useState([]),j=(0,x.useRouter)();function b(e){let t=i.indexOf(e);t>-1?(i.splice(t,1),m([...i])):(i.push(e),m([...i]))}return a.useEffect(()=>{g(["Deluxe","Hannymoon"])},[]),(0,n.jsxs)("div",{className:l().main,children:[(0,n.jsx)("div",{style:e?{display:"none"}:{display:"block"},children:(0,n.jsx)(u.Z,{})}),(0,n.jsxs)("div",{className:l().into_cont,children:[(0,n.jsx)("h1",{children:"Select Accomodation"}),(0,n.jsx)(r(),{src:c.Z,alt:"d"})]}),(0,n.jsx)("div",{className:l().statusbar,children:(0,n.jsx)(d.Z,{updatevalue:38,prieveasevalue:25})}),(0,n.jsx)("div",{className:l().room_cont,children:(0,n.jsxs)("div",{className:l().rap_cont,children:[(0,n.jsx)("input",{type:"text",ref:s,placeholder:"Add new room type"}),(0,n.jsx)("button",{onClick:function(){g([...v,s.current.value]),s.current.value=""},children:"ADD"})]})}),(0,n.jsx)("h2",{children:"Tap to select Room types"}),(0,n.jsxs)("div",{className:l().roomtypes,children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"checkbox",id:"excutive",name:"excutive",defaultChecked:!0,value:"excutive",onChange:()=>b("Excutive")}),(0,n.jsx)("label",{htmlFor:"excutive",children:"Excutive"})]}),v.map((e,t)=>(0,n.jsxs)("div",{children:[(0,n.jsx)("input",{type:"checkbox",onChange:()=>b(e),id:t,name:e,value:e}),(0,n.jsx)("label",{htmlFor:e,children:e})]},t)),i.length<1&&(0,n.jsx)("p",{style:{top:"-37px",color:"red",position:"absolute",fontSize:"13px"},children:" *Choose least one type of room"})]}),(0,n.jsxs)("div",{className:l().btn_rap,children:[(0,n.jsx)("button",{children:"BACK"}),(0,n.jsx)("button",{onClick:function(){if(i.length<1){console.log("cha");return}t(!1),o((0,h.ds)(i)),_.Z.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/roomtypes",{data:i},{headers:{authorization:localStorage.getItem("SavedToken")}}).then(e=>{console.log(e),t(!0),"room types uploaded"==e.data.completedstage&&j.push("http://localhost:3000/hotel/capasity")})},children:"CONTINEU"})]})]})}},6789:function(e){e.exports={maincont:"Loader_maincont__9WcsN",loaderbox:"Loader_loaderbox__t7Cqw",loader:"Loader_loader__i4tH_",spin:"Loader_spin__u_YMA",rotate:"Loader_rotate__sBjDN",rotateccw:"Loader_rotateccw__Zt7Uq"}},4265:function(e){e.exports={main:"addrooms_main__ywAfg",into_cont:"addrooms_into_cont__9KSwC",statusbar:"addrooms_statusbar__pT_6R",btn_rap:"addrooms_btn_rap__f0bFT",room_cont:"addrooms_room_cont__8bGXi",rap_cont:"addrooms_rap_cont__AKlek",roomtypes:"addrooms_roomtypes__3EqsO"}},902:function(e){e.exports={main:"enterdetails_main__RFu_x",logo_cont:"enterdetails_logo_cont__0g70Q",upload_cont:"enterdetails_upload_cont__htOK3",dot_rap:"enterdetails_dot_rap__156R6",bar:"enterdetails_bar__ycp_H"}},1163:function(e,t,o){e.exports=o(6885)}},function(e){e.O(0,[675,964,154,774,888,179],function(){return e(e.s=8691)}),_N_E=e.O()}]);