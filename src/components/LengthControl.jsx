import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const LengthControl = ({ ofType }) => {
  const divStyle = {
    border: "1px solid #2b255c"
  }
  return (
    <div style={divStyle}>
      <p id={`${ofType}-label`}></p>
      <button id={`${ofType}-decrement`}>
        <FaArrowUp />      
      </button>
      <p id={`${ofType}-length`}></p>
      <button id={`${ofType}-decrement`}>
        <FaArrowDown />
      </button>
    </div>
  )
}

export default LengthControl;
