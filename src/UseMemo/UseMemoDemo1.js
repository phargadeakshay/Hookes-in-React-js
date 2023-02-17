import React, { useState, useMemo } from "react";

const UseMemoDemo1 = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const increament = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("🚀 ~ line ~ countNumber ~ num", num,show);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  // subscribe to thapa technical

  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

//   const checkData = countNumber(myNum)
  return (
    <>
      <button onClick={increament} style={{ backgroundColor: "red" }}>Counter</button>
      <p> My new number : {checkData} </p>
      <button onClick={() => setShow(!show)}>{show ? "You clicked me" : "Click me plz"}</button>
    </>
  );
};

export default UseMemoDemo1;