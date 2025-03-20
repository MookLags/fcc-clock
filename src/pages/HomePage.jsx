import { useEffect, useState, useRef } from 'react';
import MainTitle from '../components/MainTitle';
import Countdown from 'react-countdown';
import Timer from '../components/Timer';
import LengthControl from '../components/LengthControl';
import TimerControl from '../components/TimerControl';

const HomePage = () => {
  const countdownRef = useRef(null);
  const [session, setSession] = useState(true);
  const [sessionTime, setSessionTime] = useState(0.1);
  const [breakTime, setBreakTime] = useState(0.1);
  const [isPaused, setIsPaused] = useState(true);
  const [displayTime, setDisplayTime] = useState(sessionTime);
  const [startTime, setStartTime] = useState(0);

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
    setDisplayTime(Date.now() + (session ? sessionTime : breakTime) * 60000);
  }, [session, sessionTime, breakTime]);

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.margin = "0px";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    }
  }, [])

  const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      return <span>00:00</span>
    } else {
      return <span>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span>
    }
  }

  const handleSessionIncrement = () => {
    if (!isPaused) return;
    setSessionTime(prev => prev + 1);
  }

  const handleSessionDecrement = () => {
    if (!isPaused) return;
    setSessionTime(prev => prev - 1);
  }

  const handleBreakIncrement = () => {
    if (!isPaused) return;
    setBreakTime(prev => prev + 1);
  }
  const handleBreakDecrement = () => {
    if (!isPaused) return;
    setBreakTime(prev => prev - 1);
  }

  const startStop = () => {
    if (isPaused) {
      countdownRef.current.getApi().start();
      setIsPaused(false)
    } else {
      const remainingTime = displayTime - Date.now();
      setDisplayTime(Date.now() + remainingTime);
      countdownRef.current.getApi().pause();
      setIsPaused(true)
    }
  }

  const handleReset = () => {
    if (!isPaused) return;
    setSession(true);
    setIsPaused(true);
    setSessionTime(25);
    setBreakTime(5);
    setStartTime(0);
    setDisplayTime(Date.now() + (session ? sessionTime : breakTime) * 60000);
  }

  const handleCompletion = () => {
    setTimeout(() => {
      setSession(prev => !prev);
    }, 1000)

    setTimeout(() => {
      setDisplayTime(Date.now() + (session ? sessionTime : breakTime) * 60000);
      countdownRef.current.getApi().start();
    }, 1100);
  }

  return (
  <div style={pageStyle}>
    <MainTitle />
    <Timer ofType={session ? "Session" : "Break"} timeLeft={
      <Countdown date={displayTime}
      renderer={renderer}
      ref={countdownRef}
      autoStart={false}
      onComplete={handleCompletion}
      />
    } />
    <div id="length-control-div" style={lengthControlStyle}>
      <LengthControl ofType="break" handleIncrement={handleBreakIncrement} handleDecrement={handleBreakDecrement} initialValue={breakTime} />
      <LengthControl ofType="session" handleIncrement={handleSessionIncrement} handleDecrement={handleSessionDecrement} initialValue={sessionTime} />
    </div>
    <TimerControl handleStartStop={startStop} handleReset={handleReset} />
  </div>
  )
}

export default HomePage;
