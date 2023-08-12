import * as React from "react";
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";

import Box from "@mui/material/Box";
import styles from "../styles/enterdetails.module.css";

const Statusbar = ({ updatevalue, prieveasevalue }: any) => {
  const [progress, setProgress] = React.useState(prieveasevalue);

  React.useEffect(() => {
    const timer = setInterval(() => {
      console.log("jjj");

      setProgress((oldProgress: number) => {
        if (oldProgress ==Math.max(progress, updatevalue)) {
          clearInterval(timer);
        }
        const diff = Math.random() * 10;

        return Math.min(oldProgress + diff, updatevalue);
      });
    }, 500);
  }, [updatevalue]);

  return (
    <>
      <div className={styles.bar}>
        <Box sx={{ width: "100%" }}>
          <LinearProgress variant="determinate" value={progress} />
        </Box>

        <div className={styles.dot_rap}>
          <div
            style={
              progress >= 12
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
          <div
            style={
              progress >= 25
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
          <div
            style={
              progress >= 38
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
          <div
            style={
              progress >= 49
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
          <div
            style={
              progress >= 62
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
          <div
            style={
              progress >= 74
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
          <div
            style={
              progress >= 87
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
          <div
            style={
              progress >= 100
                ? { background: " #1FB906" }
                : { background: "#7B8794" }
            }
          ></div>
        </div>
      </div>
    </>
  );
};

export default Statusbar;
