const Timer = ({ ofType, timeLeft }) => {
  
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    height: "170px",
    width: "290px",
    fontSize: "30px",
    color: "white",
    border: "6px solid #2b255c",
    borderRadius: "15px",
    fontFamily: "sans-serif"
  }

  return (
    <div style={divStyle}>
      <p id="timer-label">{ofType}</p>
      <h2 id="time-left">{timeLeft}</h2>
    </div>
  )
}

export default Timer;
