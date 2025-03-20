const Timer = ({ ofType, timeLeft }) => {
  
  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginTop: "15px",
    height: "170px",
    width: "290px",
    fontSize: "30px",
    color: "white",
    border: "6px solid #2b255c",
    borderRadius: "50px",
    fontFamily: "sans-serif"
  }

  return (
    <div style={divStyle}>
      <p style={{margin: "0", marginTop: "5px"}} id="timer-label">{ofType}</p>
      <h2 style={{margin: "0", marginBottom: "5px"}} id="time-left">{timeLeft}</h2>
    </div>
  )
}

export default Timer;
