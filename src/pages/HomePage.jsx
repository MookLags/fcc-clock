import { useEffect } from 'react';

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
    HomePage 
  </div>
  )
}

export default HomePage;
