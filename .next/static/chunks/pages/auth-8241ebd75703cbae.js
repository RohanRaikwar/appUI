(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[473],{4661:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth",function(){return o(7587)}])},6900:function(e,t,o){"use strict";o.d(t,{Z:function(){return i}});var s=o(5893);o(7294);var n=o(6789),a=o.n(n);function i(){return(0,s.jsx)("div",{className:a().maincont,children:(0,s.jsx)("div",{className:a().loaderbox,children:(0,s.jsx)("span",{className:a().loader})})})}},7587:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return q}});var s=o(5893),n=o(7294),a=o(5675),i=o.n(a),l=o(2546),r={src:"/_next/static/media/slide2.cbcaa610.svg",height:271,width:281,blurWidth:0,blurHeight:0},c={src:"/_next/static/media/slide21.28cfc52d.svg",height:256,width:281,blurWidth:0,blurHeight:0},d={src:"/_next/static/media/slid31.7e566a49.svg",height:283,width:280,blurWidth:0,blurHeight:0},h=o(4588),_=o.n(h);o(4950),o(4256);var p=o(4988);function u(){return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(l.tq,{spaceBetween:30,pagination:{clickable:!0},modules:[p.tl],className:"myswiper",children:[(0,s.jsx)(l.o5,{children:(0,s.jsxs)("div",{className:_().slide_rap,children:[(0,s.jsx)(i(),{className:_().img,src:r,alt:"slid"}),(0,s.jsx)("h1",{children:"Automate your hotel"}),(0,s.jsx)("h2",{children:"Control and maximise your revenues and bookings like never before."})]})}),(0,s.jsx)(l.o5,{children:(0,s.jsxs)("div",{className:_().slide_rap,children:[(0,s.jsx)(i(),{className:_().img,src:c,alt:"slid"}),(0,s.jsx)("h1",{children:"all bookings at fingertip"}),(0,s.jsx)("h2",{children:"Get all your walk in and online bookings at one place."})]})}),(0,s.jsx)(l.o5,{children:(0,s.jsxs)("div",{className:_().slide_rap,children:[(0,s.jsx)(i(),{className:_().img,src:d,alt:"slid"}),(0,s.jsx)("h1",{children:"AUTO OPTIMIZE ROOM STATUS"}),(0,s.jsx)("h2",{children:"Once your rooms get booked any where or checked out it optimizes every where"})]})})]})})}var m=o(6635),x=o.n(m),g={src:"/_next/static/media/smalllogo.e084aefa.svg",height:32,width:174,blurWidth:0,blurHeight:0},j=o(9776),b=o.n(j),v={src:"/_next/static/media/iconoir_cancel.6512cb85.svg",height:36,width:36,blurWidth:0,blurHeight:0},N=o(7536),f=o(6900),w=o(5203),k=o.n(w),y=o(8386),S=o(6154),I=o(1163),C=e=>{var t;let{otdown:o,phone:a,requesturl:l,setloadershow:r,loadershow:c}=e,{register:d,formState:{errors:h},handleSubmit:_,setError:p}=(0,N.cI)(),u=(0,I.useRouter)(),[m,x]=(0,n.useState)("");return(0,s.jsxs)("div",{className:k().main,children:[(0,s.jsxs)("div",{className:k().cont_name,children:[(0,s.jsx)("h1",{children:"OTP Verification"})," ",(0,s.jsx)(i(),{onClick:()=>{o(),x("")},src:v,alt:"dd"})]}),(0,s.jsxs)("div",{className:k().otp_rap,children:[(0,s.jsx)("h1",{children:"Code sent to ".concat(a)}),(0,s.jsx)(y.Z,{value:m,onChange:x,numInputs:4,renderSeparator:(0,s.jsx)("span",{}),renderInput:e=>(0,s.jsx)("input",{...e})}),(null===(t=h.otp)||void 0===t?void 0:t.type)==="server"&&(0,s.jsx)("p",{style:{color:"red",margin:"0px",position:"absolute"},children:"invalide otp"}),(0,s.jsxs)("div",{className:k().resend_rap,children:[(0,s.jsx)("h1",{children:"Didn’t recieve this code?"})," ",(0,s.jsx)("h2",{children:"Resend"})]}),(0,s.jsx)("button",{className:k().otp_btn,onClick:()=>{r(!1),console.log(l),S.Z.post(l,{mobile_no:a,otp:m}).then(e=>{console.log(e.data);let t=e.data.token,o=localStorage.getItem("SavedToken");o&&localStorage.removeItem("SavedToken"),localStorage.setItem("SavedToken","Bearer "+t),S.Z.defaults.headers.common.Authorization="Bearer "+t,r(!0),u.push("http://localhost:3000/welcome")}).catch(e=>{r(!0),p("otp",{type:"server",message:"invalide otp"}),console.log(e)})},children:"GET OTP"})]})]})},O=e=>{var t;let{setauth:o,otpup:a,setotpup:l}=e,[r,c]=(0,n.useState)(!0),{register:d,setError:h,formState:{errors:_},handleSubmit:p}=(0,N.cI)(),[u,m]=(0,n.useState)(!0),[x,g]=(0,n.useState)(""),[j,w]=(0,n.useState)(!0),[k,y]=(0,n.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:r?{display:"none"}:{display:"block",position:"absolute",zIndex:"100000"},children:(0,s.jsx)(f.Z,{})}),(0,s.jsxs)("section",{className:b().main,children:[(0,s.jsxs)("div",{className:b().login_sec,children:[(0,s.jsx)("h1",{children:"LOGIN"})," ",(0,s.jsx)(i(),{onClick:()=>{o(),console.log("click")},src:v,alt:"dd"})]}),(0,s.jsxs)("div",{className:b().loginfild,children:[(0,s.jsx)("h1",{children:"Enter your Mobile No."}),(0,s.jsx)("h2",{children:"You will recieve a 4 digit code to verify next"}),(0,s.jsxs)("form",{onSubmit:p(e=>{c(!1),console.log(e),S.Z.post("https://revivohotelmanagment-app.onrender.com/auth/api/login/otp",e).then(t=>{c(!0),y(e.mobile_no),console.log(t.data),m(!u)}).catch(e=>{console.log(e),c(!0),h("mobile_no",{type:"server",message:"User are not found"})})}),children:[(0,s.jsx)("input",{type:"text",pattern:"[0-9]*",required:!0,inputMode:"numeric",maxLength:10,placeholder:"Mobile No.",...d("mobile_no",{required:!0})}),(null===(t=_.mobile_no)||void 0===t?void 0:t.type)=="server"&&(0,s.jsx)("p",{style:{margin:"0px",color:"red",position:"absolute",bottom:"166px",fontSize:"13px"},children:"*User are Not found"}),(0,s.jsxs)("div",{className:b().chack_rap,children:[(0,s.jsx)("input",{className:b().akar_icons_check_box_fil,onChange:()=>{w(!j)},type:"checkbox",name:"checkbox"}),(0,s.jsxs)("h3",{children:["I agree to all the ",(0,s.jsx)("span",{children:"terms and conditions"})]})]}),(0,s.jsx)("button",{disabled:j,className:j?b().deoptbtn:b().otpgetbtn,children:"Get OTP"})]})]}),(0,s.jsx)("div",{style:u?{top:"0px"}:{top:"-56rem"},className:u?b().otp:b().otp_down,children:(0,s.jsx)(C,{otdown:()=>{m(!u),console.log("otpdown")},phone:k,setloadershow:c,loadershow:r,requesturl:"https://revivohotelmanagment-app.onrender.com/auth/api/login"})})]})]})},T=e=>{var t;let{setauth:o}=e,{register:a,setError:l,formState:{errors:r},handleSubmit:c}=(0,N.cI)(),[d,h]=(0,n.useState)(!0),[_,p]=(0,n.useState)(!0),[u,m]=(0,n.useState)(!0),[x,g]=(0,n.useState)("");return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{style:_?{display:"none"}:{display:"block",position:"absolute",zIndex:"100000"},children:(0,s.jsx)(f.Z,{})}),(0,s.jsxs)("section",{className:b().main,children:[(0,s.jsxs)("div",{className:b().login_sec,children:[(0,s.jsx)("h1",{children:"SIGNUP"})," ",(0,s.jsx)(i(),{onClick:()=>{o(),console.log("click")},src:v,alt:"dd"})]}),(0,s.jsxs)("div",{className:b().loginfild,children:[(0,s.jsx)("h1",{children:"Enter your Mobile No."}),(0,s.jsx)("h2",{children:"You will recieve a 4 digit code to verify next"}),(0,s.jsxs)("form",{onSubmit:c(e=>{p(!1),S.Z.post("https://revivohotelmanagment-app.onrender.com/auth/api/signup/otp",{mobile_no:e.firstName}).then(t=>{console.log(t.data),p(!0),t.data.message==="your otp has been sent to ".concat(e.firstName)&&(h(!d),g(e.firstName),console.log(d))}).catch(e=>{p(!0),console.log(_),console.log(e.response),l("firstName",{type:"server",message:"user are already exist"})})}),children:[(0,s.jsx)("input",{type:"text",pattern:"[0-9]*",required:!0,inputMode:"numeric",maxLength:10,...a("firstName",{required:!0}),"aria-invalid":r.firstName?"true":"false",placeholder:"Mobile No."}),(null===(t=r.firstName)||void 0===t?void 0:t.type)==="server"&&(0,s.jsx)("p",{style:{margin:"0px",color:"red",position:"absolute",bottom:"166px",fontSize:"13px"},children:"*User are already exist "}),(0,s.jsxs)("div",{className:b().chack_rap,children:[(0,s.jsx)("input",{className:b().akar_icons_check_box_fil,onChange:()=>{m(!u)},type:"checkbox",name:"checkbox"}),(0,s.jsxs)("h3",{children:["I agree to all the ",(0,s.jsx)("span",{children:"terms and conditions"})]})]}),(0,s.jsx)("button",{disabled:u,className:u?b().deoptbtn:b().otpgetbtn,children:"Get OTP"})]})]}),(0,s.jsx)("div",{style:d?{top:"0px"}:{top:"-56rem"},className:b().otp_down,children:(0,s.jsx)(C,{otdown:()=>{h(!d),console.log("otpdown")},setloadershow:p,loadershow:_,phone:x,requesturl:"https://revivohotelmanagment-app.onrender.com/auth/api/signup"})})]})]})},q=()=>{let[e,t]=(0,n.useState)(!1),[o,a]=(0,n.useState)(),[l,r]=(0,n.useState)(!1),c=()=>{t(!e),console.log("click")};return(0,s.jsxs)("section",{className:x().main,children:[(0,s.jsx)("div",{className:x().logosec,children:(0,s.jsx)(i(),{className:x().logo,src:g,alt:"logo"})}),(0,s.jsxs)("main",{className:x().sliderbox,children:[(0,s.jsx)("div",{children:(0,s.jsx)(u,{})}),(0,s.jsxs)("div",{className:x().btn_cont,children:[(0,s.jsx)("button",{onClick:()=>{a(!0),t(!0)},className:x().btn1,children:"SIGN UP"}),(0,s.jsx)("button",{onClick:()=>{a(!1),t(!0)},className:x().btn2,children:"LOG IN"})]})]}),(0,s.jsx)("div",{style:e?{top:"0px"}:{top:"56rem"},className:x().auth_cont_doun,children:o?(0,s.jsx)(T,{setotpup:r,setauth:c}):(0,s.jsx)(O,{setotpup:r,otpup:l,setauth:c})})]})}},9776:function(e){e.exports={main:"login_main__BCJax",login_sec:"login_login_sec__MdIWV",loginfild:"login_loginfild__gjxF2",chack_rap:"login_chack_rap__DEpOO",otpgetbtn:"login_otpgetbtn__Dm4dv",otp:"login_otp__uC_b3",otp_down:"login_otp_down__usz_3",deoptbtn:"login_deoptbtn__zSNYG"}},5203:function(e){e.exports={main:"otp_main__E_7Dg",cont_name:"otp_cont_name__sFRxj",otp_rap:"otp_otp_rap__vuqqx",resend_rap:"otp_resend_rap__7u3pP",otp_btn:"otp_otp_btn__u7597"}},6789:function(e){e.exports={maincont:"Loader_maincont__9WcsN",loaderbox:"Loader_loaderbox__t7Cqw",loader:"Loader_loader__i4tH_",spin:"Loader_spin__u_YMA",rotate:"Loader_rotate__sBjDN",rotateccw:"Loader_rotateccw__Zt7Uq"}},6635:function(e){e.exports={main:"auth_main__6Rvo9",sliderbox:"auth_sliderbox__FlQXy","swiper-wrapper":"auth_swiper-wrapper__IBfxg",logosec:"auth_logosec__7MoFD",logo:"auth_logo__XoJGC",btn_cont:"auth_btn_cont__i8DDq",btn1:"auth_btn1__RrG2g",btn2:"auth_btn2__VuRVK",auth_cont:"auth_auth_cont__PgISQ",auth_cont_doun:"auth_auth_cont_doun__hbHjw",otp:"auth_otp__i9MFH",otp_up:"auth_otp_up__umb_7"}},4588:function(e){e.exports={img:"imageslider_img__Y8iqw",slide_rap:"imageslider_slide_rap__QLJzM"}}},function(e){e.O(0,[675,154,536,600,774,888,179],function(){return e(e.s=4661)}),_N_E=e.O()}]);