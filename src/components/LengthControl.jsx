import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const LengthControl = ({ ofType, initialValue }) => {

  const toCapitalLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "120px",
    width: "250px",
    fontSize: "30px",
    color: "white",
    border: "6px solid #2b255c",
    borderRadius: "15px",
    fontFamily: "sans-serif"
  }

  const buttonDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: "auto",
    marginRight: "auto",
    height: "60px",
    width: "50%",
  }
  
  const labelDivStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    height: "60px",
    alignItems: "center",
  }

  return (
    <div style={divStyle}>
        <div style={labelDivStyle}>
        <p id={`${ofType}-label`}>{toCapitalLetter(ofType)} Length</p>
        </div>
      <div style={buttonDivStyle}>
        <button id={`${ofType}-decrement`}>
          <FaArrowUp />      
        </button>
        <p id={`${ofType}-length`}>{initialValue}</p>
        <button id={`${ofType}-decrement`}>
          <FaArrowDown />
        </button>
      </div>
    </div>
  )
}

export default LengthControl;
