import { useEffect, useState, useRef } from 'react';
import MainTitle from '../components/MainTitle';
import Countdown from 'react-countdown';
import Timer from '../components/Timer';
import LengthControl from '../components/LengthControl';
import TimerControl from '../components/TimerControl';

const HomePage = () => {
  const countdownRef = useRef(null);
  const [session, setSession] = useState(true);
  const [sessionTime, setSessionTime] = useState(25);
  const [breakTime, setBreakTime] = useState(5);
  const [isPaused, setIsPaused] = useState(true);

  let defaultSession = 25;
  let defaultBreak = 5;

  const pageStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "100px",
    color: "white",
    fontStyle: "sans-serif",
  }

  const lengthControlStyle = {
    display: "flex",
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-evenly",
    marginTop: "30px"
  }

  const bgColor = "#465e85";

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.margin = "0px";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    }
  }, [])

  const handleCompletion = () => {
    setTimeout(() => {setSession(prev => !prev);}, 1000);
  }

  const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      return <span>00:00</span>;
    } else {
      return <span>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span>
    }
  }

  const handleSessionIncrement = () => {
    setSessionTime(prev => prev + 1);
  }

  const handleSessionDecrement = () => {
    setSessionTime(prev => prev - 1);
  }

  const handleBreakIncrement = () => {
    setBreakTime(prev => prev + 1);
  }

  const handleBreakDecrement = () => {
    setBreakTime(prev => prev - 1);
  }


  return (
  <div style={pageStyle}>
    <MainTitle />
    <Timer ofType={session ? "Session" : "Break"} timeLeft={
      <Countdown date={session ? (Date.now() + 0.1 * 60000) : (Date.now() + breakTime * 60000)}
      renderer={renderer}
      ref={countdownRef}
      onComplete={handleCompletion}
      />
    } />
    <div id="length-control-div" style={lengthControlStyle}>
      <LengthControl ofType="break" handleIncrement={handleBreakIncrement} handleDecrement={handleBreakDecrement} initialValue={breakTime} />
      <LengthControl ofType="session" handleIncrement={handleSessionIncrement} handleDecrement={handleSessionDecrement} initialValue={sessionTime} />
    </div>
    <TimerControl />
  </div>
  )
}

export default HomePage;
