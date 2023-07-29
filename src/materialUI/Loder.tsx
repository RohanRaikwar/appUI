import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import {
  useEffect
} from 'react'
import {
  Router,
  useRouter
} from 'next/router'
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from '@mui/material/CircularProgress';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

const BorderLinearProgress:any = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  width:278,
  marginTop:281,
  marginLeft:49,
  position:'absolute',
  bottom:100,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === 'light' ? '#1a90ff' : '#308fe8',
  },
}));

// Inspired by the former Facebook spinners.


export default function CustomizedProgressBars() {
   const router = useRouter();
  
    const [progress, setProgress]:any = React.useState(10);

    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress:any) => (prevProgress >= 100 ? router.push("/auth") : prevProgress + 10));
       

      }, 700);
      return () => {
        clearInterval(timer);
      };
    }, []);
  return (
    <Box sx={{ flexGrow: 1 }}>
    
      <BorderLinearProgress variant="determinate" value={progress} />
    </Box>
  );
}