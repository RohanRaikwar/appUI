(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[481],{5839:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/hotel/Uploadroomimage",function(){return t(5131)}])},1317:function(e,a){"use strict";a.Z={src:"/_next/static/media/Frame 2655 1.4fbe3294.png",height:36,width:40,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAvUlEQVR42j2POwrCUBBFxw+KYGPhB8FSKyvBXehWRISIicSXoEk2IdgG3YKpRBdgY1ZgYWFh/XLHeQRy4DJw58NcMpRdVGoKUcdDSi7Sno+IFqhQwQ4XEdMGXPWl2uCmEs9QUph3PTEt6FOC7PpENgygGwrc8jCn0R622Yjv0J8fmBn8SKFpCZ4G0hsfMDMDxwT69kL2/iJzY2iywJNQeoa6wpm2+Q+0FjnmvHgFDsptD2FXUgxEfZNilaf4A4gEd9KUbF29AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:7}},539:function(e,a){"use strict";a.Z={src:"/_next/static/media/fileupload1.978e79f4.png",height:492,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAANlBMVEX///7+/v79/f77/P76+/719/7x9P7Z4v7Y4f7X4P7T3v7T3f64yv61yP6twv6rwf6qwf6qwP4VvUaGAAAANElEQVR42j3ExQ0AMBDEQG+Yof9mo/vEsgYQNhK1mnLcgxNAyaYivRGFXyGlsDyMPece/B4cyAD2hweV1QAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},8797:function(e,a,t){"use strict";var n=t(5893),o=t(7294),l=t(8441),s=t(5333),i=t(902),d=t.n(i);a.Z=e=>{let{updatevalue:a,prieveasevalue:t}=e,[i,r]=o.useState(t);return o.useEffect(()=>{let e=setInterval(()=>{console.log("jjj"),r(t=>(t===Math.max(i,a)&&clearInterval(e),Math.min(t+10*Math.random(),a)))},500)},[a]),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:d().bar,children:[(0,n.jsx)(s.Z,{sx:{width:"100%"},children:(0,n.jsx)(l.Z,{variant:"determinate",value:i})}),(0,n.jsxs)("div",{className:d().dot_rap,children:[(0,n.jsx)("div",{style:i>=12?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:i>=25?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:i>=38?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:i>=49?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:i>=62?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:i>=74?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:i>=87?{background:" #1FB906"}:{background:"#7B8794"}}),(0,n.jsx)("div",{style:i>=100?{background:" #1FB906"}:{background:"#7B8794"}})]})]})})}},5131:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return v}});var n=t(5893),o=t(7294),l=t(5675),s=t.n(l),i=t(1573),d=t.n(i),r=t(1317),c=t(8797),g=t(539),_={src:"/_next/static/media/deleteroom.dd745aa6.svg",height:24,width:24,blurWidth:0,blurHeight:0},h=t(5333),u=t(5796),p=t(913),m=t(7894),x=e=>{let{removeItemOnce:a,index:t,photo:l,photoTypeHandller:i}=e,[r,c]=o.useState("");return(0,n.jsxs)(n.Fragment,{children:[" ",l&&(0,n.jsxs)("div",{className:d().single_image_cont,children:[(0,n.jsx)(s(),{style:""==r?{opacity:"0.4"}:{opacity:"1"},src:l,width:327,height:150,alt:"dd"}),(0,n.jsxs)("div",{className:d().drop_sec,children:[(0,n.jsx)(h.Z,{sx:{minWidth:100},children:(0,n.jsx)(p.Z,{sx:{m:1,minWidth:120},children:(0,n.jsxs)(m.Z,{value:r,onChange:e=>{i(l,e.target.value),c(e.target.value)},displayEmpty:!0,inputProps:{"aria-label":"Without label"},children:[(0,n.jsx)(u.Z,{value:"",children:"Choose Image Type"}),["deluxe","hannymoon","excutive"].map((e,a)=>(0,n.jsx)(u.Z,{value:e,children:e},a))]})})}),(0,n.jsx)("button",{style:{border:"none",background:"none"},onClick:()=>a(t),value:t,children:(0,n.jsx)(s(),{src:_,alt:"d"})})]})]},t)]})},A=t(6154),v=()=>{let[e,a]=(0,o.useState)([]),[t,l]=o.useState("");function i(t){console.log(t),console.log("55555=>",e);let n=e.splice(t,1);console.log(e,n),a([...e])}console.log("photo",e.length);let _=(t,n)=>{let o=e.findIndex(e=>e.path==t);e[o].name=n,a([...e]),console.log(e)};return(0,n.jsxs)("div",{className:d().main,children:[(0,n.jsxs)("div",{className:d().into_cont,children:[(0,n.jsx)("h1",{children:"Add Images"})," ",(0,n.jsx)(s(),{src:r.Z,alt:"dd"})]}),(0,n.jsx)("div",{children:(0,n.jsx)(c.Z,{updatevalue:87,prieveasevalue:74})}),(0,n.jsxs)("div",{className:d().img_cont,children:[(0,n.jsxs)("div",{className:d().roomtext,children:[(0,n.jsx)("h1",{children:"Upload images and choose image type"}),(0,n.jsxs)("div",{className:d().upload_btn,children:[(0,n.jsxs)("label",{htmlFor:"image_btn",children:[(0,n.jsx)(s(),{src:g.Z,alt:"d"}),(0,n.jsx)("h2",{children:"UPLOAD"})]}),(0,n.jsx)("input",{id:"image_btn",type:"file",onChange:t=>{let n=t.target.files[0];console.log(n);let o=new FormData;o.append("file",n),A.Z.post("https://revivohotelmanagment-app.onrender.com/logoupload",o).then(t=>{console.log(t),a([...e,{name:"",path:t.data}])}).catch(e=>console.log(e))},accept:".png,.jpg"})]})]}),e.length>0&&e.map((e,a)=>(0,n.jsx)(x,{removeItemOnce:i,photo:e.path,photoTypeHandller:_},a))]}),(0,n.jsxs)("div",{className:e.length<=2?d().btn_rap:d().btn_rap_scroll,children:[(0,n.jsx)("button",{children:"BACK"}),(0,n.jsx)("button",{onClick:()=>{A.Z.post("https://revivohotelmanagment-app.onrender.com/api/hoteldata/room/upload",{photos:e},{headers:{authorization:localStorage.getItem("SavedToken")}}).then(e=>console.log(e)).catch(e=>console.log(e))},children:"CONTINEU"})]})]})}},902:function(e){e.exports={main:"enterdetails_main__RFu_x",logo_cont:"enterdetails_logo_cont__0g70Q",upload_cont:"enterdetails_upload_cont__htOK3",dot_rap:"enterdetails_dot_rap__156R6",bar:"enterdetails_bar__ycp_H"}},1573:function(e){e.exports={main:"uploadimage_main__Wr08E",into_cont:"uploadimage_into_cont__is_ob",img_cont:"uploadimage_img_cont__zwZZR",roomtext:"uploadimage_roomtext__rzUSS",upload_btn:"uploadimage_upload_btn__z6kWo",photos_rap:"uploadimage_photos_rap___5P1u",single_image_cont:"uploadimage_single_image_cont__J3mSi",main_image:"uploadimage_main_image__NU2RS",drop_sec:"uploadimage_drop_sec__WmUJD",btn_rap:"uploadimage_btn_rap__B4WyF",btn_rap_scroll:"uploadimage_btn_rap_scroll__RLmlG"}}},function(e){e.O(0,[675,964,154,113,774,888,179],function(){return e(e.s=5839)}),_N_E=e.O()}]);