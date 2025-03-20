import { HiMiniPlayPause } from "react-icons/hi2";
import { RiResetRightLine } from "react-icons/ri";
import { useState } from 'react';

const TimerControl = ({ handleStartStop, handleReset }) => {
  const [isHovered, setIsHovered] = useState(false);

  const divStyle = {
    fontSize: "35px",
    cursor: isHovered ? "pointer" : "default"
  }

  return (
    <div style={divStyle}>
      <HiMiniPlayPause id="start_stop"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      />
      <RiResetRightLine id="reset" 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      />
    </div>
  )
}

export default TimerControl;
