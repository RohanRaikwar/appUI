import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import styles from "./loader.module.css"

export default function Circularloader() {
  return (
    <div className={styles.maincont}>
      <div className={styles.loaderbox}>
      <span className={styles.loader}></span>
     
    </div>
      
    </div>
    
  );
}