import { useEffect, useState, useRef } from 'react';
import MainTitle from '../components/MainTitle';
import Countdown from 'react-countdown';
import Timer from '../components/Timer';
import LengthControl from '../components/LengthControl';
import TimerControl from '../components/TimerControl';

const HomePage = () => {
  const countdownRef = useRef(null);
  const [session, setSession] = useState(true);
  const [timeLeft, setTimeLeft] = useState(Date.now() + 25 * 60000);
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

  useEffect(() => {
    setTimeLeft(Date.now() + (session ? 0.1 : 5) * 60000);
  }, [session])

  const handleCompletion = () => {
    setSession(prev => !prev);
  }

  const renderer = ({minutes, seconds, completed}) => {
    if (completed) {
      handleCompletion();
      return <></>;
    } else {
      return <span>{minutes.toString().padStart(2, "0")}:{seconds.toString().padStart(2, "0")}</span>
    }
  }

  return (
  <div style={pageStyle}>
    <MainTitle />
    <Timer ofType={session ? "Session" : "Break"} timeLeft={
      <Countdown date={timeLeft}
      renderer={renderer}
      ref={countdownRef}
      onComplete={() => setSession(!session)}
      />
    } />
    <div id="length-control-div" style={lengthControlStyle}>
      <LengthControl ofType="break" initialValue={defaultBreak} />
      <LengthControl ofType="session" initialValue={defaultSession} />
    </div>
    <TimerControl />
  </div>
  )
}

export default HomePage;
