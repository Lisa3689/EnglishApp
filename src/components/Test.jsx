import { useEffect } from "react";

const Test = () => {
  const getDataFromLS = () => {
    //достаете данные из LS
  };

  useEffect(() => {
    getDataFromLS();
  }, []);

  return <div>hey</div>;
};

export default Test;
