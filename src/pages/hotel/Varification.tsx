import React, { useState } from "react";
import styles from "../../styles/varification.module.css";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import logo from "../../../public/Frame 2655 1.png";
import Processbar from "../../materialUI/Statusbar";
import upload1 from "../../../public/hotelpub/fileupload1.png";
import Circularloader from "../../materialUI/Circularloader";
import { File } from "buffer";
import axios from "axios";
import type { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

import camera from "../../../public/cemara 2.svg";
import cross from "./../../../public/Group.png";
import gallery from "./../../../public/gallery.svg";
const Varification = () => {
  const router = useRouter()
  const [status, setstatus] = useState<any>([]);
  const [pancard64, setpancard64] = useState<string>("");
  const [bank64, setbank64] = useState<any>("");
  const [gst64, setgst64] = useState<any>("");
  const [loadershow, setloadershow] = useState(true);
  const [uptypedoc_const, setuptypedoc_const] = useState(false);
  const [doctype, setdoctype] = useState("");
  const [docbase64, setdoc64] = useState("");
  const [err,seterr] = useState<boolean>(false)

  function convertImagepan(e: any, type: any) {
    const file = e.target.files[0];
    console.log(file, "run");

    if (!file) {
      alert("Please select an image file.");
      return;
    }

    const reader = new FileReader();

    reader.onload = function (e: any) {
      const base64String = e.target.result;
      if (type == "pancard") {
        setpancard64(base64String);
      }
      if (type == "bank") {
        setbank64(base64String);
      }
      if (type == "gst") {
        setgst64(base64String);
        console.log(base64String);
        
      }
      if (type == "verydoc") {
        if(doctype.length<=0){
          seterr(true)
          console.log("challa hai");
          
            return 
          
        }
        setdoc64(base64String);
        console.log(base64String);
        
        console.log(docbase64, "click");

        docttypehandler(base64String);
      }

      // Do something with the Base64 string, like sending it to the server, etc.
    };

    reader.onerror = function (error) {
      console.error("Error converting image:", error);
    };

    reader.readAsDataURL(file);
  }

  const requesthandller = () => {
    setstatus([pancard64, bank64, gst64]);
    console.log(status);

    if (pancard64 && bank64 && gst64) {
      setloadershow(false);
      axios
        .post(
          "https://revivohotelmanagment-app.onrender.com/api/hoteldata/varification/docs/upload",
          {
            pancard: pancard64,
            GSTcertificate: gst64,
            bankaccount: bank64,
          },
          {
            headers: {
              authorization: localStorage.getItem("SavedToken"),
            },
          }
        )
        .then((res) => {
          console.log(res);

          setloadershow(true);
          setuptypedoc_const(true);
        })
        .catch((err) => {
          setloadershow(true);

          console.log(err);
        });
    }
  };

  const doctypefunc = (e: any) => {
    setdoctype(e.target.value);

    console.log(doctype);
  };
  const docttypehandler = (base64String: any) => {
    

    setloadershow(false);
    console.log(base64String);

    axios
      .post(
        "https://revivohotelmanagment-app.onrender.com/api/hoteldata/varification/choose/docx",
        {
          typedocs: doctype,
          varification_image: base64String,
        },
        {
          headers: {
            authorization: localStorage.getItem("SavedToken"),
          },
        }
      )
      .then((res) => {
        
        setloadershow(true);
        if(res.data.completedstage=="typeof vari docs uploaded"){
          router.push("http://localhost:3000/hotel/addrooms")

        }
      }).catch(err=>console.log(err)
      );
  };

  return (
    <>
      <div style={loadershow ? { display: "none" } : { display: "block" }}>
        <Circularloader />
      </div>
      <div className={styles.main}>
        <div className={styles.logo}>
          <h1>Documents Verification</h1>
          <Image src={logo} alt="dd" />
        </div>
        <Processbar updatevalue={25} prieveasevalue={12} />
        <div className={styles.docs}>
          <h1>Submit documents for verification</h1>
          <div className={styles.doc_rap}>
            <div className={styles.pan_rap}>
              <h2>Pan Card</h2>{" "}
              <label htmlFor="pan">
                <Image src={upload1} alt="ss" />
                <h3>UPLOAD</h3>
                <input
                  style={{ visibility: "hidden" }}
                  type="file"
                  id="pan"
                  onChange={(e) => convertImagepan(e, "pancard")}
                  accept=".png,.jpg,.pfg"
                />
              </label>
            </div>
            {status[0] == false && <span>*Pancard is required</span>}
          </div>
          <div className={styles.doc_rap}>
            <div className={styles.pan_rap}>
              <h2>Bank Passbook</h2>{" "}
              <label htmlFor="bank">
                <Image src={upload1} alt="ss" />
                <h3>UPLOAD</h3>
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                onChange={(e) => convertImagepan(e, "bank")}
                id="bank"
                accept=".png,.jpg,.pfg"
              />
            </div>
            {status[1] == false && <span>*bank Passbook is required</span>}
          </div>
          <div className={styles.doc_rap}>
            <div className={styles.pan_rap}>
              <h2>GST certificate</h2>{" "}
              <label htmlFor="gst">
                <Image src={upload1} alt="ss" />
                <h3>UPLOAD</h3>
              </label>
              <input
                type="file"
                id="gst"
                style={{ display: "none" }}
                onChange={(e) => convertImagepan(e, "gst")}
                accept=".png,.jpg,.pfg"
              />
            </div>
            {status[2] == false && <span>*GST certificate is required</span>}
          </div>
        </div>

        <h4>Only pdf, jpeg, png documents allowed. (Max 1 MB)</h4>
        <div className={styles.btn_rap}>
          <button>BACK</button>
          <button onClick={requesthandller}>CONTINEU</button>
        </div>
        <div
          style={uptypedoc_const ? { top: "325px" } : { top: "812px" }}
          className={styles.typecont}
        >
          <div className={styles.name_cont}>
            <h1>Select & Upload</h1>
            <Image
              src={cross}
              alt="dd"
              onClick={() => setuptypedoc_const(false)}
              style={{ width: "21px", height: "21px" }}
            />
          </div>
          <div className={styles.formcont}>
            <p>Choose your document</p>
            <div className={styles.checkboxcont}>
              <div>
                <input
                  type="radio"
                  id="html"
                  name="fav_language"
                  onClick={doctypefunc}
                  value="Cancelled Cheque"
                />
                <div className={styles.costumcheckbox}></div>
                <label htmlFor="html">Cancelled Cheque</label>
                <br />
              </div>
              <div>
                <input
                  type="radio"
                  id="css"
                  name="fav_language"
                  onClick={doctypefunc}
                  value="Passbook"
                />
                <div className={styles.costumcheckbox}></div>
                <label htmlFor="css">Passbook</label>
              </div>

              <div>
                {" "}
                <input
                  type="radio"
                  id="javascript"
                  name="fav_language"
                  onClick={doctypefunc}
                  value="Bank Account Statement"
                />
                <div className={styles.costumcheckbox}></div>
                <label htmlFor="javascript">Bank Account Statement</label>
              </div>
              {(err&&(doctype.length<=0))&&<p style={{position:"absolute",color:"red",fontSize:"13px",bottom:"135px"}}>*Please Select Document</p>}
            </div>
            <div className={styles.btn_cont}>
              <button className={styles.back_btn}>
                <Image src={camera} alt="dd" /> Cemara
              </button>{" "}
              <label htmlFor="dd">
                <Image src={gallery} alt="ss" />
                GALLERY
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="dd"
                  onChange={(e) => convertImagepan(e, "verydoc")}
                  accept=".png,.jpg,.pfg"
                />
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Varification;
