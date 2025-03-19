import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const LengthControl = ({ ofType, initialValue, onButtonClick }) => {

  const toCapitalLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const divStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    color: "white",
    fontFamily: "sans-serif",
    height: "120px",
    width: "250px",
    fontSize: "30px",
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
          <FaArrowDown />
        </button>
        <p id={`${ofType}-length`}>{initialValue}</p>
        <button id={`${ofType}-increment`}>
          <FaArrowUp />      
        </button>
      </div>
    </div>
  )
}

export default LengthControl;
