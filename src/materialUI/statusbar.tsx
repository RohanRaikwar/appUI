
import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import styles from "../styles/enterdetails.module.css"

const statusbar = () => {
    const [progress, setProgress] = React.useState(0);
    const [updatetime,setupdatetime]= React.useState(12)
    console.log(updatetime);
    

    React.useEffect(() => {
      const timer = setInterval(() => {
        
        
    
           setProgress((oldProgress) => {
          if (oldProgress ===  Math.max(12,updatetime)) {
             clearInterval(timer);
          }
          const diff = Math.random() * 10;
          
          return Math.min(oldProgress + diff, updatetime);

        }); 
        
        
        
        
      }, 500);
  
      
    }, [updatetime]);
  
    return (
        <>
        <div className={styles.bar}>
          <Box sx={{ width: '100%' }}>
          <LinearProgress variant="determinate" value={progress} />
        
          </Box>
      
      <div className={styles.dot_rap}>
       
            <div style={progress>=12?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            <div style={progress>=25?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            <div style={progress>=38?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            <div style={progress>=49?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            <div style={progress>=62?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            <div style={progress>=74?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            <div style={progress>=87?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            <div style={progress>=100?{background:" #1FB906"}:{background: "#7B8794"}}></div>
            
        </div>
        </div>
      </>
    );
}

export default statusbar