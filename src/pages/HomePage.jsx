import { useEffect } from 'react';
import LengthControl from '../components/LengthControl';

const HomePage = () => {

  const bgColor = "#465e85";

  useEffect(() => {
    document.body.style.backgroundColor = bgColor;
    document.body.style.margin = "0px";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    }
  }, [])

  return (
  <div>
    <LengthControl ofType="break" initialValue="5" />
    <LengthControl ofType="session" initialValue="25" />
  </div>
  )
}

export default HomePage;
